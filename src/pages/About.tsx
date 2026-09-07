import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { values, company } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Pioneering the next surface of technology."
        body="JollyBuoy Tech is a startup studio that builds products and infrastructure with current AI — and designs them to still matter when the next generation arrives."
      />
      <section>
        <div className="shell split">
          <img src="/images/about-studio.png" alt="JollyBuoy studio" />
          <div>
            <h2>Mission</h2>
            <p className="muted">
              To give businesses and people technology that is intelligent, affordable, and actually
              usable. We believe the right system — implemented with care — can change how a company
              works.
            </p>
            <h2>Vision</h2>
            <p className="muted">
              To be the technology partner growing teams trust: product-quality software, honest
              service, and a future-facing stack. {company.legal} is based in Toronto, with 24/7
              remote support for clients everywhere we operate.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Values</p>
            <h2>What we refuse to compromise.</h2>
          </div>
          <div className="grid-2">
            {values.map((value) => (
              <article className="card" key={value.name} style={{ padding: 28 }}>
                <h3>{value.name}</h3>
                <p className="muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="shell grid-4">
          {[
            ['Startup agility', 'Fast, focused, and built around what you actually need.'],
            ['Current AI', 'Models, agents, and automation in production — not in a pitch.'],
            ['24/7 support', 'Your systems do not keep office hours. Neither do we.'],
            ['Affordable excellence', 'Transparent pricing. Maximum value. No theater.'],
          ].map(([title, body]) => (
            <article className="card" key={title} style={{ padding: 24 }}>
              <h3>{title}</h3>
              <p className="muted">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="shell">
          <div className="cta-band">
            <h2>Ready to build with us?</h2>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Get started
              </Link>
              <Link className="btn btn-ghost" to="/products">
                Our products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
