import { useRouter } from "next/navigation";
import { useState } from "react";
import {
	Box,
	Button,
	Drawer,
	IconButton,
	AppBar,
	Toolbar,
	Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome icons
import styles from "../styles/navbar.module.css";

export default function Navbar() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const handleNavigation = (path, openInNewTab = false) => {
		if (openInNewTab) {
			window.open(path, "_blank", "noopener noreferrer");
		} else {
			setOpen(false);
			router.push(path);
		}
	};

	return (
		<AppBar position="fixed" className={styles.appbar}>
			<Toolbar
				sx={{
					backgroundColor: "white",
					color: "#000000",
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
							src="../logoWhite.png"
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
						{ name: "Menu", path: "./menu.png", openInNewTab: true },
						{ name: "Contact", path: "/contact" },
					].map((item) => (
						<li key={item.name}>
							<a
								onClick={() => handleNavigation(item.path, item.openInNewTab)}
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
							{ name: "Menu", path: "./menu.png", openInNewTab: true },
							{ name: "Contact", path: "/contact" },
						].map((item) => (
							<li key={item.name}>
								<a
									onClick={() => {
										if (item.openInNewTab) {
											handleNavigation(item.path, true);
										} else {
											handleNavigation(item.path);
										}
									}}
									href={item.openInNewTab ? item.path : undefined}
									target={item.openInNewTab ? "_blank" : undefined}
									rel={item.openInNewTab ? "noopener noreferrer" : undefined}
									aria-label={item.name}
									style={{ cursor: "pointer" }}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
					{/* Reservation Button */}
					<Button
						className={styles.reservationBtn}
						onClick={() => handleNavigation("/reservation")}
					>
						Reserve A TABLE
					</Button>

					{/* Footer Section */}
					<div className={styles.footer}>
						<p>123 Paris St, Paris, France</p>
						<div className={styles.socialLinks}>
							<Link href="https://www.facebook.com" target="_blank">
								<FontAwesomeIcon icon={faFacebook} />
							</Link>
							<Link href="https://www.twitter.com" target="_blank">
								<FontAwesomeIcon icon={faTwitter} />
							</Link>
							<Link href="https://www.instagram.com" target="_blank">
								<FontAwesomeIcon icon={faInstagram} />
							</Link>
						</div>
						<p>
							<a href="tel:+1234567890">+33 1 23 45 67 89</a>
						</p>
					</div>
				</div>
			</Drawer>
		</AppBar>
	);
}
