import React, { createContext, useContext, useEffect } from 'react';

export interface ThemeTemplate {
  id: 'obsidian';
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

export const OBSIDIAN_TEMPLATE: ThemeTemplate = {
  id: 'obsidian',
  name: 'Obsidian & 24K Liquid Gold',
  subtitle: 'Ultra-Modern Black-Tie & Royal Gala',
  description: 'Velvet obsidian midnight black canvas contrasted against radiant 24K liquid mirror gold and crisp champagne accents.',
  badge: 'Dark Luxury',
  iconName: 'Gem',
  colors: {
    primary: '#0B0B0E',
    primaryDark: '#050507',
    primarySurface: '#14141B',
    primaryCard: '#1C1C26',
    primaryHover: '#2A2A38',
    accent: '#F5BD47',
    accentLight: '#FFF3D1',
    accentDark: '#C99318',
    accentGlow: 'rgba(245, 189, 71, 0.4)',
    canvasBg: '#0B0B0E',
    canvasSurface: '#14141B',
    textDark: '#F4F4F8',
    textMuted: '#A2A2B6',
  },
  previewColors: {
    base: '#0B0B0E',
    gold: '#F5BD47',
    card: '#1C1C26',
    accent: '#FFF3D1',
  },
};

interface ThemeContextType {
  currentTemplate: ThemeTemplate;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTemplate: OBSIDIAN_TEMPLATE,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Reset stored theme to obsidian
    try {
      localStorage.setItem('jagadamba_theme_template', 'obsidian');
    } catch {
      // Ignore storage errors
    }

    const root = document.documentElement;
    const { colors } = OBSIDIAN_TEMPLATE;

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
    <ThemeContext.Provider value={{ currentTemplate: OBSIDIAN_TEMPLATE }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
