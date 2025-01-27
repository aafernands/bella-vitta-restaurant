"use client";

import React, { useState } from "react";
import {
	TextField,
	Button,
	Box,
	Container,
	Typography,
	Paper,
	Snackbar,
	Alert,
	Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SEO from "../../components/SEO"; // Import the SEO component

const ReservationForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		people: "",
		date: "",
		time: "",
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

		const validationErrors = {};
		if (!formData.name) validationErrors.name = "Name is required";
		if (!formData.email) validationErrors.email = "Email is required";
		if (!formData.people || formData.people <= 0)
			validationErrors.people = "Please enter a valid number of people";
		if (!formData.date) validationErrors.date = "Date is required";
		if (!formData.time) validationErrors.time = "Time is required";

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		console.log("Form Data:", formData);

		try {
			const response = await fetch("/api/reserve", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			if (data.success) {
				setOpenSnackbar(true);
			} else {
				alert("Error: Could not make the reservation.");
			}
		} catch (error) {
			console.error("Error during reservation:", error);
			alert("An error occurred while making the reservation.");
		}

		console.log("API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
	};

	return (
		<Box sx={{ backgroundColor: "#f5f5f5", marginTop: "60px", py: 6, px: 3 }}>
			<SEO
				title="Reservation | Bella Vita Ristorante"
				description="Reserve a table at Bella Vita Ristorante and experience authentic Italian cuisine. Book your table online for a memorable dining experience."
				keywords="reservation, book a table, Italian restaurant, authentic Italian food, dining reservation, Bella Vita, restaurant booking, table reservation"
				author="Alex Fernandes"
			/>

			<Container maxWidth="lg">
				<Typography
					variant="h5"
					sx={{ textAlign: "left", mb: 4, fontWeight: "bold" }}
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
									value={formData.email}
									onChange={handleChange}
									sx={{ mb: 2 }}
									required
									error={!!errors.email}
									helperText={errors.email}
								/>
								<TextField
									label="Number of People"
									type="number"
									variant="outlined"
									fullWidth
									name="people"
									value={formData.people}
									onChange={handleChange}
									sx={{ mb: 2 }}
									required
									error={!!errors.people}
									helperText={errors.people}
								/>
								<TextField
									label="Date"
									type="date"
									variant="outlined"
									fullWidth
									name="date"
									value={formData.date}
									onChange={handleChange}
									sx={{ mb: 2 }}
									InputLabelProps={{ shrink: true }}
									required
									error={!!errors.date}
									helperText={errors.date}
								/>
								<TextField
									label="Time"
									type="time"
									variant="outlined"
									fullWidth
									name="time"
									value={formData.time}
									onChange={handleChange}
									sx={{ mb: 2 }}
									InputLabelProps={{ shrink: true }}
									required
									error={!!errors.time}
									helperText={errors.time}
								/>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
								>
									Submit
								</Button>
							</form>
						</Paper>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant="h6" sx={{ textAlign: "left", mb: 2 }}>
							Find Us Here
						</Typography>
						<Box sx={{ width: "100%", height: "300px" }}>
							<iframe
								src={`https://www.google.com/maps/embed/v1/place?q=37+Boulevard+du+Montparnasse,+75006+Paris,+France&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
								width="100%"
								height="100%"
								style={{ border: "0", borderRadius: "8px" }}
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={() => setOpenSnackbar(false)}
			>
				<Alert
					onClose={() => setOpenSnackbar(false)}
					severity="success"
					sx={{ width: "100%" }}
				>
					Reservation successful!
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default ReservationForm;
