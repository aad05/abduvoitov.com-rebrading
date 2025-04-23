import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="mt-8">
			<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
				<Separator />
				<div className="flex justify-between p-5 max-sm:flex-col">
					<Link
						className="font-semibold text-[#1877FE]"
						href="https://t.me/asadbek_abduvoitov"
					>
						Telegram
					</Link>
					<Link
						className="font-semibold text-[#1877FE]"
						href="https://www.instagram.com/abduvoitov_asadbek"
					>
						Instagram
					</Link>
					<Link
						className="font-semibold text-[#1877FE]"
						href="https://www.linkedin.com/in/asadbek-abduvoitov-97a9a8223"
					>
						Youtube
					</Link>
					<Link
						className="font-semibold text-[#1877FE]"
						href="https://www.linkedin.com/in/asadbek-abduvoitov-97a9a8223"
					>
						Linkedin
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
