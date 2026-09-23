import React from 'react';

/**
 * Nexo Ecommerce - Master Brand Mark (Interlocking Nexus Monogram)
 * An iconic, ultra-premium vector mark composed of dual interlocking kinetic loops
 * forming the letter 'N' with cyan velocity and emerald yield neon gradients.
 */
export default function LogoMark({ size = 34, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`nexo-logo-svg ${className}`}
      aria-label="Nexo Ecommerce Emblem"
    >
      <defs>
        {/* Obsidian Glass Backdrop */}
        <radialGradient id="nexoPlateBg" cx="30%" cy="20%" r="90%">
          <stop offset="0%" stopColor="#162238" />
          <stop offset="60%" stopColor="#0B111E" />
          <stop offset="100%" stopColor="#050811" />
        </radialGradient>

        {/* Outer Rim Stroke */}
        <linearGradient id="nexoPlateRim" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(0, 242, 254, 0.45)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.15)" />
          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.45)" />
        </linearGradient>

        {/* Primary Cyan Velocity Ribbon */}
        <linearGradient id="cyanRibbon" x1="10" y1="8" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="45%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Secondary Emerald Yield Ribbon */}
        <linearGradient id="emeraldRibbon" x1="34" y1="8" x2="10" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        {/* Chrome Metallic Core Highlight */}
        <linearGradient id="chromeHighlight" x1="16" y1="12" x2="28" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#334155" stopOpacity="0.8" />
        </linearGradient>

        {/* Neon Glow Filter */}
        <filter id="nexoNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Base Shield Squircle */}
      <rect
        x="1.5"
        y="1.5"
        width="41"
        height="41"
        rx="11"
        fill="url(#nexoPlateBg)"
        stroke="url(#nexoPlateRim)"
        strokeWidth="1.2"
      />

      {/* Ambient Inner Shadow Rim */}
      <rect
        x="2.5"
        y="2.5"
        width="39"
        height="39"
        rx="10"
        fill="none"
        stroke="rgba(0, 0, 0, 0.6)"
        strokeWidth="1"
      />

      {/* Under-Glow Aura behind mark */}
      <ellipse cx="22" cy="22" rx="11" ry="11" fill="rgba(0, 242, 254, 0.16)" filter="url(#nexoNeonGlow)" />

      {/* --- INTERLOCKING NEXUS "N" RIBBONS --- */}

      {/* Back Loop Arc (Emerald loop passing behind) */}
      <path
        d="M27.5 12C32 16 33.5 24 29 29.5C25.5 33.8 19 32.5 16 28.5"
        stroke="url(#emeraldRibbon)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />

      {/* Front Loop Arc (Cyan loop - Primary sweeping dynamic) */}
      <path
        d="M16.5 32C12 28 10.5 20 15 14.5C18.5 10.2 25 11.5 28 15.5"
        stroke="url(#cyanRibbon)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Crossing Stem (Creates the definitive "N" diagonal connector) */}
      <path
        d="M14.5 14.5L29.5 29.5"
        stroke="url(#chromeHighlight)"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M15 15L29 29"
        stroke="url(#cyanRibbon)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left Upright Pillar of the 'N' */}
      <path
        d="M14.5 30V14"
        stroke="url(#cyanRibbon)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Right Upright Pillar of the 'N' */}
      <path
        d="M29.5 14V30"
        stroke="url(#emeraldRibbon)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Central Nexus Power Spark */}
      <circle cx="22" cy="22" r="2.2" fill="#FFFFFF" />
      <circle cx="22" cy="22" r="3.4" fill="none" stroke="rgba(0, 242, 254, 0.8)" strokeWidth="0.8" />
    </svg>
  );
}
