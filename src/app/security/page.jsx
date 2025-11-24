import { useState, useEffect } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialSlides = [
    {
      quote:
        "Sentinel Security transformed our approach to facility protection. Their team's professionalism and attention to detail are unmatched in the industry.",
      author: "Sarah Johnson",
      role: "Facility Manager, TechCorp Inc.",
    },
    {
      quote:
        "We've worked with Sentinel for three major corporate events now, and each time they've delivered flawless security operations that allowed us to focus on our attendees.",
      author: "Michael Torres",
      role: "Event Director, Summit Events",
    },
    {
      quote:
        "After implementing Sentinel's retail security program, our losses dropped dramatically. Their team understands the unique challenges of the retail environment.",
      author: "Jennifer Lee",
      role: "Operations Manager, Urban Retail Group",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const successStories = [
    {
      title: "Corporate Headquarters Protection",
      desc: "Reduced unauthorized access incidents by 92% for a Fortune 500 company's main campus.",
      category: "Corporate Security",
      duration: "6 months",
      image:
        "https://images.unsplash.com/photo-1551135042-36ab0dc5d6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "High-Profile Event Security",
      desc: "Managed security for 15,000+ attendees at the annual Tech Innovation Summit with zero incidents.",
      category: "Event Security",
      duration: "3 days",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Retail Loss Prevention",
      desc: "Decreased shrinkage by 78% for a regional retail chain through strategic security implementation.",
      category: "Retail Security",
      duration: "12 months",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const services = [
    { icon: "🏢", title: "Corporate Security", desc: "Complete protection for office buildings, campuses, and corporate facilities." },
    { icon: "🎪", title: "Event Security", desc: "Professional security for conferences, concerts, and special events of all sizes." },
    { icon: "🏪", title: "Retail Security", desc: "Loss prevention and customer safety solutions for retail environments." },
    { icon: "🏘️", title: "Residential Security", desc: "24/7 protection for residential communities and private estates." },
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-icon">🛡️</span> Sentinel Security
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <nav>
            <ul className={menuOpen ? "show" : ""}>
              {["Home", "About", "Services", "Case Studies", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Professional Security Solutions You Can Trust</h1>
          <p>
            With over 15 years of experience, Sentinel Security provides elite protection services for businesses, events, and residential properties across the region.
          </p>
          <a href="#" className="btn">Our Services</a>
          <a href="#" className="btn btn-outline">View Case Studies</a>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Real results from our security operations</p>
          </div>
          <div className="stories-grid">
            {successStories.map((story, idx) => (
              <div className="story-card" key={idx}>
                <div
                  className="story-img"
                  style={{ backgroundImage: `url(${story.image})` }}
                ></div>
                <div className="story-content">
                  <h3>{story.title}</h3>
                  <p>{story.desc}</p>
                  <div className="story-meta">
                    <span>{story.category}</span>
                    <span>{story.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our clients say about our services</p>
          </div>
          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonialSlides.map((slide, idx) => (
                <div className="testimonial-slide" key={idx}>
                  <p className="testimonial-quote">{slide.quote}</p>
                  <p className="testimonial-author">{slide.author}</p>
                  <p className="testimonial-role">{slide.role}</p>
                </div>
              ))}
            </div>
            <div className="slider-nav">
              {testimonialSlides.map((_, idx) => (
                <span
                  key={idx}
                  className={`slider-dot ${currentSlide === idx ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive security solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Enhance Your Security?</h2>
          <p>Contact us today for a complimentary security assessment and customized protection plan.</p>
          <a href="#" className="btn">Get Your Assessment</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Sentinel Security</h3>
              <p>Providing professional security solutions since 2008. Trusted by businesses and organizations across the region.</p>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                {["Home", "About Us", "Services", "Case Studies", "Testimonials"].map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                {["Corporate Security","Event Security","Retail Security","Residential Security","Executive Protection"].map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li>📍 123 Security Plaza, Suite 500</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@sentinelsecurity.com</li>
                <li>🕒 24/7 Emergency Response</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Sentinel Security. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS */}
      <style jsx>{`
        :root {
          --primary: #1a365d;
          --secondary: #2d3748;
          --accent: #e53e3e;
          --light: #f7fafc;
          --gray: #718096;
          --dark: #2d3748;
          --transition: all 0.3s ease;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          --radius: 4px;
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Inter', sans-serif; line-height:1.6; color:var(--dark); background:var(--light); }
        .container { width:90%; max-width:1200px; margin:0 auto; padding:0 15px; }
        header { background:var(--primary); color:white; padding:1rem 0; position:sticky; top:0; z-index:1000; box-shadow:var(--shadow); }
        .header-content { display:flex; justify-content:space-between; align-items:center; }
        .logo { font-size:1.5rem; font-weight:700; display:flex; align-items:center; }
        .logo-icon { margin-right:10px; font-size:1.8rem; }
        nav ul { display:flex; list-style:none; }
        nav li { margin-left:2rem; }
        nav a { color:white; text-decoration:none; font-weight:500; position:relative; transition:var(--transition); }
        nav a:hover { color:var(--accent); }
        nav a::after { content:''; position:absolute; bottom:-5px; left:0; width:0; height:2px; background-color:var(--accent); transition:var(--transition); }
        nav a:hover::after { width:100%; }
        .mobile-menu-btn { display:none; background:none; border:none; color:white; font-size:1.5rem; cursor:pointer; }
        .hero { background:linear-gradient(rgba(26,54,93,0.8), rgba(26,54,93,0.8)), url('https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'); background-size:cover; background-position:center; color:white; padding:6rem 0; text-align:center; }
        .hero h1 { font-size:3rem; margin-bottom:1.5rem; max-width:800px; margin-left:auto; margin-right:auto; }
        .hero p { font-size:1.2rem; max-width:700px; margin:0 auto 2rem; }
        .btn { display:inline-block; background-color:var(--accent); color:white; padding:0.75rem 1.5rem; border-radius:var(--radius); text-decoration:none; font-weight:600; transition:var(--transition); border:none; cursor:pointer; }
        .btn:hover { background-color:#c53030; transform:translateY(-2px); }
        .btn.btn-outline { background-color:transparent; border:2px solid white; margin-left:1rem; }
        .btn.btn-outline:hover { background-color:white; color:var(--primary); }
        .success-stories, .services, .testimonials { padding:5rem 0; }
        .section-header { text-align:center; margin-bottom:3rem; }
        .section-header h2::after { content:''; position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:60px; height:3px; background-color:var(--accent); }
        .stories-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:2rem; }
        .story-card { background:var(--light); border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); transition:var(--transition); }
        .story-card:hover { transform:translateY(-5px); box-shadow:0 10px 20px rgba(0,0,0,0.1); }
        .story-img { height:200px; background-size:cover; background-position:center; }
        .story-content { padding:1.5rem; }
        .story-content h3 { color:var(--primary); }
        .story-meta { display:flex; justify-content:space-between; margin-top:1rem; font-size:0.9rem; color:var(--gray); }
        .testimonial-slider { position:relative; max-width:800px; margin:0 auto; overflow:hidden; }
        .testimonial-track { display:flex; transition:transform 0.5s ease; }
        .testimonial-slide { min-width:100%; padding:2rem; background:white; border-radius:var(--radius); box-shadow:var(--shadow); text-align:center; }
        .testimonial-quote { font-size:1.1rem; font-style:italic; margin-bottom:1.5rem; position:relative; }
        .testimonial-author { font-weight:600; color:var(--primary); }
        .testimonial-role { color:var(--gray); font-size:0.9rem; }
        .slider-nav { display:flex; justify-content:center; margin-top:2rem; }
        .slider-dot { width:12px; height:12px; border-radius:50%; background-color:var(--gray); margin:0 5px; cursor:pointer; transition:var(--transition); }
        .slider-dot.active { background-color:var(--accent); }
        .services-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:2rem; }
        .service-card { text-align:center; padding:2rem 1rem; border-radius:var(--radius); transition:var(--transition); }
        .service-card:hover { background-color:var(--light); transform:translateY(-5px); }
        .service-icon { font-size:2.5rem; color:var(--primary); margin-bottom:1rem; }
        .cta { padding:5rem 0; background:linear-gradient(rgba(26,54,93,0.9), rgba(26,54,93,0.9)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'); background-size:cover; background-position:center; color:white; text-align:center; }
        footer { background-color:var(--secondary); color:white; padding:3rem 0 1.5rem; }
        .footer-content { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:2rem; margin-bottom:2rem; }
        .footer-column h3 { font-size:1.2rem; margin-bottom:1.5rem; position:relative; padding-bottom:0.5rem; }
        .footer-column h3::after { content:''; position:absolute; bottom:0; left:0; width:40px; height:2px; background-color:var(--accent); }
        .footer-column ul { list-style:none; }
        .footer-column li { margin-bottom:0.75rem; }
        .footer-column a { color:#cbd5e0; text-decoration:none; transition:var(--transition); }
        .footer-column a:hover { color:white; padding-left:5px; }
        .footer-bottom { text-align:center; padding-top:1.5rem; border-top:1px solid #4a5568; font-size:0.9rem; color:#a0aec0; }
        @media(max-width:768px){
          h1{font-size:2rem;}
          h2{font-size:1.75rem;}
          .hero h1{font-size:2.25rem;}
          nav ul{display:none; position:absolute; top:100%; left:0; width:100%; background-color:var(--primary); flex-direction:column; padding:1rem 0; box-shadow:var(--shadow);}
          nav ul.show{display:flex;}
          nav li{margin:0; text-align:center;}
          nav a{display:block; padding:0.75rem 1rem;}
          .mobile-menu-btn{display:block;}
          .btn.btn-outline{margin-left:0;margin-top:1rem;display:block;}
        }
      `}</style>
    </div>
  );
}
