"use client"

import { useGameClientHook } from "@/lib/hooks"
import getCroppedImageUrl from "@/lib/utils"
import Image from "next/image"


export default function Page({ params }: { params: { id: string } }) {
  const { data: game, error, isLoading } = useGameClientHook(Number.parseInt(params.id))
  if (isLoading) return <span>Loading...</span>
  if (error) return <span>{error.message}</span>
  if(game==null)return <span>no game found</span>
  return (
    <>
      fetch the id:{params.id} game
      <div>{game.id}</div>
      <div>{game.name}</div>
      <div>{game.slug}</div>
      <Image alt={game.name} src={getCroppedImageUrl(game.background_image)}
      width={200} height={200}/>
    </>
  )
}