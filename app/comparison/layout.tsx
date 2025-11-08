import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Lattice vs Competitors | Best Contractor Management Software Comparison",
  description: "Compare Lattice with other contractor management platforms. See why contractors choose Lattice for free CRM, AI tools, 3D rendering, and more. Feature-by-feature comparison.",
  keywords: [
    "Lattice vs competitors",
    "contractor software comparison",
    "best CRM for contractors",
    "contractor management comparison",
    "Lattice vs other platforms",
  ],
  openGraph: {
    title: "Lattice vs Competitors | Best Contractor Software Comparison",
    description: "Compare Lattice with other contractor management platforms. See why contractors choose Lattice for free CRM and AI tools.",
    url: "https://latticenm.com/comparison",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lattice Platform Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lattice vs Competitors | Best Contractor Software Comparison",
    description: "Compare Lattice with other contractor management platforms and see the difference.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/comparison",
  },
}

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
