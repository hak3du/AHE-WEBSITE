import React from 'react';
import { Clock, Users, Building, Code, Shield, Zap } from 'lucide-react';
import { Card } from './ui/card';

export const NewsSection = () => {
  const newsItems = [
    {
      category: "TECH",
      headline: "AHE Protocol Breaks Speed Barriers in Enterprise Testing",
      summary: "Major corporations report 1000x performance improvement over traditional encryption methods",
      timestamp: "2 MIN AGO",
      priority: "high"
    },
    {
      category: "BUSINESS", 
      headline: "Fortune 500 Companies Rush to Adopt AHE Technology",
      summary: "Early adopters see 89% reduction in computational overhead while maintaining military-grade security",
      timestamp: "15 MIN AGO",
      priority: "medium"
    },
    {
      category: "SECURITY",
      headline: "Quantum Computing Threat Neutralized by Adaptive Hashing",
      summary: "AHE's revolutionary approach renders quantum attacks ineffective through dynamic key evolution",
      timestamp: "1 HOUR AGO", 
      priority: "high"
    }
  ];

  const businessMetrics = [
    { icon: Building, label: "Enterprise Ready", value: "Day 1" },
    { icon: Users, label: "Global Deployment", value: "24/7" },
    { icon: Shield, label: "Compliance", value: "SOC2/ISO27001" },
    { icon: Zap, label: "ROI Timeline", value: "< 30 Days" }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        
        {/* Live Feed Header */}
        <div className="news-header">
          <div className="live-indicator">
            <div className="live-dot"></div>
            <span>LIVE COVERAGE</span>
          </div>
          <h2 className="news-title">AHE ENCRYPTION UPDATES</h2>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <Card key={index} className={`news-card ${item.priority === 'high' ? 'priority-high' : ''}`}>
              <div className="news-card-header">
                <span className="news-category">{item.category}</span>
                <div className="news-timestamp">
                  <Clock className="h-4 w-4" />
                  {item.timestamp}
                </div>
              </div>
              
              <h3 className="news-headline">{item.headline}</h3>
              <p className="news-summary">{item.summary}</p>
              
              <button className="news-read-more">
                READ FULL STORY →
              </button>
            </Card>
          ))}
        </div>

        {/* Business Intelligence Section */}
        <div className="business-intelligence">
          <div className="bi-header">
            <Building className="h-6 w-6 text-brand-primary" />
            <h3>BUSINESS INTELLIGENCE</h3>
          </div>
          
          <div className="business-metrics">
            {businessMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <metric.icon className="h-8 w-8 text-brand-primary" />
                <div className="metric-content">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="business-cta">
            <h4>Enterprise Implementation Package</h4>
            <p>Complete AHE deployment with dedicated support, training, and 24/7 monitoring</p>
            <button className="business-contact-btn">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>

        {/* Market Data Ticker */}
        <div className="market-ticker">
          <div className="ticker-content">
            <span>AHE ADOPTION: +2847% • SECURITY INCIDENTS: -99.2% • PERFORMANCE: +1000% • MARKET CAP: $2.3B • </span>
          </div>
        </div>
      </div>
    </section>
  );
};