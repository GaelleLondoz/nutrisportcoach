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
  b: () => breakpoint,
  w: () => writable
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7d28e02 = require("./index-a7d28e02.js");
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = import_index_a7d28e02.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_a7d28e02.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_a7d28e02.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_a7d28e02.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const breakpointValues = {
  xs: 360,
  sm: 600,
  md: 1024,
  lg: 1280,
  xl: 1586
};
const xs = {
  min: 0,
  max: breakpointValues.xs - 1,
  name: "xs"
};
const sm = {
  min: breakpointValues.xs,
  max: breakpointValues.sm - 1,
  name: "sm"
};
const md = {
  min: breakpointValues.sm,
  max: breakpointValues.md - 1,
  name: "md"
};
const lg = {
  min: breakpointValues.md,
  max: breakpointValues.lg - 1,
  name: "lg"
};
const xl = {
  min: breakpointValues.lg,
  max: breakpointValues.xl - 1,
  name: "xl"
};
const xxl = {
  min: breakpointValues.xl,
  max: Infinity,
  name: "xxl"
};
const breakpoints = { xs, sm, md, lg, xl, xxl };
const breakpoint = readable(getBP(), (set) => {
  const isWindow = typeof window !== "undefined" || false;
  let BP = getBP();
  const updateBP = () => {
    const currentBP = getBP();
    if (!BP || currentBP.name !== BP.name) {
      BP = currentBP;
      set(currentBP);
    }
  };
  if (isWindow) {
    window.addEventListener("resize", updateBP);
  }
  return () => isWindow && window.removeEventListener("resize", updateBP);
});
function getBP() {
  if (typeof window !== "undefined") {
    const { innerWidth } = window;
    return Object.values(breakpoints).find(
      (bp) => bp.min <= innerWidth && bp.max >= innerWidth
    );
  }
}
