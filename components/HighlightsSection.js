"use client";

import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export default function HighlightsSection() {
  const highlights = [
    {
      title: 'Pursuit of Perfection',
      description:
        'We strive to deliver an exceptional dining experience, paying attention to every detail—from the ingredients we use to the presentation of our dishes.',
      image: '../perfection.jpg',
    },
    {
      title: 'Quality Ingredients',
      description:
        'We source our ingredients from carefully selected Italian and French suppliers to ensure the highest quality in every dish.',
      image: '../quality.jpg',
    },
    {
      title: 'Homemade Fresh Pasta',
      description:
        'Our homemade fresh pasta is a true delight. Crafted with passion and expertise, it offers an authentic and unforgettable taste experience.',
      image: '../fresh-pasta.jpg',
    },
    {
      title: 'A Family Team',
      description:
        'Our team welcomes you with a familial warmth, creating a unique and cozy dining experience.',
      image: '../family-team.jpg',
    },
    {
      title: 'A Culinary Journey',
      description:
        'Our menu takes you on a flavorful journey, exploring the unique tastes of Italy and France.',
      image: '../culinary-journey.jpg',
    },
    {
      title: 'Signature Cocktails',
      description:
        'Each cocktail is a perfect blend of exquisite ingredients, bold flavors, and elegant presentation.',
      image: '../signature-cocktails.jpg',
    },
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Katibeh, cursive',
          color: '#A70003',
        }}
      >
        Highlights of Bella Vita
      </Typography>
      <Grid container spacing={4}>
        {highlights.map((highlight, index) => {
          // Create a unique ref for each card
          const { ref, inView } = useInView({
            triggerOnce: true, // Trigger only once when the element comes into view
            threshold: 0.1, // Trigger when 10% of the element is visible
          });

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                ref={ref} // Add unique ref here
                sx={{
                  maxWidth: 345,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  opacity: inView ? 1 : 0, // Optionally add fade-in effect
                  transform: inView ? 'translateY(0)' : 'translateY(20px)', // Slight upward movement
                  transition: 'opacity 0.6s ease, transform 0.6s ease', // Smooth transition for both opacity and transform
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={highlight.image}
                  alt={highlight.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Ubuntu, sans-serif',
                      fontWeight: 'bold',
                      color: '#A70003',
                      mb: 1,
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Ubuntu, sans-serif',
                      color: '#333',
                      lineHeight: 1.6,
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
