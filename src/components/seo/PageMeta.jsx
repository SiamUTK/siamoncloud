import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * PageMeta - Luxury Tech SEO Meta Component for Siam On Cloud
 * Usage: <PageMeta title="..." description="..." image="..." canonical="..." />
 */
export default function PageMeta({
  title = "Siam On Cloud | Luxury Tech Solutions",
  description = "Experience luxury travel technology with Siam On Cloud. Premium cloud solutions for discerning brands and travelers.",
  image = "https://siamon.cloud/og-cover.jpg",
  canonical = "https://siamon.cloud",
}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* Canonical */}
        <link rel="canonical" href={canonical} />
      </Helmet>
    </HelmetProvider>
  );
}
