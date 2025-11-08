import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "LatticeAI CRM | Smart Lead Management & Project Tracking for Contractors",
  description: "AI-powered CRM built for contractors. Automate lead management, track projects, streamline estimates & invoicing. Never lose a lead again with intelligent automation.",
  keywords: [
    "contractor CRM",
    "lead management for contractors",
    "construction CRM",
    "contractor project management",
    "home remodeling CRM",
    "AI CRM for contractors",
    "contractor invoicing software",
    "construction lead tracking",
  ],
  openGraph: {
    title: "LatticeAI CRM | Smart Lead Management for Contractors",
    description: "AI-powered CRM built for contractors. Automate lead management, track projects, and close more deals with intelligent automation.",
    url: "https://latticenm.com/services/crm",
    type: "website",
    images: [
      {
        url: "/og-crm.png",
        width: 1200,
        height: 630,
        alt: "Lattice CRM Dashboard for Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LatticeAI CRM | Smart Lead Management for Contractors",
    description: "AI-powered CRM built for contractors. Automate lead management, track projects, and close more deals.",
    images: ["/og-crm.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/services/crm",
  },
}

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LatticeAI CRM",
    "description": "AI-powered CRM built for contractors. Automate lead management, track projects, streamline estimates & invoicing.",
    "provider": {
      "@type": "Organization",
      "name": "Lattice",
      "url": "https://latticenm.com"
    },
    "serviceType": "CRM Software",
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
      "description": "Free CRM for contractors"
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
