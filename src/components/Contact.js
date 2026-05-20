import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    area: "",
    helpWith: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
      document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-left, .animate-slide-right').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    if (!name) return "Full name is required";
    if (!nameRegex.test(name)) return "Name should only contain letters and spaces (2-50 characters)";
    return "";
  };

  const validateIndianPhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid Indian phone number (10 digits, starting with 6-9)";
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateName(formData.fullName),
      phoneNumber: validateIndianPhoneNumber(formData.phoneNumber),
      area: !formData.area ? "Area is required" : "",
      helpWith: !formData.helpWith ? "Please select what you need help with" : ""
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    if (name === "phoneNumber") {
      let cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 10) cleaned = cleaned.slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: cleaned }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const phoneNumber = "919348275615";
    const text = `Hi Sridevi,%0A%0A` +
      `My name is ${formData.fullName}%0A` +
      `Phone: ${formData.phoneNumber}%0A` +
      `Area: ${formData.area}%0A` +
      `I need help with: ${formData.helpWith}%0A` +
      (formData.message ? `Additional message: ${formData.message}%0A%0A` : '%0A') +
      `I'd like to book a free 15-minute consultation call.%0A%0A` +
      `Sent from Happy Organize website`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phoneNumber: "",
        area: "",
        helpWith: "",
        message: ""
      });
      setErrors({});
    }, 5000);
  };

  const helpOptions = [
    { value: "", label: "Select what you need help with" },
    { value: "Kitchen Organising", label: "Kitchen Organising" },
    { value: "Wardrobe & Bedroom", label: "Wardrobe & Bedroom" },
    { value: "Full Home Decluttering", label: "Full Home Decluttering" },
    { value: "New home Move-in setup", label: " New home Move-in setup" },
    { value: "Not sure yet — let's chat", label: "Not sure yet — let's chat" }
  ];

  // Contact Schema for the page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Happy Organize - Free Home Organising Consultation Hyderabad",
    "description": "Contact Sridevi Dadi, professional home organiser in Hyderabad. Book a free 15-minute consultation for kitchen organisation, wardrobe decluttering, and full home organising services.",
    "url": "https://happyorganize.com/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Happy Organize",
      "url": "https://happyorganize.com",
      "telephone": "+919348275615",
      "email": "sridevidadi0501@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919348275615",
        "contactType": "customer service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad",
        "sameAs": "https://en.wikipedia.org/wiki/Hyderabad"
      },
      "priceRange": "₹5000"
    }
  };

  // FAQ Schema for Contact Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a free consultation with a home organiser in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a free 15-minute consultation by filling out the contact form on this page, calling us at 9348275615, or sending a WhatsApp message. We'll respond within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Hyderabad do you serve for home organising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all areas of Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, Hitech City, Kondapur, Madhapur, Manikonda, Kukatpally, and surrounding neighborhoods across Telangana."
        }
      },
      {
        "@type": "Question",
        "name": "What home organising services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer kitchen organisation, wardrobe and bedroom organising, full home decluttering, and new home move-in setup services. Contact us for a free consultation to discuss your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "Is the initial consultation really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a completely free 15-minute consultation call with no obligation. We'll discuss your home, your organising needs, and how we can help."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly will I hear back after contacting Happy Organize?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We personally read and respond to every message. You'll hear back from us within 24 hours of submitting your inquiry."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Happy Organize | Free Home Organising Consultation Hyderabad | Call or WhatsApp</title>
        <meta name="title" content="Contact Happy Organize | Free Home Organising Consultation Hyderabad | Professional Home Organiser" />
        <meta name="description" content="Contact Sridevi Dadi, Hyderabad's trusted professional home organiser. Book a free 15-minute consultation for kitchen organisation, wardrobe decluttering, and full home organising services. Call, WhatsApp, or email us today!" />
        <meta name="keywords" content="contact home organiser Hyderabad, free consultation home organising, book home organiser, kitchen organisation consultation, wardrobe organising enquiry, home decluttering contact, professional home organiser phone number, home organisation services Hyderabad, contact Sridevi Dadi, Happy Organize contact, home organiser near me contact, kitchen organiser Hyderabad contact, wardrobe organiser enquiry, full home decluttering booking, move-in setup consultation, home organising quote, free home assessment Hyderabad, professional organiser contact, home efficiency consultation, space planning enquiry, storage solutions contact, organised home booking, clutter-free consultation, home reset enquiry, home transformation booking, Indian home organiser contact" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://happyorganize.com/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyorganize.com/contact" />
        <meta property="og:title" content="Contact Happy Organize | Free Home Organising Consultation Hyderabad" />
        <meta property="og:description" content="Book a free 15-minute consultation with Hyderabad's trusted professional home organiser. Kitchen, wardrobe, and full home organising services available." />
        <meta property="og:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        <meta property="og:site_name" content="Happy Organize" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://happyorganize.com/contact" />
        <meta property="twitter:title" content="Contact Happy Organize | Free Home Organising Consultation" />
        <meta property="twitter:description" content="Book your free home organising consultation in Hyderabad. Call, WhatsApp, or email Sridevi Dadi today!" />
        <meta property="twitter:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Sridevi Dadi - Professional Home Organiser, Happy Organize" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <meta name="geo.position" content="17.385044;78.486671" />
        <meta name="ICBM" content="17.385044, 78.486671" />
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Hyderabad, Telangana, India" />
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Alternate Language Versions */}
        <link rel="alternate" href="https://happyorganize.com/contact" hrefLang="en-in" />
        <link rel="alternate" href="https://happyorganize.com/contact" hrefLang="en" />
        <link rel="alternate" href="https://happyorganize.com/contact" hrefLang="x-default" />
        
        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
                "name": "Contact",
                "item": "https://happyorganize.com/contact"
              }
            ]
          })}
        </script>
        
        {/* Local Business Schema with Contact Info */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Happy Organize",
            "url": "https://happyorganize.com",
            "logo": "https://happyorganize.com/logo.png",
            "image": "https://happyorganize.com/images/celebrities/kitchen.png",
            "description": "Professional home organising services in Hyderabad. Free consultation available for kitchen, wardrobe, and full home decluttering.",
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
              "https://instagram.com/happy.organize",
              "https://youtube.com/@happy.organize",
              "https://www.facebook.com/share/16yLF5AoWq/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919348275615",
              "contactType": "customer service",
              "contactOption": "TollFree",
              "areaServed": "Hyderabad",
              "availableLanguage": "English",
              "email": "sridevidadi0501@gmail.com"
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
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Helmet>

      <div className="contact-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-scale-in">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span>Contact</span>
              </div>
              <h1 className="hero-title animate-fade-in">
                Let's talk about <span className="gradient-text">your home.</span>
              </h1>
              <p className="hero-text animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <em>No pressure, no commitment. Just a warm conversation about your space and how we can help.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Form Side */}
              <div className="form-side animate-slide-left">
                <div className="form-wrapper">
                  <h2 className="form-title">Book a Free 15-Minute Call</h2>

                  {submitted ? (
                    <div className="success-message">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <h3>Message Sent!</h3>
                      <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={errors.fullName ? "error" : ""}
                        />
                        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number *</label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          className={errors.phoneNumber ? "error" : ""}
                        />
                        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                        <small className="hint-text">Enter 10-digit Indian mobile number (starts with 6–9)</small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="area">Area in Hyderabad *</label>
                        <input
                          type="text"
                          id="area"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          placeholder="e.g. Banjara Hills, Jubilee Hills, Gachibowli"
                          className={errors.area ? "error" : ""}
                        />
                        {errors.area && <span className="error-message">{errors.area}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="helpWith">What do you need help with? *</label>
                        <select
                          id="helpWith"
                          name="helpWith"
                          value={formData.helpWith}
                          onChange={handleChange}
                          className={errors.helpWith ? "error" : ""}
                        >
                          {helpOptions.map((option) => (
                            <option key={option.value} value={option.value} disabled={option.value === ""}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.helpWith && <span className="error-message">{errors.helpWith}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Anything else you'd like to share?</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us a little about your space and what you're looking for…"
                          rows="4"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary btn-submit">
                        <span>Send Message</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info Side */}
              <div className="info-side animate-slide-right">
                <div className="info-card">
                  <h3 className="info-title">Direct Contact</h3>
                  <p className="info-subtitle">Prefer to reach out directly? We'd love to hear from you.</p>

                  <div className="info-items">
                    <a href="tel:+919348275615" className="info-item">
                      <div className="info-icon phone-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <div className="info-text">
                        <span className="info-label"> CALL</span>
                        <span className="info-value">9348275615</span>
                      </div>
                    </a>

                    <a href="https://wa.me/919348275615" target="_blank" rel="noopener noreferrer" className="info-item">
                      <div className="info-icon whatsapp-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div className="info-text">
                        <span className="info-label"> WHATSAPP</span>
                        <span className="info-value">+91 93482 75615</span>
                      </div>
                    </a>

                    <a href="mailto:sridevidadi0501@gmail.com" className="info-item">
                      <div className="info-icon email-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div className="info-text">
                        <span className="info-label"> EMAIL</span>
                        <span className="info-value">sridevidadi0501@gmail.com</span>
                      </div>
                    </a>

                    <div className="info-item">
                      <div className="info-icon location-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <div className="info-text">
                        <span className="info-label">LOCATION</span>
                        <span className="info-value">Based in Hyderabad. Services across TS & AP and all major cities in India</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Media - Circle Icons in One Line */}
                  <div className="social-section">
                    <h4 className="social-title">Follow Along</h4>
                    <div className="social-links-row">
                      {/* Instagram */}
                      <a
                        href="https://instagram.com/happy.organize"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle"
                        aria-label="Follow Happy Organize on Instagram"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>

                      {/* YouTube */}
                      <a
                        href="https://youtube.com/@happy.organize?si=f97Z-LUWS8TVySX-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle"
                        aria-label="Subscribe to Happy Organize on YouTube"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/share/16yLF5AoWq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle"
                        aria-label="Follow Happy Organize on Facebook"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="info-note">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <p><em>We personally read and respond to every message. You'll hear back from us within 24 hours.</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .contact-page {
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
            width: 100%;
            box-sizing: border-box;
          }

          /* Hero */
          .hero-section {
            padding: 8rem 0 3rem;
            background: linear-gradient(135deg, #FFF1F3 0%, #FFFFFF 50%, #FFF1F3 100%);
            position: relative;
            overflow: hidden;
          }

          .hero-content {
            max-width: 600px;
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
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2rem, 5vw, 3rem);
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

          .hero-text {
            font-size: 1.05rem;
            line-height: 1.7;
            color: #B23A48;
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
          }

          .hero-text em {
            color: #7A1E2C;
          }

          /* Contact Section */
          .contact-section {
            padding: 4rem 0 5rem;
            background: #FFF1F3;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3rem;
            align-items: start;
          }

          /* Form Side */
          .form-side {
            min-width: 0;
          }

          .form-wrapper {
            background: #FFFFFF;
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid rgba(178, 58, 72, 0.08);
            box-shadow: 0 4px 20px rgba(178, 58, 72, 0.04);
            width: 100%;
            box-sizing: border-box;
          }

          .form-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(1.25rem, 3vw, 1.5rem);
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 2rem;
          }

          .form-group {
            margin-bottom: 1.25rem;
            width: 100%;
          }

          .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: #1F1F1F;
            margin-bottom: 0.5rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            max-width: 100%;
            padding: 0.875rem 1rem;
            border: 1.5px solid rgba(178, 58, 72, 0.15);
            border-radius: 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: clamp(0.875rem, 1.2vw, 0.95rem);
            color: #1F1F1F;
            background: #FFF1F3;
            transition: all 0.3s ease;
            outline: none;
            box-sizing: border-box;
            -webkit-appearance: none;
            -moz-appearance: none;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            border-color: #B23A48;
            box-shadow: 0 0 0 3px rgba(178, 58, 72, 0.08);
          }

          .form-group input.error,
          .form-group select.error {
            border-color: #e74c3c;
            background: #fff5f5;
          }

          .error-message {
            display: block;
            font-size: 0.75rem;
            color: #e74c3c;
            margin-top: 0.375rem;
          }

          .hint-text {
            display: block;
            font-size: 0.7rem;
            color: #6D6D6D;
            margin-top: 0.375rem;
          }

          .form-group input::placeholder,
          .form-group textarea::placeholder {
            color: #B0B0B0;
          }

          .form-group select {
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23B23A48' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-color: #FFF1F3;
            padding-right: 2.5rem;
          }

          .form-group textarea {
            resize: vertical;
            min-height: 100px;
          }

          .btn-submit {
            width: 100%;
            padding: 1rem;
            justify-content: center;
            margin-top: 0.5rem;
            font-size: clamp(0.9rem, 1.2vw, 1rem);
          }

          .btn {
            padding: 0.9rem 2rem;
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
            border: none;
            cursor: pointer;
            box-sizing: border-box;
          }

          .btn-primary {
            background: #B23A48;
            color: #FFFFFF;
            border: 2px solid #B23A48;
          }

          .btn-primary:hover {
            background: #7A1E2C;
            border-color: #7A1E2C;
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(178, 58, 72, 0.3);
          }

          .success-message {
            text-align: center;
            padding: 3rem 1rem;
          }

          .success-message svg {
            color: #D97A86;
            margin-bottom: 1rem;
          }

          .success-message h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.5rem;
            color: #1F1F1F;
            margin-bottom: 0.5rem;
          }

          .success-message p {
            color: #6D6D6D;
            line-height: 1.6;
          }

          /* Info Side */
          .info-side {
            min-width: 0;
          }

          .info-card {
            background: linear-gradient(135deg, #7A1E2C 0%, #B23A48 100%);
            padding: clamp(1.5rem, 3vw, 2.5rem);
            border-radius: 12px;
            color: #FFFFFF;
            position: sticky;
            top: 2rem;
            width: 100%;
            box-sizing: border-box;
          }

          .info-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(1.2rem, 2.5vw, 1.5rem);
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .info-subtitle {
            font-size: 0.9rem;
            color: #FFF1F3;
            margin-bottom: 2rem;
            line-height: 1.5;
            opacity: 0.9;
          }

          .info-items {
            display: flex;
            flex-direction: column;
            gap: 0.875rem;
          }

          .info-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: #FFFFFF;
            padding: 0.75rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.06);
            width: 100%;
            box-sizing: border-box;
          }

          .info-item:hover {
            background: rgba(255, 255, 255, 0.12);
          }

          .info-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .phone-icon { background: rgba(217, 122, 134, 0.25); color: #D97A86; }
          .whatsapp-icon { background: rgba(37, 211, 102, 0.25); color: #25D366; }
          .email-icon { background: rgba(255, 241, 243, 0.2); color: #FFF1F3; }
          .location-icon { background: rgba(255, 241, 243, 0.15); color: #FFF1F3; }

          .info-text {
            display: flex;
            flex-direction: column;
            gap: 0.15rem;
            min-width: 0;
            overflow: hidden;
          }

          .info-label {
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.5px;
          }

          .info-value {
            font-size: clamp(0.8rem, 1.2vw, 0.95rem);
            font-weight: 500;
            word-break: break-all;
          }

          /* Social Section - Circles in one line */
          .social-section {
            margin-top: 1.75rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
          }

          .social-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1rem;
            font-weight: 600;
            color: #FFF1F3;
            margin-bottom: 1rem;
          }

          .social-links-row {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            justify-content: flex-start;
          }

          .social-circle {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            text-decoration: none;
            transition: all 0.3s ease;
            flex-shrink: 0;
          }

          .social-circle:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .social-circle svg {
            flex-shrink: 0;
          }

          .info-note {
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
          }

          .info-note svg {
            color: #D97A86;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .info-note p {
            font-size: 0.85rem;
            color: #FFF1F3;
            line-height: 1.6;
            font-style: italic;
            opacity: 0.9;
          }

          .info-note em {
            font-style: italic;
          }

          /* Animations */
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
            transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
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

          /* Responsive */
          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }

            .hero-section {
              padding: 5rem 0 2rem;
            }

            .contact-section {
              padding: 2.5rem 0 3rem;
            }

            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .form-wrapper {
              padding: 1.5rem;
            }

            .info-card {
              padding: 1.5rem;
              position: static;
            }

            .info-item {
              padding: 0.65rem;
            }

            .social-links-row {
              justify-content: flex-start;
            }

            .form-group input,
            .form-group select,
            .form-group textarea {
              font-size: 16px;
              padding: 0.75rem 0.875rem;
            }

            .btn-submit {
              padding: 0.875rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 0.875rem;
            }

            .hero-section {
              padding: 4rem 0 1.5rem;
            }

            .contact-section {
              padding: 2rem 0 2.5rem;
            }

            .form-wrapper {
              padding: 1.25rem;
              border-radius: 8px;
            }

            .info-card {
              padding: 1.25rem;
              border-radius: 8px;
            }

            .info-value {
              font-size: 0.85rem;
            }

            .social-circle {
              width: 44px;
              height: 44px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Contact;