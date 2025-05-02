import type { Metadata } from "next";
import { Roboto, Fira_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const firaMono = Fira_Mono({
	variable: "--font-fira-mono",
	subsets: ["latin"],
	style: ["normal"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "NM Portfolio",
	description: "Mykola Markhotskyi Portfolio",
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${roboto.variable} ${firaMono.variable} antialiased`}
			>
				<Header />
				<main className="container mx-auto px-4 lg:px-10">
					{children}
				</main>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
