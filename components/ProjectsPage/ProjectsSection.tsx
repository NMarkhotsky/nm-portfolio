import { ProjectsList } from "./ProjectsList";
import { projectsItems } from "@/utils";

export const ProjectsSection = () => {
	return (
		<>
			<ProjectsList
				projects={projectsItems}
				limit={projectsItems.length}
			/>
		</>
	);
};
