"use client";
import { blurImgUrl, imageUrl, img_url } from "@/globals/constants";
import { MovieInterface } from "@/types";
import { MovieDetailsInterface } from "@/types/movie";
import { getMonthDateYear, urlConstructor } from "@/utils";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
interface MovieComponentProps {
  movie: MovieDetailsInterface;
}
const MovieComponent: React.FC<MovieComponentProps> = ({ movie }) => {
  const [image, setImage] = React.useState<string>(
    imageUrl.w500(movie.poster_path)
  );
  console.log(movie);
  const getTrailerLink = (movie: MovieDetailsInterface) => {
    const trailer = movie.videos.results.find(
      (video: any) => video.type === "Trailer"
    );
    if (trailer) {
      return `https://www.youtube.com/watch?v=${trailer.key}`;
    }
    return `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  };

  return (
    <div className=" mt-5  sm:flex sm:space-x-8">
      <div>
        <Image
          src={image}
          onError={() => setImage("/images/fallback.jpg")}
          width={400}
          height={300}
          className=" rounded-lg shadow-xl drop-shadow-xl min-w-[200px] md:min-w-[300px] "
          alt="movie-poster"
          placeholder="blur"
          blurDataURL={blurImgUrl}
        />
        <div
          onClick={() => window.open(getTrailerLink(movie))}
          className=" mt-3 cursor-pointer bg-secondary rounded-lg text-primary p-4 text-center "
        >
          Watch Trailer
        </div>
        <div className=" grid grid-cols-3 gap-3 justify-between mt-4  ">
          <div className=" p-4 px-8 flex justify-center bg-secondary rounded-lg text-primary text-xl">
            <MdPlaylistAdd />
          </div>
          <div className=" p-4 px-8 flex justify-center bg-secondary rounded-lg text-primary text-xl">
            <MdFavoriteBorder />
          </div>
          <div className=" p-4 px-8 flex justify-center bg-secondary rounded-lg text-primary text-xl">
            <AiOutlineStar />
          </div>
        </div>
      </div>
      <div className=" mt-5 sm:mt-0">
        <h1 className=" text-4xl   font-extrabold ">{movie.title}</h1>

        <div>
          <span>
            ({movie.status}) • {getMonthDateYear(movie.release_date)} •{" "}
            {movie.runtime} min{" "}
          </span>
          <span>
            {" "}
            •{" "}
            {movie.genres.map((genre: any) => (
              <span key={genre.name} className="  underline mr-2 ">
                {genre.name}{" "}
              </span>
            ))}
          </span>
        </div>

        <div className=" mt-3">
          <span className=" text-2xl font-semibold">
            {Math.round(movie.vote_average * 10) / 10}
          </span>
          <span className=" text-secondary">/10 TMDB Score</span>
        </div>

        <h1 className=" mt-5 ">{movie.overview}</h1>

        <div className=" mt-5">
          <h1 className=" text-2xl font-semibold">Featured Cast</h1>
          <div className=" mt-5 grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-8 gap-5 sm:gap-5">
            {movie.credits.cast.slice(0, 5).map((cast: any) => (
              <Link
                key={cast.id}
                href={`/person/${urlConstructor(cast.id, cast.name)}`}
              >
                <Image
                  className=" shadow-lg  rounded-lg object-contain"
                  alt="poster"
                  src={`${img_url}${cast.profile_path}`}
                  width={100}
                  height={80}
                />
                <h3 className=" mt-3  sm:text-lg font-semibold">{cast.name}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className=" mt-5">
          <h1 className=" text-2xl font-semibold">Featured Crew</h1>
          <div className=" mt-5 grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-10">
            {movie.credits.crew.slice(0, 5).map((crew: any) => (
              <div key={crew.id}>
                <Link
                  href={`/person/${urlConstructor(crew.id, crew.name)}`}
                  className="  text-lg font-semibold"
                >
                  {crew.name}
                </Link>
                <h3 className=" text-md  text-secondary ">{crew.job}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
