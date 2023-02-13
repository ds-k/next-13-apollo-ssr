"use client";
import { useQuery } from "@apollo/client";
import { GET_ANIMALS } from "../graphql/queries/animals";

export default function Animals() {
  const { data, loading, error } = useQuery(GET_ANIMALS);
  return (
    <>
      {loading && <p>Loading...</p>}
      <h1>Animals</h1>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}
