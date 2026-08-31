import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'light' | 'dark' | 'gold';
  customImageSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  customImageSrc,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32',
  };

  if (customImageSrc) {
    return (
      <div className={`relative rounded-full overflow-hidden shrink-0 border-2 border-slate-300 shadow-md ${sizeClasses[size]} ${className}`}>
        <img
          src={customImageSrc}
          alt="Jagadamba Caterer & Event Planner Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    );
  }

  // Exact vector reproduction of the official circular Jagadamba Caterer & Event Planner emblem
  return (
    <div
      className={`relative rounded-full shrink-0 flex items-center justify-center select-none shadow-md transition-transform duration-300 hover:scale-105 ${sizeClasses[size]} ${className}`}
      title="Jagadamba Caterer & Event Planner"
    >
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full drop-shadow-sm rounded-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Monogram JD / JP Sunset Vibrant Gradient */}
          <linearGradient id="monogramGradient" x1="10%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#F97316" /> {/* Vivid Orange */}
            <stop offset="35%" stopColor="#E11D48" /> {/* Rose Red */}
            <stop offset="70%" stopColor="#C026D3" /> {/* Fuchsia / Magenta */}
            <stop offset="100%" stopColor="#9333EA" /> {/* Royal Purple */}
          </linearGradient>

          {/* Gold Trim Gradient for Chef Hat Band */}
          <linearGradient id="goldBandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Subtle Shadow for Chef Hat */}
          <filter id="hatShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
          </filter>

          {/* Circular Text Path (Clockwise Circle) */}
          <path
            id="textArcUpper"
            d="M 42 150 A 108 108 0 1 1 258 150 A 108 108 0 1 1 42 150"
          />
        </defs>

        {/* Outer Circular Black / Charcoal Disc */}
        <circle cx="150" cy="150" r="146" fill="#1C1C1E" stroke="#334155" strokeWidth="2" />
        <circle cx="150" cy="150" r="141" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* Circular Text: JAGADAMBA CATERER & EVENT PLANNER with Stars */}
        <text
          fill="#FFFFFF"
          fontFamily="'Cinzel', 'Playfair Display', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="18.5"
          letterSpacing="4.8"
        >
          <textPath
            href="#textArcUpper"
            startOffset="50%"
            textAnchor="middle"
          >
            ★ JAGADAMBA CATERER & EVENT PLANNER ★
          </textPath>
        </text>

        {/* Inner Graphic Area (Chef Hat + JD Monogram) */}
        <g transform="translate(0, -2)">
          {/* ================= CHEF HAT ================= */}
          <g filter="url(#hatShadow)" transform="translate(150, 100) scale(0.68) translate(-150, -100)">
            {/* White Puffs of Chef Hat */}
            <path
              d="M108 92 C102 75 110 52 128 48 C135 32 155 30 168 40 C178 30 200 34 205 50 C218 55 224 75 218 92 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2.5"
            />
            {/* Soft pleats / inner fold lines */}
            <path d="M136 50 Q138 72 135 90" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M158 42 Q156 68 155 90" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M178 44 Q176 68 174 90" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M198 52 Q194 72 190 90" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Hat Band (Burgundy / Red with gold borders) */}
            <path
              d="M112 92 C140 98 170 98 214 92 L211 106 C170 112 140 112 115 106 Z"
              fill="#991B1B"
              stroke="url(#goldBandGrad)"
              strokeWidth="2"
            />
            {/* Band Pleats/Lines */}
            <line x1="130" y1="94" x2="132" y2="108" stroke="url(#goldBandGrad)" strokeWidth="1.5" />
            <line x1="150" y1="95" x2="150" y2="110" stroke="url(#goldBandGrad)" strokeWidth="1.5" />
            <line x1="170" y1="95" x2="168" y2="110" stroke="url(#goldBandGrad)" strokeWidth="1.5" />
            <line x1="190" y1="94" x2="186" y2="108" stroke="url(#goldBandGrad)" strokeWidth="1.5" />
          </g>

          {/* ================= JD / JP MONOGRAM WITH SWOOSH ================= */}
          <g id="monogram-art" transform="translate(150, 185) scale(0.92) translate(-150, -185)">
            {/* Letter J / Stylized Flourish */}
            <path
              d="M122 136 L144 136 L144 186 C144 206 130 220 108 214 C98 211 92 202 96 195 C100 188 110 194 116 196 C124 198 130 192 130 182 L130 136 Z"
              fill="url(#monogramGradient)"
            />

            {/* Letter D / P Loop */}
            <path
              d="M144 136 L175 136 C198 136 215 152 215 174 C215 196 198 212 175 212 L144 212 Z M158 150 L158 198 L174 198 C188 198 199 188 199 174 C199 160 188 150 174 150 Z"
              fill="url(#monogramGradient)"
            />

            {/* Crossbar & Dynamic Curved Swooshes */}
            {/* Left curved wing flick */}
            <path
              d="M84 188 C105 186 128 174 150 162 C168 152 188 148 226 158 C204 168 184 172 165 176 C142 181 118 198 84 188 Z"
              fill="url(#monogramGradient)"
              opacity="0.95"
            />
            {/* Top decorative accent bar */}
            <path
              d="M118 136 C138 132 170 132 195 136 L195 142 C170 138 138 138 118 142 Z"
              fill="url(#monogramGradient)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
