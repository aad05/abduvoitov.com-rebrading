"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { sitemap } from "@/lib/mock-data";
import { useModals } from "@/zustand/modal";

const SiteMap: FC = () => {
	const { siteMap, setSiteMap } = useModals();
	const pathname = usePathname();

	return (
		<Dialog open={siteMap} onOpenChange={(open) => setSiteMap(open)}>
			<DialogContent className="w-[90%] rounded-lg">
				<DialogHeader>
					<DialogTitle>Abduvoitov.</DialogTitle>
				</DialogHeader>
				{sitemap.map(({ id, title, path }) => (
					<Link
						key={id}
						href={path}
						onClick={() => setSiteMap(false)}
						className={`w-full ${
							pathname === path ? "text-[blue] font-bold" : ""
						}`}
					>
						<Button
							variant={"outline"}
							className="w-full hover:scale-[0.97] transition-all duration-75"
						>
							{title}
						</Button>
					</Link>
				))}
			</DialogContent>
		</Dialog>
	);
};

export default SiteMap;
