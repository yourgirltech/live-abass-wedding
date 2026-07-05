import useReveal from '../hooks/useReveal';

function Flourish() {
  return (
    <div className="gifts-flourish" aria-hidden="true">
      <span className="gifts-flourish-line"></span>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
      </svg>
      <span className="gifts-flourish-line"></span>
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button className="gifts-copy-btn" onClick={copy} type="button" aria-label={`Copy ${text}`}>
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

import { useState } from 'react';

export default function Gifts() {
  const headRef = useReveal('is-visible');
  const cardRef = useReveal('is-visible');

  return (
    <section className="gifts-section bg-ivory section-border-top" id="gifts">
      <div className="container">
        <div className="gifts-head reveal" ref={headRef}>
          <span className="eyebrow">A Gift From The Heart</span>
          <h2 className="display-2">Gifts &amp; Wishes</h2>
          <Flourish />
          <p className="gifts-intro">
            Your presence is the greatest gift we could ever ask for, and no gifts are expected.
            However, if you would like to bless us with a gift, you are more than welcome to
            contribute to our joint account below, or place a card or gift in the wishing well
            available on the day.
          </p>
        </div>

        <div className="gifts-card reveal" ref={cardRef}>
          <div className="gifts-card-inner">
            <p className="gifts-card-label">Bank Transfer Details</p>

            <div className="gifts-detail-row">
              <span className="gifts-detail-key">Account Name</span>
              <span className="gifts-detail-val">Abass Lateef / Live Mayele</span>
            </div>

            <div className="gifts-divider" aria-hidden="true" />

            <div className="gifts-detail-row">
              <span className="gifts-detail-key">BSB</span>
              <div className="gifts-detail-copy">
                <span className="gifts-detail-val">082 343</span>
                <CopyButton text="082343" />
              </div>
            </div>

            <div className="gifts-divider" aria-hidden="true" />

            <div className="gifts-detail-row">
              <span className="gifts-detail-key">Account Number</span>
              <div className="gifts-detail-copy">
                <span className="gifts-detail-val">258 580 567</span>
                <CopyButton text="258580567" />
              </div>
            </div>
          </div>

          <p className="gifts-footnote">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" style={{ color: 'var(--champagne-deep)', marginRight: 6, flexShrink: 0 }}>
              <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
            </svg>
            A wishing well will also be available on the day for cards and gifts.
          </p>
        </div>

        <p className="gifts-thanks">Thank you so much — your love and support means everything to us.</p>
      </div>
    </section>
  );
}
