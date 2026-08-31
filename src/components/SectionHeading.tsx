import React from 'react';

interface SectionHeadingProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div id={id} className={`max-w-3xl mb-12 sm:mb-16 ${center ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm text-xs font-black tracking-widest uppercase mb-3 border shadow-sm backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--theme-canvas-surface)',
            borderColor: 'var(--theme-accent)',
            color: 'var(--theme-accent-light)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full inline-block animate-pulse"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
          {badge}
        </div>
      )}

      <h2
        className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--theme-accent-light)] drop-shadow-sm"
      >
        {title}
      </h2>

      {/* Subtle Indian Ornamental Motif Divider with Sophisticated Accent */}
      <div className={`flex items-center gap-3 my-4 ${center ? 'justify-center' : 'justify-start'}`}>
        <div
          className="w-14 h-[2px]"
          style={{
            background: `linear-gradient(to right, transparent, var(--theme-accent), transparent)`,
          }}
        />
        <div
          className="w-2.5 h-2.5 rotate-45 shadow-xs"
          style={{ backgroundColor: 'var(--theme-accent)' }}
        />
        <div
          className="w-14 h-[2px]"
          style={{
            background: `linear-gradient(to right, transparent, var(--theme-accent), transparent)`,
          }}
        />
      </div>

      {subtitle && (
        <p
          className="font-sans text-sm sm:text-base md:text-lg leading-relaxed font-bold text-[var(--theme-text-muted)]"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
