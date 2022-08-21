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
var import_index_699220d6 = require("./index-699220d6.js");
var import_store_breakpoint_f870d4ad = require("./store-breakpoint-f870d4ad.js");
var import_stores_760db7b6 = require("./stores-760db7b6.js");
const getMenuData = async () => {
  const response = await fetch(
    "https://nutrisportcoach.herokuapp.com/api/menu?populate=deep"
  );
  if (response.status === 200) {
    return await response.json();
  }
  return {
    status: response.status
  };
};
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs,.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs::after,.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs::before{box-sizing:border-box}.container.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}header.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs{position:fixed;width:100vw;top:0;background-color:#fff;box-shadow:-0.2rem 0.5rem 0.6rem rgba(0, 16, 24, 0.16)}@media(max-width: 1024px){header.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs{height:5rem}}@media(min-width: 1024px){header.svelte-12yz7zs.svelte-12yz7zs.svelte-12yz7zs{height:7.5rem}}@media(max-width: 1024px){header.svelte-12yz7zs .nav.svelte-12yz7zs.svelte-12yz7zs{display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;height:100%}header.svelte-12yz7zs .nav input[type=checkbox].svelte-12yz7zs.svelte-12yz7zs{position:absolute;display:block;height:32px;width:32px;top:20px;left:20px;z-index:40;opacity:0;cursor:pointer}header.svelte-12yz7zs .nav input[type=checkbox].svelte-12yz7zs:checked~.nav__background.svelte-12yz7zs{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:10;background-color:rgba(0, 0, 0, 0.63)}header.svelte-12yz7zs .nav input[type=checkbox].svelte-12yz7zs:checked~.menu-items--mobile.svelte-12yz7zs{transform:translateX(0)}header.svelte-12yz7zs .nav input[type=checkbox]:checked~.nav__header .hamburger-lines .line1.svelte-12yz7zs.svelte-12yz7zs{transform:rotate(45deg);transform-origin:20%}header.svelte-12yz7zs .nav input[type=checkbox]:checked~.nav__header .hamburger-lines .line2.svelte-12yz7zs.svelte-12yz7zs{transform:scaleY(0)}header.svelte-12yz7zs .nav input[type=checkbox]:checked~.nav__header .hamburger-lines .line3.svelte-12yz7zs.svelte-12yz7zs{transform:rotate(-45deg);width:100%;transform-origin:15% 10%}header.svelte-12yz7zs .nav__header.svelte-12yz7zs.svelte-12yz7zs{display:flex;width:100%;justify-content:space-between;align-items:center}header.svelte-12yz7zs .nav__header .hamburger-lines.svelte-12yz7zs.svelte-12yz7zs{height:1.9rem;width:3.4rem;position:relative;z-index:30;display:flex;flex-direction:column;justify-content:space-between}header.svelte-12yz7zs .nav__header .hamburger-lines .line.svelte-12yz7zs.svelte-12yz7zs{display:block;height:3px;width:100%;border-radius:10px;background:#486b3b}header.svelte-12yz7zs .nav__header .hamburger-lines .line1.svelte-12yz7zs.svelte-12yz7zs{transition:all 0.4s ease-in-out;transform-origin:0% 0%;width:100%}header.svelte-12yz7zs .nav__header .hamburger-lines .line2.svelte-12yz7zs.svelte-12yz7zs{transition:transform 0.2s ease-in-out;width:80%}header.svelte-12yz7zs .nav__header .hamburger-lines .line3.svelte-12yz7zs.svelte-12yz7zs{transition:all 0.4s ease-in-out;transform-origin:0% 100%;width:60%}header.svelte-12yz7zs .nav__header .logo--big.svelte-12yz7zs.svelte-12yz7zs{max-height:3.5rem}}@media(min-width: 1024px){header.svelte-12yz7zs .nav__header .logo--big.svelte-12yz7zs.svelte-12yz7zs{max-height:100%}}header.svelte-12yz7zs .nav .menu-items--mobile.svelte-12yz7zs.svelte-12yz7zs{box-shadow:inset 0 0 2000px rgba(255, 255, 255, 0.5);height:100vh;width:60vw;max-width:30rem;transform:translate(-150%);background:linear-gradient(167deg, hsl(106deg, 15%, 71%) 0%, hsl(0deg, 0%, 100%) 100%);transition:all 0.4s ease-in-out;flex-direction:column;margin-left:0;padding-left:0;text-align:center;position:absolute;left:0;top:0;display:flex;box-shadow:0px 10px 6px rgba(0, 0, 0, 0.16);z-index:20}header.svelte-12yz7zs .nav .menu-items--mobile ul.svelte-12yz7zs.svelte-12yz7zs{flex-direction:column;display:flex}header.svelte-12yz7zs .nav .menu-items--mobile ul li.svelte-12yz7zs.svelte-12yz7zs{transition:all 0.4s ease-in-out;padding:2.2rem 2rem;text-align:left;font-size:1.8rem;color:#1a2a34;letter-spacing:0.063rem;font-weight:500}@media(hover: hover) and (pointer: fine){header.svelte-12yz7zs .nav .menu-items--mobile ul li.svelte-12yz7zs.svelte-12yz7zs:hover{background-color:#b0bcac}}header.svelte-12yz7zs .nav .menu-items--mobile ul li.active.svelte-12yz7zs.svelte-12yz7zs{background-color:#b0bcac}header.svelte-12yz7zs .nav .menu-items--mobile .logo--small.svelte-12yz7zs.svelte-12yz7zs{min-width:6.3rem;min-height:6.3rem;margin:7rem auto}header.svelte-12yz7zs .nav .menu-items--desktop.svelte-12yz7zs.svelte-12yz7zs{transform:translate(0%)}header.svelte-12yz7zs .nav .menu-items--desktop ul.svelte-12yz7zs.svelte-12yz7zs{flex-direction:row;gap:9rem;display:flex}header.svelte-12yz7zs .nav .menu-items--desktop ul li.svelte-12yz7zs.svelte-12yz7zs{transition:all 0.4s ease-in-out;font-size:2rem;line-height:2rem;color:#1a2a34;letter-spacing:0.063rem;font-weight:500}header.svelte-12yz7zs .nav .menu-items--desktop ul li.active.svelte-12yz7zs.svelte-12yz7zs,header.svelte-12yz7zs .nav .menu-items--desktop ul li.svelte-12yz7zs.svelte-12yz7zs:hover{color:#486b3b}',
  map: null
};
const dynamicOffsetHeight = (0, import_store_breakpoint_f870d4ad.w)(0);
const Header = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let smallViewport;
  let menu;
  let logo;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $$unsubscribe_dynamicOffsetHeight;
  let $page, $$unsubscribe_page;
  $$unsubscribe_breakpoint = (0, import_index_699220d6.a)(import_store_breakpoint_f870d4ad.b, (value) => $breakpoint = value);
  $$unsubscribe_dynamicOffsetHeight = (0, import_index_699220d6.a)(dynamicOffsetHeight, (value) => value);
  $$unsubscribe_page = (0, import_index_699220d6.a)(import_stores_760db7b6.p, (value) => $page = value);
  let data = null;
  let checked = false;
  const loadMenuData = async () => {
    data = await getMenuData();
  };
  loadMenuData();
  $$result.css.add(css);
  smallViewport = ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
  menu = (_b = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.attributes) == null ? void 0 : _b.items;
  logo = (_c = data == null ? void 0 : data.data) == null ? void 0 : _c.attributes;
  $$unsubscribe_breakpoint();
  $$unsubscribe_dynamicOffsetHeight();
  $$unsubscribe_page();
  return `${data ? `<header class="${"md:flex md:items-center relative z-20 svelte-12yz7zs"}"><nav class="${"nav container md:flex md:justify-between md:items-center svelte-12yz7zs"}">${smallViewport ? `<input class="${"checkbox svelte-12yz7zs"}" type="${"checkbox"}" name="${""}" id="${""}"${(0, import_index_699220d6.b)("checked", checked, 1)}>
        <div class="${"nav__background svelte-12yz7zs"}"></div>` : ``}

      <div class="${"nav__header svelte-12yz7zs"}">${smallViewport ? `<div class="${"hamburger-lines svelte-12yz7zs"}"><span class="${"line line1 svelte-12yz7zs"}"></span>
            <span class="${"line line2 svelte-12yz7zs"}"></span>
            <span class="${"line line3 svelte-12yz7zs"}"></span></div>` : ``}

        <a sveltekit:prefetch href="${"/"}" class="${"no-underline svelte-12yz7zs"}"><img class="${"logo logo--big svelte-12yz7zs"}"${(0, import_index_699220d6.b)("src", logo.logoBig.data.attributes.url, 0)} alt="${"logo"}"></a></div>

      ${!smallViewport ? `<div class="${"menu-items--desktop svelte-12yz7zs"}"><ul class="${"md:flex p-0 list-none svelte-12yz7zs"}">${(0, import_index_699220d6.e)(menu, ({ label, page: { data: { attributes: { url } } } }) => {
    return `<li class="${[
      "svelte-12yz7zs",
      (!$page.url.pathname.includes("/a-propos") ? $page.url.pathname.includes(url) : url.includes("/a-propos")) ? "active" : ""
    ].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_699220d6.b)("href", url, 0)} class="${"no-underline svelte-12yz7zs"}">${(0, import_index_699220d6.d)(label)}</a>
              </li>`;
  })}</ul></div>` : `<div class="${"menu-items--mobile svelte-12yz7zs"}"><a sveltekit:prefetch href="${"/"}" class="${"no-underline svelte-12yz7zs"}"><img class="${"logo logo--small svelte-12yz7zs"}"${(0, import_index_699220d6.b)("src", logo.logoSmall.data.attributes.url, 0)} alt="${"logo"}"></a>

          <ul class="${"md:flex p-0 list-none svelte-12yz7zs"}">${(0, import_index_699220d6.e)(menu, ({ label, page: { data: { attributes: { url } } } }) => {
    return `<li class="${["svelte-12yz7zs", $page.url.pathname.includes(url) ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_699220d6.b)("href", url, 0)} class="${"no-underline svelte-12yz7zs"}">${(0, import_index_699220d6.d)(label)}</a>
              </li>`;
  })}</ul></div>`}</nav></header>` : ``}`;
});
