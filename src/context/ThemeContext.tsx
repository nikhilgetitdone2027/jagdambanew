import React, { createContext, useContext, useEffect } from 'react';

export interface ThemeTemplate {
  id: 'royal_sapphire_palace';
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  colors: {
    primary: string;
    primaryDark: string;
    primarySurface: string;
    primaryCard: string;
    primaryHover: string;
    accent: string;
    accentLight: string;
    accentDark: string;
    accentGlow: string;
    canvasBg: string;
    canvasSurface: string;
    textDark: string;
    textMuted: string;
  };
  previewColors: {
    base: string;
    gold: string;
    card: string;
    accent: string;
  };
}

export const ROYAL_SAPPHIRE_PALACE_TEMPLATE: ThemeTemplate = {
  id: 'royal_sapphire_palace',
  name: 'Royal Sapphire Palace',
  subtitle: 'Imperial Blue & Regal Gold Majesty',
  description: 'Deep nocturnal sapphire tones paired with opulent royal gold filigree and glowing palace accents.',
  badge: 'Imperial Luxury',
  iconName: 'Crown',
  colors: {
    primary: '#080E1E',
    primaryDark: '#04070F',
    primarySurface: '#0E172F',
    primaryCard: '#142247',
    primaryHover: '#1B2E5E',
    accent: '#D4AF37',
    accentLight: '#FBE8A6',
    accentDark: '#A68018',
    accentGlow: 'rgba(212, 175, 55, 0.45)',
    canvasBg: '#080E1E',
    canvasSurface: '#0E172F',
    textDark: '#F3F6FD',
    textMuted: '#92A0C2',
  },
  previewColors: {
    base: '#080E1E',
    gold: '#D4AF37',
    card: '#142247',
    accent: '#2563EB',
  },
};

interface ThemeContextType {
  currentTemplate: ThemeTemplate;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTemplate: ROYAL_SAPPHIRE_PALACE_TEMPLATE,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Reset stored theme to royal_sapphire_palace
    try {
      localStorage.setItem('jagadamba_theme_template', 'royal_sapphire_palace');
    } catch {
      // Ignore storage errors
    }

    const root = document.documentElement;
    const { colors } = ROYAL_SAPPHIRE_PALACE_TEMPLATE;

    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-primary-dark', colors.primaryDark);
    root.style.setProperty('--theme-primary-surface', colors.primarySurface);
    root.style.setProperty('--theme-primary-card', colors.primaryCard);
    root.style.setProperty('--theme-primary-hover', colors.primaryHover);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-accent-light', colors.accentLight);
    root.style.setProperty('--theme-accent-dark', colors.accentDark);
    root.style.setProperty('--theme-accent-glow', colors.accentGlow);
    root.style.setProperty('--theme-canvas-bg', colors.canvasBg);
    root.style.setProperty('--theme-canvas-surface', colors.canvasSurface);
    root.style.setProperty('--theme-text-dark', colors.textDark);
    root.style.setProperty('--theme-text-muted', colors.textMuted);

    // Apply background color to body
    document.body.style.backgroundColor = colors.canvasBg;
    document.body.style.color = colors.textDark;
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTemplate: ROYAL_SAPPHIRE_PALACE_TEMPLATE }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);