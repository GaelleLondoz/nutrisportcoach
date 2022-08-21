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
  default: () => Coach_en_nutrition,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("../../../../_app/immutable/chunks/index-a7d28e02.js");
var import_api_fcbaa1f6 = require("../../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../../endpoints/philosophie/coach-en-nutrition/graphqlQuery.js");
var import_store_breakpoint_bdbf653d = require("../../../../_app/immutable/chunks/store-breakpoint-bdbf653d.js");
var import_Head_0f940379 = require("../../../../_app/immutable/chunks/Head-0f940379.js");
var import_dompurify = require("dompurify");
var import_graphql_request = require("graphql-request");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1u70sln.svelte-1u70sln,.svelte-1u70sln.svelte-1u70sln::after,.svelte-1u70sln.svelte-1u70sln::before{box-sizing:border-box}.container.svelte-1u70sln.svelte-1u70sln{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){#nutrition .tabs-items ul li:nth-child(2){order:-1}}.container.svelte-1u70sln.svelte-1u70sln{position:relative;z-index:10;display:flex;justify-content:center}@media(max-width: 1024px){.container.svelte-1u70sln.svelte-1u70sln{margin:0 auto}}@media(min-width: 1024px){.container.svelte-1u70sln.svelte-1u70sln{margin:10rem auto;align-items:center}}.container.svelte-1u70sln .content.svelte-1u70sln{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:85rem}@media(min-width: 1024px){.container.svelte-1u70sln .content.svelte-1u70sln{margin-left:5rem;width:45vw}}@media(max-width: 1024px){.container.svelte-1u70sln .content h1.svelte-1u70sln{font-size:2.4rem;line-height:3rem;margin-bottom:3rem;font-weight:bold}}@media(min-width: 1024px){.container.svelte-1u70sln .content h1.svelte-1u70sln{font-size:3rem;line-height:4rem;margin-bottom:5.5rem;font-weight:500}}.container.svelte-1u70sln .content.svelte-1u70sln p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem}.image.svelte-1u70sln.svelte-1u70sln{margin:auto}@media(min-width: 1024px){.image.svelte-1u70sln.svelte-1u70sln{position:absolute;bottom:0}.image--plate.svelte-1u70sln.svelte-1u70sln{left:0;width:30vw;max-width:40rem}.image--mojito.svelte-1u70sln.svelte-1u70sln{right:0;width:20vw;max-width:30rem}}',
  map: null
};
const prerender = true;
const load = async () => {
  const { nutrition: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Coach_en_nutrition = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  $$unsubscribe_breakpoint = (0, import_index_a7d28e02.a)(import_store_breakpoint_bdbf653d.b, (value) => $breakpoint = value);
  let { data = null } = $$props;
  const { seo: { metaTitle, metaDescription }, title, description } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
  $$unsubscribe_breakpoint();
  return `${data ? `${(0, import_index_a7d28e02.v)(import_Head_0f940379.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  ${``}` : ``}`;
});
