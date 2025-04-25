"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../Icons/Icons";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { RiCloseLargeFill, RiMenu2Fill } from "react-icons/ri";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contacts", label: "Contacts" },
	];

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [menuOpen]);

	return (
		<header className="container mt-6 p-4 lg:p-10 mx-auto">
			<div className="flex items-center justify-between">
				<div>
					<Link href="/">
						<Logo
							width={147}
							height={57}
							className="hover:text-gray-400 transition-colors duration-200"
						/>
					</Link>
				</div>

				{/* Десктоп навігація */}
				<div className="flex items-center gap-10 max-md:hidden">
					<nav className="flex items-center">
						<ul className="flex gap-6 text-lg font-semibold">
							{navLinks.map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className={`relative inline-block transition-colors duration-200 
													${pathname === href ? "text-gray-500" : "text-foreground hover:text-gray-400"}
													after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
													after:bg-gray-500 after:transition-transform after:duration-300
													${
														pathname === href
															? "after:scale-x-100"
															: "after:scale-x-0 hover:after:scale-x-100"
													}
													after:origin-left`}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<ul className="flex items-center gap-4">
						<li>
							<Link
								href="#"
								className="hover:text-gray-400 transition-colors duration-200"
							>
								<FaGithub size={24} />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-gray-400 transition-colors duration-200"
							>
								<FaLinkedin size={24} />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-gray-400 transition-colors duration-200"
							>
								<FaTelegram size={24} />
							</Link>
						</li>
					</ul>
				</div>

				{/* Мобільне меню */}
				<div className="relative min-md:hidden">
					<div className="md:hidden">
						<button onClick={() => setMenuOpen(!menuOpen)}>
							<RiMenu2Fill size={32} />
						</button>
					</div>

					{menuOpen && (
						<div
							className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 transition-opacity duration-300"
							onClick={() => setMenuOpen(false)}
						/>
					)}

					<div
						className={`fixed top-0 right-0 h-full w-64 bg-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
							menuOpen ? "translate-x-0" : "translate-x-full"
						}`}
					>
						<div className="p-6 flex flex-col gap-6 text-lg font-semibold">
							<button
								className="self-end text-2xl"
								onClick={() => setMenuOpen(false)}
							>
								<RiCloseLargeFill size={32} color="black" />
							</button>

							<nav>
								<ul className="flex flex-col gap-4 text-black">
									{navLinks.map(({ href, label }) => (
										<li key={href}>
											<Link
												href={href}
												onClick={() =>
													setMenuOpen(false)
												}
												className={`${
													pathname === href
														? "text-gray-500"
														: "hover:text-gray-600"
												}`}
											>
												{label}
											</Link>
										</li>
									))}
								</ul>
							</nav>

							<ul className="flex gap-4 mt-4">
								<li>
									<Link href="#">
										<FaGithub size={24} color="black" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<FaLinkedin size={24} color="black" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<FaTelegram size={24} color="black" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
