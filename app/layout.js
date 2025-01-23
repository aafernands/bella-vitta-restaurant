"use client";

import NavBar from "../components/NavBar";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../themes"; // Adjust the path if needed

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<NavBar />
					<Container >
						{children} 
					</Container>{" "}
				</ThemeProvider>
			</body>
		</html>
	);
}
