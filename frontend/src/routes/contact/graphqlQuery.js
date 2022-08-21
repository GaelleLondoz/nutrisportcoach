import { gql } from "graphql-request";

export const query = gql`
  {
    contact {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
          }
          title
          name
          phoneNumber
          emailAddress
          image {
            data {
              attributes {
                alternativeText
                hash
              }
            }
          }
          inputs
          buttonText
          terms
        }
      }
    }
  }
`;
