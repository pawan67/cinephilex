import { apiEndpoints } from "@/globals/constants";
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
