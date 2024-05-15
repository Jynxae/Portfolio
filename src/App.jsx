import "./App.css";
import React from "react";
import Navbar from "./navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
