"use client";
import { MovieDetailsInterface } from "@/types/movie";
import React from "react";

const Test = ({ movie }: { movie: MovieDetailsInterface }) => {
  console.log(movie);
  return <div></div>;
};

export default Test;
