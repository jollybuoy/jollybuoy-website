import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { values, company, work } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A technology company that also grows the work."
        body="JollyBuoy Tech builds products and infrastructure with current AI — and runs digital marketing so those systems actually reach the market."
      />
      <section>
        <div className="shell split">
          <img src="/images/about-studio.png" alt="JollyBuoy workspace" />
          <div>
            <h2>Mission</h2>
            <p className="muted">
              To give businesses technology that is intelligent, affordable, and usable — then help
              them find customers for it. Software without demand is a demo. Demand without a stack
              is noise. We do both.
            </p>
            <h2>Vision</h2>
            <p className="muted">
              To be the partner growing teams trust for product, infrastructure, and growth.
              {` ${company.legal} `}
              is based in Toronto, with 24/7 remote support for clients everywhere we operate.
            </p>
            <p className="muted">{company.line}</p>
            <p className="location-line">{company.location}</p>
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
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Work</p>
            <h2>Proof lives in the products we run.</h2>
            <p className="muted">
              We do not invent case-study metrics. Open Ticxnova, Cedar Trade, or RAMS Chess.
            </p>
          </div>
          <div className="grid-3">
            {work.map((item) => (
              <article className="card" key={item.slug} style={{ padding: 24 }}>
                <p className="kicker">{item.kind}</p>
                <h3>{item.name}</h3>
                <p className="muted">{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-ghost" to="/work">
              All work
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="shell grid-4">
          {[
            ['Startup agility', 'Fast, focused, and built around what you actually need.'],
            ['Current AI', 'Models, agents, and automation in production — not in a pitch.'],
            ['Growth practice', 'Ads, SEO, and campaigns measured like software.'],
            ['24/7 support', 'Your systems do not keep office hours. Neither do we.'],
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
            <h2>Ready to build and grow with us?</h2>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Get started
              </Link>
              <Link className="btn btn-ghost" to="/services">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
