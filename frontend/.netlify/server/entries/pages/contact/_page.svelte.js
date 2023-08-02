import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, d as each, v as validate_component, a as subscribe } from "../../../chunks/ssr.js";
import { d as data } from "../../../chunks/index3.js";
import { d as dynamicOffsetHeight } from "../../../chunks/Header.js";
import { H as Head } from "../../../chunks/Head.js";
/* empty css                                                   */const XCircle = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z", "clip-rule": "evenodd" }] } };
const XMark = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M6 18L18 6M6 6l12 12" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z", "clip-rule": "evenodd" }] } };
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["src", "size", "solid", "mini"]);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  let { mini = false } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  icon = src?.[solid ? "solid" : mini ? "mini" : "default"];
  return `<svg${spread(
    [
      escape_object(icon?.a),
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { "aria-hidden": "true" },
      escape_object($$restProps)
    ],
    {}
  )}>${each(icon?.path ?? [], (a) => {
    return `<path${spread([escape_object(a)], {})}></path>`;
  })}</svg>`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target = "body" } = $$props;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<div hidden>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-t1lbh2.svelte-t1lbh2,.svelte-t1lbh2.svelte-t1lbh2::after,.svelte-t1lbh2.svelte-t1lbh2::before{box-sizing:border-box}@media screen and (max-width: 767px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(min-width: 1200px){}@media(max-width: 1200px){}@media(min-width: 1200px){}@media(max-width: 900px){}@media(min-width: 900px){}@media(max-width: 1200px){}@media(min-width: 1200px){}.toast.svelte-t1lbh2.svelte-t1lbh2{position:absolute;background-color:#fff;overflow:hidden;border-radius:1.2rem;padding:2rem 3.5rem 2rem 2.5rem;box-shadow:0 0.6rem 2rem -0.5rem rgba(26, 42, 52, 0.1)}@media(max-width: 900px){.toast.svelte-t1lbh2.svelte-t1lbh2{width:calc(100vw - 3.2rem)}}@media(max-width: 1200px){.toast.svelte-t1lbh2.svelte-t1lbh2{bottom:1.6rem;left:1.6rem}}@media(min-width: 1200px){.toast.svelte-t1lbh2.svelte-t1lbh2{bottom:2.4rem;left:2.4rem}}.toast.svelte-t1lbh2 .toast-content.svelte-t1lbh2{display:flex;align-items:center}.toast.svelte-t1lbh2 .close.svelte-t1lbh2{transition:all 0.4s ease-in-out;position:absolute;cursor:pointer;top:1.4rem;right:1.4rem}.toast.svelte-t1lbh2 .close.svelte-t1lbh2:hover{color:#486b3b}',
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const open = () => {
    active = true;
    setTimeout(
      () => {
        active = false;
      },
      7500
    );
  };
  let active = false;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  return `${active ? `${validate_component(Portal, "Portal").$$render($$result, { target: "body" }, {}, {
    default: () => {
      return `<div class="toast svelte-t1lbh2"><div class="toast-content svelte-t1lbh2">${slots.default ? slots.default({}) : ``}</div> <span class="close svelte-t1lbh2">${validate_component(Icon, "Icon").$$render($$result, { src: XMark, size: "16" }, {}, {})}</span></div>`;
    }
  })}` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1hxzgol.svelte-1hxzgol,.svelte-1hxzgol.svelte-1hxzgol::after,.svelte-1hxzgol.svelte-1hxzgol::before{box-sizing:border-box}a.svelte-1hxzgol.svelte-1hxzgol{text-decoration:none}@media screen and (max-width: 767px){input.svelte-1hxzgol.svelte-1hxzgol{font-size:16px}}input.svelte-1hxzgol.svelte-1hxzgol{border-radius:0;border:none}a.svelte-1hxzgol.svelte-1hxzgol{color:inherit}.hidden.svelte-1hxzgol.svelte-1hxzgol{display:none}.container.svelte-1hxzgol.svelte-1hxzgol{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto;width:100%}form.svelte-1hxzgol .form__inputs.svelte-1hxzgol{display:grid;grid-template-columns:repeat(2, 1fr)}@media(max-width: 900px){form.svelte-1hxzgol .form__inputs.svelte-1hxzgol{gap:4rem 2rem}}@media(min-width: 900px){form.svelte-1hxzgol .form__inputs.svelte-1hxzgol{gap:4rem}}@media(min-width: 1200px){form.svelte-1hxzgol .form__inputs.svelte-1hxzgol{gap:7rem}}form.svelte-1hxzgol .form__inputs label.svelte-1hxzgol{font-weight:500}@media(max-width: 1200px){form.svelte-1hxzgol .form__inputs label.svelte-1hxzgol{font-size:1.8rem}}@media(min-width: 1200px){form.svelte-1hxzgol .form__inputs label.svelte-1hxzgol{font-size:1.8rem}}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol{width:100%;border-bottom:solid 0.1rem #989191;background-color:transparent}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:focus{border-bottom:solid 0.1rem #1a2a34}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:-webkit-autofill,form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:-webkit-autofill:hover,form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:-webkit-autofill:focus,form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:-webkit-autofill:active{transition:background-color 600000s 0s, color 600000s 0s}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol{display:block;margin-top:1.5rem;color:#1a2a34;font-weight:500}@media(max-width: 900px){form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol{font-size:1.2rem;line-height:1.5rem}}@media(min-width: 900px){form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol{font-size:1.5rem;line-height:2rem}}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol::placeholder{transition:all 0.4s ease-in-out;color:#989191}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:focus{transition:all 0.4s ease-in-out;outline:none}form.svelte-1hxzgol .form__inputs label input.svelte-1hxzgol:focus::placeholder{color:#1a2a34}form.svelte-1hxzgol .terms.svelte-1hxzgol{color:#989191;font-size:1.2rem;margin:2rem 0 1rem}form.svelte-1hxzgol button.svelte-1hxzgol{transition:all 0.4s ease-in-out;color:#fff;background-color:#486b3b;padding:0.5rem 3.2rem;width:max-content;margin:3.5rem 0;border:none}@media(max-width: 1200px){form.svelte-1hxzgol button.svelte-1hxzgol{font-size:1.8rem;line-height:2rem;border-radius:1rem}}@media(min-width: 1200px){form.svelte-1hxzgol button.svelte-1hxzgol{font-size:2rem;line-height:3rem;border-radius:1.5rem}}form.svelte-1hxzgol button.svelte-1hxzgol:hover{background-color:#324a29}html{overflow-x:hidden;max-width:100%}@media(min-width: 1200px){.background.svelte-1hxzgol.svelte-1hxzgol{background-color:#c6d6c2;width:30vw;position:fixed;left:0;top:0;height:100vh;z-index:-1}}section.svelte-1hxzgol.svelte-1hxzgol{display:flex}@media(max-width: 1200px){section.svelte-1hxzgol.svelte-1hxzgol{min-height:calc(100vh - var(--headerHeigth));flex-direction:column-reverse;justify-content:space-between;margin-top:7rem}}@media(min-width: 1200px){section.svelte-1hxzgol.svelte-1hxzgol{flex-direction:row;width:100%;justify-content:space-between}}section.svelte-1hxzgol .details__container.svelte-1hxzgol{background-color:#c6d6c2;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}@media(max-width: 1200px){section.svelte-1hxzgol .details__container.svelte-1hxzgol{width:100vw;padding-bottom:10rem;margin-left:-1.6rem;margin-top:3rem;padding-top:5rem}section.svelte-1hxzgol .details__container .details__container-background.svelte-1hxzgol{position:absolute;width:150%;height:20rem;top:-3rem;border-radius:50%;z-index:-1;background-color:#c6d6c2;box-shadow:inset 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.16)}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container.svelte-1hxzgol{width:30%;height:calc(100vh - var(--headerHeigth));margin-right:20rem}section.svelte-1hxzgol .details__container.svelte-1hxzgol:after{content:"";position:absolute;right:-16rem;top:0;width:20rem;height:calc(100vh - var(--headerHeigth));z-index:-1;background-image:url("$lib/assets/contact/background.png");background-size:cover;background-repeat:no-repeat}}section.svelte-1hxzgol .details__container h2.svelte-1hxzgol{font-weight:500;text-align:center;margin-top:1rem}@media(max-width: 1200px){section.svelte-1hxzgol .details__container h2.svelte-1hxzgol{font-size:2rem}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container h2.svelte-1hxzgol{font-size:2rem}}section.svelte-1hxzgol .details__container .phone.svelte-1hxzgol,section.svelte-1hxzgol .details__container .mail.svelte-1hxzgol{display:grid;grid-template-columns:20% 80%;align-items:center;width:100%;line-height:1;font-weight:500}@media(max-width: 1200px){section.svelte-1hxzgol .details__container .phone.svelte-1hxzgol,section.svelte-1hxzgol .details__container .mail.svelte-1hxzgol{font-size:1.8rem;margin-top:2rem}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container .phone.svelte-1hxzgol,section.svelte-1hxzgol .details__container .mail.svelte-1hxzgol{font-size:2rem;margin-top:5rem}}section.svelte-1hxzgol .details__container .phone img.svelte-1hxzgol{justify-self:center}@media(max-width: 1200px){section.svelte-1hxzgol .details__container .phone img.svelte-1hxzgol{width:2.3rem}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container .phone img.svelte-1hxzgol{width:3.2rem}}section.svelte-1hxzgol .details__container .mail img.svelte-1hxzgol{justify-self:center}@media(max-width: 1200px){section.svelte-1hxzgol .details__container .mail img.svelte-1hxzgol{width:3.8rem}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container .mail img.svelte-1hxzgol{width:4.8rem}}section.svelte-1hxzgol .details__container .social-media hr.svelte-1hxzgol{width:5rem;border-radius:0.5rem;border:0.2rem solid #000}@media(max-width: 1200px){section.svelte-1hxzgol .details__container .social-media hr.svelte-1hxzgol{margin:3rem auto 2rem}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container .social-media hr.svelte-1hxzgol{margin:2rem auto 2rem}}section.svelte-1hxzgol .details__container .social-media span.svelte-1hxzgol{display:block;line-height:1.2;font-weight:500;text-align:center}@media(max-width: 1200px){section.svelte-1hxzgol .details__container .social-media span.svelte-1hxzgol{font-size:1.8rem;margin-bottom:1rem}}@media(min-width: 1200px){section.svelte-1hxzgol .details__container .social-media span.svelte-1hxzgol{font-size:2rem;margin-bottom:2rem}}section.svelte-1hxzgol .details__container .social-media__inner.svelte-1hxzgol{display:flex;align-items:center;justify-content:center;gap:2rem}section.svelte-1hxzgol .details__container .social-media__inner img.svelte-1hxzgol{min-width:4rem;width:4rem;max-width:4rem}section.svelte-1hxzgol .form__container.svelte-1hxzgol{display:flex;flex-direction:column;justify-content:center}@media(min-width: 1200px){section.svelte-1hxzgol .form__container.svelte-1hxzgol{width:50%;height:calc(100vh - var(--headerHeigth))}}section.svelte-1hxzgol .form__container h1.svelte-1hxzgol{font-weight:500;color:#1a2a34}@media(max-width: 1200px){section.svelte-1hxzgol .form__container h1.svelte-1hxzgol{font-size:2rem;margin-bottom:5rem}}@media(min-width: 1200px){section.svelte-1hxzgol .form__container h1.svelte-1hxzgol{font-size:3rem;margin-bottom:10rem}}.toast .toast-content .check{fill:#77c0c5}.toast .toast-content .error{fill:red}.toast .toast-content .message.svelte-1hxzgol.svelte-1hxzgol{margin:0 2rem;line-height:2rem;font-size:1.6rem;color:#1a2a34}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = subscribe(dynamicOffsetHeight, (value) => value);
  let toast = null;
  const { seo: { metaTitle, metaDescription }, title, name, inputs, phoneNumber, emailAddress, buttonText, terms, image: { hash: imageUrl, alternativeText: imageAlt } } = data?.contact;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${data ? `${validate_component(Head, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})} ${``}` : ``} ${validate_component(Toast, "Toast").$$render(
      $$result,
      { this: toast },
      {
        this: ($$value) => {
          toast = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${`${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: XCircle,
              class: "error",
              solid: true,
              size: "35"
            },
            {},
            {}
          )} <div class="message svelte-1hxzgol" data-svelte-h="svelte-n86iy2">Le formulaire n&#39;a pas été correctement envoyé.<br class="svelte-1hxzgol"> Veillez réessayer ou contactez-moi
      directement.</div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_mainHeaderHeight();
  return $$rendered;
});
export {
  Page as default
};
