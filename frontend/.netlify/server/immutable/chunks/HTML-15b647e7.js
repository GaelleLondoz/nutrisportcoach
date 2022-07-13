var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  H: () => HTML
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4688debc = require("./index-4688debc.js");
var import_sanitize_html = __toESM(require("sanitize-html"));
const ALLOWED = ["title", "br"];
const RESTRICTED = [];
const HTML = (0, import_index_4688debc.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { text } = $$props;
  let { removeTags = false } = $$props;
  const NO_TAGS = { allowedTags: [], allowedAttributes: {} };
  let { options = {} } = $$props;
  const OPTIONS = {
    allowedTags: (((_b = (_a = import_sanitize_html.default) == null ? void 0 : _a.defaults) == null ? void 0 : _b.allowedTags) || []).concat(ALLOWED).filter((tag) => !RESTRICTED.includes(tag))
  };
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.removeTags === void 0 && $$bindings.removeTags && removeTags !== void 0)
    $$bindings.removeTags(removeTags);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `


<!-- HTML_TAG_START -->${(0, import_sanitize_html.default)(text, removeTags ? { NO_TAGS } : { ...OPTIONS, ...options })}<!-- HTML_TAG_END -->`;
});
