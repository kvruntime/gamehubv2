// "use client"
import { useEffect, useState } from "react"
import { FetchResults, Game, GameQuery, Genre, Platform } from "./definitions"
import { AxiosError } from "axios"
import { httpClient } from "./http-client"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useGenericClientHook = <T>(route: string, gameQuery?: GameQuery, deps?: any[]) => {
  const [games, setGames] = useState<T[]>([])
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true)
        const data = (await httpClient.get<FetchResults<T>>(route, {
          params: {
            genres: gameQuery?.genreId,
            platforms: gameQuery?.platformId,
            ordering: gameQuery?.ordering
          }
        })).data
        setGames(data.results)
        setError(null)
      }
      catch (err) {
        err instanceof AxiosError ? setError(err) : setError(null)
        console.log("here", err)
      }
      finally { setIsPending(false) }
    }

    fetchData()
  }, deps ? [...deps] : [])


  return { data: games, error: error, isPending: isPending }
}
export const useElementClientHook = <T>(route: string) => {
  const [item, setItem] = useState<T>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = (await httpClient.get<T>(route)).data
        setIsLoading(true)
        setItem(data)
        setError(null)
      }
      catch (err) {
        err instanceof AxiosError ? setError(err) : setError(null)
        console.log("here", err)
      }
      finally { setIsLoading(false) }
    }

    fetchData()
  }, [])

  if (item) return { data: item, error: error, isLoading }
  else (item)
  return { data: null, error: error, isLoading }
}





export const useGamesClientHook = (gameQuery?: GameQuery, deps?: any[]) => useGenericClientHook<Game>("/games", gameQuery, deps)
export const usePlatformsClientHook = () => useGenericClientHook<Platform>("/platforms")
export const useGenresClientHook = () => useGenericClientHook<Genre>("/genres")
export const useGameClientHook = (id: number) => useElementClientHook<Game>(`/games/${id}`)



export const useGamesHookProvider = (gameQuery?: GameQuery) => useQuery({
  queryKey: ["items", gameQuery ? gameQuery : {}],
  queryFn: () => httpClient.get<FetchResults<Game>>("/games", {
    params: {
      genres: gameQuery?.genreId,
      platforms: gameQuery?.platformId,
      ordering: gameQuery?.ordering
    }
  }).then(res => res.data)
})



export const useInfiniteGameHook = (gameQuery?: GameQuery) => useInfiniteQuery<FetchResults<Game>, Error>({
  queryKey: ["items", gameQuery ? gameQuery : {}],
  initialPageParam: 1,
  queryFn: ({ pageParam }) => httpClient.get<FetchResults<Game>>("/games", {
    params: {
      genres: gameQuery?.genreId,
      platforms: gameQuery?.platformId,
      ordering: gameQuery?.ordering,
      search: gameQuery?.searchGameText,
      page: pageParam
    }
  }).then(res => res.data),
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length : undefined
})

