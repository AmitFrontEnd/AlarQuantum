import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

const LINKS = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Academy", path: "/academy" },
    { label: "Careers", path: "/careers" },
  ],
  Solutions: [
    { label: "Quantum Encryption", path: "/solutions" },
    { label: "Key Distribution", path: "/solutions" },
    { label: "Cybersecurity", path: "/solutions" },
    { label: "Enterprise", path: "/solutions" },
  ],
  Technology: [
    { label: "How It Works", path: "/technology" },
    { label: "Whitepaper", path: "/technology" },
    { label: "API Docs", path: "/technology" },
    { label: "Roadmap", path: "/technology" },
  ],
};

const SOCIALS = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      style={{
        background: isDark
          ? "rgba(8, 18, 30, 0.9)"
          : "rgba(200, 232, 242, 0.6)",
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(26,43,60,0.1)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-md transition-transform group-hover:scale-105"
                style={{ background: "oklch(0.62 0.17 35)" }}
              >
                A
              </div>
              <span
                className="font-bold text-lg tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
                }}
              >
                ALARQ<span style={{ color: "oklch(0.62 0.17 35)" }}>.</span>
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.38 0.04 220)",
              }}
            >
              Building the next generation of quantum-secure cryptographic
              infrastructure for a safer digital world.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(26,43,60,0.08)",
                    color: isDark
                      ? "rgba(232,246,250,0.6)"
                      : "oklch(0.35 0.04 220)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "oklch(0.62 0.17 35)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isDark
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(26,43,60,0.08)";
                    e.currentTarget.style.color = isDark
                      ? "rgba(232,246,250,0.6)"
                      : "oklch(0.35 0.04 220)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links cols — YAHAN a KO Link SE REPLACE KAR DIYA */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4
                className="text-xs font-semibold tracking-widest uppercase"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "oklch(0.62 0.17 35)",
                }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm transition-colors duration-200"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: isDark
                          ? "rgba(232,246,250,0.55)"
                          : "oklch(0.38 0.04 220)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = isDark
                          ? "#e8f6fa"
                          : "oklch(0.15 0.04 220)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark
                          ? "rgba(232,246,250,0.55)"
                          : "oklch(0.38 0.04 220)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          className="mt-14 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{
            background: isDark
              ? "rgba(255,255,255,0.04)"
              : "rgba(26,43,60,0.05)",
            border: isDark
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(26,43,60,0.1)",
          }}
        >
          <div>
            <p
              className="font-semibold text-sm"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
              }}
            >
              Stay ahead of quantum threats
            </p>
            <p
              className="text-xs mt-0.5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark
                  ? "rgba(232,246,250,0.45)"
                  : "oklch(0.42 0.04 220)",
              }}
            >
              Research updates and security insights, straight to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-56 px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isDark
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(255,255,255,0.7)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(26,43,60,0.12)",
                color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
              }}
            />
            <button
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{
                background: "oklch(0.62 0.17 35)",
                boxShadow: "0 4px 14px oklch(0.62 0.17 35 / 30%)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar — YAHAN bhi a KO Link SE REPLACE KAR DIYA */}
      <div
        style={{
          borderTop: isDark
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(26,43,60,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: isDark
                ? "rgba(232,246,250,0.35)"
                : "oklch(0.5 0.04 220)",
            }}
          >
            © {new Date().getFullYear()} Alarq Quantum. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark
                  ? "rgba(232,246,250,0.35)"
                  : "oklch(0.5 0.04 220)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark
                  ? "rgba(232,246,250,0.8)"
                  : "oklch(0.22 0.04 220)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark
                  ? "rgba(232,246,250,0.35)"
                  : "oklch(0.5 0.04 220)";
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark
                  ? "rgba(232,246,250,0.35)"
                  : "oklch(0.5 0.04 220)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark
                  ? "rgba(232,246,250,0.8)"
                  : "oklch(0.22 0.04 220)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark
                  ? "rgba(232,246,250,0.35)"
                  : "oklch(0.5 0.04 220)";
              }}
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-xs transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark
                  ? "rgba(232,246,250,0.35)"
                  : "oklch(0.5 0.04 220)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark
                  ? "rgba(232,246,250,0.8)"
                  : "oklch(0.22 0.04 220)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark
                  ? "rgba(232,246,250,0.35)"
                  : "oklch(0.5 0.04 220)";
              }}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}