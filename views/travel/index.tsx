import { Footer, Navbar } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";

const TravelPageView = () => {
	return (
		<>
			<Navbar />
			<section id="travel-banner" className="mb-14">
				<div className="relative w-full h-[300px] overflow-hidden group">
					<Image
						src="/travel3.png"
						alt="Travel Banner"
						fill
						priority
						quality={90} // Increase quality (default is 75)
						className="object-cover bg-fixed"
					/>
				</div>

				<div className="relative w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<div className="absolute -bottom-2 w-[120px] h-[120px]">
						<Image
							src="/512.gif"
							fill
							alt="Banner Icon"
							className="rounded-sm object-cover"
						/>
					</div>
				</div>
			</section>
			<section id="travel" className=" min-h-[30vh]">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<ul>
						<Link href="/travel/qatar">
							<li className="flex items-center gap-3">
								<Image src="/qatar.png" width={30} height={30} alt="qatar" />{" "}
								<span className="border-b-2 text-2xl font-semibold">Qatar</span>
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
