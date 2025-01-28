import React from "react";
import Head from "next/head";
/** @type {import("next").Metadata} */

export const metadata = {
	title: "Contact Us - Your Website Name",
	description:
		"Get in touch with us. Fill out the form or contact us directly via phone or email.",
	openGraph: {
		title: "Contact Us - Your Website Name",
		description:
			"Contact us for inquiries, support, or feedback. We are here to help!",
		url: "https://www.yourwebsite.com/contact",
		type: "website",
		images: [
			{
				url: "URL_to_image",
				width: 1200,
				height: 630,
				alt: "Contact Us",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Us - Your Website Name",
		description: "Reach out to us for support, inquiries, or feedback.",
		images: ["URL_to_image"],
	},
};

export default function SEO() {
	return (
		<>
		<h1>HI</h1>
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
		</>
	);
}
