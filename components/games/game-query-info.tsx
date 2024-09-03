"use client"
import { useGenresClientHook, usePlatformsClientHook } from "@/lib/hooks"
import { useGamesQueryStore } from "@/lib/store"

export default function GameQueryInfo() {
  const { data: platforms } = usePlatformsClientHook()
  const { data: genres } = useGenresClientHook()

  const { genreId, platformId } = useGamesQueryStore()
  
  const genreName = genres.find(g => g.id === genreId)?.name
  const platformName = platforms.find(p => p.id === platformId)?.name

  const queryInfo: string = `${genreName || ""} ${platformName || ""} Games`
  return (
    <>
      <h2 className="font-bold text-2xl my-2 text-wrap md:text-nowrap  md:text-left">{queryInfo}</h2>
    </>
  )
}