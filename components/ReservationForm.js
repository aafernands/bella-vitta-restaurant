"use client";

import React, { useState } from 'react';
import { TextField, Button, Box, Container, Grid, Typography, Paper, Snackbar, Alert, Divider } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    date: '',
    time: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.people || formData.people <= 0) validationErrors.people = 'Please enter a valid number of people';
    if (!formData.date) validationErrors.date = 'Date is required';
    if (!formData.time) validationErrors.time = 'Time is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form Data:', formData); // Log form data to check

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        setOpenSnackbar(true);
      } else {
        alert('Error: Could not make the reservation.');
      }
    } catch (error) {
      console.error('Error during reservation:', error);
      alert('An error occurred while making the reservation.');
    }
  };

  const timeSlots = [
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const businessHours = [
    { day: 'Monday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    marginTop: '20px',
  };

  const center = {
    lat: 40.7128, // Example latitude (New York)
    lng: -74.0060, // Example longitude (New York)
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 6, px: 3 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Make a Reservation
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <form onSubmit={handleSubmit}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Reservation Form
                </Typography>

                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Number of People"
                  variant="outlined"
                  fullWidth
                  name="people"
                  type="number"
                  value={formData.people}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                  inputProps={{ min: 1 }}
                  error={!!errors.people}
                  helperText={errors.people}
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  fullWidth
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.date}
                  helperText={errors.date}
                />
                <TextField
                  select
                  label="Time"
                  variant="outlined"
                  fullWidth
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                  SelectProps={{
                    native: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.time}
                  helperText={errors.time}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </TextField>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Reserve
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Business Hours Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Business Hours
              </Typography>
              {businessHours.map((hour, index) => (
                <Typography key={index} sx={{ mb: 1 }}>
                  <strong>{hour.day}:</strong> {hour.hours}
                </Typography>
              ))}
            </Paper>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Find Us Here
            </Typography>
            <LoadScript googleMapsApiKey="AIzaSyDn6MCMWAR3ASwPWaXHW2g-liixrU5BPwA">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReservationForm;
