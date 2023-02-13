import { gql } from "@apollo/client";

/** TRACKS gql query to retreive all tracks */
export const GET_TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;
