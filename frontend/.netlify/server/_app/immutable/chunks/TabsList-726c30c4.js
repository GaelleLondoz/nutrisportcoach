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
  T: () => TabsList
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("./index-699220d6.js");
var import_stores_760db7b6 = require("./stores-760db7b6.js");
var import_store_breakpoint_f870d4ad = require("./store-breakpoint-f870d4ad.js");
const TabsItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-7x0bcu.svelte-7x0bcu,.svelte-7x0bcu.svelte-7x0bcu::after,.svelte-7x0bcu.svelte-7x0bcu::before{box-sizing:border-box}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}li.svelte-7x0bcu.svelte-7x0bcu{padding:3rem 0;font-size:2rem;color:#d4d2d2;font-weight:500;transition:all 0.4s ease-in-out;position:relative}@media(max-width: 1024px){li.svelte-7x0bcu.svelte-7x0bcu:not(.with-image){width:calc(100% / var(--numberOfTabs))}li.with-image.svelte-7x0bcu.svelte-7x0bcu{width:auto}}@media(min-width: 1024px){li.svelte-7x0bcu.svelte-7x0bcu{width:100%;margin:0 7rem}}li.svelte-7x0bcu a.svelte-7x0bcu{width:100%;display:flex;justify-content:center;align-items:center}li.svelte-7x0bcu:not(.active) img.svelte-7x0bcu{width:5.1rem}li.active.svelte-7x0bcu.svelte-7x0bcu{color:#486b3b}@media(max-width: 1024px){li:not(.with-image).active.svelte-7x0bcu.svelte-7x0bcu::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}li.svelte-7x0bcu.svelte-7x0bcu:not(.with-image)::after{width:0%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}@media(max-width: 1024px) and (hover: hover) and (pointer: fine){li.svelte-7x0bcu.svelte-7x0bcu:not(.with-image):hover{color:#486b3b}li.svelte-7x0bcu.svelte-7x0bcu:not(.with-image):hover::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}@media(min-width: 1024px){li.active.svelte-7x0bcu.svelte-7x0bcu::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}li.svelte-7x0bcu.svelte-7x0bcu::after{width:0%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}@media(min-width: 1024px) and (hover: hover) and (pointer: fine){li.svelte-7x0bcu.svelte-7x0bcu:hover{color:#486b3b}li.svelte-7x0bcu.svelte-7x0bcu:hover::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}',
  map: null
};
const TabsItem = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let smallViewport;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $page, $$unsubscribe_page;
  $$unsubscribe_breakpoint = (0, import_index_699220d6.a)(import_store_breakpoint_f870d4ad.b, (value) => $breakpoint = value);
  $$unsubscribe_page = (0, import_index_699220d6.a)(import_stores_760db7b6.p, (value) => $page = value);
  let { url = "" } = $$props;
  let { label = "" } = $$props;
  let { alternativeText = "" } = $$props;
  let { cloudinaryHash = "" } = $$props;
  let { numberOfTabs = 0 } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.alternativeText === void 0 && $$bindings.alternativeText && alternativeText !== void 0)
    $$bindings.alternativeText(alternativeText);
  if ($$props.cloudinaryHash === void 0 && $$bindings.cloudinaryHash && cloudinaryHash !== void 0)
    $$bindings.cloudinaryHash(cloudinaryHash);
  if ($$props.numberOfTabs === void 0 && $$bindings.numberOfTabs && numberOfTabs !== void 0)
    $$bindings.numberOfTabs(numberOfTabs);
  $$result.css.add(css$1);
  smallViewport = ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
  $$unsubscribe_breakpoint();
  $$unsubscribe_page();
  return `<li${(0, import_index_699220d6.b)("style", `--numberOfTabs: ${numberOfTabs}`, 0)} class="${[
    "svelte-7x0bcu",
    ($page.url.pathname.includes(url) ? "active" : "") + " " + (cloudinaryHash && alternativeText ? "with-image" : "")
  ].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_699220d6.b)("href", url, 0)} class="${"no-underline svelte-7x0bcu"}">${cloudinaryHash && alternativeText && smallViewport ? `<picture class="${"svelte-7x0bcu"}"><source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_250/" + (0, import_index_699220d6.d)(cloudinaryHash, true)}" media="${"(min-width: 1024px)"}" class="${"svelte-7x0bcu"}">

        <img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_80/" + (0, import_index_699220d6.d)(cloudinaryHash, true)}"${(0, import_index_699220d6.b)("alt", alternativeText, 0)} class="${"svelte-7x0bcu"}"></picture>` : ``}
    ${label ? `${smallViewport ? `${!cloudinaryHash && !alternativeText ? `${(0, import_index_699220d6.d)(label)}` : ``}` : `${(0, import_index_699220d6.d)(label)}`}` : ``}</a>
</li>`;
});
const TabsList_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1869ru2,.svelte-1869ru2::after,.svelte-1869ru2::before{box-sizing:border-box}.container.svelte-1869ru2{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){nav.svelte-1869ru2{margin-bottom:2rem}}@media(min-width: 1024px){nav.svelte-1869ru2{margin:5.5rem auto;display:flex;justify-content:space-between;align-items:center}}.tabs-items.svelte-1869ru2{width:100%}ul.svelte-1869ru2{display:flex;width:100%;justify-content:space-between;align-items:center;padding:0;list-style-type:none}@media(max-width: 1024px){ul.with-image.svelte-1869ru2{gap:4.7rem;justify-content:center}}@media(min-width: 1024px){ul.svelte-1869ru2{display:flex}}',
  map: null
};
const TabsList = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let { tabsWithImages = false } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.tabsWithImages === void 0 && $$bindings.tabsWithImages && tabsWithImages !== void 0)
    $$bindings.tabsWithImages(tabsWithImages);
  $$result.css.add(css);
  return `${(data == null ? void 0 : data.length) ? `<nav class="${"nav container svelte-1869ru2"}"><div class="${"tabs-items svelte-1869ru2"}"><ul class="${["svelte-1869ru2", tabsWithImages ? "with-image" : ""].join(" ").trim()}">${(0, import_index_699220d6.e)(data, (tab) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return `${(0, import_index_699220d6.v)(TabsItem, "TabsItem").$$render(
      $$result,
      {
        numberOfTabs: data == null ? void 0 : data.length,
        url: tabsWithImages ? (_d = (_c = (_b = (_a = tab == null ? void 0 : tab.url) == null ? void 0 : _a.page) == null ? void 0 : _b.data) == null ? void 0 : _c.attributes) == null ? void 0 : _d.url : (_g = (_f = (_e = tab == null ? void 0 : tab.page) == null ? void 0 : _e.data) == null ? void 0 : _f.attributes) == null ? void 0 : _g.url,
        label: tabsWithImages ? (_h = tab == null ? void 0 : tab.url) == null ? void 0 : _h.label : tab == null ? void 0 : tab.label,
        alternativeText: (_k = (_j = (_i = tab == null ? void 0 : tab.image) == null ? void 0 : _i.data) == null ? void 0 : _j.attributes) == null ? void 0 : _k.alternativeText,
        cloudinaryHash: (_n = (_m = (_l = tab == null ? void 0 : tab.image) == null ? void 0 : _l.data) == null ? void 0 : _m.attributes) == null ? void 0 : _n.hash
      },
      {},
      {}
    )}`;
  })}</ul></div></nav>` : ``}`;
});
