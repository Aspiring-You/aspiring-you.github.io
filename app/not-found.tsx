import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--bg-light)", padding: "2rem", textAlign: "center",
    }}>
      <div>
        <div style={{
          fontSize: "6rem", fontWeight: 900,
          background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          lineHeight: 1, marginBottom: "1rem",
        }}>
          404
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>Page Not Found</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "400px" }}>
          Looks like this page went on a long vacation. Let&apos;s get you back on track.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/courses" className="btn btn-secondary">Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}
