window.ESUR = window.ESUR || {};
window.ESUR.icons = {
  iconSvg(name, className) {
    const cls = className ? ` class="${className}"` : "";
    const common = `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;

    const icons = {
      document: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 20V5a1.5 1.5 0 0 1 1.5-1.5Z"/>
          <path ${common} d="M14 3.5V8h4"/>
          <path ${common} d="M9.5 12h5"/>
          <path ${common} d="M9.5 15.5h5"/>
        </svg>
      `,
      warningDrop: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M12 4.5 3.8 18.3a1.3 1.3 0 0 0 1.1 2h14.2a1.3 1.3 0 0 0 1.1-2L12 4.5Z"/>
          <path ${common} d="M12 10v3.8"/>
          <path ${common} d="M12 17.2h.01"/>
          <path ${common} d="M18.8 4.2c-1.6 1.2-3 2.7-3 4.6 0 1.6 1.2 2.8 2.8 2.8 1.7 0 3.1-1.3 3.1-3.1 0-1.5-1-3.1-2.9-4.3Z"/>
        </svg>
      `,
      kidney: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M9.4 4.4c-2.8 0-5 2.2-5 5v2.1c0 3.3 2.5 6 5.6 6 2.4 0 4.4-1.9 4.4-4.3V8.8c0-2.4-1.9-4.4-4.4-4.4Z"/>
          <path ${common} d="M14.6 4.4c2.8 0 5 2.2 5 5v2.1c0 3.3-2.5 6-5.6 6-2.4 0-4.4-1.9-4.4-4.3V8.8c0-2.4 1.9-4.4 4.4-4.4Z"/>
        </svg>
      `,
      clock: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <circle ${common} cx="12" cy="12" r="8.5"/>
          <path ${common} d="M12 7.7v4.9l3.3 1.8"/>
        </svg>
      `,
      lab: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M9 3.8h6"/>
          <path ${common} d="M10.4 3.8v5.1l-4.7 8.3a2.2 2.2 0 0 0 1.9 3.3h8.8a2.2 2.2 0 0 0 1.9-3.3l-4.7-8.3V3.8"/>
          <path ${common} d="M8.2 14.2h7.6"/>
        </svg>
      `,
      extravasation: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M6.2 13.2 8 7.6c.3-.9 1.2-1.5 2.2-1.5h1.1c1 0 1.9.6 2.2 1.5l1.5 4.7"/>
          <path ${common} d="M5.5 14.4h9.6c1.7 0 3 1.3 3 3v.2a2.8 2.8 0 0 1-2.8 2.8H9.9a4.2 4.2 0 0 1-4.1-4.1v-1.9c0-.6.5-1 1-1Z"/>
          <path ${common} d="M18.2 5.4c-1.2.9-2.2 2-2.2 3.5 0 1.2.9 2.2 2.2 2.2 1.4 0 2.5-1.1 2.5-2.5 0-1.2-.8-2.4-2.5-3.2Z"/>
        </svg>
      `,
      dialysis: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <rect ${common} x="4.5" y="5.2" width="6.4" height="13.6" rx="1.6"/>
          <path ${common} d="M10.9 8.2h2.7a3.8 3.8 0 0 1 3.8 3.8v0a3.8 3.8 0 0 1-3.8 3.8h-2.7"/>
          <path ${common} d="M17.4 6.1v2.1"/>
          <path ${common} d="M17.4 15.8v2.1"/>
          <path ${common} d="M6.5 9.2h2.4"/>
          <path ${common} d="M6.5 14.8h2.4"/>
        </svg>
      `,
      layers: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="m12 4.4 8 4.2-8 4.2-8-4.2 8-4.2Z"/>
          <path ${common} d="m4 12.1 8 4.2 8-4.2"/>
          <path ${common} d="m6.2 17.1 5.8 3 5.8-3"/>
        </svg>
      `,
      stack: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <rect ${common} x="5" y="4.5" width="11.8" height="7" rx="1.4"/>
          <rect ${common} x="7.2" y="9.1" width="11.8" height="7" rx="1.4"/>
          <rect ${common} x="9.4" y="13.7" width="9.6" height="5.8" rx="1.4"/>
        </svg>
      `,
      chevron: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="m6.8 9.5 5.2 5 5.2-5"/>
        </svg>
      `
    };

    return icons[name] || icons.document;
  }
};
