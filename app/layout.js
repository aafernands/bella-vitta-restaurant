// app/layout.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import theme from '../themes'; // Import your custom theme if needed
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from 'next/head'; // Import next/head for SEO tags

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO metadata */}
        <Head>
          <title>Bella Vita Ristorante</title>
          <meta name="description" content="Experience authentic Italian cuisine at Bella Vita Ristorante." />
          <meta name="keywords" content="Italian food, restaurant, authentic Italian, pasta, pizza, fine dining" />
          <meta name="author" content="Alex Fernandes" />
          
          {/* Open Graph meta tags */}
          <meta property="og:title" content="Bella Vita Ristorante" />
          <meta property="og:description" content="Authentic Italian dining experience at Bella Vita Ristorante." />
          <meta property="og:image" content="URL_to_image" />
          <meta property="og:type" content="website" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bella Vita Ristorante" />
          <meta name="twitter:description" content="Enjoy the best Italian food at Bella Vita Ristorante." />
          <meta name="twitter:image" content="URL_to_image" />
        </Head>
      </head>
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
