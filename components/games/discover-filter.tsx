import GameOrderer from "./game-orderer";
import PlatformFilter from "./platform-filter";


export default function DiscoverFilters() {
  return (
    <div className="flex flex-col justify-center md:justify-start gap-y-1 md:flex-row md:items-center gap-x-2">
      <GameOrderer />
      <PlatformFilter />
    </div>
  )
}