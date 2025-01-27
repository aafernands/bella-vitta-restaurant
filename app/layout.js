"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Container } from '@mui/system';
import theme from "../themes";
import SEO from "../components/SEO";
import Head from "next/head"; // Import Head from next/head

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<Head>
					{/* Use the SEO component for global metadata */}
					<SEO
						title="Bella Vita Ristorante"
						description="Experience authentic Italian cuisine at Bella Vita Ristorante."
						keywords="Italian food, restaurant, authentic Italian, pasta, pizza, fine dining"
						author="Alex Fernandes"
						ogTitle="Bella Vita Ristorante"
						ogDescription="Authentic Italian dining experience at Bella Vita Ristorante."
						ogImage="URL_to_image"
						twitterCard="summary_large_image"
						twitterTitle="Bella Vita Ristorante"
						twitterDescription="Enjoy the best Italian food at Bella Vita Ristorante."
						twitterImage="URL_to_image"
					/>
				</Head>
				<body>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<NavBar />
						<Container>{children}</Container>
						<Footer />
					</ThemeProvider>{" "}
				</body>
			</html>
		</>
	);
}
