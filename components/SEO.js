import React from "react";
import Head from "next/head";

const SEO = ({ title, description, keywords, author }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
  </Head>
);

export default SEO;
