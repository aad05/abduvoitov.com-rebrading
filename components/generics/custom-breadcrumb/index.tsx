import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export interface BreadcrumbLinkItem {
	id: string;
	title: string;
	path?: string;
	isActive?: boolean;
}

interface GenericBreadcrumbProps {
	links: BreadcrumbLinkItem[];
}

const GenericBreadcrumb: React.FC<GenericBreadcrumbProps> = ({ links }) => {
	if (!links?.length) return null;

	return (
		<section id="breadcrumbs">
			<div className="w-[700px] m-auto px-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
				<Breadcrumb>
					<BreadcrumbList className="py-3 flex items-center">
						{links.map((item, index) => (
							<React.Fragment key={item.id}>
								<BreadcrumbItem>
									{item.isActive ? (
										<BreadcrumbPage className="capitalize">
											{item.title}
										</BreadcrumbPage>
									) : (
										<BreadcrumbLink href={item.path} className="capitalize">
											{item.title}
										</BreadcrumbLink>
									)}
								</BreadcrumbItem>

								{index < links.length - 1 && <BreadcrumbSeparator />}
							</React.Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</section>
	);
};

export default GenericBreadcrumb;
