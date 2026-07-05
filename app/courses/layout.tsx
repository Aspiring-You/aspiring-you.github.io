import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses – DevOps, Java, Python, Flutter, Cybersecurity & AI/ML",
  description:
    "Browse all AY Academy courses: DevOps, Full Stack Java, Python Developer, Flutter App Development, MERN Stack, DevSecOps, CloudOps, AIOps, MLOps, Application Security & Network Security. Hands-on training with placement support.",
  keywords: [
    "DevOps course online", "Java developer course", "Python developer program",
    "Flutter mobile development", "MERN stack course", "cybersecurity training",
    "MLOps course", "AIOps training", "DevSecOps certification",
    "CloudOps program", "application security", "network security course",
    "online IT courses India", "best tech courses",
  ],
  openGraph: {
    title: "Explore All Courses – AY Academy",
    description:
      "Discover industry-leading courses in DevOps, Software Development, Mobile Development, Cybersecurity, and AI/ML. Start your tech career today.",
    url: "https://aspiringyou.com/courses/",
  },
  twitter: {
    card: "summary",
    title: "All Courses – AY Academy",
    description:
      "Browse expert-led courses in DevOps, Java, Python, Flutter, Cybersecurity, and AI/ML.",
  },
  alternates: {
    canonical: "https://aspiringyou.com/courses/",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
