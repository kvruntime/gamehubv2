import { Game } from "@/lib/definitions"
import { Card, CardContent, CardHeader } from "../ui/card"
import Link from "next/link"
import getCroppedImageUrl from "@/lib/utils"
import PlatformBadge from "./platform-badge"
import Image from "next/image"

export default function GameCard({ game }: { game: Game }) {
  return (
    <Card className="w-[100%] p-1">
      <CardHeader className="h-[200px] p-0 w-[100%]">
        {/* <div className="w-[100%] h-[180px] rounded-sm overflow-hidden"> */}
          <Image src={getCroppedImageUrl(game.background_image)} width={50} height={200} alt={game.name}
          className="w-[100%] object-cover rounded-lg overflow-hidden h-[180px]"/>
        {/* </div> */}
      </CardHeader>

      <CardContent className="p-1">
        <PlatformBadge platforms={game.platforms} />
        <Link href={`/${game.id}`} className="h-2 font-semibold text-wrap md:text-nowrap m-2"><span>{game.name}</span></Link>
      </CardContent>
    </Card>
  )
}