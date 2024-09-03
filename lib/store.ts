import { create } from "zustand";
import { GameQuery, GameQueryActions } from "./definitions";

export const useGamesQueryStore = create<GameQuery & GameQueryActions>((set) => ({
  setGenreId: (genreId) => set({ genreId: genreId }),
  setPlatformId: (platformId) => set({ platformId: platformId }),
  setOrdering: (orderingOption) => set({ ordering: orderingOption }),
  setSearchGameText: (searchGameText) => set({ searchGameText: searchGameText })
}))