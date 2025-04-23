import { Footer, Navbar } from "@/components/layouts";
import { Separator } from "@/components/ui/separator";
import BrandsUp from "./BrandsUp";
import DigitalOne from "./DigitalOne";
import Webbrain from "./Webbrain";

const ResumePageView = () => {
	return (
		<>
			<Navbar />
			<section id="resume">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<h1 className="text-5xl font-black">Resume</h1>
					<div>
						<h3 className="text-2xl font-semibold mt-8 mb-2">
							Work Experience
						</h3>
						<Separator />
						<div className="flex py-5 px-2 fkex justify-between">
							<h3 className="text-xl font-bold text-[#1877FE]">Aema</h3>
							<p className="text-sm italic">Jan, 2023 - Present</p>
						</div>
						<Separator />
						<BrandsUp />
						<Separator />
						<DigitalOne />
						<Separator />
						<Webbrain />
					</div>
					<div>
						<h3 className="text-2xl font-semibold mt-8 mb-2">Education</h3>
						<Separator />
						<div className="flex py-5 fkex justify-between items-center">
							<h3 className="text-xl font-bold">{"Bachelor's"} degree</h3>
							<p className="text-sm italic">Pending...</p>
						</div>
						<div className="flex py-5 justify-between items-center">
							<h3 className="text-xl font-bold">5 - School</h3>
							<p className="text-sm italic">2011 - 2023</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ResumePageView;
