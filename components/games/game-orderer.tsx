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
import { useGamesQueryStore } from "@/lib/store"
export default function GameOrderer() {
  const [open, setOpen] = React.useState(false)
  const [orderOption, setOrderOption] = React.useState("")
  const setOrdering = useGamesQueryStore(s => s.setOrdering)

  const orderOptions = [
    { label: "Name", key: "name" },
    { label: "Release Date", key: "-released" },
    { label: "Added date", key: "added" },
    { label: "Created Time", key: "created" },
    { label: "Last updated time", key: "updated" },
    { label: "Rating", key: "rating" },
    { label: "Notation", key: "-metacritic" }
  ]




  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          Order by: {orderOption
            ? orderOptions.find((order) => order.key === orderOption)?.label
            : ""}
          <ChevronsUpDown className=" h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search odering option..." />
          <CommandList>
            <CommandEmpty>No option.</CommandEmpty>
            <CommandGroup>
              {orderOptions.map((framework) => (
                <CommandItem
                  key={framework.key}
                  value={framework.key}
                  onSelect={(currentValue) => {
                    setOrderOption(currentValue === orderOption ? "" : currentValue)
                    setOpen(false)
                    setOrdering(currentValue)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      orderOption === framework.key ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}