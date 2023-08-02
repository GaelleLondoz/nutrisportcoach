import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { b as breakpoint } from "../../../../chunks/store-breakpoint.js";
import { d as data } from "../../../../chunks/index3.js";
import { H as Head } from "../../../../chunks/Head.js";
import "dompurify";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-gp6ep3.svelte-gp6ep3,.svelte-gp6ep3.svelte-gp6ep3::after,.svelte-gp6ep3.svelte-gp6ep3::before{box-sizing:border-box}@media screen and (max-width: 767px){}.container.svelte-gp6ep3.svelte-gp6ep3{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 1200px){#nutrition .tabs-items ul li:nth-child(2){order:-1}}.container.svelte-gp6ep3.svelte-gp6ep3{position:relative;z-index:10;display:flex;justify-content:center}@media(max-width: 1200px){.container.svelte-gp6ep3.svelte-gp6ep3{margin:0 auto}}@media(min-width: 1200px){.container.svelte-gp6ep3.svelte-gp6ep3{margin:10rem auto;align-items:center}}.container.svelte-gp6ep3 .content.svelte-gp6ep3{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:85rem}@media(min-width: 1200px){.container.svelte-gp6ep3 .content.svelte-gp6ep3{margin-left:5rem;width:45vw}}@media(max-width: 1200px){.container.svelte-gp6ep3 .content h1.svelte-gp6ep3{font-size:2.4rem;line-height:3rem;margin-bottom:3rem;font-weight:bold}}@media(min-width: 1200px){.container.svelte-gp6ep3 .content h1.svelte-gp6ep3{font-size:3rem;line-height:4rem;margin-bottom:5.5rem;font-weight:500}}.container.svelte-gp6ep3 .content.svelte-gp6ep3 p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem}.image.svelte-gp6ep3.svelte-gp6ep3{margin:auto}@media(min-width: 1200px){.image.svelte-gp6ep3.svelte-gp6ep3{position:absolute;bottom:0}}@media(min-width: 1200px){.image--plate.svelte-gp6ep3.svelte-gp6ep3{left:0;width:30vw;max-width:40rem}}@media(min-width: 1200px){.image--mojito.svelte-gp6ep3.svelte-gp6ep3{right:0;width:20vw;max-width:30rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  const { seo: { metaTitle, metaDescription }, title, description } = data?.nutrition;
  $$result.css.add(css);
  ["xs", "sm", "md", "lg"].includes($breakpoint?.name);
  $$unsubscribe_breakpoint();
  return `${data ? `${validate_component(Head, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})} ${``}` : ``}`;
});
export {
  Page as default
};
