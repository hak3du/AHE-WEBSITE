import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { EncryptionHero } from "./components/EncryptionHero";
import { EncryptionMethods } from "./components/EncryptionMethods";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { Footer } from "./components/Footer";

const Home = () => {
  return (
    <div className="dark-container">
      <Header />
      <main>
        <section id="home">
          <EncryptionHero />
        </section>
        <section id="methods">
          <EncryptionMethods />
        </section>
        <section id="demo">
          <InteractiveDemo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;