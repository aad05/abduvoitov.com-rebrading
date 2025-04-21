"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();

	const handleGoBack = () => {
		if (window.history.length > 1) {
			router.back();
		} else {
			router.push("/");
		}
	};

	return (
		<section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
			<div className="container text-center text-xl font-semibold text-gray-800 dark:text-gray-100">
				<h1 className="text-[28px] sm:text-[40px] md:text-[60px]">
					404 - Page Not Found
				</h1>
				<p className="my-4 text-center">{`Oops! The page you're looking for doesn't exist.`}</p>

				<Button onClick={handleGoBack}>Go back</Button>
			</div>
		</section>
	);
};

export default NotFound;
