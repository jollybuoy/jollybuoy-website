import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company, navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'nav scrolled' : 'nav'}>
      <div className="shell nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="JollyBuoy Tech" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost" href={`mailto:${company.email.sales}`}>
            {company.email.sales}
          </a>
          <Link className="btn btn-primary" to="/contact">
            Start a project
          </Link>
          <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className={open ? 'shell mobile-panel open' : 'shell mobile-panel'}>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
