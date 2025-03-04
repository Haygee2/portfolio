import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add this import
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
