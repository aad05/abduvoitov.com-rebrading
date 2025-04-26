"use client";

import { CustomBreadcrumb } from "@/components/generics";
import { Footer, Navbar } from "@/components/layouts";
import useBreadcrumbs from "@/lib/breadcrumbs";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const QatarPageView = () => {
	const { placeToVisitBreadcrumbs } = useBreadcrumbs();

	return (
		<>
			<Navbar />
			<section id="travel-banner" className="mb-6">
				<div className="relative w-full max-h-[320px] overflow-hidden group">
					<AspectRatio ratio={3 / 1} className="bg-muted">
						<Image
							src="/qatar-landmark.png"
							alt="Qatar Banner"
							fill
							quality={100}
							className="object-cover"
						/>
					</AspectRatio>
				</div>

				<div className="relative w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<div className="absolute -bottom-2 w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px]">
						<Image
							src="/qatar.png"
							fill
							alt="Banner Icon"
							className="rounded-sm object-contain"
						/>
					</div>
				</div>
			</section>

			<CustomBreadcrumb links={placeToVisitBreadcrumbs} />

			<section id="travel" className="min-h-[30vh]">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<ul className="flex flex-col gap-1">
						<Link href="/travel/qatar/daha">
							<li className="flex items-center gap-3">
								<Image src="/daha.png" width={30} height={30} alt="Daha" />{" "}
								<span className="border-b-2 text-xl font-semibold">Daha</span>
							</li>
						</Link>
						<Link href="/travel/qatar/al-khor">
							<li className="flex items-center gap-3">
								<Image
									src="/al-khor.png"
									width={30}
									height={30}
									alt="Al Khor"
								/>{" "}
								<span className="border-b-2 text-xl font-semibold">
									Al Khor
								</span>
							</li>
						</Link>
						<Link href="/travel/qatar/al-rayyan">
							<li className="flex items-center gap-3">
								<Image
									src="/al-rayyan.png"
									width={30}
									height={30}
									alt="Al Rayyan"
								/>{" "}
								<span className="border-b-2 text-xl font-semibold">
									Al Rayyan
								</span>
							</li>
						</Link>
						<Link href="/travel/qatar/mesaieed">
							<li className="flex items-center gap-3">
								<Image
									src="/mesaieed.png"
									width={30}
									height={30}
									alt="Mesaiseed"
								/>{" "}
								<span className="border-b-2 text-xl font-semibold">
									Mesaiseed
								</span>
							</li>
						</Link>
					</ul>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default QatarPageView;
