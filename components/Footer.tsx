"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  courses: [
    { label: "Python & AI/ML", href: "/courses" },
    { label: "Full Stack Development", href: "/courses" },
    { label: "Data Science", href: "/courses" },
    { label: "Cloud Computing", href: "/courses" },
    { label: "Digital Marketing", href: "/courses" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Blog", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Enroll Now", href: "/signup" },
  ],
  support: [
    { label: "Help Center", href: "/" },
    { label: "Community Forum", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Refund Policy", href: "/" },
  ],
};

const socials = [
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L1.754 2.25H8.08l4.258 5.631 5.906-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)", color: "#94a3b8" }}>
      {/* Top CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
          padding: "3rem 0",
        }}
      >
        <div className="container footer-cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div className="footer-cta-text">
            <h3 style={{ color: "#fff", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Ready to Transform Your Career?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
              Join 50,000+ learners already growing with Aspiring You.
            </p>
          </div>
          <div className="footer-cta-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn btn-white">
              Explore Courses
            </Link>
            <Link href="/signup" className="btn btn-secondary" style={{ borderColor: "#fff", color: "#fff" }}>
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem" }} className="footer-grid">
          
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <Image
                src="/ay_icon_white.png"
                alt="AY Academy Icon"
                width={32}
                height={32}
                style={{ objectFit: "contain", height: "32px", width: "32px" }}
              />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
                Aspiring You
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "280px" }}>
              Empowering professionals with world-class education, mentorship, and career placement support since 2019.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Mail size={14} style={{ color: "var(--accent-mid)" }} />
                <span>hello@aspiringyou.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Phone size={14} style={{ color: "var(--accent-mid)" }} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={14} style={{ color: "var(--accent-mid)" }} />
                <span>Coimbatore, India</span>
              </div>
            </div>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.5rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--primary)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "Courses", links: footerLinks.courses },
            { title: "Company", links: footerLinks.company },
            { title: "Support", links: footerLinks.support },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "#94a3b8",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "3rem",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
          }}
        >
          <p>© {new Date().getFullYear()} Aspiring You. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Terms of Use</Link>
            <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Cookie Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-cta { flex-direction: column !important; align-items: flex-start !important; }
          .footer-cta-btns { width: 100%; }
          .footer-cta-btns .btn { flex: 1; justify-content: center; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
