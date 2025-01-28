"use client";

import React, { useState } from "react";
import {
	Box,
	Container,
	Typography,
	TextField,
	Button,
	Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import Head from "next/head";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [messageSent, setMessageSent] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setMessageSent(true);
		setFormData({
			name: "",
			email: "",
			message: "",
		});
		setTimeout(() => setMessageSent(false), 5000);
	};

	return (
		<>
			<Head>
				<title>Contact Us - Your Website Name</title>
				<meta
					name="description"
					content="Get in touch with us. Fill out the form or contact us directly via phone or email."
				/>
				<meta
					name="keywords"
					content="contact, email, phone, support, inquiries"
				/>
				<meta property="og:title" content="Contact Us - Your Website Name" />
				<meta
					property="og:description"
					content="Contact us for inquiries, support, or feedback. We are here to help!"
				/>
				<meta property="og:url" content="https://www.yourwebsite.com/contact" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="URL_to_image" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Contact Us - Your Website Name" />
				<meta
					name="twitter:description"
					content="Reach out to us for support, inquiries, or feedback."
				/>
				<meta name="twitter:image" content="URL_to_image" />
			</Head>

			<Box sx={{ backgroundColor: "#f5f5f5", marginTop: "60px", py: 6, px: 3 }}>
				<Container maxWidth="lg">
					<Typography
						variant="h5"
						sx={{ textAlign: "left", mb: 4, fontWeight: "bold" }}
					>
						Contact Us
					</Typography>

					<Grid container spacing={4}>
						<Grid item xs={12} md={12}>
							<Paper sx={{ p: 3 }} elevation={3}>
								<Typography variant="h6" sx={{ mb: 3 }}>
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

								{messageSent && (
									<Box
										sx={{
											mt: 3,
											p: 2,
											backgroundColor: "#4caf50",
											color: "#fff",
											borderRadius: "4px",
											textAlign: "center",
										}}
									>
										<Typography variant="h6">
											Your message has been sent!
										</Typography>
									</Box>
								)}

								<Typography variant="h6" sx={{ mb: 3, mt: 5 }}>
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
								<Box
									sx={{
										display: { xs: "block", md: "block" },
										p: 3,
										mt: { xs: 3, md: 0 },
									}}
								>
									<Box sx={{ height: "400px", width: "100%" }}>
										<iframe
											src={`https://www.google.com/maps/embed/v1/place?q=37+Boulevard+du+Montparnasse,+75006+Paris,+France&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
											width="100%"
											height="100%"
											style={{ border: "0" }}
											allowFullScreen=""
											loading="lazy"
										></iframe>
									</Box>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
