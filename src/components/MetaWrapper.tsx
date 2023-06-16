import Head from "next/head";
import React from "react";

interface MetaWrapperProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  children?: React.ReactNode;
}

const MetaWrapper = ({
  title,
  description,
  image,
  url,
  children,
}: MetaWrapperProps) => {
  return (
    <Head>
      <title>{title ?? "Cinephilex"}</title>
      <meta name="title" content={title} key="title" />
      <meta property="og:title" content={title} key="og_title" />
      <meta
        property="og:image"
        content={image ?? "https://i.imgur.com/loN1thS.png"}
        key="og_image"
      />
      <meta name="description" content={description ?? ""} key="description" />
      <meta
        property="og:description"
        content={description ?? ""}
        key="og_description"
      />
      <meta
        property="og:url"
        content={url ?? "https://cinephilex.vercel.app"}
        key="og_url"
      />
      <meta property="twitter:title" content={title} key="twitter_title" />
      <meta
        property="twitter:description"
        content={description ?? ""}
        key="twitter_description"
      />
      <meta
        property="twitter:image"
        content={image ?? "https://i.imgur.com/loN1thS.png"}
        key="twitter_image"
      />

      {children}
    </Head>
  );
};

export default MetaWrapper;
