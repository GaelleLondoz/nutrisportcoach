import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { d as dynamicOffsetHeight } from "../../chunks/Header.js";
import { H as Head } from "../../chunks/Head.js";
import "dompurify";
const errors = {
  403: {
    message: "<p>Il semblerait que vous n'ayez pas accès à cette page.</p><p>Tentez de recharger la page ou vider votre cache.</p>"
  },
  404: {
    message: "<p>Il semblerait qu’aucune page n’aie été trouvée</p>"
  },
  500: {
    message: "<p>Notre serveur semble rencontrer un problème.</p><p>Rechargez la page d'ici quelques minutes.</p>"
  },
  502: {
    message: "<p>Il semblerait que vous ne soyez plus connecté à un réseau</p>"
  },
  503: {
    message: "<p>Notre serveur semble rencontrer un problème.</p><p>Rechargez la page d'ici quelques minutes.</p>"
  },
  504: {
    message: "<p>Notre serveur semble rencontrer un problème.</p><p>Rechargez la page d'ici quelques minutes.</p>"
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-161h1b2.svelte-161h1b2,.svelte-161h1b2.svelte-161h1b2::after,.svelte-161h1b2.svelte-161h1b2::before{box-sizing:border-box}@media screen and (max-width: 767px){}.container.svelte-161h1b2.svelte-161h1b2{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}#error{background-color:#c0d8a2}.container--error.svelte-161h1b2.svelte-161h1b2{transition:all 0.4s ease-in-out;display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100vh - var(--headerHeigth));width:100vw}.container--error.svelte-161h1b2 h1.svelte-161h1b2{display:flex;align-items:center;color:#486b3b;font-weight:500}@media(max-width: 1200px){.container--error.svelte-161h1b2 h1.svelte-161h1b2{gap:2.4rem;font-size:15rem;height:15rem;margin-bottom:3rem}}@media(min-width: 1200px){.container--error.svelte-161h1b2 h1.svelte-161h1b2{gap:6rem;font-size:30rem;height:30rem;margin-bottom:5rem}}.container--error.svelte-161h1b2 h1 img.svelte-161h1b2{max-width:100%}@media(max-width: 900px){.container--error.svelte-161h1b2 h1 img.svelte-161h1b2{width:7.8rem}}@media(min-width: 900px){.container--error.svelte-161h1b2 h1 img.svelte-161h1b2{width:12rem}}@media(min-width: 1200px){.container--error.svelte-161h1b2 h1 img.svelte-161h1b2{width:18.2rem}}@media(max-width: 1200px){.container--error.svelte-161h1b2 h1 span.svelte-161h1b2{padding-top:2rem}}@media(min-width: 1200px){.container--error.svelte-161h1b2 h1 span.svelte-161h1b2{padding-top:4rem}}.container--error.svelte-161h1b2 p{text-align:center;font-weight:500}@media(max-width: 1200px){.container--error.svelte-161h1b2 p{font-size:1.8rem;line-height:1.8rem}}@media(min-width: 1200px){.container--error.svelte-161h1b2 p{font-size:3rem;line-height:3rem}}',
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_mainHeaderHeight = subscribe(dynamicOffsetHeight, (value) => value);
  String($page.status).split("");
  const errorMessage = errors[$page.status].message;
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_mainHeaderHeight();
  return `${validate_component(Head, "Head").$$render(
    $$result,
    {
      metaTitle: $page.status,
      metaDescription: errorMessage
    },
    {},
    {}
  )} ${``}`;
});
export {
  Error as default
};
