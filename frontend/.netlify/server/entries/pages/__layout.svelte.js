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
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("../../_app/immutable/chunks/index-a7d28e02.js");
var import_api_fcbaa1f6 = require("../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../endpoints/graphqlQuery.js");
var import_Header_92b89f1f = require("../../_app/immutable/chunks/Header-92b89f1f.js");
var import_graphql_request = require("graphql-request");
var import_store_breakpoint_bdbf653d = require("../../_app/immutable/chunks/store-breakpoint-bdbf653d.js");
var import_stores_20da12b8 = require("../../_app/immutable/chunks/stores-20da12b8.js");
const app = "";
const index = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1nhlp06{padding-top:var(--headerHeigth)}",
  map: null
};
const load = async () => {
  const { menu: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const _layout = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_a7d28e02.a)(import_Header_92b89f1f.d, (value) => $mainHeaderHeight = value);
  let { data = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${data ? `${(0, import_index_a7d28e02.v)(import_Header_92b89f1f.H, "Header").$$render($$result, { data }, {}, {})}` : ``}
<main${(0, import_index_a7d28e02.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)} class="${"svelte-1nhlp06"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
