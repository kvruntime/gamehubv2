import { Platform } from "@/lib/definitions";
import { IconType } from "react-icons";
import { FaAndroid, FaLinux, FaQuestionCircle, FaWindows, FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { SiNintendo, SiNintendo3Ds, SiNintendoswitch, SiPlaystation3, SiPlaystation4, SiPlaystation5 } from "react-icons/si";

// const iconsMapper: Record<string, IconType> = {
const iconsMapper: { [key: string]: IconType } = {
  "pc": FaWindows,
  "xbox360": FaXbox,
  "xbox-one": FaXbox,
  "xbox-series-x": FaXbox,
  "playstation3": SiPlaystation3,
  "playstation4": SiPlaystation4,
  "playstation5": SiPlaystation5,
  "linux": FaLinux,
  "android": FaAndroid,
  "macos": FaApple,
  "ios": FaApple,
  "nintendo-switch": SiNintendoswitch,
  "nintendo-3ds": SiNintendo3Ds,
  "nintendo-dsi": SiNintendo,
}

export default function PlatformIcon({ platform }: { platform: Platform }) {
  const PlatIcon = iconsMapper[platform.slug]
  return (
    <div className="p-1">
      {PlatIcon ? <PlatIcon width={30} /> : <FaQuestionCircle  />}
    </div>
  )
}