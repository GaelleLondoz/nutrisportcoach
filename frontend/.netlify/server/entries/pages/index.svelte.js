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
var import_index_699220d6 = require("../../_app/immutable/chunks/index-699220d6.js");
var import_api_fcbaa1f6 = require("../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../endpoints/graphqlQuery.js");
var import_Header_f8c29f20 = require("../../_app/immutable/chunks/Header-f8c29f20.js");
var import_Head_64983968 = require("../../_app/immutable/chunks/Head-64983968.js");
var import_HTML_7385adc6 = require("../../_app/immutable/chunks/HTML-7385adc6.js");
var import_graphql_request = require("graphql-request");
var import_store_breakpoint_f870d4ad = require("../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_stores_760db7b6 = require("../../_app/immutable/chunks/stores-760db7b6.js");
var import_dompurify = require("dompurify");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1uy720h.svelte-1uy720h,.svelte-1uy720h.svelte-1uy720h::after,.svelte-1uy720h.svelte-1uy720h::before{box-sizing:border-box}.container.svelte-1uy720h.svelte-1uy720h{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}body#homepage{background-color:rgba(72, 107, 59, 0.12);max-height:100vh;overflow:hidden}section.svelte-1uy720h.svelte-1uy720h{height:calc(100vh - var(--headerHeigth));position:relative;z-index:10;display:flex;justify-content:start}@media(min-width: 768px){section.svelte-1uy720h.svelte-1uy720h{align-items:center}}section.svelte-1uy720h .content.svelte-1uy720h{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}section.svelte-1uy720h .content.svelte-1uy720h h1{font-family:"Hind", sans-serif;font-weight:bold;margin-bottom:2rem}@media(max-width: 1024px){section.svelte-1uy720h .content.svelte-1uy720h h1{font-size:2rem;line-height:2.5rem}}@media(min-width: 768px){section.svelte-1uy720h .content.svelte-1uy720h h1{font-size:4.5rem;line-height:6rem}}@media(max-width: 1024px){section.svelte-1uy720h .content p.svelte-1uy720h{margin:0 0 5rem;font-size:1.6rem;line-height:2rem;max-width:25rem}}@media(min-width: 768px){section.svelte-1uy720h .content p.svelte-1uy720h{margin:0 0 10rem;font-size:2.5rem;line-height:3.5rem;max-width:55rem}}section.svelte-1uy720h .content a.svelte-1uy720h{color:#fff;background-color:#486b3b}@media(max-width: 1024px){section.svelte-1uy720h .content a.svelte-1uy720h{border-radius:1rem;padding:0.8rem 2.3rem;font-size:1.5rem}}@media(min-width: 768px){section.svelte-1uy720h .content a.svelte-1uy720h{border-radius:1.5rem;padding:0.5rem 4rem;font-size:2.5rem;transition:all ease-in-out 0.4s}}@media(hover: hover) and (pointer: fine){section.svelte-1uy720h .content a.svelte-1uy720h:hover{background-color:#324a29}}.image--b-l.svelte-1uy720h.svelte-1uy720h{position:absolute;bottom:0;max-height:60vh;transition:all 0.4s ease-in-out}@media(max-width: 1024px){.image--b-l.svelte-1uy720h.svelte-1uy720h{max-width:100vw;transform:scale(-1, 1);right:0}}@media(min-width: 768px){.image--b-l.svelte-1uy720h.svelte-1uy720h{max-width:70vw;transform:none;left:0}}@media(min-width: 1024px){.image--b-l.svelte-1uy720h.svelte-1uy720h{height:60vh;max-width:unset}}.image--t-r.svelte-1uy720h.svelte-1uy720h{position:absolute;top:0;width:auto;max-width:100%;transition:all 0.4s ease-in-out;transform:scale(-1, 1)}@media(max-width: 1024px){.image--t-r.svelte-1uy720h.svelte-1uy720h{max-height:50vh;left:0}}@media(min-width: 768px){.image--t-r.svelte-1uy720h.svelte-1uy720h{right:0;left:auto;height:60vh;transform:none;max-height:60vh}}@media(min-width: 1024px){.image--t-r.svelte-1uy720h.svelte-1uy720h{height:90vh;max-height:90vh}}',
  map: null
};
const prerender = true;
const load = async () => {
  const { homepage: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Routes = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_699220d6.a)(import_Header_f8c29f20.d, (value) => $mainHeaderHeight = value);
  let { data = null } = $$props;
  let animate = false;
  const { seo: { metaTitle, metaDescription }, title, description, button: { text: buttonText, url: { data: { attributes: { url: buttonUrl } } } }, imageTop: { data: { attributes: { hash: imageTopUrl, alternativeText: imageTopAlt } } }, imageBottom: { data: { attributes: { hash: imageBottomUrl, alternativeText: imageBottomAlt } } } } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${data && animate ? `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}

  <picture class="${"svelte-1uy720h"}"><source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_713/" + (0, import_index_699220d6.d)(imageTopUrl, true)}" media="${"(min-width: 768px)"}" class="${"svelte-1uy720h"}">

    <img${(0, import_index_699220d6.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)} src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_500/" + (0, import_index_699220d6.d)(imageTopUrl, true)}"${(0, import_index_699220d6.b)("alt", imageTopAlt, 0)} class="${"image--t-r svelte-1uy720h"}"></picture>

  <section class="${"container svelte-1uy720h"}"${(0, import_index_699220d6.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)}><div class="${"content svelte-1uy720h"}">${(0, import_index_699220d6.v)(import_HTML_7385adc6.H, "HTML").$$render($$result, { text: title }, {}, {})}
      <p class="${"svelte-1uy720h"}">${(0, import_index_699220d6.d)(description)}</p>
      <div class="${"svelte-1uy720h"}"><a sveltekit:prefetch${(0, import_index_699220d6.b)("href", buttonUrl, 0)} class="${"svelte-1uy720h"}">${(0, import_index_699220d6.d)(buttonText)}</a></div></div></section>

  <picture class="${"svelte-1uy720h"}"><source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_885/" + (0, import_index_699220d6.d)(imageBottomUrl, true)}" media="${"(min-width: 768px)"}" class="${"svelte-1uy720h"}">

    <img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_500/" + (0, import_index_699220d6.d)(imageBottomUrl, true)}"${(0, import_index_699220d6.b)("alt", imageBottomAlt, 0)} class="${"image--b-l svelte-1uy720h"}"></picture>` : ``}`;
});
