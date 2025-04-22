export interface IEducation {
	id: string;
	degree: string;
	institution: string;
	duration: string;
	location: string;
	major: string;
}

export interface IWorkExperience {
	id: string;
	company: string;
	position: string;
	duration: string;
	location: string;
	type?: string[];
	achievements?: string[];
	links?: { title: string; url: string }[];
}
