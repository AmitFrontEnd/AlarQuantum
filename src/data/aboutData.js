// src/data/aboutData.js

export const aboutHeroData = {
  badge: "About Alar Quantum",
  heading: "We Are Building the",
  headingAccent: "Quantum-Safe World.",
  subtext:
    "Alar Quantum was founded on a single conviction — that the transition to quantum computing will be the most consequential security event of the 21st century, and that the window to prepare is closing faster than most organizations realize.",
}

export const missionData = {
  badge: "Our Mission",
  heading: "Security That Outlasts the Quantum Transition",
  subtext:
    "Our mission is to make quantum-safe cryptography accessible, deployable, and operationally viable for every organization — from national governments to enterprise security teams — before quantum computers reach cryptographic relevance.",
  pillars: [
    {
      icon: "⚛️",
      color: "oklch(0.62 0.17 35)",
      colorRaw: "rgba(232,98,42,",
      title: "Physics-First Security",
      desc: "We build on quantum mechanics — not mathematical assumptions. Our QKD systems derive security from the Heisenberg Uncertainty Principle, not computational complexity.",
    },
    {
      icon: "🔬",
      color: "#3B82F6",
      colorRaw: "rgba(59,130,246,",
      title: "Research-Driven Products",
      desc: "Every product ships from peer-reviewed research. Our engineering team works directly with our research division — protocols are published before they are productized.",
    },
    {
      icon: "🌐",
      color: "#8B5CF6",
      colorRaw: "rgba(139,92,246,",
      title: "Open Standards",
      desc: "We actively contribute to NIST PQC standardization, ETSI QKD working groups, and 3GPP quantum security task forces. Open standards make everyone safer.",
    },
    {
      icon: "🛡️",
      color: "#10B981",
      colorRaw: "rgba(16,185,129,",
      title: "Proactive Defense",
      desc: "We do not wait for quantum computers to arrive. We deploy quantum-safe infrastructure today — because adversaries are harvesting encrypted data right now.",
    },
  ],
}

export const timelineData = {
  badge: "Our Journey",
  heading: "From Research Lab to National Infrastructure",
  events: [
    {
      year: "2018",
      title: "Founded",
      desc: "Alar Quantum founded by a team of quantum physicists and cryptographers from IIT Bombay and IISc Bangalore. Initial focus on QKD protocol research.",
      color: "oklch(0.62 0.17 35)",
    },
    {
      year: "2019",
      title: "First QKD Prototype",
      desc: "Demonstrated India's first indigenously developed BB84 QKD system achieving 1 Mbps key rate over 50km dark fiber in controlled lab conditions.",
      color: "#3B82F6",
    },
    {
      year: "2020",
      title: "DRDO Partnership",
      desc: "Signed strategic research partnership with DRDO for quantum-secure military communication protocols. First government deployment initiated.",
      color: "#8B5CF6",
    },
    {
      year: "2021",
      title: "QShield™ v1.0",
      desc: "Launched QShield™ platform — the world's first unified QKD + QRNG + PQC system. First commercial deployment in Indian banking infrastructure.",
      color: "#10B981",
    },
    {
      year: "2022",
      title: "NIST PQC Certification",
      desc: "QShield™ certified for CRYSTALS-Kyber and CRYSTALS-Dilithium implementation. Joined NIST PQC standardization working group as contributing member.",
      color: "oklch(0.62 0.17 35)",
    },
    {
      year: "2023",
      title: "Metropolitan QKD Network",
      desc: "Deployed India's first metropolitan-scale QKD network spanning 256km across three cities. 8 enterprise nodes, 4 government endpoints.",
      color: "#3B82F6",
    },
    {
      year: "2024",
      title: "Global Expansion",
      desc: "Partnerships with Nokia Bell Labs and Thales Group. Research collaborations in 6 countries. QShield™ v3.0 with 1 Gbps encrypted throughput.",
      color: "#8B5CF6",
    },
  ],
}

export const teamData = {
  badge: "Leadership",
  heading: "Built by Quantum Scientists. Run by Security Veterans.",
  members: [
    {
      name: "Dr. Arjun Mehta",
      role: "Co-Founder & CEO",
      bg: "oklch(0.62 0.17 35)",
      initials: "AM",
      bio: "Former IIT Bombay quantum physics faculty. PhD in quantum optics, 14 years of QKD protocol research. Authored 23 peer-reviewed papers on quantum communication.",
      expertise: ["QKD Protocols", "Quantum Optics", "Research Strategy"],
    },
    {
      name: "Dr. Priya Krishnan",
      role: "Co-Founder & CTO",
      bg: "#3B82F6",
      initials: "PK",
      bio: "IISc Bangalore cryptography PhD. Led post-quantum cryptography research at DRDO for 8 years. Primary architect of QShield™ platform and QRNG entropy subsystem.",
      expertise: ["Post-Quantum Crypto", "Hardware Security", "Platform Architecture"],
    },
    {
      name: "Vikram Nair",
      role: "Chief Security Officer",
      bg: "#8B5CF6",
      initials: "VN",
      bio: "20 years in enterprise cryptographic infrastructure. Former CISO at two Fortune 500 financial institutions. Led PKI migrations for 400,000+ certificate environments.",
      expertise: ["Enterprise PKI", "Cryptographic Governance", "Compliance"],
    },
    {
      name: "Ananya Sharma",
      role: "Head of Research",
      bg: "#10B981",
      initials: "AS",
      bio: "Quantum information theory researcher. PhD from University of Waterloo IQC. 18 published papers across QKD fidelity bounds, QRNG certification, and lattice cryptography.",
      expertise: ["Quantum Information", "Lattice Cryptography", "QRNG Theory"],
    },
  ],
}

export const valuesData = {
  badge: "Our Values",
  heading: "What We Stand For",
  values: [
    { icon: "🔬", title: "Research Integrity", desc: "Every claim we make is peer-reviewed and independently verifiable. We publish before we productize." },
    { icon: "🤝", title: "Open Collaboration", desc: "We contribute to open standards. A rising tide of quantum security lifts all organizations." },
    { icon: "⚡", title: "Urgency", desc: "We treat the quantum threat timeline as a present emergency — not a future concern. Your data is being harvested today." },
    { icon: "🎯", title: "Deployment-First", desc: "Beautiful research means nothing without deployment. We obsess over making quantum security operationally viable." },
  ],
}

export const aboutCtaData = {
  heading: "Join Us in Building the Quantum-Safe World.",
  subtext: "Whether you're an organization preparing for the post-quantum transition, a researcher pushing the frontier, or an engineer who wants to work on the hardest security problems — we want to hear from you.",
  ctaPrimary: { label: "Work With Us", href: "/contact" },
  ctaSecondary: { label: "Read Our Research", href: "/research" },
}