import Recommedations from "@/components/home/Recommendations";
import SearchBar from "@/components/home/SearchBar";
import { apiEndpoints } from "@/globals/constants";
import { fetchPopularMovies, fetchPopularSeries } from "@/handlers";
import axios from "axios";
import React from "react";
import { popular, popularTv } from "../../dummy";

async function HomePage() {
  // const popularMovies = await fetchPopularMovies();
  // const popularTvs = await fetchPopularSeries();

  return (
    <div>
      <SearchBar />
      <Recommedations
        popularTvs={popularTv}
        popularMovies={popular}
        shows={undefined}
        movies={undefined}
      />
    </div>
  );
}

export default HomePage;
