import { Game } from "@/lib/definitions"
import { Card, CardContent, CardHeader } from "../ui/card"
import Link from "next/link"
import getCroppedImageUrl from "@/lib/utils"
import PlatformBadge from "./platform-badge"
import Image from "next/image"

export default function GameCard({ game }: { game: Game }) {
  return (
    <Card>
      <CardHeader className="h-[200px]">
        <div className="w-[100%] h-[180px] rounded-sm overflow-hidden">
          <Image src={getCroppedImageUrl(game.background_image)} width={200} height={200} alt={game.name}
          className="w-[100%] object-contain"/>
        </div>
      </CardHeader>
      <CardContent>
        <PlatformBadge platforms={game.platforms} />
        <Link href={`/${game.id}`}><h2 className="h-2 font-semibold">{game.name}</h2></Link>
      </CardContent>
    </Card>
  )
}