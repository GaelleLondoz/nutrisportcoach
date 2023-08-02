import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { d as data } from "../../../../chunks/index3.js";
import { H as Head } from "../../../../chunks/Head.js";
import "dompurify";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-tnhu2x.svelte-tnhu2x,.svelte-tnhu2x.svelte-tnhu2x::after,.svelte-tnhu2x.svelte-tnhu2x::before{box-sizing:border-box}@media screen and (max-width: 767px){}.container.svelte-tnhu2x.svelte-tnhu2x{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 1200px){#bien-etre .tabs-items ul li:nth-child(2){order:1}}.container.svelte-tnhu2x.svelte-tnhu2x{position:relative;z-index:10}@media(max-width: 1200px){.container.svelte-tnhu2x.svelte-tnhu2x{margin:0 auto}}@media(min-width: 1200px){.container.svelte-tnhu2x.svelte-tnhu2x{margin:10rem auto;align-items:center;display:flex}}.container.svelte-tnhu2x .content.svelte-tnhu2x{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:85rem}.container.svelte-tnhu2x .content h1.svelte-tnhu2x{max-width:65rem}@media(max-width: 1200px){.container.svelte-tnhu2x .content h1.svelte-tnhu2x{font-size:2.4rem;line-height:3rem;margin-bottom:3rem;font-weight:bold}}@media(min-width: 1200px){.container.svelte-tnhu2x .content h1.svelte-tnhu2x{font-size:3rem;line-height:4rem;margin-bottom:5.5rem;font-weight:500}}.container.svelte-tnhu2x .content.svelte-tnhu2x p{font-size:1.8rem;line-height:2rem;margin-bottom:1.5rem;max-width:75rem}@media(max-width: 1200px){.image--tree.svelte-tnhu2x.svelte-tnhu2x{max-width:20.3rem;margin:5rem auto}}@media(min-width: 1200px){.image--tree.svelte-tnhu2x.svelte-tnhu2x{position:absolute;top:5%;right:2rem;max-width:65.3rem;width:30vw}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { seo: { metaTitle, metaDescription }, title, description } = data?.bienEtre;
  $$result.css.add(css);
  return `${data ? `${validate_component(Head, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})} ${``}` : ``}`;
});
export {
  Page as default
};
