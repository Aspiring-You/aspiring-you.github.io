"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Compute dynamic styles based on theme and scroll state
  const containerBg = dark
    ? scrolled
      ? "rgba(15, 17, 23, 0.75)"
      : "rgba(15, 17, 23, 0.4)"
    : scrolled
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(255, 255, 255, 0.65)";

  const borderColor = dark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(0, 0, 0, 0.08)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "0.75rem 1rem" : "1.25rem 1.5rem",
        transition: "padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <motion.div
        layout
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: scrolled ? (isOpen ? "480px" : "960px") : (isOpen ? "520px" : "1200px"),
          background: containerBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${borderColor}`,
          borderRadius: isOpen ? "28px" : (scrolled ? "9999px" : "24px"),
          boxShadow: scrolled
            ? "0 12px 40px rgba(0, 0, 0, 0.12)"
            : "0 4px 20px rgba(0, 0, 0, 0.03)",
          padding: scrolled ? "0.35rem 1.25rem" : "0.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
      >
        <div style={{ display: "flex", alignItems: "center", height: "56px", justifyContent: "space-between", width: "100%" }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
              <Image src="/ay_logo.png" alt="Aspiring You" width={38} height={38} style={{ objectFit: "contain" }} priority />
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.15rem",
                background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em"
              }}>
                Aspiring You
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="hidden-mobile">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    position: "relative",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: isActive ? "#ffffff" : "var(--text-mid)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {/* Active highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
                        borderRadius: "9999px",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 320, damping: 25 }}
                    />
                  )}

                  {/* Hover highlight */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hover-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                        borderRadius: "9999px",
                        zIndex: -2,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  
                  <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "none",
                background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dark)",
                transition: "background-color 0.2s",
                outline: "none",
              }}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </motion.button>

            {/* Enroll Now Button */}
            <Link href="/signup" className="btn btn-primary hidden-mobile" style={{ padding: "0.5rem 1.35rem", fontSize: "0.88rem" }}>
              Enroll Now
            </Link>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="show-mobile"
              aria-label="Toggle menu"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "20px",
                height: "14px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                outline: "none",
                boxShadow: "none",
              }}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "var(--text-dark)",
                  borderRadius: "9999px",
                  transformOrigin: "left center",
                }}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: -1.5, x: 1.5 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <motion.span
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "var(--text-dark)",
                  borderRadius: "9999px",
                }}
                variants={{
                  closed: { opacity: 1, scale: 1 },
                  open: { opacity: 0, scale: 0 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <motion.span
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "var(--text-dark)",
                  borderRadius: "9999px",
                  transformOrigin: "left center",
                }}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: 1.5, x: 1.5 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Expanded Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "0.75rem 0.25rem 1.25rem",
              }}
            >
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -16, opacity: 0 }}
                    transition={{ delay: idx * 0.04, type: "spring", stiffness: 220, damping: 24 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: isActive ? "var(--primary)" : "var(--text-dark)",
                        textDecoration: "none",
                        padding: "0.6rem 1rem",
                        borderRadius: "14px",
                        background: isActive 
                          ? (dark ? "rgba(99, 102, 241, 0.12)" : "rgba(30, 47, 163, 0.06)") 
                          : "transparent",
                        transition: "background 0.2s ease, color 0.2s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 16, opacity: 0 }}
                transition={{ delay: navLinks.length * 0.04, type: "spring", stiffness: 220, damping: 24 }}
                style={{ padding: "0.5rem 0.25rem 0" }}
              >
                <Link href="/signup" className="btn btn-primary" style={{ display: "flex", justifyContent: "center", width: "100%", padding: "0.75rem" }}>
                  Enroll Now
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
