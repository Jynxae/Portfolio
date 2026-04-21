import React from "react";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Main() {
  return (
    <div style={{ paddingTop: 61 }}>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{
        background: "#3D2E22", color: "#CEAB93",
        padding: "40px 80px",
        fontFamily: "var(--font-mono)", fontSize: 12,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>© 2026 reemalkhalily.com · made with :D</div>
        <div><span style={{ color: "#E4B567" }}>&gt;</span> end of transmission_</div>
      </footer>
    </div>
  );
}

export default Main;
