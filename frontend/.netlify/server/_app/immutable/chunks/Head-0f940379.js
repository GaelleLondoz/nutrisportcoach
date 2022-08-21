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
  H: () => Head
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("./index-a7d28e02.js");
const Head = (0, import_index_a7d28e02.c)(($$result, $$props, $$bindings, slots) => {
  let { metaTitle = "" } = $$props;
  let { metaDescription = "" } = $$props;
  if ($$props.metaTitle === void 0 && $$bindings.metaTitle && metaTitle !== void 0)
    $$bindings.metaTitle(metaTitle);
  if ($$props.metaDescription === void 0 && $$bindings.metaDescription && metaDescription !== void 0)
    $$bindings.metaDescription(metaDescription);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_a7d28e02.e)(metaTitle)}</title>`, ""}<meta name="${"description"}"${(0, import_index_a7d28e02.b)("content", metaDescription, 0)} data-svelte="svelte-nygp0t">`, ""}`;
});
