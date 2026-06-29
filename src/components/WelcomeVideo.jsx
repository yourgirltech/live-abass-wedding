import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import Monogram from './Monogram';
import { IconPlay } from './icons';

export default function WelcomeVideo() {
  const headRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false); // briefly true right at the loop seam

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

  // Fade the poster in for a beat right as the loop restarts, then fade it
  // back out — this covers the browser's loop-restart hiccup with a
  // deliberate, smooth transition instead of letting it show through raw.
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    if (v.duration - v.currentTime < 0.3) {
      setIsLooping(true);
      setTimeout(() => setIsLooping(false), 500);
    }
  };

  return (
    <section className="bg-ivory" id="video">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">A Glimpse Of Us</span>
          <h2 className="display-2">Here's a glimpse of us filled with love.</h2>
        </div>

        <div className="video-section-grid reveal" ref={gridRef}>
          <div className={`video-feature ${isPlaying ? 'is-playing' : ''}`}>
            <video
              ref={videoRef}
              src="/assets/welcome-video.mp4"
              poster="/assets/welcome-poster-joyful.jpg"
              controls={isPlaying}
              playsInline
              preload="auto"
              loop
              onPause={handlePause}
              onTimeUpdate={handleTimeUpdate}
            />
            <img
              className={`video-poster-overlay ${!isPlaying || isLooping ? 'is-visible' : ''}`}
              src="/assets/welcome-poster-joyful.jpg"
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
              We can't wait to celebrate with the people who've shaped our story. Press play for a
              little hello before the big day.
            </p>
            <p className="signature">
              Live &amp; Abass
              <small>With Love</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}