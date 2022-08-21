import { gql } from "graphql-request";

export const query = gql`
  {
    reviewsPageCreation {
      data {
        attributes {
          title
          seo {
            metaTitle
            metaDescription
          }
          terms
        }
      }
    }
  }
`;
