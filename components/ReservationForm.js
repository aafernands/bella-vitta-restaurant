"use client";

import React, { useState } from 'react';
import { TextField, Button, Box, Container, Grid, Typography, Paper, Snackbar, Alert } from '@mui/material';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    date: '',
    time: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Make a Reservation
        </Typography>

        <Grid container spacing={4}>
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
        </Grid>

        {/* Snackbar for success message */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            Registration complete! Please check your email for confirmation.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ReservationForm;
