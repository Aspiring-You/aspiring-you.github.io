import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, BarChart2, Users, Star, ArrowLeft, BookOpen, Award, Globe, Zap } from "lucide-react";
import { courses } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} – Aspiring You`,
    description: course.description,
  };
}

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  const curriculum = [
    { module: "Module 1", title: "Foundation & Fundamentals", lessons: 12, duration: "4 hours" },
    { module: "Module 2", title: "Core Concepts & Hands-on Practice", lessons: 18, duration: "7 hours" },
    { module: "Module 3", title: "Advanced Techniques & Projects", lessons: 22, duration: "10 hours" },
    { module: "Module 4", title: "Real-World Capstone Project", lessons: 8, duration: "6 hours" },
    { module: "Module 5", title: "Interview Prep & Career Support", lessons: 6, duration: "3 hours" },
  ];

  const instructors = [
    {
      name: "Dr. Anand Mehta",
      role: "Senior ML Engineer, Ex-Google",
      avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=80&q=80",
      rating: 4.9,
      students: 12400,
    },
    {
      name: "Priyanka Rao",
      role: "Full Stack Architect, Ex-Microsoft",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
      rating: 4.8,
      students: 9800,
    },
  ];

  const discount = Math.round((1 - course.price / course.originalPrice) * 100);

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-light)", borderBottom: "1px solid var(--border)", padding: "1rem 0", marginTop: "70px" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/courses" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Courses</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)", fontWeight: 500 }}>{course.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
        padding: "4rem 0",
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "4rem", alignItems: "start" }} className="detail-hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <span className="chip" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", color: "#a5b4fc" }}>
                  {course.category}
                </span>
                {course.badge && (
                  <span style={{ background: course.badgeColor, color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.65rem", borderRadius: "50px" }}>
                    {course.badge}
                  </span>
                )}
              </div>
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem", lineHeight: 1.15 }}>
                {course.title}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {course.description}
              </p>
              {/* Ratings row */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} style={{ fill: i <= Math.round(course.rating) ? "#f59e0b" : "transparent", color: "#f59e0b" }} />
                  ))}
                  <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem", marginLeft: "0.25rem" }}>{course.rating}</span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Users size={14} /> {course.students.toLocaleString()} students enrolled
                </span>
              </div>
              {/* Meta chips */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {[
                  { icon: <Clock size={14} />, label: course.duration },
                  { icon: <BarChart2 size={14} />, label: course.level },
                  { icon: <Globe size={14} />, label: "English + Hindi" },
                  { icon: <Award size={14} />, label: "Certificate" },
                ].map((m) => (
                  <span key={m.label} style={{
                    display: "flex", alignItems: "center", gap: "0.35rem",
                    color: "rgba(255,255,255,0.75)", fontSize: "0.85rem",
                  }}>
                    {m.icon}{m.label}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "1.5rem" }}>
                <Image src={instructors[0].avatar} alt={instructors[0].name} width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem" }}>
                  Created by <strong style={{ color: "#a5b4fc" }}>{instructors[0].name}</strong>
                </span>
              </div>
            </div>

            {/* Right – Sticky Card (desktop) */}
            <div style={{
              background: "var(--bg-white)", borderRadius: "20px",
              overflow: "hidden", boxShadow: "var(--shadow-xl)",
            }}>
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={220}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--primary)" }}>₹{course.price.toLocaleString()}</span>
                  <span style={{ fontSize: "1rem", color: "var(--text-muted)", textDecoration: "line-through" }}>₹{course.originalPrice.toLocaleString()}</span>
                  <span style={{ background: "#dcfce7", color: "#16a34a", fontWeight: 700, fontSize: "0.8rem", padding: "0.2rem 0.6rem", borderRadius: "50px" }}>
                    {discount}% OFF
                  </span>
                </div>
                <Link href="/signup" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.9rem", marginBottom: "0.75rem", display: "flex" }}>
                  Enroll Now
                </Link>
                <Link href="/signup" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem", padding: "0.85rem", display: "flex" }}>
                  Request Free Demo
                </Link>
                <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.75rem" }}>
                  30-day money-back guarantee
                </p>
                <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "1.25rem 0" }} />
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {course.highlights.map((h) => (
                    <li key={h} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "var(--text-mid)" }}>
                      <CheckCircle2 size={15} style={{ color: "#10b981", flexShrink: 0 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Sections */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "4rem" }} className="detail-body-grid">
            <div>
              {/* What You'll Learn */}
              <div style={{ background: "var(--bg-light)", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem", border: "1px solid var(--border)" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>What You&apos;ll Learn</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  {[
                    "Solid theoretical and practical foundations",
                    "Real-world project portfolio",
                    "Industry best practices and patterns",
                    "Interview preparation & problem solving",
                    "Performance optimization techniques",
                    "Collaboration, code reviews & deployment",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem" }}>
                      <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "var(--text-mid)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Course Curriculum</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {curriculum.map((mod, i) => (
                    <details key={i} style={{
                      border: "1px solid var(--border)", borderRadius: "12px",
                      overflow: "hidden", background: "var(--bg-white)",
                    }}>
                      <summary style={{
                        padding: "1rem 1.25rem",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        listStyle: "none",
                        userSelect: "none",
                      }}>
                        <span>{mod.module}: {mod.title}</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 400 }}>
                          {mod.lessons} lessons · {mod.duration}
                        </span>
                      </summary>
                      <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid var(--border)", background: "var(--bg-light)" }}>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                          Detailed breakdown of {mod.title} covering key concepts, exercises, and hands-on projects.
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Instructors */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Your Instructors</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {instructors.map((inst) => (
                    <div key={inst.name} className="card" style={{ padding: "1.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                      <Image src={inst.avatar} alt={inst.name} width={64} height={64} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                      <div>
                        <h3 style={{ fontWeight: 700, marginBottom: "0.2rem" }}>{inst.name}</h3>
                        <p style={{ color: "var(--accent-mid)", fontWeight: 500, fontSize: "0.88rem", marginBottom: "0.6rem" }}>{inst.role}</p>
                        <div style={{ display: "flex", gap: "1rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                          <span>⭐ {inst.rating} Rating</span>
                          <span>👥 {inst.students.toLocaleString()} Students</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar – requirements */}
            <div>
              <div className="card" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "1.05rem" }}>Requirements</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {["Basic computer proficiency", "Interest in the subject", "Willingness to practice daily", "Access to a computer/laptop"].map((r) => (
                    <li key={r} style={{ display: "flex", gap: "0.6rem", fontSize: "0.88rem", color: "var(--text-mid)" }}>
                      <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>›</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "1.05rem" }}>Skills You&apos;ll Gain</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {course.skills.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .detail-hero-grid, .detail-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
