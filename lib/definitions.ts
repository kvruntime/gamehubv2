// export Type for the platform details
export type Platform = {
  id: number;
  slug: string;
  name: string;
};

// export Type for the platform requirements
export type PlatformRequirements = {
  minimum: string;
  recommended: string;
};

// export Type for the platform data
export type PlatformData = {
  platform: Platform;
  released_at: string;
  requirements: PlatformRequirements;
};

// export Type for the ESRB rating
export type EsrbRating = {
  id: number;
  slug: string;
  name: string;
};

// export Type for the result item
export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, any>; // Adjust this export type as needed
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, any>; // Adjust this export type as needed
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating;
  platforms: PlatformData[];
};

// export Type for the main response
export type ApiResponse = {
  count: number;
  next: string;
  previous: string;
  results: Game[];
};

export interface FetchResults<T> {
  count: number
  results: T[]
  next: string;
  previous: string;
}

export interface Genre {
  id: number,
  name: string,
  slug: string,
  image_background: string
}

export interface GameQuery {
  genreId?: number
  platformId?: number
  ordering?: string
  searchGameText?: string
}

export interface GameQueryActions {

  setGenreId: (genreId: number) => void
  setPlatformId: (plaformId: number) => void
  setOrdering: (orderingOption: string) => void
  setSearchGameText: (searchGameText: string) => void
}