import { useRouter } from "next/navigation";
import { useState } from "react";
import {
	Box,
	Button,
	Drawer,
	IconButton,
	AppBar,
	Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const handleNavigation = (path) => {
		setOpen(false); // Close the drawer
		router.push(path); // Navigate to the path
	};

	return (
		<AppBar position="fixed" className={styles.appbar}>
			<Toolbar
				sx={{
					backgroundColor: "white", // Fixed background color
					color: "#000000", // Fixed text color
					padding: "20px",
					textAlign: "center",
				}}
				className={styles.toolbar}
			>
				{/* Logo */}
				<div className={styles.logo}>
					<a
						onClick={() => handleNavigation("/")}
						style={{ cursor: "pointer" }}
					>
						<img
							src="../logoWhite.png" // Fixed logo
							alt="FNDS Labs Logo"
							className={styles.logoImage}
						/>
					</a>
				</div>

				{/* Desktop Menu */}
				<ul className={styles.navLinks}>
					{[
						{ name: "Home", path: "/" },
						{ name: "About", path: "/#about" },
						{ name: "Menu", path: "./menu.png" },
						{ name: "Contact", path: "/contact" },
					].map((item) => (
						<li key={item.name}>
							<a
								onClick={() => handleNavigation(item.path)}
								aria-label={item.name}
								style={{ cursor: "pointer" }}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				{/* Mobile Menu Icon */}
				<IconButton className={styles.menuIcon} onClick={toggleDrawer}>
					<MenuIcon sx={{ color: "#000000" }} />
				</IconButton>
			</Toolbar>

			{/* Mobile Drawer */}
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<div className={styles.drawerMenu}>
					<ul>
						{[
							{ name: "Home", path: "/" },
							{ name: "About", path: "/#about" },
							{ name: "Menu", path: "./menu.png" },
							{ name: "Contact", path: "/contact" },
						].map((item) => (
							<li key={item.name}>
								<a
									onClick={() => {
										if (!item.path.endsWith(".png")) {
											handleNavigation(item.path);
										}
									}}
									href={item.path.endsWith(".png") ? item.path : undefined}
									target={item.path.endsWith(".png") ? "_blank" : undefined}
									rel={
										item.path.endsWith(".png")
											? "noopener noreferrer"
											: undefined
									}
									aria-label={item.name}
									style={{ cursor: "pointer" }}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</Drawer>
		</AppBar>
	);
}
