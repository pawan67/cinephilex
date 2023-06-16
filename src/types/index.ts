export interface MovieInterface {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
}
export interface TVinterface {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}
export interface AuthEndpoints {
  requestToken: string;
  validateToken: string;
  generateSession: string;
  logout: string;
}

export interface UserEndpoints {
  userInfo: (params: { sessionId: string }) => string;
  setFavorite: (params: { accountId: string; sessionId: string }) => string;
  getFavorites: (params: {
    mediaType: string;
    accountId: string;
    sessionId: string;
    pageQuery?: number;
  }) => string;
  addToWatchlist: (params: { accountId: string; sessionId: string }) => string;
  getWatchlist: (params: {
    mediaType: string;
    accountId: string;
    sessionId: string;
    pageQuery?: number;
  }) => string;
  setRating: (params: {
    mediaType: string;
    mediaId: string;
    sessionId: string;
  }) => string;
  getRated: (params: {
    mediaType: string;
    accountId: string;
    sessionId: string;
    pageQuery?: number;
  }) => string;
  deleteRating: (params: {
    mediaType: string;
    mediaId: string;
    sessionId: string;
  }) => string;
  getRecommendations: (params: {
    mediaType: string;
    accountId: string;
    pageQuery?: number;
  }) => string;
}

export interface SearchEndpoints {
  movieSearchWithYear: (params: { query: string; year: string }) => string;
  movieSearch: (params: { query: string; pageQuery?: number }) => string;
  tvSearchWithYear: (params: { query: string; year: string }) => string;
  tvSearch: (params: { query: string; pageQuery?: number }) => string;
  keywordSearch: (params: { query: string; pageQuery?: number }) => string;
}

export interface MovieEndpoints {
  popularMovies: string;
  trendingMovies: string;
  movieDetails: (id: string) => string;
  movieGenre: (params: { genreId: string; pageQuery?: number }) => string;
  getMovieCredits: (params: { id: string }) => string;
}

export interface TVEndpoints {
  popularTV: string;
  trendingTV: string;
  tvDetails: (id: string) => string;
  tvDetailsNoAppend: (id: string) => string;
  tvSeasonDetails: (params: { id: string; seasonNumber: string }) => string;
  episodeDetails: (params: {
    id: string;
    seasonNumber: string;
    episodeNumber: string;
  }) => string;
  tvGenre: (params: { genreId: string; pageQuery: number }) => string;
  getTvCredits: (params: { id: string }) => string;
}

export interface KeywordsEndpoints {
  keywordDetails: (id: string) => string;
}

export interface PersonEndpoints {
  personDetails: (id: string) => string;
}

export interface ApiEndpoints {
  auth: AuthEndpoints;
  user: UserEndpoints;
  search: SearchEndpoints;
  movie: MovieEndpoints;
  tv: TVEndpoints;
  keywords: KeywordsEndpoints;
  person: PersonEndpoints;
  language: string;
}
