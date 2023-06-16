"use client";
import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";
import { searchMoviesOrTv } from "@/handlers";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { getYearFromDate, urlConstructor } from "@/utils";

function SearchBar() {
  const { scrollYProgress } = useScroll();

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
  const [searchValue, setSearchValue] = React.useState<any>(null);
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  const [searchResults, setSearchResults] = React.useState<any>([]);

  useEffect(() => {
    const search = async () => {
      const data = await searchMoviesOrTv(query);
      setSearchResults(data);
    };

    search();
  }, [query]);

  useEffect(() => {
    if (searchValue === null) return;
    if (searchValue.mediaType === "movie") {
      router.push(
        `/movie/${urlConstructor(searchValue.id, searchValue.title)}`
      );
    } else {
      router.push(`/tv/${urlConstructor(searchValue.id, searchValue.name)}`);
    }
  }, [searchValue]);

  console.log(searchResults);

  return (
    <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] transition-all -translate-y-[50%]">
      <Combobox
        onChange={(value: any) => {
          console.log(value);
          setSearchValue(value);
          setQuery(value);
        }}
        as="div"
        className={` transition-all ${
          isFocused
            ? " drop-shadow-2xl shadow-2xl "
            : "shadow-xl  drop-shadow-lg "
        }  rounded-lg p-4 max-w-lg bg-white`}
      >
        <div className=" space-x-4  flex items-center">
          <AiOutlineSearch className=" text-gray-400 text-3xl" />
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(result: any) => result.name}
            className=" sm:w-[400px] outline-none"
            placeholder="Search movies or TV shows here"
            type="text"
          />
        </div>
        <Combobox.Options className="overflow-y-scroll  max-h-[350px]">
          {searchResults.map((result: any) => (
            <Combobox.Option key={result.id} value={result} as="div">
              {({ active, selected }) => (
                <li
                  className={`${
                    active
                      ? "bg-gradient-to-r from-indigo-500 via-pink-500 to-blue-500 background-animate font-semibold text-white"
                      : "bg-white text-black"
                  } my-2 px-3 py-2   rounded-lg`}
                >
                  {result.name ||
                    result.title + " - " + getYearFromDate(result.release_date)}

                  <div
                    className={`${
                      active ? "text-white text-xs" : "text-xs  text-gray-400"
                    }`}
                  >
                    {result.mediaType === "movie"
                      ? "Movie"
                      : result.mediaType === "tv"
                      ? "TV Show"
                      : "Person"}
                  </div>
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchBar;
