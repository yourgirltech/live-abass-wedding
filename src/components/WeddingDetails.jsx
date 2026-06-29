import useReveal from '../hooks/useReveal';
import { IconCalendar, IconClock, IconPin, IconAddress } from './icons';
import { VENUE, WEDDING_DATETIME_ISO, WEDDING_END_DATETIME_ISO } from '../data/content';

function toICSDate(iso) {
  // Convert an ISO datetime to the UTC basic format Google Calendar expects: YYYYMMDDTHHMMSSZ
  return new Date(iso).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function buildGoogleCalendarUrl() {
  const start = toICSDate(WEDDING_DATETIME_ISO);
  const end = toICSDate(WEDDING_END_DATETIME_ISO);
  const text = encodeURIComponent('Live & Abass\u2019s Wedding Reception');
  const details = encodeURIComponent('Join us as we celebrate the wedding of Live Mayele & Abass Lateef.');
  const location = encodeURIComponent(`${VENUE.name}, ${VENUE.room}, ${VENUE.addressLine1}, ${VENUE.addressLine2}`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export default function WeddingDetails() {
  const headRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE.mapsQuery)}`;
  const googleCalendarUrl = buildGoogleCalendarUrl();

  return (
    <section className="bg-ivory" id="details">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Wedding Details</span>
          <h2 className="display-2">The Reception</h2>
          <p>We would be honoured to have you join us as we celebrate. Details of the evening are below.</p>
        </div>

        <div className="details-grid reveal" ref={gridRef}>
          <div className="details-card">
            <div className="details-row">
              <span className="icon">
                <IconCalendar />
              </span>
              <div>
                <h4>Date</h4>
                <div className="val">Friday, 20 November 2026</div>
              </div>
            </div>
            <div className="details-row">
              <span className="icon">
                <IconClock />
              </span>
              <div>
                <h4>Reception Begins</h4>
                <div className="val">6:30 PM</div>
              </div>
            </div>
            <div className="details-row">
              <span className="icon">
                <IconPin />
              </span>
              <div>
                <h4>Venue</h4>
                <div className="val">
                  {VENUE.name}
                  <small>{VENUE.room}</small>
                </div>
              </div>
            </div>
            <div className="details-row">
              <span className="icon">
                <IconAddress />
              </span>
              <div>
                <h4>Address</h4>
                <div className="val">
                  {VENUE.addressLine1}
                  <small>{VENUE.addressLine2}</small>
                </div>
              </div>
            </div>

            <div className="details-actions">
              <a className="btn btn-outline-dark" target="_blank" rel="noopener" href={googleCalendarUrl}>
                Add To Calendar
              </a>
              <a className="btn btn-outline-dark" target="_blank" rel="noopener" href={mapsUrl}>
                Get Directions
              </a>
            </div>
          </div>

          {/*
            GOOGLE MAPS: replace this placeholder div with a live embed, e.g.
            <iframe src="https://www.google.com/maps/embed?pb=..." style={{ width: '100%', height: '100%', border: 0 }} loading="lazy" />
          */}
          <div className="map-placeholder">
            <div className="map-grid"></div>
            <div className="map-content">
              <div className="map-pin">
                <IconPin size={38} />
              </div>
              <div className="addr">
                {VENUE.name}, {VENUE.room}
              </div>
              <div className="note">
                {VENUE.addressLine1}, {VENUE.addressLine2}
              </div>
              <a className="btn btn-outline-dark p-small" target="_blank" rel="noopener" href={mapsUrl}>
                Open Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}