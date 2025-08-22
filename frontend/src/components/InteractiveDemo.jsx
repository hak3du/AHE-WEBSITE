import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Lock, Unlock, Copy, RefreshCw, Zap } from 'lucide-react';
import { mockEncryptionData } from '../utils/mock';

export const InteractiveDemo = () => {
  const [plainText, setPlainText] = useState('Hello, World! This is a secret message.');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('AES-256');
  const [isEncrypting, setIsEncrypting] = useState(false);

  const algorithms = mockEncryptionData.demoAlgorithms;

  const simulateEncryption = async () => {
    setIsEncrypting(true);
    
    // Simulate encryption process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockEncrypted = btoa(plainText).split('').reverse().join('') + '_encrypted_' + selectedAlgorithm.replace('-', '');
    setEncryptedText(mockEncrypted);
    setIsEncrypting(false);
  };

  const simulateDecryption = async () => {
    if (!encryptedText) return;
    
    setIsEncrypting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simple mock decryption
    setDecryptedText(plainText);
    setIsEncrypting(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="dark-full-container space-y-16 py-20">
      <div className="text-center space-y-6">
        <h2 className="display-large">Interactive Encryption Demo</h2>
        <p className="body-large max-w-3xl mx-auto text-text-secondary">
          Experience encryption in real-time. Enter your text, select an algorithm, and watch the magic happen.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="encrypt" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="encrypt" className="space-x-2">
              <Lock className="h-4 w-4" />
              <span>Encrypt</span>
            </TabsTrigger>
            <TabsTrigger value="decrypt" className="space-x-2">
              <Unlock className="h-4 w-4" />
              <span>Decrypt</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="encrypt" className="space-y-6">
            <Card className="p-8 space-y-6 bg-bg-secondary border-border-subtle">
              <div className="space-y-4">
                <label className="heading-3">Choose Algorithm</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {algorithms.map((algo) => (
                    <button
                      key={algo.name}
                      onClick={() => setSelectedAlgorithm(algo.name)}
                      className={`p-4 border-2 dark-transition ${
                        selectedAlgorithm === algo.name
                          ? 'border-brand-primary bg-brand-hover'
                          : 'border-border-subtle hover:border-brand-primary'
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <div className="heading-3">{algo.name}</div>
                        <div className="body-small text-text-muted">{algo.keySize}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="heading-3">Plain Text</label>
                <Textarea
                  value={plainText}
                  onChange={(e) => setPlainText(e.target.value)}
                  placeholder="Enter your message to encrypt..."
                  className="min-h-32 bg-bg-primary border-border-subtle"
                />
              </div>

              <Button 
                onClick={simulateEncryption}
                disabled={isEncrypting || !plainText.trim()}
                className="btn-primary w-full"
              >
                {isEncrypting ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Encrypting...</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    <span>Encrypt with {selectedAlgorithm}</span>
                  </>
                )}
              </Button>

              {encryptedText && (
                <div className="space-y-4">
                  <label className="heading-3">Encrypted Text</label>
                  <div className="relative">
                    <Textarea
                      value={encryptedText}
                      readOnly
                      className="min-h-32 bg-bg-primary border-brand-primary font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(encryptedText)}
                      className="absolute top-3 right-3 p-2 bg-brand-primary text-black hover:bg-brand-active dark-transition"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="decrypt" className="space-y-6">
            <Card className="p-8 space-y-6 bg-bg-secondary border-border-subtle">
              <div className="space-y-4">
                <label className="heading-3">Encrypted Text</label>
                <Textarea
                  value={encryptedText}
                  onChange={(e) => setEncryptedText(e.target.value)}
                  placeholder="Paste encrypted text here..."
                  className="min-h-32 bg-bg-primary border-border-subtle font-mono"
                />
              </div>

              <Button 
                onClick={simulateDecryption}
                disabled={isEncrypting || !encryptedText.trim()}
                className="btn-primary w-full"
              >
                {isEncrypting ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Decrypting...</span>
                  </>
                ) : (
                  <>
                    <Unlock className="h-5 w-5" />
                    <span>Decrypt Message</span>
                  </>
                )}
              </Button>

              {decryptedText && (
                <div className="space-y-4">
                  <label className="heading-3">Decrypted Text</label>
                  <Textarea
                    value={decryptedText}
                    readOnly
                    className="min-h-32 bg-bg-primary border-brand-primary"
                  />
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};