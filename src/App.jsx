import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opening from "./pages/Opening";
import Main from "./main";
import Layout from "./Layout";

function App() {
  return (
    <Router>
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
