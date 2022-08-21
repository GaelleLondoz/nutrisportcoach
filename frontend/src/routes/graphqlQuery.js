import { gql } from "graphql-request";

export const query = gql`
  {
    menu {
      data {
        attributes {
          items {
            label
            page {
              data {
                attributes {
                  url
                }
              }
            }
          }
          logoBig {
            data {
              attributes {
                hash
                alternativeText
              }
            }
          }
          logoSmall {
            data {
              attributes {
                hash
                alternativeText
              }
            }
          }
        }
      }
    }
    homepage {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
          }
          title
          description
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

          imageTop {
            data {
              attributes {
                hash
                alternativeText
              }
            }
          }
          imageTopMobile {
            data {
              attributes {
                hash
                alternativeText
              }
            }
          }
          imageBottom {
            data {
              attributes {
                hash
                alternativeText
              }
            }
          }
          imageBottomMobile {
            data {
              attributes {
                hash
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
