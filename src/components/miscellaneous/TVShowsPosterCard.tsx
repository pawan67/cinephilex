import { img_url } from "@/globals/constants";
import { TVinterface } from "@/types";
import { getYearFromDate } from "@/utils";
import Image from "next/image";
import React from "react";

const TVShowsPosterCard = ({ tv }: { tv: TVinterface }) => {
  return (
    <div>
      <div className=" max-w-xs ">
        <div className="relative hover:scale-105 transition-all">
          <Image
            className=" shadow-lg  rounded-lg object-contain"
            alt="poster"
            src={`${img_url}${tv.poster_path}`}
            width={300}
            height={200}
          />
          <div className=" absolute w-10 aspect-square bg-secondary  rounded-full -bottom-3 border-4 border-primary right-2 flex justify-center items-center ">
            <div className=" text-primary font-semibold">{tv.vote_average}</div>
          </div>
        </div>
        <h3 className=" mt-5 text-lg font-semibold">{tv.name}</h3>
        <h3 className=" text-md  text-secondary ">
          {getYearFromDate(tv.first_air_date)}
        </h3>
      </div>
    </div>
  );
};

export default TVShowsPosterCard;
