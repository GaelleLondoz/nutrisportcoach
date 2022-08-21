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
  default: () => _layout,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("../../../_app/immutable/chunks/index-699220d6.js");
var import_graphql_request = require("graphql-request");
var import_TabsList_ec9be979 = require("../../../_app/immutable/chunks/TabsList-ec9be979.js");
var import_stores_760db7b6 = require("../../../_app/immutable/chunks/stores-760db7b6.js");
var import_store_breakpoint_f870d4ad = require("../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
const prerender = true;
const load = async () => {
  const query = import_graphql_request.gql`
      {
        about {
          data {
            attributes {
              tabs {
                label
                page {
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
    `;
  const res = await (0, import_graphql_request.request)("http://localhost:1337/graphql/", query);
  const { data } = await res.about;
  return { props: { data } };
};
const _layout = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { data = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${(0, import_index_699220d6.v)(import_TabsList_ec9be979.T, "TabsList").$$render($$result, { data: (_a = data == null ? void 0 : data.attributes) == null ? void 0 : _a.tabs }, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
