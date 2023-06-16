import PosterCard from "@/components/miscellaneous/PosterCard";
import PersonDetails from "@/components/person/PersonDetails";
import { apiEndpoints, imageUrl } from "@/globals/constants";
import { getIdFromUrl, metaTagsGenerator, urlConstructor } from "@/utils";
import axios from "axios";
import { Metadata } from "next";
import React from "react";

interface Props {
  params: {
    personId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = getIdFromUrl(params.personId);
  const person = await axios.get(apiEndpoints.person.personDetails(id));

  return metaTagsGenerator({
    title: person.data.name,
    description: person.data.biography,
    img: imageUrl.w500(person.data.profile_path),
    url: `/person/${urlConstructor(person.data.id, person.data.name)}`,
  });
}

const PersonPage = async ({ params }: Props) => {
  const id = getIdFromUrl(params.personId);
  const person = await axios.get(apiEndpoints.person.personDetails(id));

  return (
    <div>
      <PersonDetails person={person.data} />

      {person.data.combined_credits.cast.length > 0 && (
        <div className=" my-10 ">
          <h1 className=" text-2xl font-semibold">Casted In</h1>
          <div className=" mt-5 cards_container">
            {person.data.combined_credits.cast.map((movie: any) => (
              <PosterCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonPage;
