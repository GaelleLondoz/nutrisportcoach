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
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4688debc = require("../../../immutable/chunks/index-4688debc.js");
const prerender = true;
const Contact = (0, import_index_4688debc.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
</p>

<form name="${"test"}" method="${"post"}" netlify netlify-honeypot="${"bot-field"}"><input type="${"hidden"}" name="${"form-name"}" value="${"test"}">
  <input type="${"text"}" name="${"bot-field"}">
  <p><label>Your Name: <input type="${"text"}" name="${"name"}"></label></p>
  <p><label>Your Email: <input type="${"email"}" name="${"email"}"></label></p>
  <p><label>Message: <textarea name="${"message"}"></textarea></label></p>
  <p><button type="${"submit"}">Send</button></p></form>`;
});
