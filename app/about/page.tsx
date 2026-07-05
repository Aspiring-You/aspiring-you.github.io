import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Globe, Award, ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Our Mission, Team & Values",
  description:
    "Learn about AY Academy by Aspiring You – our mission to provide structured, practical tech training that prepares learners for real-world careers in DevOps, Software Development, and Cybersecurity.",
  keywords: [
    "about AY Academy", "Aspiring You", "tech education mission",
    "online learning platform India", "career-focused training",
  ],
  openGraph: {
    title: "About AY Academy – Our Mission & Team",
    description:
      "Discover how AY Academy is helping students and professionals build practical, industry-relevant tech skills.",
    url: "https://aspiringyou.com/about/",
  },
  twitter: {
    card: "summary",
    title: "About AY Academy",
    description:
      "Learn about our mission to provide structured, practical tech training for career growth.",
  },
  alternates: {
    canonical: "https://aspiringyou.com/about/",
  },
};

const coreValues = [
  { icon: "🎯", title: "Excellence First", description: "We set the bar high—for our curriculum, our mentors, and the outcomes we promise our learners." },
  { icon: "🌱", title: "Continuous Growth", description: "We believe growth is a lifelong journey. Our platform evolves alongside learners' ambitions." },
  { icon: "🤝", title: "Community & Belonging", description: "We foster inclusive communities where diverse thinkers connect, support, and inspire each other." },
  { icon: "💡", title: "Innovation Always", description: "We constantly rethink how learning works—experimenting with new tools, formats, and pedagogies." },
  { icon: "🔒", title: "Integrity & Trust", description: "Honest outcomes, transparent pricing, and real placement data—no false promises, ever." },
  { icon: "❤️", title: "Learner-Centric", description: "Every decision we make starts and ends with one question: how does this help our learner?" },
];

const team = [
  {
    name: "Vikram Anand",
    role: "Co-Founder & CEO",
    bio: "Former Product Lead at Google with 14 years in edtech and product development.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    name: "Dr. Meera Pillai",
    role: "Co-Founder & Chief Learning Officer",
    bio: "PhD in Cognitive Science from IIT Bombay. Passionate about evidence-based learning design.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "Rajan Kapoor",
    role: "Chief Technology Officer",
    bio: "15 years in building scalable platforms. Previously CTO at two funded edtech startups.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Shruti Nair",
    role: "VP of Career Success",
    bio: "Ex-HR head at Infosys. Built the placement relationships network from the ground up.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9ac?w=200&q=80",
  },
];

const milestones = [
  { year: "2019", event: "Founded in a Coimbatore co-working space with 3 courses and 200 learners." },
  { year: "2020", event: "Launched live mentorship model; grew to 5,000 learners during the pandemic." },
  { year: "2021", event: "Raised seed funding; expanded to 20 courses and launched placement cell." },
  { year: "2022", event: "Crossed 20,000 graduates; opened corporate training division." },
  { year: "2023", event: "Launched AI-powered personalized learning paths; 50+ enterprise clients." },
  { year: "2024", event: "50,000+ learners, 150+ hiring partners, 95% placement rate achieved." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
        padding: "8rem 0 5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }} className="about-hero">
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.25)", margin: "0 auto 1.25rem" }}>
            About Us
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1.25rem" }}>
            About{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Aspiring You
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.25rem", fontWeight: 500, maxWidth: "680px", margin: "0 auto", lineHeight: 1.7 }}>
            Empowering Learners with Practical Technology Skills
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-white)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ padding: "3.5rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }} className="about-stats-grid">
            {[
              { value: 50000, suffix: "+", label: "Learners Transformed" },
              { value: 95, suffix: "%", label: "Placement Rate" },
              { value: 200, suffix: "+", label: "Expert Mentors" },
              { value: 5, suffix: " yrs", label: "Years of Excellence" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-number">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) { .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="who-we-are-grid">
            <div>
              <div className="section-badge">Who We Are</div>
              <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
                Empowering Through Practical Learning
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Aspiring You is a technology learning platform focused on helping students, graduates, and working professionals develop industry-relevant skills in software development, DevOps, cloud technologies, and mobile application development. Our goal is to provide structured, practical training that prepares learners for real-world technical challenges and career opportunities.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                In today&apos;s fast-changing technology landscape, employers seek professionals who can apply knowledge, solve problems, and work with modern tools and frameworks. At Aspiring You, we focus on bridging the gap between learning and implementation through hands-on projects, practical exercises, and industry-aligned training programs.
              </p>

            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80"
                alt="Aspiring You team"
                width={550}
                height={450}
                style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "420px" }}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .who-we-are-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
          @media (max-width: 768px) { .about-hero { padding: 7rem 0 4rem !important; } }
        `}</style>
      </section>

      {/* Vision & Mission */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="vm-grid">
            {[
              {
                icon: "🔭",
                label: "Our Vision",
                color: "#6366f1",
                bg: "rgba(99,102,241,0.08)",
                title: "A World Without Career Barriers",
                desc: "We envision a future where a learner's socioeconomic background never determines the ceiling of their career. We build the ladders that take them up.",
              },
              {
                icon: "🚀",
                label: "Our Mission",
                color: "#7c3aed",
                bg: "rgba(124,58,237,0.08)",
                title: "Skills × Mentorship × Opportunity",
                desc: "To provide every aspiring professional with the industry-relevant skills, expert mentorship, and career opportunities needed to achieve their full potential—on their own terms.",
              },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: "2.5rem" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "16px",
                  background: item.bg, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.75rem", marginBottom: "1.25rem",
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                  {item.label}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.85rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) { .vm-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">What Drives Us</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid-3">
            {coreValues.map((val) => (
              <div key={val.title} className="card" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{val.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{val.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65 }}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">Leadership</div>
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Passionate educators, experienced technologists, and relentless advocates for learner success.
            </p>
          </div>
          <div className="grid-4">
            {team.map((member) => (
              <div key={member.name} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%", objectFit: "cover", margin: "0 auto 1rem", display: "block" }}
                />
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{member.name}</h3>
                <p style={{ color: "var(--accent-mid)", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.75rem" }}>{member.role}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-start))", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Join the Aspiring You Community
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            50,000+ learners are already building better careers. It&apos;s your turn.
          </p>
          <Link href="/courses" className="btn btn-white btn-lg">
            Explore Courses <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
