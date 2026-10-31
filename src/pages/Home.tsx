import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Cpu, Megaphone, Shield } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, services, company, marqueeItems } from '../data/content'

const HeroCanvas = lazy(() => import('../components/HeroCanvas'))

export default function Home() {
  const featured = products.filter((p) => p.featured)
  const highlight = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)
  const [webgl, setWebgl] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 981px)').matches
    setWebgl(!prefersReduced && desktop)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="kicker">JollyBuoy Technology Services</p>
            <h1>Technology that ships. Marketing that grows.</h1>
            <p className="lead">
              IT infrastructure, software, AI, and digital marketing — built as one practice. We
              engineer the stack and we put it in front of the market. {company.tagline}.
            </p>
            <p className="muted">{company.line}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/services">
                Explore services
              </Link>
              <Link className="btn btn-ghost" to="/products">
                See the products
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <strong>5</strong>
                Service lines
              </div>
              <div>
                <strong>24/7</strong>
                Expert support
              </div>
              <div>
                <strong>Canada</strong>
                Built in Toronto
              </div>
            </div>
          </div>
          <div className={webgl ? 'hero-visual live-3d' : 'hero-visual'} role="img" aria-label="JollyBuoy 3D coiled torus">
            <div className="hero-orbit">
              <img className="hero-still" src="/images/hero-torus.png" alt="" />
            </div>
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
            marqueeItems.map((item) => (
              <span key={`${i}-${item}`}>{item}</span>
            )),
          )}
        </div>
      </div>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Services</p>
            <h2>Five lines. One standard.</h2>
            <p className="muted">
              Infrastructure, apps, AI, custom software, and digital marketing — all of them on the
              table. Growth is highlighted because demand is there. The rest of the practice is not
              smaller for it.
            </p>
          </div>

          {highlight ? (
            <article className="card feature-service">
              <img src={highlight.image} alt="" />
              <div className="card-body">
                <span className="chip">{highlight.kicker}</span>
                <h3>{highlight.name}</h3>
                <p className="muted">{highlight.description}</p>
                <ul className="list">
                  {highlight.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to="/services#digital-marketing">
                  Digital marketing details <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ) : null}

          <div className="grid-2" style={{ marginTop: 18 }}>
            {rest.map((service) => (
              <article className="card service-card" key={service.slug}>
                <img src={service.image} alt="" />
                <h3>{service.name}</h3>
                <p className="muted">{service.summary}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-ghost" to="/services">
              Full service list
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Products</p>
            <h2>Software we own, ship, and stand behind.</h2>
            <p className="muted">
              Ticxnova is the flagship. Cedar Trade and RAMS Chess are live. BizSuite is the
              operations layer we shape next.
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
          <div className="hero-actions">
            <Link className="btn btn-ghost" to="/products">
              All products <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="shell split">
          <div>
            <p className="kicker">Company</p>
            <h2>Build it. Grow it. Keep it running.</h2>
            <p className="muted">
              JollyBuoy Tech is a Toronto company for product, infrastructure, and demand. AI and
              automation sit in the middle. Digital marketing sits beside them — not as a side
              hustle, as a service line.
            </p>
            <div className="grid-3" style={{ marginTop: 28 }}>
              <div>
                <div className="icon-row">
                  <Megaphone size={18} />
                </div>
                <h3>Growth on purpose</h3>
                <p className="muted">Ads, SEO, and campaigns with the same rigor as code.</p>
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
                <h3>Always on</h3>
                <p className="muted">Cloud, security, and 24/7 support.</p>
              </div>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-ghost" to="/about">
                Our story
              </Link>
            </div>
          </div>
          <img src="/images/about-studio.png" alt="JollyBuoy workspace" />
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="cta-band">
            <p className="kicker">Ready</p>
            <h2>Need a stack, a campaign, or both?</h2>
            <p className="muted" style={{ maxWidth: 540 }}>
              Demos, architecture, custom software, or a growth plan — same team, same contacts.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Get started
              </Link>
              <a className="btn btn-ghost" href={`mailto:${company.email.sales}`}>
                {company.email.sales}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
