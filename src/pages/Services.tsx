import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="IT, cloud, and AI — engineered as one system."
        body="The same team that ships Ticxnova also designs infrastructure, Microsoft 365, security, and 24/7 support. Affordable, client-focused, and built to last."
      />
      <section>
        <div className="shell grid-2">
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <img src={service.image} alt="" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body">
                <h3>{service.name}</h3>
                <p className="muted">{service.summary}</p>
                <ul className="list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="shell">
          <div className="cta-band">
            <h2>Need a stack, not a slide?</h2>
            <p className="muted">Tell us what is in production. We will map the next move.</p>
            <Link className="btn btn-primary" to="/contact">
              Talk to engineering
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
