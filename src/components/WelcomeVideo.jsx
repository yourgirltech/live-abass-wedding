import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import Monogram from './Monogram';
import { IconPlay } from './icons';

export default function WelcomeVideo() {
  const headRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    });
  };

  return (
    <section className="bg-ivory" id="video">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">A Glimpse Of Us</span>
          <h2 className="display-2">Here&rsquo;s a glimpse of us filled with love.</h2>
        </div>

        <div className="video-section-grid reveal" ref={gridRef}>
          <div className={`video-feature ${isPlaying ? 'is-playing' : ''}`}>
            <video
              ref={videoRef}
              poster="/assets/gallery-d.jpg"
              controls={isPlaying}
              playsInline
              preload="auto"
              loop
              onPause={handlePause}
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            <img
              className={`video-poster-overlay ${!isPlaying ? 'is-visible' : ''}`}
              src="/assets/gallery-d.jpg"
              alt=""
            />
            {!isPlaying && (
              <button className="play-btn" aria-label="Play welcome video" type="button" onClick={handlePlay}>
                <IconPlay />
              </button>
            )}
          </div>

          <div className="video-caption">
            <Monogram size={40} color="var(--champagne-deep)" style={{ marginBottom: 20 }} />
            <p className="lede">
              We can&rsquo;t wait to celebrate with the people who&rsquo;ve shaped our story. Press play for a
              little hello before the big day.
            </p>
            <p className="signature">
              Abass &amp; Live
              <small>With Love</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}