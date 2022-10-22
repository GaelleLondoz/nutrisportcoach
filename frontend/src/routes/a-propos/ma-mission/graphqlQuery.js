import { gql } from "graphql-request";

export const query = gql`
  {
    mission {
      data {
        attributes {
          title
          titleVideo
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
