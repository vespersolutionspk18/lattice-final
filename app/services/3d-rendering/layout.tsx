import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3D Rendering Services for Contractors | Photorealistic Visualizations",
  description: "Professional 3D rendering services for contractors. Create stunning photorealistic visualizations of renovation projects. Close deals 3x faster with instant client previews.",
  keywords: [
    "3D rendering for contractors",
    "construction visualization",
    "home remodeling 3D renders",
    "photorealistic rendering",
    "contractor 3D design",
    "renovation visualization",
    "3D project mockups",
    "architectural rendering",
  ],
  openGraph: {
    title: "3D Rendering Services for Contractors | Lattice",
    description: "Create stunning photorealistic visualizations of renovation projects. Close deals 3x faster with professional 3D rendering.",
    url: "https://latticenm.com/services/3d-rendering",
    type: "website",
    images: [
      {
        url: "/og-3d-rendering.png",
        width: 1200,
        height: 630,
        alt: "3D Rendering Examples for Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Rendering Services for Contractors | Lattice",
    description: "Create stunning photorealistic visualizations of renovation projects. Close deals 3x faster.",
    images: ["/og-3d-rendering.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/services/3d-rendering",
  },
}

export default function RenderingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "3D Rendering Services for Contractors",
    "description": "Professional 3D rendering services for contractors. Create stunning photorealistic visualizations of renovation projects.",
    "provider": {
      "@type": "Organization",
      "name": "Lattice",
      "url": "https://latticenm.com"
    },
    "serviceType": "3D Rendering and Visualization",
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
