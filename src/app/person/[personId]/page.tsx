import PosterCard from "@/components/miscellaneous/PosterCard";
import PersonDetails from "@/components/person/PersonDetails";
import { apiEndpoints } from "@/globals/constants";
import { getIdFromUrl } from "@/utils";
import axios from "axios";
import React from "react";

interface Props {
  params: {
    personId: string;
  };
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
