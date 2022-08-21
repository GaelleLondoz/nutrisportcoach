import { gql } from "graphql-request";

export const query = gql`
  {
    sport {
      data {
        attributes {
          title
          description
          seo {
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
`;
