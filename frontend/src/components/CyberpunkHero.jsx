import React, { useEffect, useState } from 'react';
import { Shield, Zap, Globe, TrendingUp } from 'lucide-react';

export const CyberpunkHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cyber-hero-container">
      {/* Parallax Background Elements */}
      <div 
        className="cyber-bg-layer-1"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div 
        className="cyber-bg-layer-2"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Breaking News Banner */}
      <div className="breaking-banner">
        <div className="breaking-ticker">
          <span className="breaking-label">BREAKING</span>
          <span className="breaking-text">Revolutionary AHE Protocol Disrupts Encryption Industry • Quantum-Resistant Technology Unveiled • </span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="cyber-hero-content">
        <div className="cyber-timestamp">
          EXCLUSIVE • LIVE • {new Date().toLocaleString().toUpperCase()}
        </div>
        
        <h1 className="cyber-headline">
          <span className="cyber-highlight">AHE</span><br/>
          ADAPTIVE HASHING<br/>
          ENCRYPTION
        </h1>

        <div className="cyber-subtitle">
          The Next Evolution in Cryptographic Security Has Arrived
        </div>

        <div className="cyber-stats-grid">
          <div className="cyber-stat">
            <div className="stat-number">1000x</div>
            <div className="stat-label">FASTER</div>
          </div>
          <div className="cyber-stat">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">SECURE</div>
          </div>
          <div className="cyber-stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">QUANTUM PROOF</div>
          </div>
        </div>

        <div className="cyber-cta-section">
          <button className="cyber-primary-btn">
            <Shield className="h-5 w-5" />
            DEPLOY NOW
          </button>
          <button className="cyber-secondary-btn">
            <Zap className="h-5 w-5" />
            READ WHITEPAPER
          </button>
        </div>
      </div>

      {/* Scrolling Code Background */}
      <div className="code-rain" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <div className="code-line">AHE_INIT() {hash_adapt: true, quantum_resist: enabled}</div>
        <div className="code-line">encrypt(data) → adaptive_hash_transform(data, key_rotation)</div>
        <div className="code-line">security_level: MILITARY_GRADE | performance: OPTIMIZED</div>
      </div>
    </section>
  );
};