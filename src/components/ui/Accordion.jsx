import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

/**
 * Reusable Accordion Component
 */
export default function Accordion({ items, defaultIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultIndex);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="accordion-group">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`accordion-item ${isOpen ? 'is-expanded' : ''}`}
          >
            <button
              className="accordion-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="accordion-question">{item.question}</span>
              <ChevronDown
                size={18}
                className={`accordion-chevron ${isOpen ? 'rotate' : ''}`}
              />
            </button>
            <div className="accordion-panel">
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
