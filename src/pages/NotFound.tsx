import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <div className="shell">
        <p className="kicker">404</p>
        <h1>This page drifted off the map.</h1>
        <p className="muted">The route you asked for is not part of JollyBuoy.com.</p>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}
