import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

const BASE_URL = "https://aspiringyou.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AY Academy – Best Online Courses for DevOps, Java, Python, Flutter, Cybersecurity & AI/ML",
    template: "%s | AY Academy",
  },
  description:
    "AY Academy by Aspiring You offers industry-leading online courses in DevOps, Java, Python, Flutter, MERN Stack, Cybersecurity, MLOps & AIOps. Learn with hands-on projects, expert mentors, and placement support.",
  keywords: [
    "online courses", "DevOps training", "Java course", "Python course",
    "Flutter development", "MERN stack", "cybersecurity course", "MLOps",
    "AIOps", "DevSecOps", "CloudOps", "placement support", "career growth",
    "upskilling", "AY Academy", "Aspiring You", "online learning India",
    "IT courses", "software development training", "cloud computing course",
  ],
  authors: [{ name: "AY Academy", url: BASE_URL }],
  creator: "Aspiring You",
  publisher: "Aspiring You",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "AY Academy",
    title: "AY Academy – Best Online Courses for DevOps, Java, Python, Flutter & More",
    description:
      "Industry-leading online courses with hands-on training, expert mentorship, and placement support. Build your tech career with AY Academy.",
    images: [
      {
        url: `${BASE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "AY Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AY Academy – Accelerate Your Tech Career",
    description:
      "Industry-leading online courses with hands-on training, expert mentorship, and placement support.",
    images: [`${BASE_URL}/android-chrome-512x512.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "Education",
};

// JSON-LD Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AY Academy",
  alternateName: "Aspiring You",
  url: BASE_URL,
  logo: `${BASE_URL}/android-chrome-512x512.png`,
  description:
    "AY Academy by Aspiring You is a technology learning platform offering expert-led online courses in DevOps, Software Development, Cybersecurity, and AI/ML.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
};

// JSON-LD WebSite structured data (enables Google Sitelinks Search Box)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AY Academy",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/courses/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
