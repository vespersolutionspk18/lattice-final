import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Careers at Lattice | Join Our Team",
  description: "Join the Lattice team and help us transform the contracting industry. Explore career opportunities in software development, design, sales, and customer success.",
  keywords: [
    "Lattice careers",
    "contractor software jobs",
    "careers in construction tech",
    "Lattice job openings",
  ],
  openGraph: {
    title: "Careers at Lattice | Join Our Team",
    description: "Join the Lattice team and help us transform the contracting industry. Explore career opportunities.",
    url: "https://latticenm.com/careers",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Lattice | Join Our Team",
    description: "Join the Lattice team and help us transform the contracting industry.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/careers",
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
