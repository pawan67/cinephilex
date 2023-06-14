import GenreButton from "@/components/miscellaneous/btn/GenreButton";
import PosterCard from "@/components/miscellaneous/PosterCard";
import Test from "@/components/miscellaneous/Test";
import MovieComponent from "@/components/movie/MovieComponent";
import { imageUrl, img_url } from "@/globals/constants";
import { getMovie } from "@/handlers";
import { getMonthDateYear } from "@/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const MoviePage = async ({
  params,
}: {
  params: {
    movieId: string;
  };
}) => {
  const { movieId } = params;

  const movie = await getMovie(movieId);
  return (
    <div>
      <MovieComponent movie={movie} />
      <div className=" my-5">
        <h1 className=" text-2xl font-semibold">Recommendations</h1>
      </div>
      <div className=" cards_container">
        {movie.recommendations.results.map((movie: any) => (
          <PosterCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
