import GameOrderer from "./game-orderer";
import PlatformFilter from "./platform-filter";


export default function DiscoverFilters() {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <GameOrderer />
      <PlatformFilter />
    </div>
  )
}