import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/content'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  useEffect(() => {
    if (product) document.title = `${product.name} — JollyBuoy Tech`
  }, [product])

  if (!product) {
    return (
      <section>
        <div className="shell">
          <h1>Product not found</h1>
          <Link className="btn btn-primary" to="/products">
            Back to products
          </Link>
        </div>
      </section>
    )
  }

  const external = product.url.startsWith('http')

  return (
    <>
      <div className="page-hero">
        <div className="shell">
          <p className="kicker">{product.kicker}</p>
          <h1>{product.name}</h1>
          <p className="lead">{product.tagline}</p>
        </div>
      </div>
      <section>
        <div className="shell split">
          <img src={product.image} alt="" />
          <div>
            <span className="chip">{product.status}</span>
            <p className="muted" style={{ marginTop: 18 }}>
              {product.description}
            </p>
            <ul className="list">
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              {external ? (
                <a className="btn btn-primary" href={product.url} target="_blank" rel="noreferrer">
                  Launch {product.name}
                </a>
              ) : (
                <Link className="btn btn-primary" to={product.url}>
                  Talk about {product.name}
                </Link>
              )}
              <Link className="btn btn-ghost" to="/contact">
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="shell">
          <h2>Capabilities</h2>
          <div className="grid-2">
            {product.capabilities.map((item) => (
              <article className="card" key={item} style={{ padding: 24 }}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
