import React, { useState } from 'react';
import { Key, Shield, Cpu, Globe, Lock, Unlock } from 'lucide-react';
import { Card } from './ui/card';
import { mockEncryptionData } from '../utils/mock';

export const EncryptionMethods = () => {
  const [activeMethod, setActiveMethod] = useState(0);
  const methods = mockEncryptionData.methods;

  return (
    <section className="dark-full-container space-y-16 py-20">
      <div className="text-center space-y-6">
        <h2 className="display-large">Encryption Methods</h2>
        <p className="body-large max-w-3xl mx-auto text-text-secondary">
          Explore the fundamental encryption algorithms that secure our digital communications and protect sensitive data.
        </p>
      </div>

      <div className="dark-grid">
        {methods.map((method, index) => (
          <Card 
            key={method.id}
            className={`dark-transition cursor-pointer p-8 space-y-6 ${
              activeMethod === index ? 'border-brand-primary bg-bg-secondary' : 'border-border-subtle bg-bg-primary hover:border-brand-primary'
            }`}
            onClick={() => setActiveMethod(index)}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-hover rounded-lg">
                {method.icon === 'key' && <Key className="h-6 w-6 text-brand-primary" />}
                {method.icon === 'shield' && <Shield className="h-6 w-6 text-brand-primary" />}
                {method.icon === 'cpu' && <Cpu className="h-6 w-6 text-brand-primary" />}
                {method.icon === 'globe' && <Globe className="h-6 w-6 text-brand-primary" />}
              </div>
              <div>
                <h3 className="heading-2">{method.name}</h3>
                <div className="body-small text-brand-primary">{method.type}</div>
              </div>
            </div>

            <p className="body-medium text-text-secondary">{method.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="body-small text-text-muted">Security Level</span>
                <span className="body-small font-medium text-brand-primary">{method.security}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="body-small text-text-muted">Speed</span>
                <span className="body-small font-medium text-brand-primary">{method.speed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="body-small text-text-muted">Use Cases</span>
                <span className="body-small font-medium text-brand-primary">{method.useCase}</span>
              </div>
            </div>

            {activeMethod === index && (
              <div className="space-y-4 pt-4 border-t border-border-subtle">
                <h4 className="heading-3">How it Works</h4>
                <p className="body-small text-text-secondary">{method.howItWorks}</p>
                
                <div className="flex space-x-4">
                  <button className="btn-primary flex-1">
                    <Lock className="h-4 w-4" />
                    <span>Encrypt Demo</span>
                  </button>
                  <button className="btn-secondary flex-1">
                    <Unlock className="h-4 w-4" />
                    <span>Decrypt Demo</span>
                  </button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};