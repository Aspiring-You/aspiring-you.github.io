"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, BookOpen, Users, Award, TrendingUp, Phone, Mail, User, MessageSquare, ChevronDown } from "lucide-react";
import { courses } from "@/lib/data";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  goal?: string;
};

const benefits = [
  { icon: <BookOpen size={18} />, label: "50+ Expert-Led Courses" },
  { icon: <Users size={18} />, label: "1:1 Live Mentorship" },
  { icon: <Award size={18} />, label: "Industry Certificate" },
  { icon: <TrendingUp size={18} />, label: "Placement Assistance" },
];

export default function EnrollPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    goal: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Please enter your full name (at least 2 characters).";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.phone || !/^\+?[\d\s\-]{10,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number (10–15 digits).";
    if (!form.course)
      e.course = "Please select a course you are interested in.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const selectedCourse = courses.find((c) => c.id === form.course);

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-light)",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "var(--bg-white)",
            borderRadius: "28px",
            padding: "3.5rem 3rem",
            textAlign: "center",
            maxWidth: "480px",
            width: "100%",
            boxShadow: "var(--shadow-xl)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Animated checkmark */}
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #10b981, #059669)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.75rem",
              boxShadow: "0 0 0 12px rgba(16,185,129,0.12)",
            }}
          >
            <Check size={40} color="#fff" strokeWidth={3} />
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              marginBottom: "0.75rem",
            }}
          >
            You&apos;re Enrolled! 🎉
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            Thanks,{" "}
            <strong style={{ color: "var(--text-dark)" }}>{form.name}</strong>!
            Our team will reach out to{" "}
            <strong style={{ color: "var(--primary)" }}>{form.email}</strong>
            &nbsp;and <strong>{form.phone}</strong> within 24 hours to confirm
            your enrollment
            {selectedCourse ? (
              <>
                {" "}
                in{" "}
                <strong style={{ color: "var(--primary)" }}>
                  {selectedCourse.title}
                </strong>
              </>
            ) : null}
            .
          </p>

          {/* What happens next */}
          <div
            style={{
              background: "var(--bg-light)",
              borderRadius: "14px",
              padding: "1.25rem",
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.88rem",
                marginBottom: "0.75rem",
                color: "var(--text-dark)",
              }}
            >
              What happens next?
            </p>
            {[
              "Our counsellor will call you within 24 hours",
              "You'll receive a detailed course brochure on email",
              "Free demo session will be scheduled for you",
              "Flexible payment options will be shared",
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  marginBottom: "0.55rem",
                  fontSize: "0.88rem",
                  color: "var(--text-mid)",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--primary), var(--accent-start))",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {i + 1}
                </div>
                {step}
              </div>
            ))}
          </div>

          <Link
            href="/courses"
            className="btn btn-primary btn-lg"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Browse More Courses <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  /* ── Main form ── */
  return (
    <div
      style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}
      className="enroll-page"
    >
      {/* ── Left panel ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d0e2c 0%, #1a1b5e 55%, #1e2fa3 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
        className="enroll-left"
      >
        {/* decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.2), transparent)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              marginBottom: "3rem",
            }}
          >
            <Image
              src="/ay_logo.png"
              alt="Aspiring You"
              width={36}
              height={36}
              style={{ objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.15rem",
                color: "#fff",
              }}
            >
              Aspiring You
            </span>
          </Link>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(16,185,129,0.15)",
              color: "#6ee7b7",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "50px",
              padding: "0.3rem 0.85rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
            }}
          >
            🎓 Free counselling session included
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1.1rem",
            }}
          >
            Begin Your Career<br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformation Today
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "360px",
            }}
          >
            Fill out this form and one of our expert counsellors will reach out
            to guide you through the best course options for your goals.
          </p>

          {/* Benefits */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.85rem",
              marginBottom: "2.5rem",
            }}
          >
            {benefits.map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "0.65rem 0.9rem",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.83rem",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#a78bfa", flexShrink: 0 }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex" }}>
              {[
                "https://images.unsplash.com/photo-1494790108755-2616b612b9ac?w=50&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&q=80",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&q=80",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="learner"
                  width={34}
                  height={34}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #1a1b5e",
                    marginLeft: i > 0 ? "-10px" : "0",
                  }}
                />
              ))}
            </div>
            <div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                50,000+ learners enrolled
              </div>
              <div
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem" }}
              >
                ⭐⭐⭐⭐⭐ 4.9 average rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right – Enrollment Form ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 3rem",
          background: "var(--bg-white)",
          overflowY: "auto",
        }}
      >
        <div style={{ width: "100%", maxWidth: "460px" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "0.4rem",
              }}
            >
              Enroll Now
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
              Takes less than 2 minutes. No payment needed yet.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="enroll-name"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.4rem",
                  color: "var(--text-dark)",
                }}
              >
                <User size={14} style={{ color: "var(--accent-mid)" }} />
                Full Name
              </label>
              <input
                id="enroll-name"
                type="text"
                className={`input ${errors.name ? "error" : ""}`}
                placeholder="e.g. Priya Sharma"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                autoComplete="name"
              />
              {errors.name && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.78rem",
                    marginTop: "0.35rem",
                  }}
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="enroll-email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.4rem",
                  color: "var(--text-dark)",
                }}
              >
                <Mail size={14} style={{ color: "var(--accent-mid)" }} />
                Email Address
              </label>
              <input
                id="enroll-email"
                type="email"
                className={`input ${errors.email ? "error" : ""}`}
                placeholder="priya@example.com"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                autoComplete="email"
              />
              {errors.email && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.78rem",
                    marginTop: "0.35rem",
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="enroll-phone"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.4rem",
                  color: "var(--text-dark)",
                }}
              >
                <Phone size={14} style={{ color: "var(--accent-mid)" }} />
                Phone Number
              </label>
              <input
                id="enroll-phone"
                type="tel"
                className={`input ${errors.phone ? "error" : ""}`}
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                autoComplete="tel"
              />
              {errors.phone && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.78rem",
                    marginTop: "0.35rem",
                  }}
                >
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Course Selection */}
            <div>
              <label
                htmlFor="enroll-course"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.4rem",
                  color: "var(--text-dark)",
                }}
              >
                <BookOpen size={14} style={{ color: "var(--accent-mid)" }} />
                Course of Interest
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="enroll-course"
                  className={`input ${errors.course ? "error" : ""}`}
                  value={form.course}
                  onChange={(e) => {
                    setForm({ ...form, course: e.target.value });
                    if (errors.course)
                      setErrors({ ...errors, course: undefined });
                  }}
                  style={{ appearance: "none", cursor: "pointer", paddingRight: "2.5rem" }}
                >
                  <option value="">— Select a course —</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                  <option value="not-sure">Not sure yet – help me choose</option>
                </select>
                <ChevronDown
                  size={16}
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--text-muted)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              {errors.course && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.78rem",
                    marginTop: "0.35rem",
                  }}
                >
                  {errors.course}
                </p>
              )}
              {/* Selected course quick info */}
              {selectedCourse && (
                <div
                  style={{
                    marginTop: "0.6rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.6rem 0.85rem",
                    background: "rgba(99,102,241,0.06)",
                    border: "1px solid rgba(99,102,241,0.18)",
                    borderRadius: "10px",
                    fontSize: "0.82rem",
                  }}
                >
                  <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span>
                  <span style={{ color: "var(--text-mid)" }}>
                    <strong>{selectedCourse.duration}</strong> ·{" "}
                    {selectedCourse.level} · ⭐ {selectedCourse.rating}
                  </span>
                </div>
              )}
            </div>

            {/* Goal / Message (optional) */}
            <div>
              <label
                htmlFor="enroll-goal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.4rem",
                  color: "var(--text-dark)",
                }}
              >
                <MessageSquare size={14} style={{ color: "var(--accent-mid)" }} />
                Your Goal{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: "var(--text-muted)",
                    fontSize: "0.8rem",
                  }}
                >
                  (optional)
                </span>
              </label>
              <textarea
                id="enroll-goal"
                className="input"
                placeholder="e.g. Switch career to data science, get a 30% salary hike..."
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                rows={3}
                style={{ resize: "vertical", minHeight: "80px" }}
              />
            </div>

            {/* Submit */}
            <button
              id="enroll-submit"
              type="submit"
              className="btn btn-primary btn-lg"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "0.5rem",
              }}
            >
              Submit Enrollment Request <ArrowRight size={18} />
            </button>

            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "0.78rem",
                lineHeight: 1.5,
              }}
            >
              🔒 Your information is 100% safe. No spam, ever.
              <br />
              Our counsellor will contact you within 24 hours.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .enroll-page { grid-template-columns: 1fr !important; }
          .enroll-left { display: none !important; }
        }
      `}</style>
    </div>
  );
}
