const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.15 };

export function IconCamera({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <rect x="3" y="6" width="18" height="13" rx="1.5" />
      <circle cx="12" cy="12.5" r="3.4" />
      <path d="M8 6l1.2-2h5.6L16 6" />
    </svg>
  );
}

export function IconHeartPin({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M12 20s-7-4.4-9.3-8.6C1.2 8.6 2.7 5.5 5.7 5c2-.3 3.6.8 4.3 2.3.7-1.5 2.3-2.6 4.3-2.3 3 .5 4.5 3.6 3 6.4C19 15.6 12 20 12 20z" />
    </svg>
  );
}

export function IconCalendar({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <path d="M3 9.5h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconClock({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function IconPin({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M12 21s-7-6.2-7-11.2A7 7 0 0112 3a7 7 0 017 6.8C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </svg>
  );
}

export function IconAddress({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}

export function IconPlay({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M6 4l15 8-15 8V4z" />
    </svg>
  );
}

export function IconTuxedo({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M6 4l3 2 3-2 3 2 3-2v16l-3-2-3 2-3-2-3 2V4z" />
    </svg>
  );
}

export function IconGown({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M12 3l3 5-1 2 2 11H8l2-11-1-2 3-5z" />
    </svg>
  );
}

export function IconSparkle({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" />
    </svg>
  );
}

export function IconHotel({ size = 26 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M3 21V8a2 2 0 012-2h5v6h6a2 2 0 012 2v7" />
      <path d="M3 21h18M10 12h0M14 17h0" />
    </svg>
  );
}

export function IconCar({ size = 26 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M3 13l2-6a2 2 0 012-1h10a2 2 0 012 1l2 6" />
      <rect x="2" y="13" width="20" height="6" rx="1.5" />
      <circle cx="7" cy="19" r="1.2" />
      <circle cx="17" cy="19" r="1.2" />
    </svg>
  );
}

export function IconMail({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C10 21 3 14 3 6a2 2 0 012-2z" />
    </svg>
  );
}

export function IconHosts({ size = 26 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" />
    </svg>
  );
}

export function IconExternal({ size = 12 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function IconInstagram({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconFacebook({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M14 9h2.5V6H14c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.3l.7-3H14V9z" />
    </svg>
  );
}
