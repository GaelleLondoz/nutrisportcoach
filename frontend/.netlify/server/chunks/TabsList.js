import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import { b as breakpoint } from "./store-breakpoint.js";
const TabsItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-nufbs5.svelte-nufbs5,.svelte-nufbs5.svelte-nufbs5::after,.svelte-nufbs5.svelte-nufbs5::before{box-sizing:border-box}a.svelte-nufbs5.svelte-nufbs5{text-decoration:none}@media screen and (max-width: 767px){}a.svelte-nufbs5.svelte-nufbs5{color:inherit}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}li.svelte-nufbs5.svelte-nufbs5{padding:3rem 0;font-weight:500;transition:all 0.4s ease-in-out;position:relative}@media(max-width: 1200px){li.svelte-nufbs5.svelte-nufbs5:not(.with-image){width:calc(100% / var(--numberOfTabs))}li.with-image.svelte-nufbs5.svelte-nufbs5{width:auto}}@media(min-width: 1200px){li.svelte-nufbs5.svelte-nufbs5{width:100%;margin:0 7rem}}li.svelte-nufbs5 a.svelte-nufbs5{font-size:2rem;color:#d4d2d2;width:100%;display:flex;justify-content:center;align-items:center}li.active.svelte-nufbs5 img.svelte-nufbs5{width:10rem}li.svelte-nufbs5:not(.active) img.svelte-nufbs5{width:5.1rem}li.active.svelte-nufbs5 a.svelte-nufbs5{color:#486b3b}@media(max-width: 1200px){li:not(.with-image).active.svelte-nufbs5.svelte-nufbs5::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}li.svelte-nufbs5.svelte-nufbs5:not(.with-image)::after{width:0%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}@media(max-width: 1200px) and (hover: hover) and (pointer: fine){li.svelte-nufbs5.svelte-nufbs5:not(.with-image):hover{color:#486b3b}li.svelte-nufbs5.svelte-nufbs5:not(.with-image):hover::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}@media(min-width: 1200px){li.active.svelte-nufbs5.svelte-nufbs5::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}li.svelte-nufbs5.svelte-nufbs5::after{width:0%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}@media(min-width: 1200px) and (hover: hover) and (pointer: fine){li.svelte-nufbs5.svelte-nufbs5:hover{color:#486b3b}li.svelte-nufbs5.svelte-nufbs5:hover::after{width:100%;transition:all 0.4s ease-in-out;bottom:0;position:absolute;left:0;content:"";border-bottom:solid 0.3rem #486b3b}}',
  map: null
};
const TabsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let smallViewport;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $page, $$unsubscribe_page;
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { url = "" } = $$props;
  let { label = "" } = $$props;
  let { alternativeText = "" } = $$props;
  let { cloudinaryHash = "" } = $$props;
  let { numberOfTabs = 0 } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.alternativeText === void 0 && $$bindings.alternativeText && alternativeText !== void 0)
    $$bindings.alternativeText(alternativeText);
  if ($$props.cloudinaryHash === void 0 && $$bindings.cloudinaryHash && cloudinaryHash !== void 0)
    $$bindings.cloudinaryHash(cloudinaryHash);
  if ($$props.numberOfTabs === void 0 && $$bindings.numberOfTabs && numberOfTabs !== void 0)
    $$bindings.numberOfTabs(numberOfTabs);
  $$result.css.add(css$1);
  smallViewport = ["xs", "sm", "md", "lg"].includes($breakpoint?.name);
  $$unsubscribe_breakpoint();
  $$unsubscribe_page();
  return ` <li${add_attribute("style", `--numberOfTabs: ${numberOfTabs}`, 0)} class="${[
    "svelte-nufbs5",
    ($page.url.pathname.includes(url) ? "active" : "") + " " + (cloudinaryHash && alternativeText ? "with-image" : "")
  ].join(" ").trim()}"><a sveltekit:prefetch${add_attribute("href", url, 0)} class="no-underline svelte-nufbs5">${cloudinaryHash && alternativeText && smallViewport ? `<picture class="svelte-nufbs5"><source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/" + escape(cloudinaryHash, true)}" media="(min-width: 1024px)" class="svelte-nufbs5"> <img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/" + escape(cloudinaryHash, true)}"${add_attribute("alt", alternativeText || label, 0)} class="svelte-nufbs5"></picture>` : ``} ${label ? `${smallViewport ? `${!cloudinaryHash && !alternativeText ? `${escape(label)}` : ``}` : `${escape(label)}`}` : ``}</a> </li>`;
});
const TabsList_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-9prz76,.svelte-9prz76::after,.svelte-9prz76::before{box-sizing:border-box}@media screen and (max-width: 767px){}.container.svelte-9prz76{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 1200px){nav.svelte-9prz76{margin-bottom:2rem}}@media(min-width: 1200px){nav.svelte-9prz76{margin:5.5rem auto;display:flex;justify-content:space-between;align-items:center}}.tabs-items.svelte-9prz76{width:100%}ul.svelte-9prz76{display:flex;width:100%;justify-content:space-between;align-items:center;padding:0;list-style-type:none}@media(max-width: 1200px){ul.with-image.svelte-9prz76{gap:4.7rem;justify-content:center}}@media(min-width: 1200px){ul.svelte-9prz76{display:flex}}',
  map: null
};
const TabsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let { tabsWithImages = false } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.tabsWithImages === void 0 && $$bindings.tabsWithImages && tabsWithImages !== void 0)
    $$bindings.tabsWithImages(tabsWithImages);
  $$result.css.add(css);
  return `${data?.length ? `<nav class="nav container svelte-9prz76"><div class="tabs-items svelte-9prz76"><ul class="${["svelte-9prz76", tabsWithImages ? "with-image" : ""].join(" ").trim()}">${each(data, (tab) => {
    return `${validate_component(TabsItem, "TabsItem").$$render(
      $$result,
      {
        numberOfTabs: data?.length,
        url: tabsWithImages ? tab?.url?.url : tab?.url,
        label: tabsWithImages ? tab?.url?.label : tab?.label,
        alternativeText: tab?.image?.alternativeText,
        cloudinaryHash: tab?.image?.hash
      },
      {},
      {}
    )}`;
  })}</ul></div></nav>` : ``}`;
});
export {
  TabsList as T
};
