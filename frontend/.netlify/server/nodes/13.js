import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/13.7775ad02.js","_app/immutable/chunks/scheduler.e6966926.js","_app/immutable/chunks/each.e6652516.js","_app/immutable/chunks/index.e5093829.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a1e2885e.js","_app/immutable/chunks/index.552f63d5.js"];
export const stylesheets = ["_app/immutable/assets/13.9d501049.css"];
export const fonts = [];
