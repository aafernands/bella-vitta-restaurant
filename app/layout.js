"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../themes"; // Adjust the path if needed

export default function RootLayout({ children }) {
  console.log('Environment Variable:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

  return (
    <html lang="en">
      <body>
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
