import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, BarChart2, Users, Star, BookOpen, Award, Globe, Zap, Shield, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";
import { GetInTouchForm } from "@/components/GetInTouchForm";
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

  const discount = Math.round((1 - course.price / course.originalPrice) * 100);
  const totalLessons = course.curriculum.reduce((acc, curr) => acc + curr.lessons.length, 0);

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
        padding: "8.5rem 0 4.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background blobs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "-10%", right: "-10%", width: "450px", height: "450px",
            background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(50px)"
          }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem", alignItems: "center" }} className="detail-hero-grid">
            {/* Left Column */}
            <div>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <span className="chip" style={{ background: "transparent", borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.9)", fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.65rem", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {course.category}
                </span>
                {course.badge && (
                  <span style={{ background: "transparent", border: `1px solid ${course.badgeColor}`, color: course.badgeColor, fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.65rem", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {course.badge}
                  </span>
                )}
              </div>
              
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1.25rem", lineHeight: 1.15 }}>
                {course.title}
              </h1>
              
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                {course.description}
              </p>

              {/* Stats & Ratings Row */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={15} style={{ fill: i <= Math.round(course.rating) ? "#f59e0b" : "transparent", color: "#f59e0b" }} />
                  ))}
                  <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem", marginLeft: "0.25rem" }}>{course.rating}</span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Users size={14} /> {course.students.toLocaleString()} students enrolled
                </span>
              </div>

              {/* Meta Chips */}
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {[
                  { icon: <Clock size={14} />, label: course.duration },
                  { icon: <BarChart2 size={14} />, label: course.level },
                  { icon: <Globe size={14} />, label: "English + Hindi" },
                  { icon: <Award size={14} />, label: "Certificate" },
                ].map((meta, i) => (
                  <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>
                    {meta.icon}
                    {meta.label}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="#get-in-touch" className="btn btn-primary btn-lg">
                  Enquire Now <ArrowRight size={16} />
                </Link>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff" }}>₹{course.price.toLocaleString()}</span>
                  <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>₹{course.originalPrice.toLocaleString()}</span>
                  <span style={{ background: "#dcfce7", color: "#16a34a", fontWeight: 700, fontSize: "0.75rem", padding: "0.15rem 0.5rem", borderRadius: "50px", marginLeft: "0.25rem" }}>
                    {discount}% OFF
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column – Responsive Image with features list overlay */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "var(--shadow-xl)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="glass" style={{
                position: "absolute", top: "1rem", right: "1rem",
                padding: "0.5rem 0.75rem", display: "flex", alignItems: "center", gap: "0.4rem"
              }}>
                <Award size={14} color="#fff" />
                <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700 }}>Industry Recognized</span>
              </div>
              <div className="glass" style={{
                position: "absolute", bottom: "1rem", left: "1rem",
                padding: "0.5rem 0.75rem", display: "flex", alignItems: "center", gap: "0.4rem"
              }}>
                <Users size={14} color="#fff" />
                <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700 }}>Live Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Stats Row */}
      <section style={{ background: "var(--bg-white)", borderBottom: "1px solid var(--border)", padding: "2rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="stats-row-grid">
            {[
              { icon: <Clock size={20} />, label: "Duration", value: course.duration, bg: "rgba(99,102,241,0.08)", color: "var(--primary)" },
              { icon: <BookOpen size={20} />, label: "Curriculum", value: `${course.curriculum.length} Modules`, bg: "rgba(245,158,11,0.08)", color: "#f59e0b" },
              { icon: <Zap size={20} />, label: "Mode", value: "Online", bg: "rgba(16,185,129,0.08)", color: "#10b981" },
              { icon: <Award size={20} />, label: "Certificate", value: "Included", bg: "rgba(236,72,153,0.08)", color: "#ec4899" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "var(--bg-light)", borderRadius: "14px", border: "1px solid var(--border)" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: stat.bg, color: stat.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>{stat.label}</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-dark)" }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Body Split Layout */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4.5rem", alignItems: "start" }} className="detail-body-grid">
            {/* Left Column – Detailed Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Course Overview */}
              <div style={{ background: "var(--bg-white)", borderRadius: "18px", padding: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "4px", height: "18px", background: "var(--primary)", borderRadius: "4px" }}></span>
                  Course Overview
                </h2>
                <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.75, margin: 0, whiteSpace: "pre-line" }}>
                  {course.description}
                </p>
              </div>

              {/* Key Features */}
              <div style={{ background: "var(--bg-white)", borderRadius: "18px", padding: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "4px", height: "18px", background: "var(--primary)", borderRadius: "4px" }}></span>
                  Key Features
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-2-mobile">
                  {course.keyFeatures.map((kf, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "3px" }} />
                      <span style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.5 }}>{kf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.25rem" }}>
                  <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", display: "flex", alignItems: "center", gap: "0.5rem", margin: 0 }}>
                    <span style={{ width: "4px", height: "18px", background: "var(--primary)", borderRadius: "4px" }}></span>
                    Course Curriculum
                  </h2>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    {course.curriculum.length} Modules · {totalLessons} topics
                  </span>
                </div>
                
                {/* Dynamic Modules Accordion */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {course.curriculum.map((mod, i) => (
                    <details key={i} style={{ border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "var(--bg-white)" }} className="module-details">
                      <summary style={{
                        padding: "1rem 1.25rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontWeight: 600, fontSize: "0.95rem", listStyle: "none", userSelect: "none", outline: "none"
                      }}>
                        <span style={{ color: "var(--text-dark)" }}>{mod.module} – {mod.title}</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 400 }}>
                          {mod.lessons.length} topics
                        </span>
                      </summary>
                      <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid var(--border)", background: "var(--bg-light)" }}>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", margin: 0, padding: 0 }}>
                          {mod.lessons.map((lesson, lIdx) => (
                            <li key={lIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.88rem", color: "var(--text-mid)" }}>
                              <span style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.1rem", lineHeight: "1", flexShrink: 0 }}>•</span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Eligibility & Prerequisites */}
              <div style={{ background: "var(--bg-white)", borderRadius: "18px", padding: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "4px", height: "18px", background: "var(--primary)", borderRadius: "4px" }}></span>
                  Eligibility & Prerequisites
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="grid-2-mobile">
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>Prerequisites</h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", padding: 0 }}>
                      {course.prerequisites.map((p, i) => (
                        <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-mid)", alignItems: "flex-start" }}>
                          <span style={{ color: "var(--primary)", fontWeight: 700 }}>›</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>Suitable For</h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", padding: 0 }}>
                      {course.suitableFor.map((sf, i) => (
                        <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-mid)", alignItems: "flex-start" }}>
                          <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span>
                          <span>{sf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "4px", height: "18px", background: "var(--primary)", borderRadius: "4px" }}></span>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {course.faqs.map((faq, i) => (
                    <details key={i} style={{ border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "var(--bg-white)" }} className="faq-details">
                      <summary style={{
                        padding: "1rem 1.25rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontWeight: 600, fontSize: "0.95rem", listStyle: "none", userSelect: "none", outline: "none"
                      }}>
                        <span style={{ color: "var(--text-dark)", paddingRight: "1rem" }}>{faq.question}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>▼</span>
                      </summary>
                      <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid var(--border)", background: "var(--bg-light)" }}>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column – Sticky Form and Skills */}
            <div id="get-in-touch" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Get in Touch Form (Client Component) */}
              <GetInTouchForm courseTitle={course.title} />

              {/* Skills Card */}
              <div style={{ background: "var(--bg-white)", borderRadius: "18px", padding: "1.5rem", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontWeight: 800, marginBottom: "1rem", fontSize: "1rem", color: "var(--text-dark)" }}>Skills You&apos;ll Gain</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {course.skills.map((s, i) => (
                    <span key={i} className="chip" style={{ fontSize: "0.78rem" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        summary::-webkit-details-marker {
          display: none !important;
        }
        .module-details[open] summary span:last-child {
          color: var(--primary) !important;
          font-weight: 600;
        }
        .faq-details[open] summary span:last-child {
          transform: rotate(180deg);
        }
        .faq-details summary span:last-child {
          transition: transform 0.2s ease;
        }
        @media (max-width: 991px) {
          .detail-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .stats-row-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .detail-body-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 575px) {
          .stats-row-grid { grid-template-columns: 1fr !important; }
          .grid-2-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
