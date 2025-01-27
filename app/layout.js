"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
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
