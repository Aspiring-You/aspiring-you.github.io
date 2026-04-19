"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, Star, Clock, BarChart2, Users } from "lucide-react";
import { courses, categories } from "@/lib/data";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All Levels");

  const levels = ["All Levels", "Beginner", "Intermediate", "Beginner to Advanced", "Intermediate to Advanced", "Beginner to Intermediate"];

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = selectedCategory === "All" || c.category === selectedCategory;
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchLevel = level === "All Levels" || c.level === level;
      return matchCat && matchSearch && matchLevel;
    });
  }, [selectedCategory, search, level]);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0d0e2c, #1a1b5e)",
        padding: "8rem 0 5rem",
        textAlign: "center",
      }}>
        <div className="container">
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc", borderColor: "rgba(165,180,252,0.25)", margin: "0 auto 1rem" }}>
            All Courses
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            Find Your Perfect Course
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Browse our curated library of expert-led courses across tech, design, business, and more.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: "560px", margin: "0 auto",
            position: "relative",
          }}>
            <Search size={18} style={{ position: "absolute", left: "1.1rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.5)" }} />
            <input
              type="text"
              placeholder="Search courses, skills, or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "1rem 1rem 1rem 3rem",
                borderRadius: "50px",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontSize: "0.95rem",
                outline: "none",
                backdropFilter: "blur(10px)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          {/* Filter Row */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", flex: 1 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "50px",
                    border: "1.5px solid",
                    borderColor: selectedCategory === cat ? "var(--primary)" : "var(--border)",
                    background: selectedCategory === cat ? "var(--primary)" : "var(--bg-white)",
                    color: selectedCategory === cat ? "#fff" : "var(--text-mid)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Level filter */}
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              style={{
                padding: "0.55rem 1rem",
                borderRadius: "50px",
                border: "1.5px solid var(--border)",
                background: "var(--bg-white)",
                color: "var(--text-mid)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {levels.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>

          {/* Result count */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>{filtered.length}</span>
            <span style={{ color: "var(--text-muted)", marginLeft: "0.35rem" }}>courses found</span>
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <h3 style={{ marginBottom: "0.5rem" }}>No courses found</h3>
              <p style={{ color: "var(--text-muted)" }}>Try adjusting your filters or search terms.</p>
              <button
                onClick={() => { setSearch(""); setSelectedCategory("All"); setLevel("All Levels"); }}
                className="btn btn-primary"
                style={{ marginTop: "1.5rem" }}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Courses Grid */}
          <div className="grid-3">
            {filtered.map((course) => (
              <div key={course.id} className="course-card">
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
                      borderRadius: "50px", textTransform: "uppercase",
                    }}>
                      {course.badge}
                    </span>
                  )}
                </div>
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="chip" style={{ marginBottom: "0.75rem", alignSelf: "flex-start" }}>{course.category}</div>
                  <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.6rem" }}>{course.title}</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                    {course.description.slice(0, 110)}...
                  </p>

                  {/* Skills */}
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    {course.skills.slice(0, 3).map((s) => (
                      <span key={s} style={{
                        fontSize: "0.72rem", fontWeight: 600,
                        background: "rgba(99,102,241,0.08)", color: "var(--accent-mid)",
                        padding: "0.2rem 0.55rem", borderRadius: "50px",
                        border: "1px solid rgba(99,102,241,0.15)",
                      }}>
                        {s}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", padding: "0.2rem 0.3rem" }}>
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Clock size={13} /> {course.duration}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <BarChart2 size={13} /> {course.level.split(" ")[0]}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#f59e0b" }}>
                      <Star size={13} style={{ fill: "#f59e0b" }} /> {course.rating} ({course.reviews.toLocaleString()})
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Users size={13} /> {(course.students / 1000).toFixed(1)}k
                    </span>
                  </div>

                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: "1rem", borderTop: "1px solid var(--border)",
                  }}>
                    <div>
                      <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)" }}>
                        ₹{course.price.toLocaleString()}
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "line-through", marginLeft: "0.5rem" }}>
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, marginLeft: "0.5rem" }}>
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                      </span>
                    </div>
                    <Link href={`/courses/${course.id}`} className="btn btn-primary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}>
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
