// src/data/academyData.js

export const academyHeroData = {
  badge: "Alar Academy",
  heading: "Master Quantum Security.",
  headingAccent: "Before the Threat Does.",
  subtext:
    "Hands-on quantum cryptography training built for security engineers, CISOs, and architects. From QKD fundamentals to deploying NIST PQC in production — taught by the researchers who built the protocols.",
  stats: [
    { value: "2400+", label: "Engineers Trained" },
    { value: "18", label: "Courses & Labs" },
    { value: "94%", label: "Completion Rate" },
    { value: "NIST", label: "Certified Curriculum" },
  ],
}

export const programsData = {
  badge: "Programs",
  heading: "From Zero to Quantum-Ready",
  subtext: "Three structured tracks — each designed for a different role and depth of quantum security knowledge.",
  tracks: [
    {
      level: "Foundation",
      icon: "🔬",
      color: "#3B82F6",
      colorRaw: "rgba(59,130,246,",
      duration: "3 Days",
      format: "Online / On-site",
      audience: "IT Managers, Security Analysts, Decision Makers",
      headline: "Quantum Threat Awareness",
      desc: "Understand why RSA, ECC, and classical VPNs will fail. Learn what QKD, QRNG, and PQC actually are — without the math overload. Walk away with a clear quantum risk assessment framework.",
      modules: [
        "Why Classical Encryption Will Fail",
        "Quantum Computing 101 — No Physics Degree Required",
        "Store-Now-Decrypt-Later: Your Data Is Already at Risk",
        "QKD, QRNG, PQC — What Each Solves",
        "Building Your Quantum Risk Register",
        "Regulatory Landscape: NSM-10, NIST, DORA",
      ],
      cta: "Enroll Foundation Track",
    },
    {
      level: "Professional",
      icon: "⚛️",
      color: "oklch(0.62 0.17 35)",
      colorRaw: "rgba(232,98,42,",
      duration: "5 Days",
      format: "Online / On-site / Lab",
      audience: "Security Engineers, PKI Architects, DevSecOps",
      headline: "Quantum Cryptography in Practice",
      desc: "Hands-on lab environment. Deploy QKD nodes, configure QRNG entropy sources, migrate PKI to CRYSTALS-Kyber and Dilithium. Real infrastructure, real protocols, real quantum hardware.",
      modules: [
        "QKD Protocol Deep Dive — BB84, E91, CV-QKD",
        "QRNG Architecture & NIST SP 800-90B Certification",
        "CRYSTALS-Kyber Key Encapsulation — Lab",
        "CRYSTALS-Dilithium Signature Migration — Lab",
        "Hybrid PQC + Classical Deployment Strategy",
        "Quantum Key Management System (QKMS) Operations",
      ],
      cta: "Enroll Professional Track",
      featured: true,
    },
    {
      level: "Expert",
      icon: "🛡️",
      color: "#8B5CF6",
      colorRaw: "rgba(139,92,246,",
      duration: "10 Days",
      format: "On-site + Live Lab",
      audience: "CISOs, Quantum Architects, Research Teams",
      headline: "Quantum Security Architecture",
      desc: "Design and deploy full quantum security stacks for enterprise and national infrastructure. Covers QKD network topology, PQC migration at scale, QRNG hardware integration, and regulatory compliance strategy.",
      modules: [
        "QKD Network Topology Design — Metro to National Scale",
        "Trusted Node Architecture & Quantum Repeaters",
        "Full PQC Migration — PKI, TLS, SSH, Code Signing",
        "QRNG Hardware Integration — PCIe, HSM, Cloud KMS",
        "Quantum Threat Modeling & Attack Surface Analysis",
        "Compliance Architecture — NSM-10, DORA, RBI, 3GPP",
      ],
      cta: "Apply for Expert Track",
    },
  ],
}

export const curriculumData = {
  badge: "Curriculum",
  heading: "What You'll Actually Learn",
  modules: [
    { icon: "⚛️", title: "Quantum Mechanics for Security Engineers", tag: "Foundation", desc: "Superposition, entanglement, and the Heisenberg Uncertainty Principle — explained for practitioners, not physicists." },
    { icon: "🔐", title: "QKD Protocol Implementation", tag: "Professional", desc: "Hands-on BB84 and E91 protocol deployment on real QKD hardware. Photon polarization, basis reconciliation, QBER measurement." },
    { icon: "🎲", title: "QRNG Entropy Architecture", tag: "Professional", desc: "Vacuum fluctuation entropy sources, NIST SP 800-90B testing, bias correction, and HSM integration patterns." },
    { icon: "🧮", title: "Lattice Cryptography & PQC", tag: "Expert", desc: "Module Learning With Errors (MLWE), NTRU lattices, and the mathematical basis of CRYSTALS-Kyber and Dilithium." },
    { icon: "🏗️", title: "Hybrid Migration Strategy", tag: "Professional", desc: "Deploy PQC alongside classical algorithms. Zero-downtime PKI migration, TLS 1.3 hybrid cipher suites, backward compatibility." },
    { icon: "📡", title: "QKD Network Topology", tag: "Expert", desc: "Point-to-point, trusted node, and quantum repeater architectures. Dark fiber provisioning and metro-scale QKD deployment." },
  ],
}

export const testimonialsData = {
  badge: "Graduate Stories",
  heading: "From Classroom to Quantum-Safe Infrastructure",
  items: [
    {
      quote: "The Professional Track gave my team the hands-on depth to deploy CRYSTALS-Kyber across our entire banking API layer. No other training came close to the lab quality.",
      name: "Vikram Nair",
      role: "Head of Cryptographic Engineering, FinSecure Ltd",
      initials: "VN",
      track: "Professional",
    },
    {
      quote: "I came in as a CISO who understood the threat at a high level. I left with a 12-month quantum migration roadmap and the technical vocabulary to drive it with my board.",
      name: "Ananya Krishnan",
      role: "CISO, National Payments Corporation",
      initials: "AK",
      track: "Expert",
    },
    {
      quote: "The QKD lab environment was unlike anything I'd seen — actual photon-based key exchange on real hardware. The QBER measurement labs alone were worth the entire course.",
      name: "Rohan Mehta",
      role: "Senior Security Architect, GovTech India",
      initials: "RM",
      track: "Professional",
    },
  ],
}

export const academyCtaData = {
  heading: "Your Adversaries Are Already Learning Quantum.",
  subtext: "Nation-state teams are training quantum engineers right now. The question is whether your defenders are keeping pace. Enroll your team today.",
  ctaPrimary: { label: "Enroll Your Team", href: "/contact" },
  ctaSecondary: { label: "Download Curriculum PDF", href: "/contact" },
}