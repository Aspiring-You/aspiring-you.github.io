"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function GetInTouchForm({ courseTitle }: { courseTitle: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [type, setType] = useState<"Myself" | "My Company">("Myself");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div
      style={{
        background: "var(--bg-white)",
        borderRadius: "20px",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden",
        position: "sticky",
        top: "100px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
          padding: "1.5rem",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", margin: 0 }}>
          <Send size={18} /> Get in Touch
        </h3>
        <p style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "0.25rem", marginBottom: 0 }}>
          Interested in {courseTitle}? Drop your query below!
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Name */}
            <div style={{ position: "relative" }}>
              <User size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                style={{ paddingLeft: "2.75rem" }}
              />
            </div>

            {/* Email */}
            <div style={{ position: "relative" }}>
              <Mail size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                style={{ paddingLeft: "2.75rem" }}
              />
            </div>

            {/* Phone */}
            <div style={{ position: "relative" }}>
              <Phone size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input"
                style={{ paddingLeft: "2.75rem" }}
              />
            </div>

            {/* User Type Segment */}
            <div style={{ display: "flex", gap: "0.5rem", margin: "0.25rem 0" }}>
              <button
                type="button"
                onClick={() => setType("Myself")}
                style={{
                  flex: 1,
                  padding: "0.6rem",
                  borderRadius: "10px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: type === "Myself" ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                  background: type === "Myself" ? "rgba(99,102,241,0.08)" : "transparent",
                  color: type === "Myself" ? "var(--primary)" : "var(--text-mid)",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
              >
                Myself
              </button>
              <button
                type="button"
                onClick={() => setType("My Company")}
                style={{
                  flex: 1,
                  padding: "0.6rem",
                  borderRadius: "10px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: type === "My Company" ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                  background: type === "My Company" ? "rgba(99,102,241,0.08)" : "transparent",
                  color: type === "My Company" ? "var(--primary)" : "var(--text-mid)",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
              >
                My Company
              </button>
            </div>

            {/* Query */}
            <div style={{ position: "relative" }}>
              <MessageSquare size={16} style={{ position: "absolute", left: "1rem", top: "1rem", color: "var(--text-muted)" }} />
              <textarea
                placeholder="Your Query / Comments (Optional)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input"
                style={{ paddingLeft: "2.75rem", minHeight: "80px", resize: "none", fontFamily: "inherit" }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "0.75rem",
                fontSize: "0.95rem",
                borderRadius: "12px",
                boxShadow: "none",
              }}
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              padding: "2.5rem 1.5rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <CheckCircle size={48} style={{ color: "#10b981" }} />
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
              Thank you, {name}!
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
              We have received your inquiry for <strong>{courseTitle}</strong>. Our counselors will reach out to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setPhoneNumber("");
                setQuery("");
              }}
              className="btn btn-secondary"
              style={{ fontSize: "0.82rem", padding: "0.45rem 1rem", marginTop: "1rem" }}
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
