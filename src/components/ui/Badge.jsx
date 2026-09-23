import React from 'react';
import './Badge.css';

/**
 * Reusable Badge component for status tags and ratings
 */
export default function Badge({
  children,
  variant = 'cyan', // 'cyan' | 'emerald' | 'violet' | 'amber' | 'neutral'
  size = 'sm',
  dot = false,
  className = '',
  icon: Icon,
}) {
  const classes = `nexo-badge badge-${variant} badge-${size} ${className}`.trim();

  return (
    <span className={classes}>
      {dot && <span className="badge-pulse-dot" />}
      {Icon && <Icon className="badge-icon" size={size === 'lg' ? 16 : 13} />}
      <span className="badge-content">{children}</span>
    </span>
  );
}
