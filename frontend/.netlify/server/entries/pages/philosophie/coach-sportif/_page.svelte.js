import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { d as data } from "../../../../chunks/index3.js";
import { b as breakpoint } from "../../../../chunks/store-breakpoint.js";
import { H as Head } from "../../../../chunks/Head.js";
import "dompurify";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-11u1od6.svelte-11u1od6,.svelte-11u1od6.svelte-11u1od6::after,.svelte-11u1od6.svelte-11u1od6::before{box-sizing:border-box}@media screen and (max-width: 767px){}.container.svelte-11u1od6.svelte-11u1od6{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}.container.svelte-11u1od6.svelte-11u1od6{position:relative;z-index:10;display:flex;justify-content:flex-start}@media(max-width: 1200px){.container.svelte-11u1od6.svelte-11u1od6{margin:0 auto}}@media(min-width: 1200px){.container.svelte-11u1od6.svelte-11u1od6{margin:10rem auto;align-items:center}}.container.svelte-11u1od6 .content.svelte-11u1od6{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:85rem}@media(max-width: 900px){.container.svelte-11u1od6 .content.svelte-11u1od6{margin-bottom:30rem}}@media(min-width: 900px){.container.svelte-11u1od6 .content.svelte-11u1od6{margin-bottom:10rem}}@media(min-width: 1200px){.container.svelte-11u1od6 .content.svelte-11u1od6{width:50vw}}@media(max-width: 1200px){.container.svelte-11u1od6 .content h1.svelte-11u1od6{font-size:2.4rem;line-height:3rem;margin-bottom:3rem;font-weight:bold}}@media(min-width: 1200px){.container.svelte-11u1od6 .content h1.svelte-11u1od6{font-size:3rem;line-height:4rem;margin-bottom:5.5rem;font-weight:500}}.container.svelte-11u1od6 .content.svelte-11u1od6 p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem}@media(max-width: 900px){.image--ball.svelte-11u1od6.svelte-11u1od6{position:absolute;bottom:0;right:0;max-width:40rem}}@media(min-width: 900px){.image--ball.svelte-11u1od6.svelte-11u1od6{max-width:35rem;margin:auto}}@media(min-width: 1200px){.image--ball.svelte-11u1od6.svelte-11u1od6{right:2rem;position:absolute;top:30%;max-width:54.2rem;width:30vw}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  const { seo: { metaTitle, metaDescription }, title, description } = data?.sport;
  $$result.css.add(css);
  ["xs", "sm"].includes($breakpoint?.name);
  $$unsubscribe_breakpoint();
  return `${data ? `${validate_component(Head, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})} ${``}` : ``}`;
});
export {
  Page as default
};
