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
  default: () => Creation
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("../../../../_app/immutable/chunks/index-699220d6.js");
var import_Header_f8c29f20 = require("../../../../_app/immutable/chunks/Header-f8c29f20.js");
var import_graphql_request = require("graphql-request");
var import_store_breakpoint_f870d4ad = require("../../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_stores_760db7b6 = require("../../../../_app/immutable/chunks/stores-760db7b6.js");
const Star = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let { filled = false } = $$props;
  let { starId } = $$props;
  if ($$props.filled === void 0 && $$bindings.filled && filled !== void 0)
    $$bindings.filled(filled);
  if ($$props.starId === void 0 && $$bindings.starId && starId !== void 0)
    $$bindings.starId(starId);
  return `${filled ? `<svg class="${"star"}"${(0, import_index_699220d6.b)("data-starid", starId, 0)} xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"31.52"}" height="${"29.09"}" viewBox="${"0 0 31.52 29.09"}"><defs><clipPath id="${"clip-path"}"><rect id="${"Rectangle_44"}" data-name="${"Rectangle 44"}" width="${"31.52"}" height="${"29.09"}" fill="${"none"}"></rect></clipPath></defs><g clip-path="${"url(#clip-path)"}"><path${(0, import_index_699220d6.b)("data-starid", starId, 0)} class="${"starPath"}" d="${"M30.518,6.932a6.78,6.78,0,0,1-1.369,4.105l-4.866,6.388-7.615,10a1.728,1.728,0,0,1-2.727.007L6.273,17.48,1.387,11.141a6.841,6.841,0,0,1,.9-9.239A7.5,7.5,0,0,1,7.191.073a7.616,7.616,0,0,1,6.043,3.016l.644.835a1.728,1.728,0,0,0,2.727-.008l.655-.86A7.529,7.529,0,0,1,28.2,1.8a6.705,6.705,0,0,1,2.318,5.129"}" transform="${"translate(0 0)"}" fill="${"#77c0c5"}"></path><path${(0, import_index_699220d6.b)("data-starid", starId, 0)} class="${"starPath"}" d="${"M6.385,23.847l3.928-.069c.49-1.38,1.52-3.361,2.2-4.938l.139-.3.107.318c.8,2.373,2.393,7.155,3.176,9.534l-.354-.005c.607-1.7,1.2-3.4,1.826-5.094h.135l2.677.008-.167.105,1.8-3.716.158-.326.153.326,1.758,3.735-.128-.08,1.785.017h.08l.033.071L26.56,25.3H26.37l.918-1.849.022-.045h.047l4.462.078-4.462.078.07-.044-.867,1.873-.092.2-.1-.2-.91-1.852.113.071-1.785.017H23.7l-.04-.082-1.812-3.709h.311l-1.773,3.728-.05.1h-.117l-2.677.008.182-.128c-.585,1.658-1.192,3.308-1.791,4.961l-.186.515-.168-.52c-.774-2.382-2.318-7.18-3.071-9.568l.246.015c-.8,1.657-1.587,3.315-2.4,4.964h-.043Z"}" transform="${"translate(-3.845 -11.149)"}" fill="${"#fff"}"></path></g></svg>` : `<svg class="${"star"}"${(0, import_index_699220d6.b)("data-starid", starId, 0)} xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"31.52"}" height="${"29.09"}" viewBox="${"0 0 31.52 29.09"}"><defs><clipPath id="${"clip-path"}"><rect id="${"Rectangle_47"}" data-name="${"Rectangle 47"}" width="${"31.52"}" height="${"29.09"}" transform="${"translate(0 0)"}" fill="${"none"}"></rect></clipPath></defs><g clip-path="${"url(#clip-path)"}"><path${(0, import_index_699220d6.b)("data-starid", starId, 0)} class="${"starPath"}" d="${"M31.02,7.431a6.775,6.775,0,0,1-1.37,4.105l-4.865,6.388-7.616,10a1.729,1.729,0,0,1-2.727.007L6.774,17.978,1.887,11.64A6.84,6.84,0,0,1,2.79,2.4,7.5,7.5,0,0,1,7.692.573a7.614,7.614,0,0,1,6.043,3.016l.644.835a1.729,1.729,0,0,0,2.727-.008l.655-.86A7.53,7.53,0,0,1,28.7,2.3,6.706,6.706,0,0,1,31.02,7.431Z"}" fill="${"none"}" stroke="${"#77c0c5"}" stroke-width="${"1"}"></path></g></svg>`}`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1tq1kw8.svelte-1tq1kw8,.svelte-1tq1kw8.svelte-1tq1kw8::after,.svelte-1tq1kw8.svelte-1tq1kw8::before{box-sizing:border-box}.container.svelte-1tq1kw8.svelte-1tq1kw8{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}form.svelte-1tq1kw8 .form__inputs.svelte-1tq1kw8{display:grid;grid-template-columns:repeat(2, 1fr);gap:7rem}form.svelte-1tq1kw8 .form__inputs label.svelte-1tq1kw8{font-weight:500}@media(max-width: 1024px){form.svelte-1tq1kw8 .form__inputs label.svelte-1tq1kw8{font-size:1.8rem}}@media(min-width: 1024px){form.svelte-1tq1kw8 .form__inputs label.svelte-1tq1kw8{font-size:1.8rem}}form.svelte-1tq1kw8 .form__inputs label span.svelte-1tq1kw8,form.svelte-1tq1kw8 .form__inputs label sup.svelte-1tq1kw8{text-transform:initial;font-size:1.3rem;color:#486b3b}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8{width:100%;border-bottom:solid 1px #989191;background-color:transparent}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:focus{border-bottom:solid 1px #1a2a34}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:-webkit-autofill,form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:-webkit-autofill:hover,form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:-webkit-autofill:focus,form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:-webkit-autofill:active{-webkit-transition:background-color 600000s 0s, color 600000s 0s;transition:background-color 600000s 0s, color 600000s 0s}form.svelte-1tq1kw8 .form__inputs label.label--message.svelte-1tq1kw8{grid-column:1/span 2}form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8{width:100%;padding:2rem 1.8rem;height:14.5rem;background-color:rgba(221, 215, 215, 0.4);border-radius:22px}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8,form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8{display:block;margin-top:1.5rem;color:#1a2a34;font-weight:500;font-size:1.5rem;line-height:2rem}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8::-moz-placeholder,form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8::-moz-placeholder{-moz-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;color:#989191}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8::placeholder,form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8::placeholder{transition:all 0.4s ease-in-out;color:#989191}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:focus,form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8:focus{outline:none;transition:all 0.4s ease-in-out}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:focus::-moz-placeholder,form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8:focus::-moz-placeholder{color:#1a2a34}form.svelte-1tq1kw8 .form__inputs label input.svelte-1tq1kw8:focus::placeholder,form.svelte-1tq1kw8 .form__inputs label textarea.svelte-1tq1kw8:focus::placeholder{color:#1a2a34}form.svelte-1tq1kw8 button.svelte-1tq1kw8{color:#fff;background-color:#486b3b;border-radius:1.5rem;padding:0.5rem 3.2rem;width:-webkit-max-content;width:-moz-max-content;width:max-content;transition:all ease-in-out 0.4s;margin:3.5rem 0}@media(max-width: 1024px){form.svelte-1tq1kw8 button.svelte-1tq1kw8{font-size:1.8rem;line-height:2rem}}@media(min-width: 1024px){form.svelte-1tq1kw8 button.svelte-1tq1kw8{font-size:2rem;line-height:3rem}}form.svelte-1tq1kw8 button.svelte-1tq1kw8:hover{background-color:#324a29}.reviews-creation.svelte-1tq1kw8.svelte-1tq1kw8{position:relative;display:flex;align-items:center;height:calc(100vh - var(--headerHeigth))}.reviews-creation.svelte-1tq1kw8.svelte-1tq1kw8:before{content:"";position:absolute;top:0;left:0;height:calc(50vh - var(--headerHeigth) / 2);width:100vw;background-color:#c6d6c2}h1.svelte-1tq1kw8.svelte-1tq1kw8{font-size:3rem;line-height:3rem;font-weight:500;position:relative}.form__container.svelte-1tq1kw8.svelte-1tq1kw8{background:white;box-shadow:0px 3px 6px rgba(0, 0, 0, 0.1607843137);border-radius:35px;position:relative;padding:4.2rem 10rem 0.2rem;max-width:95.3rem;margin:5rem auto 0}span.starContainer.svelte-1tq1kw8.svelte-1tq1kw8{display:flex;-moz-column-gap:3rem;column-gap:3rem;margin:1rem 0 0}',
  map: null
};
const Creation = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_699220d6.a)(import_Header_f8c29f20.d, (value) => $mainHeaderHeight = value);
  let rating = null;
  let form = null;
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `<div class="${"reviews-creation svelte-1tq1kw8"}"${(0, import_index_699220d6.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)}><section class="${"container svelte-1tq1kw8"}"><h1 class="${"svelte-1tq1kw8"}">Ecrire mon t\xE9moignage</h1>
    <div class="${"form__container svelte-1tq1kw8"}"><form name="${"review"}" method="${"post"}" netlify="${""}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}" class="${"svelte-1tq1kw8"}"${(0, import_index_699220d6.b)("this", form, 0)}><div class="${"form__inputs svelte-1tq1kw8"}"><input type="${"hidden"}" name="${"form-name"}" value="${"review"}" class="${"svelte-1tq1kw8"}">
          <p class="${"hidden svelte-1tq1kw8"}"><label class="${"svelte-1tq1kw8"}">Don\u2019t fill this out if you\u2019re human: <input name="${"bot-field"}" class="${"svelte-1tq1kw8"}"></label></p>
          <label class="${"svelte-1tq1kw8"}">Nom <span class="${"svelte-1tq1kw8"}">(Facultatif)</span>
            <input name="${"first-name"}" type="${"text"}" placeholder="${"Entrez votre nom"}" class="${"svelte-1tq1kw8"}"></label><label class="${"svelte-1tq1kw8"}">Pr\xE9nom <span class="${"svelte-1tq1kw8"}">(Facultatif)</span>
            <input name="${"last-name"}" type="${"text"}" placeholder="${"Entrez votre pr\xE9nom"}" class="${"svelte-1tq1kw8"}"></label>
          <div class="${"feedback svelte-1tq1kw8"}"><label class="${"svelte-1tq1kw8"}">Note sur 5 <sup class="${"svelte-1tq1kw8"}">*</sup></label>
            <span id="${"feedbackContiner"}" class="${"feedbackContainer svelte-1tq1kw8"}"><span class="${"starContainer svelte-1tq1kw8"}">${(0, import_index_699220d6.e)(Array(5), (_, i) => {
    return `${(0, import_index_699220d6.v)(Star, "Star").$$render(
      $$result,
      {
        filled: rating >= i + 1,
        starId: i + 1
      },
      {},
      {}
    )}`;
  })}</span></span></div>
          <label class="${"label--message svelte-1tq1kw8"}">T\xE9moignage <span class="${"svelte-1tq1kw8"}">(Facultatif)</span>
            <textarea name="${"message"}" placeholder="${"\xC9crire..."}" class="${"svelte-1tq1kw8"}"></textarea></label></div>
        <button type="${"submit"}" class="${"svelte-1tq1kw8"}">Publier</button></form></div></section>
</div>`;
});
