import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { IconCamera, IconHeartPin } from './icons';
import { galleryItems } from '../data/content';

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'engagement', label: 'Engagement' },
  { key: 'portraits', label: 'Couple Portraits' },
  { key: 'memories', label: 'Wedding Memories' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const headRef = useReveal('is-visible');
  const tabsRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');

  return (
    <section className="bg-deep section-border-top" id="gallery">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">A Collection Of Memories</span>
          <h2 className="display-2">Moments We Treasure</h2>
          <p>Engagement photos, portraits, and memories — this gallery will grow as our story does.</p>
        </div>

        <div className="gallery-tabs reveal" ref={tabsRef}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={filter === tab.key ? 'is-active' : ''}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

       <div className="gallery-grid reveal-stagger" key={filter} ref={gridRef}>
          {galleryItems
            .filter((item) => filter === 'all' || filter === item.cat)
            .map((item) => {
              const Icon = item.cat === 'memories' ? IconHeartPin : IconCamera;
              return (
                <div key={item.id} className={`gallery-item gallery-item--${item.id}`}>
                  <div className="photo-placeholder">
                    {item.image ? (
                      <img src={item.image} alt={item.label} />
                    ) : (
                      <div className="ph-inner">
                        <Icon size={24} />
                        <span className="ph-label">{item.label}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}