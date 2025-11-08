import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Lattice | Empowering Contractors with Technology",
  description: "Learn about Lattice's mission to empower contractors with cutting-edge technology. We provide AI-powered tools, CRM, and free websites to help contractors grow their businesses.",
  keywords: [
    "about Lattice",
    "contractor software company",
    "Lattice mission",
    "contractor technology platform",
  ],
  openGraph: {
    title: "About Lattice | Empowering Contractors with Technology",
    description: "Learn about Lattice's mission to empower contractors with cutting-edge technology and AI-powered tools.",
    url: "https://latticenm.com/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lattice | Empowering Contractors with Technology",
    description: "Learn about Lattice's mission to empower contractors with cutting-edge technology.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
