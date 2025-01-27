"use client";

import Head from "next/head";

const SEO = ({ title, description, keywords, author }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			{author && <meta name="author" content={author} />}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		</Head>
	);
};

export default SEO;
