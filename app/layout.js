// app/layout.js
"use client"

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import theme from '../themes'; // Import your custom theme if needed
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Container>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
