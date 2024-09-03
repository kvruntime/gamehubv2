import Aside from "@/components/aside";
import DiscoverFilters from "@/components/games/discover-filter";
import GameQueryInfo from "@/components/games/game-query-info";
import GameGrid from "@/components/games/games-grid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-2 grid sm:grid-cols-1 md:grid-cols-[200px_1fr]">
      <div className=" hidden md:block">
        <Aside />
      </div>
      <div className="">

        <div className="p-2 ">
          <GameQueryInfo />
          <DiscoverFilters />
        </div>
        <div className="h-[100%] overflow-y-scroll">
          <GameGrid />
        </div>
      </div>
    </main>
  );
}
