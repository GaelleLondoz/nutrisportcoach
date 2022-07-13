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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["robots.txt"]),
  mimeTypes: { ".txt": "text/plain" },
  _: {
    entry: { "file": "immutable/start-21f61f07.js", "imports": ["immutable/start-21f61f07.js", "immutable/chunks/index-ea7d6d72.js", "immutable/chunks/index-a97d16b2.js", "immutable/chunks/singletons-cdeec3fd.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js")))
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
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "histoire",
        pattern: /^\/histoire\/?$/,
        names: [],
        types: [],
        path: "/histoire",
        shadow: null,
        a: [0, 5],
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
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "todos",
        pattern: /^\/todos\/?$/,
        names: [],
        types: [],
        path: "/todos",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/todos/index.js"))),
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "programs/nutrition",
        pattern: /^\/programs\/nutrition\/?$/,
        names: [],
        types: [],
        path: "/programs/nutrition",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "programs/philosophie",
        pattern: /^\/programs\/philosophie\/?$/,
        names: [],
        types: [],
        path: "/programs/philosophie",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "programs/sport",
        pattern: /^\/programs\/sport\/?$/,
        names: [],
        types: [],
        path: "/programs/sport",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "programs/vie",
        pattern: /^\/programs\/vie\/?$/,
        names: [],
        types: [],
        path: "/programs/vie",
        shadow: null,
        a: [0, 11],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
