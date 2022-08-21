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
var import_index_699220d6 = require("../../_app/immutable/chunks/index-699220d6.js");
var import_stores_760db7b6 = require("../../_app/immutable/chunks/stores-760db7b6.js");
var import_Header_f8c29f20 = require("../../_app/immutable/chunks/Header-f8c29f20.js");
var import_errors = __toESM(require("../endpoints/errors.js"));
var import_Head_64983968 = require("../../_app/immutable/chunks/Head-64983968.js");
var import_dompurify = require("dompurify");
var import_store_breakpoint_f870d4ad = require("../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
const __error_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-lfj33y.svelte-lfj33y,.svelte-lfj33y.svelte-lfj33y::after,.svelte-lfj33y.svelte-lfj33y::before{box-sizing:border-box}.container.svelte-lfj33y.svelte-lfj33y{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}#error{background-color:#c0d8a2}.container--error.svelte-lfj33y.svelte-lfj33y{display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100vh - var(--headerHeigth));width:100vw;transition:0.4s ease-in-out all}.container--error.svelte-lfj33y h1.svelte-lfj33y{display:flex;align-items:center;color:#526c33;font-weight:500;margin-bottom:5rem}@media(max-width: 1024px){.container--error.svelte-lfj33y h1.svelte-lfj33y{gap:2.4rem;font-size:15rem;height:15rem}}@media(min-width: 1024px){.container--error.svelte-lfj33y h1.svelte-lfj33y{gap:6rem;font-size:30rem;height:30rem}}.container--error.svelte-lfj33y h1 img.svelte-lfj33y{max-width:100%}@media(max-width: 768px){.container--error.svelte-lfj33y h1 img.svelte-lfj33y{width:7.8rem}}@media(min-width: 768px){.container--error.svelte-lfj33y h1 img.svelte-lfj33y{width:12rem}}@media(min-width: 1024px){.container--error.svelte-lfj33y h1 img.svelte-lfj33y{width:18.2rem}}@media(max-width: 1024px){.container--error.svelte-lfj33y h1 span.svelte-lfj33y{padding-top:2rem}}@media(min-width: 1024px){.container--error.svelte-lfj33y h1 span.svelte-lfj33y{padding-top:4rem}}.container--error.svelte-lfj33y p{text-align:center;font-weight:500}@media(max-width: 1024px){.container--error.svelte-lfj33y p{font-size:1.8rem;line-height:1.8rem}}@media(min-width: 1024px){.container--error.svelte-lfj33y p{font-size:3rem;line-height:3rem}}',
  map: null
};
const _error = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_page = (0, import_index_699220d6.a)(import_stores_760db7b6.p, (value) => $page = value);
  $$unsubscribe_mainHeaderHeight = (0, import_index_699220d6.a)(import_Header_f8c29f20.d, (value) => value);
  import_errors.default[$page.status].message;
  String($page.status).split("");
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_mainHeaderHeight();
  return `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle: $page.status }, {}, {})}
${``}`;
});
