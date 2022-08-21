import { gql } from "graphql-request";

export const query = gql`
  {
    philosophie {
      data {
        attributes {
          title
          description
          seo {
            metaTitle
            metaDescription
          }
          programs {
            image {
              data {
                attributes {
                  hash
                  alternativeText
                }
              }
            }
            title
            button {
              text
              url {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
