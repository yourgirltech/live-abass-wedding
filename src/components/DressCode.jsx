import useReveal from '../hooks/useReveal';
import { IconTuxedo, IconGown, IconSparkle } from './icons';

export default function DressCode() {
  const introRef = useReveal('is-visible');
  const gridRef = useReveal('is-visible');

  return (
    <section className="bg-deep section-border-top dresscode-feature" id="dresscode">
      <div className="container">
        <div className="reveal" ref={introRef}>
          <span className="eyebrow">Dress Code</span>
          <h2 className="display-1" style={{ margin: '18px 0 12px' }}>
            Black Tie
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Dress To Impress
          </p>
        </div>

        <div className="dresscode-grid reveal-stagger" ref={gridRef}>
          <div className="dresscode-card">
            <span className="icon">
              <IconTuxedo />
            </span>
            <h4>For Gentlemen</h4>
            <p>Tuxedo or a dark formal suit, paired with a bow tie and polished shoes.</p>
          </div>
          <div className="dresscode-card">
            <span className="icon">
              <IconGown />
            </span>
            <h4>For Ladies</h4>
            <p>Floor-length gowns or elegant evening wear, in rich tones and refined silhouettes.</p>
          </div>
          <div className="dresscode-card">
            <span className="icon">
              <IconSparkle />
            </span>
            <h4>A Gentle Note</h4>
            <p>We kindly ask guests to avoid white or ivory, reserved for the bride.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
