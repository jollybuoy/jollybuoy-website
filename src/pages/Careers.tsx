import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import { careerPerks, company, positions } from '../data/content'
import { submitNetlifyForm } from '../lib/forms'

export default function Careers() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')
    try {
      await submitNetlifyForm('careers', new FormData(event.currentTarget), { files: true })
      setStatus('ok')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <>
      <PageHero
        kicker="Careers"
        title="Build with a team that ships."
        body="Join a startup of operators and builders. Flexible work, live products, and work that reaches production."
      />
      <section>
        <div className="shell grid-3">
          {careerPerks.map((perk) => (
            <article className="card" key={perk.name} style={{ padding: 24 }}>
              <h3>{perk.name}</h3>
              <p className="muted">{perk.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="shell split">
          <div>
            <p className="kicker">Apply</p>
            <h2>We’re always looking for people who care about the craft.</h2>
            <p className="muted">
              Remote, hybrid, or in Toronto. We review every application within 48 hours.
              Email {company.email.careers} if you prefer to send materials directly.
            </p>
            <ul className="list">
              <li>Flexible work environment</li>
              <li>Cutting-edge product work</li>
              <li>Fast response on applications</li>
            </ul>
          </div>
          <div className="card" style={{ padding: 28 }}>
            {status === 'ok' ? (
              <div className="success">
                Application submitted. We’ll review it and get back to you within 48 hours.
              </div>
            ) : (
              <form className="form" name="careers" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
                <input type="hidden" name="form-name" value="careers" />
                <input type="hidden" name="subject" value="Career application — careers@jollybuoy.com" />
                <input type="hidden" name="recipient" value={company.email.careers} />
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
                  Position of interest
                  <select name="position" defaultValue="">
                    <option value="">Select a position (optional)</option>
                    {positions.map((position) => (
                      <option key={position}>{position}</option>
                    ))}
                  </select>
                </label>
                <label>
                  LinkedIn
                  <input type="url" name="linkedin" placeholder="https://" />
                </label>
                <label>
                  Portfolio / website
                  <input type="url" name="portfolio" placeholder="https://" />
                </label>
                <label>
                  Resume / CV *
                  <input type="file" name="resume" required />
                </label>
                <label>
                  Cover letter / message
                  <textarea name="coverLetter" />
                </label>
                {error ? <p className="error">{error}</p> : null}
                <p className="muted">Applications email {company.email.careers}.</p>
                <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
