var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Contact,
  load: () => load,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_699220d6 = require("../../../_app/immutable/chunks/index-699220d6.js");
var import_api_fcbaa1f6 = require("../../../_app/immutable/chunks/api-fcbaa1f6.js");
var import_graphqlQuery = require("../../endpoints/contact/graphqlQuery.js");
var import_store_breakpoint_f870d4ad = require("../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
var import_Header_f8c29f20 = require("../../../_app/immutable/chunks/Header-f8c29f20.js");
var import_heroicons = require("@steeze-ui/heroicons");
var import_Head_64983968 = require("../../../_app/immutable/chunks/Head-64983968.js");
var import_graphql_request = require("graphql-request");
var import_stores_760db7b6 = require("../../../_app/immutable/chunks/stores-760db7b6.js");
const Icon = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let icon;
  let $$restProps = (0, import_index_699220d6.h)($$props, ["src", "size", "solid"]);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
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
  icon = src == null ? void 0 : src[solid ? "solid" : "default"];
  return `<svg${(0, import_index_699220d6.i)(
    [
      (0, import_index_699220d6.j)(icon == null ? void 0 : icon.a),
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_index_699220d6.k)(size) },
      { height: (0, import_index_699220d6.k)(size) },
      { "aria-hidden": "true" },
      (0, import_index_699220d6.j)($$restProps)
    ],
    {}
  )}>${(0, import_index_699220d6.e)((_a = icon == null ? void 0 : icon.path) != null ? _a : [], (a) => {
    return `<path${(0, import_index_699220d6.i)([(0, import_index_699220d6.j)(a)], {})}></path>`;
  })}</svg>`;
});
const Portal = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let { target = "body" } = $$props;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<div hidden>${slots.default ? slots.default({}) : ``}</div>`;
});
const Toast_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-b8niuv.svelte-b8niuv,.svelte-b8niuv.svelte-b8niuv::after,.svelte-b8niuv.svelte-b8niuv::before{box-sizing:border-box}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}.toast.svelte-b8niuv.svelte-b8niuv{bottom:2.4rem;left:2.4rem;border-radius:1.2rem;padding:2rem 3.5rem 2rem 2.5rem;box-shadow:0 0.6rem 2rem -0.5rem rgba(26, 42, 52, 0.1)}.toast.svelte-b8niuv .close.svelte-b8niuv{top:1.4rem;right:1.4rem;transition:color 0.4s ease-in-out}.toast.svelte-b8niuv .close.svelte-b8niuv:hover{color:#486b3b}',
  map: null
};
const Toast = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
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
  return `${active ? `${(0, import_index_699220d6.v)(Portal, "Portal").$$render($$result, { target: "body" }, {}, {
    default: () => {
      return `<div class="${"toast absolute bg-white overflow-hidden svelte-b8niuv"}"><div class="${"toast-content flex items-center svelte-b8niuv"}">${slots.default ? slots.default({}) : ``}</div>
      <span class="${"absolute cursor-pointer close svelte-b8niuv"}">${(0, import_index_699220d6.v)(Icon, "Icon").$$render($$result, { src: import_heroicons.X, size: "16" }, {}, {})}</span></div>`;
    }
  })}` : ``}`;
});
const Input = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { required = false } = $$props;
  let { attributes = {} } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0)
    $$bindings.attributes(attributes);
  return `<label>${(0, import_index_699220d6.d)(label)}
  ${required ? `<sup>*</sup>` : `<span>(Facultatif)</span>`}
  <input${(0, import_index_699220d6.i)([(0, import_index_699220d6.j)(attributes), { required: required || null }], {})}></label>`;
});
const Textarea = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { required = false } = $$props;
  let { attributes = {} } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0)
    $$bindings.attributes(attributes);
  return `<label class="${"label--message"}">${(0, import_index_699220d6.d)(label)}
  ${required ? `<sup>*</sup>` : `<span>(Facultatif)</span>`}
  <textarea${(0, import_index_699220d6.i)([(0, import_index_699220d6.j)(attributes), { required: required || null }], {})}></textarea></label>`;
});
const Phone = "/_app/immutable/assets/phone-57ecb407.svg";
const Mail = "/_app/immutable/assets/mail-032ff6c6.svg";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-1vtb41u.svelte-1vtb41u,.svelte-1vtb41u.svelte-1vtb41u::after,.svelte-1vtb41u.svelte-1vtb41u::before{box-sizing:border-box}.container.svelte-1vtb41u.svelte-1vtb41u{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}form.svelte-1vtb41u .form__inputs.svelte-1vtb41u{display:grid;grid-template-columns:repeat(2, 1fr);gap:7rem}form.svelte-1vtb41u .form__inputs label.svelte-1vtb41u{font-weight:500}@media(max-width: 1024px){form.svelte-1vtb41u .form__inputs label.svelte-1vtb41u{font-size:1.8rem}}@media(min-width: 1024px){form.svelte-1vtb41u .form__inputs label.svelte-1vtb41u{font-size:1.8rem}}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u{width:100%;border-bottom:solid 1px #989191;background-color:transparent}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:focus{border-bottom:solid 1px #1a2a34}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:-webkit-autofill,form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:-webkit-autofill:hover,form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:-webkit-autofill:focus,form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:-webkit-autofill:active{-webkit-transition:background-color 600000s 0s, color 600000s 0s;transition:background-color 600000s 0s, color 600000s 0s}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u{display:block;margin-top:1.5rem;color:#1a2a34;font-weight:500;font-size:1.5rem;line-height:2rem}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u::-moz-placeholder{-moz-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;color:#989191}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u::placeholder{transition:all 0.4s ease-in-out;color:#989191}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:focus{outline:none;transition:all 0.4s ease-in-out}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:focus::-moz-placeholder{color:#1a2a34}form.svelte-1vtb41u .form__inputs label input.svelte-1vtb41u:focus::placeholder{color:#1a2a34}form.svelte-1vtb41u button.svelte-1vtb41u{color:#fff;background-color:#486b3b;border-radius:1.5rem;padding:0.5rem 3.2rem;width:-webkit-max-content;width:-moz-max-content;width:max-content;transition:all ease-in-out 0.4s;margin:3.5rem 0}@media(max-width: 1024px){form.svelte-1vtb41u button.svelte-1vtb41u{font-size:1.8rem;line-height:2rem}}@media(min-width: 1024px){form.svelte-1vtb41u button.svelte-1vtb41u{font-size:2rem;line-height:3rem}}form.svelte-1vtb41u button.svelte-1vtb41u:hover{background-color:#324a29}.background.svelte-1vtb41u.svelte-1vtb41u{background-color:#c6d6c2;width:30vw;position:fixed;left:0;top:0;height:100vh;z-index:-1}section.svelte-1vtb41u.svelte-1vtb41u{display:grid;grid-template-columns:30% 40%;gap:30%}section.svelte-1vtb41u .details__container.svelte-1vtb41u{background-color:#c6d6c2;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100vh - var(--headerHeigth))}section.svelte-1vtb41u .details__container.svelte-1vtb41u:after{content:"";position:absolute;right:-15rem;top:0;width:23rem;height:calc(100vh - var(--headerHeigth));background-image:url("$lib/assets/contact/background.png");background-size:contain;background-repeat:no-repeat}section.svelte-1vtb41u .details__container h2.svelte-1vtb41u{font-weight:500;text-align:center;margin-top:1rem}@media(max-width: 1024px){section.svelte-1vtb41u .details__container h2.svelte-1vtb41u{font-size:2rem}}@media(min-width: 1024px){section.svelte-1vtb41u .details__container h2.svelte-1vtb41u{font-size:2rem}}section.svelte-1vtb41u .details__container .phone.svelte-1vtb41u,section.svelte-1vtb41u .details__container .mail.svelte-1vtb41u{display:grid;grid-template-columns:20% 80%;align-items:center;width:100%;margin-top:5rem;font-size:2rem;line-height:1;font-weight:500}section.svelte-1vtb41u .details__container .phone img.svelte-1vtb41u{width:3.2rem;justify-self:center}section.svelte-1vtb41u .details__container .mail img.svelte-1vtb41u{width:4.8rem;justify-self:center}section.svelte-1vtb41u .form__container.svelte-1vtb41u{display:flex;flex-direction:column;height:calc(100vh - var(--headerHeigth));justify-content:center}section.svelte-1vtb41u .form__container h1.svelte-1vtb41u{font-weight:500;color:#1a2a34;margin-bottom:10rem}@media(max-width: 1024px){section.svelte-1vtb41u .form__container h1.svelte-1vtb41u{font-size:2rem}}@media(min-width: 1024px){section.svelte-1vtb41u .form__container h1.svelte-1vtb41u{font-size:3rem}}.toast .toast-content .check{fill:#77c0c5}.toast .toast-content .error{fill:red}.toast .toast-content .message.svelte-1vtb41u.svelte-1vtb41u{margin:0 2rem;line-height:2rem;font-size:1.6rem;color:#1a2a34}',
  map: null
};
const prerender = true;
const load = async () => {
  const { contact: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Contact = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $breakpoint, $$unsubscribe_breakpoint;
  let $mainHeaderHeight, $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_breakpoint = (0, import_index_699220d6.a)(import_store_breakpoint_f870d4ad.b, (value) => $breakpoint = value);
  $$unsubscribe_mainHeaderHeight = (0, import_index_699220d6.a)(import_Header_f8c29f20.d, (value) => $mainHeaderHeight = value);
  let { data } = $$props;
  let form = null;
  let toast = null;
  let mounted = false;
  const formComponents = { Input, Textarea };
  const { seo: { metaTitle, metaDescription }, title, name, inputs, phoneNumber, emailAddress, buttonText, terms, image: { data: { attributes: { hash: imageUrl, alternativeText: imageAlt } } } } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ["xs", "sm", "md"].includes($breakpoint == null ? void 0 : $breakpoint.name);
    $$rendered = `${data && mounted ? `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  <div class="${"background svelte-1vtb41u"}"></div>
  <section class="${"container svelte-1vtb41u"}"><div class="${"details__container svelte-1vtb41u"}"${(0, import_index_699220d6.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)}><picture class="${"svelte-1vtb41u"}"><source srcset="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_254/" + (0, import_index_699220d6.d)(imageUrl, true)}" media="${"(min-width: 768px)"}" class="${"svelte-1vtb41u"}">

        <img src="${"https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_142/" + (0, import_index_699220d6.d)(imageUrl, true)}"${(0, import_index_699220d6.b)("alt", imageAlt, 0)} class="${"image--isa svelte-1vtb41u"}"></picture>
      <h2 class="${"svelte-1vtb41u"}">${(0, import_index_699220d6.d)(name)}</h2>
      <div class="${"phone svelte-1vtb41u"}"><img${(0, import_index_699220d6.b)("src", Phone, 0)} alt="${""}" class="${"image image--phone svelte-1vtb41u"}">
        <span class="${"svelte-1vtb41u"}">${(0, import_index_699220d6.d)(phoneNumber)}</span></div>
      <div class="${"mail svelte-1vtb41u"}"><img${(0, import_index_699220d6.b)("src", Mail, 0)} alt="${""}" class="${"image image--mail svelte-1vtb41u"}">
        <span class="${"svelte-1vtb41u"}">${(0, import_index_699220d6.d)(emailAddress)}</span></div></div>
    <div class="${"form__container svelte-1vtb41u"}"${(0, import_index_699220d6.b)("style", `--headerHeigth: ${$mainHeaderHeight}px`, 0)}><h1 class="${"svelte-1vtb41u"}">${(0, import_index_699220d6.d)(title)}</h1>

      <form name="${"contact"}" method="${"post"}" netlify netlify-honeypot="${"bot-field"}" data-netlify="${"true"}" class="${"svelte-1vtb41u"}"${(0, import_index_699220d6.b)("this", form, 0)}><div class="${"form__inputs svelte-1vtb41u"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contact"}" class="${"svelte-1vtb41u"}">
          <p class="${"hidden svelte-1vtb41u"}"><label class="${"svelte-1vtb41u"}">Don\u2019t fill this out if you\u2019re human: <input name="${"bot-field"}" class="${"svelte-1vtb41u"}"></label></p>
          ${inputs ? `${(0, import_index_699220d6.e)(inputs, (input) => {
      return `${(0, import_index_699220d6.v)(formComponents[input.tag] || import_index_699220d6.m, "svelte:component").$$render(
        $$result,
        {
          label: input.label,
          required: input.required,
          attributes: input.attributes
        },
        {},
        {}
      )}`;
    })}` : ``}</div>

        <button type="${"submit"}" class="${"svelte-1vtb41u"}">Envoyer</button></form></div></section>` : ``}

${(0, import_index_699220d6.v)(Toast, "Toast").$$render(
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
          return `${`${(0, import_index_699220d6.v)(Icon, "Icon").$$render(
            $$result,
            {
              src: import_heroicons.XCircle,
              class: "error",
              solid: true,
              size: "35"
            },
            {},
            {}
          )}
    <div class="${"message svelte-1vtb41u"}">Le formulaire n&#39;a pas \xE9t\xE9 correctement envoy\xE9.<br class="${"svelte-1vtb41u"}"> Veillez r\xE9essayer ou contactez-moi
      directement.
    </div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_breakpoint();
  $$unsubscribe_mainHeaderHeight();
  return $$rendered;
});
