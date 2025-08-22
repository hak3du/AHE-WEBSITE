import React, { useState, useEffect } from 'react';
import { Shield, Menu, Globe, Activity } from 'lucide-react';

export const CyberpunkHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="cyber-header">
      {/* Top Status Bar */}
      <div className="cyber-status-bar">
        <div className="status-left">
          <Activity className="h-4 w-4 text-brand-primary" />
          <span>SYSTEM ONLINE</span>
          <span className="separator">•</span>
          <Globe className="h-4 w-4" />
          <span>GLOBAL NETWORK</span>
        </div>
        
        <div className="status-center">
          <div className="live-time">
            {currentTime.toLocaleTimeString()} UTC
          </div>
        </div>
        
        <div className="status-right">
          <span>SECURITY LEVEL: MAXIMUM</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="cyber-nav">
        <div className="nav-brand">
          <Shield className="brand-icon" />
          <div className="brand-text">
            <span className="brand-name">AHE</span>
            <span className="brand-tagline">ENCRYPTION</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#breaking" className="nav-link active">BREAKING</a>
          <a href="#technology" className="nav-link">TECHNOLOGY</a>
          <a href="#business" className="nav-link">BUSINESS</a>
          <a href="#research" className="nav-link">RESEARCH</a>
          <a href="#deployment" className="nav-link">DEPLOYMENT</a>
        </div>

        <div className="nav-actions">
          <button className="access-btn">
            SECURE ACCESS
          </button>
          
          <button className="mobile-menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};