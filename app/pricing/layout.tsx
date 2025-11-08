import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pricing | Lattice Platform for Contractors",
  description: "Simple, transparent pricing for contractors. Free CRM and website included. Choose the plan that fits your business needs. No hidden fees, cancel anytime.",
  keywords: [
    "contractor software pricing",
    "CRM pricing for contractors",
    "free contractor CRM",
    "contractor management pricing",
    "construction software cost",
  ],
  openGraph: {
    title: "Pricing | Lattice Platform for Contractors",
    description: "Simple, transparent pricing for contractors. Free CRM and website included. Choose the plan that fits your business needs.",
    url: "https://latticenm.com/pricing",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lattice Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Lattice Platform for Contractors",
    description: "Simple, transparent pricing for contractors. Free CRM and website included.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/pricing",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
