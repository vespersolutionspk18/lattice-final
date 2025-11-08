import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Designer | Instant Room Redesign Tool for Contractors",
  description: "AI-powered interior design tool for contractors. Generate multiple room design variations instantly. Help clients visualize their dream space in seconds.",
  keywords: [
    "AI interior design",
    "AI room designer",
    "contractor design tool",
    "instant room redesign",
    "AI home design",
    "virtual room designer",
    "AI remodeling tool",
    "automated interior design",
  ],
  openGraph: {
    title: "AI Designer | Instant Room Redesign Tool | Lattice",
    description: "AI-powered interior design tool for contractors. Generate multiple room design variations instantly.",
    url: "https://latticenm.com/services/ai-designer",
    type: "website",
    images: [
      {
        url: "/og-ai-designer.png",
        width: 1200,
        height: 630,
        alt: "AI-Generated Room Design Variations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Designer | Instant Room Redesign Tool | Lattice",
    description: "AI-powered interior design tool for contractors. Generate multiple room design variations instantly.",
    images: ["/og-ai-designer.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/services/ai-designer",
  },
}

export default function AIDesignerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Designer - Instant Room Redesign Tool",
    "description": "AI-powered interior design tool for contractors. Generate multiple room design variations instantly.",
    "provider": {
      "@type": "Organization",
      "name": "Lattice",
      "url": "https://latticenm.com"
    },
    "serviceType": "AI Interior Design Software",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Contractors, Interior Designers, Home Remodelers"
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
