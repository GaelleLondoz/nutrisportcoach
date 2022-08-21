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
var import_Header_c4517c71 = require("../../../_app/immutable/chunks/Header-c4517c71.js");
var import_heroicons = require("@steeze-ui/heroicons");
var import_Head_64983968 = require("../../../_app/immutable/chunks/Head-64983968.js");
var import_graphql_request = require("graphql-request");
var import_store_breakpoint_f870d4ad = require("../../../_app/immutable/chunks/store-breakpoint-f870d4ad.js");
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
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-noppfj.svelte-noppfj,.svelte-noppfj.svelte-noppfj::after,.svelte-noppfj.svelte-noppfj::before{box-sizing:border-box}@media(max-width: 768px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(max-width: 1024px){}@media(min-width: 1024px){}@media(max-width: 768px){}@media(min-width: 768px){}@media(max-width: 1024px){}@media(min-width: 1024px){}.toast.svelte-noppfj.svelte-noppfj{border-radius:1.2rem;padding:2rem 3.5rem 2rem 2.5rem;box-shadow:0 0.6rem 2rem -0.5rem rgba(26, 42, 52, 0.1)}@media(max-width: 768px){.toast.svelte-noppfj.svelte-noppfj{width:calc(100vw - 3.2rem)}}@media(max-width: 1024px){.toast.svelte-noppfj.svelte-noppfj{bottom:1.6rem;left:1.6rem}}@media(min-width: 1024px){.toast.svelte-noppfj.svelte-noppfj{bottom:2.4rem;left:2.4rem}}.toast.svelte-noppfj .close.svelte-noppfj{transition:all 0.4s ease-in-out;top:1.4rem;right:1.4rem}.toast.svelte-noppfj .close.svelte-noppfj:hover{color:#486b3b}',
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
      return `<div class="${"toast absolute bg-white overflow-hidden svelte-noppfj"}"><div class="${"toast-content flex items-center svelte-noppfj"}">${slots.default ? slots.default({}) : ``}</div>
      <span class="${"absolute cursor-pointer close svelte-noppfj"}">${(0, import_index_699220d6.v)(Icon, "Icon").$$render($$result, { src: import_heroicons.X, size: "16" }, {}, {})}</span></div>`;
    }
  })}` : ``}`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Poppins:wght@400;600&display=swap");.svelte-19dhzl8.svelte-19dhzl8,.svelte-19dhzl8.svelte-19dhzl8::after,.svelte-19dhzl8.svelte-19dhzl8::before{box-sizing:border-box}.container.svelte-19dhzl8.svelte-19dhzl8{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}form.svelte-19dhzl8 .form__inputs.svelte-19dhzl8{display:grid;grid-template-columns:repeat(2, 1fr)}@media(max-width: 768px){form.svelte-19dhzl8 .form__inputs.svelte-19dhzl8{gap:4rem 2rem}}@media(min-width: 768px){form.svelte-19dhzl8 .form__inputs.svelte-19dhzl8{gap:4rem}}@media(min-width: 1024px){form.svelte-19dhzl8 .form__inputs.svelte-19dhzl8{gap:7rem}}form.svelte-19dhzl8 .form__inputs label.svelte-19dhzl8{font-weight:500}@media(max-width: 1024px){form.svelte-19dhzl8 .form__inputs label.svelte-19dhzl8{font-size:1.8rem}}@media(min-width: 1024px){form.svelte-19dhzl8 .form__inputs label.svelte-19dhzl8{font-size:1.8rem}}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8{width:100%;border-bottom:solid 0.1rem #989191;background-color:transparent}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:focus{border-bottom:solid 0.1rem #1a2a34}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:-webkit-autofill,form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:-webkit-autofill:hover,form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:-webkit-autofill:focus,form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:-webkit-autofill:active{-webkit-transition:background-color 600000s 0s, color 600000s 0s;transition:background-color 600000s 0s, color 600000s 0s}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8{display:block;margin-top:1.5rem;color:#1a2a34;font-weight:500}@media(max-width: 768px){form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8{font-size:1.2rem;line-height:1.5rem}}@media(min-width: 768px){form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8{font-size:1.5rem;line-height:2rem}}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8::-moz-placeholder{-moz-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;color:#989191}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8::placeholder{transition:all 0.4s ease-in-out;color:#989191}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:focus{transition:all 0.4s ease-in-out;outline:none}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:focus::-moz-placeholder{color:#1a2a34}form.svelte-19dhzl8 .form__inputs label input.svelte-19dhzl8:focus::placeholder{color:#1a2a34}form.svelte-19dhzl8 .terms.svelte-19dhzl8{color:#989191;font-size:1.2rem;margin:2rem 0 1rem}form.svelte-19dhzl8 button.svelte-19dhzl8{transition:all 0.4s ease-in-out;color:#fff;background-color:#486b3b;padding:0.5rem 3.2rem;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin:3.5rem 0}@media(max-width: 1024px){form.svelte-19dhzl8 button.svelte-19dhzl8{font-size:1.8rem;line-height:2rem;border-radius:1rem}}@media(min-width: 1024px){form.svelte-19dhzl8 button.svelte-19dhzl8{font-size:2rem;line-height:3rem;border-radius:1.5rem}}form.svelte-19dhzl8 button.svelte-19dhzl8:hover{background-color:#324a29}html{overflow-x:hidden;max-width:100%}@media(min-width: 1024px){.background.svelte-19dhzl8.svelte-19dhzl8{background-color:#c6d6c2;width:30vw;position:fixed;left:0;top:0;height:100vh;z-index:-1}}section.svelte-19dhzl8.svelte-19dhzl8{display:flex}@media(max-width: 1024px){section.svelte-19dhzl8.svelte-19dhzl8{min-height:calc(100vh - var(--headerHeigth));flex-direction:column-reverse;justify-content:space-between;margin-top:7rem}}@media(min-width: 1024px){section.svelte-19dhzl8.svelte-19dhzl8{flex-direction:row;width:100%;justify-content:space-between}}section.svelte-19dhzl8 .details__container.svelte-19dhzl8{background-color:#c6d6c2;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}@media(max-width: 1024px){section.svelte-19dhzl8 .details__container.svelte-19dhzl8{width:100vw;padding-bottom:10rem;margin-left:-1.6rem;margin-top:3rem;padding-top:5rem}section.svelte-19dhzl8 .details__container .details__container-background.svelte-19dhzl8{position:absolute;width:150%;height:20rem;top:-3rem;border-radius:50%;z-index:-1;background-color:#c6d6c2;box-shadow:inset 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.16)}}@media(min-width: 1024px){section.svelte-19dhzl8 .details__container.svelte-19dhzl8{width:30%;height:calc(100vh - var(--headerHeigth))}section.svelte-19dhzl8 .details__container.svelte-19dhzl8:after{content:"";position:absolute;right:-18rem;top:0;width:23rem;height:calc(100vh - var(--headerHeigth));z-index:-1;background-image:url("$lib/assets/contact/background.png");background-size:contain;background-repeat:no-repeat}}section.svelte-19dhzl8 .details__container h2.svelte-19dhzl8{font-weight:500;text-align:center;margin-top:1rem}@media(max-width: 1024px){section.svelte-19dhzl8 .details__container h2.svelte-19dhzl8{font-size:2rem}}@media(min-width: 1024px){section.svelte-19dhzl8 .details__container h2.svelte-19dhzl8{font-size:2rem}}section.svelte-19dhzl8 .details__container .phone.svelte-19dhzl8,section.svelte-19dhzl8 .details__container .mail.svelte-19dhzl8{display:grid;grid-template-columns:20% 80%;align-items:center;width:100%;line-height:1;font-weight:500}@media(max-width: 1024px){section.svelte-19dhzl8 .details__container .phone.svelte-19dhzl8,section.svelte-19dhzl8 .details__container .mail.svelte-19dhzl8{font-size:1.8rem;margin-top:2rem}}@media(min-width: 1024px){section.svelte-19dhzl8 .details__container .phone.svelte-19dhzl8,section.svelte-19dhzl8 .details__container .mail.svelte-19dhzl8{font-size:2rem;margin-top:5rem}}section.svelte-19dhzl8 .details__container .phone img.svelte-19dhzl8{justify-self:center}@media(max-width: 1024px){section.svelte-19dhzl8 .details__container .phone img.svelte-19dhzl8{width:2.3rem}}@media(min-width: 1024px){section.svelte-19dhzl8 .details__container .phone img.svelte-19dhzl8{width:3.2rem}}section.svelte-19dhzl8 .details__container .mail img.svelte-19dhzl8{justify-self:center}@media(max-width: 1024px){section.svelte-19dhzl8 .details__container .mail img.svelte-19dhzl8{width:3.8rem}}@media(min-width: 1024px){section.svelte-19dhzl8 .details__container .mail img.svelte-19dhzl8{width:4.8rem}}section.svelte-19dhzl8 .form__container.svelte-19dhzl8{display:flex;flex-direction:column;justify-content:center}@media(min-width: 1024px){section.svelte-19dhzl8 .form__container.svelte-19dhzl8{width:50%;height:calc(100vh - var(--headerHeigth))}}section.svelte-19dhzl8 .form__container h1.svelte-19dhzl8{font-weight:500;color:#1a2a34}@media(max-width: 1024px){section.svelte-19dhzl8 .form__container h1.svelte-19dhzl8{font-size:2rem;margin-bottom:5rem}}@media(min-width: 1024px){section.svelte-19dhzl8 .form__container h1.svelte-19dhzl8{font-size:3rem;margin-bottom:10rem}}.toast .toast-content .check{fill:#77c0c5}.toast .toast-content .error{fill:red}.toast .toast-content .message.svelte-19dhzl8.svelte-19dhzl8{margin:0 2rem;line-height:2rem;font-size:1.6rem;color:#1a2a34}',
  map: null
};
const prerender = true;
const load = async () => {
  const { contact: { data } } = await (0, import_api_fcbaa1f6.g)(import_graphqlQuery.query, "http://localhost:1337/graphql/");
  return { props: { data } };
};
const Contact = (0, import_index_699220d6.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mainHeaderHeight;
  $$unsubscribe_mainHeaderHeight = (0, import_index_699220d6.a)(import_Header_c4517c71.d, (value) => value);
  let { data } = $$props;
  let toast = null;
  const { seo: { metaTitle, metaDescription }, title, name, inputs, phoneNumber, emailAddress, buttonText, terms, image: { data: { attributes: { hash: imageUrl, alternativeText: imageAlt } } } } = data == null ? void 0 : data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${data ? `${(0, import_index_699220d6.v)(import_Head_64983968.H, "Head").$$render($$result, { metaTitle, metaDescription }, {}, {})}
  ${``}` : ``}
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
    <div class="${"message svelte-19dhzl8"}">Le formulaire n&#39;a pas \xE9t\xE9 correctement envoy\xE9.<br class="${"svelte-19dhzl8"}"> Veillez r\xE9essayer ou contactez-moi
      directement.
    </div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_mainHeaderHeight();
  return $$rendered;
});
