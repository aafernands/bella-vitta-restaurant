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
		<>
			{/* General meta tags */}
			<title>{metadata.title}</title>
			<meta name="description" content={metadata.description} />
			<meta
				name="keywords"
				content="Italian food, restaurant, authentic Italian, pasta, pizza, fine dining"
			/>
			<meta name="author" content="Alex Fernandes" />

			{/* Open Graph meta tags */}
			<meta property="og:title" content={metadata.openGraph.title} />
			<meta
				property="og:description"
				content={metadata.openGraph.description}
			/>
			<meta property="og:url" content={metadata.openGraph.url} />
			<meta property="og:image" content={metadata.openGraph.images[0].url} />
			<meta
				property="og:image:width"
				content={metadata.openGraph.images[0].width}
			/>
			<meta
				property="og:image:height"
				content={metadata.openGraph.images[0].height}
			/>
			<meta
				property="og:image:alt"
				content={metadata.openGraph.images[0].alt}
			/>
			<meta property="og:type" content={metadata.openGraph.type} />

			{/* Twitter Card meta tags */}
			<meta name="twitter:card" content={metadata.twitter.card} />
			<meta name="twitter:title" content={metadata.twitter.title} />
			<meta name="twitter:description" content={metadata.twitter.description} />
			<meta name="twitter:image" content={metadata.twitter.images[0]} />

			<Container>
				<HeroSection />
				<AboutSection />
				<HighlightsSection />
			</Container>
		</>
	);
}
