export type CVThemeTokens = {
  canvasBg: string;
  pageBg: string;
  pageBorder: string;
  pageShadow: string;
  heroStart: string;
  heroEnd: string;
  heroText: string;
  heroMuted: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentSoft: string;
  accentBorder: string;
  surface: string;
  surfaceAlt: string;
  sectionBorder: string;
  chipBg: string;
  chipText: string;
  chipBorder: string;
  fontHeading: string;
  fontBody: string;
  radiusLg: string;
  radiusMd: string;
  radiusSm: string;
};

export type CVThemePreset = {
  id: "tech-executive";
  name: string;
  tokens: CVThemeTokens;
};

export const techExecutiveTheme: CVThemePreset = {
  id: "tech-executive",
  name: "Tech Executive",
  tokens: {
    canvasBg: "#e2ebf4",
    pageBg: "#f8fbff",
    pageBorder: "#c7d4e4",
    pageShadow: "0 26px 55px rgba(15, 23, 42, 0.18)",
    heroStart: "#0f172a",
    heroEnd: "#164e63",
    heroText: "#f0f9ff",
    heroMuted: "#bae6fd",
    textPrimary: "#0f172a",
    textSecondary: "#334155",
    textTertiary: "#64748b",
    accent: "#0891b2",
    accentSoft: "#cffafe",
    accentBorder: "#67e8f9",
    surface: "#ffffff",
    surfaceAlt: "#f1f5f9",
    sectionBorder: "#cbd5e1",
    chipBg: "#e0f2fe",
    chipText: "#0f172a",
    chipBorder: "#7dd3fc",
    fontHeading: "\"Space Grotesk\", \"Avenir Next\", \"Segoe UI\", sans-serif",
    fontBody: "\"Manrope\", \"IBM Plex Sans\", \"Helvetica Neue\", sans-serif",
    radiusLg: "24px",
    radiusMd: "14px",
    radiusSm: "8px",
  },
};
