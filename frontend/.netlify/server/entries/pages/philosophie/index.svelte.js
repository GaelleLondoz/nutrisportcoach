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
  default: () => Philosophie,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("../../../_app/immutable/chunks/index-a7d28e02.js");
var import_api_fcbaa1f6 = require("../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../endpoints/philosophie/graphqlQuery.js");
var import_Head_0f940379 = require("../../../_app/immutable/chunks/Head-0f940379.js");
var import_graphql_request = require("graphql-request");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1kbmboy.svelte-1kbmboy,.svelte-1kbmboy.svelte-1kbmboy::after,.svelte-1kbmboy.svelte-1kbmboy::before{box-sizing:border-box}a.svelte-1kbmboy.svelte-1kbmboy{text-decoration:none}.container.svelte-1kbmboy.svelte-1kbmboy{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(min-width: 1024px){#philosophie{overflow:hidden;position:relative;height:100vh}#philosophie:before{content:"";position:absolute;z-index:-1;bottom:0;left:0;height:68vh;width:100vw;background-image:url("$lib/assets/philosophie/background.svg");background-size:cover;background-repeat:no-repeat}}@media(max-width: 1024px){.container.svelte-1kbmboy.svelte-1kbmboy{margin:7rem auto}}@media(min-width: 1024px){.container.svelte-1kbmboy.svelte-1kbmboy{margin:10rem auto}}.container.svelte-1kbmboy .content.svelte-1kbmboy{height:100%;display:flex;flex-direction:column;line-height:3rem;font-weight:500}@media(max-width: 1024px){.container.svelte-1kbmboy .content h1.svelte-1kbmboy{font-size:2rem;margin-bottom:1rem}}@media(min-width: 768px){.container.svelte-1kbmboy .content h1.svelte-1kbmboy{font-size:3rem;margin-bottom:2rem}}.container.svelte-1kbmboy .content p.svelte-1kbmboy{max-width:70rem}@media(max-width: 1024px){.container.svelte-1kbmboy .content p.svelte-1kbmboy{font-size:1.6rem;line-height:1.6rem}}@media(min-width: 768px){.container.svelte-1kbmboy .content p.svelte-1kbmboy{font-size:1.8rem;line-height:2.5rem}}.container.svelte-1kbmboy .content .programs.svelte-1kbmboy{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;margin-top:14rem}@media(max-width: 1024px){.container.svelte-1kbmboy .content .programs.svelte-1kbmboy{margin-top:5rem;row-gap:5rem}}.container.svelte-1kbmboy .content .programs .program.svelte-1kbmboy{display:flex;flex-direction:column;align-items:center}@media(max-width: 768px){.container.svelte-1kbmboy .content .programs .program.svelte-1kbmboy{width:100%}}@media(min-width: 768px){.container.svelte-1kbmboy .content .programs .program.svelte-1kbmboy{width:33.3333333333%}}@media(min-width: 1024px){.container.svelte-1kbmboy .content .programs .program.svelte-1kbmboy{width:33.3333333333%}}.container.svelte-1kbmboy .content .programs .program__link.svelte-1kbmboy{width:100%}@media(hover: hover) and (pointer: fine){.container.svelte-1kbmboy .content .programs .program__link:hover .program__btn.svelte-1kbmboy{background-color:#77c0c5}}.container.svelte-1kbmboy .content .programs .program__card.svelte-1kbmboy{width:100%;position:relative;display:flex}@media(max-width: 768px){.container.svelte-1kbmboy .content .programs .program__card.svelte-1kbmboy{gap:2.5rem}}@media(min-width: 768px){.container.svelte-1kbmboy .content .programs .program__card.svelte-1kbmboy{flex-direction:column;align-items:center;gap:0}}.container.svelte-1kbmboy .content .programs .program__card .program__title.svelte-1kbmboy{font-weight:500}@media(max-width: 768px){.container.svelte-1kbmboy .content .programs .program__card .program__title.svelte-1kbmboy{font-size:1.8rem}}@media(min-width: 768px){.container.svelte-1kbmboy .content .programs .program__card .program__title.svelte-1kbmboy{font-size:2rem}}@media(max-width: 1024px){.container.svelte-1kbmboy .content .programs .program__card .program__title.svelte-1kbmboy{margin-top:1.5rem}}@media(min-width: 1024px){.container.svelte-1kbmboy .content .programs .program__card .program__title.svelte-1kbmboy{font-size:2.5rem;margin-top:3.2rem}}.container.svelte-1kbmboy .content .programs .program__content.svelte-1kbmboy{display:flex;flex-direction:column}@media(max-width: 768px){.container.svelte-1kbmboy .content .programs .program__content.svelte-1kbmboy{align-items:start}}@media(min-width: 768px){.container.svelte-1kbmboy .content .programs .program__content.svelte-1kbmboy{align-items:center}}.container.svelte-1kbmboy .content .programs .program .program__btn.svelte-1kbmboy{transition:all 0.4s ease-in-out;background-color:rgba(114, 110, 110, 0.3);color:#fff;font-size:1.5rem}@media(max-width: 768px){.container.svelte-1kbmboy .content .programs .program .program__btn.svelte-1kbmboy{border-radius:1.5rem;padding:0.25rem 1.5rem;margin:1.5rem 0}}@media(min-width: 768px){.container.svelte-1kbmboy .content .programs .program .program__btn.svelte-1kbmboy{border-radius:1.5rem;padding:0.5rem 2.1rem;margin:3.2rem 0}}',
  map: null
};
const prerender = true;
const load = async () => {
  const { philosophie: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Philosophie = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let { data = null } = $$props;
  const { seo: { metaTitle, metaDescription }, title, description, programs } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data ? `${(0, import_index_a7d28e02.v)(import_Head_0f940379.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  ${``}` : ``}`;
});
