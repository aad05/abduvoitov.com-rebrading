import type { Metadata } from "next";

import { EducationCard, WorkExperienceCard } from "@/components/generics";
import { Section } from "@/components/layouts";
import type {
	IEducation,
	IWorkExperience,
} from "@/interfaces/experience.interface";
import useMockData from "@/lib/mock-data";

export const metadata: Metadata = {
	title: "Resume",
	description:
		"Software Engineer - As a seasoned software engineer with over 4 years of experience, I am proficient in designing, developing, and maintaining complex software applications. My expertise spans across various programming languages and development methodologies, allowing me to work across diverse projects, from web and mobile applications to enterprise software solutions.",
	alternates: {
		canonical: "/resume",
	},
	openGraph: {
		title: "Resume - Abduvoitov Asadbek",
		description:
			"Software Engineer - As a seasoned software engineer with over 4 years of experience, I am proficient in designing, developing, and maintaining complex software applications. My expertise spans across various programming languages and development methodologies, allowing me to work across diverse projects, from web and mobile applications to enterprise software solutions.",
		url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'",
		siteName: "https://abduvoitov.com/resume",
		images: [
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'&width=800&height=600",
				width: 800,
				height: 600,
			},
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'&width=1800&height=1600",
				width: 1800,
				height: 1600,
				alt: "My custom alt",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const Resume = () => {
	const { work_experience, education } = useMockData();

	return (
		<Section id="resume" title="Resume">
			<h3 className="text-2xl md:text-3xl font-bold mt-4 sm:mt-6 md:mt-8 mb-2">
				Work Experience
			</h3>
			{work_experience.map((item: IWorkExperience) => (
				<WorkExperienceCard key={item.id} {...item} />
			))}

			<h3 className="text-2xl md:text-3xl font-bold mt-4 sm:mt-6 md:mt-8 mb-2">
				Education
			</h3>
			{education.map((item: IEducation) => (
				<EducationCard key={item.id} {...item} />
			))}
		</Section>
	);
};

export default Resume;
