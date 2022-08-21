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
  default: () => Routes,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("../../_app/immutable/chunks/index-a7d28e02.js");
var import_api_fcbaa1f6 = require("../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../endpoints/graphqlQuery.js");
var import_Header_dd5f05da = require("../../_app/immutable/chunks/Header-dd5f05da.js");
var import_Head_0f940379 = require("../../_app/immutable/chunks/Head-0f940379.js");
var import_dompurify = require("dompurify");
var import_graphql_request = require("graphql-request");
var import_store_breakpoint_bdbf653d = require("../../_app/immutable/chunks/store-breakpoint-bdbf653d.js");
var import_stores_20da12b8 = require("../../_app/immutable/chunks/stores-20da12b8.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1h9k03o.svelte-1h9k03o,.svelte-1h9k03o.svelte-1h9k03o::after,.svelte-1h9k03o.svelte-1h9k03o::before{box-sizing:border-box}.container.svelte-1h9k03o.svelte-1h9k03o{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}body#homepage{background-color:rgba(72, 107, 59, 0.12);max-height:100vh;overflow:hidden}section.svelte-1h9k03o.svelte-1h9k03o{height:calc(100vh - var(--headerHeigth));position:relative;z-index:10;display:flex;justify-content:start}@media(min-width: 768px){section.svelte-1h9k03o.svelte-1h9k03o{align-items:center}}section.svelte-1h9k03o .content.svelte-1h9k03o{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}section.svelte-1h9k03o .content.svelte-1h9k03o h1{font-family:"Hind", sans-serif;font-weight:bold;margin-bottom:2rem}@media(max-width: 1024px){section.svelte-1h9k03o .content.svelte-1h9k03o h1{font-size:2rem;line-height:2.5rem}}@media(min-width: 768px){section.svelte-1h9k03o .content.svelte-1h9k03o h1{font-size:4.5rem;line-height:6rem}}@media(max-width: 1024px){section.svelte-1h9k03o .content p.svelte-1h9k03o{margin:0 0 5rem;font-size:1.6rem;line-height:2rem;max-width:25rem}}@media(min-width: 768px){section.svelte-1h9k03o .content p.svelte-1h9k03o{margin:0 0 10rem;font-size:2.5rem;line-height:3.5rem;max-width:55rem}}section.svelte-1h9k03o .content a.svelte-1h9k03o{color:#fff;background-color:#486b3b}@media(max-width: 1024px){section.svelte-1h9k03o .content a.svelte-1h9k03o{border-radius:1rem;padding:0.8rem 2.3rem;font-size:1.5rem}}@media(min-width: 768px){section.svelte-1h9k03o .content a.svelte-1h9k03o{transition:all 0.4s ease-in-out;border-radius:1.5rem;padding:0.5rem 4rem;font-size:2.5rem}}@media(hover: hover) and (pointer: fine){section.svelte-1h9k03o .content a.svelte-1h9k03o:hover{background-color:#324a29}}.image--b-l.svelte-1h9k03o.svelte-1h9k03o{transition:all 0.4s ease-in-out;position:absolute;bottom:0;max-height:60vh}@media(max-width: 1024px){.image--b-l.svelte-1h9k03o.svelte-1h9k03o{max-width:100vw;transform:scale(-1, 1);right:0}}@media(min-width: 768px){.image--b-l.svelte-1h9k03o.svelte-1h9k03o{max-width:70vw;transform:none;left:0}}@media(min-width: 1024px){.image--b-l.svelte-1h9k03o.svelte-1h9k03o{height:60vh;max-width:unset}}.image--t-r.svelte-1h9k03o.svelte-1h9k03o{transition:all 0.4s ease-in-out;position:absolute;top:0;width:auto;max-width:100%;transform:scale(-1, 1)}@media(max-width: 1024px){.image--t-r.svelte-1h9k03o.svelte-1h9k03o{max-height:50vh;left:0}}@media(min-width: 768px){.image--t-r.svelte-1h9k03o.svelte-1h9k03o{right:0;left:auto;height:60vh;transform:none;max-height:60vh}}@media(min-width: 1024px){.image--t-r.svelte-1h9k03o.svelte-1h9k03o{height:90vh;max-height:90vh}}',
  map: null
};
const prerender = true;
const load = async () => {
  const { homepage: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Routes = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_a7d28e02.a)(import_Header_dd5f05da.d, (value) => value);
  let { data = null } = $$props;
  const { seo: { metaTitle, metaDescription }, title, description, button: { text: buttonText, url: { data: { attributes: { url: buttonUrl } } } }, imageTop: { data: { attributes: { hash: imageTopUrl, alternativeText: imageTopAlt } } }, imageBottom: { data: { attributes: { hash: imageBottomUrl, alternativeText: imageBottomAlt } } } } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${data ? `${(0, import_index_a7d28e02.v)(import_Head_0f940379.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  ${``}` : ``}`;
});
