import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterNavigation = () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    requestAnimationFrame(scrollToTop);
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 150);
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/happy.organize",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@happy.organize?si=f97Z-LUWS8TVySX-",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.94 29.94 0 0 0 .46-5.25 29.94 29.94 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/16yLF5AoWq/",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="footer">
      {/* Add Telugu font support in a style tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap');
          .telugu-text {
            font-family: 'Noto Sans Telugu', 'Kohinoor Telugu', 'Mallanna', 'Gautami', 'Nirmala UI', 'Segoe UI', sans-serif;
            font-size: 1rem;
            font-weight: 500;
            display: inline-block;
          }
        `,
        }}
      />

      {/* ══════════════ REPEATING CTA BANNER ══════════════ */}
      <div className="footer-cta-section">
        <div className="footer-container">
          <div className="footer-cta-content animate-scale-in">
            <h2 className="footer-cta-title">
              Your home deserves <br />
              <em>to feel loved.</em>
            </h2>

            <p className="footer-cta-text animate-fade-in">
              Let's create the calm, organised space you've been dreaming of.
            </p>

            <Link
              to="/contact"
              onClick={handleFooterNavigation}
              className="btn btn-cta btn-hover-effect animate-slide-up"
            >
              <span>Book a Free Consultation</span>
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="footer-divider"></div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1 - Brand */}
            <div className="footer-col animate-slide-up">
              <div className="footer-brand">
                <h3 className="brand-name">
                  Happy <span className="brand-accent">Organize</span>
                </h3>
                <p className="brand-tagline">
                  When your home feels loved, life feels lighter.
                </p>
              </div>

              <p className="footer-description">
                We're Sridevi and the Happy Organize team — giving Indian
                families the gift of a home that feels like{" "}
                <span className="telugu-text">అమ్మ చేసినట్టు</span>. Every shelf
                arranged with intention. Every corner handled with care.
              </p>

              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div
              className="footer-col animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleFooterNavigation}
                      className="footer-link"
                    >
                      <span className="link-icon">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Get in Touch */}
            <div
              className="footer-col animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h4 className="footer-title">Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+919348275615">9348275615</a>
                </div>

                <div className="contact-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:sridevidadi0501@gmail.com">
                    sridevidadi0501@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <a
                    href="https://instagram.com/happy.organize"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @happy.organize
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Happy Organize. All rights reserved.
            </p>

            <div className="developed-by">
              <span className="dev-text">Developed by</span>
              <a
                href="https://smyvisiontechnologies.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-link"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary: #b23a48;
          --secondary: #d97a86;
          --accent: #7a1e2c;
          --bg: #fff1f3;
          --surface: #ffffff;
          --text: #1f1f1f;
          --muted: #6d6d6d;
        }

        .footer {
          background: linear-gradient(
            160deg,
            #7a1e2c 0%,
            #b23a48 40%,
            #7a1e2c 100%
          );
          color: #ffffff;
          font-family: "DM Sans", "Lato", sans-serif;
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .telugu-text {
          font-family: "Noto Sans Telugu", "Kohinoor Telugu", "Mallanna",
            "Gautami", "Nirmala UI", "Segoe UI", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .footer-cta-section {
          padding: 5rem 0 2rem;
          position: relative;
        }

        .footer-cta-content {
          text-align: center;
          max-width: 750px;
          margin: 0 auto;
        }

        .footer-cta-title {
          font-family: "Cormorant Garamond", "Playfair Display", serif;
          font-size: clamp(3rem, 6vw, 5rem);
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 400;
          line-height: 1.08;
        }

        .footer-cta-title em {
          color: #f2c4cb;
          font-style: italic;
        }

        .footer-cta-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .footer-divider {
          width: 60px;
          height: 2px;
          background: rgba(255, 246, 247, 0.3);
          margin: 3rem auto 0;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1.1rem 2.5rem;
          border-radius: 3px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1.2);
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 2px solid transparent;
          cursor: pointer;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .btn-hover-effect::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .btn-hover-effect:hover::before {
          width: 350px;
          height: 350px;
        }

        .btn-cta {
          background: white;
          color: #b23a48;
          border: none;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 1.3rem 3rem;
        }

        .btn-cta:hover {
          background: #fff1f3;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-icon {
          transform: translateX(5px);
        }

        .animate-fade-in {
          animation: fadeInUp 0.9s cubic-bezier(0.25, 0.8, 0.25, 1)
            forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.9s cubic-bezier(0.25, 0.8, 0.25, 1)
            forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)
            forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-main {
          padding: 4rem 0 3rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 1fr;
          gap: 3rem;
        }

        .footer-brand {
          margin-bottom: 1.5rem;
        }

        .brand-name {
          font-family: "Cormorant Garamond", "Playfair Display", serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.35rem;
          color: #ffffff;
        }

        .brand-accent {
          color: #d97a86;
        }

        .brand-tagline {
          font-size: 0.9rem;
          opacity: 0.85;
          margin: 0;
          font-style: italic;
          font-family: "Cormorant Garamond", serif;
          color: #fff1f3;
        }

        .footer-description {
          font-size: 0.9rem;
          line-height: 1.7;
          opacity: 0.85;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .footer-description em,
        .footer-description .telugu-text {
          color: #d97a86;
          font-style: italic;
        }

        .footer-social {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 4px;
          background: rgba(255, 241, 243, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.35s ease;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid rgba(255, 241, 243, 0.18);
        }

        .social-link:hover {
          transform: translateY(-4px);
          background: rgba(217, 122, 134, 0.28);
          border-color: #d97a86;
          color: #fff1f3;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .footer-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
          color: #ffffff;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 2px;
          background: #d97a86;
          transition: width 0.4s ease;
        }

        .footer-col:hover .footer-title::after {
          width: 60px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.7rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: all 0.35s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          opacity: 1;
          transform: translateX(8px);
          color: #fff1f3;
        }

        .link-icon {
          font-size: 0.75rem;
          transition: transform 0.35s ease;
          color: #d97a86;
        }

        .footer-link:hover .link-icon {
          transform: translateX(4px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.88rem;
          opacity: 0.85;
          color: #ffffff;
          transition: opacity 0.3s ease;
        }

        .contact-item:hover {
          opacity: 1;
        }

        .contact-item svg {
          color: #d97a86;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-item a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #d97a86;
        }

        .footer-bottom {
          padding: 1.8rem 0;
          border-top: 1px solid rgba(255, 241, 243, 0.16);
          background: rgba(0, 0, 0, 0.08);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.82rem;
        }

        .copyright {
          opacity: 0.65;
          margin: 0;
          color: #ffffff;
        }

        .developed-by {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.7;
          color: #ffffff;
        }

        .dev-text {
          font-size: 0.78rem;
        }

        .dev-link {
          color: #d97a86;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .dev-link:hover {
          color: #fff1f3;
          opacity: 1;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }

          .footer-col:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 1.25rem;
          }

          .footer-cta-section {
            padding: 3.5rem 0 2rem;
          }

          .footer-main {
            padding: 3rem 0 2rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-col:first-child {
            grid-column: auto;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-title {
            text-align: center;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-links {
            text-align: center;
          }

          .footer-link {
            justify-content: center;
          }

          .contact-item {
            justify-content: center;
            text-align: center;
          }

          .footer-brand {
            text-align: center;
          }

          .footer-description {
            text-align: center;
          }

          .footer-social {
            justify-content: center;
          }

          .btn-cta {
            width: 100%;
            max-width: 350px;
            justify-content: center;
          }

          .developed-by {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 1rem;
          }

          .btn-cta {
            padding: 1rem 1.5rem;
            font-size: 0.8rem;
          }

          .footer-cta-title {
            font-size: clamp(2.2rem, 5vw, 3.5rem);
          }

          .telugu-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;