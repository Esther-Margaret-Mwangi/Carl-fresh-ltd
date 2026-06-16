import { Link } from 'react-router-dom';
import '../styles/home.css';

const stats = [
  { number: '500+', label: 'Tonnes Exported Annually' },
  { number: '15+', label: 'Countries Served' },
  { number: '8+', label: 'Premium Products' },
  { number: '100%', label: 'Sustainably Grown' },
];

const whyChoose = [
  { icon: '🛡️', title: 'Safe', desc: 'Rigorous food safety protocols from farm to export ensuring zero compromise.' },
  { icon: '🏆', title: 'Quality', desc: 'HACCP-certified processes with consistent quality across every batch.' },
  { icon: '🌿', title: 'Sustainable', desc: 'Responsible farming practices protecting Kenya\'s land and water resources.' },
  { icon: '🔍', title: 'Traceable', desc: 'Full farm-to-export traceability systems for complete supply chain visibility.' },
  { icon: '🤝', title: 'Reliable', desc: 'Dependable supply schedules and logistics backed by cold chain expertise.' },
];

const products = [
  { emoji: '🥑', name: 'Avocados', tag: 'Fruits', desc: 'Hass & Fuerte varieties, export grade', img: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&q=80' },
  { emoji: '🥭', name: 'Mangoes', tag: 'Fruits', desc: 'Tommy Atkins, Kent & Apple mangoes', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80' },
  { emoji: '🍍', name: 'Pineapples', tag: 'Fruits', desc: 'Sweet Kenyan pineapples, year-round', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80' },
  { emoji: '🌿', name: 'Passion Fruits', tag: 'Fruits', desc: 'Purple passion fruits, vibrant flavour', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80' },
  { emoji: '🫘', name: 'Fine Beans', tag: 'Vegetables', desc: 'Tender fine beans, premium quality', img: 'https://images.unsplash.com/photo-1506389225426-7b19e8060b35?w=400&q=80' },
  { emoji: '🌶️', name: 'Chilies', tag: 'Herbs & Spices', desc: 'Long Cayenne, Bullet & Thin varieties', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { emoji: '🫛', name: 'Snap Peas', tag: 'Vegetables', desc: 'Crisp snap peas, air-freight ready', img: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=400&q=80' },
  { emoji: '❄️', name: 'Snow Peas', tag: 'Vegetables', desc: 'Tender snow peas, European market', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80' },
];

const certifications = [
  { icon: '🏅', title: 'HACCP Certified', desc: 'Hazard Analysis Critical Control Points compliance for food safety.' },
  { icon: '🌱', title: 'Good Agricultural Practices', desc: 'GAP-certified farms following international best practices.' },
  { icon: '🔗', title: 'Full Traceability', desc: 'End-to-end product traceability from seed to shipment.' },
  { icon: '❄️', title: 'Cold Chain Management', desc: 'Maintained cold chain from harvest to delivery point.' },
];

const exportRegions = [
  { flag: '🇪🇺', region: 'Europe', markets: 'UK, Netherlands, Germany, France', desc: 'Premium supermarket chains and food processors.' },
  { flag: '🌍', region: 'Middle East', markets: 'UAE, Saudi Arabia, Qatar', desc: 'Major importers and hospitality groups.' },
  { flag: '🌏', region: 'Asia', markets: 'Singapore, Malaysia, Hong Kong', desc: 'Specialty food retailers and distributors.' },
  { flag: '🌍', region: 'Africa', markets: 'Rwanda, Uganda, Tanzania', desc: 'Regional wholesale and retail markets.' },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-bg-image loaded" role="img" aria-label="Fresh produce farm in Kenya" />
        <div className="hero-bg" />
        <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-content">
            <div className="hero-badge">
              <span />
              Premium Fresh Produce Exporter • Nairobi, Kenya
            </div>

            <h1 className="hero-title">
              Premium Fresh<br />
              Produce from<br />
              <span className="accent">Kenya</span>
            </h1>

            <p className="hero-subtitle">
              Sustainably Grown in Kenya — connecting global buyers with the finest
              fresh fruits, vegetables, herbs and spices Kenya has to offer.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                🌿 Explore Products
              </Link>
              <Link to="/contact#quote" className="btn-gold">
                📋 Request a Quote
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>

            <div className="hero-tagline">
              <div className="hero-tagline-item">
                <span className="hero-tagline-dot" />
                Safe
              </div>
              <div className="hero-tagline-item">
                <span className="hero-tagline-dot" />
                Quality
              </div>
              <div className="hero-tagline-item">
                <span className="hero-tagline-dot" />
                Sustainable
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats-bar" aria-label="Key statistics">
        <div className="container-xl">
          <div className="stats-bar-inner">
            {stats.map((s) => (
              <div key={s.label} className="stats-bar-item">
                <div className="stats-bar-number">{s.number}</div>
                <div className="stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className="about-strip page-section" aria-label="About Carl Fresh Produce">
        <div className="container-xl">
          <div className="about-strip-grid">
            <div className="about-strip-image">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80"
                alt="Farm workers harvesting fresh produce in Kenya"
                loading="lazy"
              />
              <div className="about-strip-image-badge">
                <div className="icon">🌱</div>
                <div className="text">
                  <strong>15+ Years</strong>
                  <span>of Farming Excellence</span>
                </div>
              </div>
            </div>

            <div className="about-strip-text">
              <div className="section-label">About Carl Fresh</div>
              <h2 className="section-title">
                From Kenya's Fertile Lands to Global Tables
              </h2>
              <div className="divider-gold-left" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem 0' }} />
              <p>
                Carl Fresh Produce Limited is a premier Kenyan exporter dedicated to
                delivering the finest fresh produce to international markets. Rooted in
                Kenya's rich agricultural heritage, we combine traditional farming wisdom
                with modern quality systems to consistently meet and exceed global standards.
              </p>
              <p>
                Our team of experienced agronomists, quality controllers, and logistics
                specialists ensures every product that leaves our facility meets the
                exacting requirements of European, Middle Eastern, and Asian buyers.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary">
                  Our Story →
                </Link>
                <Link to="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="why-choose page-section" aria-label="Why choose Carl Fresh">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-label">Our Advantage</div>
            <h2 className="section-title">Why Choose Carl Fresh?</h2>
            <div className="divider-gold" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem auto' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We stand out through our unwavering commitment to quality, safety,
              sustainability and reliable supply across global markets.
            </p>
          </div>

          <div className="why-grid">
            {whyChoose.map((item) => (
              <div key={item.title} className="why-card">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="products-showcase page-section" aria-label="Featured products">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Premium Export Produce</h2>
            <div className="divider-gold" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem auto' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From the fertile highlands of Kenya, we export a diverse range of
              fresh produce that meets the highest international quality standards.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <div className="products-grid">
              {products.map((p) => (
                <Link to="/products" key={p.name} className="product-card" style={{ textDecoration: 'none' }}>
                  <div className="product-card-image">
                    <img src={p.img} alt={p.name} loading="lazy" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.textContent = p.emoji;
                    }} />
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-tag">{p.tag}</div>
                    <div className="product-card-name">{p.name}</div>
                    <div className="product-card-desc">{p.desc}</div>
                    <div className="product-card-arrow">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn-primary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="certifications page-section" aria-label="Certifications and compliance">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
              Compliance
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Certifications & Quality Standards
            </h2>
            <div className="divider-gold" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem auto' }} />
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
              Our quality management system is built on internationally recognised
              standards, giving our buyers confidence in every shipment.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((c) => (
              <div key={c.title} className="cert-card">
                <div className="icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/quality" className="btn-outline-white">
              Learn About Our Standards
            </Link>
          </div>
        </div>
      </section>

      {/* ── Export Markets ── */}
      <section className="export-teaser page-section" aria-label="Export markets">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-label">Global Reach</div>
            <h2 className="section-title">Our Export Markets</h2>
            <div className="divider-gold" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem auto' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Serving premium buyers across four continents with consistent quality,
              reliable logistics and competitive pricing.
            </p>
          </div>

          <div className="export-regions">
            {exportRegions.map((r) => (
              <div key={r.region} className="export-region-card">
                <div className="flag">{r.flag}</div>
                <h3>{r.region}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.35rem' }}>{r.markets}</p>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/export-markets" className="btn-primary">
              Explore Our Markets →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container-xl">
          <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
            Get In Touch
          </div>
          <h2>Let's Grow Together</h2>
          <p>
            Connect with our export team to discuss bulk sourcing, supply chain
            partnerships and customised packaging solutions.
          </p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">
              📧 Send an Inquiry
            </Link>
            <Link to="/contact#quote" className="btn-outline-white">
              📋 Request a Quote
            </Link>
            <a
              href="https://wa.me/254712365084"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
