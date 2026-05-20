import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

// Icon Components (Premium SVG Icons)
const Icons = {
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z" />
      <path d="M9 22V12H15V22" />
    </svg>
  ),

  About: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="9" r="3" />
      <path d="M7.5 18C8.4 15.8 10.1 14.7 12 14.7C13.9 14.7 15.6 15.8 16.5 18" />
    </svg>
  ),

  Services: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),

  Portfolio: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M2 10h20" />
    </svg>
  ),

  Blog: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 18v-4" />
      <path d="M12 9v.01" />
    </svg>
  ),

  Contact: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),

  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),

  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  BookCall: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8v4l3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    </svg>
  ),

  Sparkle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" />
    </svg>
  ),
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const forceScrollTop = () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    requestAnimationFrame(scrollTop);
    setTimeout(scrollTop, 0);
    setTimeout(scrollTop, 100);
    setTimeout(scrollTop, 250);
  };

  const handleFreshNavigation = () => {
    setIsMenuOpen(false);
    forceScrollTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  // Close menu and force top when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    forceScrollTop();
  }, [location.pathname]);

  const navLinks = [
    { path: "/", name: "Home", icon: Icons.Home() },
    { path: "/about", name: "About", icon: Icons.About() },
    { path: "/services", name: "Services", icon: Icons.Services() },
    { path: "/portfolio", name: "Portfolio", icon: Icons.Portfolio() },
    { path: "/blog", name: "Blog", icon: Icons.Blog() },
    { path: "/contact", name: "Contact", icon: Icons.Contact() },
  ];

  const handleBookCall = () => {
    setIsMenuOpen(false);

    if (location.pathname !== "/contact") {
      navigate("/contact");
    }

    forceScrollTop();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleFreshNavigation}>
            <div className="logo-wrapper">
              <img src={logo} alt="Happy Organize Logo" className="logo-img" />
              <div className="logo-glow"></div>
            </div>
            <span className="logo-text">Happy Organize</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleFreshNavigation}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="nav-icon">{link.icon}</span>
                <span>{link.name}</span>
                {hoveredLink === index && (
                  <span className="nav-sparkle">{Icons.Sparkle()}</span>
                )}
              </Link>
            ))}
          </div>

          {/* Book Now Button - Desktop */}
          <button onClick={handleBookCall} className="book-now-btn desktop-btn">
            <span className="btn-icon">{Icons.BookCall()}</span>
            <span>Book Free Call</span>
            <span className="btn-glow"></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            <span className="menu-icon-wrapper">
              {isMenuOpen ? Icons.Close() : Icons.Menu()}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleFreshNavigation}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                <span className="mobile-nav-icon">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Book Now Button - Mobile */}
            <button onClick={handleBookCall} className="book-now-btn mobile-book-btn">
              <span className="btn-icon">{Icons.BookCall()}</span>
              <span>Book Free Call</span>
              <span className="btn-glow"></span>
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(178, 58, 72, 0.08);
          font-family: 'DM Sans', 'Lato', sans-serif;
        }

        .navbar.scrolled {
          box-shadow: 0 4px 30px rgba(178, 58, 72, 0.08);
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: rgba(178, 58, 72, 0.12);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo Styles */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          position: relative;
          z-index: 1001;
        }

        .logo-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          position: relative;
          z-index: 2;
          transition: all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
        }

        .logo:hover .logo-img {
          transform: scale(1.05) rotate(2deg);
        }

        .logo-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(217, 122, 134, 0.4) 0%,
            transparent 70%
          );
          border-radius: 50%;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .logo:hover .logo-glow {
          opacity: 1;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(
            135deg,
            #B23A48 0%,
            #D97A86 50%,
            #B23A48 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.3px;
          transition: all 0.4s ease;
        }

        .logo:hover .logo-text {
          background-position: 100% center;
          letter-spacing: -0.2px;
        }

        /* Desktop Navigation Links */
        .nav-links {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .nav-link {
          color: #1F1F1F;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', 'Lato', sans-serif;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #B23A48, #D97A86);
          transition: all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover::before {
          width: 70%;
        }

        .nav-icon {
          display: inline-flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
        }

        .nav-link:hover .nav-icon {
          transform: translateY(-3px) scale(1.1);
          color: #D97A86;
        }

        .nav-link:hover {
          color: #B23A48;
          background: rgba(178, 58, 72, 0.06);
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #B23A48;
          background: rgba(178, 58, 72, 0.1);
          font-weight: 600;
          position: relative;
        }

        .nav-link.active::before {
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, #B23A48, #D97A86, #D97A86);
        }

        .nav-sparkle {
          position: absolute;
          right: -20px;
          top: -10px;
          animation: sparkleFloat 0.6s ease-out forwards;
          color: #D97A86;
        }

        @keyframes sparkleFloat {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }

          50% {
            opacity: 1;
            transform: translate(-10px, -15px) scale(1.2);
          }

          100% {
            opacity: 0;
            transform: translate(-20px, -30px) scale(0);
          }
        }

        /* Book Now Button */
        .book-now-btn {
          background: linear-gradient(135deg, #B23A48 0%, #D97A86 100%);
          color: #FFFFFF;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(178, 58, 72, 0.25);
          font-family: 'DM Sans', 'Lato', sans-serif;
        }

        .book-now-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(217, 122, 134, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .book-now-btn:hover::before {
          left: 100%;
        }

        .book-now-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(178, 58, 72, 0.35);
          background: linear-gradient(135deg, #D97A86 0%, #B23A48 100%);
        }

        .book-now-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .btn-icon {
          display: inline-flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
        }

        .book-now-btn:hover .btn-icon {
          transform: rotate(15deg) scale(1.1);
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 241, 243, 0.4),
            transparent
          );
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
          pointer-events: none;
        }

        .book-now-btn:hover .btn-glow {
          width: 200px;
          height: 200px;
        }

        .desktop-btn {
          margin-left: 1rem;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: rgba(178, 58, 72, 0.06);
          border: 1px solid rgba(178, 58, 72, 0.1);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
          color: #B23A48;
          position: relative;
          overflow: hidden;
          z-index: 1001;
        }

        .mobile-menu-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(178, 58, 72, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.4s, height 0.4s;
        }

        .mobile-menu-btn:hover::before {
          width: 100px;
          height: 100px;
        }

        .menu-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .mobile-menu-btn:hover {
          background: rgba(178, 58, 72, 0.12);
          transform: scale(1.05);
          border-color: rgba(178, 58, 72, 0.2);
        }

        .mobile-menu-btn:active .menu-icon-wrapper {
          transform: scale(0.95);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: #FFFFFF;
          box-shadow: -10px 0 40px rgba(178, 58, 72, 0.15);
          display: flex;
          flex-direction: column;
          transition: right 0.5s cubic-bezier(0.32, 0.72, 0.2, 1);
          z-index: 999;
          will-change: right;
        }

        .mobile-nav.active {
          right: 0;
        }

        .mobile-nav .mobile-nav-links {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .mobile-nav.active .mobile-nav-links {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.1s;
        }

        .mobile-nav-links {
          flex: 1;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 80px;
        }

        .mobile-nav-link {
          color: #1F1F1F;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 1rem 1rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: 'DM Sans', 'Lato', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(217, 122, 134, 0.3),
            transparent
          );
          transition: left 0.4s ease;
        }

        .mobile-nav-link:hover::before {
          left: 100%;
        }

        .mobile-nav-icon {
          display: inline-flex;
          align-items: center;
          width: 24px;
          transition: transform 0.3s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(178, 58, 72, 0.08);
          color: #B23A48;
          transform: translateX(8px);
        }

        .mobile-nav-link:hover .mobile-nav-icon {
          transform: translateX(4px) scale(1.1);
          color: #D97A86;
        }

        .mobile-nav-link.active {
          background: rgba(178, 58, 72, 0.12);
          color: #B23A48;
          font-weight: 600;
          border-left: 3px solid #D97A86;
        }

        /* Mobile Book Button */
        .mobile-book-btn {
          margin-top: 1.5rem;
          justify-content: center;
          padding: 1rem;
          font-size: 1rem;
          background: linear-gradient(135deg, #B23A48 0%, #D97A86 100%);
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(122, 30, 44, 0.3);
          backdrop-filter: blur(4px);
          z-index: 998;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 1100px) {
          .nav-links {
            gap: 0.25rem;
          }

          .nav-link {
            padding: 0.5rem 0.9rem;
            font-size: 0.85rem;
          }

          .desktop-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 968px) {
          .nav-links {
            gap: 0.15rem;
          }

          .nav-link {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
          }

          .desktop-btn {
            padding: 0.55rem 1rem;
            font-size: 0.85rem;
          }

          .logo-text {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 850px) {
          .nav-links {
            display: none;
          }

          .desktop-btn {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-text {
            font-size: 1.2rem;
          }

          .logo-img {
            height: 36px;
          }

          .mobile-nav-links {
            margin-top: 100px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0.75rem 1rem;
          }

          .logo-text {
            font-size: 1.5rem;
          }

          .mobile-nav {
            width: 100%;
            max-width: 100%;
          }

          .mobile-nav-links {
            margin-top: 80px;
            padding: 1.5rem;
          }
        }

        body {
          padding-top: 74px;
        }
      `}</style>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;