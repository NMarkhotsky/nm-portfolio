import Image from "next/image";

export const HeroSection = () => {
	return (
		<>
			<section className="mt-30 flex items-center justify-center max-md:flex-col max-lg:justify-center">
				<h1 className="max-w-100 lg:max-w-150 mb-5 lg:mb-0 font-bold text-clip leading-8 text-center lg:text-start text-3xl lg:text-5xl lg:leading-16">
					Hi 👋, I’m{" "}
					<span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#ededed,_#888888)] animate-pulse">
						Mykola MARKHOTSKYI
					</span>{" "}
					— <br /> Full Stack Developer.
				</h1>
				<div className="relative p-1 rounded-full bg-[linear-gradient(180deg,_#ededed,_#888888)]">
					<div className="relative w-75 h-75 lg:w-100 lg:h-100 rounded-full overflow-hidden bg-[#CFD4D5]">
						<Image
							src="/NM.jpeg"
							alt="Mykola Markhotskyi"
							fill
							className="object-cover rounded-full"
						/>
					</div>
				</div>
			</section>
		</>
	);
};
