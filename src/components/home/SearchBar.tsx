"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";
function SearchBar() {
  const { scrollYProgress } = useScroll();
  // make slower scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className=" relative">
      <motion.img
        className=" shadow-xl  rounded-lg mt-5 aspect-[9/16] md:aspect-video xl:aspect-auto   object-cover    "
        src="/images/home/poster.webp"
        alt=""
      />

      <SearchInput />
    </div>
  );
}

const SearchInput = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] transition-all -translate-y-[50%]">
      <motion.div
        // initial={{ scale: 1 }}
        // animate={{ scale: isFocused ? 1.1 : 1 }}
        // style={{ willChange: "transform" }}
        className={` transition-all ${
          isFocused
            ? " drop-shadow-2xl shadow-2xl "
            : "shadow-xl  drop-shadow-lg "
        }  rounded-lg p-4  bg-white`}
      >
        <div className=" space-x-4  flex items-center">
          <AiOutlineSearch className=" text-gray-400 text-3xl" />
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchValue}
            className=" sm:w-[400px] outline-none"
            placeholder="Search movies and TV shows here"
            type="text"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;
