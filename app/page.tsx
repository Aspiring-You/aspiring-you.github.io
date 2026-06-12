"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Award,
  Zap,
  ChevronRight,
  TrendingUp,
  Cpu,
  Star,
  Settings,
  Code,
  Layers,
  ChevronDown
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { testimonials, courses, stats } from "@/lib/data";

const whyChooseUs = [
  {
    icon: "🎓",
    title: "Industry-Relevant Curriculum",
    description: "Our programs are designed around technologies and workflows used by modern software development teams."
  },
  {
    icon: "🛠️",
    title: "Hands-On Learning",
    description: "Every course includes practical exercises, projects, and implementation-focused learning to help learners apply concepts effectively."
  },
  {
    icon: "📈",
    title: "Structured Learning Path",
    description: "Courses are organized from foundational concepts to advanced topics, enabling learners to build skills progressively."
  },
  {
    icon: "📁",
    title: "Project-Based Training",
    description: "Gain practical experience by working on real-world projects that demonstrate your capabilities and strengthen your portfolio."
  },
  {
    icon: "💼",
    title: "Career-Focused Approach",
    description: "Our training is designed to help learners build the technical competencies required for today's technology roles."
  }
];

const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "Flutter", icon: "📱" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Terraform", icon: "☁️" },
  { name: "Ansible", icon: "🤖" },
  { name: "CI/CD", icon: "🔄" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "Prometheus", icon: "📊" },
  { name: "Grafana", icon: "📈" }
];

const learningApproach = [
  { step: "01", name: "Learn", desc: "Understand concepts through structured sessions and guided instruction.", color: "var(--primary)" },
  { step: "02", name: "Practice", desc: "Apply your knowledge through hands-on exercises and labs.", color: "#f59e0b" },
  { step: "03", name: "Build", desc: "Work on practical projects that reinforce real-world skills.", color: "#10b981" },
  { step: "04", name: "Grow", desc: "Develop confidence and technical expertise to support your career goals.", color: "#ec4899" }
];

const faqs = [
  { q: "Are the courses beginner-friendly?", a: "Yes. We offer programs for beginners as well as learners with prior technical experience." },
  { q: "Do the courses include practical projects?", a: "Yes. Hands-on projects are integrated into the learning experience." },
  { q: "What technologies are covered?", a: "Depending on the program, learners work with technologies such as Java, Python, Flutter, Docker, Kubernetes, Terraform, MongoDB, Firebase, and more." },
  { q: "Will I receive a certificate?", a: "Yes. Certificates are provided upon successful completion of eligible programs." },
  { q: "Who are these programs designed for?", a: "Students, professionals, and individuals looking to build or advance their technology skills." }
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d0e2c 0%, #1a1b5e 50%, #1e2fa3 100%)",
          padding: "9.5rem 0 6.5rem",
          position: "relative",
          overflow: "hidden",
          minHeight: "95vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background Gradients */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "10%", right: "5%", width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute", bottom: "5%", left: "0%", width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(30,47,163,0.3) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "4.5rem", alignItems: "center" }} className="hero-grid">
            {/* Left Column Content */}
            <div>
              <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.25)" }}>
                🚀 Tech Training Designed for Outcomes
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                marginTop: "1rem",
              }}>
                Transform Your Career with{" "}
                <span style={{
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Industry-Focused
                </span>{" "}
                Training
              </h1>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.25rem", maxWidth: "560px" }}>
                Aspiring You is a technology learning platform dedicated to helping students, graduates, and working professionals build practical skills for today's digital workforce.
              </p>
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <Link href="/courses" className="btn btn-primary btn-lg">
                  Explore Courses <ArrowRight size={18} />
                </Link>
                <Link href="/signup" className="btn btn-white btn-lg">
                  Enroll Now
                </Link>
              </div>
              {/* Trust badges */}
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                {[
                  { icon: "⭐", label: "4.8/5 Rated" },
                  { icon: "💻", label: "Practical Focus" },
                  { icon: "🤝", label: "Expert Guided" },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span>{item.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", fontWeight: 600 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column – Glassmorphism Cards Container */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="hero-right">
              <div style={{ position: "relative", maxWidth: "450px", width: "100%" }}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                  alt="Tech learners discussing projects"
                  width={500}
                  height={400}
                  style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "380px", border: "1px solid rgba(255,255,255,0.12)" }}
                  priority
                />
                {/* Floating features */}
                <div className="glass" style={{
                  position: "absolute", bottom: "1rem", left: "-1.5rem",
                  padding: "0.8rem 1.1rem", display: "flex", alignItems: "center", gap: "0.6rem",
                  animation: "float 3.5s ease-in-out infinite",
                }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #1e2fa3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TrendingUp size={15} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem" }}>Job-Ready Skills</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem" }}>Bridge the theory-industry gap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 991px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-right { display: none !important; }
          }
        `}</style>
      </section>

      {/* ===== STATS BAND ===== */}
      <section style={{ background: "var(--bg-white)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ padding: "3rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div className="stat-number">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      {/* ===== EXPLORE COURSES ===== */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-badge">Explore Our Courses</div>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Structured Technical Courses</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Clear learning paths designed to help you gain confidence and job-ready skills.</p>
            </div>
            <Link href="/courses" className="btn btn-secondary">
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>Why Choose Us</div>
            <h2 className="section-title">Designed for Practical Competency</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              At Aspiring You, we focus on technologies and workflows used by modern software engineering groups.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }} className="why-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="card" style={{ padding: "1.75rem", textAlign: "center", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "rgba(99,102,241,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  margin: "0 auto 1.1rem",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: "0.6rem", color: "var(--text-dark)" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6, flex: 1 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) {
            .why-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 768px) {
            .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 520px) {
            .why-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ===== TECHNOLOGIES SECTION ===== */}
      <section className="section" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>Technologies Covered</div>
            <h2 className="section-title">Tools of the Digital Workforce</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Gain practical command over industry-relevant platforms, languages, and orchestration suites.</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px", margin: "0 auto" }}>
            {technologies.map((tech, i) => (
              <div key={i} className="chip" style={{ fontSize: "0.9rem", padding: "0.5rem 1.1rem", display: "flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-white)", borderRadius: "50px", border: "1.5px solid var(--border)" }}>
                <span>{tech.icon}</span>
                <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEYOND THEORY FEATURE BLOCK ===== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="features-grid">
            {/* Left Text */}
            <div>
              <div className="section-badge">Learning Philosophy</div>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Learning That Goes<br />
                <span className="text-gradient">Beyond Theory</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                At Aspiring You, we believe learning should lead to practical outcomes. Our programs focus on helping learners understand not just how tools work, but why they are used in real software development and operations environments.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Through guided projects, practical assignments, and hands-on implementation, learners gain experience that can be applied to personal projects, professional growth, and technical interviews.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="join-eligibility">
                <div style={{ background: "rgba(16,185,129,0.06)", border: "1.5px solid rgba(16,185,129,0.2)", padding: "1.5rem", borderRadius: "16px", flex: 1 }}>
                  <h4 style={{ fontWeight: 700, color: "#10b981", fontSize: "0.95rem", marginBottom: "0.5rem" }}>Who Can Join?</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {["Students & recent graduates", "Working professionals", "Career switchers entering IT"].map((elig, idx) => (
                      <li key={idx} style={{ fontSize: "0.82rem", color: "var(--text-mid)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <CheckCircle2 size={13} style={{ color: "#10b981" }} /> {elig}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: "rgba(99,102,241,0.06)", border: "1.5px solid rgba(99,102,241,0.2)", padding: "1.5rem", borderRadius: "16px", flex: 1 }}>
                  <h4 style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>Roles Targeted</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {["DevOps / Cloud Engineer", "Software / Backend Developer", "Mobile App Developer"].map((role, idx) => (
                      <li key={idx} style={{ fontSize: "0.82rem", color: "var(--text-mid)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <CheckCircle2 size={13} style={{ color: "var(--primary)" }} /> {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ position: "relative" }}>
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                alt="Practical coding application"
                width={550}
                height={500}
                style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "420px", border: "1px solid var(--border)" }}
              />
              <div className="glass" style={{
                position: "absolute", bottom: "1.5rem", right: "1.5rem",
                padding: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem"
              }}>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
                  Guided Projects
                </span>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>Personalized feedback loop</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .features-grid { grid-template-columns: 1fr !important; }
            .join-eligibility { flex-direction: column !important; }
          }
        `}</style>
      </section>

      {/* ===== LEARNING APPROACH ===== */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>Our Methodology</div>
            <h2 className="section-title">The Learning Journey</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>A structured pipeline of sessions, exercises, and project design.</p>
          </div>
          <div className="grid-4">
            {learningApproach.map((item, i) => (
              <div key={i} className="card" style={{ padding: "2.25rem", position: "relative", background: "var(--bg-white)" }}>
                <span style={{ position: "absolute", top: "1rem", right: "1.5rem", fontSize: "1.8rem", fontWeight: 900, color: "rgba(0,0,0,0.04)" }} className="dark:text-[rgba(255,255,255,0.02)]">
                  {item.step}
                </span>
                <div style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: item.color
                }}>
                  {item.name}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>Reviews</div>
            <h2 className="section-title">Hear From Our Graduates</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Transforming careers through real practical learning.</p>
          </div>
          <div className="grid-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            {testimonials.slice(3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FREQUENTLY ASKED QUESTIONS ===== */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "var(--bg-white)" }} className="faq-details">
                <summary style={{
                  padding: "1.1rem 1.4rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontWeight: 600, fontSize: "0.95rem", listStyle: "none", userSelect: "none", outline: "none"
                }}>
                  <span style={{ color: "var(--text-dark)", paddingRight: "1rem" }}>{faq.q}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>▼</span>
                </summary>
                <div style={{ padding: "1rem 1.4rem", borderTop: "1px solid var(--border)", background: "var(--bg-light)" }}>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{
        background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
        padding: "5rem 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Start Your Learning Journey Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Build practical skills, work on real projects, and explore technologies that power modern software development.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn btn-white btn-lg">
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link href="/signup" className="btn" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "1rem 2.25rem", borderRadius: "50px", fontWeight: 600, fontSize: "1.05rem", transition: "all 0.25s ease" }}>
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        summary::-webkit-details-marker {
          display: none !important;
        }
        .faq-details[open] summary span:last-child {
          transform: rotate(180deg);
        }
        .faq-details summary span:last-child {
          transition: transform 0.2s ease;
        }
      `}</style>
    </>
  );
}

// ---- Sub-components ----

function CourseCard({ course }: { course: typeof courses[0] }) {
  const discount = Math.round((1 - course.price / course.originalPrice) * 100);
  return (
    <div className="course-card">
      <div style={{ position: "relative" }}>
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={220}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        {course.badge && (
          <span style={{
            position: "absolute", top: "0.75rem", left: "0.75rem",
            background: "rgba(255, 255, 255, 0.95)", border: `1px solid ${course.badgeColor}`, color: course.badgeColor,
            fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.65rem",
            borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.04em",
          }}>
            {course.badge}
          </span>
        )}
      </div>
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="chip" style={{ marginBottom: "0.75rem", alignSelf: "flex-start" }}>{course.category}</div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.6rem", color: "var(--text-dark)" }}>{course.title}</h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.25rem", flex: 1 }}>
          {course.description.slice(0, 115)}...
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>⏱ {course.duration}</span>
          <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>📶 {course.level}</span>
          <span style={{ fontSize: "0.82rem", color: "#f59e0b" }}>⭐ {course.rating} ({course.reviews.toLocaleString()})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
          <div>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)" }}>₹{course.price.toLocaleString()}</span>
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "line-through", marginLeft: "0.5rem" }}>₹{course.originalPrice.toLocaleString()}</span>
          </div>
          <Link href={`/courses/${course.id}`} className="btn btn-primary" style={{ padding: "0.5rem 1.15rem", fontSize: "0.85rem" }}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card">
      <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.75rem" }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
        ))}
      </div>
      <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
        "{testimonial.content}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text-dark)" }}>{testimonial.name}</div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
