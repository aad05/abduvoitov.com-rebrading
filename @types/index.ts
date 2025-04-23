export type DashboardMatricType = {
	github: number;
	telegram: number;
};

export type Frontmatter = {
	title: string;
	description: string;
	date: string;
	tags?: string[];
	author?: string;
	image?: string;
	[key: string]: unknown;
};

export type PostSlug = {
	meta: {
		[key: string]: Frontmatter;
	};
	slug: string;
};
