import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { programs } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Institutions – Career Accelerator, AI Fellowship & Corporate Upskilling",
  description:
    "Explore AY Academy's flagship programs: Tech Career Accelerator, AI & Data Fellowship, and Corporate Upskilling. Intensive, multi-domain programs designed for transformative career outcomes.",
  keywords: [
    "tech career accelerator", "AI fellowship", "corporate upskilling",
    "intensive training program", "career transformation",
    "data science fellowship", "team training", "AY Academy programs",
  ],
  openGraph: {
    title: "Programs & Institutions – AY Academy",
    description:
      "Explore intensive career accelerator programs, AI fellowships, and corporate upskilling solutions.",
    url: "https://aspiringyou.com/programs/",
  },
  twitter: {
    card: "summary",
    title: "Programs – AY Academy",
    description:
      "Career Accelerator, AI Fellowship & Corporate Upskilling programs designed for transformative outcomes.",
  },
  alternates: {
    canonical: "https://aspiringyou.com/programs/",
  },
};

const successStories = [
  {
    name: "Ramesh Kumar",
    from: "BPO Executive",
    to: "Full Stack Engineer",
    company: "Amazon",
    salary: "₹24 LPA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    duration: "8 months",
  },
  {
    name: "Divya Shetty",
    from: "School Teacher",
    to: "Data Scientist",
    company: "Wipro",
    salary: "₹18 LPA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    duration: "6 months",
  },
  {
    name: "Tarun Joshi",
    from: "Fresher (B.Com)",
    to: "Digital Marketing Lead",
    company: "Nykaa",
    salary: "₹12 LPA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    duration: "4 months",
  },
];

const jobRoles = [
  { title: "Software Engineer", companies: "Google, Microsoft, Flipkart", package: "₹12–35 LPA" },
  { title: "Data Scientist", companies: "Amazon, Paytm, Uber", package: "₹10–30 LPA" },
  { title: "DevOps Engineer", companies: "Infosys, TCS, IBM", package: "₹8–25 LPA" },
  { title: "UX Designer", companies: "Zomato, Swiggy, Meesho", package: "₹7–20 LPA" },
  { title: "Digital Marketer", companies: "Nykaa, MakeMyTrip, Jio", package: "₹6–18 LPA" },
  { title: "Product Manager", companies: "CRED, Razorpay, Zepto", package: "₹15–45 LPA" },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
        padding: "9rem 0 6rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.25)", margin: "0 auto 1.25rem" }}>
            Programs & Institutions
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1.25rem" }}>
            Comprehensive Programs Designed for{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real Outcomes
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", maxWidth: "580px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
            Deep-dive programs, corporate training partnerships, and specialized fellowships—tailored for individuals and organizations ready to level up.
          </p>
          <Link href="/signup" className="btn btn-primary btn-lg">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Program Cards */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">Our Programs</div>
            <h2 className="section-title">Choose Your Growth Path</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {programs.map((prog, i) => (
              <div key={prog.id} className="card" style={{ display: "grid", gridTemplateColumns: "350px 1fr", overflow: "hidden" }} >
                <Image
                  src={prog.image}
                  alt={prog.title}
                  width={350}
                  height={280}
                  style={{ objectFit: "cover", width: "100%", height: "100%", minHeight: "260px" }}
                />
                <div style={{ padding: "2.5rem" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-mid)" }}>
                    {prog.subtitle}
                  </span>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0.5rem 0 1rem" }}>{prog.title}</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{prog.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {prog.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "var(--text-mid)" }}>
                        <CheckCircle2 size={14} style={{ color: "#10b981" }} />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
                    {prog.skills.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <Link href="/signup" className="btn btn-primary">Enroll Now <ArrowRight size={15} /></Link>
                    <Link href="/courses" className="btn btn-secondary">Learn More</Link>
                  </div>
                </div>
                <style>{`
                  @media (max-width: 900px) {
                    .card { grid-template-columns: 1fr !important; }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">Career Outcomes</div>
            <h2 className="section-title">Roles Our Graduates Land</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We prepare you for the highest-demand roles at the companies you want to work at.
            </p>
          </div>
          <div className="grid-3">
            {jobRoles.map((role) => (
              <div key={role.title} className="card" style={{ padding: "1.75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(124,58,237,0.1))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", flexShrink: 0,
                }}>
                  💼
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>{role.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "0.4rem" }}>{role.companies}</p>
                  <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{role.package}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Assistance */}
      <section className="section" style={{ background: "var(--bg-dark)", color: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="job-assist-grid">
            <div>
              <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.25)" }}>
                Job Assistance
              </div>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, margin: "1rem 0 1.25rem" }}>
                We Don&apos;t Stop Until You&apos;re Hired
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.98rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Our placement cell works on your behalf—preparing your resume, coaching you for interviews, and connecting you directly to hiring managers at our partner companies.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {[
                  "Personalized resume & LinkedIn optimization",
                  "10+ mock interviews with FAANG interviewers",
                  "150+ company placement partnerships",
                  "Salary negotiation coaching",
                  "Post-placement mentorship support",
                ].map((pt) => (
                  <div key={pt} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.92rem" }}>
                    <CheckCircle2 size={17} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "rgba(255,255,255,0.82)" }}>{pt}</span>
                  </div>
                ))}
              </div>
              <Link href="/courses" className="btn btn-primary btn-lg">
                Start Your Journey <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                alt="Career support team"
                width={500}
                height={420}
                style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "420px" }}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .job-assist-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Success Stories */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">Success Stories</div>
            <h2 className="section-title">Life-Changing Transformations</h2>
          </div>
          <div className="grid-3">
            {successStories.map((story) => (
              <div key={story.name} className="card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <Image src={story.avatar} alt={story.name} width={56} height={56} style={{ borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontWeight: 700 }}>{story.name}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>Graduated in {story.duration}</div>
                  </div>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "1rem", padding: "0.75rem", borderRadius: "10px",
                  background: "var(--bg-light)",
                }}>
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Before</div>
                    <div style={{ fontWeight: 600, fontSize: "0.88rem" }}>{story.from}</div>
                  </div>
                  <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem" }}>→</span>
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>After</div>
                    <div style={{ fontWeight: 600, fontSize: "0.88rem" }}>{story.to}</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>🏢 {story.company}</span>
                  <span style={{ fontWeight: 700, color: "#10b981" }}>{story.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-start))", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Ready to Write Your Success Story?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Apply now and join thousands of learners who transformed their careers with Aspiring You.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="btn btn-white btn-lg">Apply Now <ArrowRight size={18} /></Link>
            <Link href="/about" className="btn" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "1rem 2.25rem", borderRadius: "50px", fontWeight: 600, fontSize: "1.05rem" }}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
