import { gql } from "graphql-request";

export const query = gql`
  {
    mission {
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
