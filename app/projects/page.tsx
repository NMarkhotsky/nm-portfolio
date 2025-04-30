import { ProjectsSection } from "@/components/ProjectsPage/";

export default function ProjectsPage() {
	return (
		<section className="mt-20 flex items-center justify-center flex-col lg:mt-20">
			<div className="flex flex-col items-center justify-center">
				<h2 className="font-semibold text-center text-2xl lg:text-4xl">
					My Projects
				</h2>
			</div>
			<ProjectsSection />
		</section>
	);
}
