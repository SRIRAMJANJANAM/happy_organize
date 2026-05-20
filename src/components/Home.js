import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const heroImgRef = useRef(null);

  const celebrityClients = [
    {
      id: 1,
      name: "Sri vani Garu",
      profession: "ACTRESS",
      quote: "The peace I feel in my home now is unmatched. Thank you Happy Organize!",
      fullTestimonial:
        "The peace I feel in my home now is unmatched. Every shelf, every drawer has its purpose now. Thank you Happy Organize for transforming my space!",
      image: "/images/celebrities/srivani.png",
      category: "Tollywood Star",
    },
    {
      id: 2,
      name: "Tejaswini & Amardeep Garu",
      profession: "ACTRESS",
      quote: "Absolute game-changer for our home!",
      fullTestimonial:
        "The team at Happy Organize transformed our space completely. It's so peaceful now!",
      image: "/images/celebrities/teju.png",
      category: "Bollywood Star",
    },
    {
      id: 3,
      name: "Jayalakshmi garu and Ramma Raavi Garu",
      profession: "Anchor & Story Teller",
      quote: "Finally, a clutter-free home. Highly recommend!",
      fullTestimonial:
        "Happy Organize brought such calm into our home. Every corner is perfectly organized.",
      image: "/images/celebrities/ramaravi.png",
      category: "Tollywood Star",
    },
    {
      id: 4,
      name: "Shobha Shetty Garu",
      profession: "Actress",
      quote: "Finally, a clutter-free home. Highly recommend!",
      fullTestimonial:
        "Happy Organize brought such calm into our home. Every corner is perfectly organized.",
      image: "/images/celebrities/shobha.png",
      category: "Tollywood Star",
    },
  ];

  const marqueeItems = [
    ...celebrityClients,
    ...celebrityClients,
    ...celebrityClients,
  ];

  const services = [
    {
      n: "01",
      title: "Kitchen & Pantry Systems",
      body: "The heart of every Indian home deserves a smart kitchen organisation system. We organise your masala shelf, pantry storage, groceries, pressure cooker space, refrigerator, drawers, and cabinets so cooking feels simple, clutter-free, and peaceful every day.",
      img: "images/celebrities/k3.png",
      link: "/services#kitchen",
    },
    {
      n: "02",
      title: "Wardrobes & Bedrooms",
      body: "We transform overflowing wardrobes, bedroom cupboards, shelves, dressing areas, clothes storage, saree sections, kids wardrobes, and daily-use spaces into calm, beautiful, easy-to-maintain systems where mornings actually feel good.",
      img: "images/celebrities/ward2.png",
      link: "/services#wardrobe",
    },
    {
      n: "03",
      title: "Full Home Decluttering",
      body: "Sometimes the whole house needs a complete decluttering reset. From living room clutter and storage rooms to bedrooms, kitchens, utility areas, pooja spaces, and family zones, we organise room by room with patience, privacy, and care.",
      img: "images/celebrities/fullhome.png",
      link: "/services#full-home",
    },
    {
      n: "04",
      title: "Move-In & Move-Out Setup",
      body: "Starting fresh in a new home or shifting out? Our move-in and move-out organising service handles unpacking, space planning, wardrobe setup, kitchen setup, storage labelling, and home arrangement so your new house feels settled from day one.",
      img: "images/celebrities/movein.png",
      link: "/services#move",
    },
  ];

  const testimonials = [
    {
      text: "I was surprised by how calm and beautiful my home felt after the organisation. Every space became easier to use and maintain. The entire process felt personal, caring, and stress-free.",
      author: "Maheshwari Garu",
      location: "Jubilee Hills",
      image: "/images/celebrities/mahi.png",
    },
    {
      text: "She organised our entire kitchen and it's been three months — everything is still exactly where she put it. My mother-in-law said it reminded her of how she kept her own home.",
      author: "Shankar & Bhavya Garu",
      location: "Banjara Hills",
      image: "/images/celebrities/shan.png",
    },
    {
      text: "Our new home finally felt complete after the unpacking and organisation. Everything was arranged so thoughtfully that settling in became effortless. It instantly felt warm, peaceful, and truly ours.",
      author: "Dr.Swathi Garu",
      location: "Gachibowli",
      image: "/images/celebrities/swathi.png",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "/images/instagram/post1.jpg",
      link: "https://www.instagram.com/happy.organize/",
      caption: "Instagram Post 1",
      type: "IMAGE",
    },
    {
      id: 2,
      image: "/images/instagram/post2.jpg",
      link: "https://www.instagram.com/happy.organize/",
      caption: "Instagram Post 2",
      type: "IMAGE",
    },
    {
      id: 3,
      image: "/images/instagram/post3.jpg",
      link: "https://www.instagram.com/happy.organize/",
      caption: "Instagram Post 3",
      type: "IMAGE",
    },
    {
      id: 4,
      image: "/images/instagram/post4.jpg",
      link: "https://www.instagram.com/happy.organize/",
      caption: "Instagram Post 4",
      type: "IMAGE",
    },
    {
      id: 5,
      image: "/images/instagram/post5.jpg",
      link: "https://www.instagram.com/happy.organize/",
      caption: "Instagram Post 5",
      type: "IMAGE",
    },
    {
      id: 6,
      image: "/images/instagram/post6.jpg",
      link: "https://www.instagram.com/happy.organize/",
      caption: "Instagram Post 6",
      type: "IMAGE",
    },
  ];

  useEffect(() => {
    document.title =
      "Happy Organize.com | Home Organising & Decluttering Services in Hyderabad";

    const setMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setPropertyTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag(
      "description",
      "Happy Organize.com offers professional home organising, home decluttering, kitchen organising, wardrobe organising, pantry setup, new home setup, move-in organising, and storage solutions in Hyderabad."
    );

    setMetaTag(
      "keywords",
      "Happy Organize, Happy Organize.com, home organising Hyderabad, home organizing Hyderabad, home decluttering Hyderabad, professional organiser Hyderabad, kitchen organising, wardrobe organising, pantry organisation, new home setup Hyderabad, move-in organising, full home decluttering, storage solutions, home organisation services"
    );

    setMetaTag("robots", "index, follow");
    setMetaTag("author", "Happy Organize.com");

    setPropertyTag(
      "og:title",
      "Happy Organize.com | Home Organising & Decluttering Services in Hyderabad"
    );
    setPropertyTag(
      "og:description",
      "Professional home organising, decluttering, kitchen organising, wardrobe setup, pantry organisation, and new home setup services in Hyderabad."
    );
    setPropertyTag("og:type", "website");
    setPropertyTag("og:url", "https://happyorganize.com");
    setPropertyTag("og:image", "/images/celebrities/hero.png");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://happyorganize.com");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Happy Organize.com",
      url: "https://happyorganize.com",
      image: "https://happyorganize.com/images/celebrities/hero.png",
      description:
        "Professional home organising, decluttering, kitchen organising, wardrobe organising, pantry setup, new home setup, move-in organising, and storage solutions in Hyderabad.",
      areaServed: {
        "@type": "City",
        name: "Hyderabad",
      },
      serviceType: [
        "Home Organising",
        "Home Decluttering",
        "Kitchen Organising",
        "Wardrobe Organising",
        "Pantry Organisation",
        "New Home Setup",
        "Move-In Organising",
        "Storage Solutions",
      ],
      founder: {
        "@type": "Person",
        name: "Sridevi Dadi",
      },
    };

    let jsonLd = document.getElementById("happy-organize-local-business-schema");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.setAttribute("type", "application/ld+json");
      jsonLd.setAttribute("id", "happy-organize-local-business-schema");
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);

    window.scrollTo(0, 0);
    setTimeout(() => setLoaded(true), 150);

    const handleScroll = () => {
      if (heroImgRef.current && window.scrollY < window.innerHeight) {
        heroImgRef.current.style.transform = `translateY(${
          window.scrollY * 0.035
        }px) scale(1.04)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document
      .querySelectorAll(
        ".animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-left, .animate-slide-right"
      )
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`home-page ${loaded ? "is-loaded" : ""}`}>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="door-left">
          <div className="door-inner">
            <div className="door-line"></div>
            <div className="door-monogram">HO</div>
            <div className="door-line"></div>
            <div className="door-label">Happy Organize</div>
          </div>
        </div>

        <div className="door-right">
          <div className="door-inner">
            <div className="door-line"></div>
            <div className="door-monogram">✦</div>
            <div className="door-line"></div>
            <div className="door-label">Hyderabad</div>
          </div>
        </div>

        <div className="door-seam"></div>

        <div className="hero-media-wrapper">
          <img
            ref={heroImgRef}
            src="/images/celebrities/hero.png"
            alt="Happy Organize.com professional home organising and decluttering service in Hyderabad"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-left">
              <p
                className="hero-overline hero-reveal"
                style={{ animationDelay: "2s" }}
              >
                <span className="overline-dash"></span>
                HAPPY ORGANIZE
              </p>

              <h1
                className="hero-title hero-reveal"
                style={{ animationDelay: "2.15s" }}
              >
                <span className="word-row">When your home</span>
                <span className="hero-highlight">feels loved,</span>
                <span className="hero-subtitle-line">life feels lighter.</span>
              </h1>

              <div
                className="hero-rule hero-reveal"
                style={{ animationDelay: "2.3s" }}
              ></div>

              <div className="hero-text">
                <p
                  className="hero-paragraph hero-reveal"
                  style={{ animationDelay: "2.45s" }}
                >
                  There’s something about the way a mother organises a home. Not
                  just neat — cared for. Every shelf arranged with intention.
                  Every drawer that makes sense. Every corner that quietly says,
                  someone loves this place. At Happy Organize.com, we bring
                  professional home organising, decluttering, wardrobe
                  organising, kitchen organising, and full home setup services
                  into real Hyderabad homes.
                </p>

                <p
                  className="hero-paragraph hero-reveal"
                  style={{ animationDelay: "2.6s" }}
                >
                  That’s what we bring into every home we touch. Led by Sridevi
                  Dadi and her team, Happy Organize gives Hyderabad families the
                  gift of a clutter-free, well-arranged home that feels like{" "}
                  <em>అమ్మ చేసినట్టు</em> — held, looked after, loved.
                </p>
              </div>

              <div
                className="hero-buttons hero-reveal"
                style={{ animationDelay: "2.75s" }}
              >
                <Link to="/contact" className="btn btn-primary btn-hover-effect">
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

                <Link
                  to="/portfolio"
                  className="btn btn-outline btn-hover-effect"
                >
                  <span>See Our Work</span>
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

            <aside
              className="hero-aside hero-reveal"
              style={{ animationDelay: "2.4s" }}
            >
              <div className="aside-card">
                <div className="aside-header">
                  <span className="aside-sparkle">✨</span>
                  <span className="aside-heading">Our Services</span>
                </div>

                {services.map((service) => (
                  <Link to={service.link} key={service.n} className="aside-row">
                    <span className="aside-num">{service.n}</span>
                    <span className="aside-title">{service.title}</span>
                  </Link>
                ))}

                <div className="aside-foot">Serving All Of Hyderabad</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-sticky animate-slide-left">
              <p className="eyebrow">— THE PHILOSOPHY</p>
              <h2 className="section-title">
                <span className="gradient-text">It's not about</span>
                <br />
                <em>being perfect.</em>
                <br />
                It's about feeling
                <br />
                at peace.
              </h2>
            </div>

            <div className="philosophy-content">
              <p className="animate-slide-up body-text">
                You know the feeling — walking into a room that's chaotic, and
                carrying that weight silently for weeks. Not knowing where to
                begin with home decluttering, storage planning, kitchen clutter,
                wardrobe clutter, or new home setup. Feeling embarrassed when
                guests come. Wishing someone would just walk in and sort it out.
              </p>

              <blockquote className="pull-quote animate-scale-in">
                <span className="pq-line"></span>
                <p>That someone is us.</p>
              </blockquote>

              <p className="animate-slide-up body-text">
                We don't come in with judgment or a clipboard. We come in the
                way a caring family would — with patience, with understanding,
                and with genuine love for the home we're working in. Our goal is
                to create simple, practical organising systems that your family
                can actually maintain after we leave.
              </p>

              <p className="philosophy-closing animate-fade-in">
                When we leave, your home won't just be organised. It'll feel
                different. Calmer. Lighter. Like someone took care of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CELEBRITY TRUST SECTION */}
      <section className="celebrities-section">
        <div className="container">
          <div className="celebrities-header animate-fade-in">
            <p className="eyebrow centered">— TRUSTED BY CELEBRITIES</p>
            <h2 className="section-title centered">
              <em>Our Beloved Celebrities & Actors</em> trust
              <br />
              Happy Organize
            </h2>
            <p className="celebrities-subtitle">
              From Tollywood superstars to renowned personalities, we've had the
              privilege of organising homes across Hyderabad with thoughtful
              home decluttering, wardrobe organising, kitchen organising, and
              personalised storage solutions.
            </p>
          </div>

          <div className="marquee-container">
            <div className="marquee-track">
              {marqueeItems.map((client, index) => (
                <div key={`${client.id}-${index}`} className="marquee-card">
                  <div className="celebrity-card">
                    <div className="celebrity-image-wrapper">
                      <img
                        src={client.image}
                        alt={`${client.name} testimonial for Happy Organize.com home organising service`}
                      />
                      <div className="celebrity-hover">
                        <div className="hover-content">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                          </svg>
                          <p>{client.fullTestimonial}</p>
                        </div>
                      </div>
                    </div>

                    <div className="celebrity-info">
                      <h3 className="celebrity-name">{client.name}</h3>
                      <p className="celebrity-profession">
                        {client.profession}
                      </p>

                      <div className="celebrity-quote">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                        </svg>
                        <p>"{client.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <div className="services-header animate-fade-in">
            <p className="eyebrow">— OUR SERVICES</p>
            <h2 className="section-title">
              Every corner of your home, <br />
              <em>handled with care.</em>
            </h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={service.n}
                className="service-card-link"
              >
                <div
                  className="service-card animate-scale-in card-hover-3d"
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  <div className="card-image-wrapper">
                    <img
                      src={service.img}
                      alt={`${service.title} by Happy Organize.com home organising and decluttering service in Hyderabad`}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-image-overlay"></div>
                    <span className="card-number">{service.n}</span>
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.body}</p>
                    <span className="card-link-arrow">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-heading-wrap animate-fade-in">
            <p className="eyebrow centered">— CLIENT STORIES</p>
            <h2 className="section-title centered">
              Real homes. Real smiles. <br />
              <em>Real peace after organising.</em>
            </h2>
            <p className="testimonials-subtitle">
              Families across Hyderabad trust Happy Organize.com for home
              decluttering, wardrobe organising, kitchen organising, new home
              setup, unpacking support, and peaceful spaces that are easy to
              maintain.
            </p>
          </div>

          <div className="testimonials-grid featured-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card testimonial-feature-card animate-scale-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="testimonial-image-panel">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author} Happy Organize.com home decluttering client in Hyderabad`}
                    loading="lazy"
                  />
                  <div className="testimonial-image-gradient"></div>

                  <div className="testimonial-floating-name">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-location">
                      {testimonial.location}
                    </span>
                  </div>
                </div>

                <div className="testimonial-content-panel">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="#D97A86"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  <svg
                    className="testimonial-big-quote"
                    width="58"
                    height="58"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>

                  <p className="testimonial-text">"{testimonial.text}"</p>

                  <div className="testimonial-bottom-line">
                    <span>Happy Organize Client</span>
                    <span>Hyderabad</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="instagram-section">
        <div className="container">
          <div className="instagram-header animate-fade-in">
            <p className="eyebrow centered">— INSTAGRAM</p>
            <h2 className="section-title centered">
              See Our Work <em>In Action</em>
            </h2>
            <p className="instagram-subtitle">
              Real transformations. Real homes. Follow along on Instagram for
              daily home organising inspiration, kitchen decluttering ideas,
              wardrobe setup tips, storage solutions, and behind-the-scenes
              moments from every project.
            </p>
          </div>

          <div className="instagram-grid">
            {instagramPosts.map((post, index) => (
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                key={post.id}
                className="instagram-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="instagram-image-wrapper">
                  <img
                    src={post.image}
                    alt={`${post.caption} - Happy Organize.com home organising transformation`}
                    loading="lazy"
                  />
                  <div className="instagram-overlay">
                    <span className="instagram-view-text">
                      View on Instagram
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="instagram-cta animate-fade-in">
            <a
              href="https://www.instagram.com/happy.organize/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-hover-effect"
            >
              <span>FOLLOW @HAPPY.ORGANIZE →</span>
            </a>
          </div>
        </div>
      </section>

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

        .home-page {
          background-color: var(--bg);
          color: var(--text);
          font-family: "DM Sans", "Lato", sans-serif;
          opacity: 0;
          transition: opacity 0.9s ease;
          overflow-x: hidden;
          position: relative;
        }

        .home-page.is-loaded {
          opacity: 1;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 4.8vw;
          position: relative;
          z-index: 2;
        }

        /* HERO EXACT SCREENSHOT STYLE */
        .hero-section {
          min-height: calc(100vh - 90px);
          position: relative;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          background: #fbf5f2;
        }

        .hero-media-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          transform: scale(1.04);
          animation: heroSoftZoom 12s ease-out forwards;
          animation-delay: 2s;
        }

        @keyframes heroSoftZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1.04);
          }
        }

        .hero-container {
          width: 100%;
          padding: 4.1rem 4.8vw 2.9rem;
          position: relative;
          z-index: 5;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(430px, 650px) 390px;
          align-items: end;
          justify-content: space-between;
          gap: 3.5rem;
          min-height: calc(100vh - 170px);
        }

        .hero-left {
          max-width: 650px;
          padding-top: 2rem;
          transform: translateY(-50px);
        }

        .hero-reveal {
          opacity: 0;
          transform: translateY(22px);
          animation: heroContentIn 0.85s cubic-bezier(0.25, 0.8, 0.25, 1)
            forwards;
        }

        @keyframes heroContentIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-overline {
          color: var(--secondary);
          font-weight: 900;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          font-size: 0.74rem;
          margin-bottom: 1.6rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .overline-dash {
          width: 36px;
          height: 2px;
          background: var(--secondary);
          display: inline-block;
        }

        .hero-title {
          font-family: "Cormorant Garamond", "Playfair Display", serif;
          color: #202124;
          margin: 0;
          line-height: 0.95;
          letter-spacing: -0.035em;
        }

        .word-row {
          display: block;
          font-size: clamp(3.8rem, 5.7vw, 5.85rem);
          font-weight: 400;
        }

        .hero-highlight {
          display: block;
          font-size: clamp(4.4rem, 6.8vw, 6.9rem);
          font-weight: 700;
          color: #de5a72;
          letter-spacing: -0.045em;
          text-shadow: 0 12px 34px rgba(217, 79, 104, 0.16);
        }

        .hero-subtitle-line {
          display: block;
          font-size: clamp(3.25rem, 5.1vw, 5.1rem);
          font-weight: 400;
        }

        .hero-rule {
          width: 62px;
          height: 2px;
          background: var(--secondary);
          margin: 1.55rem 0 1.7rem;
        }

        .hero-text {
          max-width: 595px;
        }

        .hero-paragraph {
          color: #565656;
          max-width: 575px;
          margin-bottom: 1.32rem;
          font-size: 1.02rem;
          line-height: 1.92;
          font-weight: 500;
        }

        .hero-paragraph em {
          color: #343434;
          font-style: normal;
          font-weight: 800;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 2.4rem;
          margin-top: 2.25rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1.15rem 2.45rem;
          border-radius: 5px;
          font-weight: 900;
          text-decoration: none;
          transition: all 0.35s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          font-size: 0.82rem;
          letter-spacing: 0.11em;
          text-transform: uppercase;
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
          background: rgba(255, 255, 255, 0.22);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .btn-hover-effect:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #dc5d74, #cc4861);
          color: white;
          border: 1px solid #d95770;
          box-shadow: 0 16px 30px rgba(203, 53, 82, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 38px rgba(203, 53, 82, 0.3);
        }

        .btn-outline {
          border: none;
          color: #222;
          background: transparent;
          padding-left: 0;
          padding-right: 0;
        }

        .btn-outline:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .btn-icon,
        .btn span {
          position: relative;
          z-index: 2;
        }

        .btn:hover .btn-icon {
          transform: translateX(5px);
        }

        .hero-aside {
          align-self: end;
          margin-bottom: 0.5rem;
        }

        .aside-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.74);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(64, 37, 30, 0.16);
        }

        .aside-header {
          padding: 1.35rem 1.6rem;
          background: rgba(255, 255, 255, 0.48);
          border-bottom: 1px solid rgba(73, 45, 38, 0.08);
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .aside-heading {
          color: #2a2a2a;
          font-size: 0.84rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .aside-row {
          padding: 1.35rem 1.6rem;
          border-bottom: 1px solid rgba(73, 45, 38, 0.08);
          display: grid;
          grid-template-columns: 36px 1fr;
          align-items: center;
          gap: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.08);
        }

        .aside-row:hover {
          background: rgba(255, 241, 243, 0.75);
        }

        .aside-num {
          color: #d94f68;
          font-size: 0.8rem;
          font-weight: 900;
        }

        .aside-title {
          color: #343434;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .aside-foot {
          padding: 1rem 1.5rem;
          font-size: 0.64rem;
          color: rgba(35, 35, 35, 0.48);
          text-transform: uppercase;
          letter-spacing: 0.28em;
          text-align: center;
          background: rgba(255, 255, 255, 0.42);
          font-weight: 800;
        }

        /* DOOR ANIMATION */
        .door-left,
        .door-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a0509;
          animation-duration: 1.5s;
          animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
          animation-fill-mode: forwards;
          animation-delay: 0.5s;
          pointer-events: none;
        }

        .door-left {
          left: 0;
          animation-name: doorOpenLeft;
          background: linear-gradient(to right, #12040a, #1f0810);
        }

        .door-right {
          right: 0;
          animation-name: doorOpenRight;
          background: linear-gradient(to left, #12040a, #1f0810);
        }

        @keyframes doorOpenLeft {
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes doorOpenRight {
          to {
            transform: translateX(100%);
          }
        }

        .door-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          animation: doorContentFade 0.35s ease forwards;
          animation-delay: 0.4s;
        }

        @keyframes doorContentFade {
          to {
            opacity: 0;
          }
        }

        .door-monogram {
          font-family: "Cormorant Garamond", serif;
          font-size: 3rem;
          font-weight: 400;
          color: var(--secondary);
          letter-spacing: 0.08em;
        }

        .door-line {
          width: 1px;
          height: 70px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--secondary),
            transparent
          );
        }

        .door-label {
          font-size: 0.55rem;
          letter-spacing: 0.35em;
          color: rgba(217, 122, 134, 0.65);
          text-transform: uppercase;
        }

        .door-seam {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          z-index: 35;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(217, 122, 134, 1),
            transparent
          );
          box-shadow: 0 0 12px rgba(217, 122, 134, 0.5);
          animation: seamFadeOut 0.25s ease forwards;
          animation-delay: 1.8s;
          pointer-events: none;
        }

        @keyframes seamFadeOut {
          to {
            opacity: 0;
          }
        }

        /* COMMON SECTIONS */
        .philosophy-section,
        .celebrities-section,
        .services-section,
        .testimonials-section,
        .instagram-section {
          padding: 8rem 0;
        }

        .philosophy-section,
        .testimonials-section {
          background: var(--surface);
        }

        .services-section,
        .instagram-section {
          background: var(--bg);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6vw;
          align-items: start;
        }

        .philosophy-sticky {
          position: sticky;
          top: 6rem;
        }

        .eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          font-weight: 800;
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .eyebrow.centered {
          display: block;
          text-align: center;
        }

        .section-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 2rem;
          color: var(--text);
        }

        .section-title.centered {
          text-align: center;
        }

        .section-title em {
          font-style: italic;
          color: var(--primary);
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .body-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .pull-quote {
          margin: 2.5rem 0;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .pq-line {
          width: 50px;
          height: 2px;
          background: var(--primary);
        }

        .pull-quote p {
          font-family: "Cormorant Garamond", serif;
          font-size: 2rem;
          font-style: italic;
          color: var(--primary);
        }

        .philosophy-closing {
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-size: 1.2rem;
          color: var(--primary);
          margin-top: 2rem;
        }

        /* CELEBRITIES */
        .celebrities-section {
          background: linear-gradient(135deg, #fff8f9 0%, #fff1f3 100%);
          position: relative;
          overflow: hidden;
        }

        .celebrities-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .celebrities-subtitle,
        .instagram-subtitle,
        .testimonials-subtitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.2rem;
          font-style: italic;
          color: var(--muted);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
          text-align: center;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          to {
            transform: translateX(-33.333%);
          }
        }

        .marquee-card {
          flex-shrink: 0;
          width: 320px;
        }

        .celebrity-card {
          width: 100%;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
        }

        .celebrity-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(178, 58, 72, 0.15);
        }

        .celebrity-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .celebrity-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .celebrity-card:hover img {
          transform: scale(1.05);
        }

        .celebrity-hover {
          position: absolute;
          inset: 0;
          background: rgba(122, 30, 44, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          padding: 1.5rem;
        }

        .celebrity-image-wrapper:hover .celebrity-hover {
          opacity: 1;
        }

        .hover-content {
          text-align: center;
          color: white;
          max-width: 240px;
        }

        .hover-content svg {
          margin-bottom: 1rem;
          color: var(--secondary);
        }

        .hover-content p {
          font-family: "Cormorant Garamond", serif;
          font-size: 0.9rem;
          line-height: 1.5;
          font-style: italic;
        }

        .celebrity-info {
          padding: 1.5rem;
          text-align: center;
        }

        .celebrity-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.25rem;
        }

        .celebrity-profession {
          font-size: 0.75rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .celebrity-quote {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
          text-align: left;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(178, 58, 72, 0.1);
        }

        .celebrity-quote svg {
          flex-shrink: 0;
          color: var(--secondary);
        }

        .celebrity-quote p {
          font-size: 0.85rem;
          line-height: 1.4;
          color: var(--muted);
          font-style: italic;
        }

        .celebrities-badge {
          text-align: center;
          margin-top: 3rem;
        }

        /* SERVICES */
        .services-header {
          margin-bottom: 4rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card-link {
          text-decoration: none;
          display: block;
        }

        .service-card {
          background: var(--surface);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(178, 58, 72, 0.06);
          height: 100%;
        }

        .card-hover-3d:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 40px rgba(178, 58, 72, 0.1);
          border-color: rgba(178, 58, 72, 0.2);
        }

        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .service-card:hover .card-image {
          transform: scale(1.08);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(178, 58, 72, 0.3),
            transparent
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover .card-image-overlay {
          opacity: 1;
        }

        .card-number {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          z-index: 2;
        }

        .card-content {
          padding: 1.8rem;
        }

        .card-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.8rem;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted);
          margin-bottom: 1rem;
        }

        .card-link-arrow {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
        }

        /* TESTIMONIALS - NEW PROMINENT IMAGE LAYOUT */
        .testimonials-section {
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          position: absolute;
          top: 8%;
          left: -120px;
          width: 260px;
          height: 260px;
          background: rgba(217, 122, 134, 0.12);
          border-radius: 50%;
          filter: blur(12px);
        }

        .testimonials-section::after {
          content: "";
          position: absolute;
          right: -140px;
          bottom: 10%;
          width: 300px;
          height: 300px;
          background: rgba(178, 58, 72, 0.08);
          border-radius: 50%;
          filter: blur(12px);
        }

        .testimonials-heading-wrap {
          text-align: center;
          margin-bottom: 4rem;
        }

        .featured-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .testimonial-feature-card {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(178, 58, 72, 0.1);
          box-shadow: 0 20px 55px rgba(178, 58, 72, 0.1);
          transition: all 0.45s ease;
        }

        .testimonial-feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 34px 75px rgba(178, 58, 72, 0.18);
          border-color: rgba(178, 58, 72, 0.25);
        }

        .testimonial-image-panel {
          height: 330px;
          position: relative;
          overflow: hidden;
          background: #f8e8eb;
        }

        .testimonial-image-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.65s ease;
        }

        .testimonial-feature-card:hover .testimonial-image-panel img {
          transform: scale(1.08);
        }

        .testimonial-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              to top,
              rgba(50, 14, 22, 0.72),
              rgba(50, 14, 22, 0.04) 60%
            ),
            linear-gradient(135deg, rgba(217, 122, 134, 0.16), transparent);
        }

        .testimonial-floating-name {
          position: absolute;
          left: 1.35rem;
          right: 1.35rem;
          bottom: 1.25rem;
          padding: 1rem 1.1rem;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 18px;
        }

        .testimonial-floating-name .author-name {
          color: white;
          text-shadow: 0 3px 14px rgba(0, 0, 0, 0.24);
        }

        .testimonial-floating-name .author-location {
          color: rgba(255, 255, 255, 0.88);
        }

        .testimonial-content-panel {
          padding: 2rem;
          position: relative;
          min-height: 285px;
          background: radial-gradient(
              circle at top right,
              rgba(217, 122, 134, 0.13),
              transparent 36%
            ),
            #fff;
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 1.2rem;
        }

        .testimonial-big-quote {
          position: absolute;
          right: 1.6rem;
          top: 1.35rem;
          color: rgba(178, 58, 72, 0.1);
        }

        .testimonial-text {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.32rem;
          font-style: italic;
          color: #2a2a2a;
          margin: 0;
          line-height: 1.55;
          position: relative;
          z-index: 2;
        }

        .testimonial-bottom-line {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 1.8rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(178, 58, 72, 0.12);
          color: var(--primary);
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .author-name {
          display: block;
          font-weight: 900;
          color: var(--primary);
          text-transform: uppercase;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
        }

        .author-location {
          display: block;
          font-size: 0.82rem;
          color: var(--muted);
          font-weight: 700;
        }

        /* INSTAGRAM */
        .instagram-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .instagram-card {
          background: var(--surface);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          text-decoration: none;
          display: block;
          border: 1px solid rgba(178, 58, 72, 0.08);
        }

        .instagram-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 45px rgba(178, 58, 72, 0.12);
          border-color: rgba(178, 58, 72, 0.22);
        }

        .instagram-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f8e8eb;
        }

        .instagram-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: block;
        }

        .instagram-card:hover img {
          transform: scale(1.08);
        }

        .instagram-overlay {
          position: absolute;
          inset: 0;
          background: rgba(122, 30, 44, 0.72);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .instagram-card:hover .instagram-overlay {
          opacity: 1;
        }

        .instagram-view-text {
          color: white;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          background: rgba(255, 255, 255, 0.14);
          padding: 0.65rem 1.25rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(6px);
        }

        .instagram-cta {
          text-align: center;
          display: flex;
          justify-content: center;
        }

        /* SCROLL ANIMATIONS */
        .animate-fade-in,
        .animate-scale-in,
        .animate-slide-up,
        .animate-slide-left,
        .animate-slide-right {
          opacity: 0;
          transition: opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1),
            transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .animate-fade-in {
          transform: translateY(25px);
        }

        .animate-scale-in {
          transform: scale(0.92);
        }

        .animate-slide-up {
          transform: translateY(50px);
        }

        .animate-slide-left {
          transform: translateX(-40px);
        }

        .animate-slide-right {
          transform: translateX(40px);
        }

        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: start;
          }

          .hero-aside {
            max-width: 430px;
            margin-bottom: 0;
          }

          .hero-overlay {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.98) 0%,
              rgba(255, 255, 255, 0.92) 50%,
              rgba(255, 255, 255, 0.45) 100%
            );
          }

          .featured-testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-feature-card {
            display: grid;
            grid-template-columns: 42% 1fr;
          }

          .testimonial-image-panel {
            height: auto;
            min-height: 340px;
          }
        }

        @media (max-width: 1024px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .philosophy-sticky {
            position: static;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .marquee-card {
            width: 300px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
          }

          .hero-container {
            padding: 3.5rem 1.25rem 2.8rem;
          }

          .hero-grid {
            min-height: auto;
          }

          .hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.98) 0%,
              rgba(255, 255, 255, 0.93) 45%,
              rgba(255, 241, 243, 0.86) 100%
            );
          }

          .hero-img {
            object-position: center;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 1.1rem;
          }

          .btn {
            width: 100%;
            text-align: center;
          }

          .philosophy-section,
          .celebrities-section,
          .services-section,
          .testimonials-section,
          .instagram-section {
            padding: 4rem 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-feature-card {
            display: block;
          }

          .testimonial-image-panel {
            height: 360px;
            min-height: unset;
          }

          .testimonial-content-panel {
            min-height: auto;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .marquee-track {
            gap: 1rem;
            animation-duration: 20s;
          }

          .marquee-card {
            width: 280px;
          }

          .celebrity-image-wrapper {
            height: 240px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .hero-container {
            padding: 3rem 1rem 2.5rem;
          }

          .word-row {
            font-size: 3rem;
          }

          .hero-highlight {
            font-size: 3.5rem;
          }

          .hero-subtitle-line {
            font-size: 2.7rem;
          }

          .hero-paragraph {
            font-size: 0.96rem;
            line-height: 1.75;
          }

          .aside-row {
            padding: 1.15rem 1.25rem;
          }

          .testimonial-image-panel {
            height: 330px;
          }

          .testimonial-content-panel {
            padding: 1.6rem;
          }

          .testimonial-text {
            font-size: 1.15rem;
          }

          .testimonial-bottom-line {
            flex-direction: column;
            gap: 0.3rem;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .instagram-card {
            border-radius: 6px;
          }

          .marquee-card {
            width: 260px;
          }

          .celebrity-image-wrapper {
            height: 200px;
          }

          .door-monogram {
            font-size: 2rem;
          }

          .door-line {
            height: 35px;
          }

          .door-label {
            font-size: 0.45rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;