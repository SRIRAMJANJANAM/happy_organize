// About.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-left, .animate-slide-right"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  const beliefCards = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Clutter is not a personal failing",
      description: "It's just a problem to solve — together.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Every home deserves to feel organised",
      description: "No matter the size.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "The best system is one you'll actually stick to",
      description: "Designed for your real life.",
    },
  ];

  const workSteps = [
    {
      number: "Step 1.",
      title: "Space Evaluation & Belongings Assessment",
      description:
        "We assess your space, storage & belongings to understand your lifestyle and organizing goals.",
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 21.5L24 9l16 12.5" />
          <path d="M13 20.5V39h22V20.5" />
          <path d="M18 39V27h12v12" />
          <path d="M31 14.5V9h5v9.5" />
          <circle cx="32.5" cy="31.5" r="7" />
          <path d="M37.5 36.5L42 41" />
          <path d="M20 19h8" />
        </svg>
      ),
    },
    {
      number: "Step 2.",
      title: "Decluttering & Smart Categorization",
      description:
        "We help you declutter mindfully & sort your belongings into smart categories for a clutter-free start.",
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 17h28l-2.4 23H12.4L10 17z" />
          <path d="M17 17v-3.5A5.5 5.5 0 0 1 22.5 8h3A5.5 5.5 0 0 1 31 13.5V17" />
          <path d="M18 25h12" />
          <path d="M18 31h8" />
          <path d="M31 30l3 3 6-7" />
          <path d="M9 10l2 2" />
          <path d="M39 10l-2 2" />
          <path d="M24 4v3" />
        </svg>
      ),
    },
    {
      number: "Step 3.",
      title: "Organizer Recommendations & Space Planning",
      description:
        "We suggest the right organizers & plan the layout to maximize space, functionality & efficiency.",
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="8" y="9" width="32" height="30" rx="4" />
          <path d="M16 9v30" />
          <path d="M8 20h32" />
          <path d="M16 29h24" />
          <path d="M25 20v19" />
          <path d="M31.5 13.5h4" />
          <path d="M11.5 33.5h1" />
          <path d="M32 32l5 5" />
          <path d="M37 32l-5 5" />
        </svg>
      ),
    },
    {
      number: "Step 4.",
      title: "Systematic Organizing, Folding & Labelling",
      description:
        "We organize each category systematically, fold neatly & label everything for easy access and long-term maintenance.",
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="8" y="10" width="32" height="28" rx="4" />
          <path d="M8 21h32" />
          <path d="M19 10v28" />
          <path d="M29 10v11" />
          <path d="M13 16h2" />
          <path d="M23 16h2" />
          <path d="M33 16h2" />
          <path d="M24 28h10" />
          <path d="M24 33h7" />
          <path d="M35 28l5 5-5 5" />
          <path d="M40 33H29" />
        </svg>
      ),
    },
    {
      number: "Step 5.",
      title: "Final Setup for Easy Maintenance",
      description:
        "We complete the setup & create simple systems that help you maintain an organized space effortlessly.",
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 23L24 11l15 12" />
          <path d="M14 21.5V38h20V21.5" />
          <circle cx="24" cy="28" r="6.5" />
          <path d="M21 28l2.2 2.2L28 25.5" />
          <path d="M8 10l2 2" />
          <path d="M40 10l-2 2" />
          <path d="M24 4v4" />
          <path d="M6 34h4" />
          <path d="M38 34h4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Sridevi Dadi | Professional Home Organizer in Hyderabad | 100+ Projects Completed | Happy Organize</title>
        <meta name="title" content="About Sridevi Dadi | Professional Home Organizer in Hyderabad | 100+ Projects Completed | Happy Organize" />
        <meta name="description" content="Meet Sridevi Dadi, founder of Happy Organize - Hyderabad's trusted professional home organizer. 100+ homes transformed with clutter-free, organized spaces. Book your free consultation today!" />
        <meta name="keywords" content="professional home organizer Hyderabad, home organizing services Hyderabad, decluttering expert Hyderabad, wardrobe organizer Hyderabad, kitchen organization Hyderabad, home organization specialist, professional organizer India, Sridevi Dadi organizer, Happy Organize founder, best home organizer Hyderabad, closet organizer Hyderabad, pantry organization Hyderabad, space optimization Hyderabad, home decluttering services, professional organizer near me, home organization solutions, clutter-free living Hyderabad, Marie Kondo method Hyderabad, custom home organization, residential organizing services" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://happyorganize.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyorganize.com/about" />
        <meta property="og:title" content="About Sridevi Dadi | Professional Home Organizer in Hyderabad | 100+ Projects" />
        <meta property="og:description" content="Meet Hyderabad's trusted professional home organizer. Sridevi Dadi and team have transformed 100+ homes with custom organization solutions. Free consultation available!" />
        <meta property="og:image" content="https://happyorganize.com/images/celebrities/founder-og.jpg" />
        <meta property="og:site_name" content="Happy Organize" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://happyorganize.com/about" />
        <meta property="twitter:title" content="About Sridevi Dadi | Professional Home Organizer in Hyderabad" />
        <meta property="twitter:description" content="Transform your home with Hyderabad's #1 professional organizing service. 100+ happy homes, custom solutions, lasting results." />
        <meta property="twitter:image" content="https://happyorganize.com/images/celebrities/founder-og.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Sridevi Dadi - Happy Organize" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.385044;78.486671" />
        <meta name="ICBM" content="17.385044, 78.486671" />
        
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Happy Organize",
            "url": "https://happyorganize.com",
            "logo": "https://happyorganize.com/logo.png",
            "image": "https://happyorganize.com/images/celebrities/founder.png",
            "description": "Professional home organizing services in Hyderabad. Transform your home with custom organization solutions from expert organizer Sridevi Dadi.",
            "founder": {
              "@type": "Person",
              "name": "Sridevi Dadi",
              "jobTitle": "Founder & Professional Home Organizer",
              "url": "https://happyorganize.com/about",
              "sameAs": [
                "https://instagram.com/happy.organize"
              ]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 17.385044,
              "longitude": 78.486671
            },
            "priceRange": "₹₹",
            "telephone": "+919348275615",
            "email": "sridevidadi0501@gmail.com",
            "openingHours": "Mo-Sa 09:00-18:00",
            "areaServed": {
              "@type": "City",
              "name": "Hyderabad"
            },
            "serviceType": "Professional Home Organizing",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Organization Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wardrobe Organization",
                    "description": "Transform your wardrobe into an organized, accessible space"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Organization",
                    "description": "Create an efficient, clutter-free kitchen that works for you"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pantry Organization",
                    "description": "Maximize pantry space with smart storage solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Home Decluttering",
                    "description": "Mindful decluttering services for a peaceful living space"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Home Organization",
                    "description": "Complete home organization solutions for every room"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "87",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Happy Clients"
              },
              "reviewBody": "The kitchen is still perfect! My husband couldn't believe it was the same wardrobe."
            }
          })}
        </script>
        
        {/* About Page Specific Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Happy Organize - Professional Home Organizing Services in Hyderabad",
            "description": "Learn about Sridevi Dadi, founder of Happy Organize, and our mission to transform homes in Hyderabad with professional organizing services. 100+ projects completed with lasting results.",
            "mainEntity": {
              "@type": "Person",
              "name": "Sridevi Dadi",
              "description": "Founder and professional home organizer at Happy Organize, specializing in creating organized, clutter-free homes in Hyderabad.",
              "jobTitle": "Professional Home Organizer & Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "Happy Organize"
              },
              "knowsAbout": [
                "Home Organization",
                "Decluttering",
                "Space Optimization",
                "Wardrobe Organization",
                "Kitchen Organization",
                "Pantry Organization",
                "Closet Design",
                "Storage Solutions"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://happyorganize.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://happyorganize.com/about"
                }
              ]
            }
          })}
        </script>
        
        {/* FAQ Schema for Common Questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What home organizing services do you offer in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive home organizing services including wardrobe organization, kitchen organization, pantry organization, closet organization, and whole-home decluttering in Hyderabad."
                }
              },
              {
                "@type": "Question",
                "name": "How much do professional organizing services cost in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our professional home organizing services in Hyderabad are competitively priced. Contact us for a free consultation and custom quote based on your specific needs and space size."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Sridevi Dadi, founder of Happy Organize?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sridevi Dadi is a professional home organizer and founder of Happy Organize, based in Hyderabad. With over 100 completed projects, she specializes in transforming cluttered spaces into organized, functional homes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free consultation for home organizing in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer free, no-obligation consultations to understand your home organizing needs and provide personalized solutions for your space in Hyderabad."
                }
              }
            ]
          })}
        </script>
        
        {/* Additional Keywords Meta for Better Ranking */}
        <meta name="keywords" content="home organizer Hyderabad, professional organizer, decluttering service, wardrobe organization, kitchen organizing, pantry organization, closet organizer, home organization expert, space optimization Hyderabad, organized living, clutter consultant, storage solutions, custom organization, residential organizer, home edit Hyderabad, professional decluttering, organization specialist, home systems, neat home, tidy home service, Marie Kondo Hyderabad, konmari method, organizing consultant, home efficiency, smart storage, organization tips, home reset, room transformation, organizing services, home harmony" />
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <meta name="geo.position" content="17.385044;78.486671" />
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Verification Tags (Add your actual verification codes) */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        
        {/* Additional Meta for Rich Results */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Alternate Language Versions */}
        <link rel="alternate" href="https://happyorganize.com/about" hrefLang="en-in" />
        <link rel="alternate" href="https://happyorganize.com/about" hrefLang="en" />
        <link rel="alternate" href="https://happyorganize.com/about" hrefLang="x-default" />
      </Helmet>

      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-scale-in">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>About Happy Organize</span>
              </div>

              <h1 className="hero-title animate-fade-in">
                We know what a loved home feels like.
                <br />
                <span className="hero-highlight hero-highlight-animation">
                  And we want every family to have that.
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="founder-section">
          <div className="container">
            <div className="founder-grid">
              <div className="founder-image-wrapper animate-slide-left">
                <div className="founder-image-container">
                  <img
                    src="/images/celebrities/founder.png"
                    alt="Sridevi Dadi — Founder, Happy Organize"
                    className="founder-image"
                  />
                  <div className="founder-badge">
                    <span>Sridevi Dadi</span>
                    <small>Founder, Happy Organize</small>
                  </div>
                </div>
              </div>

              <div className="founder-content animate-slide-right">
                <div className="section-label">
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>ABOUT SRIDEVI</span>
                </div>

                <h2 className="section-title">
                  We know what a{" "}
                  <span className="gradient-text">loved home</span> feels like.
                </h2>

                <p className="founder-quote">
                  And we want every family to have that.
                </p>

                <div className="founder-text">
                  <p>
                    Hi, I'm Sridevi Dadi — founder of Happy Organize and the
                    person you'll likely meet first when you reach out to us. I'm
                    a professional home organiser based in Hyderabad, and over the
                    past few years, our team has had the privilege of completing
                    100+ projects and building a community of families who trust
                    us with their homes.
                  </p>

                  <p>
                    But what we're most proud of? The messages we get weeks after
                    a session:
                  </p>

                  <div className="testimonial-quotes">
                    <p className="quote">
                      "Sridevi, the kitchen is still perfect."
                    </p>
                    <p className="quote">
                      "My husband couldn't believe it was the same wardrobe."
                    </p>
                    <p className="quote">
                      "It still feels like you were just here."
                    </p>
                  </div>

                  <p className="closing-text">
                    That's what we work for. Not just to organise spaces, but to
                    create that lasting feeling of peace and care in every home we
                    touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Section */}
        <section className="origin-section">
          <div className="container">
            <div className="origin-content animate-fade-in">
              <p className="origin-lead">
                There's a particular kind of peace that lives in a well-kept home.
              </p>

              <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                We grew up watching it — the way a home arranged with care feels
                fundamentally different from one that isn't. Not just visually,
                but emotionally. The kitchen where everything has a place. The
                bedroom where you actually breathe. The living room that welcomes
                you at the end of a hard day.
              </p>

              <p className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                That's why Happy Organize exists. We believe every family deserves
                that feeling — not just families who have the time, or the space,
                or a knack for organisation.{" "}
                <span className="highlight-text">Every family.</span>
              </p>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="how-work-section">
          <div className="container">
            <div className="section-header animate-fade-in">
              <div className="section-label centered">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>HOW WE WORK</span>
              </div>

              <h2 className="section-title centered">
                On the Service day, our work will start from
              </h2>
            </div>

            <div className="steps-wrapper">
              {workSteps.map((step, index) => (
                <div
                  key={index}
                  className="step-card animate-slide-up"
                  style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                >
                  <div className="step-number-badge">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="step-icon">
                    <span className="step-icon-glow"></span>
                    {step.icon}
                  </div>

                  <div className="step-content">
                    <div className="step-heading">{step.number}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="beliefs-section">
          <div className="container">
            <div className="section-label centered animate-fade-in">
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="section-title centered animate-fade-in">
              What we <span className="gradient-text">believe</span>
            </h2>

            <div className="beliefs-grid">
              {beliefCards.map((belief, index) => (
                <div
                  key={index}
                  className="belief-card animate-scale-in card-hover-3d"
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  <div className="belief-icon">{belief.icon}</div>
                  <h3 className="belief-title">{belief.title}</h3>
                  <p className="belief-description">{belief.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="connect-section">
          <div className="container">
            <div className="connect-grid">
              <div className="connect-info animate-slide-left">
                <h2 className="connect-title">
                  Let's <span className="gradient-text-light">connect</span>
                </h2>

                <div className="connect-details">
                  <div
                    className="connect-item animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Based in Hyderabad — serving homes across the city</span>
                  </div>

                  <div
                    className="connect-item animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:9348275615">9348275615</a>
                  </div>

                  <div
                    className="connect-item animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href="mailto:sridevidadi0501@gmail.com">
                      sridevidadi0501@gmail.com
                    </a>
                  </div>

                  <div
                    className="connect-item animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
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

              <div className="connect-action animate-slide-right">
                <div className="connect-card">
                  <div className="connect-card-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>

                  <h3>Ready to transform your space?</h3>
                  <p>
                    Let's start with a free, no-obligation conversation about your
                    home.
                  </p>

                  <Link
                    to="/contact"
                    className="btn btn-primary btn-large btn-hover-effect"
                  >
                    <span className="btn-text">Let's Work Together →</span>
                    <svg
                      className="btn-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .about-page {
            background: #FFF1F3;
            font-family: 'DM Sans', 'Lato', sans-serif;
            color: #1F1F1F;
            overflow-x: hidden;
            position: relative;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }

          .section-label {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.25rem;
            background: rgba(178, 58, 72, 0.06);
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            color: #B23A48;
            margin-bottom: 1.5rem;
            letter-spacing: 0.5px;
          }

          .section-label.centered {
            display: flex;
            justify-content: center;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-section {
            padding: 8rem 0 5rem;
            background: linear-gradient(135deg, #FFF1F3 0%, #FFFFFF 50%, #FFF1F3 100%);
            position: relative;
            overflow: hidden;
          }

          .hero-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.25rem;
            background: rgba(178, 58, 72, 0.08);
            border: 1px solid rgba(178, 58, 72, 0.15);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #B23A48;
            margin-bottom: 2rem;
          }

          .hero-title {
            font-family: 'Cormorant Garamond', 'Playfair Display', serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 600;
            color: #1F1F1F;
            line-height: 1.2;
          }

          .hero-highlight {
            color: #B23A48;
            display: inline-block;
            font-style: italic;
            font-size: clamp(2rem, 4vw, 3rem);
          }

          .hero-highlight-animation {
            animation: highlightPulse 2.5s ease-in-out infinite;
          }

          @keyframes highlightPulse {
            0%, 100% {
              color: #B23A48;
            }
            50% {
              color: #7A1E2C;
            }
          }

          .founder-section {
            padding: 5rem 0;
            background: #FFFFFF;
          }

          .founder-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
            align-items: center;
          }

          .founder-image-wrapper {
            position: relative;
          }

          .founder-image-container {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .founder-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .founder-image-container:hover .founder-image {
            transform: scale(1.02);
          }

          .founder-badge {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: rgba(178, 58, 72, 0.95);
            backdrop-filter: blur(10px);
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            text-align: center;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .founder-badge span {
            display: block;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem;
            font-weight: 700;
          }

          .founder-badge small {
            font-size: 0.7rem;
            opacity: 0.8;
          }

          .founder-content {
            padding: 1rem;
          }

          .section-title {
            font-family: 'Cormorant Garamond', 'Playfair Display', serif;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 1.5rem;
            line-height: 1.3;
          }

          .section-title.centered {
            text-align: center;
          }

          .gradient-text {
            background: linear-gradient(135deg, #B23A48, #7A1E2C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-style: italic;
          }

          .founder-quote {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.8rem;
            font-style: italic;
            color: #B23A48;
            margin: 1rem 0 1.5rem 0;
            line-height: 1.3;
          }

          .founder-text p {
            font-size: 1rem;
            line-height: 1.8;
            color: #1F1F1F;
            margin-bottom: 1.2rem;
            opacity: 0.9;
          }

          .testimonial-quotes {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
            border-left: 3px solid #D97A86;
          }

          .testimonial-quotes .quote {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            color: #7A1E2C;
            margin-bottom: 0.75rem;
            font-size: 1rem;
          }

          .closing-text {
            font-weight: 500;
            color: #B23A48;
            margin-top: 1rem;
          }

          .origin-section {
            padding: 5rem 0;
            background: #FFF1F3;
          }

          .origin-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .origin-lead {
            font-family: 'Cormorant Garamond', 'Georgia', serif;
            font-size: clamp(1.2rem, 2vw, 1.4rem);
            font-style: italic;
            color: #7A1E2C;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .origin-content p {
            font-size: clamp(0.95rem, 1.3vw, 1.05rem);
            line-height: 1.9;
            color: #1F1F1F;
            margin-bottom: 1.5rem;
            opacity: 0.9;
          }

          .highlight-text {
            background: linear-gradient(120deg, #D97A86 0%, #F0C0C6 100%);
            padding: 0.1em 0.3em;
            border-radius: 4px;
            font-weight: 600;
            color: #7A1E2C;
          }

          /* HOW WORK SECTION */
          .how-work-section {
            padding: 5rem 0;
            background:
              radial-gradient(circle at top left, rgba(217, 122, 134, 0.13), transparent 28%),
              radial-gradient(circle at bottom right, rgba(178, 58, 72, 0.08), transparent 32%),
              #FFFFFF;
          }

          .section-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .steps-wrapper {
            max-width: 980px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1.15rem;
          }

          .step-card {
            display: grid;
            grid-template-columns: auto auto 1fr;
            gap: 1.35rem;
            align-items: center;
            background: rgba(255, 249, 250, 0.9);
            border: 1px solid rgba(178, 58, 72, 0.12);
            border-radius: 22px;
            padding: 1.4rem 1.6rem;
            margin-bottom: 0;
            transition: all 0.35s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 26px rgba(178, 58, 72, 0.045);
          }

          .step-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(180deg, #B23A48, #D97A86);
            opacity: 0.75;
          }

          .step-card::after {
            content: "";
            position: absolute;
            top: -60px;
            right: -70px;
            width: 160px;
            height: 160px;
            border-radius: 999px;
            background: rgba(217, 122, 134, 0.09);
            transition: all 0.35s ease;
          }

          .step-card:hover {
            transform: translateX(8px) translateY(-3px);
            border-color: rgba(178, 58, 72, 0.28);
            box-shadow: 0 18px 38px rgba(178, 58, 72, 0.11);
            background: #FFFFFF;
          }

          .step-card:hover::after {
            transform: scale(1.15);
            background: rgba(217, 122, 134, 0.14);
          }

          .step-number-badge {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #FFFFFF;
            border: 1px solid rgba(178, 58, 72, 0.18);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #B23A48;
            font-size: 0.78rem;
            font-weight: 900;
            letter-spacing: 0.06em;
            box-shadow: 0 8px 18px rgba(178, 58, 72, 0.07);
            position: relative;
            z-index: 2;
          }

          .step-icon {
            width: 78px;
            height: 78px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            background:
              linear-gradient(135deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0)),
              linear-gradient(135deg, #B23A48 0%, #D97A86 100%);
            box-shadow: 0 16px 30px rgba(178, 58, 72, 0.25);
            position: relative;
            z-index: 2;
            flex-shrink: 0;
            transition: all 0.35s ease;
          }

          .step-icon svg {
            position: relative;
            z-index: 3;
            stroke: currentColor;
            filter: drop-shadow(0 5px 10px rgba(122, 30, 44, 0.25));
          }

          .step-icon-glow {
            position: absolute;
            inset: 8px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.18);
          }

          .step-card:hover .step-icon {
            transform: rotate(-3deg) scale(1.04);
            box-shadow: 0 20px 36px rgba(178, 58, 72, 0.32);
          }

          .step-content {
            flex: 1;
            position: relative;
            z-index: 2;
          }

          .step-heading {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem;
            font-weight: 800;
            color: #D97A86;
            margin-bottom: 0.25rem;
          }

          .step-title {
            font-size: 1.15rem;
            font-weight: 800;
            color: #1F1F1F;
            margin-bottom: 0.5rem;
            letter-spacing: -0.01em;
          }

          .step-description {
            font-size: 0.95rem;
            color: #5a5a5a;
            line-height: 1.6;
            max-width: 720px;
          }

          /* Beliefs Section */
          .beliefs-section {
            padding: 5rem 0;
            background: #FFF1F3;
          }

          .beliefs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .belief-card {
            background: #FFFFFF;
            padding: 2.5rem 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(178, 58, 72, 0.08);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: center;
          }

          .card-hover-3d:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 35px rgba(178, 58, 72, 0.08);
            border-color: rgba(178, 58, 72, 0.2);
          }

          .belief-icon {
            display: inline-flex;
            padding: 1rem;
            background: rgba(178, 58, 72, 0.06);
            border-radius: 12px;
            margin-bottom: 1.5rem;
            color: #B23A48;
          }

          .belief-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.3rem;
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 0.75rem;
            line-height: 1.4;
          }

          .belief-description {
            font-size: 0.95rem;
            color: #6D6D6D;
            line-height: 1.6;
          }

          /* Connect Section */
          .connect-section {
            padding: 5rem 0;
            background: linear-gradient(135deg, #7A1E2C 0%, #B23A48 100%);
            color: #FFFFFF;
            position: relative;
            overflow: hidden;
          }

          .connect-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }

          .connect-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2rem, 3.5vw, 3rem);
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 2rem;
            line-height: 1.3;
          }

          .gradient-text-light {
            color: #D97A86;
            font-style: italic;
          }

          .connect-details {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .connect-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1rem;
            color: #FFF1F3;
            opacity: 0.9;
          }

          .connect-item svg {
            color: #D97A86;
            flex-shrink: 0;
          }

          .connect-item a {
            color: #FFF1F3;
            text-decoration: none;
            transition: color 0.3s;
          }

          .connect-item a:hover {
            color: #FFFFFF;
          }

          .connect-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 12px;
            padding: 2.5rem;
            text-align: center;
          }

          .connect-card-icon {
            margin-bottom: 1.5rem;
            color: #D97A86;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .connect-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.5rem;
            color: #FFFFFF;
            margin-bottom: 1rem;
          }

          .connect-card p {
            color: #FFF1F3;
            margin-bottom: 2rem;
            line-height: 1.6;
            opacity: 0.9;
          }

          .btn {
            padding: 1rem 2rem;
            border-radius: 4px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
          }

          .btn-hover-effect::before {
            content: '';
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
            width: 300px;
            height: 300px;
          }

          .btn-primary {
            background: #FFFFFF;
            color: #B23A48;
          }

          .btn-primary:hover {
            background: #FFF1F3;
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }

          .btn-large {
            padding: 1.2rem 2.5rem;
            font-size: 0.9rem;
          }

          .btn-icon {
            transition: transform 0.3s ease;
          }

          .btn:hover .btn-icon {
            transform: translateX(5px);
          }

          .animate-fade-in,
          .animate-scale-in,
          .animate-slide-up,
          .animate-slide-left,
          .animate-slide-right {
            opacity: 0;
          }

          .animate-fade-in {
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-scale-in {
            transform: scale(0.92);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-up {
            transform: translateY(50px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-left {
            transform: translateX(-50px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-right {
            transform: translateX(50px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .is-visible {
            opacity: 1 !important;
            transform: translate(0, 0) scale(1) !important;
          }

          @media (max-width: 1024px) {
            .founder-grid,
            .connect-grid {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }

            .founder-image-wrapper {
              max-width: 400px;
              margin: 0 auto;
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1.25rem;
            }

            .hero-section {
              padding: 5rem 0 3rem;
            }

            .step-card {
              grid-template-columns: auto 1fr;
              gap: 1rem;
              padding: 1.25rem;
            }

            .step-number-badge {
              display: none;
            }

            .step-icon {
              width: 68px;
              height: 68px;
              border-radius: 20px;
            }

            .step-icon svg {
              width: 36px;
              height: 36px;
            }

            .step-title {
              font-size: 1rem;
            }

            .beliefs-grid {
              grid-template-columns: 1fr;
            }

            .founder-quote {
              font-size: 1.4rem;
            }
          }

          @media (max-width: 480px) {
            .connect-item {
              font-size: 0.85rem;
            }

            .step-card {
              grid-template-columns: 1fr;
              text-align: left;
            }

            .step-icon {
              width: 64px;
              height: 64px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default About;