import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import { faqItems } from '../data/content';

function FaqRow({ item, index, isOpen, onToggle }) {
  const innerRef = useRef(null);

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="faq-q" type="button" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
        <h4>{item.q}</h4>
        <span className="plus"></span>
      </button>
      <div
        className="faq-a"
        style={{ maxHeight: isOpen ? innerRef.current?.scrollHeight : 0 }}
      >
        <div className="faq-a-inner" ref={innerRef}>
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const headRef = useReveal('is-visible');
  const listRef = useReveal('is-visible');

  return (
    <section className="bg-deep section-border-top" id="faq">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">FAQ</span>
          <h2 className="display-2">Good To Know</h2>
        </div>

        <div className="faq-list reveal" ref={listRef}>
          {faqItems.map((item, i) => (
            <FaqRow
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

