"use client";
import Image from "next/image";
import React from "react";
import { MovieInterface, TVinterface } from "@/types";
import { img_url } from "@/globals/constants";
import { getYearFromDate } from "@/utils";
import PosterCard from "../miscellaneous/PosterCard";
import TVShowsPosterCard from "../miscellaneous/TVShowsPosterCard";
import { Tab } from "@headlessui/react";

function Recommendations({
  shows,
  movies,
  popularMovies,
  popularTvs,
}: {
  shows: any;
  movies: any;
  popularMovies: MovieInterface[];
  popularTvs: TVinterface[];
}) {
  const [type, setType] = React.useState("Movies");

  return (
    <Tab.Group>
      <Tab.List className=" flex my-10 space-x-4">
        <Tab>
          <TypeTab type={type} setType={setType} name="Movies" />
        </Tab>
        <Tab>
          <TypeTab type={type} setType={setType} name="TV Shows" />
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="  cards_container">
          {popularMovies.map((movie) => (
            <PosterCard movie={movie} />
          ))}
        </Tab.Panel>
        <Tab.Panel className="  cards_container">
          {" "}
          {popularTvs.map((movie) => (
            <TVShowsPosterCard tv={movie} />
          ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

function TypeTab({
  type,
  setType,
  name,
}: {
  type: string;
  setType: any;
  name: string;
}) {
  return (
    <div
      onClick={() => setType(name)}
      className={` cursor-pointer  ${
        type === name ? "border-b-4 border-secondary font-semibold " : ""
      }`}
    >
      <h1 className=" text-lg  text-secondary">{name}</h1>
    </div>
  );
}

export default Recommendations;
