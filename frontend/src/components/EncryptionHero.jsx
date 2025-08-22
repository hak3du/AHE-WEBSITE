import React from 'react';
import { Shield, Lock, Key, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export const EncryptionHero = () => {
  return (
    <section className="dark-full-container">
      <div className="flex min-h-screen items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-brand-primary" />
              <span className="body-large text-brand-primary">Modern Encryption Academy</span>
            </div>
            
            <h1 className="display-huge">
              Master the Art of{' '}
              <span className="text-brand-primary">Modern Encryption</span>
            </h1>
            
            <p className="body-large max-w-2xl">
              Dive deep into cryptographic algorithms, quantum-resistant protocols, and cutting-edge security methods that protect our digital world.
            </p>
          </div>

          <div className="flex space-x-6">
            <button className="btn-primary">
              <span>Start Learning</span>
              <Key className="h-5 w-5" />
            </button>
            <button className="btn-secondary">
              <span>Explore Demos</span>
              <Zap className="h-5 w-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex space-x-12 pt-8">
            <div>
              <div className="display-medium text-brand-primary">256</div>
              <div className="body-muted">Bit Encryption</div>
            </div>
            <div>
              <div className="display-medium text-brand-primary">12+</div>
              <div className="body-muted">Algorithms</div>
            </div>
            <div>
              <div className="display-medium text-brand-primary">100%</div>
              <div className="body-muted">Quantum Ready</div>
            </div>
          </div>
        </div>

        {/* Right Spline Animation */}
        <div className="flex-1 flex justify-center">
          <div style={{ width: "700px", height: "700px", overflow: "visible", position: "relative" }}>
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};