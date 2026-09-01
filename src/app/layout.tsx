import type { Metadata } from "next";
import "./globals.css";
import WhatsAppCTA from "@/components/WhatsAppCTA";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.clearvista.in"),
  title: {
    default: "ClearVista | Premium uPVC Windows & Doors in India",
    template: "%s | ClearVista Windows & Doors",
  },
  description:
    "ClearVista is India's trusted manufacturer of premium uPVC windows and doors. Explore sliding windows, casement windows, sliding doors, and more. Energy-efficient, weather-proof, and stylish. Get a free quote today!",
  keywords: [
    "uPVC windows India",
    "uPVC doors India",
    "ClearVista windows",
    "sliding windows India",
    "casement windows",
    "sliding doors uPVC",
    "energy efficient windows",
    "soundproof windows India",
    "uPVC window manufacturer India",
    "UPC windows doors",
  ],
  authors: [{ name: "ClearVista Building Systems" }],
  creator: "ClearVista",
  publisher: "ClearVista Building Systems Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.clearvista.in",
    siteName: "ClearVista Windows & Doors",
    title: "ClearVista | Premium uPVC Windows & Doors in India",
    description:
      "India's trusted manufacturer of premium uPVC windows and doors. Explore our collection of sliding windows, casement windows, and doors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClearVista Premium uPVC Windows & Doors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearVista | Premium uPVC Windows & Doors",
    description: "India's trusted uPVC windows and doors brand.",
    images: ["/og-image.jpg"],
    creator: "@clearvista",
  },
  alternates: {
    canonical: "https://www.clearvista.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClearVista Building Systems Pvt. Ltd.",
  alternateName: "ClearVista",
  url: "https://www.clearvista.in",
  logo: "https://www.clearvista.in/logo.png",
  description:
    "ClearVista is a leading manufacturer and supplier of premium uPVC windows and doors in India.",
  foundingDate: "2005",
  areaServed: "IN",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98717-70357",
    contactType: "customer service",
    contactOption: "TollFree",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/clearvista",
    "https://www.instagram.com/clearvista",
    "https://www.youtube.com/@clearvista",
    "https://www.linkedin.com/company/clearvista",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.clearvista.in",
  name: "ClearVista Windows & Doors",
  image: "https://www.clearvista.in/og-image.jpg",
  priceRange: "₹₹₹",
  telephone: "+91-98717-70357",
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 Jagat Narain Road, Golaganj",
    addressLocality: "Lucknow",
    addressRegion: "UP",
    postalCode: "226018",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.209,
  },
  url: "https://www.clearvista.in",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WhatsAppCTA />
      </body>

    </html>
  );
}
