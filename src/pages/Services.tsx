import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { services } from '../data/content'

export default function Services() {
  const highlight = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <>
      <PageHero
        kicker="Services"
        title="Infrastructure, software, AI — and the marketing that moves them."
        body="Five lines of work. Digital marketing is highlighted because it is a core business, not a footnote. IT, apps, automation, and custom software stay equally on the menu."
      />

      {highlight ? (
        <section>
          <div className="shell">
            <article className="card feature-service" id="digital-marketing">
              <img src={highlight.image} alt="" />
              <div className="card-body">
                <span className="chip">{highlight.kicker}</span>
                <h2>{highlight.name}</h2>
                <p className="muted">{highlight.description}</p>
                <ul className="list">
                  {highlight.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to="/contact">
                  Start a growth conversation
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Also on the floor</p>
            <h2>The rest of the practice.</h2>
          </div>
          <div className="grid-2">
            {rest.map((service) => (
              <article className="card" key={service.slug}>
                <img src={service.image} alt="" style={{ height: 220, objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="kicker" style={{ marginBottom: 8 }}>
                    {service.kicker}
                  </p>
                  <h3>{service.name}</h3>
                  <p className="muted">{service.description}</p>
                  <ul className="list">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="cta-band">
            <h2>Tell us what you need to ship — or grow.</h2>
            <p className="muted">Infrastructure, a product, a campaign. We will map the next move.</p>
            <Link className="btn btn-primary" to="/contact">
              Talk with us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
