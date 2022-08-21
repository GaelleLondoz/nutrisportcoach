const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-5fa1edcc.js","imports":["_app/immutable/start-5fa1edcc.js","_app/immutable/chunks/index-23490812.js","_app/immutable/chunks/index-124a935a.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: "graphqlQuery",
				pattern: /^\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "errors",
				pattern: /^\/errors\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/errors.js'))
			},
			{
				type: 'endpoint',
				id: "temoignages/graphqlQuery",
				pattern: /^\/temoignages\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/temoignages/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "philosophie/graphqlQuery",
				pattern: /^\/philosophie\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/philosophie/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "contact/graphqlQuery",
				pattern: /^\/contact\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/contact/graphqlQuery.js'))
			},
			{
				type: 'page',
				id: "temoignages/creation",
				pattern: /^\/temoignages\/creation\/?$/,
				names: [],
				types: [],
				path: "/temoignages/creation",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "philosophie/coach-sportif/graphqlQuery",
				pattern: /^\/philosophie\/coach-sportif\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/philosophie/coach-sportif/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "philosophie/coach-en-nutrition/graphqlQuery",
				pattern: /^\/philosophie\/coach-en-nutrition\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/philosophie/coach-en-nutrition/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "philosophie/coach-bien-etre/graphqlQuery",
				pattern: /^\/philosophie\/coach-bien-etre\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/philosophie/coach-bien-etre/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "a-propos/mon-histoire/graphqlQuery",
				pattern: /^\/a-propos\/mon-histoire\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/a-propos/mon-histoire/graphqlQuery.js'))
			},
			{
				type: 'endpoint',
				id: "a-propos/ma-mission/graphqlQuery",
				pattern: /^\/a-propos\/ma-mission\/graphqlQuery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/a-propos/ma-mission/graphqlQuery.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
