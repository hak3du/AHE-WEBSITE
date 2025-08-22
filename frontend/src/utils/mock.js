export const mockEncryptionData = {
  methods: [
    {
      id: 1,
      name: 'AES (Advanced Encryption Standard)',
      type: 'Symmetric',
      icon: 'shield',
      security: 'Military Grade',
      speed: 'Very Fast',
      useCase: 'File & Data',
      description: 'The gold standard for symmetric encryption, used by governments and organizations worldwide for protecting sensitive data.',
      howItWorks: 'AES uses a substitution-permutation network with key sizes of 128, 192, or 256 bits. It performs multiple rounds of encryption using SubBytes, ShiftRows, MixColumns, and AddRoundKey operations.'
    },
    {
      id: 2,
      name: 'RSA (Rivest-Shamir-Adleman)',
      type: 'Asymmetric',
      icon: 'key',
      security: 'Very High',
      speed: 'Moderate',
      useCase: 'Key Exchange',
      description: 'The most widely used public-key cryptosystem, essential for secure communications and digital signatures.',
      howItWorks: 'RSA relies on the mathematical difficulty of factoring large prime numbers. It uses a public-private key pair where the public key encrypts data that only the corresponding private key can decrypt.'
    },
    {
      id: 3,
      name: 'ECC (Elliptic Curve Cryptography)',
      type: 'Asymmetric',
      icon: 'cpu',
      security: 'Quantum Resistant',
      speed: 'Fast',
      useCase: 'Mobile & IoT',
      description: 'Provides the same level of security as RSA but with much smaller key sizes, making it perfect for resource-constrained devices.',
      howItWorks: 'ECC is based on the mathematical properties of elliptic curves. It achieves strong security with smaller keys by leveraging the difficulty of the elliptic curve discrete logarithm problem.'
    },
    {
      id: 4,
      name: 'ChaCha20-Poly1305',
      type: 'Stream Cipher',
      icon: 'globe',
      security: 'High',
      speed: 'Very Fast',
      useCase: 'Web & Mobile',
      description: 'A modern stream cipher that provides excellent performance and security, especially on devices without hardware AES support.',
      howItWorks: 'ChaCha20 is a stream cipher that generates a keystream which is XORed with plaintext. Poly1305 provides authentication, ensuring both confidentiality and integrity of the data.'
    }
  ],

  demoAlgorithms: [
    { name: 'AES-256', keySize: '256-bit' },
    { name: 'AES-192', keySize: '192-bit' },
    { name: 'AES-128', keySize: '128-bit' },
    { name: 'ChaCha20', keySize: '256-bit' }
  ],

  learningPaths: [
    {
      id: 1,
      title: 'Cryptography Fundamentals',
      description: 'Learn the basic principles of modern cryptography',
      lessons: 12,
      duration: '4 weeks',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Advanced Encryption Techniques',
      description: 'Master symmetric and asymmetric encryption algorithms',
      lessons: 18,
      duration: '6 weeks',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Quantum Cryptography',
      description: 'Explore post-quantum cryptographic methods',
      lessons: 15,
      duration: '5 weeks',
      difficulty: 'Advanced'
    }
  ]
};