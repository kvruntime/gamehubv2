"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconType } from "react-icons"
import { useGamesQueryStore } from "@/lib/store"
import { usePlatformsClientHook } from "@/lib/hooks"
import PlatformIcon from "./platform-icon"


export default function PlatformFilter() {
  const [open, setOpen] = React.useState(false)
  const [plaformSlug, setPlaformSlug] = React.useState("")
  const setPlatformId =useGamesQueryStore(s=>s.setPlatformId)

  const { data: platforms, error: isError } = usePlatformsClientHook()
  const platformsInfo = platforms.map(platform => ({ id:platform.id, slug: platform.slug, labelIcon: <PlatformIcon platform={platform} /> }))

  if (isError) return <span>No platform!</span>
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {plaformSlug
              ? <div className="flex flex-row items-center">
                {platformsInfo.find((plaform) => plaform.slug === plaformSlug)?.labelIcon} {platformsInfo.find((plaform) => plaform.slug === plaformSlug)?.slug}
              </div>
              : <span>Select Plaform</span>}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No plaform found.</CommandEmpty>
              <CommandGroup>
                {platformsInfo.map((platform) => (
                  <CommandItem
                    key={platform.slug}
                    value={platform.slug}
                    onSelect={(currentValue) => {
                      setPlaformSlug(currentValue === plaformSlug ? "" : currentValue)
                      setPlatformId (platform.id)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        plaformSlug === platform.slug ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex flex-row">{platform.labelIcon} {platform.slug}</div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}