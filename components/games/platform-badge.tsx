import { Game, PlatformData } from "@/lib/definitions";
import PlatformIcon from "./platform-icon";

export default function PlatformBadge({ platforms }: { platforms: PlatformData[] }) {
  return (
    <div className="p-1 rounded-sm flex flex-row items-center justify-start flex-wrap">
      {platforms.map(({platform}) => <PlatformIcon key={platform.id} platform={platform} /> )}
    </div>
  )
}