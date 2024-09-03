"use client"
import { Genre } from "@/lib/definitions";
import { useState } from "react";
import { useGamesQueryStore } from "@/lib/store";
import Image from "next/image";
import { Button } from "../ui/button";
import getCroppedImageUrl from "@/lib/utils";


export function GenresList({ genres }: { genres: Genre[] }) {
  const [selectedGenreId, setSelectedGenreId] = useState(0)
  const queryStore = useGamesQueryStore()
  return (
    <section>
      {genres.map(genre => <div key={genre.id} className="flex flex-row justify-start gap-0 my-1">
        <Image className="rounded-sm" src={getCroppedImageUrl(genre.image_background)} height={50} width={50} alt={genre.name} />
        <Button variant={"link"}
          className={`${genre.id === selectedGenreId ? "underline " : ""} text-wrap text-left align-middle p-1`}
          onClick={() => {
            setSelectedGenreId(genre.id)
            queryStore.setGenreId(genre.id)
          }}>{genre.name}</Button></div>)}
    </section>
  )
}