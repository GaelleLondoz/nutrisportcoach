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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("../../_app/immutable/chunks/index-699220d6.js");
var import_Header_c4517c71 = require("../../_app/immutable/chunks/Header-c4517c71.js");
var import_store_breakpoint_f870d4ad = require("../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_stores_760db7b6 = require("../../_app/immutable/chunks/stores-760db7b6.js");
const app = "";
const index = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1nhlp06{padding-top:var(--headerHeigth)}",
  map: null
};
const _layout = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_699220d6.a)(import_Header_c4517c71.d, (value) => $mainHeaderHeight = value);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${(0, import_index_699220d6.v)(import_Header_c4517c71.H, "Header").$$render($$result, {}, {}, {})}

<main${(0, import_index_699220d6.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)} class="${"svelte-1nhlp06"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
