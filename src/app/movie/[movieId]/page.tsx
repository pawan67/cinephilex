import GenreButton from "@/components/miscellaneous/btn/GenreButton";
import PosterCard from "@/components/miscellaneous/PosterCard";
import Test from "@/components/miscellaneous/Test";
import MovieComponent from "@/components/movie/MovieComponent";
import { imageUrl, img_url } from "@/globals/constants";
import { getMovie } from "@/handlers";
import { getMonthDateYear, metaTagsGenerator, urlConstructor } from "@/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import { Metadata } from "next";
import { MovieDetailsInterface } from "@/types/movie";

export async function generateMetadata({
  params: { movieId },
}: {
  params: { movieId: string };
}): Promise<Metadata> {
  const movie: MovieDetailsInterface = await getMovie(movieId);

  return metaTagsGenerator({
    title: movie.title,
    description: movie.overview,
    img: imageUrl.w500(movie.poster_path),
    url: `/movie/${urlConstructor(movie.id, movie.title)}`,
  });
}

const MoviePage = async ({
  params,
}: {
  params: {
    movieId: string;
  };
}) => {
  const { movieId } = params;

  const movie: MovieDetailsInterface = await getMovie(movieId);

  return (
    <div>
      <MovieComponent movie={movie} />
      <div className=" my-5">
        <h1 className=" text-2xl font-semibold">Recommendations</h1>
      </div>
      <div className=" cards_container">
        {movie.recommendations.results.map((movie: any) => (
          <PosterCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
