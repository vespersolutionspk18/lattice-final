import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SEO Web Design for Contractors | Free Professional Website Included",
  description: "Get a free SEO-optimized website built for contractors. Mobile-responsive design, local SEO, lead capture forms, and Google My Business integration. Start generating leads today.",
  keywords: [
    "contractor website design",
    "SEO for contractors",
    "free contractor website",
    "local SEO for contractors",
    "construction website builder",
    "contractor web design",
    "remodeling website design",
    "contractor lead generation website",
  ],
  openGraph: {
    title: "SEO Web Design for Contractors | Free Website Included | Lattice",
    description: "Get a free SEO-optimized website built for contractors. Mobile-responsive, local SEO, and lead capture forms included.",
    url: "https://latticenm.com/services/web-design-seo",
    type: "website",
    images: [
      {
        url: "/og-web-design.png",
        width: 1200,
        height: 630,
        alt: "SEO-Optimized Contractor Website Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Web Design for Contractors | Free Website Included | Lattice",
    description: "Get a free SEO-optimized website built for contractors. Start generating leads today.",
    images: ["/og-web-design.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/services/web-design-seo",
  },
}

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Web Design for Contractors",
    "description": "Get a free SEO-optimized website built for contractors. Mobile-responsive design, local SEO, and lead capture forms.",
    "provider": {
      "@type": "Organization",
      "name": "Lattice",
      "url": "https://latticenm.com"
    },
    "serviceType": "Web Design and SEO Services",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Contractors, Home Remodelers, Construction Businesses"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free website for contractors"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}
