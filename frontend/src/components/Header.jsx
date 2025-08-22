import React from 'react';
import { Shield, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="dark-header">
      <div className="flex items-center space-x-3">
        <Shield className="dark-logo text-brand-primary" />
        <span className="heading-2">CryptoAcademy</span>
      </div>

      <nav className="dark-nav">
        <a href="#home" className="dark-nav-link active">Home</a>
        <a href="#methods" className="dark-nav-link">Methods</a>
        <a href="#demo" className="dark-nav-link">Demo</a>
        <a href="#learn" className="dark-nav-link">Learn</a>
        <a href="#about" className="dark-nav-link">About</a>
      </nav>

      <button className="btn-primary">
        <span>Get Started</span>
      </button>

      {/* Mobile menu button */}
      <button className="md:hidden p-2 text-text-primary">
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
};