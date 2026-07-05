import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up – AY Academy",
  description: "Create your AY Academy account to start learning DevOps, Software Development, Cybersecurity, and more.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
