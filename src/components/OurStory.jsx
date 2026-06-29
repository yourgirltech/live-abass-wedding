import useReveal from '../hooks/useReveal';
import { IconCamera, IconHeartPin } from './icons';
import { timeline } from '../data/content';

function TimelineItem({ item }) {
  const ref = useReveal('is-visible');
  const Icon = item.title === 'Our Nikkah' ? IconHeartPin : IconCamera;

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-card">
        <span className="timeline-date">{item.date}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      <div className="timeline-node">
        <span className="timeline-dot"></span>
      </div>
      <div className="timeline-photo">
        <div className="photo-placeholder ratio-portrait">
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <div className="ph-inner">
              <Icon size={24} />
              <span className="ph-label">{item.label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurStory() {
  const headRef = useReveal('is-visible');
  const trackRef = useReveal('is-inview');
  const storyRef = useReveal('is-visible');

  return (
    <section className="bg-deep section-border-top" id="story">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Our Story</span>
          <h2 className="display-2">The Story Of Us</h2>
          <p>Every love story is beautiful — this is the path that led to ours.</p>
        </div>

        <div className="timeline" ref={trackRef}>
          <div className="timeline-track"></div>
          {timeline.map((item, i) => (
            <TimelineItem item={item} key={i} />
          ))}
        </div>

        <div className="story-personal reveal" ref={storyRef}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>
           A Story Written By Allah
          </span>
          <p className="lede">
            Every chapter has led us here, and we are deeply grateful to share this next one with the people we love most. Thank you for being part of our journey—We can&rsquo;t wait to celebrate this special
            chapter with you.
          </p>
        </div>
      </div>
    </section>
  );
}