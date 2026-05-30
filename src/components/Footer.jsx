import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/solutions" },
  { label: "Case Studies", path: "/research" },
];

const SERVICES = [
  "AI-based Software Solutions",
  "System Integration",
  "Cloud Services",
  "Smart Websites",
];

const CONTACT = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    value: "connect@alarsolutions.in",
    href: "https://mail.google.com/mail/?view=cm&to=connect@alarsolutions.in",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16v.92z" />
      </svg>
    ),
    value: "+91 98550-24640",
    href: "tel:+919855024640",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: "441 Niholka Road Kurali, SAS Nagar, Punjab (IN) 140103",
    href: null,
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Background gradient matching site body
  const bgGradient = isDark
    ? "linear-gradient(175deg, #0a1928 0%, #0d1f32 50%, #091520 100%)"
    : "linear-gradient(175deg, #e8f6fa 0%, #c8e8f2 45%, #a8d4e6 100%)";

  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(26,43,60,0.1)";

  return (
    <footer
      style={{
        background: bgGradient,
        borderTop: `1px solid ${borderColor}`,
        width: "100%",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Column */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="./logo.webp"
              alt="logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-primary text-xs font-bold tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-primary text-xs font-bold tracking-wider uppercase">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-primary text-xs font-bold tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3">
              {CONTACT.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary shrink-0 mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="break-words">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t" style={{ borderColor }} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Alar Solutions. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="https://alarsolutions.in/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="https://alarsolutions.in/terms" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="flex gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 text-muted-foreground hover:bg-primary hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}