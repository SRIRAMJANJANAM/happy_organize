import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

function Blog() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Read URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');
    if (postId) {
      setSelectedPostId(parseInt(postId));
    }
  }, []);

  // Update URL when post changes
  const handleReadMore = (post) => {
    const url = new URL(window.location);
    url.searchParams.set('post', post.id);
    window.history.pushState({}, '', url);
    setSelectedPostId(post.id);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    const url = new URL(window.location);
    url.searchParams.delete('post');
    window.history.pushState({}, '', url);
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  const handleShare = async (post) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?post=${post.id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.intro,
          url: shareUrl
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(post.title + '\n\n' + post.intro + '\n\n' + shareUrl)}`, '_blank');
    }
  };

  // Intersection Observer
  useEffect(() => {
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
      const elements = document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-up');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [selectedPostId]);

  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: "Why Indian kitchens need a different organising approach — and what actually works",
      intro: "Most Western kitchen organising advice misses the mark when applied to an Indian kitchen. Here's what we've learned from working in hundreds of homes across Hyderabad — and the approach that actually holds up.",
      relativeDate: "1 day ago",
      readTime: "6 min read",
      category: "Kitchen",
      image: "images/celebrities/kitchen.png",
      featured: true,
      content: [
        "When we first started organising homes professionally, we tried following the popular Western methods we'd read about. Label everything. Use clear containers. Group by type. It looked beautiful — for about three days.",
        "Then reality hit. The Indian kitchen is different. It's not just a place where meals are prepared; it's the heart of the home. It handles three to four meals a day, multiple spice blends, pressure cookers, heavy kadai sets, and enough dabbas to stock a small store.",
        "Here's what we've learned after organising hundreds of kitchens across Hyderabad.",
        "First, understand the flow of your kitchen. In most Indian homes, the cooking happens in specific zones — the prep area near the sink, the cooking area near the stove, and the storage area where grains and spices live. Don't fight this natural flow. Work with it.",
        "Your masala shelf is the most critical zone in the kitchen. We always start there. Sort spices by frequency of use — daily items like jeera, rai, haldi should be at the front and within arm's reach. Special occasion spices can go higher or further back. Use square containers instead of round ones — they use shelf space more efficiently.",
        "The pressure cooker and kadai collection is another uniquely Indian challenge. These are bulky and we often have multiple sizes. Nest them where you can, but keep the most-used one immediately accessible. We often place a pull-out shelf or a sturdy hook system under the counter for easy access.",
        "Don't overlook the fridge. In Indian homes, the fridge holds leftovers, chutneys, pickle jars, and prepped batters. Use clear, labelled containers. Group by type — dairy in one section, cooked food in another, chutneys and condiments together. This small step saves hours of searching.",
        "Above all, the system has to be simple enough that every family member can maintain it. If only one person knows where things go, the organisation won't last. Involve your family in the process. Show them the logic behind the arrangement.",
        "Remember: the goal isn't a kitchen that looks like a magazine. It's a kitchen that works for your family's actual life — the chai at 6 AM, the lunch prep, the evening snacks, and the dinner rush."
      ]
    },
    {
      id: 2,
      title: "The one thing I do in every wardrobe before I start organising",
      intro: "There's one step most people skip — and it's the reason their wardrobes get cluttered again within weeks. We'll walk you through exactly what we do at the start of every session.",
      relativeDate: "6 days ago",
      readTime: "5 min read",
      category: "Wardrobe",
      image: "images/celebrities/ward.png",
      featured: true,
      content: [
        "In every single wardrobe we've organised — and we've done over 200 of them — there's one step we never skip. It's not sorting by colour. It's not buying fancy hangers. It's something much simpler and more powerful.",
        "We take everything out. Everything.",
        "Every dupatta, every kurta, every saree, every pair of jeans, every single sock. It all comes out and goes onto the bed or a clean sheet on the floor. Why? Because you can't truly see what you have until it's all in front of you.",
        "This is the moment of truth. Most of our clients are shocked. \"I didn't realise I had seven black kurtas.\" \"I've been looking for this saree for two years!\" \"When did I buy this?\" The pile on the bed tells a story — about shopping habits, about clothes we've outgrown, about pieces we kept \"just in case.\"",
        "Now comes the sorting. We guide our clients through three piles: Keep, Donate, and Maybe. The Maybe pile is important — these are items with emotional value or uncertainty. We revisit it at the end, and usually, most of it moves to Donate.",
        "Here's our rule: if you haven't worn it in a year and it doesn't hold deep sentimental value, it's time to let it go. Someone else will love it. Your wardrobe should serve your current life, not your past.",
        "Once we've sorted, the real organising begins. We arrange by category — all kurtas together, all sarees together, all trousers together. Within each category, we sort by colour. This makes it incredibly easy to find what you need.",
        "We use velvet hangers for delicate items, sturdy wooden hangers for heavy garments, and vertical folding for t-shirts and jeans — the Marie Kondo method really does work here. You can see everything at a glance.",
        "The final step: put the most-worn items at eye level and within easiest reach. Special occasion wear can go higher. Seasonal items can be stored in the upper shelves.",
        "When our clients see their finished wardrobe, the reaction is almost always the same — a deep breath, sometimes tears, and always a smile. \"It feels like a boutique,\" they say. But it's not about looking perfect. It's about starting your day without the stress of searching.",
        "A well-organised wardrobe doesn't just save time. It saves mental energy. And that's worth more than any fancy storage solution."
      ]
    },
    {
      id: 3,
      title: "How to involve your children in keeping the home tidy — without the battles",
      intro: "We've watched families transform when children become part of the organising process. It doesn't have to be a daily fight. Here's the gentle approach that actually works.",
      relativeDate: "Last week",
      readTime: "5 min read",
      category: "General",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      featured: true,
      content: [
        "\"Clean your room!\" These three words have started more family arguments than any others. We've seen it in so many homes — frustrated parents, resistant children, and a growing resentment on both sides.",
        "But here's what we've learned: children don't hate tidying up. They hate being ordered to do it without understanding why, and they hate systems that don't make sense to them.",
        "The turning point in one family we worked with came when the mother stopped saying \"clean your room\" and started saying \"let's make your toys easy to find when you want to play.\" Same goal, completely different energy.",
        "Start young, start small. A three-year-old can put their shoes in a designated spot. A five-year-old can sort their toys into two bins — favourites and occasional. An eight-year-old can fold their own clothes if you show them how. The key is making it achievable.",
        "We recommend creating 'zones' in children's rooms that they help design. When a child decides where their books go, where their art supplies live, and where their LEGO collection sits, they're far more likely to maintain it. They have ownership.",
        "Use visual cues instead of verbal commands. A picture label on a bin showing what goes inside works better than telling a child twenty times. Low shelves, open bins, and hooks at their height make independence possible.",
        "And please, don't expect perfection. A child's room doesn't need to look like a catalogue. The goal is functional order — they can find their things, they can put them back, and they feel capable doing it.",
        "The families who succeed with this approach tell us the same thing: once the battles stopped, their children actually started tidying up on their own. Not always, not perfectly, but willingly. And that's a win worth celebrating."
      ]
    },
    {
      id: 4,
      title: "Before you move in: the 5 things to set up first",
      intro: "Moving into a new home is overwhelming. But if you set up these five things on day one, everything else falls into place much more easily.",
      relativeDate: "2 weeks ago",
      readTime: "7 min read",
      category: "Move-In",
      image: "images/celebrities/movein.png",
      featured: false,
      content: [
        "We've helped dozens of families move into new homes across Hyderabad. The ones who had the smoothest transitions all did the same thing — they prioritised five specific areas before unpacking anything else.",
        "1. The Kitchen. Start here. Set up your kitchen first because you'll need it immediately. Unpack the essentials: one saucepan, one frying pan, your pressure cooker, your masala dabba, basic utensils, plates for the family, and cleaning supplies. Everything else can wait.",
        "2. One Bathroom. Choose the bathroom your family will use most and set it up completely. Towels, toiletries, a shower curtain if needed, toilet paper, hand soap. In the chaos of moving, a functional bathroom is a sanctuary.",
        "3. Beds for Everyone. On day one, make sure every family member has a bed they can sleep in. It doesn't need to be perfectly made with decorative pillows — just clean sheets, a pillow, and a blanket. You'll be grateful when exhaustion hits.",
        "4. A 'First Night' Box. This is our favourite tip. Pack one box per person with everything they'll need for the first 24 hours: a change of clothes, pajamas, toothbrush, phone charger, essential medicines, and something comforting — a favourite book, a child's beloved toy.",
        "5. The Entryway. Set up a simple system at your main door: a shoe rack, hooks for keys and bags, and a small surface for mail. This prevents the entrance from becoming a dumping ground from day one.",
        "Everything else — the decorative items, the extra kitchen gadgets, the books you've read — can be unpacked gradually over the following weeks. There's no rush. Your home will come together beautifully with time and patience."
      ]
    },
    {
      id: 5,
      title: "Why 'I'll deal with it later' is the most expensive thing in your home",
      intro: "That pile in the corner. The drawer you don't open. The cupboard stuffed with someday items — they're costing you more than you realise. Let us explain why.",
      relativeDate: "3 weeks ago",
      readTime: "4 min read",
      category: "General",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
      featured: false,
      content: [
        "There's a phrase we hear in almost every home we visit: \"I'll deal with it later.\" The stack of papers on the dining table. The clothes draped over a chair. The kitchen drawer that won't close properly.",
        "Here's the truth: 'later' has a cost. And it's higher than most of us realise.",
        "Clutter costs you time. Every morning spent searching for keys, every evening hunting for a specific document, every dinner delayed because the counter is covered in stuff — these minutes add up to hours, then days, over a year.",
        "Clutter costs you money. How many times have you bought something only to discover you already owned it, buried somewhere? How much food has expired because it was hidden at the back of a chaotic fridge?",
        "But the biggest cost is mental. A cluttered space creates a cluttered mind. It's hard to relax in a room where unfinished tasks stare at you from every corner. It's hard to focus when your environment is chaotic.",
        "One client told us she didn't realise how much stress her cluttered home was causing until it was gone. 'I thought I was just a stressed person,' she said. 'Turns out my home was stressing me.'",
        "Our advice? Deal with it now. The two-minute rule: if a task takes less than two minutes, do it immediately. Hang up that coat. Put that dish in the sink. File that bill. It sounds too simple to work, but it changes everything."
      ]
    },
    {
      id: 6,
      title: "The masala dabba problem — and how I solve it in every kitchen",
      intro: "Every Indian kitchen has one. The masala shelf that starts organised and ends up chaotic within a week. Here's the system that actually sticks.",
      relativeDate: "Last month",
      readTime: "5 min read",
      category: "Kitchen",
      image: "images/celebrities/k2.png",
      featured: false,
      content: [
        "The masala dabba is sacred in an Indian kitchen. It holds the flavours that define our cooking — jeera, rai, haldi, dhaniya, garam masala, and the special blends passed down through generations.",
        "But let's be honest: the masala shelf is usually a disaster. It starts organised. Within a week, it's chaos. Spices in the wrong containers. Empty packets. Things spilling. That one chilli powder that gets everywhere.",
        "After working in hundreds of kitchens, here's the system that actually works.",
        "Step one: audit your spices. Pull everything out. Check dates. Be honest — if a spice has been sitting there for two years, it's lost its flavour. Let it go.",
        "Step two: standardise your containers. We recommend square glass jars with airtight lids. They stack well, they're transparent so you can see levels, and glass doesn't absorb flavours. Label the top and the side so you can identify them from any angle.",
        "Step three: arrange by frequency. Daily spices at the front, occasional ones at the back. We keep jeera, rai, haldi, red chilli, and salt right by the stove. Everything else goes on the shelf.",
        "Step four: this is the game-changer. Keep whole spices separate from ground spices. Whole spices last much longer. Ground spices lose potency quickly. Don't mix them. We give whole spices their own section.",
        "Step five: the one-month rule. Once a month, spend ten minutes checking your spice shelf. Refill what's low. Wipe down the jars. Check for anything past its prime.",
        "The families who maintain this system tell us the same thing: it's so simple they don't even think about it anymore. And that's exactly what good organisation feels like — effortless."
      ]
    },
    {
      id: 7,
      title: "How to let go of things you haven't used in years (without guilt)",
      intro: "We've sat with mothers, grandmothers, and young professionals — all of them holding onto things for different reasons. This is the gentle approach we use to help them let go.",
      relativeDate: "Last month",
      readTime: "6 min read",
      category: "General",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
      featured: false,
      content: [
        "The hardest part of our job isn't the physical work of organising. It's the emotional work of helping someone let go. We've held space for mothers crying over their children's baby clothes. We've watched grown men struggle to part with their father's old briefcase. We've seen the guilt, the anxiety, the fear.",
        "Letting go is never just about the stuff.",
        "Every item we hold onto has a story — a memory, a hope, a fear. The saree from your wedding. The toys your children outgrew. The books you promised yourself you'd read someday. These aren't just objects. They're pieces of our lives.",
        "So we never start by telling someone to throw things away. We start by listening.",
        "We sit together, often with a cup of chai, and go through one small area at a time. We ask gentle questions: 'Tell me about this.' 'When did you last use it?' 'What would it feel like to let this go?'",
        "The key is not to rush. There's no timer, no pressure. Some items are easy — the expired medicines, the broken pens, the old receipts. Those go quickly. Others take time. That's okay.",
        "When someone is really struggling, we suggest what we call a 'transition box.' Items that are too hard to let go of right now go into a sealed box with today's date. In six months, if they haven't needed or missed anything from that box, they can let it go — or keep it another six months. There's no deadline.",
        "Most importantly, we remind our clients that letting go of an object doesn't mean letting go of the memory. The love, the person, the moment — those stay with you forever. The object is just an object.",
        "The families we've worked with often tell us the same thing afterwards: they feel lighter. Not just because their home has more space, but because they've released something they didn't realise they were carrying.",
        "If you're struggling with letting go, be kind to yourself. Start small. A single drawer. A single shelf. You don't have to do it all at once. And remember: your home deserves to hold your present, not just your past."
      ]
    }
  ], []);

  const selectedPost = selectedPostId ? blogPosts.find(p => p.id === selectedPostId) : null;

  // Generate blog schema for all posts
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Happy Organize Blog - Home Organising Tips & Advice for Indian Homes",
    "description": "Practical home organising tips, decluttering advice, and storage solutions for Indian homes. Written by Sridevi Dadi, professional home organiser in Hyderabad.",
    "url": "https://happyorganize.com/blog",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "ProfessionalService",
      "name": "Happy Organize",
      "url": "https://happyorganize.com",
      "logo": "https://happyorganize.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.intro,
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01",
      "author": {
        "@type": "Person",
        "name": "Sridevi Dadi",
        "url": "https://happyorganize.com/about"
      },
      "image": post.image.startsWith("http") ? post.image : `https://happyorganize.com/${post.image}`,
      "articleSection": post.category,
      "keywords": `${post.category}, home organising tips, home decluttering advice, Indian home organisation, ${post.category.toLowerCase()} organisation Hyderabad`
    }))
  };

  // SINGLE POST VIEW
  if (selectedPost) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?post=${selectedPost.id}`;
    
    // Single post schema
    const singlePostSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": selectedPost.title,
      "description": selectedPost.intro,
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01",
      "author": {
        "@type": "Person",
        "name": "Sridevi Dadi",
        "url": "https://happyorganize.com/about",
        "jobTitle": "Professional Home Organiser",
        "worksFor": {
          "@type": "Organization",
          "name": "Happy Organize"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Happy Organize",
        "logo": {
          "@type": "ImageObject",
          "url": "https://happyorganize.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": shareUrl
      },
      "image": selectedPost.image.startsWith("http") ? selectedPost.image : `https://happyorganize.com/${selectedPost.image}`,
      "articleSection": selectedPost.category,
      "keywords": `${selectedPost.category}, home organising tips, home decluttering advice, Hyderabad home organisation, Indian kitchen organisation, wardrobe organising tips`,
      "about": {
        "@type": "Thing",
        "name": selectedPost.category,
        "description": `Professional advice for ${selectedPost.category.toLowerCase()} organisation in Indian homes`
      }
    };

    return (
      <>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{selectedPost.title} | Happy Organize Blog | Home Organising Tips Hyderabad</title>
          <meta name="description" content={selectedPost.intro.substring(0, 155)} />
          <meta name="keywords" content={`${selectedPost.category}, home organising tips, home decluttering advice, kitchen organisation, wardrobe organising, bedroom organisation, full home decluttering, storage solutions, Indian home organisation, Hyderabad home organiser, ${selectedPost.title.toLowerCase().substring(0, 50)}`} />
          
          {/* Canonical URL */}
          <link rel="canonical" href={shareUrl} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:url" content={shareUrl} />
          <meta property="og:title" content={selectedPost.title} />
          <meta property="og:description" content={selectedPost.intro.substring(0, 155)} />
          <meta property="og:image" content={selectedPost.image.startsWith("http") ? selectedPost.image : `https://happyorganize.com/${selectedPost.image}`} />
          <meta property="og:site_name" content="Happy Organize" />
          <meta property="og:locale" content="en_IN" />
          <meta property="article:published_time" content="2024-01-01" />
          <meta property="article:author" content="Sridevi Dadi" />
          <meta property="article:section" content={selectedPost.category} />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={selectedPost.title} />
          <meta name="twitter:description" content={selectedPost.intro.substring(0, 155)} />
          <meta name="twitter:image" content={selectedPost.image.startsWith("http") ? selectedPost.image : `https://happyorganize.com/${selectedPost.image}`} />
          
          {/* Author */}
          <meta name="author" content="Sridevi Dadi" />
          
          {/* Article Schema */}
          <script type="application/ld+json">
            {JSON.stringify(singlePostSchema)}
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
                  "name": "Blog",
                  "item": "https://happyorganize.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": selectedPost.title.substring(0, 60),
                  "item": shareUrl
                }
              ]
            })}
          </script>
        </Helmet>

        <div className="blog-post-page">
          <article className="single-post">
            <div className="post-header">
              <div className="container">
                <button onClick={handleBackToList} className="back-btn" aria-label="Back to all blog posts">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Back to Blog
                </button>
                <div className="post-meta-header">
                  <span className="post-category-badge">{selectedPost.category}</span>
                  <span className="post-date">{selectedPost.relativeDate}</span>
                  <span className="post-dot">·</span>
                  <span className="post-read-time">{selectedPost.readTime}</span>
                </div>
                <h1 className="post-title">{selectedPost.title}</h1>
                <p className="post-intro">{selectedPost.intro}</p>
              </div>
            </div>

            <div className="post-hero-image">
              <img src={selectedPost.image} alt={`${selectedPost.title} - illustration`} />
            </div>

            <div className="post-content">
              <div className="container">
                <div className="post-body">
                  {selectedPost.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="post-footer">
                  <h3>Share this post</h3>
                  <div className="share-buttons">
                    <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(selectedPost.title + '\n\n' + shareUrl)}`, '_blank')} className="share-btn share-whatsapp" aria-label="Share on WhatsApp">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                      WhatsApp
                    </button>
                    <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')} className="share-btn share-facebook" aria-label="Share on Facebook">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Facebook
                    </button>
                  </div>
                  <button onClick={handleBackToList} className="btn-back" aria-label="Return to blog listing">
                    ← Back to all posts
                  </button>
                </div>
              </div>
            </div>
          </article>

          <style jsx>{`
            .blog-post-page { background: #FFF1F3; font-family: 'DM Sans', sans-serif; color: #1F1F1F; min-height: 100vh; }
            .container { max-width: 800px; margin: 0 auto; padding: 0 2rem; width: 100%; box-sizing: border-box; }
            .post-header { padding: 3rem 0 2rem; background: linear-gradient(135deg, #FFF1F3 0%, #FFFFFF 100%); }
            .back-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: none; border: none; color: #B23A48; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; cursor: pointer; padding: 0; margin-bottom: 1.5rem; }
            .back-btn:hover { opacity: 0.7; }
            .post-meta-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap; }
            .post-category-badge { background: rgba(178, 58, 72, 0.1); color: #B23A48; padding: 0.3rem 0.75rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600; }
            .post-date, .post-read-time { font-size: 0.85rem; color: #6D6D6D; }
            .post-dot { color: #D97A86; }
            .post-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 3.5vw, 2.5rem); font-weight: 600; color: #1F1F1F; line-height: 1.3; margin-bottom: 1rem; }
            .post-intro { font-size: clamp(0.9rem, 1.3vw, 1.05rem); line-height: 1.8; color: #6D6D6D; margin-bottom: 1rem; font-style: italic; }
            .post-hero-image { width: 100%; max-height: 500px; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #FFF1F3; }
            .post-hero-image img { width: 100%; height: auto; max-height: 500px; object-fit: contain; display: block; }
            .post-content { padding: 3rem 0 4rem; background: #FFFFFF; }
            .post-body p { font-size: clamp(0.9rem, 1.2vw, 1.05rem); line-height: 1.9; color: #1F1F1F; margin-bottom: 1.5rem; word-wrap: break-word; }
            .post-body p:first-child { font-size: clamp(1rem, 1.3vw, 1.15rem); color: #7A1E2C; }
            .post-footer { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(178, 58, 72, 0.1); text-align: center; }
            .post-footer h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: #1F1F1F; margin-bottom: 1.5rem; }
            .share-buttons { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
            .share-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; border-radius: 4px; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600; color: white; transition: transform 0.3s ease; }
            .share-btn:hover { transform: translateY(-2px); }
            .share-whatsapp { background: #25D366; }
            .share-facebook { background: #1877F2; }
            .btn-back { display: inline-block; background: none; border: 2px solid #B23A48; color: #B23A48; padding: 0.75rem 2rem; border-radius: 4px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.3s; }
            .btn-back:hover { background: #B23A48; color: white; }
            @media (max-width: 768px) { 
              .container { padding: 0 1rem; } 
              .post-header { padding: 2rem 0 1.5rem; } 
              .post-content { padding: 2rem 0 3rem; } 
              .post-hero-image { max-height: 350px; }
              .post-hero-image img { max-height: 350px; }
            }
          `}</style>
        </div>
      </>
    );
  }

  // BLOG LIST VIEW
  const featuredPosts = blogPosts.filter(post => post.featured);
  const olderPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Home Organising Blog | Practical Tips for Indian Homes | Happy Organize Hyderabad</title>
        <meta name="title" content="Home Organising Blog | Practical Tips for Indian Homes | Happy Organize Hyderabad" />
        <meta name="description" content="Expert home organising tips and decluttering advice for Indian homes. Learn kitchen organisation, wardrobe management, storage solutions, and more from Hyderabad's trusted professional organiser." />
        <meta name="keywords" content="home organising blog, home organising tips, decluttering advice, kitchen organisation tips, wardrobe organising tips, Indian home organisation, storage solutions Hyderabad, home organisation blog, decluttering blog India, professional organiser tips, home organising Hyderabad, kitchen organising tips, wardrobe decluttering, home storage ideas, organisation advice, clutter-free living tips, home organisation guide, Indian kitchen organisation, masala dabba organisation, home organising expert, bedroom organisation tips, full home decluttering guide" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://happyorganize.com/blog" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyorganize.com/blog" />
        <meta property="og:title" content="Home Organising Blog | Practical Tips for Indian Homes" />
        <meta property="og:description" content="Expert home organising tips and decluttering advice for Indian homes. Kitchen, wardrobe, and whole home organisation strategies from Hyderabad's professional organiser." />
        <meta property="og:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        <meta property="og:site_name" content="Happy Organize" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://happyorganize.com/blog" />
        <meta name="twitter:title" content="Happy Organize Blog | Home Organising Tips for Indian Homes" />
        <meta name="twitter:description" content="Practical home organising advice for Indian homes. Kitchen, wardrobe, and decluttering tips from Hyderabad's professional organiser." />
        <meta name="twitter:image" content="https://happyorganize.com/images/celebrities/kitchen.png" />
        
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
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Alternate Language Versions */}
        <link rel="alternate" href="https://happyorganize.com/blog" hrefLang="en-in" />
        <link rel="alternate" href="https://happyorganize.com/blog" hrefLang="en" />
        <link rel="alternate" href="https://happyorganize.com/blog" hrefLang="x-default" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
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
                "name": "Blog",
                "item": "https://happyorganize.com/blog"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema for Blog Topics */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I organise my Indian kitchen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our blog covers kitchen organisation tips specifically for Indian homes, including masala dabba organisation, fridge organisation, and storage solutions for pressure cookers and kadai sets."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best way to organise a wardrobe in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Learn professional wardrobe organising techniques including sorting, folding, and storage solutions for sarees, kurtas, and traditional Indian clothing."
                }
              },
              {
                "@type": "Question",
                "name": "How do I declutter my home without feeling overwhelmed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our blog provides gentle, practical advice on letting go of items without guilt, creating sustainable systems, and maintaining an organised home."
                }
              }
            ]
          })}
        </script>
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Helmet>

      <div className="blog-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge animate-scale-in">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hero-badge-icon"
                >
                  <path
                    d="M4 19.5V5.5C4 4.12 5.12 3 6.5 3H20V17H6.5C5.12 17 4 18.12 4 19.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19.5C4 20.88 5.12 22 6.5 22H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7H16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 11H14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Blog
              </span>

              <h1 className="hero-title animate-fade-in">
                Tips from <span className="gradient-text">our home to yours</span>
              </h1>

              <p className="hero-text animate-slide-up">
                <em>
                  Simple, practical organising advice — written the way we'd share it
                  with a friend.
                </em>
              </p>
            </div>
          </div>
        </section>

        <section className="posts-section">
          <div className="container">
            <h2 className="section-label animate-fade-in">⭐ Latest Posts</h2>
            <div className="posts-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="blog-card animate-scale-in">
                  <div className="card-image" onClick={() => handleReadMore(post)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleReadMore(post)}>
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="card-badge">{post.category}</span>
                  </div>
                  <div className="card-content">
                    <div className="card-meta">
                      <span>{post.category}</span>
                      <span className="dot">·</span>
                      <span>{post.relativeDate}</span>
                      <span className="dot">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 onClick={() => handleReadMore(post)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleReadMore(post)}>{post.title}</h3>
                    <p>{post.intro}</p>
                    <div className="card-actions">
                      <button onClick={() => handleReadMore(post)}>Read More →</button>
                      <button onClick={() => handleShare(post)} title="Share this post" aria-label="Share">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="posts-section older">
          <div className="container">
            <h2 className="section-label animate-fade-in">📖 More Posts</h2>
            <div className="posts-grid">
              {olderPosts.map(post => (
                <article key={post.id} className="blog-card animate-scale-in">
                  <div className="card-image" onClick={() => handleReadMore(post)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleReadMore(post)}>
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="card-badge">{post.category}</span>
                  </div>
                  <div className="card-content">
                    <div className="card-meta">
                      <span>{post.category}</span>
                      <span className="dot">·</span>
                      <span>{post.relativeDate}</span>
                      <span className="dot">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 onClick={() => handleReadMore(post)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleReadMore(post)}>{post.title}</h3>
                    <p>{post.intro}</p>
                    <div className="card-actions">
                      <button onClick={() => handleReadMore(post)}>Read More →</button>
                      <button onClick={() => handleShare(post)} title="Share this post" aria-label="Share">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .blog-page { background: #FFF1F3; font-family: 'DM Sans', sans-serif; color: #1F1F1F; -webkit-overflow-scrolling: touch; }
          .container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; width: 100%; box-sizing: border-box; }
          .hero-section { padding: 8rem 0 3rem; background: linear-gradient(135deg, #FFF1F3 0%, #FFFFFF 100%); text-align: center; }
          .hero-badge { display: inline-block; padding: 0.5rem 1.25rem; background: rgba(178,58,72,0.08); border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: #B23A48; margin-bottom: 1.5rem; }
          .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 3rem); font-weight: 600; color: #1F1F1F; line-height: 1.2; margin-bottom: 1rem; }
          .gradient-text { background: linear-gradient(135deg, #B23A48, #7A1E2C); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; }
          .hero-text { font-size: 1.1rem; color: #B23A48; font-style: italic; max-width: 600px; margin: 0 auto; }
          .hero-text em { color: #7A1E2C; }
          .posts-section { padding: 4rem 0; }
          .posts-section.older { padding-top: 0; }
          .section-label { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: #1F1F1F; margin-bottom: 2rem; }
          .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
          .blog-card { background: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid rgba(178,58,72,0.06); transition: all 0.35s ease; }
          .blog-card:hover { transform: translateY(-6px); box-shadow: 0 15px 30px rgba(178,58,72,0.1); border-color: rgba(178,58,72,0.2); }
          .card-image { width: 100%; aspect-ratio: 16/10; overflow: hidden; position: relative; cursor: pointer; }
          .card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
          .blog-card:hover .card-image img { transform: scale(1.03); }
          .card-badge { position: absolute; top: 1rem; left: 1rem; background: rgba(178,58,72,0.9); color: white; padding: 0.3rem 0.75rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
          .card-content { padding: 1.5rem; }
          .card-meta { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; font-size: 0.75rem; color: #B23A48; font-weight: 600; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; }
          .card-meta .dot { color: #D97A86; }
          .card-meta span:first-child { color: #D97A86; }
          .card-content h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 600; color: #1F1F1F; margin-bottom: 0.75rem; line-height: 1.4; cursor: pointer; }
          .card-content h3:hover { color: #B23A48; }
          .card-content p { font-size: 0.9rem; line-height: 1.6; color: #6D6D6D; margin-bottom: 1rem; word-wrap: break-word; }
          .card-actions { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid rgba(178,58,72,0.08); }
          .card-actions button { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600; color: #B23A48; padding: 0; -webkit-tap-highlight-color: transparent; }
          .card-actions button:hover { opacity: 0.7; }
          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .hero-badge-icon {
            flex-shrink: 0;
          }

          .animate-fade-in,
          .animate-scale-in,
          .animate-slide-up {
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
          .is-visible {
            opacity: 1 !important;
            transform: translate(0, 0) scale(1) !important;
          }

          @media (max-width: 768px) { 
            .container { padding: 0 1rem; } 
            .hero-section { padding: 5rem 0 2rem; } 
            .posts-section { padding: 3rem 0; } 
            .posts-grid { grid-template-columns: 1fr; gap: 1.5rem; }
            .card-content { padding: 1.25rem; }
          }
          @media (max-width: 480px) {
            .hero-section { padding: 4rem 0 1.5rem; }
            .posts-section { padding: 2rem 0; }
          }
        `}</style>
      </div>
    </>
  );
}

export default Blog;