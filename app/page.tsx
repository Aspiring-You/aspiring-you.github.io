"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, CheckCircle2, Users, BookOpen, Award, Briefcase, TrendingUp, Zap, Globe, Shield, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { testimonials, courses, whyChooseUs, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d0e2c 0%, #1a1b5e 50%, #1e2fa3 100%)",
          padding: "9rem 0 6rem",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background Blobs */}
        <div style={{
          position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
        }}>
          <div style={{
            position: "absolute", top: "10%", right: "5%", width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute", bottom: "5%", left: "0%", width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(30,47,163,0.35) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(60px)",
          }} />
          {/* Grid pattern */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
            {/* Left Content */}
            <div>
              <div className="section-badge" style={{ background: "rgba(255,255,255,0.1)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.3)" }}>
                🚀 Trusted by 50,000+ Learners
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                marginTop: "1rem",
              }}>
                Accelerate Your Career with{" "}
                <span style={{
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Expert-Led Courses
                </span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "500px" }}>
                Join industry-leading programs with live mentorship, real-world projects, and guaranteed placement support. Your dream career starts here.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <Link href="/courses" className="btn btn-primary btn-lg">
                  Explore Courses <ArrowRight size={18} />
                </Link>
                <Link href="/signup" className="btn btn-white btn-lg">
                  Enroll Now
                </Link>
              </div>
              {/* Trust Indicators */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {[
                  { icon: "⭐", label: "4.9/5 Rating" },
                  { icon: "🎓", label: "50K+ Graduates" },
                  { icon: "💼", label: "95% Placement" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span>{item.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Floating Card */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="hero-right">
              <div style={{ position: "relative", maxWidth: "450px", width: "100%" }}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                  alt="Students learning together"
                  width={500}
                  height={400}
                  style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "400px" }}
                  priority
                />
                {/* Floating cards */}
                <div className="glass" style={{
                  position: "absolute", bottom: "1.5rem", left: "-2rem",
                  padding: "0.9rem 1.2rem", display: "flex", alignItems: "center", gap: "0.7rem",
                  animation: "float 3s ease-in-out infinite",
                }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #1e2fa3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TrendingUp size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>40% Avg Salary Hike</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>After course completion</div>
                  </div>
                </div>
                <div className="glass" style={{
                  position: "absolute", top: "1.5rem", right: "-2rem",
                  padding: "0.9rem 1.2rem", display: "flex", alignItems: "center", gap: "0.7rem",
                  animation: "float 3s ease-in-out infinite 1s",
                }}>
                  <div style={{ fontSize: "1.5rem" }}>🎉</div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>Hired at FAANG</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>within 90 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>Why Aspiring You</div>
            <h2 className="section-title">The Smarter Way to Grow Your Career</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Everything you need to go from aspiring professional to industry expert—under one roof.
            </p>
          </div>
          <div className="grid-4">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{
                  width: "70px", height: "70px", borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(124,58,237,0.1))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", margin: "0 auto 1.25rem",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="features-grid">
            <div>
              <div className="section-badge">Our Approach</div>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Learn the Way That<br />
                <span className="text-gradient">Works for You</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    icon: <Zap size={20} />,
                    color: "#f59e0b",
                    bg: "rgba(245,158,11,0.1)",
                    title: "Dynamic Live Learning",
                    desc: "Join live sessions, interactive Q&As, coding challenges, and hackathons with batch mates and industry experts.",
                  },
                  {
                    icon: <Globe size={20} />,
                    color: "#10b981",
                    bg: "rgba(16,185,129,0.1)",
                    title: "Learn Anywhere, Anytime",
                    desc: "Access recorded lectures, exercises, and resources from our LMS 24/7 on any device.",
                  },
                  {
                    icon: <Users size={20} />,
                    color: "#6366f1",
                    bg: "rgba(99,102,241,0.1)",
                    title: "Expert Faculty & Community",
                    desc: "Get guidance from FAANG and startup veterans and collaborate with a global peer community.",
                  },
                  {
                    icon: <Shield size={20} />,
                    color: "#ec4899",
                    bg: "rgba(236,72,153,0.1)",
                    title: "Guaranteed Placement",
                    desc: "Our dedicated placement cell provides mock interviews, resume building, and direct recruiter connections.",
                  },
                ].map((f) => (
                  <div key={f.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "12px",
                      background: f.bg, color: f.color,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {f.icon}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{f.title}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                alt="Online learning platform"
                width={550}
                height={500}
                style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "480px" }}
              />
              <div style={{
                position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
                background: "var(--bg-white)", borderRadius: "16px",
                padding: "1.25rem", boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                  <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Live Session in Progress</span>
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>Python & ML – Batch 47</div>
                <div style={{ display: "flex", gap: "0.3rem", marginTop: "0.5rem" }}>
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: `hsl(${i * 55}, 70%, 60%)`,
                      border: "2px solid #fff",
                      marginLeft: i > 1 ? "-8px" : "0",
                    }} />
                  ))}
                  <span style={{ marginLeft: "0.35rem", fontSize: "0.8rem", color: "var(--text-muted)", alignSelf: "center" }}>+234 live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .features-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ===== FEATURED COURSES ===== */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-badge">Our Courses</div>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Advance Your Skills Today</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Industry-aligned programs designed for real-world outcomes.</p>
            </div>
            <Link href="/courses" className="btn btn-secondary">
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE / LMS SECTION ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">The Learning Experience</div>
            <h2 className="section-title">Everything in One Place</h2>
          </div>
          <div className="grid-3">
            {[
              {
                icon: "🎯",
                title: "Personalized Learning Paths",
                description: "AI-powered recommendations that adapt your learning journey based on your goals, pace, and prior knowledge.",
                color: "#6366f1",
              },
              {
                icon: "📱",
                title: "LMS Access Anytime",
                description: "Access lectures, assignments, quizzes, and projects from our beautiful mobile-first learning management system.",
                color: "#f59e0b",
              },
              {
                icon: "🤝",
                title: "Dedicated Mentor Support",
                description: "1:1 mentorship sessions, office hours, Slack communities, and peer study groups for continuous support.",
                color: "#10b981",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "2.25rem" }}>
                <div style={{
                  fontSize: "2.5rem", marginBottom: "1.25rem",
                  background: `${item.color}18`,
                  width: "70px", height: "70px", borderRadius: "18px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">Success Stories</div>
            <h2 className="section-title">Hear From Our Graduates</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Real learners, real transformations, real results.</p>
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

      {/* ===== CORPORATE SECTION ===== */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent)",
          filter: "blur(60px)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="corp-grid">
            <div>
              <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.25)" }}>
                For Organizations
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#fff", margin: "1rem 0 1.25rem", lineHeight: 1.2 }}>
                Upskill Your Entire Team with Corporate Training
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Custom-built learning programs for enterprises, startups, and government organizations. Get dedicated trainers, dashboards, and measurable ROI.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {["Custom curriculum tailored to your industry", "Dedicated trainer & account manager", "Real-time progress analytics & reporting", "Flexible scheduling for global teams"].map((pt) => (
                  <li key={pt} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
                    <CheckCircle2 size={18} style={{ color: "#10b981", flexShrink: 0 }} />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/programs" className="btn btn-primary btn-lg">
                Explore Corporate Programs <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Corporate training team"
                width={500}
                height={400}
                style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "400px" }}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .corp-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ===== PLACEMENT SUPPORT ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">Placement Support</div>
            <h2 className="section-title">Your Career Success Is Our Mission</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              End-to-end career support from day one until you land your dream job.
            </p>
          </div>
          <div className="grid-4">
            {[
              { icon: <BookOpen size={22} />, color: "#6366f1", bg: "rgba(99,102,241,0.1)", title: "Resume Building", desc: "Expert-reviewed resumes tailored for top tech companies and startups." },
              { icon: <Users size={22} />, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Mock Interviews", desc: "Practice with real interviewers from FAANG companies. 10+ rounds included." },
              { icon: <Briefcase size={22} />, color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "150+ Hiring Partners", desc: "Direct referrals to our network of 150+ companies actively hiring graduates." },
              { icon: <TrendingUp size={22} />, color: "#ec4899", bg: "rgba(236,72,153,0.1)", title: "Salary Negotiation", desc: "Learn to negotiate and secure packages significantly above market rate." },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "16px",
                  background: item.bg, color: item.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.1rem",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Company Logos Band */}
          <div style={{
            marginTop: "3.5rem", textAlign: "center",
          }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
              Our Graduates Work At
            </p>
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              gap: "2.5rem", flexWrap: "wrap",
            }}>
              {["Google", "Microsoft", "Amazon", "Flipkart", "Zomato", "Infosys", "TCS", "Swiggy"].map((c) => (
                <span key={c} style={{
                  fontWeight: 700, fontSize: "1rem",
                  color: "var(--text-muted)",
                  opacity: 0.6,
                  transition: "opacity 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.6")}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section style={{
        background: "linear-gradient(135deg, var(--primary), var(--accent-start))",
        padding: "5rem 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Start Your Growth Journey Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Take the first step. Explore our courses, talk to a mentor, and build the career you deserve.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn btn-white btn-lg">
              Browse Courses <ArrowRight size={18} />
            </Link>
            <Link href="/signup" className="btn" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "1rem 2.25rem", borderRadius: "50px", fontWeight: 600, fontSize: "1.05rem", transition: "all 0.25s ease" }}>
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ---- Sub-components ----

function CourseCard({ course }: { course: typeof courses[0] }) {
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
            background: course.badgeColor, color: "#fff",
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
        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
          {course.description.slice(0, 100)}...
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
          <Link href={`/courses/${course.id}`} className="btn btn-primary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}>
            Enroll Now
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
          <Star key={i} size={15} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
        ))}
      </div>
      <p style={{ color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
        "{testimonial.content}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{testimonial.name}</div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
