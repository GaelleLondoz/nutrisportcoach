const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		entry: {"file":"immutable/start-21f61f07.js","imports":["immutable/start-21f61f07.js","immutable/chunks/index-ea7d6d72.js","immutable/chunks/index-a97d16b2.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js'))
		],
		routes: [
			{
				type: 'page',
				id: "histoire",
				pattern: /^\/histoire\/?$/,
				names: [],
				types: [],
				path: "/histoire",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.js')),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "programs/nutrition",
				pattern: /^\/programs\/nutrition\/?$/,
				names: [],
				types: [],
				path: "/programs/nutrition",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "programs/philosophie",
				pattern: /^\/programs\/philosophie\/?$/,
				names: [],
				types: [],
				path: "/programs/philosophie",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "programs/sport",
				pattern: /^\/programs\/sport\/?$/,
				names: [],
				types: [],
				path: "/programs/sport",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "programs/vie",
				pattern: /^\/programs\/vie\/?$/,
				names: [],
				types: [],
				path: "/programs/vie",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
