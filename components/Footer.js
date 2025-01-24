import React from "react";
import {
	Box,
	Container,
	Grid,
	Typography,
	Link,
	IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
	return (
		<Box sx={{ backgroundColor: "#1A202C", color: "white", py: 6 }}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{/* Column 1: Company Info */}
					<Grid item xs={12} md={4}>
						<Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
							Bella Vita Ristorante
						</Typography>
						<Typography variant="body2" sx={{ mb: 1 }}>
							Your home for authentic Italian flavors. Serving fresh, homemade
							pasta, wood-fired pizzas, and more!
						</Typography>
					</Grid>

					{/* Column 2: Links */}
					<Grid item xs={12} md={4}>
						<Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
							Quick Links
						</Typography>
						<Box>
							<Link href="/" sx={{ display: "block", color: "white", mb: 1 }}>
								Home
							</Link>
							<Link
								href="/#about"
								sx={{ display: "block", color: "white", mb: 1 }}
							>
								About Us
							</Link>
							<Link
								href="/menu.png"
								target="_blank"
								sx={{ display: "block", color: "white", mb: 1 }}
							>
								Menu
							</Link>
							<Link
								href="/contact"
								sx={{ display: "block", color: "white", mb: 1 }}
							>
								Contact
							</Link>
						</Box>
					</Grid>

					{/* Column 3: Social Media */}
					<Grid item xs={12} md={4}>
						<Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
							Follow Us
						</Typography>
						<Box>
							<IconButton
								href="https://www.facebook.com"
								target="_blank"
								sx={{ color: "white", mr: 2 }}
							>
								<Facebook />
							</IconButton>
							<IconButton
								href="https://www.twitter.com"
								target="_blank"
								sx={{ color: "white", mr: 2 }}
							>
								<Twitter />
							</IconButton>
							<IconButton
								href="https://www.instagram.com"
								target="_blank"
								sx={{ color: "white", mr: 2 }}
							>
								<Instagram />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				<Box sx={{ mt: 2 }}>
					<Typography variant="body2" align="center">
						© {new Date().getFullYear()} Bella Vita Ristorante. All rights
						reserved.
					</Typography>
					<Typography variant="body2" align="center" sx={{ fontSize: "10px", mt: 1 }}>
						This is a demo project created for educational and portfolio
						purposes. The content and design are fictional and not associated
						with any real business.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
