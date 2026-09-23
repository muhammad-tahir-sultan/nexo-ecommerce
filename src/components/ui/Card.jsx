import React from 'react';
import './Card.css';

/**
 * Reusable Glassmorphism Card Component
 */
export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  as: Component = 'div',
  ...rest
}) {
  const classes = [
    'nexo-card',
    hoverEffect ? 'hover-elevate' : '',
    glow ? 'glow-accent' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      <div className="card-border-glow" />
      <div className="card-inner">{children}</div>
    </Component>
  );
}
