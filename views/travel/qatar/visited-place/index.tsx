"use client";

import { CustomBreadcrumb } from "@/components/generics";
import { Footer, Navbar } from "@/components/layouts";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import useBreadcrumbs from "@/lib/breadcrumbs";

const VisitedPlacePageView = () => {
	const { visitedPlaceToVisitBreadcrumbs } = useBreadcrumbs();

	return (
		<>
			<Navbar />

			<CustomBreadcrumb links={visitedPlaceToVisitBreadcrumbs} />

			<section id="visited-place" className="min-h-[70vh]">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<SimpleEditor />
				</div>
			</section>

			<Footer />
		</>
	);
};

export default VisitedPlacePageView;
