var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  query: () => query
});
module.exports = __toCommonJS(stdin_exports);
var import_graphql_request = require("graphql-request");
const query = import_graphql_request.gql`
  {
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
