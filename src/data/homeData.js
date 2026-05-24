// src/data/homeData.js
// ✏️ Sirf is file ka content edit karo — components touch karne ki zaroorat nahi

export const heroData = {
  badge: "Quantum-Safe Security for the Post-Quantum Era",
  heading: "Proactively Securing Data for the",
  headingAccent: "Post-Quantum Era",
  subtext:
    "Quantum computers will render today's RSA, ECC, and AES encryption obsolete. Alar Quantum delivers QKD, QRNG, and PQC solutions that leverage the fundamental laws of quantum mechanics — not algorithms — to protect your most critical infrastructure.",
  ctaPrimary: { label: "Request a Demo", href: "/contact" },
  ctaSecondary: { label: "Explore QShield™", href: "/technology" },
  stats: [
    { value: "86%", label: "Cyberattacks now use encrypted channels" },
    { value: "47%", label: "Enterprises leave sensitive files unencrypted" },
    { value: "10yrs", label: "Until quantum computers break RSA-2048" },
    { value: "NIST", label: "PQC Standard Compliant" },
  ],
}

export const trustedByData = {
  heading: "Trusted, Recognized & Deployed Across Critical Infrastructure",
  logos: [
    { name: "ISRO", abbr: "ISRO" },
    { name: "DRDO", abbr: "DRDO" },
    { name: "CDAC", abbr: "C-DAC" },
    { name: "NIC", abbr: "NIC" },
    { name: "Airtel", abbr: "AIRTEL" },
    { name: "TCS", abbr: "TCS" },
    { name: "Nokia", abbr: "NOKIA" },
    { name: "Thales", abbr: "THALES" },
  ],
}

export const threatData = {
  badge: "Why Now",
  heading: "The Quantum Threat is Not Hypothetical",
  subtext:
    "Nation-states and adversaries are harvesting encrypted data today to decrypt tomorrow — a strategy known as 'Store Now, Decrypt Later'. Your data encrypted today is already at risk.",
  items: [
    {
      source: "White House — NSM-10, May 2022",
      quote:
        "It is necessary to begin updating IT infrastructure with quantum-resistant cryptography now, before quantum computers become capable of breaking today's encryption.",
    },
    {
      source: "MIT Technology Review, Mar 2022",
      quote:
        "Organizations need to strengthen their cryptographic posture immediately — before quantum computing becomes powerful enough to break current encryption standards.",
    },
    {
      source: "Gartner Security Research",
      quote:
        "Any system with an expected operational life beyond five years will be affected by quantum computing advances. Post-quantum migration must begin now.",
    },
  ],
}

export const featuresData = {
  badge: "QShield™ Platform",
  heading: "The World's First Integrated Quantum Security Platform",
  subtext:
    "QShield™ aggregates NIST-compliant PQC algorithms, patented QRNG entropy, hardware QKD, and versatile APIs — all on a single unified system. Built for governments, enterprises, and critical national infrastructure.",
  cards: [
    {
      icon: "⚛️",
      tag: "QKD",
      title: "Quantum Key Distribution",
      description:
        "Distributes cryptographic keys encoded in single photons. Any eavesdropping attempt disturbs the quantum state and is immediately detected — making interception physically impossible, not just computationally hard.",
    },
    {
      icon: "🎲",
      tag: "QRNG",
      title: "Quantum Random Number Generator",
      description:
        "Generates truly random numbers from quantum vacuum fluctuations — not pseudo-random seeds. Eliminates pattern-based attacks that compromise classical entropy sources and HSMs.",
    },
    {
      icon: "🛡️",
      tag: "PQC",
      title: "Post-Quantum Cryptography",
      description:
        "NIST-standardized lattice-based, hash-based, and code-based algorithms — CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+. Retrofit your existing PKI infrastructure to be quantum-resistant without replacing hardware.",
    },
    {
      icon: "🔗",
      tag: "QKD Network",
      title: "Quantum Key Distribution Network",
      description:
        "Deploy city-scale or national QKD networks using dark fiber and trusted node architecture. Enables metro-range quantum-secure communication across banking, defence, and telecom backbones.",
    },
    {
      icon: "🌐",
      tag: "QConnect",
      title: "Quantum-Safe VPN & Secure Tunnel",
      description:
        "Drop-in replacement for classical VPNs. QConnect wraps existing IP infrastructure with QKD-derived symmetric keys, providing information-theoretic security for remote access and site-to-site tunnels.",
    },
    {
      icon: "📡",
      tag: "Q-ORE",
      title: "Quantum-Secure Drone Communication",
      description:
        "Hardens UAV command, telemetry, and payload channels using onboard QRNG and PQC. Protects against GPS spoofing, signal hijacking, and adversarial interception of drone swarms.",
    },
  ],
}

export const howItWorksData = {
  badge: "Quantum Migration Path",
  heading: "Your Path to Quantum-Safe Infrastructure",
  steps: [
    {
      number: "01",
      title: "Crypto Agility Assessment",
      description:
        "We perform a full cryptographic inventory of your stack — identifying RSA, ECC, and symmetric key vulnerabilities, HSM dependencies, certificate lifecycles, and quantum-risk exposure windows.",
    },
    {
      number: "02",
      title: "Hybrid Quantum Deployment",
      description:
        "We deploy a hybrid classical + quantum layer: QKD hardware for key distribution, QRNG for entropy, and NIST PQC algorithms for software-layer protection. Zero service disruption.",
    },
    {
      number: "03",
      title: "Continuous Quantum Monitoring",
      description:
        "24/7 quantum key health monitoring, photon loss detection, entropy drift alerts, and automated key refresh cycles — ensuring your cryptographic posture stays ahead of the threat curve.",
    },
  ],
}

export const statsData = [
  { value: "256+", label: "Km QKD Range Achieved" },
  { value: "1Gbps", label: "Encrypted Throughput" },
  { value: "NIST", label: "PQC Algorithm Certified" },
  { value: "10ns", label: "QRNG Entropy Latency" },
  { value: "24/7", label: "Quantum Key Monitoring" },
  { value: "99.9%", label: "Platform Uptime SLA" },
]

export const industryData = {
  badge: "Industries",
  heading: "Quantum Security Across Critical Sectors",
  subtext: "From central banking to defence networks — quantum threats don't discriminate. Neither does our protection.",
  sectors: [
    {
      icon: "🏦",
      title: "Banking & Financial Services",
      description:
        "Protect SWIFT transactions, core banking channels, and digital payment rails from quantum-enabled fraud. Meet RBI, SEBI, and emerging DORA quantum-readiness mandates.",
    },
    {
      icon: "📡",
      title: "Telecom & 5G Networks",
      description:
        "Secure 5G core network slices, roaming authentication, and inter-operator signaling with QKD-backed key exchange and PQC-hardened SIM provisioning.",
    },
    {
      icon: "🪖",
      title: "Government & Defence",
      description:
        "Classified communication, battlefield network encryption, satellite uplinks, and inter-agency data sharing protected by hardware-enforced quantum key distribution.",
    },
    {
      icon: "🚗",
      title: "Automotive & Connected Vehicles",
      description:
        "Quantum-secure V2X communication, OTA update authentication, and ECU firmware signing — protecting the attack surface of autonomous and connected vehicle fleets.",
    },
  ],
}

export const testimonialsData = {
  badge: "What Leaders Say",
  heading: "Trusted by Security Decision-Makers",
  items: [
    {
      quote:
        "The QKD deployment gave our inter-datacenter links information-theoretic security — something no classical VPN can claim. Alar's team understood our threat model at a depth we hadn't seen from any vendor.",
      name: "Rajesh Sharma",
      role: "CISO, National Infrastructure Corp",
      initials: "RS",
    },
    {
      quote:
        "We evaluated every quantum vendor in the market. Alar was the only team that could articulate a CRYSTALS-Kyber migration path for our existing PKI without full stack replacement.",
      name: "Priya Menon",
      role: "VP Engineering, FinSecure Ltd",
      initials: "PM",
    },
    {
      quote:
        "Our quantum readiness went from theoretical awareness to deployed QKD network in 14 weeks. The Alar Academy training gave our internal team the cryptographic depth to operate it independently.",
      name: "Arjun Kapoor",
      role: "Director Cybersecurity, GovTech India",
      initials: "AK",
    },
  ],
}

export const ctaBannerData = {
  heading: "Is Your Encryption Quantum-Ready?",
  subtext:
    "Adversaries are harvesting your encrypted data today to decrypt it the moment quantum computers reach cryptographic relevance. The window to act is now — not after the breach.",
  ctaPrimary: { label: "Request a Free Assessment", href: "/contact" },
  ctaSecondary: { label: "Download Quantum Readiness Guide", href: "/research" },
}