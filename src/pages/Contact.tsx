import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Globe } from 'lucide-react'
import PageHero from '../components/PageHero'
import { company, contactSubjects, faqs } from '../data/content'
import { submitNetlifyForm } from '../lib/forms'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')
    try {
      await submitNetlifyForm('contact', new FormData(event.currentTarget))
      setStatus('ok')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let’s start a conversation."
        body="Ready to transform your stack with products and infrastructure that actually ship? We reply within 24 hours."
      />
      <section>
        <div className="shell split">
          <div className="card" style={{ padding: 28 }}>
            {status === 'ok' ? (
              <div className="success">
                Message sent. We’ll get back to you within 24 hours.
              </div>
            ) : (
              <form className="form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="recipient" value={company.email.sales} />
                <p className="skip">
                  <label>
                    Don’t fill this out <input name="bot-field" />
                  </label>
                </p>
                <div className="form-row">
                  <label>
                    First name *
                    <input name="firstName" required />
                  </label>
                  <label>
                    Last name *
                    <input name="lastName" required />
                  </label>
                </div>
                <label>
                  Email *
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" />
                </label>
                <label>
                  Company
                  <input name="company" />
                </label>
                <label>
                  Subject *
                  <select name="subject" required defaultValue="">
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {contactSubjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Message *
                  <textarea name="message" required />
                </label>
                <label className="check">
                  <input type="checkbox" name="updates" value="yes" />
                  I’d like to receive updates about new products and services
                </label>
                {error ? <p className="error">{error}</p> : null}
                <p className="muted">This form emails {company.email.sales}.</p>
                <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
          <div>
            <article className="card" style={{ padding: 24, marginBottom: 16 }}>
              <div className="icon-row">
                <Mail size={18} />
              </div>
              <h3>Email us</h3>
              <p>
                <a href={`mailto:${company.email.info}`}>{company.email.info}</a>
              </p>
              <p>
                <a href={`mailto:${company.email.sales}`}>{company.email.sales}</a>
              </p>
              <p>
                <a href={`mailto:${company.email.careers}`}>{company.email.careers}</a>
              </p>
            </article>
            <article className="card" style={{ padding: 24, marginBottom: 16 }}>
              <div className="icon-row">
                <Globe size={18} />
              </div>
              <h3>LinkedIn</h3>
              <p>
                <a href={company.linkedin} target="_blank" rel="noreferrer">
                  {company.linkedinHandle}
                </a>
              </p>
            </article>
            <article className="card" style={{ padding: 24 }}>
              <div className="icon-row">
                <MapPin size={18} />
              </div>
              <h3>Address</h3>
              <p className="muted">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.country}
              </p>
              <p className="muted">24/7 remote support. Emergency response under 1 hour for enterprise.</p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="shell">
          <h2>Frequently asked</h2>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p className="muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
