import routesJSON from './routes.json';


export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		for (const route of routesJSON.routes) {
			console.log(`Checking route: ${route.path} -> ${route.destination}`);
			if (url.pathname.startsWith(route.path)) {
				console.log(`Proxying request for ${url.pathname} to ${route.destination}`);
				return fetch(`${route.destination}${url.pathname}${url.search}`, request);
			}
		}

		return new Response('Not Found', { status: 404 });
	},
} satisfies ExportedHandler<Env>;
