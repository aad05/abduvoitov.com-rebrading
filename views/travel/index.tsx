"use client";

import { CustomBreadcrumb } from "@/components/generics";
import { Footer, Navbar } from "@/components/layouts";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useBreadcrumbs from "@/lib/breadcrumbs";
import Image from "next/image";
import Link from "next/link";

const TravelPageView = () => {
	const { travelBreadcrumbs } = useBreadcrumbs();

	return (
		<>
			<Navbar />
			<section id="travel-banner" className="mb-6">
				<div className="relative w-full max-h-[320px] overflow-hidden group">
					<AspectRatio ratio={3 / 1} className="bg-muted">
						<Image
							src="/travel.png"
							alt="Travel Banner"
							fill
							quality={100}
							className="object-cover"
						/>
					</AspectRatio>
				</div>

				<div className="relative w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<div className="absolute -bottom-2 w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px]">
						<Image
							src="/512.gif"
							fill
							alt="Banner Icon"
							className="rounded-sm object-cover"
						/>
					</div>
				</div>
			</section>

			<CustomBreadcrumb links={travelBreadcrumbs} />

			<section id="travel" className=" min-h-[30vh]">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<ul>
						<Link href="/travel/qatar">
							<li className="flex items-center gap-3">
								<Image src="/qatar.png" width={30} height={30} alt="qatar" />{" "}
								<span className="border-b-2 text-xl font-semibold">Qatar</span>
							</li>
						</Link>
					</ul>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default TravelPageView;
