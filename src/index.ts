export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname.startsWith('/test')) {
			return fetch('https://google.com');
		}

		return fetch(`https://landing-page-zl2i7hciea-no.a.run.app${url.pathname}${url.search}`, request);
	},
} satisfies ExportedHandler<Env>;
