import { gql } from "graphql-request";

export const query = gql`
  {
    histoire {
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
