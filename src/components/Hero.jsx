import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background decorative blobs */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center top, #ffffff 0%, #d4eef7 40%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #f0c8a0 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm border border-white/60 text-[oklch(0.28_0.04_220)] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.17_35)] animate-pulse" />
          Quantum Security Platform
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[oklch(0.15_0.04_220)] leading-[1.1] tracking-tight">
          Securing the
          <br />
          <span className="bg-gradient-to-r from-[oklch(0.62_0.17_35)] to-[#00D4FF] bg-clip-text text-transparent">
            Quantum Era
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-[oklch(0.35_0.04_220)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Alarq Quantum delivers next-generation cryptographic security solutions.
          Faster, unbreakable, built for tomorrow.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4 flex-wrap justify-center">
          <Link
            to="/solutions"
            className="bg-[oklch(0.62_0.17_35)] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[oklch(0.58_0.17_35)] transition-all shadow-lg shadow-orange-200/50 hover:scale-105 transform duration-200"
          >
            Explore Solutions
          </Link>
          <Link
            to="/about"
            className="border-2 border-[oklch(0.18_0.04_220)]/40 text-[oklch(0.18_0.04_220)] bg-white/30 backdrop-blur-sm px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/50 transition-all hover:scale-105 transform duration-200"
          >
            Our Mission
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex items-center gap-8 md:gap-12 flex-wrap justify-center">
          {[
            { value: "256-bit", label: "Quantum Encryption" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "50ms", label: "Avg Latency" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.04_220)]">
                {stat.value}
              </div>
              <div className="text-xs text-[oklch(0.42_0.04_220)] mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;