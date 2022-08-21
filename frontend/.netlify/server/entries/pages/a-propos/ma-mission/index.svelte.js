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
  default: () => Ma_mission,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("../../../../_app/immutable/chunks/index-699220d6.js");
var import_api_fcbaa1f6 = require("../../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../../endpoints/a-propos/ma-mission/graphqlQuery.js");
var import_store_breakpoint_f870d4ad = require("../../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_Head_64983968 = require("../../../../_app/immutable/chunks/Head-64983968.js");
var import_HTML_7385adc6 = require("../../../../_app/immutable/chunks/HTML-7385adc6.js");
var import_graphql_request = require("graphql-request");
var import_dompurify = require("dompurify");
const Mission = "/_app/immutable/assets/mission-4757a619.png";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1htw28c.svelte-1htw28c,.svelte-1htw28c.svelte-1htw28c::after,.svelte-1htw28c.svelte-1htw28c::before{box-sizing:border-box}.container.svelte-1htw28c.svelte-1htw28c{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}.container.svelte-1htw28c.svelte-1htw28c{position:relative;z-index:10;display:flex;justify-content:flex-start}@media(max-width: 1024px){.container.svelte-1htw28c.svelte-1htw28c{margin:0 auto}}@media(min-width: 1024px){.container.svelte-1htw28c.svelte-1htw28c{margin:10rem auto;align-items:center}}.container.svelte-1htw28c .content.svelte-1htw28c{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:85rem}.container.svelte-1htw28c .content h1.svelte-1htw28c{font-weight:500;font-size:2.4rem;line-height:3rem;margin-bottom:3rem}@media(min-width: 1024px){.container.svelte-1htw28c .content h1.svelte-1htw28c{font-size:3rem;line-height:5rem;margin-bottom:6.5rem}}.container.svelte-1htw28c .content.svelte-1htw28c p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem}.image--mission.svelte-1htw28c.svelte-1htw28c{position:fixed;height:100vh;top:0;right:0}',
  map: null
};
const prerender = true;
const load = async () => {
  const { mission: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Ma_mission = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let smallViewport;
  let $breakpoint, $$unsubscribe_breakpoint;
  $$unsubscribe_breakpoint = (0, import_index_699220d6.a)(import_store_breakpoint_f870d4ad.b, (value) => $breakpoint = value);
  let { data = null } = $$props;
  let mounted = false;
  const { seo: { metaTitle, metaDescription }, title, description } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  smallViewport = ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
  $$unsubscribe_breakpoint();
  return `${data && mounted ? `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  <section class="${"container svelte-1htw28c"}"><div class="${"content svelte-1htw28c"}"><h1 class="${"svelte-1htw28c"}">${(0, import_index_699220d6.d)(title)}</h1>
      ${(0, import_index_699220d6.v)(import_HTML_7385adc6.H, "HTML").$$render($$result, { text: description }, {}, {})}</div></section>

  ${!smallViewport ? `<img${(0, import_index_699220d6.b)("src", Mission, 0)} alt="${""}" class="${"image image--mission svelte-1htw28c"}">` : ``}` : ``}`;
});
