import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Become a Partner | Lattice Partnership Program",
  description: "Partner with Lattice and help contractors grow their businesses. Join our partnership program for agencies, consultants, and industry professionals.",
  keywords: [
    "Lattice partner program",
    "contractor software partnership",
    "agency partnerships",
    "Lattice affiliate program",
  ],
  openGraph: {
    title: "Become a Partner | Lattice Partnership Program",
    description: "Partner with Lattice and help contractors grow their businesses. Join our partnership program today.",
    url: "https://latticenm.com/partner",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lattice Partnership Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | Lattice Partnership Program",
    description: "Partner with Lattice and help contractors grow their businesses.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/partner",
  },
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
