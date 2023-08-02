import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from "../../chunks/ssr.js";
import { d as dynamicOffsetHeight, H as Header } from "../../chunks/Header.js";
import { d as data } from "../../chunks/index3.js";
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-15mjpfm{padding-top:var(--headerHeigth)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = subscribe(dynamicOffsetHeight, (value) => $mainHeaderHeight = value);
  $$result.css.add(css);
  $$unsubscribe_mainHeaderHeight();
  return `${data ? `${validate_component(Header, "Header").$$render($$result, { data: data.menu }, {}, {})}` : ``} <main${add_attribute("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)} class="svelte-15mjpfm">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
