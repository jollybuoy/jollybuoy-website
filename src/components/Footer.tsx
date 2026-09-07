import { Link } from 'react-router-dom'
import { company, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link to="/" className="brand">
            <img src="/logo.png" alt="JollyBuoy Tech" />
          </Link>
          <p className="muted" style={{ marginTop: 16 }}>
            {company.legal}
            <br />
            {company.tagline}
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {navLinks.map((link) => (
            <p key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <a href={`mailto:${company.email.info}`}>{company.email.info}</a>
          </p>
          <p>
            <a href={`mailto:${company.email.careers}`}>{company.email.careers}</a>
          </p>
          <p>
            <a href={company.linkedin} target="_blank" rel="noreferrer">
              {company.linkedinHandle}
            </a>
          </p>
        </div>
        <div>
          <h3>Address</h3>
          <p>
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.country}
          </p>
          <p>24/7 remote support</p>
        </div>
      </div>
      <div className="shell legal">
        <span>© {new Date().getFullYear()} {company.legal}</span>
        <span>
          <Link to="/privacy">Privacy</Link>
          {' · '}
          <Link to="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  )
}
