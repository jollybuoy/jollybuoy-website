import PageHero from '../components/PageHero'
import { company } from '../data/content'

export default function Terms() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms of Service" body="Last updated: September 2026" />
      <section>
        <div className="shell prose">
          <h2>1. Acceptance</h2>
          <p>
            By using {company.legal} (“we,” “our,” or “us”), you agree to these terms. If you do not
            agree, do not use the service.
          </p>
          <h2>2. Description of service</h2>
          <p>
            We provide IT solutions, software products, and related services including cloud
            infrastructure, Microsoft 365, cybersecurity, 24/7 support, custom software, and products
            such as Ticxnova, Aadayam, Cedar Trade, and RAMS Chess.
          </p>
          <h2>3. Accounts</h2>
          <p>
            You must provide accurate information and are responsible for activity under your
            account.
          </p>
          <h2>4. Acceptable use</h2>
          <p>
            You may not use our services for unlawful purposes, to violate rights, to harass others,
            or to submit false information.
          </p>
          <h2>5. Payment</h2>
          <p>
            Fees are due according to your service agreement. We may suspend service for
            non-payment. Fees are non-refundable unless otherwise specified.
          </p>
          <h2>6. Intellectual property</h2>
          <p>
            The site, products, and original content remain the property of {company.legal} and its
            licensors.
          </p>
          <h2>7. Privacy</h2>
          <p>Use of the service is also governed by our Privacy Policy.</p>
          <h2>8. Availability</h2>
          <p>
            We strive for high availability but cannot guarantee 100% uptime. We may modify or
            discontinue parts of the service with or without notice.
          </p>
          <h2>9. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {company.legal} is not liable for indirect,
            incidental, or consequential damages, including lost profits or data.
          </p>
          <h2>10. Termination</h2>
          <p>
            We may suspend or terminate access for any reason, including a breach of these terms.
          </p>
          <h2>11. Governing law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction in which {company.legal}{' '}
            operates, without regard to conflict-of-law rules.
          </p>
          <h2>12. Changes</h2>
          <p>Material changes will be posted at least 30 days before they take effect.</p>
          <h2>13. Contact</h2>
          <p>
            Legal: <a href={`mailto:${company.email.legal}`}>{company.email.legal}</a>
            <br />
            General: <a href={`mailto:${company.email.info}`}>{company.email.info}</a>
            <br />
            {company.legal}
            <br />
            {company.address.line1}, {company.address.line2}, {company.address.country}
          </p>
        </div>
      </section>
    </>
  )
}
