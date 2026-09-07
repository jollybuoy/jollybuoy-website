import PageHero from '../components/PageHero'
import { company } from '../data/content'

export default function Privacy() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        body="Last updated: September 2026"
      />
      <section>
        <div className="shell prose">
          <h2>1. Information we collect</h2>
          <p>
            We collect information you provide when you contact us, apply for a role, or use our
            products and services. This may include name, email, phone, company, professional
            details, usage data, and communication preferences.
          </p>
          <h2>2. How we use it</h2>
          <p>
            We use this information to provide and improve services, respond to requests, send
            operational notices, and communicate about products, services, and events you asked
            about.
          </p>
          <h2>3. Sharing</h2>
          <p>
            We do not sell personal information. We share it only with your consent, to comply with
            law, to protect our rights, or with service providers who help us operate the business.
          </p>
          <h2>4. Security</h2>
          <p>
            We implement technical and organizational measures to protect information. No internet
            transmission is perfectly secure.
          </p>
          <h2>5. Retention</h2>
          <p>
            We keep information as long as needed to provide services, meet legal duties, resolve
            disputes, and enforce agreements.
          </p>
          <h2>6. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, restrict, or
            port your personal information.
          </p>
          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar technologies to understand how the site is used. You can
            control cookies in your browser.
          </p>
          <h2>8. Children</h2>
          <p>Our services are not intended for children under 13.</p>
          <h2>9. Changes</h2>
          <p>We may update this policy and will post the new version with a revised date.</p>
          <h2>10. Contact</h2>
          <p>
            Email <a href={`mailto:${company.email.privacy}`}>{company.email.privacy}</a>
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
