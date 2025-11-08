import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Remote Employees for Contractors | Design & Accounting Staff",
  description: "Hire skilled remote employees for your contracting business. Get dedicated designers, accountants, and project coordinators at a fraction of the cost. Scale your team efficiently.",
  keywords: [
    "remote employees for contractors",
    "contractor virtual assistants",
    "remote design staff",
    "contractor accounting services",
    "construction remote workers",
    "virtual contractor staff",
    "offshore contractor employees",
    "remote project coordinators",
  ],
  openGraph: {
    title: "Remote Employees for Contractors | Design & Accounting Staff | Lattice",
    description: "Hire skilled remote employees for your contracting business. Scale your team efficiently with dedicated remote staff.",
    url: "https://latticenm.com/services/remote-employees",
    type: "website",
    images: [
      {
        url: "/og-remote-employees.png",
        width: 1200,
        height: 630,
        alt: "Remote Employees for Contractor Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Employees for Contractors | Design & Accounting Staff | Lattice",
    description: "Hire skilled remote employees for your contracting business. Scale your team efficiently.",
    images: ["/og-remote-employees.png"],
  },
  alternates: {
    canonical: "https://latticenm.com/services/remote-employees",
  },
}

export default function RemoteEmployeesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Remote Employees for Contractors",
    "description": "Hire skilled remote employees for your contracting business. Get dedicated designers, accountants, and project coordinators.",
    "provider": {
      "@type": "Organization",
      "name": "Lattice",
      "url": "https://latticenm.com"
    },
    "serviceType": "Remote Staffing Services",
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
