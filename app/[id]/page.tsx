"use client"

import { useGameClientHook } from "@/lib/hooks"
import getCroppedImageUrl from "@/lib/utils"


export default function Page({ params }: { params: { id: string } }) {
  const { data: game, error, isLoading } = useGameClientHook(Number.parseInt(params.id))
  if (isLoading) return <span>Loading...</span>
  if (!game && error) return <span>{error.message}</span>
  return (
    <>
      fetch the id:{params.id} game
      <div>{game?.id}</div>
      <div>{game?.name}</div>
      <div>{game?.slug}</div>
      <img src={getCroppedImageUrl(game?.background_image)} style={{
        aspectRatio: 1 / 1,
        width: "200px",
        objectFit: "contain"
      }} alt={game?.name}/>
    </>
  )
}