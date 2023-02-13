import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TRACKS } from "@/graphql/queries/tracks";

const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);
  console.log("loading", loading);
  console.log("error", error);
  console.log("data?.tracksForHome", data?.tracksForHome);
  return <div>hi</div>;
};

export default Tracks;
