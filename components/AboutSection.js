import { Typography, Box } from "@mui/material";

export default function AboutSection() {
	return (
		<Box
			id="about"
			sx={{
				textAlign: "center",
				p: 4,
				backgroundColor: "#f9f9f9",
				borderRadius: "8px",
				boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
			}}
		>
			<Typography
				variant="h6"
				sx={{
					fontFamily: "'Parisienne'",
					color: "black",
					mb: 2,
				}}
			>
				Welcome to Bella Vita Ristorante
			</Typography>
			<Typography
				variant="h4"
				sx={{
					fontFamily: "'Monteserrat', cursive",
					color: "#A70003",
					fontWeight: 400,
					mb: 4,
					fontSize: "30px"
				}}
			>
				Your Home for Authentic Italian Flavors!
			</Typography>
			<Typography
				variant="body1"
				sx={{
					fontFamily: "Ubuntu, sans-serif",
					color: "black",
					fontSize: "1rem",
					lineHeight: 1.8,
				}}
			>
				Since opening our doors, Bella Vita Ristorante has been dedicated to
				bringing you an unforgettable Italian dining experience. With the
				freshest ingredients sourced from trusted suppliers, we take pride in
				crafting homemade pastas, wood-fired pizzas, and classic Italian dishes
				that honor our culinary heritage.
			</Typography>
			<Typography
				variant="body1"
				sx={{
					fontFamily: "Ubuntu, sans-serif",
					color: "black",
					fontSize: "1rem",
					lineHeight: 1.8,
					mt: 2,
				}}
			>
				Let us take you on a flavorful journey through Italy, served with warmth
				and passion by our family team. Pair your meal with our carefully
				curated selection of Italian wines, chosen to enhance every bite and
				make your dining experience truly special. Buon appetito!
			</Typography>
		</Box>
	);
}
