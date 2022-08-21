import { gql } from "graphql-request";

export const query = gql`
  {
    bienEtre {
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
