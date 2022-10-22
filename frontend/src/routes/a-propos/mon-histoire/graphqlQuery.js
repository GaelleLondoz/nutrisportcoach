import { gql } from "graphql-request";

export const query = gql`
  {
    histoire {
      data {
        attributes {
          title
          description
          titleBeforeAfter
          beforePicture {
            data {
              attributes {
                alternativeText
                hash
              }
            }
          }
          afterPicture {
            data {
              attributes {
                alternativeText
                hash
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
  }
`;
