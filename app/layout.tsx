import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";
import { MegaMenuProvider } from "./contexts/MegaMenuContext";
import MegaMenuOverlay from "./components/MegaMenuOverlay";
import ChatBot from "./components/ChatBot";
import { chatbotConfig } from "./config/chatbot";

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://latticenm.com'),
  title: {
    default: "Lattice | All-in-One Platform for Contractors",
    template: "%s | Lattice",
  },
  description: "All-in-one platform for contractors with AI-powered CRM, 3D rendering, design tools, and free professional website. Transform your contracting business today.",
  keywords: [
    "contractor CRM",
    "contractor management software",
    "3D rendering for contractors",
    "AI design tools",
    "contractor website builder",
    "home remodeling software",
    "construction management",
    "digital showroom",
    "contractor leads",
    "home improvement CRM",
  ],
  authors: [{ name: "Lattice" }],
  creator: "Lattice",
  publisher: "Lattice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://latticenm.com',
    siteName: 'Lattice',
    title: 'Lattice | All-in-One Platform for Contractors',
    description: 'All-in-one platform for contractors with AI-powered CRM, 3D rendering, design tools, and free professional website.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lattice - All-in-One Platform for Contractors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lattice | All-in-One Platform for Contractors',
    description: 'All-in-one platform for contractors with AI-powered CRM, 3D rendering, design tools, and free professional website.',
    images: ['/og-image.png'],
    creator: '@latticenm',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://latticenm.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lattice",
    "description": "All-in-one platform for contractors with AI-powered CRM, 3D rendering, design tools, and free professional website",
    "url": "https://latticenm.com",
    "logo": "https://latticenm.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://latticenm.com/contact"
    },
    "sameAs": [
      "https://twitter.com/latticenm",
      "https://linkedin.com/company/latticenm"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lattice",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free CRM and website for contractors"
    },
    "description": "All-in-one platform for contractors with AI-powered CRM, 3D rendering, design tools, and free professional website",
    "url": "https://latticenm.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    }
  };

  return (
    <html lang="en" className={figtree.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${figtree.className} antialiased tracking-tighter`} suppressHydrationWarning>
        <MegaMenuProvider>
          <MegaMenuOverlay />
          {children}
          <ChatBot
            apiKey={chatbotConfig.apiKey}
            systemInstructions={chatbotConfig.systemInstructions}
            welcomeMessage={chatbotConfig.welcomeMessage}
          />
        </MegaMenuProvider>
      </body>
    </html>
  );
}
