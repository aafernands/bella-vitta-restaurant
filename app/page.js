import { Container, Typography, Box } from "@mui/material";
import HeroSection from "../components/HeroSection.js";
import AboutSection from "../components/AboutSection.js";
import HighlightsSection from "../components/HighlightsSection.js";
/** @type {import("next").Metadata} */

export const metadata = {
	title: "Your Website Title",
	description: "A brief description of your website.",
	openGraph: {
		title: "Your Website Title",
		description: "A brief description of your website.",
		url: "https://www.yourwebsite.com",
		siteName: "Your Website",
		images: [
			{
				url: "https://www.yourwebsite.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Open Graph Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Your Website Title",
		description: "A brief description of your website.",
		images: ["https://www.yourwebsite.com/twitter-image.jpg"],
	},
};

export default function Home() {
	return (
		<Container>
			<HeroSection />
			<AboutSection />
			<HighlightsSection />
		</Container>
	);
}
