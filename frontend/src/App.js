import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CyberpunkHeader } from "./components/CyberpunkHeader";
import { CyberpunkHero } from "./components/CyberpunkHero";
import { NewsSection } from "./components/NewsSection";
import { TechSpecs } from "./components/TechSpecs";

const CyberpunkHome = () => {
  return (
    <div className="cyberpunk-app">
      <CyberpunkHeader />
      <main>
        <CyberpunkHero />
        <NewsSection />
        <TechSpecs />
      </main>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CyberpunkHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;