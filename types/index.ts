export type DashboardMatricType = {
	github: number;
	telegram: number;
};

export type PostSlug = {
	meta: {
		[key: string]: string;
	};
	slug: string;
};
