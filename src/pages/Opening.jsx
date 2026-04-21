import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rocket from "../Images/Rocket.png";

function Opening() {
  const [input, setInput] = useState("");
  const [launching, setLaunching] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => { inputRef.current?.focus(); }, []);

  const onKey = (e) => {
    if (e.key === "Enter" && input.trim() === ".run") {
      setLaunching(true);
      setTimeout(() => navigate("/main"), 1400);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FFFBE9",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 40, position: "relative", overflow: "hidden",
    }}>
      {/* dot grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(#E3CAA5 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        opacity: 0.35, pointerEvents: "none",
      }} />

      <div style={{ width: "100%", maxWidth: 720, position: "relative" }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11, color: "#C49673",
          textTransform: "uppercase", letterSpacing: "0.16em",
          marginBottom: 14,
        }}>
          ● CONNECTION SECURE · session #0042
        </div>

        {/* Terminal window */}
        <div style={{
          background: "#3D2E22", borderRadius: 12, overflow: "hidden",
          boxShadow: "0 20px 40px -16px #3D2E2259, 0 8px 16px -8px #3D2E2233",
          fontFamily: "var(--font-mono)",
        }}>
          {/* Chrome bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "12px 16px",
            background: "#231812",
            borderBottom: "1px solid #00000055",
          }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#B5643A" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#E4B567" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#7A8A5C" }} />
            <div style={{
              marginLeft: "auto", marginRight: "auto",
              color: "#CEAB93", fontSize: 12, letterSpacing: "0.04em",
            }}>reem@portfolio ~ %</div>
          </div>

          {/* Terminal body */}
          <div style={{ padding: "20px 24px", color: "#FFFBE9", fontSize: 15, lineHeight: 1.6 }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#E4B567", fontWeight: 700, marginRight: 8 }}>&gt;</span>
              Hey! Curious to see my website?
            </div>
            <div style={{ marginBottom: 12, color: "#C49673" }}>
              <span style={{ color: "#E4B567", fontWeight: 700, marginRight: 8 }}>&gt;</span>
              Please type <span style={{ color: "#FFFBE9" }}>".run"</span> to open it.
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#E4B567", fontWeight: 700, marginRight: 8 }}>&gt;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder=".run"
                style={{
                  background: "transparent", border: 0, outline: "none",
                  color: "#FFFBE9", fontFamily: "inherit",
                  fontSize: 15, flex: 1, caretColor: "#E4B567",
                }}
              />
              <span style={{
                display: "inline-block", width: 9, height: 18,
                background: "#E4B567", verticalAlign: "text-bottom",
                marginLeft: 3,
                animation: "rk-blink 1s steps(1) infinite",
              }} />
            </div>
            {launching && (
              <div style={{
                marginTop: 16, paddingTop: 12,
                borderTop: "1px dashed #6B5240",
                color: "#7A8A5C", fontSize: 13,
              }}>
                ● launching… rendering portfolio → /main
              </div>
            )}
          </div>
        </div>

        <div style={{
          marginTop: 18, display: "flex", gap: 10, alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11, color: "#C49673",
        }}>
          <span>TIP:</span>
          <code style={{ background: "#F7EFD6", padding: "2px 6px", borderRadius: 3, color: "#8C6E57" }}>.run</code>
          <span>+</span>
          <code style={{ background: "#F7EFD6", padding: "2px 6px", borderRadius: 3, color: "#8C6E57" }}>↵ enter</code>
        </div>
      </div>

      {/* Rocket mascot */}
      <img
        src={Rocket}
        alt="rocket"
        style={{
          position: "fixed", bottom: 24, right: 120,
          width: 120, height: "auto",
          animation: launching
            ? "rk-launch 1.4s ease-in forwards"
            : "rk-shake 0.6s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export default Opening;
