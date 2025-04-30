import { projectsItems } from "@/utils/";
import Link from "next/link";
import { ProjectsList } from "../ProjectsPage/ProjectsList";

export const ProjectsSection = () => {
	return (
		<section className="mt-30 flex items-center justify-center flex-col lg:mt-40">
			<div className="flex flex-col items-center justify-center">
				<h2 className="font-semibold text-center text-2xl lg:text-4xl">
					Projects
				</h2>
				<h3 className="font-medium text-center text-xl lg:text-2xl mt-3">
					Things I&apos;ve built
				</h3>
			</div>
			<div>
				<ProjectsList projects={projectsItems} limit={3} />
			</div>

			<div className="flex items-center justify-center mt-20">
				<Link href="/projects">
					<button className="px-6 py-2 text-base font-semibold cursor-pointer text-white bg-[#363536] rounded-lg hover:bg-gray-500 transition duration-300 ease-in-out animate-bounce">
						See All Projects
					</button>
				</Link>
			</div>
		</section>
	);
};
