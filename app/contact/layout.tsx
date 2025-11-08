import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us | Get Started with Lattice Today",
  description: "Ready to transform your contracting business? Contact Lattice for a free demo. Get your free CRM and website setup. Talk to our team today.",
  keywords: [
    "contact Lattice",
    "contractor CRM demo",
    "get started with Lattice",
    "contractor software support",
  ],
  openGraph: {
    title: "Contact Us | Get Started with Lattice Today",
    description: "Ready to transform your contracting business? Contact Lattice for a free demo and get your free CRM and website setup.",
    url: "https://latticenm.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get Started with Lattice Today",
    description: "Ready to transform your contracting business? Contact Lattice for a free demo.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
