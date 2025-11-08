import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Apply Now | Start Using Lattice Today",
  description: "Apply now to get started with Lattice. Get instant access to your free CRM, professional website, and all contractor management tools. Start growing your business today.",
  keywords: [
    "apply for Lattice",
    "get started with Lattice",
    "free contractor CRM signup",
    "Lattice application",
  ],
  openGraph: {
    title: "Apply Now | Start Using Lattice Today",
    description: "Apply now to get started with Lattice. Get instant access to your free CRM and professional website.",
    url: "https://latticenm.com/applynow",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apply for Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now | Start Using Lattice Today",
    description: "Apply now to get started with Lattice. Get instant access to your free CRM.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/applynow",
  },
}

export default function ApplyNowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
