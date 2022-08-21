import { gql } from "graphql-request";

export const query = gql`
  {
    reviewsPage {
      data {
        attributes {
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
          seo {
            metaTitle
            metaDescription
          }
        }
      }
    }
    reviews(sort: "order") {
      data {
        attributes {
          rating
          firstName
          lastName
          comment
          order
        }
      }
    }
  }
`;
