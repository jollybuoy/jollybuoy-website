import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { products, studioNotes } from '../data/content'

export default function Products() {
  const featured = products.filter((p) => p.featured)
  const studio = products.filter((p) => !p.featured)

  return (
    <>
      <PageHero
        kicker="Product house"
        title="Live products. A working studio."
        body="Ticxnova leads. Aadayam, Cedar Trade, and RAMS Chess are live. Around them is a studio of systems we ship for ourselves and for clients."
      />
      <section>
        <div className="shell">
          <div className="grid-2">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} featured />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="shell">
          <div className="section-head">
            <p className="kicker">Studio</p>
            <h2>Systems we are shaping next.</h2>
          </div>
          <div className="grid-2">
            {studio.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="studio" style={{ marginTop: 28 }}>
            {studioNotes.map((note) => (
              <article key={note.name}>
                <h3>{note.name}</h3>
                <p className="muted">{note.note}</p>
                {'url' in note && note.url ? (
                  <a className="btn btn-ghost" href={note.url} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                ) : (
                  <Link className="btn btn-ghost" to="/contact">
                    Ask about it
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
