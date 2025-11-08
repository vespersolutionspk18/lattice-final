import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Digital Showroom | Interactive Portfolio for Contractors",
  description: "Create an interactive digital showroom for your contracting business. Showcase projects with 3D tours, before/after galleries, and client testimonials. Increase conversions by 45%.",
  keywords: [
    "digital showroom for contractors",
    "contractor portfolio",
    "interactive project gallery",
    "3D project tours",
    "contractor showcase",
    "virtual showroom",
    "home remodeling portfolio",
    "construction portfolio software",
  ],
  openGraph: {
    title: "Digital Showroom | Interactive Portfolio for Contractors | Lattice",
    description: "Create an interactive digital showroom for your contracting business. Increase conversions by 45% with 3D tours and project galleries.",
    url: "https://latticenm.com/services/digital-showroom",
    type: "website",
    images: [
      {
        url: "/og-digital-showroom.png",
        width: 1200,
        height: 630,
        alt: "Digital Showroom Interactive Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Showroom | Interactive Portfolio for Contractors | Lattice",
    description: "Create an interactive digital showroom for your contracting business. Increase conversions by 45%.",
    images: ["/og-digital-showroom.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/services/digital-showroom",
  },
}

export default function DigitalShowroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Showroom - Interactive Portfolio",
    "description": "Create an interactive digital showroom for your contracting business. Showcase projects with 3D tours and before/after galleries.",
    "provider": {
      "@type": "Organization",
      "name": "Lattice",
      "url": "https://latticenm.com"
    },
    "serviceType": "Digital Portfolio Software",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Contractors, Home Remodelers, Construction Businesses"
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
