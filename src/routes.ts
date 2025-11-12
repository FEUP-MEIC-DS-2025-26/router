export interface Route {
	path: string;
	destination: string;
}

export const routes: Route[] = [
	{
		path: "/image-search",
		destination:
			"https://frontend-821255647973.europe-west1.run.app/",
	},
	{
		path: "/",
		destination:
			"https://landing-page-1066898156877.europe-southwest1.run.app/",
	},
];
