import { imageUrl, img_url } from "@/globals/constants";
import { MovieInterface } from "@/types";
import { MovieDetailsInterface } from "@/types/movie";
import { getMonthDateYear } from "@/utils";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import React from "react";
interface MovieComponentProps {
  movie: MovieDetailsInterface;
}
const MovieComponent: React.FC<MovieComponentProps> = ({ movie }) => {
  return (
    <div className=" mt-5  sm:flex sm:space-x-8">
      <div>
        <Image
          src={imageUrl.w500(movie.poster_path)}
          width={400}
          height={300}
          className=" rounded-lg min-w-[200px] md:min-w-[300px] "
          alt="movie-poster"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRgwCAABXRUJQVlA4WAoAAAAgAAAAAQAAAgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggHgAAAJABAJ0BKgIAAwAHQJYlpAAC51m2AAD+5R4qGAAAAA=="
        />
        <div className=" mt-3 bg-secondary rounded-lg text-primary p-4 text-center ">
          Watch Trailer
        </div>
        <div className=" flex justify-between mt-4  ">
          <div className=" p-4 px-8 bg-secondary rounded-lg text-primary text-xl">
            <MdPlaylistAdd />
          </div>
          <div className=" p-4 px-8 bg-secondary rounded-lg text-primary text-xl">
            <MdFavoriteBorder />
          </div>
          <div className=" p-4 px-8 bg-secondary rounded-lg text-primary text-xl">
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
              <span className="  underline mr-2 ">{genre.name} </span>
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
              <div>
                <Image
                  className=" shadow-lg  rounded-lg object-contain"
                  alt="poster"
                  src={`${img_url}${cast.profile_path}`}
                  width={100}
                  height={80}
                />
                <h3 className=" mt-3  sm:text-lg font-semibold">{cast.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-5">
          <h1 className=" text-2xl font-semibold">Featured Crew</h1>
          <div className=" mt-5 grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-10">
            {movie.credits.crew.slice(0, 5).map((crew: any) => (
              <div>
                <h3 className="  text-lg font-semibold">{crew.name}</h3>
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
