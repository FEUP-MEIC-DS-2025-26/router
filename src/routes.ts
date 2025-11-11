export interface Route {
	path: string;
	destination: string;
}

export const routes: Route[] = [
	{
		path: '/test',
		destination: 'https://google.com',
	},
	{
		path: '/',
		destination: 'https://landing-page-1066898156877.europe-southwest1.run.app/',
	},
];
