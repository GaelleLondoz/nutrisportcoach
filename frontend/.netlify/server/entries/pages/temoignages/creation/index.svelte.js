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
  default: () => Creation,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("../../../../_app/immutable/chunks/index-a7d28e02.js");
var import_api_fcbaa1f6 = require("../../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../../endpoints/temoignages/creation/graphqlQuery.js");
var import_graphql_request = require("graphql-request");
var import_Header_92b89f1f = require("../../../../_app/immutable/chunks/Header-92b89f1f.js");
var import_heroicons = require("@steeze-ui/heroicons");
var import_Head_0f940379 = require("../../../../_app/immutable/chunks/Head-0f940379.js");
var import_store_breakpoint_bdbf653d = require("../../../../_app/immutable/chunks/store-breakpoint-bdbf653d.js");
var import_stores_20da12b8 = require("../../../../_app/immutable/chunks/stores-20da12b8.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-bao3lu.svelte-bao3lu,.svelte-bao3lu.svelte-bao3lu::after,.svelte-bao3lu.svelte-bao3lu::before{box-sizing:border-box}.container.svelte-bao3lu.svelte-bao3lu{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}form.svelte-bao3lu .form__inputs.svelte-bao3lu{display:grid;grid-template-columns:repeat(2, 1fr)}@media(max-width: 768px){form.svelte-bao3lu .form__inputs.svelte-bao3lu{gap:4rem 2rem}}@media(min-width: 768px){form.svelte-bao3lu .form__inputs.svelte-bao3lu{gap:4rem}}@media(min-width: 1024px){form.svelte-bao3lu .form__inputs.svelte-bao3lu{gap:7rem}}form.svelte-bao3lu .form__inputs label.svelte-bao3lu{font-weight:500}@media(max-width: 1024px){form.svelte-bao3lu .form__inputs label.svelte-bao3lu{font-size:1.8rem}}@media(min-width: 1024px){form.svelte-bao3lu .form__inputs label.svelte-bao3lu{font-size:1.8rem}}form.svelte-bao3lu .form__inputs label span.svelte-bao3lu,form.svelte-bao3lu .form__inputs label sup.svelte-bao3lu{text-transform:initial;font-size:1.3rem;color:#486b3b}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu{width:100%;border-bottom:solid 0.1rem #989191;background-color:transparent}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:focus{border-bottom:solid 0.1rem #1a2a34}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:-webkit-autofill,form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:-webkit-autofill:hover,form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:-webkit-autofill:focus,form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:-webkit-autofill:active{-webkit-transition:background-color 600000s 0s, color 600000s 0s;transition:background-color 600000s 0s, color 600000s 0s}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu{display:block;margin-top:1.5rem;color:#1a2a34;font-weight:500}@media(max-width: 768px){form.svelte-bao3lu .form__inputs label input.svelte-bao3lu{font-size:1.2rem;line-height:1.5rem}}@media(min-width: 768px){form.svelte-bao3lu .form__inputs label input.svelte-bao3lu{font-size:1.5rem;line-height:2rem}}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu::-moz-placeholder{-moz-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;color:#989191}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu::placeholder{transition:all 0.4s ease-in-out;color:#989191}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:focus{transition:all 0.4s ease-in-out;outline:none}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:focus::-moz-placeholder{color:#1a2a34}form.svelte-bao3lu .form__inputs label input.svelte-bao3lu:focus::placeholder{color:#1a2a34}form.svelte-bao3lu .terms.svelte-bao3lu{color:#989191;font-size:1.2rem;margin:2rem 0 1rem}form.svelte-bao3lu button.svelte-bao3lu{transition:all 0.4s ease-in-out;color:#fff;background-color:#486b3b;padding:0.5rem 3.2rem;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin:3.5rem 0}@media(max-width: 1024px){form.svelte-bao3lu button.svelte-bao3lu{font-size:1.8rem;line-height:2rem;border-radius:1rem}}@media(min-width: 1024px){form.svelte-bao3lu button.svelte-bao3lu{font-size:2rem;line-height:3rem;border-radius:1.5rem}}form.svelte-bao3lu button.svelte-bao3lu:hover{background-color:#324a29}.reviews-creation.svelte-bao3lu.svelte-bao3lu{position:relative;display:flex;align-items:center;height:calc(100vh - var(--headerHeigth))}.reviews-creation.svelte-bao3lu.svelte-bao3lu:before{content:"";position:absolute;top:0;left:0;width:100vw;background-color:#c6d6c2;height:calc(50vh - var(--headerHeigth) / 2)}h1.svelte-bao3lu.svelte-bao3lu{font-size:3rem;line-height:3rem;font-weight:500;position:relative}@media(max-width: 1024px){h1.svelte-bao3lu.svelte-bao3lu{font-size:2rem;line-height:2rem}}@media(min-width: 1024px){h1.svelte-bao3lu.svelte-bao3lu{font-size:3rem;line-height:3rem}}.form__container.svelte-bao3lu.svelte-bao3lu{background:#fff;box-shadow:0 0.3rem 0.6rem rgba(26, 42, 52, 0.161);border-radius:3.5rem;position:relative;max-width:95.3rem;margin:5rem auto 0}@media(max-width: 1024px){.form__container.svelte-bao3lu.svelte-bao3lu{padding:3.3rem 2.4rem}}@media(min-width: 1024px){.form__container.svelte-bao3lu.svelte-bao3lu{padding:4.2rem 10rem 0.2rem}}span.starContainer.svelte-bao3lu.svelte-bao3lu{display:flex;margin:1rem 0 0}@media(max-width: 1024px){span.starContainer.svelte-bao3lu.svelte-bao3lu{-moz-column-gap:1.2rem;column-gap:1.2rem}}@media(min-width: 1024px){span.starContainer.svelte-bao3lu.svelte-bao3lu{-moz-column-gap:3rem;column-gap:3rem}}@media(max-width: 1024px){span.starContainer.svelte-bao3lu .star{width:1.8rem}}@media(min-width: 1024px){span.starContainer.svelte-bao3lu .star{width:auto}}.toast .toast-content .check{fill:#77c0c5}.toast .toast-content .error{fill:red}.toast .toast-content .message.svelte-bao3lu.svelte-bao3lu{margin:0 2rem;line-height:2rem;font-size:1.6rem;color:#1a2a34}',
  map: null
};
const prerender = true;
const load = async () => {
  const data = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Creation = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_a7d28e02.a)(import_Header_92b89f1f.d, (value) => value);
  let { data = null } = $$props;
  const { reviewsPageCreation: { data: { attributes: { seo: { metaTitle, metaDescription }, title, terms } } } } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${data ? `${(0, import_index_a7d28e02.v)(import_Head_0f940379.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  ${``}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_mainHeaderHeight();
  return $$rendered;
});
