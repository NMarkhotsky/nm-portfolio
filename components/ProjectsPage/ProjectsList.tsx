import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

interface IProjectItem {
	title: string;
	description: string;
	image: string;
	techStack: string[];
	liveLink: string;
	gitHubLink?: string;
	gitHubLinkBackend?: string;
}

export const ProjectsList = ({
	projects,
	limit,
}: {
	projects: IProjectItem[];
	limit?: number;
}) => {
	const visibleProjects = limit ? projects.slice(0, limit) : projects;

	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
			{visibleProjects.map((item, index) => {
				return (
					<li
						key={index}
						className="flex flex-col max-w-100 rounded-[20px] bg-[#363636] hover:skale hover:bg-[#4a4a4a] hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-200"
					>
						<Image
							className="object-cover rounded-t-[20px]"
							src={item.image}
							alt={item.title}
							width={400}
							height={220}
						/>
						<div className="h-full flex flex-col p-6 gap-4">
							<h3 className="font-semibold text-xl">
								{item.title}
							</h3>
							<p className="text-sm mt-1">{item.description}</p>
							<p className="text-sm mt-1">
								Tech stack:
								<span className="ml-3 text-xs font-mono font-bold">
									{item.techStack.map((tech, index) => (
										<span
											key={index}
											className="text-blue-200"
										>
											{tech}
											{index < item.techStack.length - 1
												? ", "
												: ""}
										</span>
									))}
								</span>
							</p>
							<div className="flex items-end justify-between gap-2 mt-auto">
								<a
									href={item.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-2 text-base hover:text-gray-400 transition-colors duration-200"
								>
									<FaLink size={16} /> Live Preview
								</a>
								<div className="flex items-start flex-col gap-2">
									<a
										href={item?.gitHubLink}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center justify-center gap-2 text-base hover:text-gray-400 transition-colors duration-200 ${
											item.gitHubLink
												? ""
												: "cursor-not-allowed"
										}`}
									>
										<FaGithub
											size={20}
											className={`${
												item.gitHubLink
													? ""
													: "text-gray-500"
											}`}
										/>

										{item.gitHubLink ? (
											<span>
												View Code{" "}
												{item.gitHubLinkBackend &&
													"Frontend"}
											</span>
										) : (
											<span className="text-gray-500">
												Private Repository
											</span>
										)}
									</a>
									{item.gitHubLinkBackend && (
										<a
											href={item?.gitHubLinkBackend}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center gap-2 text-base hover:text-gray-400 transition-colors duration-200"
										>
											<FaGithub size={20} /> View Code
											Backend
										</a>
									)}
								</div>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
