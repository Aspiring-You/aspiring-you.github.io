import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login – AY Academy",
  description: "Log in to your AY Academy account to access your courses, progress, and learning dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
