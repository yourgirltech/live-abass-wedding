import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import Monogram from './Monogram';

console.log('ENV CHECK:', import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const COUPLE_EMAIL = 'livemayele87@gmail.com';
const CALENDAR_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Live%20%26%20Abass%20Wedding%20Reception&dates=20261120T073000Z%2F20261120T123000Z&details=Wedding%20Reception%20of%20Live%20Mayele%20%26%20Abass%20Lateef&location=Doltone%20House%20Western%20Sydney`;
const EMAILJS_TEMPLATE_GUEST_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_GUEST_ID;

const INITIAL = {
  first_name: '', last_name: '', email: '', phone: '',
  attending: '',
  has_plus_one: null,
  plus_one_first_name: '', plus_one_last_name: '', plus_one_email: '',
  how_know: '',
  decline_note: '',
};

function Flourish() {
  return (
    <div className="rsvp-flourish" aria-hidden="true">
      <span className="rsvp-flourish-line"></span>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
      </svg>
      <span className="rsvp-flourish-line"></span>
    </div>
  );
}

function StepDot({ num, active, done }) {
  return (
    <div className={`rsvp-dot ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`}>
      {done ? '✓' : num}
    </div>
  );
}

async function notifyLive(form) {
  try {
    // Notify Live
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          guest_name: `${form.first_name} ${form.last_name}`,
          guest_email: form.email,
          guest_phone: form.phone || 'Not provided',
          attending: form.attending === 'yes' ? 'YES — Attending' : 'NO — Cannot attend',
          plus_one: form.has_plus_one
            ? `Yes — ${form.plus_one_first_name} ${form.plus_one_last_name} (${form.plus_one_email})`
            : 'No plus one',
          how_know: form.how_know || 'Not specified',
          note: form.decline_note || 'No note left',
        },
      }),
    });

    // Send confirmation to guest (only if attending)
    if (form.attending === 'yes') {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_GUEST_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            guest_name: `${form.first_name} ${form.last_name}`,
            guest_email: form.email,
          },
        }),
      });
    }
  } catch (err) {
    console.warn('EmailJS notification failed:', err);
  }
}

export default function RSVPForm() {
  const ref = useReveal('is-visible');
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  async function submit() {
    setLoading(true);
    setError('');
    try {
      const payload = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone || null,
        attending: form.attending,
        has_plus_one: form.has_plus_one === true,
        plus_one_first_name: form.has_plus_one ? form.plus_one_first_name : null,
        plus_one_last_name: form.has_plus_one ? form.plus_one_last_name : null,
        plus_one_email: form.has_plus_one ? form.plus_one_email : null,
        how_know: form.how_know || null,
        decline_note: form.attending === 'no' ? (form.decline_note || null) : null,
      };

      const res = await fetch(`${SUPABASE_URL}/rest/v1/rsvps`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 409) {
        setError('An RSVP with this email already exists. Please contact us if you need to make changes.');
        setLoading(false);
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      notifyLive(form);
      setSubmitted(true);
    } catch {
      setError('Unable to connect. Please check your internet and try again.');
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="bg-ink rsvp-section" id="rsvp" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="rsvp-thankyou">
            <Monogram color="var(--champagne)" style={{ marginBottom: 20 }} />
            <div className="rsvp-thankyou-star">✦</div>
            {form.attending === 'yes' ? (
              <>
                <h2>Thank You, {form.first_name}!</h2>
                <p>
                  We are so thrilled that you&rsquo;ll be joining us to celebrate our wedding reception.
                  We look forward to hosting you on <strong>20 November 2026</strong>.
                </p>
                <p className="rsvp-thankyou-note">
                  We look forward to celebrating this special chapter with you.
                </p>
                <div className="rsvp-thankyou-actions">
                  <a href={CALENDAR_URL} target="_blank" rel="noopener" className="btn btn-gold">
                    Add to Calendar
                  </a>
                  <a href="/" className="btn btn-outline">
                    ← Back to Website
                  </a>
                  <a href={`mailto:${COUPLE_EMAIL}`} className="rsvp-contact-link">
                    Have a question? Contact the couple
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2>We&rsquo;ll Miss You, {form.first_name}</h2>
                <p>
                  Thank you for letting us know. You will absolutely be in our hearts
                  on our special day.
                </p>
                <div className="rsvp-thankyou-actions">
                  <a href="/" className="btn btn-gold">
                    ← Back to Website
                  </a>
                  <a href={`mailto:${COUPLE_EMAIL}`} className="rsvp-contact-link">
                    Want to reach out? Contact the couple
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ink rsvp-section" id="rsvp" style={{ minHeight: '100vh' }}>
      <div className="container reveal" ref={ref}>
        <Monogram color="var(--champagne)" style={{ marginBottom: 20 }} />
        <Flourish />
        <span className="eyebrow">RSVP</span>
        <h2 className="display-2">Join Us In Celebration</h2>
        <p className="lede">
          Your presence would mean the world to us. Please RSVP by <strong>20 October 2026</strong>.
        </p>

        <div className="rsvp-stepper">
          <StepDot num={1} active={step === 1} done={step > 1} />
          <div className="rsvp-stepper-line" />
          <StepDot num={2} active={step === 2} done={step > 2} />
          <div className="rsvp-stepper-line" />
          <StepDot num={3} active={step === 3} done={step > 3} />
        </div>

        {step === 1 && (
          <div className="rsvp-card">
            <p className="rsvp-card-title">Your Details</p>
            <div className="rsvp-row">
              <div className="rsvp-field">
                <label>First Name <span>*</span></label>
                <input type="text" placeholder="First name" value={form.first_name}
                  onChange={e => set('first_name', e.target.value)} autoFocus />
              </div>
              <div className="rsvp-field">
                <label>Last Name <span>*</span></label>
                <input type="text" placeholder="Last name" value={form.last_name}
                  onChange={e => set('last_name', e.target.value)} />
              </div>
            </div>
            <div className="rsvp-field">
              <label>Email Address <span>*</span></label>
              <input type="email" placeholder="your@email.com" value={form.email}
                onChange={e => set('email', e.target.value)} />
            </div>
            <div className="rsvp-field">
              <label>Phone Number <em>(optional)</em></label>
              <input type="tel" placeholder="+61 400 000 000" value={form.phone}
                onChange={e => set('phone', e.target.value)} />
            </div>
            <div className="rsvp-field">
              <label>How do you know the couple? <em>(optional)</em></label>
              <select value={form.how_know} onChange={e => set('how_know', e.target.value)}>
                <option value="">Please select...</option>
                <option value="bride">Bride&rsquo;s side</option>
                <option value="groom">Groom&rsquo;s side</option>
                <option value="both">Both sides</option>
                <option value="family_friend">Friend of the family</option>
              </select>
            </div>
            <button className="btn btn-gold rsvp-next-btn"
              disabled={!form.first_name || !form.last_name || !form.email}
              onClick={() => setStep(2)}>
              Continue →
            </button>
            <a href={`mailto:${COUPLE_EMAIL}`} className="rsvp-contact-link">
              Have a question? Contact the couple
            </a>
          </div>
        )}

        {step === 2 && (
          <div className="rsvp-card">
            <p className="rsvp-card-title">
              Will you be joining us,<br /><em>{form.first_name}?</em>
            </p>
            <div className="rsvp-attend-grid">
              <button className={`rsvp-attend-btn ${form.attending === 'yes' ? 'is-active' : ''}`}
                onClick={() => { set('attending', 'yes'); setStep(3); }}>
                <span className="rsvp-attend-emoji">🎉</span>
                <strong>Happily Accept</strong>
                <small>Yes, I&rsquo;ll be there!</small>
              </button>
              <button className={`rsvp-attend-btn rsvp-attend-btn--no ${form.attending === 'no' ? 'is-active' : ''}`}
                onClick={() => { set('attending', 'no'); setStep(3); }}>
                <span className="rsvp-attend-emoji">💌</span>
                <strong>Sadly Can&rsquo;t Make It</strong>
                <small>I won&rsquo;t be able to attend</small>
              </button>
            </div>
            <button className="rsvp-back-btn" onClick={() => setStep(1)}>← Back</button>
          </div>
        )}

        {step === 3 && form.attending === 'yes' && (
          <div className="rsvp-card">
            <p className="rsvp-card-title">Almost done!</p>
            <div className="rsvp-field">
              <label>Will you be bringing a plus one?</label>
              <div className="rsvp-toggle-row">
                <button type="button" className={`rsvp-toggle ${form.has_plus_one === true ? 'is-active' : ''}`}
                  onClick={() => set('has_plus_one', true)}>Yes, bringing a guest</button>
                <button type="button" className={`rsvp-toggle ${form.has_plus_one === false ? 'is-active' : ''}`}
                  onClick={() => { set('has_plus_one', false); set('plus_one_first_name', ''); set('plus_one_last_name', ''); set('plus_one_email', ''); }}>
                  No, just me
                </button>
              </div>
            </div>
            {form.has_plus_one === true && (
              <div className="rsvp-plusone-box">
                <p className="rsvp-plusone-label">✦ &nbsp; Plus One Details</p>
                <div className="rsvp-row">
                  <div className="rsvp-field">
                    <label>First Name <span>*</span></label>
                    <input type="text" placeholder="First name" value={form.plus_one_first_name}
                      onChange={e => set('plus_one_first_name', e.target.value)} />
                  </div>
                  <div className="rsvp-field">
                    <label>Last Name <span>*</span></label>
                    <input type="text" placeholder="Last name" value={form.plus_one_last_name}
                      onChange={e => set('plus_one_last_name', e.target.value)} />
                  </div>
                </div>
                <div className="rsvp-field">
                  <label>Email Address <span>*</span></label>
                  <input type="email" placeholder="their@email.com" value={form.plus_one_email}
                    onChange={e => set('plus_one_email', e.target.value)} />
                </div>
              </div>
            )}
            {error && <p className="rsvp-error">{error}</p>}
            <div className="rsvp-btn-row">
              <button className="rsvp-back-btn" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-gold rsvp-next-btn"
                disabled={loading || form.has_plus_one === null ||
                  (form.has_plus_one === true && (!form.plus_one_first_name || !form.plus_one_last_name || !form.plus_one_email))}
                onClick={submit}>
                {loading ? 'Sending...' : '✓ Confirm RSVP'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && form.attending === 'no' && (
          <div className="rsvp-card">
            <p className="rsvp-card-title">We&rsquo;ll miss you, {form.first_name}</p>
            <p className="rsvp-card-sub">
              Thank you for letting us know. Feel free to leave a note for the couple.
            </p>
            <div className="rsvp-field">
              <label>Leave a note <em>(optional)</em></label>
              <textarea rows={4} placeholder="Share your love and best wishes for Live & Abass..."
                value={form.decline_note} onChange={e => set('decline_note', e.target.value)} />
            </div>
            {error && <p className="rsvp-error">{error}</p>}
            <div className="rsvp-btn-row">
              <button className="rsvp-back-btn" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-gold rsvp-next-btn" disabled={loading} onClick={submit}>
                {loading ? 'Sending...' : 'Send RSVP'}
              </button>
            </div>
          </div>
        )}

        <p className="rsvp-deadline">Kindly RSVP by 20 October 2026</p>
      </div>
    </section>
  );
}