import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { T as TabsList } from "../../../chunks/TabsList.js";
import { d as data } from "../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$page.url.pathname !== "/philosophie" ? `${validate_component(TabsList, "TabsList").$$render(
    $$result,
    {
      data: data?.philosophie?.tabs,
      tabsWithImages: true
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``}` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
