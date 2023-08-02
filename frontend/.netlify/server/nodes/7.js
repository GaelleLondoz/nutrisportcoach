import * as universal from '../entries/pages/about/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/7.b109367d.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.e6966926.js","_app/immutable/chunks/index.e5093829.js"];
export const stylesheets = [];
export const fonts = [];
