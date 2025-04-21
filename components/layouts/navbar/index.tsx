"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Theme } from "@/components/constants";
import { Button } from "@/components/ui/button";
import type { ISitemap } from "@/interfaces/sitemap.interface";
import { sitemap } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useModals } from "@/zustand/modal";
import useNavbarFeatures from "./features";
import SiteMap from "./sitemap";

interface PropsI {
	mode?: "home" | "other";
}

const Navbar: React.FC<PropsI> = ({ mode = "other" }) => {
	const pathname = usePathname();
	const { setSiteMap } = useModals();
	const { onMouseLeave, onMouseEnter } = useNavbarFeatures();

	return (
		<>
			<header
				className={cn(
					mode === "home" &&
						"absolute text-xl md:text-2xl font-semibold top-0 left-1/2 -translate-x-1/2 w-[85%] md:w-[80%] m-auto flex items-center justify-between h-[120px]",
				)}
			>
				<div
					className="text-anim"
					data-value="Abduvoitov."
					onMouseLeave={onMouseLeave}
					onMouseEnter={onMouseEnter}
				>
					Abduvoitov.
				</div>

				<nav className="flex items-center gap-2 sm:gap-4 lg:gap-10">
					<ul className="hidden lg:flex items-center gap-10">
						{sitemap.map(
							({ id, title, path }: ISitemap) =>
								path !== "/" && (
									<li key={id} className="group">
										<Link
											href={path}
											className={`text-lg relative pb-1 hover:text-[blue] ${
												pathname === path
													? "font-bold text-[blue]"
													: "font-semibold"
											}`}
										>
											{title}
											<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[blue] transition-all duration-300 group-hover:w-full" />
										</Link>
									</li>
								),
						)}
					</ul>

					<Theme />

					<Button
						className="blog lg:hidden"
						onClick={() => setSiteMap(true)}
						variant="outline"
						size="icon"
					>
						<Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<span className="sr-only">Hamburger menu</span>
					</Button>
				</nav>
			</header>
			<SiteMap />
		</>
	);
};

export default Navbar;
