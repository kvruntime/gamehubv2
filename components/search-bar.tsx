'use client'
import { useGamesQueryStore } from "@/lib/store";
import { Input } from "./ui/input";
import { throttle } from "throttle-debounce"
import { useRouter } from "next/navigation";



function SearchBar() {
  const setSearchGameText = useGamesQueryStore(s => s.setSearchGameText)
  const router = useRouter()

  const fetchGame = throttle(1000, (searchGameText: string) => {
    setSearchGameText(searchGameText)
    router.push("/")
  })

  return (<div className="grow mx-3">
    <Input placeholder="Search game" onInput={(e) => {
      const entry = (e.target as HTMLInputElement)
      if (entry.value != null)
        fetchGame(entry.value)
    }} />
  </div>);
}

export default SearchBar;