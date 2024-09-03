'use client'
import { useTheme, } from "next-themes";
import { Switch } from "./ui/switch";
import { PiSunBold, PiMoonStarsBold } from "react-icons/pi"


function ThemeToogler() {
  const { setTheme, resolvedTheme } = useTheme()
  return (
    <div className="flex flex-row items-center gap-1">
      {resolvedTheme === "dark" ?<PiMoonStarsBold className="text-sky-950 text-3xl" />: <PiSunBold className="text-orange-400 text-3xl" /> }
      <Switch onClick={() => { resolvedTheme === "dark" ? setTheme("light") : setTheme("dark") }}
        checked={resolvedTheme === "dark" ? false : true} />
    </div>
  );
}

export default ThemeToogler;