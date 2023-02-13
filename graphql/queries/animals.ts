import { gql } from "@apollo/client";

export const GET_ANIMALS = gql`
  query getAnimals {
    animals {
      id
      accessory
      firstName
      type
    }
  }
`;
