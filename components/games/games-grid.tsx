"use client"
import { useGamesQueryStore } from "@/lib/store"
import React from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { Card, CardContent, CardHeader } from "../ui/card"
import { Skeleton } from "../ui/skeleton"
import { useInfiniteGameHook } from "@/lib/hooks"
import GameCard from "./game-card"


export default function GameGrid() {
  const store = useGamesQueryStore()
  // const { data: games, error, isPending } = dataProvider()
  // const { data: games, error, isPending } = useGamesClientHook({ genreId: store.genreId, platformId: store.platformId, ordering: store.ordering },
  //   [store.genreId, store.platformId, store.ordering])

  // const { data: games, error, isPending } = useGamesHookProvider({ genreId: store.genreId, platformId: store.platformId, ordering: store.ordering })
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useInfiniteGameHook({ genreId: store.genreId, platformId: store.platformId, ordering: store.ordering })

  const squeletons = [1, 2, 3, 4, 5, 6]


  // if (isLoading) return <span>Loading...</span>
  if (error) return <span>{error.message}</span>

  const totalGames = data?.pages.reduce((total, page) => page.results.length + total, 0) || 0

  return (

    <InfiniteScroll
      next={fetchNextPage} hasMore={hasNextPage} loader={<span>Loading...</span>}
      dataLength={totalGames}
    >
      <div className="grid mobile:grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {isLoading && squeletons.map((s) => (
          <Card key={s} className="h-200px w-200px rounded-sm ">
            <CardHeader>
              <Skeleton className="h-[200px]" />
            </CardHeader>
            <CardContent>
              <Skeleton />
            </CardContent>
          </Card>
        ))}
        {data?.pages && data?.pages.map((games, index) => (
          <React.Fragment key={index}>
            {games.results.map((game) => <GameCard key={game.id} game={game} />)}
          </React.Fragment>
        ))}
      </div>

    </InfiniteScroll >

  )
}