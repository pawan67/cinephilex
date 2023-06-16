"use client";
import { blurImgUrl, img_url } from "@/globals/constants";
import { MovieInterface } from "@/types";
import { getYearFromDate, urlConstructor } from "@/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const PosterCard = ({ movie }: { movie: MovieInterface }) => {
  const [image, setImage] = React.useState<string>(
    `${img_url}${movie.poster_path}`
  );
  return (
    <Link href={`/movie/${urlConstructor(movie.id, movie.title)}`}>
      <div className="  max-w-xs ">
        <motion.div className="relative hover:scale-105 transition-all">
          <Image
            className=" shadow-lg  rounded-lg object-contain"
            alt="poster"
            src={image}
            onError={() => setImage("/images/fallback.jpg")}
            width={300}
            height={200}
            placeholder="blur"
            blurDataURL={blurImgUrl}
          />
          <div className=" absolute w-10 aspect-square bg-secondary  rounded-full -bottom-3 border-4 border-primary right-2 flex justify-center items-center ">
            <div className=" text-primary font-semibold">
              {Math.round(movie.vote_average * 10) / 10}
            </div>
          </div>
        </motion.div>
        <h3 className=" mt-5 text-lg font-semibold">{movie.title}</h3>
        <h3 className=" text-md  text-secondary ">
          {getYearFromDate(movie.release_date)}
        </h3>
      </div>
    </Link>
  );
};

export default PosterCard;
