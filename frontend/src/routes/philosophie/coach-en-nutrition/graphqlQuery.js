import { gql } from "graphql-request";

export const query = gql`
  {
    nutrition {
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
