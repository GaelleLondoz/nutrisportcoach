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
var import_index_4688debc = require("../../../immutable/chunks/index-4688debc.js");
var import_HTML_15b647e7 = require("../../../immutable/chunks/HTML-15b647e7.js");
var import_Header_27331545 = require("../../../immutable/chunks/Header-27331545.js");
var import_sanitize_html = require("sanitize-html");
var import_heroicons = require("@steeze-ui/heroicons");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap");.svelte-9ucw4p.svelte-9ucw4p,.svelte-9ucw4p.svelte-9ucw4p::after,.svelte-9ucw4p.svelte-9ucw4p::before{box-sizing:border-box}.container.svelte-9ucw4p.svelte-9ucw4p{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;padding-top:10rem;max-height:calc(100vh - var(--headerHeigth))}h1.svelte-9ucw4p.svelte-9ucw4p{font-size:5rem;line-height:9rem}p.svelte-9ucw4p.svelte-9ucw4p{font-size:2.5rem;line-height:3.3rem;max-width:87.6rem;letter-spacing:0.63px;margin-bottom:5rem}.programs.svelte-9ucw4p.svelte-9ucw4p{display:flex;justify-content:space-between;width:100%;gap:14rem}.programs.svelte-9ucw4p .program.svelte-9ucw4p{width:100%;display:flex;flex-direction:column;align-items:center}.programs.svelte-9ucw4p .program__card.svelte-9ucw4p{width:100%;position:relative;display:flex;flex-direction:column;align-items:center;border-radius:16px;box-shadow:0px 10px 6px rgba(0, 0, 0, 0.04);overflow:hidden;padding:9rem 0;height:100%;border:1px solid rgba(255, 255, 255, 0.6901960784)}.programs.svelte-9ucw4p .program__card span.svelte-9ucw4p{margin-top:6rem;font-size:3rem;font-weight:medium}.programs.svelte-9ucw4p .program__card img.svelte-9ucw4p{max-width:16rem}.programs.svelte-9ucw4p .program__card.svelte-9ucw4p:after{content:"";width:100%;height:100%;opacity:0.38;position:absolute;left:0;top:0;background:var(--background)}.programs.svelte-9ucw4p .program .btn-more.svelte-9ucw4p{background-color:#e0dddd;color:white;border-radius:15px;padding:15px 21px;margin:2rem 0;font-size:15px;transition:all ease-in-out 0.4s}.programs.svelte-9ucw4p .program .btn-more.svelte-9ucw4p:hover{background-color:#c8c2c2}',
  map: null
};
const prerender = true;
const load = async ({ fetch, params }) => {
  const res = await fetch(`http://localhost:1337/api/philosophie?populate=deep`);
  if (res.ok) {
    const { data } = await res.json();
    return { props: { data } };
  }
};
const Philosophie = (0, import_index_4688debc.c)(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_4688debc.b)(import_Header_27331545.d, (value) => $mainHeaderHeight = value);
  let { data = null } = $$props;
  const { title, description, metaTitle, metaDescription, programs } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_4688debc.e)(metaTitle)}</title>`, ""}<meta name="${"description"}"${(0, import_index_4688debc.f)("content", metaDescription, 0)} class="${"svelte-9ucw4p"}" data-svelte="svelte-nygp0t">`, ""}

${data ? `<section class="${"container svelte-9ucw4p"}"${(0, import_index_4688debc.f)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)}><div class="${"content flex flex-col items-end md:items-start justify-center svelte-9ucw4p"}"><h1 class="${"font-bold text-right md:text-left svelte-9ucw4p"}">${(0, import_index_4688debc.v)(import_HTML_15b647e7.H, "HTML").$$render($$result, { text: title }, {}, {})}</h1>
      <p class="${"svelte-9ucw4p"}">${(0, import_index_4688debc.v)(import_HTML_15b647e7.H, "HTML").$$render($$result, { text: description }, {}, {})}</p>

      <div class="${"programs svelte-9ucw4p"}">${(0, import_index_4688debc.d)(programs.data, (program) => {
    return `<div class="${"program svelte-9ucw4p"}"><div class="${"program__card svelte-9ucw4p"}"${(0, import_index_4688debc.f)("style", `--background: ${program.attributes.background}`, 0)}><img${(0, import_index_4688debc.f)("alt", program.attributes.image.data.attributes.alternativeText, 0)} src="${"http://localhost:1337" + (0, import_index_4688debc.e)(program.attributes.image.data.attributes.url, true)}" class="${"svelte-9ucw4p"}">
              <span class="${"svelte-9ucw4p"}">${(0, import_index_4688debc.e)(program.attributes.title)}</span></div>
            <a class="${"btn-more svelte-9ucw4p"}" sveltekit:prefetch href="${"/programs/" + (0, import_index_4688debc.e)(program.attributes.buttonLink, true)}">${(0, import_index_4688debc.e)(program.attributes.buttonText)}</a>
          </div>`;
  })}</div>

      <div class="${"svelte-9ucw4p"}"></div></div></section>` : ``}`;
});
