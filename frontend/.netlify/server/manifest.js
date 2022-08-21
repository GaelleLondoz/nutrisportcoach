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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["apple-touch-icon.png", "favicon-16x16.png", "favicon-32x32.png", "robots.txt"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain" },
  _: {
    entry: { "file": "_app/immutable/start-ed90a521.js", "imports": ["_app/immutable/start-ed90a521.js", "_app/immutable/chunks/index-fd4d87c7.js", "_app/immutable/chunks/index-f0acbaff.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "graphqlQuery",
        pattern: /^\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "errors",
        pattern: /^\/errors\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/errors.js")))
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "philosophie",
        pattern: /^\/philosophie\/?$/,
        names: [],
        types: [],
        path: "/philosophie",
        shadow: null,
        a: [0, 4, 5],
        b: [1]
      },
      {
        type: "page",
        id: "temoignages",
        pattern: /^\/temoignages\/?$/,
        names: [],
        types: [],
        path: "/temoignages",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "endpoint",
        id: "temoignages/graphqlQuery",
        pattern: /^\/temoignages\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/temoignages/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "philosophie/graphqlQuery",
        pattern: /^\/philosophie\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/philosophie/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "contact/graphqlQuery",
        pattern: /^\/contact\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/contact/graphqlQuery.js")))
      },
      {
        type: "page",
        id: "a-propos/ma-mission",
        pattern: /^\/a-propos\/ma-mission\/?$/,
        names: [],
        types: [],
        path: "/a-propos/ma-mission",
        shadow: null,
        a: [0, 7, 8],
        b: [1]
      },
      {
        type: "page",
        id: "a-propos/mon-histoire",
        pattern: /^\/a-propos\/mon-histoire\/?$/,
        names: [],
        types: [],
        path: "/a-propos/mon-histoire",
        shadow: null,
        a: [0, 7, 9],
        b: [1]
      },
      {
        type: "page",
        id: "philosophie/coach-bien-etre",
        pattern: /^\/philosophie\/coach-bien-etre\/?$/,
        names: [],
        types: [],
        path: "/philosophie/coach-bien-etre",
        shadow: null,
        a: [0, 4, 10],
        b: [1]
      },
      {
        type: "page",
        id: "philosophie/coach-en-nutrition",
        pattern: /^\/philosophie\/coach-en-nutrition\/?$/,
        names: [],
        types: [],
        path: "/philosophie/coach-en-nutrition",
        shadow: null,
        a: [0, 4, 11],
        b: [1]
      },
      {
        type: "page",
        id: "philosophie/coach-sportif",
        pattern: /^\/philosophie\/coach-sportif\/?$/,
        names: [],
        types: [],
        path: "/philosophie/coach-sportif",
        shadow: null,
        a: [0, 4, 12],
        b: [1]
      },
      {
        type: "page",
        id: "temoignages/creation",
        pattern: /^\/temoignages\/creation\/?$/,
        names: [],
        types: [],
        path: "/temoignages/creation",
        shadow: null,
        a: [0, 13],
        b: [1]
      },
      {
        type: "endpoint",
        id: "temoignages/creation/graphqlQuery",
        pattern: /^\/temoignages\/creation\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/temoignages/creation/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "philosophie/coach-sportif/graphqlQuery",
        pattern: /^\/philosophie\/coach-sportif\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/philosophie/coach-sportif/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "philosophie/coach-en-nutrition/graphqlQuery",
        pattern: /^\/philosophie\/coach-en-nutrition\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/philosophie/coach-en-nutrition/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "philosophie/coach-bien-etre/graphqlQuery",
        pattern: /^\/philosophie\/coach-bien-etre\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/philosophie/coach-bien-etre/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "a-propos/mon-histoire/graphqlQuery",
        pattern: /^\/a-propos\/mon-histoire\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/a-propos/mon-histoire/graphqlQuery.js")))
      },
      {
        type: "endpoint",
        id: "a-propos/ma-mission/graphqlQuery",
        pattern: /^\/a-propos\/ma-mission\/graphqlQuery\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/a-propos/ma-mission/graphqlQuery.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
