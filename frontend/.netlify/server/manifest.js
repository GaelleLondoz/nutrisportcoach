export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.291be075.js","app":"_app/immutable/entry/app.9321d362.js","imports":["_app/immutable/entry/start.291be075.js","_app/immutable/chunks/scheduler.e6966926.js","_app/immutable/chunks/singletons.a1e2885e.js","_app/immutable/chunks/index.552f63d5.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.9321d362.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e6966926.js","_app/immutable/chunks/index.e5093829.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/16.js'))
		],
		routes: [
			{
				id: "/a-propos/ma-mission",
				pattern: /^\/a-propos\/ma-mission\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/a-propos/mon-histoire",
				pattern: /^\/a-propos\/mon-histoire\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/philosophie",
				pattern: /^\/philosophie\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/philosophie/coach-bien-etre",
				pattern: /^\/philosophie\/coach-bien-etre\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/philosophie/coach-en-nutrition",
				pattern: /^\/philosophie\/coach-en-nutrition\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/philosophie/coach-sportif",
				pattern: /^\/philosophie\/coach-sportif\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/temoignages/creation",
				pattern: /^\/temoignages\/creation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
