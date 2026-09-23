import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable, Polymorphic Button Component (Open/Closed & Liskov Substitution Principle)
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...rest
}) {
  const combinedClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-icon left" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon right" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
