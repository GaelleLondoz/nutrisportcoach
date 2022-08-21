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
var import_index_699220d6 = require("../../../_app/immutable/chunks/index-699220d6.js");
var import_api_fcbaa1f6 = require("../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../endpoints/philosophie/graphqlQuery.js");
var import_store_breakpoint_f870d4ad = require("../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_Head_64983968 = require("../../../_app/immutable/chunks/Head-64983968.js");
var import_graphql_request = require("graphql-request");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-w2svoh.svelte-w2svoh,.svelte-w2svoh.svelte-w2svoh::after,.svelte-w2svoh.svelte-w2svoh::before{box-sizing:border-box}.container.svelte-w2svoh.svelte-w2svoh{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){.container.svelte-w2svoh.svelte-w2svoh{margin:7rem auto}}@media(min-width: 1024px){.container.svelte-w2svoh.svelte-w2svoh{margin:10rem auto}}.container.svelte-w2svoh .content.svelte-w2svoh{height:100%;display:flex;flex-direction:column}.container.svelte-w2svoh .content h1.svelte-w2svoh{line-height:3rem;font-weight:500}@media(max-width: 1024px){.container.svelte-w2svoh .content h1.svelte-w2svoh{font-size:2rem;margin-bottom:1rem}}@media(min-width: 768px){.container.svelte-w2svoh .content h1.svelte-w2svoh{font-size:3rem;margin-bottom:2rem}}.container.svelte-w2svoh .content p.svelte-w2svoh{max-width:70rem}@media(max-width: 1024px){.container.svelte-w2svoh .content p.svelte-w2svoh{font-size:1.6rem;line-height:1.6rem}}@media(min-width: 768px){.container.svelte-w2svoh .content p.svelte-w2svoh{font-size:1.8rem;line-height:2.5rem}}.container.svelte-w2svoh .content .programs.svelte-w2svoh{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;margin-top:14rem}@media(max-width: 1024px){.container.svelte-w2svoh .content .programs.svelte-w2svoh{margin-top:5rem;row-gap:5rem}}.container.svelte-w2svoh .content .programs .program.svelte-w2svoh{display:flex;flex-direction:column;align-items:center}@media(max-width: 768px){.container.svelte-w2svoh .content .programs .program.svelte-w2svoh{width:100%}}@media(min-width: 768px){.container.svelte-w2svoh .content .programs .program.svelte-w2svoh{width:33.3333333333%}}@media(min-width: 1024px){.container.svelte-w2svoh .content .programs .program.svelte-w2svoh{width:33.3333333333%}}.container.svelte-w2svoh .content .programs .program__link.svelte-w2svoh{width:100%}@media(hover: hover) and (pointer: fine){.container.svelte-w2svoh .content .programs .program__link:hover .program__btn.svelte-w2svoh{background-color:#77c0c5}}.container.svelte-w2svoh .content .programs .program__card.svelte-w2svoh{width:100%;position:relative;display:flex;gap:2.5rem}@media(min-width: 768px){.container.svelte-w2svoh .content .programs .program__card.svelte-w2svoh{flex-direction:column;align-items:center;gap:0}}.container.svelte-w2svoh .content .programs .program__card .program__title.svelte-w2svoh{margin-top:3.2rem;font-size:1.8rem;font-weight:500}@media(min-width: 768px){.container.svelte-w2svoh .content .programs .program__card .program__title.svelte-w2svoh{font-size:2rem}}@media(min-width: 1024px){.container.svelte-w2svoh .content .programs .program__card .program__title.svelte-w2svoh{font-size:2.5rem}}.container.svelte-w2svoh .content .programs .program__content.svelte-w2svoh{display:flex;flex-direction:column;align-items:start}@media(min-width: 768px){.container.svelte-w2svoh .content .programs .program__content.svelte-w2svoh{align-items:center}}.container.svelte-w2svoh .content .programs .program .program__btn.svelte-w2svoh{background-color:rgba(114, 110, 110, 0.306);color:#fff;padding:1rem;margin:1.5rem 0;transition:all ease-in-out 0.4s;border-radius:1rem;padding:1rem 1.5rem;font-size:1.5rem}@media(min-width: 768px){.container.svelte-w2svoh .content .programs .program .program__btn.svelte-w2svoh{border-radius:1.5rem;padding:1.5rem 2.1rem;margin:3.2rem 0}}',
  map: null
};
const prerender = true;
const load = async () => {
  const { philosophie: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Philosophie = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let { data = null } = $$props;
  let mounted = false;
  const { seo: { metaTitle, metaDescription }, title, description, programs } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data && mounted ? `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}

  <section class="${"container svelte-w2svoh"}"><div class="${"content svelte-w2svoh"}"><h1 class="${"svelte-w2svoh"}">${(0, import_index_699220d6.d)(title)}</h1>
      <p class="${"svelte-w2svoh"}">${(0, import_index_699220d6.d)(description)}</p>

      <div class="${"programs svelte-w2svoh"}">${(0, import_index_699220d6.e)(programs, ({ title: title2, button: { text: buttonText, url: { data: { attributes: { url: buttonUrl } } } }, image: { data: { attributes: { hash: imageUrl, alternativeText: imageAlt } } } }) => {
    return `<div class="${"program svelte-w2svoh"}"><a class="${"program__link svelte-w2svoh"}" sveltekit:prefetch${(0, import_index_699220d6.b)("href", buttonUrl, 0)}><div class="${"program__card svelte-w2svoh"}"><picture class="${"svelte-w2svoh"}"><source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_225/" + (0, import_index_699220d6.d)(imageUrl, true)}" media="${"(min-width: 1024px)"}" class="${"svelte-w2svoh"}">
                  <source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_200/" + (0, import_index_699220d6.d)(imageUrl, true)}" media="${"(min-width: 768px)"}" class="${"svelte-w2svoh"}">
                  <img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_112/" + (0, import_index_699220d6.d)(imageUrl, true)}"${(0, import_index_699220d6.b)("alt", imageAlt, 0)} class="${"svelte-w2svoh"}"></picture>
                <div class="${"program__content svelte-w2svoh"}"><span class="${"program__title svelte-w2svoh"}">${(0, import_index_699220d6.d)(title2)}</span>
                  <span class="${"program__btn svelte-w2svoh"}">${(0, import_index_699220d6.d)(buttonText)}</span></div>
              </div></a>
          </div>`;
  })}</div>

      <div class="${"svelte-w2svoh"}"></div></div></section>` : ``}`;
});
