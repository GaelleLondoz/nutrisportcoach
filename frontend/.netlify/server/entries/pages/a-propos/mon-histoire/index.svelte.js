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
  default: () => Mon_histoire,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("../../../../_app/immutable/chunks/index-699220d6.js");
var import_api_fcbaa1f6 = require("../../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../../endpoints/a-propos/mon-histoire/graphqlQuery.js");
var import_store_breakpoint_f870d4ad = require("../../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_Head_64983968 = require("../../../../_app/immutable/chunks/Head-64983968.js");
var import_dompurify = require("dompurify");
var import_graphql_request = require("graphql-request");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-qnujgk.svelte-qnujgk,.svelte-qnujgk.svelte-qnujgk::after,.svelte-qnujgk.svelte-qnujgk::before{box-sizing:border-box}.container.svelte-qnujgk.svelte-qnujgk{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}.container.svelte-qnujgk.svelte-qnujgk{position:relative;z-index:10;overflow-x:hidden;display:flex;justify-content:flex-start}@media(max-width: 1024px){.container.svelte-qnujgk.svelte-qnujgk{margin:0 auto;flex-direction:column-reverse}}@media(min-width: 1024px){.container.svelte-qnujgk.svelte-qnujgk{margin:10rem auto;align-items:center}}.container.svelte-qnujgk .content.svelte-qnujgk{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:85rem}@media(min-width: 1024px){.container.svelte-qnujgk .content.svelte-qnujgk{width:60%}}@media(max-width: 1024px){.container.svelte-qnujgk .content h1.svelte-qnujgk{font-size:2.4rem;line-height:3rem;margin-bottom:3rem;font-weight:bold}}@media(min-width: 1024px){.container.svelte-qnujgk .content h1.svelte-qnujgk{font-size:3rem;line-height:4rem;margin-bottom:5.5rem;font-weight:500}}.container.svelte-qnujgk .content.svelte-qnujgk p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem}@media(max-width: 768px){.container.svelte-qnujgk .content.svelte-qnujgk p:first-of-type{padding-right:14rem}}@media(min-width: 768px){.container.svelte-qnujgk .content.svelte-qnujgk p:first-of-type,.container.svelte-qnujgk .content.svelte-qnujgk p:nth-of-type(2){padding-right:14rem}}.container.svelte-qnujgk .image--histoire.svelte-qnujgk{position:absolute;top:0;right:0}@media(max-width: 1024px){.container.svelte-qnujgk .image--histoire.svelte-qnujgk{width:100%;max-width:16rem;transform:translateX(2rem)}}@media(min-width: 1024px){.container.svelte-qnujgk .image--histoire.svelte-qnujgk{width:40%;max-width:47.1rem}}',
  map: null
};
const prerender = true;
const load = async () => {
  const { histoire: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Mon_histoire = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  $$unsubscribe_breakpoint = (0, import_index_699220d6.a)(import_store_breakpoint_f870d4ad.b, (value) => $breakpoint = value);
  let { data = null } = $$props;
  const { seo: { metaTitle, metaDescription }, title, description } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
  $$unsubscribe_breakpoint();
  return `${data ? `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  ${``}` : ``}`;
});
