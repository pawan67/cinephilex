"use client";
import { blurImgUrl, img_url } from "@/globals/constants";
import { getAge } from "@/utils";
import Image from "next/image";
import React from "react";

const PersonDetails = ({ person }: any) => {
  const [image, setImage] = React.useState(`${img_url}${person.profile_path}`);

  const getGender = (g: number) => {
    switch (g) {
      case 0:
        return "-";
      case 1:
        return "Female";
      case 2:
        return "Male";
      case 3:
        return "Non Binary";
    }
  };

  console.log(person);
  return (
    <div>
      <div className=" mt-10  sm:flex sm:space-x-10">
        <div>
          <Image
            src={image}
            onError={() => setImage("/images/fallback.jpg")}
            width={250}
            height={300}
            className=" rounded-lg shadow-xl drop-shadow-xl max-w-[100px] sm:max-w-none min-w-[200px] md:min-w-[250px] "
            alt="person-img"
            placeholder="blur"
            blurDataURL={blurImgUrl}
          />
        </div>
        <div className=" mt-5 sm:mt-0">
          <h1 className=" text-4xl   font-extrabold ">{person.name}</h1>

          <div className=" mt-5 grid sm:grid-cols-3 gap-10">
            <div>
              <h1 className=" text-xl font-semibold">Gender</h1>
              <h1>{getGender(person.gender)}</h1>
            </div>
            <div>
              <h1 className=" text-xl font-semibold">Age</h1>
              <h1>{getAge(person.birthday)} years old</h1>
            </div>
            <div>
              <h1 className=" text-xl font-semibold">Birthday</h1>
              <h1>{person.birthday}</h1>
            </div>
            <div>
              <h1 className=" text-xl font-semibold">Known for</h1>
              <h1>{person.known_for_department}</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="  mt-10 whitespace-pre-line font-semibold ">
          {person.biography}
        </h1>
      </div>
    </div>
  );
};

export default PersonDetails;
