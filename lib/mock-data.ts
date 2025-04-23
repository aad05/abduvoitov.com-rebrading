import type {
	IEducation,
	IWorkExperience,
} from "@/interfaces/experience.interface";
import type { ISitemap } from "@/interfaces/sitemap.interface";

const useMockData = () => {
	const sitemap: ISitemap[] = [
		{
			id: "1",
			title: "About",
			path: "/about",
			pathname: "/about",
		},
		{
			id: "2",
			title: "Blog",
			path: "/blog",
			pathname: "/blog",
		},
		{
			id: "3",
			title: "Travel",
			path: "/travel",
			pathname: "/travel",
		},
		{
			id: "4",
			title: "Analytics",
			path: "/analytics",
			pathname: "/analytics",
		},
		{
			id: "5",
			title: "Resume",
			path: "/resume",
			pathname: "/resume",
		},
	];

	const education: IEducation[] = [
		{
			id: "1",
			degree: "Bachelor degree",
			institution: "Neusoft University",
			duration: "Sep 2019 – Jun 2023",
			location: "Chengdu, China",
			major: "Software Engineering",
		},
	];

	const work_experience: IWorkExperience[] = [
		{
			id: "1",
			company: "Neusoft University",
			position: "Software Engineer",
			duration: "Sep 2019 – Jun 2023",
			location: "Chengdu, China",
			type: ["on-site"],
			achievements: [
				"Designed scalable web applications, leveraging modern frameworks like React, Node.js, and MongoDB, leading to a 30% improvement in system performance.",
				"Collaborated with multidisciplinary teams to integrate APIs, optimize database queries, and resolve performance bottlenecks.",
				"Conducted comprehensive code reviews and implemented modular architectures, ensuring long-term code maintainability and scalability.",
			],
		},
		{
			id: "2",
			company: "Webbrain Academy",
			position: "Frontend Mentor",
			duration: "May 2022 – Sep 2023",
			location: "Tashkent, Uzbekistan",
			type: ["online", "on-site"],
			achievements: [
				"Mentored over 50 students in front-end technologies, including React, TypeScript, and Tailwind CSS, helping them complete industry-standard projects.",
				"Developed and delivered custom learning modules, ensuring effective understanding of advanced front-end concepts like state management and responsive design.",
				"Supported students in debugging and optimizing their codebases, with a focus on best practices and performance enhancements.",
				"Hosted workshops and technical talks, boosting student engagement and knowledge retention by 25%.",
			],
		},
		{
			id: "3",
			company: "Applied Labs",
			position: "Software Engineer",
			duration: "Aug 2022 – Feb 2023",
			location: "New York, USA",
			type: ["remote"],
			achievements: [
				"Built responsive, pixel-perfect user interfaces for enterprise-level web applications, ensuring optimal user experiences across devices.",
				"Optimized web application performance, achieving a 20% increase in page load speeds through code refactoring and efficient asset management.",
				"Collaborated with designers to implement cohesive design systems, enhancing consistency and reusability across multiple projects.",
				"Participated in Agile development cycles, ensuring timely delivery of high-priority features and bug fixes.",
			],
		},
		{
			id: "4",
			company: "AEMA Team",
			position: "Software Engineer",
			duration: "Jan 2024 – Present",
			location: "Remote",
			type: ["remote"],
			achievements: [
				"Developed and maintained scalable web applications, enhancing performance and user experience.",
				"Integrated RESTful APIs and optimized database queries, improving application efficiency and reducing load times.",
				"Collaborated with cross-functional teams to deliver high-quality software solutions in an Agile environment.",
				"Implemented best practices in code structure and design patterns, ensuring maintainability and scalability.",
				"Contributed to architectural decisions, refactoring legacy codebases, and optimizing performance across multiple projects.",
			],
		},
		{
			id: "5",
			company: "Najot ta'lim",
			position: "Frontend Mentor",
			duration: "Jan 2024 – Oct 2024",
			location: "Tashkent, Uzbekistan",
			type: ["on-site"],
			achievements: [
				"Provided hands-on guidance to students in building robust front-end applications using HTML, CSS, JavaScript, and React.js, Next.JS, and TypeScript.",
				"Facilitated real-world project simulations, preparing students for professional software development roles.",
				"Introduced modern debugging tools and techniques, helping students achieve cleaner, more efficient code.",
				"Collaborated with other mentors to revamp the curriculum, aligning it with the latest industry standards.",
			],
		},
		{
			id: "6",
			company: "Neusoft Team",
			position: "Full-Stack Developer",
			duration: "Oct 2024 – Present",
			location: "Remote",
			type: ["remote"],
			achievements: [
				"Developed and deployed School Management ERP solutions, streamlining business operations and enhancing efficiency with customized features for inventory, sales, and finance management.",
				"Led the design and development of Book.uz, an online bookstore platform, improving customer engagement with a seamless and intuitive shopping experience, integrated with robust backend services and dynamic search features.",
				"Built and launched Greenstore, a comprehensive e-commerce platform for a flower shop, utilizing React, TypeScript, and Tailwind CSS for a responsive and user-friendly front-end, with an Express.js backend for efficient order management and secure user authentication.",
				"Implemented modern best practices such as project management to ensure timely delivery of features and optimal performance across all projects.",
				"Provided full-stack development services, including creating API endpoints, database management, and ensuring the scalability of applications to meet increasing user demands.",
				"Developed and launched Krist shop, an e-commerce platform built with Next.js, TypeScript, NestJS, and PostgreSQL, offering a high-performance, scalable solution for seamless product management and customer interactions.",
			],
		},
	];

	return { sitemap, education, work_experience };
};

export default useMockData;
