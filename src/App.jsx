import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opening from "./pages/Opening";
import Main from "./main";
import Layout from "./Layout";
import resume from "./Images/Alkhalily_Reem.pdf";

function App() {
  return (
    <Router>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 bg-[#AD8B73] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#CEAB93] transition duration-300"
      >
        View Resume
      </a>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Opening />} />
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
