import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const titles: Record<string, string> = {
  '/': 'JollyBuoy Tech — Ideas · Code · Impact',
  '/products': 'Products — JollyBuoy Tech',
  '/services': 'Services — JollyBuoy Tech',
  '/about': 'About — JollyBuoy Tech',
  '/careers': 'Careers — JollyBuoy Tech',
  '/contact': 'Contact — JollyBuoy Tech',
  '/privacy': 'Privacy Policy — JollyBuoy Tech',
  '/terms': 'Terms of Service — JollyBuoy Tech',
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    const product = location.pathname.startsWith('/products/') && location.pathname !== '/products'
    document.title = product
      ? 'Product — JollyBuoy Tech'
      : titles[location.pathname] ?? 'JollyBuoy Tech'
  }, [location.pathname])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
