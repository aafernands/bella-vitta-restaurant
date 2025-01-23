"use client";

// components/ReservationForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert('Reservation Confirmed!');
    } else {
      alert('Error: Could not make the reservation.');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, marginTop: '80px', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Make a Reservation
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Number of People"
              variant="outlined"
              name="people"
              type="number"
              value={formData.people}
              onChange={handleChange}
              required
              inputProps={{ min: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date"
              variant="outlined"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Time"
              variant="outlined"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Reserve
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ReservationForm;
