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
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.34)", 
					zIndex: 1, 
				}}
			/>

			<Container
				sx={{
					paddingLeft: "20px",
					paddingRight: "20px",
					position: "absolute",
					top: "50%",
					left: "0%",
					transform: "translateY(-50%)",
					color: "white", 
					textAlign: "left", 
					zIndex: 2,
				}}
			>
				<Typography
					variant="p"
					color="inherit"
					sx={{
						fontFamily: "'Parisienne', cursive",
						fontSize: "1.8rem",
					}}
				>
					Bienvenue
				</Typography>
				<Typography
					variant="h2"
					color="inherit"
					sx={{
						marginBottom: "80px",
						fontFamily: "'Ubuntu', sans-serif",
						fontWeight: 700,
						mt: 5,
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
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: 1,
						mt: 4,
					}}
				>
					<Button
						target="blank"
						href="/reservation"
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
						Call: 123-456-7890
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
