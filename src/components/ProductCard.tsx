import { Link } from 'react-router-dom'
import type { Product } from '../data/content'

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <article className={featured ? 'card feature' : 'card'}>
      <span className="status">{product.status}</span>
      <img src={product.image} alt="" />
      <div className="card-body">
        <p className="kicker" style={{ marginBottom: 8 }}>
          {product.kicker}
        </p>
        <h3>{product.name}</h3>
        <p className="muted">{product.summary}</p>
        <Link className="btn btn-ghost" to={`/products/${product.slug}`}>
          Explore {product.name}
        </Link>
      </div>
    </article>
  )
}
