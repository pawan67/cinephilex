import { apiEndpoints } from "@/globals/constants";
import { randomizeResults } from "@/utils";
import axios from "axios";

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(apiEndpoints.movie.popularMovies);
  return data.results;
};

export const fetchPopularSeries = async () => {
  const { data } = await axios.get(apiEndpoints.tv.popularTV);
  return data.results;
};

export const getMovie = async (id: string) => {
  const { data } = await axios.get(apiEndpoints.movie.movieDetails(id));
  return data;
};

export const searchMoviesOrTv = async (query: string) => {
  const movie = await axios.get(apiEndpoints.search.movieSearch({ query }));
  const tv = await axios.get(apiEndpoints.search.tvSearch({ query }));

  movie.data.results.forEach((result: any) => {
    result.mediaType = "movie";
  });
  tv.data.results.forEach((result: any) => {
    result.mediaType = "tv";
  });

  return randomizeResults(movie.data.results, tv.data.results);
};
