import Recommedations from "@/components/home/Recommendations";
import SearchBar from "@/components/home/SearchBar";
import MetaWrapper from "@/components/MetaWrapper";
import { apiEndpoints } from "@/globals/constants";
import { fetchPopularMovies, fetchPopularSeries } from "@/handlers";
import { MovieInterface, TVinterface } from "@/types";
import { metaTagsGenerator } from "@/utils";
import axios from "axios";
import React from "react";

export const metadata = metaTagsGenerator({});

async function HomePage() {
  const popularMovies: MovieInterface[] = await fetchPopularMovies();
  const popularTvs: TVinterface[] = await fetchPopularSeries();

  return (
    <div>
      <SearchBar />
      <Recommedations
        popularTvs={popularTvs}
        popularMovies={popularMovies}
        shows={undefined}
        movies={undefined}
      />
    </div>
  );
}

export default HomePage;
