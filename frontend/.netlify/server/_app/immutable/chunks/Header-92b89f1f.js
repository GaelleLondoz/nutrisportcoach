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
  H: () => Header,
  d: () => dynamicOffsetHeight
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("./index-a7d28e02.js");
var import_store_breakpoint_bdbf653d = require("./store-breakpoint-bdbf653d.js");
var import_stores_20da12b8 = require("./stores-20da12b8.js");
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda,.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda::after,.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda::before{box-sizing:border-box}a.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda{text-decoration:none}.container.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}header.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda{position:fixed;z-index:20;width:100vw;top:0;background-color:#fff;box-shadow:-0.2rem 0.5rem 0.6rem rgba(0, 16, 24, 0.16)}@media(max-width: 1024px){header.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda{height:5rem}}@media(min-width: 1024px){header.svelte-1mu3eda.svelte-1mu3eda.svelte-1mu3eda{height:7.5rem;display:flex;align-items:center}}header.svelte-1mu3eda .nav.svelte-1mu3eda.svelte-1mu3eda{display:flex;align-items:center;justify-content:space-between}@media(max-width: 1024px){header.svelte-1mu3eda .nav.svelte-1mu3eda.svelte-1mu3eda{flex-direction:row-reverse;height:100%}header.svelte-1mu3eda .nav input[type=checkbox].svelte-1mu3eda.svelte-1mu3eda{position:absolute;display:block;height:32px;width:32px;top:20px;left:20px;z-index:40;opacity:0;cursor:pointer}header.svelte-1mu3eda .nav input[type=checkbox].svelte-1mu3eda:checked~.nav__background.svelte-1mu3eda{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:10;background-color:rgba(0, 0, 0, 0.63)}header.svelte-1mu3eda .nav input[type=checkbox].svelte-1mu3eda:checked~.menu-items--mobile.svelte-1mu3eda{transform:translateX(0)}header.svelte-1mu3eda .nav input[type=checkbox]:checked~.nav__header .hamburger-lines .line1.svelte-1mu3eda.svelte-1mu3eda{transform:rotate(45deg);transform-origin:20%}header.svelte-1mu3eda .nav input[type=checkbox]:checked~.nav__header .hamburger-lines .line2.svelte-1mu3eda.svelte-1mu3eda{transform:scaleY(0)}header.svelte-1mu3eda .nav input[type=checkbox]:checked~.nav__header .hamburger-lines .line3.svelte-1mu3eda.svelte-1mu3eda{transform:rotate(-45deg);width:100%;transform-origin:15% 10%}header.svelte-1mu3eda .nav__header.svelte-1mu3eda.svelte-1mu3eda{display:flex;width:100%;justify-content:space-between;align-items:center}header.svelte-1mu3eda .nav__header .hamburger-lines.svelte-1mu3eda.svelte-1mu3eda{height:1.9rem;width:3.4rem;position:relative;z-index:30;display:flex;flex-direction:column;justify-content:space-between}header.svelte-1mu3eda .nav__header .hamburger-lines .line.svelte-1mu3eda.svelte-1mu3eda{display:block;height:3px;width:100%;border-radius:10px;background:#486b3b}header.svelte-1mu3eda .nav__header .hamburger-lines .line1.svelte-1mu3eda.svelte-1mu3eda{transition:all 0.4s ease-in-out;transform-origin:0% 0%;width:100%}header.svelte-1mu3eda .nav__header .hamburger-lines .line2.svelte-1mu3eda.svelte-1mu3eda{transition:transform 0.2s ease-in-out;width:80%}header.svelte-1mu3eda .nav__header .hamburger-lines .line3.svelte-1mu3eda.svelte-1mu3eda{transition:all 0.4s ease-in-out;transform-origin:0% 100%;width:60%}header.svelte-1mu3eda .nav__header .logo--big.svelte-1mu3eda.svelte-1mu3eda{max-height:3.5rem}}@media(min-width: 1024px){header.svelte-1mu3eda .nav__header .logo--big.svelte-1mu3eda.svelte-1mu3eda{max-height:100%}}header.svelte-1mu3eda .nav .menu-items--mobile.svelte-1mu3eda.svelte-1mu3eda{box-shadow:inset 0 0 2000px rgba(255, 255, 255, 0.5);height:100vh;width:60vw;max-width:30rem;transform:translate(-150%);background:linear-gradient(167deg, hsl(106deg, 15%, 71%) 0%, hsl(0deg, 0%, 100%) 100%);transition:all 0.4s ease-in-out;flex-direction:column;margin-left:0;padding-left:0;text-align:center;position:absolute;left:0;top:0;display:flex;box-shadow:0px 10px 6px rgba(0, 0, 0, 0.16);z-index:20}header.svelte-1mu3eda .nav .menu-items--mobile ul.svelte-1mu3eda.svelte-1mu3eda{flex-direction:column;display:flex;list-style-type:none;padding:0}header.svelte-1mu3eda .nav .menu-items--mobile ul li.svelte-1mu3eda.svelte-1mu3eda{transition:all 0.4s ease-in-out;padding:2.2rem 2rem;text-align:left;font-size:1.8rem;color:#1a2a34;letter-spacing:0.063rem;font-weight:500}@media(hover: hover) and (pointer: fine){header.svelte-1mu3eda .nav .menu-items--mobile ul li.svelte-1mu3eda.svelte-1mu3eda:hover{background-color:#b0bcac}}header.svelte-1mu3eda .nav .menu-items--mobile ul li.active.svelte-1mu3eda.svelte-1mu3eda{background-color:#b0bcac}header.svelte-1mu3eda .nav .menu-items--mobile .logo--small.svelte-1mu3eda.svelte-1mu3eda{min-width:6.3rem;min-height:6.3rem;margin:7rem auto}header.svelte-1mu3eda .nav .menu-items--desktop.svelte-1mu3eda.svelte-1mu3eda{transform:translate(0%)}header.svelte-1mu3eda .nav .menu-items--desktop ul.svelte-1mu3eda.svelte-1mu3eda{flex-direction:row;gap:9rem;display:flex;padding:0;list-style-type:none}header.svelte-1mu3eda .nav .menu-items--desktop ul li.svelte-1mu3eda.svelte-1mu3eda{transition:all 0.4s ease-in-out;font-size:2rem;line-height:2rem;color:#1a2a34;letter-spacing:0.063rem;font-weight:500}header.svelte-1mu3eda .nav .menu-items--desktop ul li.active.svelte-1mu3eda.svelte-1mu3eda,header.svelte-1mu3eda .nav .menu-items--desktop ul li.svelte-1mu3eda.svelte-1mu3eda:hover{color:#486b3b}',
  map: null
};
const dynamicOffsetHeight = (0, import_store_breakpoint_bdbf653d.w)(0);
const Header = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let smallViewport;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $$unsubscribe_dynamicOffsetHeight;
  let $page, $$unsubscribe_page;
  $$unsubscribe_breakpoint = (0, import_index_a7d28e02.a)(import_store_breakpoint_bdbf653d.b, (value) => $breakpoint = value);
  $$unsubscribe_dynamicOffsetHeight = (0, import_index_a7d28e02.a)(dynamicOffsetHeight, (value) => value);
  $$unsubscribe_page = (0, import_index_a7d28e02.a)(import_stores_20da12b8.p, (value) => $page = value);
  let { data = null } = $$props;
  let checked = false;
  let mounted = false;
  const { items, logoBig: { data: { attributes: { hash: logoBigUrl, alternativeText: logoBigAlt } } }, logoSmall: { data: { attributes: { hash: logoSmallUrl, alternativeText: logoSmallAlt } } } } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  smallViewport = ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
  $$unsubscribe_breakpoint();
  $$unsubscribe_dynamicOffsetHeight();
  $$unsubscribe_page();
  return `${data && mounted ? `<header class="${"svelte-1mu3eda"}"><nav class="${"nav container svelte-1mu3eda"}">${smallViewport ? `<input class="${"checkbox svelte-1mu3eda"}" type="${"checkbox"}" name="${""}" id="${""}"${(0, import_index_a7d28e02.b)("checked", checked, 1)}>
        <div class="${"nav__background svelte-1mu3eda"}"></div>` : ``}

      <div class="${"nav__header svelte-1mu3eda"}">${smallViewport ? `<div class="${"hamburger-lines svelte-1mu3eda"}"><span class="${"line line1 svelte-1mu3eda"}"></span>
            <span class="${"line line2 svelte-1mu3eda"}"></span>
            <span class="${"line line3 svelte-1mu3eda"}"></span></div>` : ``}

        <a sveltekit:prefetch href="${"/"}" class="${"no-underline svelte-1mu3eda"}"><img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto/" + (0, import_index_a7d28e02.e)(logoBigUrl, true)}"${(0, import_index_a7d28e02.b)("alt", logoBigAlt, 0)} class="${"logo logo--big svelte-1mu3eda"}"></a></div>

      ${!smallViewport ? `<div class="${"menu-items--desktop svelte-1mu3eda"}"><ul class="${"svelte-1mu3eda"}">${(0, import_index_a7d28e02.d)(items, ({ label, page: { data: { attributes: { url } } } }) => {
    return `<li class="${[
      "svelte-1mu3eda",
      (!$page.url.pathname.includes("/a-propos") ? $page.url.pathname.includes(url) : url.includes("/a-propos")) ? "active" : ""
    ].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_a7d28e02.b)("href", url, 0)} class="${"svelte-1mu3eda"}">${(0, import_index_a7d28e02.e)(label)}</a>
              </li>`;
  })}</ul></div>` : `<div class="${"menu-items--mobile svelte-1mu3eda"}"><a sveltekit:prefetch href="${"/"}" class="${"no-underline svelte-1mu3eda"}"><img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto/" + (0, import_index_a7d28e02.e)(logoSmallUrl, true)}"${(0, import_index_a7d28e02.b)("alt", logoSmallAlt, 0)} class="${"logo logo--small svelte-1mu3eda"}"></a>

          <ul class="${"svelte-1mu3eda"}">${(0, import_index_a7d28e02.d)(items, ({ label, page: { data: { attributes: { url } } } }) => {
    return `<li class="${["svelte-1mu3eda", $page.url.pathname.includes(url) ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_a7d28e02.b)("href", url, 0)} class="${"svelte-1mu3eda"}">${(0, import_index_a7d28e02.e)(label)}</a>
              </li>`;
  })}</ul></div>`}</nav></header>` : ``}`;
});
