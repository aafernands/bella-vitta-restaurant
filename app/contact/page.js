"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email)
    console.log(formData);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Google Maps Embed */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Our Location on Google Maps
              </Typography>
              <Box sx={{ height: "400px", width: "100%" }}>
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=37+Boulevard+du+Montparnasse,+75006+Paris,+France&key=AIzaSyDn6MCMWAR3ASwPWaXHW2g-liixrU5BPwA"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Our Contact Information
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ mr: 2 }} />
                <Typography variant="body1">
                  37 Boulevard du Montparnasse, 75006 Paris, France
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ mr: 2 }} />
                <Typography variant="body1">+33 1 43 21 59 03</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ mr: 2 }} />
                <Typography variant="body1">contact@bellavita.com</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
