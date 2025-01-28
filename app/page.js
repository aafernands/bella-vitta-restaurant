"use client";

import { Container, Typography, Box } from "@mui/material";
import HeroSection from "../components/HeroSection.js";
import AboutSection from "../components/AboutSection.js";
import HighlightsSection from "../components/HighlightsSection.js";
import Head from 'next/head'; // Import Head from next/head for SEO

export default function Home() {
  // SEO metadata for the Home Page
  const metadata = {
    title: 'Your Website Name - Home',
    description: 'Welcome to our website. Explore our services, highlights, and more.',
    openGraph: {
      title: 'Your Website Name - Home',
      description: 'Explore the best services and highlights on our website.',
      url: 'https://www.yourwebsite.com',  // Replace with your actual URL
      images: [
        {
          url: 'URL_to_image',  // Replace with your image URL
          width: 1200,
          height: 630,
          alt: 'Open Graph Image',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Your Website Name - Home',
      description: 'Explore the best services and highlights on our website.',
      images: ['URL_to_image'],  // Replace with your image URL
    },
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="website, services, highlights, home" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </Head>

      <Container>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
      </Container>
    </>
  );
}
