import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import { work } from '../data/content'

export default function Work() {
  return (
    <>
      <PageHero
        kicker="Work"
        title="What we actually ship."
        body="These are products we own and operate. We do not publish invented ROI or borrowed case studies. Live links, real software, our name on the door."
      />
      <section>
        <div className="shell">
          <div className="grid-3">
            {work.map((item) => (
              <article className="card" key={item.slug}>
                <span className="status">{item.kind}</span>
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p className="muted">{item.story}</p>
                  <div className="hero-actions" style={{ marginTop: 16 }}>
                    <Link className="btn btn-ghost" to={item.href}>
                      Product page
                    </Link>
                    {item.live ? (
                      <a className="btn btn-primary" href={item.live} target="_blank" rel="noreferrer">
                        Open live <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="shell">
          <div className="cta-band">
            <p className="kicker">Next</p>
            <h2>Need proof on a campaign or a stack?</h2>
            <p className="muted" style={{ maxWidth: 520 }}>
              We will walk the live products, then map the same standard to your brief.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact?subject=Campaign%20review">
                Request a campaign review
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Talk about a build
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
