import {
	FaBitbucket,
	FaCss3,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJs,
	FaLess,
	FaNode,
	FaPhp,
	FaReact,
	FaSass,
	FaVuejs,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

export const TechnologySection = () => {
	return (
		<>
			<section className="mt-30 flex items-center justify-center flex-col lg:mt-40">
				<div className="flex flex-col items-center justify-center">
					<h2 className="font-semibold text-center text-2xl lg:text-4xl">
						👉 My Tech Stack
					</h2>
					<h3 className="font-medium text-center text-xl lg:text-2xl mt-3">
						✨ A collection of tools and frameworks i work.
					</h3>
				</div>

				<div className="flex flex-wrap items-center justify-center mt-10 lg:mt-15 gap-10">
					<div className="flex items-center justify-center flex-wrap gap-10 cursor-pointer">
						<FaHtml5
							size={50}
							className="text-[#E44D27] hover:text-[#ff5722] transition-all duration-300 ease-in-out"
						/>
						<FaCss3
							size={50}
							className="text-[#2576BC] hover:text-[#3399FF] transition-all duration-300 ease-in-out"
						/>
						<FaSass
							size={50}
							className="text-[#CF6C9C] hover:text-[#FF77C2] transition-all duration-300 ease-in-out"
						/>
						<FaLess
							size={50}
							className="text-[#315485] hover:text-[#4779C5] transition-all duration-300 ease-in-out"
						/>
						<SiTailwindcss
							size={50}
							className="text-[#00BCFF] hover:text-[#38CFFF] transition-all duration-300 ease-in-out"
						/>
						<FaJs
							size={50}
							className="text-[#FFCC31] hover:text-[#FFDD55] transition-all duration-300 ease-in-out"
						/>
						<FaReact
							size={50}
							className="text-[#20D9FE] hover:text-[#67e8f9] transition-all duration-300 ease-in-out"
						/>
						<RiNextjsFill
							size={50}
							className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
						/>
						<FaVuejs
							size={50}
							className="text-[#48BA87] hover:text-[#5EE6B0] transition-all duration-300 ease-in-out"
						/>
						<FaNode
							size={50}
							className="text-[#48BA87] hover:text-[#5EE6B0] transition-all duration-300 ease-in-out"
						/>
						<FaPhp
							size={50}
							className="text-[#6785B8] hover:text-[#8FA9D9] transition-all duration-300 ease-in-out"
						/>
						<SiRedux
							size={50}
							className="text-[#7A50BE] hover:text-[#9C7AD9] transition-all duration-300 ease-in-out"
						/>
						<FaGitAlt
							size={50}
							className="text-[#F45431] hover:text-[#FF725C] transition-all duration-300 ease-in-out"
						/>
						<FaGithub
							size={50}
							className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
						/>
						<FaBitbucket
							size={50}
							className="text-[#2E88FF] hover:text-[#56A8FF] transition-all duration-300 ease-in-out"
						/>
						<VscVscodeInsiders
							size={50}
							className="text-[#2E88FF] hover:text-[#56A8FF] transition-all duration-300 ease-in-out"
						/>
					</div>
				</div>
			</section>
		</>
	);
};
