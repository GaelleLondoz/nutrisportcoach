import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { T as TabsList } from "../../../chunks/TabsList.js";
import { d as data } from "../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TabsList, "TabsList").$$render($$result, { data: data?.about?.tabs }, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
