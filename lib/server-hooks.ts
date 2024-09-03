import { FetchResults, Game, Genre } from "./definitions"
import { httpClient } from "./http-client"

const useGenericHook = async<T>(route: string) => {
  try {
    const data = (await httpClient.get<FetchResults<T>>(route)).data
    return { data: data.results, isError: false }
  }
  catch (err) { return { data: [], isError: true } }

}
export const useGamesHook = async () => useGenericHook<Game>("/games")
export const useGenresHook = async () => useGenericHook<Genre>("/genres")