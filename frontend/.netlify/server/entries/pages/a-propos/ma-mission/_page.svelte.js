import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { b as breakpoint } from "../../../../chunks/store-breakpoint.js";
import { d as data } from "../../../../chunks/index3.js";
import { H as Head } from "../../../../chunks/Head.js";
import "dompurify";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-y2x4zc.svelte-y2x4zc,.svelte-y2x4zc.svelte-y2x4zc::after,.svelte-y2x4zc.svelte-y2x4zc::before{box-sizing:border-box}@media screen and (max-width: 767px){}.container.svelte-y2x4zc.svelte-y2x4zc{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}.container.svelte-y2x4zc.svelte-y2x4zc{position:relative;z-index:10;display:flex;justify-content:flex-start}@media(max-width: 1200px){.container.svelte-y2x4zc.svelte-y2x4zc{margin:0 auto}}@media(min-width: 1200px){.container.svelte-y2x4zc.svelte-y2x4zc{margin:10rem auto;align-items:center}}.container.svelte-y2x4zc .content.svelte-y2x4zc{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:90rem}@media(max-width: 1200px){.container.svelte-y2x4zc .content.svelte-y2x4zc{width:100%}}@media(min-width: 1200px){.container.svelte-y2x4zc .content.svelte-y2x4zc{width:75%}}@media(max-width: 1200px){.container.svelte-y2x4zc .content h1.svelte-y2x4zc,.container.svelte-y2x4zc .content h2.svelte-y2x4zc{font-size:2.4rem;line-height:3rem;margin-bottom:3rem;font-weight:bold}}@media(min-width: 1200px){.container.svelte-y2x4zc .content h1.svelte-y2x4zc,.container.svelte-y2x4zc .content h2.svelte-y2x4zc{font-size:3rem;line-height:4rem;margin-bottom:5.5rem;font-weight:500}}@media(max-width: 1200px){.container.svelte-y2x4zc .content h2.svelte-y2x4zc{margin-top:3rem}}@media(min-width: 1200px){.container.svelte-y2x4zc .content h2.svelte-y2x4zc{margin-top:5.5rem}}.container.svelte-y2x4zc .content.svelte-y2x4zc p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem}.container.svelte-y2x4zc .content .video-container.svelte-y2x4zc{position:relative;padding-bottom:56.25%;height:0;width:100%;margin-bottom:3rem}.container.svelte-y2x4zc .content .video-container iframe.svelte-y2x4zc{position:absolute;top:0;left:0;width:100%;height:100%}.image--mission.svelte-y2x4zc.svelte-y2x4zc{position:fixed;height:100vh;top:0;right:0;z-index:-1}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  const { seo: { metaTitle, metaDescription }, title, titleVideo, description } = data?.mission;
  $$result.css.add(css);
  ["xs", "sm", "md", "lg"].includes($breakpoint?.name);
  $$unsubscribe_breakpoint();
  return `${data ? `${validate_component(Head, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})} ${``}` : ``}`;
});
export {
  Page as default
};
