import { Footer, Navbar } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";

const QatarPageView = () => {
	return (
		<>
			<Navbar />
			<section id="travel-banner" className="mb-14">
				<div className="relative w-full h-[300px] overflow-hidden group">
					<Image
						src="/travel.png"
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
							src="/qatar.png"
							fill
							alt="Banner Icon"
							className="rounded-sm object-contain"
						/>
					</div>
				</div>
			</section>

			<section id="travel" className=" min-h-[30vh]">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<h1 className="text-3xl font-bold mb-4">Places to visit</h1>
					<ul className="flex flex-col gap-1">
						<Link href="/travel/qatar/daha">
							<li className="flex items-center gap-3">
								<Image src="/daha.png" width={30} height={30} alt="Daha" />{" "}
								<span className="border-b-2 text-2xl font-semibold">Daha</span>
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
								<span className="border-b-2 text-2xl font-semibold">
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
								<span className="border-b-2 text-2xl font-semibold">
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
								<span className="border-b-2 text-2xl font-semibold">
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
