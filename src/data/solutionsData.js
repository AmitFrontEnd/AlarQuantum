// src/data/solutionsData.js

export const solutionsHeroData = {
  badge: "Quantum Solutions",
  heading: "The Right Quantum Defense",
  headingAccent: "for Every Threat Surface",
  subtext:
    "Every industry has a unique cryptographic attack surface. Alar maps quantum security primitives — QKD, QRNG, PQC — to your specific infrastructure, compliance mandate, and threat model.",
}

export const comparisonData = {
  badge: "Why Quantum",
  heading: "Classical Security Is Already Broken",
  subtext:
    "A sufficiently powerful quantum computer running Shor's algorithm will break RSA-2048 in hours. Grover's algorithm halves the effective key length of symmetric ciphers. The math that protects you today will not protect you tomorrow.",
  rows: [
    { feature: "Security Basis", classical: "Mathematical Complexity", quantum: "Laws of Physics" },
    { feature: "Broken by Quantum?", classical: "✗ Yes — Shor's Algorithm", quantum: "✓ Information-Theoretic" },
    { feature: "Eavesdrop Detection", classical: "✗ Passive, Undetectable", quantum: "✓ Instant & Guaranteed" },
    { feature: "Key Exchange", classical: "RSA / ECDH (Vulnerable)", quantum: "QKD Photon-Based" },
    { feature: "Randomness", classical: "PRNG (Seed-Based)", quantum: "QRNG (Vacuum Fluctuation)" },
    { feature: "Forward Secrecy", classical: "✗ Broken by SNDL Attack", quantum: "✓ Per-Session Quantum Keys" },
    { feature: "NIST Compliance", classical: "Pre-quantum standards", quantum: "✓ NIST PQC Round 4 Certified" },
    { feature: "Regulatory Future", classical: "Non-compliant post-2030", quantum: "✓ Quantum-safe mandates met" },
  ],
}

export const sectorsData = [
  {
    id: "government",
    icon: "🪖",
    color: "oklch(0.62 0.17 35)",
    colorRaw: "rgba(232,98,42,",
    sector: "Government & Defence",
    badge: "Classified & Mission-Critical",
    headline: "Quantum-Secure Command. Battlefield to Boardroom.",
    subtext:
      "Nation-state adversaries operate the world's most advanced quantum research programs. Government communication, satellite uplinks, and inter-agency data sharing require security that goes beyond algorithmic — it requires physical law.",
    problems: [
      { problem: "Classified comms intercepted via legacy VPNs", solution: "QKD-secured fiber links with instant eavesdrop detection" },
      { problem: "Satellite uplinks vulnerable to signal hijacking", solution: "PQC-hardened uplink authentication + QRNG session keys" },
      { problem: "'Store Now Decrypt Later' attacks on archived intel", solution: "Retroactive quantum-safe re-encryption of classified archives" },
      { problem: "Inter-agency PKI certificates breakable by Shor's algorithm", solution: "CRYSTALS-Dilithium signed certificate authority migration" },
    ],
    deployments: ["QKD Metropolitan Network", "Quantum-Safe VPN (QConnect)", "PQC Certificate Authority", "QRNG Hardware Security Module"],
    compliance: ["NSM-10 (White House)", "NCSC Quantum-Safe Guidelines", "MeitY Quantum Mission", "NATO NCIA Standards"],
  },
  {
    id: "banking",
    icon: "🏦",
    color: "#3B82F6",
    colorRaw: "rgba(59,130,246,",
    sector: "Banking & Financial Services",
    badge: "RBI · SEBI · DORA Compliant",
    headline: "Quantum-Safe Transactions. Zero Cryptographic Exposure.",
    subtext:
      "SWIFT transactions, core banking channels, and payment rails depend on RSA and ECC encryption. As quantum capability scales, every unprotected financial transaction becomes a liability — and regulators are watching.",
    problems: [
      { problem: "SWIFT interbank messages encrypted with breakable RSA", solution: "PQC-wrapped SWIFT channels with CRYSTALS-Kyber key encapsulation" },
      { problem: "Digital signatures on trade settlements breakable post-quantum", solution: "CRYSTALS-Dilithium & FALCON signatures for trade auth" },
      { problem: "HSM entropy sources producing predictable keys", solution: "QRNG-seeded HSMs eliminating seed-based key predictability" },
      { problem: "Customer PII vaults vulnerable to SNDL harvesting", solution: "Quantum-safe AES-256 + PQC hybrid encryption for data at rest" },
    ],
    deployments: ["QRNG-Seeded HSM Integration", "PQC-Wrapped Core Banking API", "Quantum-Safe Digital Signatures", "Encrypted Payment Rail Tunnels"],
    compliance: ["RBI Cybersecurity Framework", "SEBI CSCRF", "DORA Quantum Readiness", "PCI-DSS Quantum Extension"],
  },
  {
    id: "telecom",
    icon: "📡",
    color: "#8B5CF6",
    colorRaw: "rgba(139,92,246,",
    sector: "Telecom & 5G Networks",
    badge: "5G Core · Network Slicing · SIM",
    headline: "Quantum-Safe 5G Infrastructure from Core to Edge.",
    subtext:
      "5G introduces massive attack surfaces — network slicing, open RAN, edge compute, SIM provisioning. Classical cryptographic controls cannot secure a network designed for 10 billion connected devices at quantum scale.",
    problems: [
      { problem: "5G network slice isolation relies on breakable TLS", solution: "PQC-hardened TLS 1.3 with CRYSTALS-Kyber for slice security" },
      { problem: "SIM OTA provisioning interceptable and decryptable", solution: "Quantum-safe SIM provisioning with QRNG-generated IMSI keys" },
      { problem: "Inter-operator roaming signaling exposed to SS7 + quantum attacks", solution: "QKD-backed inter-operator secure tunnels" },
      { problem: "Edge compute nodes lack hardware entropy sources", solution: "QRNG-as-a-Service API for edge node cryptographic operations" },
    ],
    deployments: ["PQC-Hardened 5G Core", "Quantum-Safe SIM Provisioning", "QKD Inter-Operator Backbone", "QRNG Edge Entropy Service"],
    compliance: ["3GPP Quantum Security WG", "GSMA FS.31 Guidelines", "ETSI QKD Standards", "TRAI Quantum Roadmap"],
  },
  {
    id: "enterprise",
    icon: "🏢",
    color: "#10B981",
    colorRaw: "rgba(16,185,129,",
    sector: "Enterprise IT",
    badge: "Zero-Trust · PKI · Cloud",
    headline: "Quantum-Ready Enterprise. Without Starting From Scratch.",
    subtext:
      "Most enterprise security stacks depend on RSA certificates, ECDH key exchange, and PRNG-seeded encryption. Migrating to quantum-safe cryptography doesn't mean replacing everything — it means deploying a hybrid layer that protects your existing investment.",
    problems: [
      { problem: "Internal PKI certificates breakable by Shor's algorithm", solution: "Hybrid PQC + RSA certificate authority with zero-downtime migration" },
      { problem: "VPN tunnels using ECDH key exchange are post-quantum vulnerable", solution: "QConnect quantum-safe VPN replacing classical ECDH" },
      { problem: "Cloud KMS entropy depends on software PRNG", solution: "QRNG entropy injected into AWS/Azure/GCP KMS pipelines" },
      { problem: "Zero-trust token signing uses RSA — breakable by Shor's", solution: "CRYSTALS-Dilithium token signing for zero-trust auth flows" },
    ],
    deployments: ["Hybrid PQC PKI Migration", "QConnect Enterprise VPN", "QRNG Cloud KMS Integration", "PQC Zero-Trust Token Authority"],
    compliance: ["ISO 27001 Quantum Addendum", "SOC 2 Type II", "NIST CSF Quantum Profile", "CIS Critical Controls v8"],
  },
]

export const solutionsCtaData = {
  heading: "Which Threat Surface Is Yours?",
  subtext:
    "Our quantum engineers will map your cryptographic inventory, identify SNDL exposure windows, and deliver a migration roadmap — at no cost.",
  ctaPrimary: { label: "Request Free Crypto Assessment", href: "/contact" },
  ctaSecondary: { label: "Talk to a Quantum Engineer", href: "/contact" },
}