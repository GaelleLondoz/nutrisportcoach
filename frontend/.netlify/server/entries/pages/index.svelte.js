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
var import_index_4688debc = require("../../immutable/chunks/index-4688debc.js");
var import_HTML_15b647e7 = require("../../immutable/chunks/HTML-15b647e7.js");
var import_Header_27331545 = require("../../immutable/chunks/Header-27331545.js");
var import_sanitize_html = require("sanitize-html");
var import_heroicons = require("@steeze-ui/heroicons");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap");.svelte-hx23he.svelte-hx23he,.svelte-hx23he.svelte-hx23he::after,.svelte-hx23he.svelte-hx23he::before{box-sizing:border-box}.container.svelte-hx23he.svelte-hx23he{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}body{background-color:rgba(72, 107, 59, 0.12);overflow:hidden}section.svelte-hx23he.svelte-hx23he{height:calc(100vh - var(--headerHeigth))}section.svelte-hx23he h1.svelte-hx23he{font-size:2rem;line-height:3rem;margin-bottom:3rem}section.svelte-hx23he h1.svelte-hx23he span{color:#486b3b}section.svelte-hx23he a.svelte-hx23he{background-color:#486b3b;border-radius:1rem;padding:0.8rem 2.3rem;font-size:1.5rem}@media(min-width: 768px){section.svelte-hx23he h1.svelte-hx23he{font-size:5.5rem;line-height:8rem;margin-bottom:8rem}section.svelte-hx23he a.svelte-hx23he{border-radius:1.5rem;padding:0.5rem 3.2rem;font-size:2.5rem;transition:all ease-in-out 0.4s}section.svelte-hx23he a.svelte-hx23he:hover{background-color:#324a29}}',
  map: null
};
const prerender = true;
const load = async ({ fetch, params }) => {
  const res = await fetch(`http://localhost:1337/api/homepage`);
  if (res.ok) {
    const { data } = await res.json();
    return { props: { data } };
  }
};
const Routes = (0, import_index_4688debc.c)(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_4688debc.b)(import_Header_27331545.d, (value) => $mainHeaderHeight = value);
  let { data = null } = $$props;
  const { title, buttonText, buttonLink, metaTitle, metaDescription } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_4688debc.e)(metaTitle)}</title>`, ""}<meta name="${"description"}"${(0, import_index_4688debc.f)("content", metaDescription, 0)} class="${"svelte-hx23he"}" data-svelte="svelte-nygp0t">`, ""}

${data ? `<section class="${"container flex justify-end md:justify-start md:items-center svelte-hx23he"}"${(0, import_index_4688debc.f)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)}><div class="${"content flex flex-col items-end md:items-start justify-center svelte-hx23he"}"><h1 class="${"font-bold text-right md:text-left svelte-hx23he"}">${(0, import_index_4688debc.v)(import_HTML_15b647e7.H, "HTML").$$render($$result, { text: title }, {}, {})}</h1>
      <div class="${"svelte-hx23he"}"><a class="${"text-white svelte-hx23he"}" sveltekit:prefetch${(0, import_index_4688debc.f)("href", buttonLink, 0)}>${(0, import_index_4688debc.e)(buttonText)}</a></div></div></section>` : ``}`;
});
