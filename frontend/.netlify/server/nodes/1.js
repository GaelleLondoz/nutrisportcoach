

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.20b33a2f.js","_app/immutable/chunks/scheduler.e6966926.js","_app/immutable/chunks/index.e5093829.js","_app/immutable/chunks/each.e6652516.js","_app/immutable/chunks/index.03158191.js","_app/immutable/chunks/stores.29429640.js","_app/immutable/chunks/singletons.a1e2885e.js","_app/immutable/chunks/index.552f63d5.js","_app/immutable/chunks/Header.d3310ef9.js","_app/immutable/chunks/store-breakpoint.b66a0c15.js","_app/immutable/chunks/Head.0614b78c.js","_app/immutable/chunks/HTML.f58dc0fe.js"];
export const stylesheets = ["_app/immutable/assets/1.64ee7b10.css","_app/immutable/assets/Header.d1c57687.css"];
export const fonts = [];
