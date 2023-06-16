import { ApiEndpoints } from "@/types";

const api_key = "d4dd95b13ad35a11e9d9a98a3f2c901a";
export const img_url = "https://image.tmdb.org/t/p/w500";
const baseUrl = "https://api.themoviedb.org/3";

export const imageUrl = {
  orginal(path: string) {
    return `https://image.tmdb.org/t/p/original${path}`;
  },
  w500(path: string) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  },
};

export const blurImgUrl =
  "data:image/webp;base64,UklGRgwCAABXRUJQVlA4WAoAAAAgAAAAAQAAAgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggHgAAAJABAJ0BKgIAAwAHQJYlpAAC51m2AAD+5R4qGAAAAA==";

export const apiEndpoints: ApiEndpoints = {
  auth: {
    requestToken: `${baseUrl}/authentication/token/new?api_key=${api_key}`,

    validateToken: `${baseUrl}/authentication/token/validate_with_login?api_key=${api_key}`,

    generateSession: `${baseUrl}/authentication/session/new?api_key=${api_key}`,

    logout: `${baseUrl}/authentication/session?api_key=${api_key}`,
  },
  user: {
    userInfo: ({ sessionId }: { sessionId: string }) =>
      `${baseUrl}/account?api_key=${api_key}&session_id=${sessionId}`,

    setFavorite: ({ accountId, sessionId }) =>
      `${baseUrl}/account/${accountId}/favorite?api_key=${api_key}&session_id=${sessionId}`,

    getFavorites: ({ mediaType, accountId, sessionId, pageQuery = 1 }) =>
      `${baseUrl}/account/${accountId}/favorite/${mediaType}?api_key=${api_key}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${pageQuery}`,

    addToWatchlist: ({ accountId, sessionId }) =>
      `${baseUrl}/account/${accountId}/watchlist?api_key=${api_key}&session_id=${sessionId}`,

    getWatchlist: ({ mediaType, accountId, sessionId, pageQuery = 1 }) =>
      `${baseUrl}/account/${accountId}/watchlist/${mediaType}?api_key=${api_key}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${pageQuery}`,

    setRating: ({ mediaType, mediaId, sessionId }) =>
      `${baseUrl}/${mediaType}/${mediaId}/rating?api_key=${api_key}&session_id=${sessionId}`,

    getRated: ({ mediaType, accountId, sessionId, pageQuery = 1 }) =>
      `${baseUrl}/account/${accountId}/rated/${mediaType}?api_key=${api_key}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${pageQuery}`,

    deleteRating: ({ mediaType, mediaId, sessionId }) =>
      `${baseUrl}/${mediaType}/${mediaId}/rating?api_key=${api_key}&session_id=${sessionId}`,

    getRecommendations: ({ mediaType, accountId, pageQuery = 1 }) =>
      `https://api.themoviedb.org/4/account/${accountId}/${mediaType}/recommendations?api_key=${api_key}&page=${pageQuery}`,
  },
  search: {
    movieSearchWithYear: ({ query, year }) =>
      `${baseUrl}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false&year=${year}`,

    movieSearch: ({ query, pageQuery = 1 }) =>
      `${baseUrl}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${pageQuery}&include_adult=false`,

    tvSearchWithYear: ({ query, year }) =>
      `${baseUrl}/search/tv?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false&first_air_date_year=${year}`,

    tvSearch: ({ query, pageQuery = 1 }) =>
      `${baseUrl}/search/tv?api_key=${api_key}&language=en-US&query=${query}&page=${pageQuery}&include_adult=false`,

    keywordSearch: ({ query, pageQuery = 1 }) =>
      `${baseUrl}/search/keyword?api_key=${api_key}&query=${query}&page=${pageQuery}`,
  },
  movie: {
    popularMovies: `${baseUrl}/movie/popular?api_key=${api_key}&language=en-US&page=1`,

    trendingMovies: `${baseUrl}/trending/movie/day?api_key=${api_key}`,

    movieDetails: (id) =>
      `${baseUrl}/movie/${id}?api_key=${api_key}&language=en-US&append_to_response=images,videos,credits,reviews,recommendations,external_ids&include_image_language=en,null`,

    movieGenre: ({ genreId, pageQuery = 1 }) =>
      `${baseUrl}/discover/movie?api_key=${api_key}&language=en-US&include_adult=false&page=${pageQuery}&with_genres=${genreId}`,

    getMovieCredits: ({ id }) =>
      `${baseUrl}/movie/${id}?api_key=${api_key}&language=en-US&append_to_response=credits`,
  },
  tv: {
    popularTV: `${baseUrl}/tv/popular?api_key=${api_key}&language=en-US&page=1`,

    trendingTV: `${baseUrl}/trending/tv/day?api_key=${api_key}`,

    tvDetails: (id) =>
      `${baseUrl}/tv/${id}?api_key=${api_key}&language=en-US&append_to_response=images,videos,aggregate_credits,reviews,recommendations,external_ids&include_image_language=en,null`,

    tvDetailsNoAppend: (id) =>
      `${baseUrl}/tv/${id}?api_key=${api_key}&language=en-US`,

    tvSeasonDetails: ({ id, seasonNumber }) =>
      `${baseUrl}/tv/${id}/season/${seasonNumber}?api_key=${api_key}&language=en-US&append_to_response=aggregate_credits,images&include_image_language=en,null`,

    episodeDetails: ({ id, seasonNumber, episodeNumber }) =>
      `${baseUrl}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${api_key}&language=en-US&append_to_response=images,credits`,

    tvGenre: ({ genreId, pageQuery }) =>
      `${baseUrl}/discover/tv?api_key=${api_key}&language=en-US&include_adult=false&page=${pageQuery}&with_genres=${genreId}`,

    getTvCredits: ({ id }) =>
      `${baseUrl}/tv/${id}?api_key=${api_key}&language=en-US&append_to_response=aggregate_credits`,
  },
  keywords: {
    keywordDetails: (id) =>
      `${baseUrl}/keyword/${id}/movies?api_key=${api_key}&language=en-US&include_adult=false`,
  },
  person: {
    personDetails: (id) =>
      `${baseUrl}/person/${id}?api_key=${api_key}&language=en-US&append_to_response=combined_credits`,
  },
  language: `${baseUrl}/configuration/languages?api_key=${api_key}`,
};
