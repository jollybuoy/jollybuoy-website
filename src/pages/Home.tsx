import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Cpu, Shield, Sparkles } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, services, company } from '../data/content'

const HeroCanvas = lazy(() => import('../components/HeroCanvas'))

export default function Home() {
  const featured = products.filter((p) => p.featured)
  const [webgl, setWebgl] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 980px)').matches
    setWebgl(!prefersReduced && !small)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="kicker">JollyBuoy Technology Services</p>
            <h1>Build what the next decade will run on.</h1>
            <p className="lead">
              We design AI products and future-ready infrastructure — from Ticxnova to markets,
              wealth, and custom systems. {company.tagline}.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/products">
                See the products
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Talk with us
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <strong>24/7</strong>
                Expert support
              </div>
              <div>
                <strong>AI-native</strong>
                Product studio
              </div>
              <div>
                <strong>Canada</strong>
                Built in Toronto
              </div>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="JollyBuoy 3D coiled torus">
            {webgl ? (
              <div className="hero-canvas">
                <Suspense fallback={null}>
                  <HeroCanvas />
                </Suspense>
              </div>
            ) : null}
            <div className="glow" />
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ['AI products', 'Cloud architecture', 'Support OS', 'Markets', 'Wealth tech', 'Custom software', 'Cybersecurity', 'Microsoft 365'].map(
              (item) => (
                <span key={`${i}-${item}`}>{item}</span>
              ),
            ),
          )}
        </div>
      </div>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Products</p>
            <h2>Software we own, ship, and stand behind.</h2>
            <p className="muted">
              Ticxnova is the flagship. Around it is a studio of live products — finance, markets,
              and mastery — plus systems we build for clients.
            </p>
          </div>
          {featured[0] ? (
            <div className="bento">
              <ProductCard product={featured[0]} featured />
              <div className="bento-side">
                {featured.slice(1, 3).map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          ) : null}
          {featured[3] ? (
            <div style={{ marginTop: 18 }}>
              <ProductCard product={featured[3]} />
            </div>
          ) : null}
          <div className="hero-actions">
            <Link className="btn btn-ghost" to="/products">
              Full product house <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Services</p>
            <h2>Infrastructure that feels like product.</h2>
            <p className="muted">
              Cloud, security, Microsoft 365, and 24/7 support — engineered with the same standard as
              our own platforms.
            </p>
          </div>
          <div className="grid-3">
            {services.slice(0, 3).map((service) => (
              <article className="card service-card" key={service.slug}>
                <img src={service.image} alt="" />
                <h3>{service.name}</h3>
                <p className="muted">{service.summary}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="shell split">
          <div>
            <p className="kicker">Studio</p>
            <h2>A technology company, not a template shop.</h2>
            <p className="muted">
              JollyBuoy Tech is a Toronto-based product and infrastructure studio. We combine AI,
              cloud, and custom software so businesses can move with the current generation of
              tools — and be ready for the next.
            </p>
            <div className="grid-3" style={{ marginTop: 28 }}>
              <div>
                <div className="icon-row">
                  <Sparkles size={18} />
                </div>
                <h3>Innovation first</h3>
                <p className="muted">Breakthrough systems, not recycled decks.</p>
              </div>
              <div>
                <div className="icon-row">
                  <Cpu size={18} />
                </div>
                <h3>AI in production</h3>
                <p className="muted">Models where they earn their keep.</p>
              </div>
              <div>
                <div className="icon-row">
                  <Shield size={18} />
                </div>
                <h3>Client-focused</h3>
                <p className="muted">Affordable excellence. Real support.</p>
              </div>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-ghost" to="/about">
                Our story
              </Link>
            </div>
          </div>
          <img src="/images/about-studio.png" alt="JollyBuoy future studio" />
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="cta-band">
            <p className="kicker">Ready</p>
            <h2>Start a conversation. We’ll build from there.</h2>
            <p className="muted" style={{ maxWidth: 520 }}>
              Demos, architecture reviews, or a custom build — same team, same contacts, faster
              surface.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Get started
              </Link>
              <a className="btn btn-ghost" href={`mailto:${company.email.info}`}>
                {company.email.info}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
