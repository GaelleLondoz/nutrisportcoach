import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { d as dynamicOffsetHeight } from "../../chunks/Header.js";
import { b as breakpoint } from "../../chunks/store-breakpoint.js";
import { d as data } from "../../chunks/index3.js";
import { H as Head } from "../../chunks/Head.js";
import "dompurify";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1aqru2b.svelte-1aqru2b,.svelte-1aqru2b.svelte-1aqru2b::after,.svelte-1aqru2b.svelte-1aqru2b::before{box-sizing:border-box}a.svelte-1aqru2b.svelte-1aqru2b{text-decoration:none}@media screen and (max-width: 767px){}a.svelte-1aqru2b.svelte-1aqru2b{color:inherit}.container.svelte-1aqru2b.svelte-1aqru2b{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}body#homepage{background-color:rgba(72, 107, 59, 0.12);max-height:100vh;overflow:hidden;background-size:cover;background-repeat:no-repeat;background-image:var(--background)}section.svelte-1aqru2b.svelte-1aqru2b{height:calc(100vh - var(--headerHeigth));position:relative;z-index:10;display:flex;justify-content:start}section.svelte-1aqru2b .content.svelte-1aqru2b{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}section.svelte-1aqru2b .content.svelte-1aqru2b h1{font-family:"Hind", sans-serif;font-weight:bold;margin-bottom:2rem}@media(max-width: 900px){section.svelte-1aqru2b .content.svelte-1aqru2b h1{font-size:2.7rem;line-height:3.5rem}}@media(min-width: 900px){section.svelte-1aqru2b .content.svelte-1aqru2b h1{font-size:4.5rem;line-height:6rem}}section.svelte-1aqru2b .content p.svelte-1aqru2b{max-width:55rem}@media(max-width: 900px){section.svelte-1aqru2b .content p.svelte-1aqru2b{margin:0 0 5rem;font-size:2rem;line-height:2.5rem}}@media(min-width: 900px){section.svelte-1aqru2b .content p.svelte-1aqru2b{margin:0 0 10rem;font-size:2.5rem;line-height:3.5rem}}section.svelte-1aqru2b .content a.svelte-1aqru2b{color:#fff;background-color:#486b3b}@media(max-width: 900px){section.svelte-1aqru2b .content a.svelte-1aqru2b{border-radius:1rem;padding:0.8rem 2.3rem;font-size:1.5rem}}@media(min-width: 900px){section.svelte-1aqru2b .content a.svelte-1aqru2b{transition:all 0.4s ease-in-out;border-radius:1.5rem;padding:0.5rem 4rem;font-size:2.5rem}}@media(hover: hover) and (pointer: fine){section.svelte-1aqru2b .content a.svelte-1aqru2b:hover{background-color:#324a29}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  $$unsubscribe_mainHeaderHeight = subscribe(dynamicOffsetHeight, (value) => value);
  const { seo: { metaTitle, metaDescription }, title, description, button: { text: buttonText, url: buttonUrl }, imageBackgroundMobile: imageMobileUrl, imageBackgroundTablet: imageTabletUrl, imageBackgroundDesktop: imageDesktopUrl } = data?.homepage;
  $$result.css.add(css);
  ["xs", "sm"].includes($breakpoint?.name);
  ["md"].includes($breakpoint?.name);
  ["lg", "xl", "xxl"].includes($breakpoint?.name);
  $$unsubscribe_breakpoint();
  $$unsubscribe_mainHeaderHeight();
  return `${data ? `${validate_component(Head, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})} ${``}` : ``}`;
});
export {
  Page as default
};
