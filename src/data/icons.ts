// Trazos de los iconos lineales diseñados en Claude Design (TriAlliance Web.dc.html).
// Un solo estilo: lineal, 1.6px, color heredado (currentColor).
export const ICONS: Record<string, string[]> = {
  shield: ["M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z", "M9 12l2 2 4-4"],
  badge: ["M4 5h16v14H4z", "M7 15h6", "M7 11h4", "M16.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3z"],
  book: ["M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z", "M5 19.5A1.5 1.5 0 0 0 6.5 21H19", "M9 7h6"],
  building: ["M4 21h16", "M6 21V4h9v17", "M15 9h3v12", "M9 8h3", "M9 12h3", "M9 16h3"],
  clock: ["M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0-18z", "M12 7v5l3 2"],
  calc: ["M6 3h12v18H6z", "M9 6h6v3H9z", "M9 13h.01", "M12 13h.01", "M15 13h.01", "M9 17h.01", "M12 17h.01", "M15 17h.01"],
  doc: ["M6 3h8l4 4v14H6z", "M14 3v4h4", "M9 12h6", "M9 16h4"],
  docCheck: ["M6 3h8l4 4v6", "M14 3v4h4", "M6 3v18h6", "M9 12h5", "M14 18l2 2 4-4"],
  users: ["M9 11a3 3 0 1 0 0-6a3 3 0 1 0 0 6z", "M3 20c0-3 2.7-5 6-5s6 2 6 5", "M16 5.3a3 3 0 0 1 0 5.4", "M18 15.2c1.8.6 3 2.3 3 4.8"],
  monitor: ["M3 4h18v12H3z", "M8 20h8", "M12 16v4", "M9 10l2 2 4-4"],
  scale: ["M12 3v18", "M8 21h8", "M5 7h14", "M5 7l-3 6a3 3 0 0 0 6 0z", "M19 7l-3 6a3 3 0 0 0 6 0z"],
  helmet: ["M3.5 17h17", "M5 17a7 7 0 0 1 14 0", "M10 10V6.5h4V10", "M7 20h10"],
  brief: ["M3 7h18v13H3z", "M8 7V4h8v3", "M3 12h18", "M11 12v2h2v-2"],
  eye: ["M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z", "M12 9a3 3 0 1 1 0 6a3 3 0 1 1 0-6z"],
  layers: ["M12 3l9 5-9 5-9-5z", "M3 13l9 5 9-5"],
  msg: ["M4 5h16v11H9l-5 4z", "M8 9h8", "M8 12h5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  x: ["M6 6l12 12", "M18 6L6 18"],
  phone: ["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  mail: ["M3 6h18v12H3z", "M3 7l9 6 9-6"],
  wa: ["M4 20l1.3-3.9A8.5 8.5 0 1 1 8 19z", "M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z"],
  ig: ["M4 4h16v16H4z", "M12 8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0-7z", "M16.8 7.2h.01"],
};

export type IconName = keyof typeof ICONS;
