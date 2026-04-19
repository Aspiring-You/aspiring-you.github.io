"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react";

type FieldErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.password) {
      e.password = "Password is required.";
    } else if (form.password.length < 6) {
      e.password = "Password must be at least 6 characters.";
    }
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

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-light)", padding: "2rem" }}>
        <div style={{ background: "var(--bg-white)", borderRadius: "24px", padding: "3rem", textAlign: "center", maxWidth: "440px", boxShadow: "var(--shadow-xl)" }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}>
            <Check size={36} color="#fff" strokeWidth={3} />
          </div>
          <h2 style={{ fontWeight: 800, marginBottom: "0.75rem" }}>Welcome Back! 👋</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "2rem" }}>
            You&apos;ve successfully signed in to your Aspiring You account.
          </p>
          <Link href="/courses" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
            Continue Learning <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="auth-page">
      {/* Left Panel */}
      <div style={{
        background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "5rem 4rem", position: "relative", overflow: "hidden",
      }} className="auth-left">
        <div style={{
          position: "absolute", bottom: "-120px", left: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>✦ Aspiring You</span>
        </Link>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1.25rem", lineHeight: 1.15 }}>
          Welcome Back to<br />Your Learning Hub
        </h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Your classes, mentors, and projects are waiting for you. Log in and keep the momentum going.
        </p>
        <div style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "1.5rem",
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #1e2fa3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem", flexShrink: 0,
            }}>📈</div>
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.92rem" }}>Your progress is waiting</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>72% complete on your last course</div>
            </div>
          </div>
          <div style={{ height: "6px", borderRadius: "6px", background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
            <div style={{ width: "72%", height: "100%", borderRadius: "6px", background: "linear-gradient(90deg, #10b981, #059669)" }} />
          </div>
        </div>
      </div>

      {/* Right – Form */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: "4rem 3rem", background: "var(--bg-white)",
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>Sign in to your account</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
              Don&apos;t have an account?{" "}
              <Link href="/signup" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>Sign up free</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Email */}
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.4rem" }}>Email Address</label>
              <input
                id="login-email"
                type="email"
                className={`input ${errors.email ? "error" : ""}`}
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                autoComplete="email"
              />
              {errors.email && <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: "0.35rem" }}>{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <label style={{ fontWeight: 600, fontSize: "0.88rem" }}>Password</label>
                <Link href="/" style={{ color: "var(--primary)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}>
                  Forgot password?
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  className={`input ${errors.password ? "error" : ""}`}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  autoComplete="current-password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{
                  position: "absolute", right: "0.9rem", top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)",
                }} aria-label="Toggle password visibility">
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password && <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: "0.35rem" }}>{errors.password}</p>}
            </div>

            {/* Remember Me */}
            <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
              <input
                id="login-remember"
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                style={{ accentColor: "var(--primary)", width: "16px", height: "16px" }}
              />
              <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Remember me for 30 days</span>
            </label>

            <button id="login-submit" type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.75rem 0" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>or continue with</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          {/* Social Login */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {[
              { label: "Google", icon: "🔵" },
              { label: "LinkedIn", icon: "💼" },
            ].map((s) => (
              <button key={s.label} type="button" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                padding: "0.7rem", border: "1.5px solid var(--border)", borderRadius: "10px",
                background: "var(--bg-white)", cursor: "pointer", fontSize: "0.88rem", fontWeight: 600,
                color: "var(--text-dark)", transition: "all 0.2s ease", fontFamily: "'Inter', sans-serif",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLElement).style.background = "var(--bg-light)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "var(--bg-white)"; }}
              >
                <span>{s.icon}</span> {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .auth-page { grid-template-columns: 1fr !important; }
          .auth-left { display: none !important; }
        }
      `}</style>
    </div>
  );
}
