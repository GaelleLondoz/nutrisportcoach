var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _error
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("../../_app/immutable/chunks/index-a7d28e02.js");
var import_stores_20da12b8 = require("../../_app/immutable/chunks/stores-20da12b8.js");
var import_Header_92b89f1f = require("../../_app/immutable/chunks/Header-92b89f1f.js");
var import_errors = __toESM(require("../endpoints/errors.js"));
var import_Head_0f940379 = require("../../_app/immutable/chunks/Head-0f940379.js");
var import_dompurify = require("dompurify");
var import_store_breakpoint_bdbf653d = require("../../_app/immutable/chunks/store-breakpoint-bdbf653d.js");
const __error_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1bys2sq.svelte-1bys2sq,.svelte-1bys2sq.svelte-1bys2sq::after,.svelte-1bys2sq.svelte-1bys2sq::before{box-sizing:border-box}.container.svelte-1bys2sq.svelte-1bys2sq{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}#error{background-color:#c0d8a2}.container--error.svelte-1bys2sq.svelte-1bys2sq{transition:all 0.4s ease-in-out;display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100vh - var(--headerHeigth));width:100vw}.container--error.svelte-1bys2sq h1.svelte-1bys2sq{display:flex;align-items:center;color:#486b3b;font-weight:500}@media(max-width: 1024px){.container--error.svelte-1bys2sq h1.svelte-1bys2sq{gap:2.4rem;font-size:15rem;height:15rem;margin-bottom:3rem}}@media(min-width: 1024px){.container--error.svelte-1bys2sq h1.svelte-1bys2sq{gap:6rem;font-size:30rem;height:30rem;margin-bottom:5rem}}.container--error.svelte-1bys2sq h1 img.svelte-1bys2sq{max-width:100%}@media(max-width: 768px){.container--error.svelte-1bys2sq h1 img.svelte-1bys2sq{width:7.8rem}}@media(min-width: 768px){.container--error.svelte-1bys2sq h1 img.svelte-1bys2sq{width:12rem}}@media(min-width: 1024px){.container--error.svelte-1bys2sq h1 img.svelte-1bys2sq{width:18.2rem}}@media(max-width: 1024px){.container--error.svelte-1bys2sq h1 span.svelte-1bys2sq{padding-top:2rem}}@media(min-width: 1024px){.container--error.svelte-1bys2sq h1 span.svelte-1bys2sq{padding-top:4rem}}.container--error.svelte-1bys2sq p{text-align:center;font-weight:500}@media(max-width: 1024px){.container--error.svelte-1bys2sq p{font-size:1.8rem;line-height:1.8rem}}@media(min-width: 1024px){.container--error.svelte-1bys2sq p{font-size:3rem;line-height:3rem}}',
  map: null
};
const _error = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_page = (0, import_index_a7d28e02.a)(import_stores_20da12b8.p, (value) => $page = value);
  $$unsubscribe_mainHeaderHeight = (0, import_index_a7d28e02.a)(import_Header_92b89f1f.d, (value) => value);
  String($page.status).split("");
  const errorMessage = import_errors.default[$page.status].message;
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_mainHeaderHeight();
  return `${(0, import_index_a7d28e02.v)(import_Head_0f940379.H, "Head").$$render(
    $$result,
    {
      metaTitle: $page.status,
      metaDescription: errorMessage
    },
    {},
    {}
  )}
${``}`;
});
