import React, { useState, useEffect } from "react";
import SplashScreen from "../Images/SplashScreen.png";
import TransactionView from "../Images/TransactionView.png";
import AddTransactionView from "../Images/AddTransactionView.png";
import MonthlyReport from "../Images/MonthlyReport.png";
import ProfileView from "../Images/ProfileView.png";
import SettingsView from "../Images/SettingsView.png";
import EditBudgetView from "../Images/EditBudgetView.png";
import SpaceGuard from "../Images/Space Guard.png";

function Button({ children, variant = "primary", href, onClick }) {
  const [hover, setHover] = useState(false);
  const base = {
    fontFamily: "var(--font-mono)",
    fontSize: 14,
    fontWeight: 500,
    padding: "10px 20px",
    border: 0,
    borderRadius: 4,
    cursor: "pointer",
    transition: "all 200ms",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };
  const styles = {
    primary: {
      background: hover ? "#CEAB93" : "#AD8B73",
      color: "#FFFDF4",
      boxShadow: hover ? "0 4px 10px -2px #8C6E5733" : "0 2px 0 0 #8C6E5733",
    },
    secondary: {
      background: "transparent",
      color: hover ? "#8C6E57" : "#AD8B73",
      border: "2px solid " + (hover ? "#8C6E57" : "#AD8B73"),
      padding: "8px 18px",
    },
  };
  const props = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: { ...base, ...styles[variant] },
    onClick,
  };
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <button {...props}>{children}</button>
  );
}

function PhoneCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 2600);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div style={{ position: "relative", width: 200, height: 400 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#3D2E22",
          borderRadius: 28,
          padding: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#000",
            borderRadius: 22,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === idx ? 1 : 0,
                transition: "opacity 500ms",
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -24,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: i === idx ? "#AD8B73" : "#CEAB93",
              border: 0,
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const piggyBankImages = [
  SplashScreen,
  TransactionView,
  AddTransactionView,
  EditBudgetView,
  MonthlyReport,
  SettingsView,
  ProfileView,
];

const projects = {
  piggybank: {
    title: "PiggyBank",
    desc: "A budgeting app that helps users log transactions, set budgets, and track spending through clean UI screens and automated reports using the 50/30/20 rule.",
    year: "2024",
    tags: ["SwiftUI", "Firebase"],
    code: "https://github.com/Jynxae/Team1_BudgetApp",
    images: piggyBankImages,
    kind: "screens",
  },
  spaceguard: {
    title: "Space Guard",
    desc: "Empowers casual astronomers to report and track orbital debris — supporting NASA in identifying potential hazards in low Earth orbit.",
    year: "2024",
    tags: ["React", "Node.js", "Tailwind CSS", "Express.js", "MySQL"],
    code: "https://github.com/Jynxae/JSCHack",
    images: [SpaceGuard],
    kind: "full",
  },
  baker: {
    title: "The Baker Museum",
    desc: "A full-stack web app that allows users to explore museum collections. Staff can manage and update artwork records, ensuring an engaging browsing experience.",
    year: "2024",
    tags: ["React.js", "MySQL", "Tailwind CSS"],
    code: "https://github.com/Ashishjob/museuma",
    site: "https://www.bakermuseum.art/",
    images: [],
    kind: "iframe",
  },
};

function Projects() {
  const [active, setActive] = useState("piggybank");
  const p = projects[active];
  const keys = Object.keys(projects);

  return (
    <section
      id="projects"
      style={{
        padding: "96px 80px",
        background: "#FFFBE9",
        borderBottom: "1px dashed #EADFC0",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#C49673",
              marginBottom: 8,
            }}
          >
            03 / 04
          </div>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 44,
              fontWeight: 700,
              color: "#AD8B73",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#C49673", marginRight: 10 }}>&gt;</span>
            Projects
          </h2>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: 0,
            marginBottom: 0,
            borderBottom: "2px solid #EADFC0",
          }}
        >
          {keys.map((k, ki) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 600,
                padding: "12px 20px",
                cursor: "pointer",
                background: "transparent",
                border: 0,
                color: active === k ? "#AD8B73" : "#C49673",
                borderBottom:
                  active === k ? "2px solid #AD8B73" : "2px solid transparent",
                marginBottom: -2,
                letterSpacing: "0.01em",
              }}
            >
              <span style={{ color: "#C49673", marginRight: 6 }}>
                {String(ki + 1).padStart(2, "0")}
              </span>
              {projects[k].title}
            </button>
          ))}
        </div>

        {/* Body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 48,
            padding: "36px 0",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#C99340",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: 10,
              }}
            >
              ◆ {p.year}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 64,
                fontWeight: 400,
                lineHeight: 1,
                color: "#AD8B73",
                margin: "0 0 16px 0",
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 19,
                lineHeight: 1.6,
                color: "#6B5240",
                margin: "0 0 20px 0",
              }}
            >
              {p.desc}
            </p>
            <div
              style={{
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#8C6E57",
                    padding: "3px 10px",
                    background: "#F7EFD6",
                    border: "1px solid #EADFC0",
                    borderRadius: 3,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Button href={p.code}>View Code →</Button>
              {p.site && (
                <Button variant="secondary" href={p.site}>
                  Live Site ↗
                </Button>
              )}
            </div>
          </div>

          {/* Preview panel */}
          <div
            style={{
              background: "#F7EFD6",
              border: "2px solid #AD8B73",
              borderRadius: 8,
              padding: 12,
              minHeight: 340,
              boxShadow: "0 4px 10px -2px #8C6E5733",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {p.kind === "screens" && <PhoneCarousel images={p.images} />}
            {p.kind === "full" && (
              <img
                src={p.images[0]}
                alt={p.title}
                style={{ width: "100%", borderRadius: 4 }}
              />
            )}
            {p.kind === "iframe" && (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "#FFFDF4",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C49673",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  textAlign: "center",
                  padding: 20,
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>◆</div>
                  bakermuseum.art
                  <br />
                  <br />
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#AD8B73" }}
                  >
                    → open live site
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
