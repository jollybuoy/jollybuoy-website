import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/content'

export default function Products() {
  const featured = products.filter((p) => p.featured)
  const studio = products.filter((p) => !p.featured)

  return (
    <>
      <PageHero
        kicker="Product house"
        title="Live products. A working studio."
        body="Ticxnova leads. Cedar Trade and RAMS Chess are live. BizSuite is the operations layer we shape next."
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
      {studio.length > 0 ? (
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
          </div>
        </section>
      ) : null}
    </>
  )
}
