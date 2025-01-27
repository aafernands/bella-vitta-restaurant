import React from "react";
import Head from "next/head";

const SEO = ({ title, description, keywords, author }) => {
  return (
    <Head>
      {/* Set the title of the page */}
      <title>{title}</title>

      {/* Meta description for SEO */}
      <meta name="description" content={description} />

      {/* Meta keywords for SEO */}
      <meta name="keywords" content={keywords} />

      {/* Meta author */}
      <meta name="author" content={author} />

      {/* Open Graph meta tags for better social media sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter meta tags for Twitter cards */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
