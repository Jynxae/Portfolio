import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Rocket from "./Images/Rocket.png";
import resume from "./Images/Alkhalily_Reem.pdf";

const navLink = {
  fontFamily: "var(--font-mono)",
  fontSize: 13, color: "#8C6E57",
  textDecoration: "none", letterSpacing: "0.02em",
};

const btnStyle = (hover) => ({
  fontFamily: "var(--font-mono)",
  fontSize: 13, fontWeight: 500,
  padding: "8px 16px",
  background: hover ? "#CEAB93" : "#AD8B73",
  color: "#FFFDF4",
  border: 0, borderRadius: 4,
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
  transition: "background 200ms",
});

function TopBar() {
  const [hover, setHover] = React.useState(false);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 30,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 32px",
      background: "rgba(255,251,233,0.9)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #EADFC0",
      fontFamily: "var(--font-mono)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src={Rocket} alt="" style={{ width: 22, height: 28 }} />
        <span style={{ fontSize: 13, color: "#8C6E57", fontWeight: 600, letterSpacing: "0.01em" }}>
          reemalkhalily.com
        </span>
        <span style={{ fontSize: 11, color: "#CEAB93", marginLeft: 4 }}>— v2.0</span>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#about"      style={navLink}>about</a>
        <a href="#experience" style={navLink}>experience</a>
        <a href="#projects"   style={navLink}>projects</a>
        <a href="#contact"    style={navLink}>contact</a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          style={btnStyle(hover)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          View Resume →
        </a>
      </nav>
    </header>
  );
}

function Layout() {
  const location = useLocation();
  const isMain = location.pathname === "/main";

  return (
    <div>
      {isMain && <TopBar />}
      <Outlet />
    </div>
  );
}

export default Layout;
