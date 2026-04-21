import React from "react";

const jobs = [
  {
    company: "Paycom",
    role: "Software Developer",
    dates: "June 2025 – Present",
    tags: ["PHP", "TypeScript", "React", "MySQL"],
    bullets: [
      "Built client dashboards improving workflows for 37,500+ clients.",
      "Optimized SQL queries, generating reports 30% faster.",
      "Created automated dashboards, cutting support tickets by 25%.",
      "Resolved vulnerabilities, reducing security risks by 20%.",
    ],
    active: true,
  },
  {
    company: "NASA / Boeing",
    role: "Software Engineer Intern",
    dates: "May 2024 – May 2025",
    tags: ["Python", "PyQt", "SQLite"],
    bullets: [
      "Automated VLAN switching + port toggling — reduced manual steps by 80%.",
      "Built a SQLite IP lookup tool that improved retrieval speed by 40%.",
      "Demoed tools to NASA/Boeing engineers for long-term maintainability.",
    ],
  },
  {
    company: "University of Houston",
    role: "Teaching Assistant",
    dates: "Jan 2024 – May 2025",
    tags: ["C++", "Mentorship"],
    bullets: [
      "Led labs + office hours for 120+ students; +25% completion rates.",
      "One-on-one debugging guidance, -20% assignment errors.",
    ],
  },
];

function JobCard({ job }) {
  return (
    <div style={{ position: "relative", marginBottom: 40 }}>
      {/* rail dot */}
      <div style={{
        position: "absolute", left: -28, top: 22,
        width: 16, height: 16, borderRadius: "50%",
        background: job.active ? "#E4B567" : "#CEAB93",
        border: "3px solid #FFFBE9",
        boxShadow: "0 0 0 2px " + (job.active ? "#E4B567" : "#CEAB93"),
      }} />
      <div style={{
        background: "#FFFDF4",
        border: "2px solid #AD8B73",
        borderRadius: 8,
        padding: "22px 28px",
        boxShadow: "0 2px 0 0 #8C6E572A",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 4 }}>
          <h3 style={{
            fontFamily: "var(--font-mono)",
            fontSize: 22, fontWeight: 700, color: "#AD8B73",
            margin: 0, letterSpacing: "-0.01em",
          }}>
            {job.role} <span style={{ color: "#C49673", fontWeight: 400 }}>—</span> {job.company}
          </h3>
          {job.active && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#E4B56733", color: "#8C6E57",
              padding: "3px 10px", borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E4B567" }} />
              NOW
            </span>
          )}
        </div>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12, color: "#C99340", fontWeight: 600,
          letterSpacing: "0.02em", marginBottom: 14,
        }}>{job.dates}</div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {job.tags.map(t => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11, color: "#8C6E57",
              padding: "2px 8px", background: "#F7EFD6",
              border: "1px solid #EADFC0", borderRadius: 3,
            }}>{t}</span>
          ))}
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {job.bullets.map((b, i) => (
            <li key={i} style={{
              display: "flex", gap: 10,
              fontFamily: "var(--font-mono)",
              fontSize: 14, lineHeight: 1.6, color: "#6B5240",
              padding: "3px 0",
            }}>
              <span style={{ color: "#AD8B73", fontWeight: 700 }}>▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" style={{
      padding: "96px 80px",
      background: "#FFFBE9",
      borderBottom: "1px dashed #EADFC0",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#C49673", marginBottom: 8,
          }}>02 / 04</div>
          <h2 style={{
            fontFamily: "var(--font-mono)",
            fontSize: 44, fontWeight: 700,
            color: "#AD8B73",
            margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1,
          }}>
            <span style={{ color: "#C49673", marginRight: 10 }}>&gt;</span>Work Experience
          </h2>
        </div>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          {/* vertical rail */}
          <div style={{
            position: "absolute", left: 7, top: 8, bottom: 8,
            width: 2, background: "#EADFC0",
          }} />
          {jobs.map((j, i) => <JobCard key={i} job={j} />)}
        </div>
      </div>
    </section>
  );
}

export default Experience;
