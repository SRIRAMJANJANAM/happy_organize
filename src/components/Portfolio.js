import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Kitchen", "Wardrobe", "Bedroom", "Full Home"];

  const projects = [
    {
      id: 1,
      category: "Kitchen",
      location: "Banjara Hills Kitchen",
      quote: "She worked 6 hours straight and didn't stop until it was perfect. I cried when I saw it.",
      time: "6 hours, full transformation",
      image: "/images/celebrities/kitchen.png"
    },
    {
      id: 2,
      category: "Wardrobe",
      location: "Jubilee Hills Wardrobe",
      quote: "Three wardrobes, four hours, complete transformation.",
      time: "4 hours, complete transformation",
      image: "images/celebrities/ward.png"
    },
    {
      id: 3,
      category: "Full Home",
      location: "Gachibowli Full Home",
      quote: "We'd just moved in and had no idea where to start. Sridevi made it feel like home within a day.",
      time: "1 day, full home reset",
      image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80"
    },
    {
      id: 4,
      category: "Kitchen",
      location: "Kondapur Kitchen",
      quote: "My masala shelf alone — I can't tell you the difference. Everything I need, exactly where I reach for it.",
      time: "5 hours, full kitchen reorganisation",
      image: "/images/celebrities/k1.png"
    },
    {
      id: 5,
      category: "Bedroom",
      location: "Madhapur Bedroom",
      quote: "I used to dread opening my wardrobe in the morning. Now it's the easiest part of my day.",
      time: "3 hours, wardrobe and surfaces",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
    },
    {
      id: 6,
      category: "Full Home",
      location: "Manikonda Full Home",
      quote: "She came in like family. By evening, our home felt like it had been loved for years.",
      time: "2 days, full home declutter and organise",
      image: "images/celebrities/fullhome.png"
    },
    {
      id: 7,
      category: "Wardrobe",
      location: "Hitech City Wardrobe",
      quote: "I didn't realise how much stress my cluttered wardrobe was causing until Sridevi sorted it.",
      time: "4 hours, two wardrobes",
      image: "images/celebrities/ward1.png"
    },
    {
      id: 8,
      category: "Kitchen",
      location: "Kukatpally Kitchen",
      quote: "She handled my mother-in-law's kitchen with more care than I've ever seen. No judgment, just love.",
      time: "5 hours, deep kitchen organise",
      image: "/images/celebrities/k2.png"
    },
    {
      id: 9,
      category: "Bedroom",
      location: "Gachibowli Bedroom",
      quote: "My bedroom finally feels like a place I can rest. Not just a room with stuff in it.",
      time: "3.5 hours, bedroom reset",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-up').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [activeFilter]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Home Organising Portfolio Hyderabad | Kitchen, Wardrobe & Full Home Transformations | Happy Organize</title>
        <meta name="title" content="Home Organising Portfolio Hyderabad | Kitchen, Wardrobe & Full Home Transformations | Happy Organize" />
        <meta name="description" content="Explore real home organising transformations in Hyderabad. See before & after results of kitchen organisation, wardrobe decluttering, bedroom setup, and full home makeovers by Happy Organize." />
        <meta name="keywords" content="home organising portfolio Hyderabad, home organizing portfolio, kitchen transformation Hyderabad, wardrobe makeover Hyderabad, home decluttering before after, organised kitchen photos, organised wardrobe examples, full home decluttering results, Happy Organize portfolio, home organisation portfolio, kitchen organising Hyderabad before after, wardrobe organising Hyderabad portfolio, bedroom organising Hyderabad, professional home organiser results, home transformation Hyderabad, clutter-free home examples, storage solutions portfolio, space planning results, Indian home organisation portfolio, real home organising projects, successful home makeovers Hyderabad" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://happyorganize.com/portfolio" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyorganize.com/portfolio" />
        <meta property="og:title" content="Home Organising Portfolio | Real Transformations in Hyderabad" />
        <meta property="og:description" content="See real before & after home organising projects across Hyderabad. Kitchens, wardrobes, bedrooms, and full home transformations by Happy Organize." />
        <meta property="og:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        <meta property="og:site_name" content="Happy Organize" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://happyorganize.com/portfolio" />
        <meta property="twitter:title" content="Happy Organize Portfolio | Home Organising Transformations Hyderabad" />
        <meta property="twitter:description" content="Real home organising results from Hyderabad homes. Kitchen, wardrobe, bedroom, and full home makeovers." />
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
        <link rel="alternate" href="https://happyorganize.com/portfolio" hrefLang="en-in" />
        <link rel="alternate" href="https://happyorganize.com/portfolio" hrefLang="en" />
        <link rel="alternate" href="https://happyorganize.com/portfolio" hrefLang="x-default" />
        
        {/* Collection Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Happy Organize Home Organising Portfolio",
            "description": "Portfolio of real home organising and decluttering transformations across Hyderabad, including kitchen organising, wardrobe organising, bedroom organising, and full home makeovers.",
            "url": "https://happyorganize.com/portfolio",
            "about": {
              "@type": "ProfessionalService",
              "name": "Happy Organize",
              "url": "https://happyorganize.com",
              "areaServed": {
                "@type": "City",
                "name": "Hyderabad"
              },
              "serviceType": [
                "Home Organising",
                "Kitchen Organisation",
                "Wardrobe Organisation",
                "Bedroom Organisation",
                "Full Home Decluttering"
              ]
            }
          })}
        </script>
        
        {/* ItemList Schema for Portfolio Projects */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Home Organising Portfolio Projects",
            "description": "Real home transformation projects by Happy Organize in Hyderabad",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.location,
                "description": `${project.category} organising project in ${project.location}, Hyderabad. ${project.time}. Client testimonial: "${project.quote.substring(0, 100)}..."`,
                "image": project.image.startsWith("http") 
                  ? project.image 
                  : `https://happyorganize.com/${project.image.replace(/^\/+/, "")}`,
                "keywords": `${project.category}, home organising Hyderabad, home decluttering Hyderabad, organised ${project.category.toLowerCase()} Hyderabad`,
                "about": {
                  "@type": "Service",
                  "name": `${project.category} Organising`,
                  "provider": {
                    "@type": "ProfessionalService",
                    "name": "Happy Organize"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Hyderabad"
                  }
                }
              }
            }))
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
            "description": "Professional home organising services in Hyderabad. View our portfolio of real kitchen, wardrobe, bedroom, and full home transformations.",
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
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "87",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Organising Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Organising",
                    "url": "https://happyorganize.com/portfolio?filter=Kitchen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wardrobe Organising",
                    "url": "https://happyorganize.com/portfolio?filter=Wardrobe"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bedroom Organising",
                    "url": "https://happyorganize.com/portfolio?filter=Bedroom"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Home Decluttering",
                    "url": "https://happyorganize.com/portfolio?filter=Full Home"
                  }
                }
              ]
            }
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
                "name": "Portfolio",
                "item": "https://happyorganize.com/portfolio"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema for Portfolio Questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I see real before and after photos of home organising in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our portfolio showcases real home transformation projects across Hyderabad, including kitchen organising, wardrobe decluttering, bedroom setup, and full home makeovers."
                }
              },
              {
                "@type": "Question",
                "name": "What areas of Hyderabad do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our portfolio includes projects from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Madhapur, Hitech City, Manikonda, Kukatpally, and across Hyderabad."
                }
              },
              {
                "@type": "Question",
                "name": "How long do home organising transformations take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Based on our portfolio projects, kitchen organisation takes 4-6 hours, wardrobe organising takes 3-4 hours, and full home decluttering can take 1-2 days depending on the home size."
                }
              },
              {
                "@type": "Question",
                "name": "Do you have experience with Indian home organisation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! All projects in our portfolio are Indian homes in Hyderabad. We specialise in organising Indian kitchens with masala shelves, wardrobes with traditional clothing, and living spaces that work for Indian families."
                }
              }
            ]
          })}
        </script>
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Helmet>

      <div className="portfolio-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-scale-in">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>Portfolio</span>
              </div>
              <h1 className="hero-title animate-fade-in">
                Homes <span className="gradient-text">we've loved</span>
              </h1>
              <p className="hero-text animate-slide-up" style={{ animationDelay: "0.3s" }}>
                Every space you see here belongs to a family in Hyderabad who trusted us with their home. 
                We're grateful for every single one.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="filter-section">
          <div className="container">
            <div className="filter-bar animate-fade-in">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  aria-label={`Filter projects by ${filter}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <p className="filter-count animate-fade-in">
              Showing {filteredProjects.length} projects
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="portfolio-section">
          <div className="container">
            {filteredProjects.length === 0 ? (
              <div className="empty-state animate-fade-in">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <p>No projects found in this category yet.</p>
                <button className="filter-btn active" onClick={() => setActiveFilter("All")}>
                  View All Projects
                </button>
              </div>
            ) : (
              <div className="portfolio-grid">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="portfolio-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="card-image">
                      <img 
                        src={project.image} 
                        alt={`${project.location} - organised ${project.category.toLowerCase()} transformation by Happy Organize`}
                        loading="lazy"
                      />
                      <div className="card-category-badge">
                        {project.category}
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{project.location}</span>
                      </div>
                      <blockquote className="card-quote">
                        "{project.quote}"
                      </blockquote>
                      <div className="card-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>🕐 {project.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Mid-page CTA Banner (Maroon) */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-fade-in">
              <h2 className="cta-title">Like what you see?</h2>
              <p className="cta-subtitle">Let's create something beautiful together.</p>
              <Link to="/contact" className="btn btn-primary btn-large btn-hover-effect">
                <span className="btn-text">Book Your Transformation →</span>
                <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <style jsx>{`
          .portfolio-page {
            background: #FFF1F3;
            font-family: 'DM Sans', 'Lato', sans-serif;
            color: #1F1F1F;
            overflow-x: hidden;
            position: relative;
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }

          .hero-section {
            padding: 8rem 0 3rem;
            background: linear-gradient(135deg, #FFF1F3 0%, #FFFFFF 50%, #FFF1F3 100%);
            position: relative;
            overflow: hidden;
          }

          .hero-content {
            max-width: 700px;
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
            margin-bottom: 1.5rem;
          }

          .hero-title {
            font-family: 'Cormorant Garamond', 'Playfair Display', serif;
            font-size: clamp(2.2rem, 5vw, 3.5rem);
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }

          .gradient-text {
            background: linear-gradient(135deg, #B23A48, #7A1E2C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-style: italic;
          }

          .hero-text {
            font-size: clamp(0.9rem, 1.3vw, 1.05rem);
            line-height: 1.8;
            color: #1F1F1F;
            opacity: 0.9;
          }

          .filter-section {
            padding: 1.5rem 0 1rem;
            background: #FFFFFF;
            position: sticky;
            top: 0;
            z-index: 10;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.92);
            border-bottom: 1px solid rgba(178, 58, 72, 0.06);
          }

          .filter-bar {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 0.75rem;
          }

          .filter-btn {
            padding: 0.6rem 1.5rem;
            border-radius: 4px;
            border: 1.5px solid rgba(178, 58, 72, 0.2);
            background: transparent;
            color: #1F1F1F;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
            letter-spacing: 0.5px;
          }

          .filter-btn:hover {
            border-color: #B23A48;
            color: #B23A48;
            background: rgba(178, 58, 72, 0.04);
          }

          .filter-btn.active {
            background: #B23A48;
            color: #FFFFFF;
            border-color: #B23A48;
          }

          .filter-count {
            text-align: center;
            font-size: 0.8rem;
            color: #6D6D6D;
            font-style: italic;
          }

          .portfolio-section {
            padding: 2rem 0 5rem;
            background: #FFF1F3;
          }

          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 2rem;
          }

          .portfolio-card {
            background: #FFFFFF;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(178, 58, 72, 0.06);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .portfolio-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 35px rgba(178, 58, 72, 0.1);
            border-color: rgba(178, 58, 72, 0.2);
          }

          .card-image {
            width: 100%;
            aspect-ratio: 4/3;
            overflow: hidden;
            position: relative;
          }

          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .portfolio-card:hover .card-image img {
            transform: scale(1.05);
          }

          .card-category-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(178, 58, 72, 0.9);
            color: #FFFFFF;
            padding: 0.35rem 0.85rem;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            backdrop-filter: blur(5px);
          }

          .card-content {
            padding: 1.5rem;
          }

          .card-location {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            font-weight: 600;
            color: #B23A48;
            margin-bottom: 0.75rem;
          }

          .card-location svg {
            color: #D97A86;
            flex-shrink: 0;
          }

          .card-quote {
            font-family: 'Cormorant Garamond', 'Georgia', serif;
            font-style: italic;
            font-size: 0.95rem;
            line-height: 1.7;
            color: #1F1F1F;
            margin: 0 0 1rem 0;
            padding: 0 0 0 0.75rem;
            border-left: 3px solid #D97A86;
          }

          .card-time {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
            color: #6D6D6D;
            padding-top: 0.75rem;
            border-top: 1px solid rgba(178, 58, 72, 0.08);
          }

          .card-time svg {
            color: #D97A86;
            flex-shrink: 0;
          }

          .empty-state {
            text-align: center;
            padding: 4rem 2rem;
            color: #6D6D6D;
          }

          .empty-state svg {
            margin-bottom: 1rem;
            opacity: 0.3;
            color: #B23A48;
          }

          .empty-state p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
          }

          .cta-section {
            padding: 5rem 0;
            background: linear-gradient(135deg, #7A1E2C 0%, #B23A48 100%);
            text-align: center;
          }

          .cta-content {
            max-width: 500px;
            margin: 0 auto;
          }

          .cta-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 1rem;
          }

          .cta-subtitle {
            color: #FFF1F3;
            font-size: 1rem;
            margin-bottom: 2rem;
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
          .animate-slide-up {
            opacity: 0;
          }

          .animate-fade-in {
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-scale-in {
            transform: scale(0.92);
            transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-up {
            transform: translateY(50px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .is-visible {
            opacity: 1 !important;
            transform: translate(0, 0) scale(1) !important;
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1.25rem;
            }

            .hero-section {
              padding: 5rem 0 2.5rem;
            }

            .portfolio-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .filter-btn {
              padding: 0.5rem 1.25rem;
              font-size: 0.8rem;
            }

            .card-content {
              padding: 1.25rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 1rem;
            }

            .hero-section {
              padding: 4rem 0 2rem;
            }

            .portfolio-section {
              padding: 1.5rem 0 3rem;
            }

            .cta-section {
              padding: 3.5rem 0;
            }

            .filter-bar {
              gap: 0.375rem;
            }

            .filter-btn {
              padding: 0.45rem 1rem;
              font-size: 0.78rem;
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

export default Portfolio;