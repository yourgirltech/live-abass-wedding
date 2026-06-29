import useReveal from '../hooks/useReveal';
import { IconMail, IconPhone, IconHosts } from './icons';
import { CONTACT } from '../data/content';

export default function Contact() {
  const headRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');

  return (
    <section className="bg-ivory" id="contact">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Contact</span>
          <h2 className="display-2">Wedding Enquiries</h2>
          <p>For any questions about the celebration, we're happy to help.</p>
        </div>

        <div className="contact-grid reveal" ref={gridRef}>
          <div className="contact-card">
            <span className="icon">
              <IconMail />
            </span>
            <h4>Email</h4>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="contact-card">
            <span className="icon">
              <IconPhone />
            </span>
            <h4>Phone</h4>
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
          </div>
          <div className="contact-card">
            <span className="icon">
              <IconHosts />
            </span>
            <h4>Wedding Hosted By</h4>
            <p>Live &amp; Abass</p>
          </div>
        </div>
      </div>
    </section>
  );
}
