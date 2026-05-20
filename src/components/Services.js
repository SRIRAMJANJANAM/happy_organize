import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Services() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-left, .animate-slide-right').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const services = [
    {
      id: "kitchen",
      title: "Kitchen Organising",
      subtitle: "A kitchen that finally makes sense.",
      description: "In most Indian homes, the kitchen carries everything — the cooking, the chaos, the memory of every meal. It's also where clutter builds the fastest: the mismatched dabbas, the expired packets pushed to the back, the cabinet nobody opens because nobody knows what's in it.",
      detail: "We'll go through it all with you — every shelf, every drawer, every cabinet — and build a kitchen that flows the way you actually cook. Logical. Easy. Beautiful.",
      changes: [
        "Your masala shelf will finally make sense",
        "Your fridge will be a pleasure to open",
        "Your counter will have room to breathe",
        "The system we build is made for your family — not a stranger's"
      ],
      cta: "Book Kitchen Organising ",
      image: "/images/celebrities/kitchen.png",
      imageThumb: "/images/celebrities/kitchen.png",
      imageAlt: "Beautifully organized kitchen with clean countertops and labeled containers"
    },
    {
      id: "wardrobe",
      title: "Wardrobe & Bedroom",
      subtitle: "Start your mornings in peace, not panic.",
      description: "A cluttered bedroom is one of those quiet stresses we stop noticing — until it's gone. The wardrobe where you can never find the right dupatta. The shelf where things just pile up. The bedroom that never quite feels restful.",
      detail: "We'll transform it. With care, with patience, and with deep respect for your belongings and your memories. Nothing gets thrown away without your say. Everything finds its rightful place.",
      changes: [
        "You'll open your wardrobe and smile",
        "Getting dressed will feel simple",
        "Your bedroom will feel like a room you want to be in"
      ],
      cta: "Book Wardrobe & Bedroom ",
      image: "/images/celebrities/ward.png",
      imageThumb: "/images/celebrities/ward.png",
      imageAlt: "Neatly organized wardrobe with color-coded clothing and storage boxes"
    },
    {
      id: "full-home",
      title: "Full Home Decluttering",
      subtitle: "For when the whole house needs a mother's hand.",
      description: "Sometimes it's not just one room. Sometimes the whole home feels like it's gotten away from you — and you don't know where to start. That's exactly where we come in.",
      detail: "Room by room, corner by corner, we'll work through it together. We'll never rush you or make you feel overwhelmed. We'll take it at your pace, make decisions together, and slowly — beautifully — watch your home come back to itself.",
      bestFor: [
        "Families wanting a complete fresh start",
        "New homeowners settling in",
        "Anyone who's put off the big reset for too long"
      ],
      cta: "Book Full Home Organising ",
      image: "/images/celebrities/fullhome.png",
      imageThumb: "/images/celebrities/fullhome.png",
      imageAlt: "Spacious organized living room with minimal clutter and natural light"
    },
    {
      id: "move",
      title: "New home Move-in setup",
      subtitle: "Every new home deserves a loving start.",
      description: "Moving is one of the most exhausting things a family goes through. We make it easier — by making sure every item that comes into your new home finds exactly the right place from day one. No boxes sitting unpacked for weeks. No 'we'll figure it out later.'",
      detail: "From day one, your new home will feel like home.",
      cta: "Book Move Support ",
      image: "/images/celebrities/movein.png",
      imageThumb: "/images/celebrities/movein.png",
      imageAlt: "Organized moving boxes in a bright new home ready to unpack"
    }
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Professional Home Organising Services in Hyderabad | Kitchen, Wardrobe & Full Home Decluttering | Happy Organize</title>
        <meta name="title" content="Professional Home Organising Services in Hyderabad | Kitchen, Wardrobe & Full Home Decluttering | Happy Organize" />
        <meta name="description" content="Expert home organising services in Hyderabad: kitchen organisation, wardrobe decluttering, full home organisation, pantry setup, and new home move-in support. Free consultation available. Book now!" />
        <meta name="keywords" content="home organising services Hyderabad, professional home organizer Hyderabad, kitchen organisation Hyderabad, wardrobe organizer Hyderabad, home decluttering services, pantry organisation Hyderabad, full home decluttering, new home move-in setup, unpacking services Hyderabad, storage solutions Hyderabad, space planning Hyderabad, Indian home organisation, clutter-free home Hyderabad, organised kitchen Hyderabad, wardrobe organising Hyderabad, bedroom organising Hyderabad, home arrangement services, professional organiser near me, best home organizer Hyderabad, closet organization Hyderabad, home organization solutions, decluttering expert Hyderabad, home reset services, room transformation Hyderabad, home efficiency services, organization specialist Hyderabad, home systems organization, tidy home service, neat home service, konmari method Hyderabad, Marie Kondo organizer Hyderabad, home edit Hyderabad" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://happyorganize.com/services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyorganize.com/services" />
        <meta property="og:title" content="Professional Home Organising Services in Hyderabad | Kitchen, Wardrobe & Full Home Decluttering" />
        <meta property="og:description" content="Transform your home with our expert organising services in Hyderabad. Kitchen organisation, wardrobe decluttering, full home setup, and more. Free consultation available!" />
        <meta property="og:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        <meta property="og:site_name" content="Happy Organize" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://happyorganize.com/services" />
        <meta property="twitter:title" content="Professional Home Organising Services in Hyderabad | Happy Organize" />
        <meta property="twitter:description" content="Expert home organising services: kitchen, wardrobe, full home decluttering, and move-in setup. Free consultation in Hyderabad!" />
        <meta property="twitter:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        
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
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Alternate Language Versions */}
        <link rel="alternate" href="https://happyorganize.com/services" hrefLang="en-in" />
        <link rel="alternate" href="https://happyorganize.com/services" hrefLang="en" />
        <link rel="alternate" href="https://happyorganize.com/services" hrefLang="x-default" />
        
        {/* Main Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Happy Organize Home Organising Services",
            "serviceType": "Professional Home Organising and Decluttering",
            "description": "Complete home organising services in Hyderabad including kitchen organisation, wardrobe decluttering, full home organisation, pantry setup, and new home move-in support.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Happy Organize",
              "url": "https://happyorganize.com",
              "founder": {
                "@type": "Person",
                "name": "Sridevi Dadi"
              },
              "areaServed": {
                "@type": "City",
                "name": "Hyderabad",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "addressCountry": "IN"
                }
              },
              "priceRange": "₹₹",
              "telephone": "+919348275615",
              "email": "sridevidadi0501@gmail.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Hyderabad",
              "sameAs": "https://en.wikipedia.org/wiki/Hyderabad"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Organising Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "position": 1,
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Organising",
                    "description": "Professional kitchen organisation services including pantry setup, cabinet organisation, masala shelf arrangement, fridge organisation, and clutter-free kitchen systems for Indian homes.",
                    "areaServed": "Hyderabad",
                    "provider": {
                      "@type": "ProfessionalService",
                      "name": "Happy Organize"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "position": 2,
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wardrobe & Bedroom Organising",
                    "description": "Expert wardrobe organisation, bedroom decluttering, clothes folding, storage setup, and easy-maintenance organisation systems for peaceful mornings.",
                    "areaServed": "Hyderabad",
                    "provider": {
                      "@type": "ProfessionalService",
                      "name": "Happy Organize"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "position": 3,
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Home Decluttering",
                    "description": "Complete home decluttering services including room-by-room organisation, space planning, storage solutions, and practical home organisation for Indian homes.",
                    "areaServed": "Hyderabad",
                    "provider": {
                      "@type": "ProfessionalService",
                      "name": "Happy Organize"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "position": 4,
                  "itemOffered": {
                    "@type": "Service",
                    "name": "New Home Move-in Setup",
                    "description": "Stress-free move-in organisation including unpacking support, new home setup, kitchen organisation, wardrobe setup, and complete storage arrangement.",
                    "areaServed": "Hyderabad",
                    "provider": {
                      "@type": "ProfessionalService",
                      "name": "Happy Organize"
                    }
                  }
                }
              ]
            },
            "audience": {
              "@type": "Audience",
              "name": "Homeowners in Hyderabad",
              "geographicArea": {
                "@type": "AdministrativeArea",
                "name": "Hyderabad Metropolitan Area"
              }
            },
            "termsOfService": "Free 15-minute consultation available for all services.",
            "serviceOutput": "Organized, clutter-free home with sustainable systems for easy maintenance."
          })}
        </script>
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Happy Organize",
            "url": "https://happyorganize.com",
            "logo": "https://happyorganize.com/logo.png",
            "image": "https://happyorganize.com/images/celebrities/kitchen.png",
            "description": "Professional home organising services in Hyderabad specializing in kitchen organisation, wardrobe decluttering, full home organisation, and move-in setup.",
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
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://instagram.com/happy.organize"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Organisation Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Kitchen Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Kitchen Organisation",
                        "url": "https://happyorganize.com/services#kitchen"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Pantry Organisation",
                        "url": "https://happyorganize.com/services#kitchen"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Wardrobe Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Wardrobe Organisation",
                        "url": "https://happyorganize.com/services#wardrobe"
                      }
                    }
                  ]
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "87",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        
        {/* FAQ Schema for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What home organising services do you offer in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer kitchen organising, wardrobe & bedroom organising, full home decluttering, and new home move-in setup services in Hyderabad."
                }
              },
              {
                "@type": "Question",
                "name": "How much do your home organising services cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our professional home organising services in Hyderabad are competitively priced. Contact us for a free 15-minute consultation and custom quote based on your specific needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free consultation for home organising?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Every project begins with a free 15-minute consultation call to discuss your home and organising needs."
                }
              },
              {
                "@type": "Question",
                "name": "What areas of Hyderabad do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve homes across all areas of Hyderabad including Jubilee Hills, Banjara Hills, Gachibowli, Hitech City, Kondapur, Madhapur, and surrounding neighborhoods."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a home organising session take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project duration varies based on the scope of work. A kitchen organising session typically takes 4-6 hours, while full home decluttering may take 2-3 days. We'll provide a timeline during your free consultation."
                }
              }
            ]
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Services",
                "item": "https://happyorganize.com/services"
              }
            ]
          })}
        </script>
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Helmet>

      <div className="services-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-scale-in">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span> Services</span>
              </div>
              <h1 className="hero-title animate-fade-in">
                What we <span className="gradient-text">do</span>
              </h1>
              <p className="hero-subtitle animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <em>Hands-on, heart-first home organising — for every kind of home.</em>
              </p>
              <div className="hero-text animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <p>
                  We offer one thing: our full, personal attention to your home. No large teams rushing through, 
                  no impersonal checklists. Just Sridevi and her small, trusted team — working carefully through 
                  your space the way a mother would, with patience, with intention, and with genuine love for what we do.
                </p>
                <p>
                  Every project begins with a free 15-minute consultation call, so we can talk about your home before 
                  anything else.
                </p>
              </div>
              <div className="hero-cta animate-scale-in" style={{ animationDelay: "0.7s" }}>
                <Link to="/contact" className="btn btn-primary">
                  <span className="btn-text">Book Your Free Consultation </span>
                  <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Sections */}
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={service.id} className={`service-detail-section ${index % 2 === 1 ? 'alt-bg' : ''}`}>
              <div className="container">
                <div className={`service-detail-grid ${isEven ? 'image-left' : 'image-right'}`}>
                  {/* Image Side */}
                  <div 
                    className={`service-image-side ${isEven ? 'animate-slide-left' : 'animate-slide-right'}`}
                  >
                    <div 
                      className="service-image-wrapper"
                      onClick={() => openLightbox(service.image)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(service.image);
                        }
                      }}
                      aria-label={`View larger image of ${service.title}`}
                    >
                      <img 
                        src={service.imageThumb} 
                        alt={service.imageAlt.replace(/image|photo|picture/gi, '').trim()}
                        loading="lazy"
                        className="service-image"
                      />
                      <div className="image-overlay">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          <line x1="11" y1="8" x2="11" y2="14"/>
                          <line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                        <span>Tap to view full size</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`service-content-side ${isEven ? 'animate-slide-right' : 'animate-slide-left'}`}>
                    <h2 className="service-detail-title">
                      {service.title}
                    </h2>
                    <p className="service-detail-subtitle">
                      <em>{service.subtitle}</em>
                    </p>
                    <div className="service-detail-text">
                      <p>{service.description}</p>
                      <p>{service.detail}</p>
                    </div>

                    {service.changes && (
                      <div className="changes-section">
                        <h3 className="changes-title">What changes card:</h3>
                        <ul className="changes-list">
                          {service.changes.map((change, i) => (
                            <li key={i}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                              </svg>
                               {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.bestFor && (
                      <div className="changes-section">
                        <h3 className="changes-title">Best for card:</h3>
                        <ul className="changes-list">
                          {service.bestFor.map((item, i) => (
                            <li key={i}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                              </svg>
                               {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link to="/contact" className="btn btn-secondary">
                      <span className="btn-text">{service.cta}</span>
                      <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        )}

        {/* Lightbox */}
        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-backdrop" />
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close full size view">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={lightboxImage} alt="Full size service view" />
            </div>
          </div>
        )}

        <style jsx>{`
          .services-page {
            background: #FFF1F3;
            font-family: 'DM Sans', 'Lato', sans-serif;
            color: #1F1F1F;
            overflow-x: hidden;
            position: relative;
            -webkit-overflow-scrolling: touch;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
            width: 100%;
            box-sizing: border-box;
          }

          .hero-section {
            padding: 8rem 0 4rem;
            background: linear-gradient(135deg, #FFF1F3 0%, #FFFFFF 50%, #FFF1F3 100%);
            position: relative;
            overflow: hidden;
          }

          .hero-content {
            max-width: 750px;
            margin: 0 auto;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
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
            margin-bottom: 1.5rem;
          }

          .hero-title {
            font-family: 'Cormorant Garamond', 'Playfair Display', serif;
            font-size: clamp(2.2rem, 5vw, 3.5rem);
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          .gradient-text {
            background: linear-gradient(135deg, #B23A48, #7A1E2C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-style: italic;
          }

          .hero-subtitle {
            font-family: 'Cormorant Garamond', 'Georgia', serif;
            font-size: clamp(1rem, 1.8vw, 1.2rem);
            font-style: italic;
            color: #B23A48;
            margin-bottom: 2rem;
          }

          .hero-subtitle em {
            color: #7A1E2C;
            font-style: italic;
          }

          .hero-text {
            font-size: clamp(0.9rem, 1.3vw, 1.05rem);
            line-height: 1.9;
            color: #1F1F1F;
            word-wrap: break-word;
          }

          .hero-text p {
            margin-bottom: 1.2rem;
            opacity: 0.9;
          }

          .hero-cta {
            margin-top: 2.5rem;
            display: flex;
            justify-content: center;
          }

          .btn {
            padding: 1rem 2rem;
            border-radius: 4px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            border: 2px solid transparent;
            cursor: pointer;
            box-sizing: border-box;
            white-space: nowrap;
            -webkit-tap-highlight-color: transparent;
            position: relative;
            overflow: hidden;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
            isolation: isolate;
          }

          .btn-primary {
            background: #B23A48;
            color: #FFFFFF;
            border-color: #B23A48;
          }

          .btn-primary:hover {
            background: #7A1E2C;
            border-color: #7A1E2C;
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(178, 58, 72, 0.3);
          }

          .btn-primary:active {
            background: #7A1E2C;
            border-color: #7A1E2C;
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(178, 58, 72, 0.25);
          }

          .btn-primary .btn-icon {
            transition: transform 0.3s ease;
          }

          .btn-primary:hover .btn-icon {
            transform: translateX(4px);
          }

          .btn-secondary {
            background: transparent;
            color: #B23A48;
            border: 2px solid #B23A48;
          }

          .btn-secondary::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #B23A48 0%, #7A1E2C 100%);
            z-index: -1;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 4px;
          }

          .btn-secondary:hover {
            color: #FFFFFF;
            border-color: transparent;
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(178, 58, 72, 0.25);
          }

          .btn-secondary:hover::before {
            transform: scaleX(1);
          }

          .btn-secondary:active {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(178, 58, 72, 0.2);
          }

          .btn-secondary .btn-icon {
            transition: transform 0.3s ease;
          }

          .btn-secondary:hover .btn-icon {
            transform: translateX(4px);
          }

          .btn-icon {
            flex-shrink: 0;
          }

          /* Service Detail Sections */
          .service-detail-section {
            padding: 6rem 0;
            background: #FFFFFF;
          }

          .service-detail-section.alt-bg {
            background: #FFF1F3;
          }

          /* Desktop Grid Layout - Alternating */
          .service-detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .service-detail-grid.image-right {
            direction: rtl;
          }

          .service-detail-grid.image-right .service-content-side {
            direction: ltr;
          }

          .service-detail-grid.image-right .service-image-side {
            direction: ltr;
          }

          /* Service Image */
          .service-image-wrapper {
            position: relative;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .service-image-wrapper:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 40px rgba(178, 58, 72, 0.15);
          }

          .service-image-wrapper:focus-visible {
            outline: 3px solid #D97A86;
            outline-offset: 2px;
          }

          .service-image {
            width: 100%;
            height: 420px;
            object-fit: cover;
            display: block;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .service-image-wrapper:hover .service-image {
            transform: scale(1.05);
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(122, 30, 44, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            color: white;
            font-size: 0.9rem;
            font-weight: 600;
          }

          .service-image-wrapper:hover .image-overlay {
            opacity: 1;
          }

          /* Service Content */
          .service-content-side {
            text-align: left;
          }

          .service-detail-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(1.8rem, 3vw, 2.5rem);
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }

          .service-detail-subtitle {
            font-family: 'Cormorant Garamond', 'Georgia', serif;
            font-size: clamp(1rem, 1.5vw, 1.2rem);
            font-style: italic;
            color: #B23A48;
            margin-bottom: 1.5rem;
          }

          .service-detail-subtitle em {
            color: #7A1E2C;
          }

          .service-detail-text {
            font-size: clamp(0.9rem, 1.1vw, 1rem);
            line-height: 1.8;
            color: #1F1F1F;
            margin-bottom: 1.5rem;
            word-wrap: break-word;
          }

          .service-detail-text p {
            margin-bottom: 1rem;
            opacity: 0.9;
          }

          .changes-section {
            text-align: left;
            margin-bottom: 2rem;
            background: rgba(217, 122, 134, 0.08);
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid rgba(178, 58, 72, 0.08);
            width: 100%;
            box-sizing: border-box;
          }

          .changes-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.1rem;
            font-weight: 600;
            color: #B23A48;
            margin-bottom: 0.75rem;
          }

          .changes-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
          }

          .changes-list li {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            font-size: 0.9rem;
            color: #1F1F1F;
            line-height: 1.5;
            word-wrap: break-word;
          }

          .changes-list li svg {
            color: #D97A86;
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* Lightbox */
          .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: lightboxFadeIn 0.3s ease;
          }

          @keyframes lightboxFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .lightbox-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .lightbox-close {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            z-index: 10001;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            -webkit-tap-highlight-color: transparent;
            padding: 0;
          }

          .lightbox-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(90deg);
          }

          .lightbox-content {
            position: relative;
            z-index: 10001;
            max-width: 90vw;
            max-height: 90vh;
            animation: lightboxZoomIn 0.3s ease;
            cursor: default;
          }

          @keyframes lightboxZoomIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .lightbox-content img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          }

          /* Animation classes */
          .animate-fade-in,
          .animate-scale-in,
          .animate-slide-up,
          .animate-slide-left,
          .animate-slide-right {
            opacity: 0;
          }

          .animate-fade-in {
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .animate-scale-in {
            transform: scale(0.95);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .animate-slide-up {
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .animate-slide-left {
            transform: translateX(-50px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-right {
            transform: translateX(50px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .is-visible {
            opacity: 1 !important;
            transform: translate(0, 0) scale(1) !important;
          }

          /* Responsive - Mobile stack layout */
          @media (max-width: 1024px) {
            .service-detail-grid {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }

            .service-detail-grid.image-right {
              direction: ltr;
            }

            .service-image {
              height: 320px;
            }

            .service-detail-section {
              padding: 4rem 0;
            }

            .service-content-side {
              text-align: center;
            }

            .changes-section {
              text-align: left;
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }

            .hero-section {
              padding: 5rem 0 3rem;
            }

            .service-detail-section {
              padding: 3.5rem 0;
            }

            .changes-section {
              padding: 1.25rem;
            }

            .service-image {
              height: 250px;
            }

            .lightbox-close {
              top: 1rem;
              right: 1rem;
              width: 40px;
              height: 40px;
            }

            .lightbox-content img {
              max-width: 95vw;
              max-height: 80vh;
            }

            .btn {
              width: 100%;
              max-width: 320px;
              justify-content: center;
              white-space: normal;
              text-align: center;
              padding: 0.9rem 1.25rem;
              font-size: 0.9rem;
            }

            .hero-cta {
              justify-content: center;
            }

            .service-content-side .btn {
              margin: 0 auto;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 0.875rem;
            }

            .hero-section {
              padding: 3.5rem 0 2rem;
            }

            .service-detail-section {
              padding: 2.5rem 0;
            }

            .service-image {
              height: 220px;
            }

            .btn {
              padding: 0.85rem 1.25rem;
              font-size: 0.85rem;
            }

            .changes-section {
              padding: 1rem;
              border-radius: 6px;
            }

            .lightbox-close {
              width: 36px;
              height: 36px;
              top: 0.75rem;
              right: 0.75rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Services;