import React, { useEffect, useState } from 'react';
import { Cpu, Database, Lock, Gauge, Globe, Shield } from 'lucide-react';
import { Card } from './ui/card';

export const TechSpecs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technicalSpecs = [
    {
      icon: Cpu,
      title: "Adaptive Algorithm",
      description: "Dynamic hash functions that evolve based on threat patterns and data characteristics",
      metrics: ["Real-time adaptation", "Self-optimizing", "ML-driven evolution"]
    },
    {
      icon: Database, 
      title: "Scalable Architecture",
      description: "Enterprise-grade infrastructure supporting millions of concurrent operations",
      metrics: ["10M+ TPS", "Global distribution", "Zero downtime"]
    },
    {
      icon: Lock,
      title: "Quantum Resistance",
      description: "Post-quantum cryptographic principles integrated into core hashing mechanisms",
      metrics: ["Future-proof security", "Quantum-safe algorithms", "256-bit entropy"]
    },
    {
      icon: Gauge,
      title: "Performance Optimized", 
      description: "Hardware-accelerated processing with minimal computational overhead",
      metrics: ["<1ms latency", "99.99% uptime", "Auto-scaling"]
    }
  ];

  const comparisonData = [
    { metric: "Speed", traditional: "100 ops/sec", ahe: "100,000 ops/sec", improvement: "1000x" },
    { metric: "Security Level", traditional: "Static", ahe: "Adaptive", improvement: "∞" },
    { metric: "Quantum Ready", traditional: "No", ahe: "Yes", improvement: "Future-proof" },
    { metric: "Resource Usage", traditional: "High", ahe: "Minimal", improvement: "90% less" }
  ];

  return (
    <section className="tech-specs-section">
      {/* Parallax Background */}
      <div 
        className="tech-bg-grid"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      <div className="tech-container">
        {/* Section Header */}
        <div className="tech-header">
          <div className="tech-label">TECHNICAL SPECIFICATIONS</div>
          <h2 className="tech-title">
            INSIDE THE <span className="text-brand-primary">AHE ENGINE</span>
          </h2>
          <p className="tech-subtitle">
            Revolutionary cryptographic technology built for the next decade of digital security challenges
          </p>
        </div>

        {/* Technical Features Grid */}
        <div className="tech-grid">
          {technicalSpecs.map((spec, index) => (
            <Card key={index} className="tech-card">
              <div 
                className="tech-card-content"
                style={{ transform: `translateY(${scrollY * (0.05 * (index + 1))}px)` }}
              >
                <div className="tech-icon-container">
                  <spec.icon className="h-8 w-8 text-brand-primary" />
                </div>
                
                <h3 className="tech-card-title">{spec.title}</h3>
                <p className="tech-card-description">{spec.description}</p>
                
                <div className="tech-metrics">
                  {spec.metrics.map((metric, i) => (
                    <div key={i} className="metric-tag">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="comparison-section">
          <h3 className="comparison-title">AHE vs Traditional Encryption</h3>
          
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="header-cell">Metric</div>
              <div className="header-cell">Traditional</div>
              <div className="header-cell">AHE</div>
              <div className="header-cell">Improvement</div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div key={index} className="comparison-row">
                <div className="row-cell metric-name">{row.metric}</div>
                <div className="row-cell traditional">{row.traditional}</div>
                <div className="row-cell ahe">{row.ahe}</div>
                <div className="row-cell improvement">{row.improvement}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview */}
        <div className="code-preview">
          <div className="code-header">
            <Globe className="h-5 w-5" />
            <span>AHE Implementation Preview</span>
          </div>
          
          <div className="code-block">
            <div className="code-line">
              <span className="code-comment">// Initialize AHE with adaptive parameters</span>
            </div>
            <div className="code-line">
              <span className="code-keyword">const</span> ahe = <span className="code-function">new</span> <span className="code-class">AdaptiveHashingEncryption</span>({
            </div>
            <div className="code-line">
              &nbsp;&nbsp;quantumResistant: <span className="code-boolean">true</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;adaptationRate: <span className="code-number">0.1</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;securityLevel: <span className="code-string">'military'</span>
            </div>
            <div className="code-line">
              });
            </div>
            <div className="code-line">
              <br/>
            </div>
            <div className="code-line">
              <span className="code-comment">// Encrypt with automatic optimization</span>
            </div>
            <div className="code-line">
              <span className="code-keyword">const</span> encrypted = <span className="code-keyword">await</span> ahe.<span className="code-function">encrypt</span>(sensitiveData);
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};