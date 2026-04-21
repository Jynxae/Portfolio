import React from "react";

function StatRow({ k, v, last }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "8px 0",
        borderBottom: last ? 0 : "1px dashed #EADFC0",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
      }}
    >
      <span style={{ color: "#C49673" }}>{k}</span>
      <span style={{ color: "#8C6E57", fontWeight: 600 }}>{v}</span>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 80px 80px",
        background: "#FFFBE9",
        borderBottom: "1px dashed #EADFC0",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Name lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            marginBottom: 72,
            flexWrap: "wrap",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 108,
              fontWeight: 400,
              lineHeight: 0.95,
              color: "#AD8B73",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            I'm Reem
            <br />
            Alkhalily!
          </h1>
          <div
            style={{
              width: 3,
              height: 120,
              background: "#E3CAA5",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#C49673",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                marginBottom: 10,
              }}
            >
              ● now
            </div>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 32,
                fontWeight: 600,
                color: "#8C6E57",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Software Developer
              <br />
              <span style={{ color: "#C49673", fontWeight: 400 }}>
                @ Paycom
              </span>
            </h2>
          </div>
        </div>

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
            01 / 04
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
            <span style={{ color: "#C49673", marginRight: 10 }}>&gt;</span>About
            Me
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 56,
            alignItems: "start",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 22,
              lineHeight: 1.65,
              color: "#6B5240",
              margin: 0,
              maxWidth: 680,
            }}
          >
            Hello! <span style={{ color: "#AD8B73", fontWeight: 600 }}>:D</span>{" "}
            just a Houston native currently living in Dallas. I'm a software
            developer who loves building{" "}
            <em style={{ color: "#AD8B73", fontStyle: "italic" }}>
              clean, thoughtful experiences
            </em>{" "}
            with powerful tech behind them. Outside of coding, I'm usually
            exploring coffee shops, playing games, or hanging out with my
            kitten,{" "}
            <strong style={{ color: "#AD8B73", fontWeight: 600 }}>Blink</strong>
            . I'm also a huge space nerd (a sucker for space podcasts) and love
            meeting new people, learning new things, and discovering anything
            that sparks curiosity!
          </p>

          <div
            style={{
              background: "#FFFDF4",
              border: "2px solid #AD8B73",
              borderRadius: 6,
              padding: "20px 22px",
              boxShadow: "0 2px 0 0 #8C6E572A",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "#C49673",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: 14,
              }}
            >
              ~/stats
            </div>
            <StatRow k="location" v="Dallas, TX" />
            <StatRow k="hometown" v="Houston, TX" />
            <StatRow k="companion" v="Blink 🐈 " />
            <StatRow
              k="current game"
              v={
                <>
                  Valorant{" "}
                  <span
                    style={{ fontSize: 10, fontWeight: 400, color: "#C49673" }}
                  >
                    (we don't talk about my rank LOL)
                  </span>
                </>
              }
            />
            <StatRow k="vibe" v="always eating somewhere" last />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
