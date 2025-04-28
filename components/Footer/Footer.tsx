import Link from "next/link";
import { Logo } from "../Icons/Icons";
import { navSocialLinks } from "@/utils/navigationLinks";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

export const Footer = () => {
	return (
		<footer className="container mt-30 p-4 lg:px-10 mx-auto flex flex-col gap-5">
			<div className="relative w-full flex items-center justify-between gap-4 flex-col md:flex-row md:gap-10">
				<div className="flex items-center justify-center gap-4 flex-col md:flex-row">
					<a
						href="tel:+380937143691"
						className="flex items-center justify-center gap-2.5 hover:text-gray-400 transition-colors duration-200"
					>
						<HiPhone size={24} />
						<span>+380937143691</span>
					</a>
					<a
						href="mailto:markhotskyi@gmail.com"
						className="flex items-center justify-center gap-2.5 hover:text-gray-400 transition-colors duration-200"
					>
						<HiOutlineMail size={24} />
						<span>markhotskyi@gmail.com</span>
					</a>
				</div>
				<ul className="flex items-center justify-center gap-4 md:items-start">
					{navSocialLinks.map(({ href, Icon }) => (
						<li key={href}>
							<a
								className="hover:text-gray-400 transition-colors duration-200"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon size={24} />
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full h-[2px] bg-white opacity-20"></div>
			<div className="w-full flex items-center justify-between flex-col gap-4 md:flex-row">
				<p className="text-center text-white">
					Designed and built by{" "}
					<span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#ededed,_#888888)] animate-pulse">
						Mykola MARKHOTSKYI
					</span>{" "}
					with{" "}
					<span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#ededed,_#888888)] animate-pulse">
						Love
					</span>{" "}
					&{" "}
					<span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#ededed,_#888888)] animate-pulse">
						Coffee
					</span>
				</p>
				<div className="flex items-center justify-center animate-pulse">
					<Link href="/">
						<Logo
							width={100}
							className="hover:text-gray-400 transition-colors duration-200"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};
