// src/data/researchData.js

export const researchHeroData = {
  badge: "Alar Research",
  heading: "Advancing the Science of",
  headingAccent: "Quantum Security.",
  subtext:
    "Our research team publishes peer-reviewed work across QKD protocol design, QRNG entropy certification, post-quantum cryptography, and quantum threat intelligence. Independently verified. Openly published.",
  stats: [
    { value: "47+", label: "Published Papers" },
    { value: "12", label: "Active Research Programs" },
    { value: "6", label: "International Collaborations" },
    { value: "3", label: "Patent Families Filed" },
  ],
}

export const researchAreasData = {
  badge: "Research Areas",
  heading: "Four Pillars of Quantum Security Research",
  areas: [
    {
      icon: "🔭",
      color: "oklch(0.62 0.17 35)",
      colorRaw: "rgba(232,98,42,",
      title: "Quantum Key Distribution",
      desc: "Protocol-level research on BB84, E91, and CV-QKD. We study photon loss modeling, QBER optimization, trusted node vulnerability analysis, and metropolitan QKD network topology.",
      tags: ["BB84 Protocol", "CV-QKD", "QBER Analysis", "Network Topology"],
    },
    {
      icon: "🎲",
      color: "#3B82F6",
      colorRaw: "rgba(59,130,246,",
      title: "Quantum Random Number Generation",
      desc: "Entropy source characterization from quantum vacuum fluctuations. NIST SP 800-90B compliance testing, bias quantification below 10⁻¹⁰, and real-time entropy health monitoring architectures.",
      tags: ["Entropy Certification", "NIST SP 800-90B", "Vacuum Fluctuations", "Bias Correction"],
    },
    {
      icon: "🧮",
      color: "#8B5CF6",
      colorRaw: "rgba(139,92,246,",
      title: "Post-Quantum Cryptography",
      desc: "Lattice-based cryptography analysis, CRYSTALS-Kyber and Dilithium implementation benchmarking, hybrid migration framework design, and side-channel attack resistance for PQC hardware.",
      tags: ["Lattice Cryptography", "CRYSTALS-Kyber", "Side-Channel Analysis", "Hybrid PQC"],
    },
    {
      icon: "🕵️",
      color: "#10B981",
      colorRaw: "rgba(16,185,129,",
      title: "Quantum Threat Intelligence",
      desc: "Store-Now-Decrypt-Later attack surface modeling, nation-state quantum capability assessment, cryptographic harvest timeline forecasting, and enterprise quantum risk quantification frameworks.",
      tags: ["SNDL Attacks", "Threat Modeling", "Risk Quantification", "Nation-State Intel"],
    },
  ],
}

export const papersData = {
  badge: "Publications",
  heading: "Peer-Reviewed Research",
  filters: ["All", "QKD", "QRNG", "PQC", "Threat Research"],
  papers: [
    {
      title: "Metropolitan-Scale QKD Network Architecture with Dynamic Trusted Node Routing",
      authors: "R. Sharma, A. Krishnan, P. Mehta",
      journal: "Nature Quantum Information",
      year: "2024",
      tag: "QKD",
      abstract: "We present a scalable QKD network architecture for metropolitan deployments, introducing a dynamic trusted node routing algorithm that reduces key relay latency by 43% while maintaining information-theoretic security guarantees.",
      doi: "10.1038/s41534-024-XXXX",
    },
    {
      title: "Entropy Certification of Vacuum-Fluctuation QRNG Under NIST SP 800-90B with Sub-10⁻¹⁰ Bias",
      authors: "P. Mehta, V. Nair",
      journal: "IEEE Transactions on Information Forensics and Security",
      year: "2024",
      tag: "QRNG",
      abstract: "A complete NIST SP 800-90B certification methodology for vacuum-fluctuation QRNGs. We demonstrate bias below 10⁻¹⁰ and introduce a real-time entropy drift detection algorithm for HSM integration.",
      doi: "10.1109/TIFS.2024.XXXXXX",
    },
    {
      title: "Hybrid CRYSTALS-Kyber + RSA Migration Framework for Enterprise PKI with Zero Downtime",
      authors: "A. Krishnan, R. Sharma",
      journal: "ACM Conference on Computer and Communications Security",
      year: "2024",
      tag: "PQC",
      abstract: "Enterprise PKI migration to post-quantum cryptography requires hybrid operation periods. We introduce a framework that allows simultaneous CRYSTALS-Kyber and RSA certificate chains with automated deprecation triggers.",
      doi: "10.1145/3576915.XXXXXXX",
    },
    {
      title: "Store-Now-Decrypt-Later Attack Surface Quantification in Financial Network Infrastructure",
      authors: "V. Nair, P. Mehta, A. Krishnan",
      journal: "USENIX Security Symposium",
      year: "2023",
      tag: "Threat Research",
      abstract: "We develop a quantitative model for SNDL attack surface exposure across financial networks, providing the first empirical estimate of harvest-to-decrypt timelines based on quantum computing progress curves.",
      doi: "10.5555/3620237.XXXXXXX",
    },
    {
      title: "Side-Channel Attack Resistance of CRYSTALS-Dilithium on ARM Cortex-M4 Embedded Systems",
      authors: "R. Sharma, V. Nair",
      journal: "IACR Transactions on Cryptographic Hardware and Embedded Systems",
      year: "2023",
      tag: "PQC",
      abstract: "Power analysis and timing side-channel evaluation of CRYSTALS-Dilithium on constrained hardware. We identify three novel attack vectors and propose masked implementations achieving <3% performance overhead.",
      doi: "10.46586/tches.2023.XXXXXX",
    },
    {
      title: "Quantum Repeater Fidelity Bounds for Long-Distance QKD Beyond 400km",
      authors: "A. Krishnan, R. Sharma",
      journal: "Physical Review Applied",
      year: "2023",
      tag: "QKD",
      abstract: "Theoretical fidelity bounds for quantum repeater chains enabling QKD beyond current 256km fiber limits. We demonstrate a multi-photon entanglement swapping protocol achieving 94.7% fidelity at 400km.",
      doi: "10.1103/PhysRevApplied.XX.XXXXXX",
    },
  ],
}

export const collaborationsData = {
  badge: "Collaborations",
  heading: "Research Partnerships",
  partners: [
    { name: "IIT Bombay", type: "Academic", desc: "Joint research on photonic QKD hardware miniaturization and on-chip quantum photon sources." },
    { name: "IISc Bangalore", type: "Academic", desc: "Collaborative work on lattice cryptography implementation and PQC hardware acceleration." },
    { name: "C-DAC", type: "Government", desc: "National quantum communication network deployment and quantum-safe e-governance protocols." },
    { name: "DRDO", type: "Defence", desc: "Classified research on quantum-secure military communication and satellite QKD uplinks." },
    { name: "Nokia Bell Labs", type: "Industry", desc: "5G quantum-safe network slicing protocols and PQC-hardened network function virtualization." },
    { name: "Thales Group", type: "Industry", desc: "Hardware security module integration with QRNG entropy sources and quantum key management." },
  ],
}

export const researchCtaData = {
  heading: "Collaborate with Alar Research.",
  subtext: "We actively collaborate with academic institutions, national labs, and industry partners. If your research intersects quantum security, cryptography, or photonic hardware — let's talk.",
  ctaPrimary: { label: "Propose a Collaboration", href: "/contact" },
  ctaSecondary: { label: "View All Publications", href: "/contact" },
}