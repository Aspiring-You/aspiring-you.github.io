import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Aspiring You – Accelerate Your Career with Expert-Led Courses",
  description:
    "Aspiring You offers industry-leading online courses with live mentorship, placement support, and hands-on projects. Transform your career with us.",
  keywords: ["online courses", "career growth", "mentorship", "placement support", "upskilling", "Aspiring You"],
  openGraph: {
    title: "Aspiring You – Accelerate Your Career",
    description: "Industry-leading online courses with live mentorship and placement support.",
    type: "website",
    url: "https://aspiringyou.com",
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
