import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="dark-full-container border-t border-border-subtle py-16">
      <div className="dark-content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-brand-primary" />
              <span className="heading-2">CryptoAcademy</span>
            </div>
            <p className="body-medium text-text-secondary max-w-sm">
              Empowering the next generation of security professionals with comprehensive encryption education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-bg-secondary hover:bg-brand-hover dark-transition">
                <Github className="h-5 w-5 text-text-primary" />
              </a>
              <a href="#" className="p-2 bg-bg-secondary hover:bg-brand-hover dark-transition">
                <Twitter className="h-5 w-5 text-text-primary" />
              </a>
              <a href="#" className="p-2 bg-bg-secondary hover:bg-brand-hover dark-transition">
                <Linkedin className="h-5 w-5 text-text-primary" />
              </a>
              <a href="#" className="p-2 bg-bg-secondary hover:bg-brand-hover dark-transition">
                <Mail className="h-5 w-5 text-text-primary" />
              </a>
            </div>
          </div>

          {/* Learn */}
          <div className="space-y-6">
            <h3 className="heading-3">Learn</h3>
            <div className="space-y-3">
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Fundamentals</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Algorithms</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Quantum Crypto</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Best Practices</a>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-6">
            <h3 className="heading-3">Tools</h3>
            <div className="space-y-3">
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Interactive Demo</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Key Generator</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Hash Calculator</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Certificate Tools</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="heading-3">Resources</h3>
            <div className="space-y-3">
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Documentation</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Tutorials</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Research Papers</a>
              <a href="#" className="block body-medium text-text-secondary hover:text-brand-primary dark-transition">Community</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="body-small text-text-muted">
              © 2025 CryptoAcademy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="body-small text-text-muted hover:text-brand-primary dark-transition">Privacy Policy</a>
              <a href="#" className="body-small text-text-muted hover:text-brand-primary dark-transition">Terms of Service</a>
              <a href="#" className="body-small text-text-muted hover:text-brand-primary dark-transition">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};