import { Button, Container, Typography, Box } from "@mui/material";

export default function HeroSection() {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "100vh",
				backgroundImage: `url('/pastaHero.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				
			}}
		>
			{/* Black Overlay */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.34)", // Solid black overlay with opacity
					zIndex: 1, // Ensure the overlay is on top of the image
				}}
			/>

			{/* Content */}
			<Container
				sx={{
					paddingLeft: "20px",
					paddingRight: "20px",
					paddingTop: "40px", // Example padding

					position: "absolute",
					top: "50%",
					left: "0%", // Align content to the left
					transform: "translateY(-50%)", // Center vertically
					color: "white", // Adjust text color for visibility
					textAlign: "left", // Align text to the left
					zIndex: 2, // Ensure content is above the overlay
				}}
			>
				<Typography
					variant="h5"
					color="inherit"
					sx={{
						fontFamily: "'Parisienne', cursive",
						mb: 2,
					}}
				>
					Bienvenue
				</Typography>
				<Typography
					variant="h2"
					color="inherit"
					sx={{
						fontFamily: "'Ubuntu', sans-serif", // Apply Ubuntu font
						fontWeight: 700,
						fontSize: {
							xs: "2.5rem",
							sm: "3rem",
							md: "4rem",
							lg: "5rem",
						},
					}}
				>
					Experience the taste of Italy, Right in Your Neighborhood.
				</Typography>

				{/* Buttons */}
				<Box
					sx={{
						display: "flex", // Flex layout for side-by-side buttons
						flexDirection: "row", // Horizontal layout
						gap: 1, // Space between buttons
						mt: 4, // Space between text and buttons
					}}
				>
					{/* First Button: Reserve a Table */}
					<Button
						target="blank"
						href="https://calendly.com/fndslabs-15min-call/15min"
						variant="outlined"
						aria-label="Reserve a Table"
						sx={{
							color: "white",
							borderColor: "white",
							"&:hover": {
								backgroundColor: "rgba(255, 255, 255, 0.1)",
							},
						}}
					>
						RESERVE A TABLE
					</Button>

					{/* Second Button: Call */}
					<Button
						href="tel:5328885455"
						variant="contained"
						aria-label="Call"
						sx={{
							backgroundColor: "primary",
							color: "#fff",
							"&:hover": {
								backgroundColor: "#A70200",
							},
						}}
					>
						Call: 532-888-5455
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
