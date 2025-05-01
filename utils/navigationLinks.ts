import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contacts", label: "Contacts" },
];

export const navSocialLinks = [
	{
		href: "/cv/Mykola_Markhotskyi.pdf",
		Icon: TbFileCv,
		download: true,
	},
	{
		href: "https://github.com/NMarkhotsky",
		Icon: FaGithub,
	},
	{
		href: "https://www.linkedin.com/in/mykola-markhotskyi/",
		Icon: FaLinkedin,
	},
	{
		href: "https://t.me/NMarkhotskyi",
		Icon: FaTelegram,
	},
];
