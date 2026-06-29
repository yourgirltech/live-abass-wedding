import useReveal from '../hooks/useReveal';
import { IconHotel, IconCar, IconExternal } from './icons';
import { HOTEL } from '../data/content';

export default function Travel() {
  const headRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');
  const hotelMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL.mapsQuery)}`;

  return (
    <section className="bg-ivory" id="travel">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Travel &amp; Stay</span>
          <h2 className="display-2">Getting There &amp; Staying Over</h2>
          <p>A few notes to help with planning your journey to Bossley Park.</p>
        </div>

        <div className="travel-grid reveal" ref={gridRef}>
          <div className="travel-card">
            <span className="icon">
              <IconHotel />
            </span>
            <span className="tag">Recommended Hotel</span>
            <h3>{HOTEL.name}</h3>
            <p>Comfortable, spacious suites a short drive from the venue — an easy place to rest before and after the celebration.</p>
            <a className="link" target="_blank" rel="noopener" href={hotelMapsUrl}>
              View On Map
              <IconExternal />
            </a>
          </div>
          <div className="travel-card">
            <span className="icon">
              <IconCar />
            </span>
            <span className="tag">Travel Note</span>
            <h3>Plan Ahead</h3>
            <p>Please allow extra travel time, as the wedding takes place on a Friday and traffic may be heavier than usual.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
