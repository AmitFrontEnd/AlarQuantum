// src/data/technologyData.js

export const techHeroData = {
  badge: "The Science Behind the Security",
  heading: "Quantum Security,",
  headingAccent: "Explained.",
  subtext:
    "Classical encryption relies on mathematical complexity. Quantum security relies on the laws of physics. One can be broken with enough compute power. The other cannot.",
}

export const qkdData = {
  badge: "QKD",
  tag: "Quantum Key Distribution",
  heading: "Encryption Keys That Are Physically Unbreakable",
  subtext:
    "QKD uses individual photons to transmit cryptographic keys. The Heisenberg Uncertainty Principle guarantees that any eavesdropping attempt disturbs the quantum state — making interception instantly detectable.",
  howItWorks: [
    {
      step: "01",
      title: "Photon Transmission",
      desc: "Alice encodes key bits onto individual photons using quantum polarization states and sends them through a fiber optic channel.",
    },
    {
      step: "02",
      title: "Quantum Measurement",
      desc: "Bob measures each photon using randomly chosen quantum bases. Quantum mechanics prevents any copying or cloning of photon states.",
    },
    {
      step: "03",
      title: "Basis Reconciliation",
      desc: "Alice and Bob compare bases over a public channel, keeping only bits measured in matching bases — forming the raw key.",
    },
    {
      step: "04",
      title: "Eavesdrop Detection",
      desc: "Any interception by Eve disturbs photon states, introducing detectable errors. If error rate exceeds threshold, the session is aborted.",
    },
    {
      step: "05",
      title: "Privacy Amplification",
      desc: "Error correction and privacy amplification algorithms distill a perfectly secure final key from the reconciled raw key bits.",
    },
  ],
  specs: [
    { label: "Protocol", value: "BB84 / E91 / CV-QKD" },
    { label: "Channel", value: "Dark Fiber / Free Space" },
    { label: "Range", value: "Up to 256 km" },
    { label: "Key Rate", value: "1 Mbps symmetric" },
    { label: "Security Model", value: "Information-Theoretic" },
    { label: "Error Detection", value: "< 1% QBER threshold" },
  ],
}

export const qrngData = {
  badge: "QRNG",
  tag: "Quantum Random Number Generator",
  heading: "True Randomness from Quantum Vacuum",
  subtext:
    "Classical RNGs are deterministic — given the same seed, they produce the same sequence. QRNG harvests entropy from quantum vacuum fluctuations — events that are fundamentally unpredictable by any physical law.",
  comparison: [
    {
      label: "Classical PRNG",
      icon: "⚠️",
      bad: true,
      points: [
        "Deterministic — seed-dependent",
        "Predictable with enough compute",
        "Vulnerable to seed compromise",
        "Pattern-exploitable by adversaries",
      ],
    },
    {
      label: "Alar QRNG",
      icon: "⚛️",
      bad: false,
      points: [
        "Non-deterministic — physics-based",
        "Unpredictable by any physical law",
        "No seed — no single point of failure",
        "Certified by NIST SP 800-90B",
      ],
    },
  ],
  specs: [
    { label: "Entropy Source", value: "Quantum Vacuum Fluctuations" },
    { label: "Output Rate", value: "10 Gbps raw entropy" },
    { label: "Latency", value: "< 10 nanoseconds" },
    { label: "Certification", value: "NIST SP 800-90B" },
    { label: "Form Factor", value: "PCIe / USB / API" },
    { label: "Bias", value: "< 10⁻¹⁰" },
  ],
}

export const pqcData = {
  badge: "PQC",
  tag: "Post-Quantum Cryptography",
  heading: "NIST-Standardized Algorithms for a Post-Quantum World",
  subtext:
    "Shor's algorithm running on a sufficiently powerful quantum computer will break RSA-2048 in hours. NIST has standardized four post-quantum algorithms. Alar integrates all of them.",
  algorithms: [
    {
      name: "CRYSTALS-Kyber",
      type: "Key Encapsulation",
      basis: "Module Lattice",
      nistLevel: "Level 1–5",
      use: "TLS, VPN, Key Exchange",
      icon: "🔷",
      color: "#3B82F6",
    },
    {
      name: "CRYSTALS-Dilithium",
      type: "Digital Signature",
      basis: "Module Lattice",
      nistLevel: "Level 2–5",
      use: "Code Signing, Auth Tokens",
      icon: "🟣",
      color: "#8B5CF6",
    },
    {
      name: "SPHINCS+",
      type: "Digital Signature",
      basis: "Hash-Based",
      nistLevel: "Level 1–5",
      use: "Certificate Authority, Firmware",
      icon: "🟢",
      color: "#10B981",
    },
    {
      name: "FALCON",
      type: "Digital Signature",
      basis: "NTRU Lattice",
      nistLevel: "Level 1 & 5",
      use: "IoT, Embedded Systems",
      icon: "🟠",
      color: "oklch(0.62 0.17 35)",
    },
  ],
  migrationSteps: [
    { phase: "Phase 1", title: "Crypto Inventory", desc: "Discover all RSA, ECC, and symmetric keys across your stack — HSMs, certs, APIs, TLS endpoints." },
    { phase: "Phase 2", title: "Hybrid Mode", desc: "Run classical + PQC algorithms in parallel. Zero downtime. Full backward compatibility maintained." },
    { phase: "Phase 3", title: "Full PQC Migration", desc: "Deprecate classical algorithms. Full NIST PQC stack operational. Quantum-safe posture achieved." },
  ],
}

export const platformData = {
  badge: "QShield™ Platform",
  heading: "One Platform. Every Quantum Security Primitive.",
  subtext:
    "QShield™ is the world's first unified quantum security platform — integrating QKD hardware, QRNG entropy, PQC software, and real-time key management in a single system.",
  layers: [
    {
      layer: "Application Layer",
      color: "oklch(0.62 0.17 35)",
      components: ["Quantum-Safe TLS", "PQC API Gateway", "Secure Messaging SDK"],
    },
    {
      layer: "Key Management Layer",
      color: "#8B5CF6",
      components: ["QKMS (Quantum KMS)", "Key Lifecycle Automation", "HSM Integration"],
    },
    {
      layer: "Entropy Layer",
      color: "#3B82F6",
      components: ["QRNG Engine", "Entropy Health Monitor", "Bias Correction Module"],
    },
    {
      layer: "Physical Layer",
      color: "#10B981",
      components: ["QKD Hardware Node", "Photon Source & Detector", "Fiber Interface"],
    },
  ],
}

export const researchData = {
  badge: "Research & Publications",
  heading: "Peer-Reviewed. Independently Verified.",
  papers: [
    {
      title: "QKD Network Architecture for Metropolitan-Scale Deployments",
      journal: "Nature Quantum Information",
      year: "2024",
      tag: "QKD",
    },
    {
      title: "Entropy Certification of Vacuum-Fluctuation QRNG under NIST SP 800-90B",
      journal: "IEEE Transactions on Information Forensics",
      year: "2024",
      tag: "QRNG",
    },
    {
      title: "Hybrid PQC-Classical Migration Framework for Enterprise PKI",
      journal: "ACM CCS Proceedings",
      year: "2023",
      tag: "PQC",
    },
    {
      title: "Store-Now-Decrypt-Later Attack Surface Analysis in Financial Networks",
      journal: "USENIX Security Symposium",
      year: "2023",
      tag: "Threat Research",
    },
  ],
}

export const techCtaData = {
  heading: "Ready to Go Quantum-Safe?",
  subtext: "Talk to our quantum engineers. Get a crypto agility assessment and migration roadmap tailored to your infrastructure.",
  ctaPrimary: { label: "Request Technical Demo", href: "/contact" },
  ctaSecondary: { label: "Download Whitepaper", href: "/research" },
}