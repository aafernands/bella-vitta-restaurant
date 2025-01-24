import { Container, Typography, Box } from "@mui/material";
import HeroSection from "../components/HeroSection.js";
import AboutSection from "../components/AboutSection.js";
import HighlightsSection from "../components/HighlightsSection.js";

export default function Home() {

	return (
		<Container>
			<HeroSection />
			<AboutSection />
			<HighlightsSection />
		</Container>
	);
}
