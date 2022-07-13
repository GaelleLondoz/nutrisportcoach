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
  H: () => Header,
  d: () => dynamicOffsetHeight
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4688debc = require("./index-4688debc.js");
var import_heroicons = require("@steeze-ui/heroicons");
const subscriber_queue = [];
function writable(value, start = import_index_4688debc.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_4688debc.a)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_4688debc.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_4688debc.n;
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
  return { set, update, subscribe: subscribe2 };
}
const getStores = () => {
  const stores = (0, import_index_4688debc.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const getMenuData = async () => {
  const response = await fetch("http://localhost:1337/api/menu?populate=*");
  if (response.status === 200) {
    return await response.json();
  }
  return {
    status: response.status
  };
};
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap");.svelte-ialrpo.svelte-ialrpo,.svelte-ialrpo.svelte-ialrpo::after,.svelte-ialrpo.svelte-ialrpo::before{box-sizing:border-box}.container.svelte-ialrpo.svelte-ialrpo{padding-right:1.6rem;padding-left:1.6rem;max-width:141.6rem;margin-right:auto;margin-left:auto}nav.svelte-ialrpo.svelte-ialrpo{padding-top:7.5rem}nav.svelte-ialrpo .logo.svelte-ialrpo{max-height:7.68rem;max-width:100%}nav.svelte-ialrpo ul li a.svelte-ialrpo{color:#1a2a34;font-size:2.5rem;line-height:3.3rem;letter-spacing:0.063rem}nav.svelte-ialrpo ul li.active a.svelte-ialrpo{color:#486b3b}nav.svelte-ialrpo ul li hr.svelte-ialrpo{display:none}@media(min-width: 768px){nav.svelte-ialrpo ul.svelte-ialrpo{gap:6rem}nav.svelte-ialrpo ul li a.svelte-ialrpo{font-size:2.5rem;line-height:3.3rem;letter-spacing:0.063rem;transition:all ease-in-out 0.4s}nav.svelte-ialrpo ul li.active a.svelte-ialrpo,nav.svelte-ialrpo ul li:hover a.svelte-ialrpo{color:#486b3b}nav.svelte-ialrpo ul li.active hr.svelte-ialrpo,nav.svelte-ialrpo ul li:hover hr.svelte-ialrpo{width:100%}nav.svelte-ialrpo ul li hr.svelte-ialrpo{display:block;transition:all ease-in-out 0.4s;border-bottom:solid 0.2rem #486b3b;border-radius:1rem;width:0}}',
  map: null
};
const dynamicOffsetHeight = writable(0);
const Header = (0, import_index_4688debc.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let menu;
  let logo;
  let $$unsubscribe_dynamicOffsetHeight;
  let $page, $$unsubscribe_page;
  $$unsubscribe_dynamicOffsetHeight = (0, import_index_4688debc.b)(dynamicOffsetHeight, (value) => value);
  $$unsubscribe_page = (0, import_index_4688debc.b)(page, (value) => $page = value);
  let { open = false } = $$props;
  let data = null;
  const loadMenuData = async () => {
    data = await getMenuData();
  };
  loadMenuData();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  menu = (_b = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.attributes) == null ? void 0 : _b.menu;
  logo = (_d = (_c = data == null ? void 0 : data.data) == null ? void 0 : _c.attributes) == null ? void 0 : _d.logo;
  $$unsubscribe_dynamicOffsetHeight();
  $$unsubscribe_page();
  return `${data ? `<header class="${"svelte-ialrpo"}"><nav class="${"container md:flex md:justify-between md:items-center svelte-ialrpo"}"><div class="${"svelte-ialrpo"}"><img class="${"logo svelte-ialrpo"}" src="${"http://localhost:1337" + (0, import_index_4688debc.e)(logo.data.attributes.url, true)}" alt="${"logo"}"></div>
      

      
      <ul class="${"md:flex p-0 list-none svelte-ialrpo"}">${(0, import_index_4688debc.d)(menu, (menuItems) => {
    return `<li class="${["svelte-ialrpo", $page.url.pathname === menuItems.link ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_4688debc.f)("href", menuItems.link, 0)} class="${"no-underline svelte-ialrpo"}">${(0, import_index_4688debc.e)(menuItems.name)}</a>
            <hr class="${"svelte-ialrpo"}">
          </li>`;
  })}</ul>

      
      
      </nav></header>` : ``}`;
});
