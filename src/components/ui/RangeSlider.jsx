import React from 'react';
import './RangeSlider.css';

/**
 * Reusable RangeSlider with dynamic gradient track
 */
export default function RangeSlider({
  min = 10000,
  max = 120000,
  step = 2500,
  value,
  onChange,
  ariaLabel = 'Range Slider',
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="slider-wrapper">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="nexo-range-slider"
        aria-label={ariaLabel}
        style={{
          background: `linear-gradient(to right, #00f2fe 0%, #10b981 ${percentage}%, #16223b ${percentage}%, #16223b 100%)`,
        }}
      />
      <div className="slider-ticks">
        <span>${(min / 1000).toFixed(0)}k</span>
        <span>${((min + (max - min) / 2) / 1000).toFixed(0)}k</span>
        <span>${(max / 1000).toFixed(0)}k/mo</span>
      </div>
    </div>
  );
}
