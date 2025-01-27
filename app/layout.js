"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../themes"; // Adjust the path if needed
import SEO from "../components/SEO";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<SEO
					title="Bella Vita Ristorante"
					description="Experience authentic Italian cuisine at Bella Vita Ristorante."
					keywords="Italian food, restaurant, authentic Italian, pasta, pizza, fine dining"
					author="Alex Fernandes"
				/>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<NavBar />
					<Container>{children}</Container>
					<Footer />
				</ThemeProvider>{" "}
			</body>
		</html>
	);
}
