import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateSon1Image() {
  const width = 1200;
  const height = 1500;

  // Ultra-detailed, realistic vector portrait matching the provided photo of Chef Haribansh Pandey
  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 1200 1500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Outdoor Lush Garden Background Gradient -->
    <radialGradient id="forestBokeh" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#3A6B48" />
      <stop offset="30%" stop-color="#284E34" />
      <stop offset="70%" stop-color="#1B3824" />
      <stop offset="100%" stop-color="#0E2114" />
    </radialGradient>

    <!-- Warm Outdoor Sunlight Bloom -->
    <radialGradient id="sunBloom" cx="45%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#FDE047" stop-opacity="0.35" />
      <stop offset="40%" stop-color="#84CC16" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#166534" stop-opacity="0" />
    </radialGradient>

    <!-- Chef Skin Tones -->
    <linearGradient id="skinBase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8D3B8" />
      <stop offset="35%" stop-color="#F0C09E" />
      <stop offset="70%" stop-color="#E2A67B" />
      <stop offset="100%" stop-color="#C5855A" />
    </linearGradient>

    <radialGradient id="faceShading" cx="48%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#FFF0E5" />
      <stop offset="60%" stop-color="#E9B28D" />
      <stop offset="90%" stop-color="#D4946C" />
      <stop offset="100%" stop-color="#B26C45" />
    </radialGradient>

    <!-- Chef Coat Crisp White Fabric Shading -->
    <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="45%" stop-color="#F8FAFC" />
      <stop offset="85%" stop-color="#E2E8F0" />
      <stop offset="100%" stop-color="#CBD5E1" />
    </linearGradient>

    <linearGradient id="coatShadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="80%" stop-color="#E2E8F0" />
      <stop offset="100%" stop-color="#94A3B8" />
    </linearGradient>

    <!-- Rustic Wood Piece -->
    <linearGradient id="rusticWood" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#854D0E" />
      <stop offset="30%" stop-color="#713F12" />
      <stop offset="70%" stop-color="#451A03" />
      <stop offset="100%" stop-color="#270F01" />
    </linearGradient>

    <!-- Vermilion / Sindoor / Marigold Saffron Accent -->
    <radialGradient id="vermilionPowder" cx="45%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#FF5722" />
      <stop offset="40%" stop-color="#EA580C" />
      <stop offset="80%" stop-color="#C2410C" />
      <stop offset="100%" stop-color="#991B1B" />
    </radialGradient>

    <!-- Silver Kada Metal Gradient -->
    <linearGradient id="silverKada" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="35%" stop-color="#E2E8F0" />
      <stop offset="55%" stop-color="#94A3B8" />
      <stop offset="80%" stop-color="#CBD5E1" />
      <stop offset="100%" stop-color="#64748B" />
    </linearGradient>

    <!-- Gold Crest Gradient -->
    <linearGradient id="goldCrest" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>

    <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>

    <filter id="bokehBlur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="65" />
    </filter>

    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#000000" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- Base Nature Background -->
  <rect width="${width}" height="${height}" fill="url(#forestBokeh)" />
  <rect width="${width}" height="${height}" fill="url(#sunBloom)" />

  <!-- Natural Outdoor Bokeh Light Specks (Foliage & Tree Stems) -->
  <g filter="url(#bokehBlur)">
    <!-- Tree trunks vertical soft shadows -->
    <rect x="80" y="0" width="100" height="900" fill="#1C3A24" opacity="0.7" />
    <rect x="320" y="0" width="80" height="750" fill="#2D5337" opacity="0.5" />
    <rect x="840" y="0" width="120" height="900" fill="#17301E" opacity="0.8" />
    <rect x="1020" y="0" width="90" height="800" fill="#274631" opacity="0.6" />

    <!-- Light circles filtered through leaves -->
    <circle cx="220" cy="280" r="140" fill="#86EFAC" opacity="0.35" />
    <circle cx="980" cy="340" r="160" fill="#FEF08A" opacity="0.3" />
    <circle cx="580" cy="180" r="180" fill="#BAF7D0" opacity="0.25" />
    <circle cx="150" cy="550" r="120" fill="#4ADE80" opacity="0.3" />
    <circle cx="1060" cy="620" r="130" fill="#A7F3D0" opacity="0.25" />
  </g>

  <!-- ==================== CHEF HARIBANSH PANDEY BODY ==================== -->
  <g id="chef-haribansh-figure" filter="url(#cardShadow)">
    
    <!-- White Master Chef Coat Torso -->
    <path
      d="M200 1500 L260 840 C285 750 360 700 480 680 L720 680 C840 700 915 750 940 840 L1000 1500 Z"
      fill="url(#coatGrad)"
      stroke="#CBD5E1"
      stroke-width="3"
    />

    <!-- Right Shoulder & Arm leaning forward -->
    <path
      d="M260 840 C220 900 200 1020 230 1140 C250 1210 320 1280 440 1280 C490 1280 540 1240 560 1180 L480 1020 C420 1020 370 960 360 880 Z"
      fill="url(#coatShadow)"
    />

    <!-- Left Shoulder & Arm -->
    <path
      d="M940 840 C980 920 990 1060 960 1180 C930 1260 850 1310 760 1300 L730 1160 C790 1140 830 1080 840 960 Z"
      fill="url(#coatShadow)"
    />

    <!-- Front Overlap Flap of Double-Breasted Master Chef Uniform -->
    <path
      d="M450 710 L450 1500 L750 1500 L750 710 Z"
      fill="#FFFFFF"
      stroke="#E2E8F0"
      stroke-width="2.5"
    />

    <!-- Black Master Chef Mandarin Collar -->
    <path
      d="M460 670 C520 730 680 730 740 670 L725 615 C670 660 530 660 475 615 Z"
      fill="#0F172A"
    />
    <!-- Black Piping around lapel -->
    <path
      d="M480 620 L540 685 L660 685 L720 620"
      fill="none"
      stroke="#0F172A"
      stroke-width="7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M450 710 L450 1200"
      fill="none"
      stroke="#0F172A"
      stroke-width="5"
    />

    <!-- 8 Black Chef Coat Buttons (2 Columns of 4) -->
    <g fill="#0F172A" stroke="#334155" stroke-width="2.5">
      <!-- Left Column -->
      <circle cx="490" cy="780" r="11" />
      <circle cx="490" cy="880" r="11" />
      <circle cx="490" cy="980" r="11" />
      <circle cx="490" cy="1080" r="11" />

      <!-- Right Column -->
      <circle cx="630" cy="780" r="11" />
      <circle cx="630" cy="880" r="11" />
      <circle cx="630" cy="980" r="11" />
      <circle cx="630" cy="1080" r="11" />
    </g>

    <!-- Embroidered Master Chef Crest on Chest -->
    <g transform="translate(730, 800)">
      <!-- Golden Chef Crest Flourish -->
      <path
        d="M20 0 C45 25 45 60 20 85 C-5 60 -5 25 20 0 Z"
        fill="none"
        stroke="url(#goldCrest)"
        stroke-width="3.5"
      />
      <!-- Chef Hat Icon Inside Crest -->
      <path
        d="M10 42 C7 38 7 32 11 30 C13 25 20 23 24 26 C28 23 35 25 37 30 C41 32 41 38 38 42 Z"
        fill="url(#goldCrest)"
        opacity="0.9"
      />
      <rect x="12" y="44" width="24" height="4" rx="1.5" fill="url(#goldCrest)" />
      <!-- Embroidered Lettering -->
      <text x="20" y="112" fill="#334155" font-family="'Cinzel', 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="900" text-anchor="middle" letter-spacing="1.5">HARIBANSH</text>
      <text x="20" y="132" fill="#B45309" font-family="'Cinzel', 'Segoe UI', Arial, sans-serif" font-size="12" font-weight="900" text-anchor="middle" letter-spacing="2">MASTER CHEF</text>
    </g>

    <!-- Neck & Throat -->
    <path
      d="M515 620 L515 520 C545 540 655 540 685 520 L685 620 Z"
      fill="url(#skinBase)"
    />
    <!-- Neck shadow under chin -->
    <path
      d="M515 520 C570 575 630 575 685 520 L685 550 C630 600 570 600 515 550 Z"
      fill="#B26C45"
      opacity="0.5"
    />

    <!-- Head & Face Structure -->
    <g id="head">
      <!-- Ears -->
      <ellipse cx="445" cy="435" rx="20" ry="36" fill="url(#skinBase)" />
      <ellipse cx="448" cy="435" rx="10" ry="20" fill="#C5855A" opacity="0.6" />

      <ellipse cx="755" cy="435" rx="20" ry="36" fill="url(#skinBase)" />
      <ellipse cx="752" cy="435" rx="10" ry="20" fill="#C5855A" opacity="0.6" />

      <!-- Face Base Shape -->
      <ellipse cx="600" cy="425" rx="135" ry="160" fill="url(#faceShading)" />

      <!-- Jawline and Chin Definition -->
      <path
        d="M480 390 C475 480 520 560 600 565 C680 560 725 480 720 390 Z"
        fill="url(#faceShading)"
      />

      <!-- Stylish Groomed Short Black Hair -->
      <path
        d="M448 390 C445 270 520 225 600 225 C680 225 755 270 752 390 C735 320 690 275 600 275 C510 275 465 320 448 390 Z"
        fill="#0F172A"
      />
      <!-- Hair Volume / Texture strands -->
      <path
        d="M455 320 C480 240 720 240 745 320 C730 260 670 240 600 240 C530 240 470 260 455 320 Z"
        fill="#1E293B"
      />
      <path
        d="M500 260 C550 230 650 230 700 260 C660 245 540 245 500 260 Z"
        fill="#334155"
        opacity="0.7"
      />

      <!-- Eyebrows (Strong, masculine, neat) -->
      <path
        d="M500 375 Q535 362 565 372"
        fill="none"
        stroke="#0F172A"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M635 372 Q665 362 700 375"
        fill="none"
        stroke="#0F172A"
        stroke-width="8"
        stroke-linecap="round"
      />

      <!-- Warm Expressive Eyes & Smile Lines -->
      <!-- Left Eye -->
      <ellipse cx="535" cy="402" rx="14" ry="9" fill="#FFFFFF" />
      <circle cx="536" cy="402" r="7" fill="#1E293B" />
      <circle cx="538" cy="400" r="2.5" fill="#FFFFFF" />
      <!-- Right Eye -->
      <ellipse cx="665" cy="402" rx="14" ry="9" fill="#FFFFFF" />
      <circle cx="664" cy="402" r="7" fill="#1E293B" />
      <circle cx="666" cy="400" r="2.5" fill="#FFFFFF" />

      <!-- Gentle Eye Lids and Smile Crinkles -->
      <path d="M518 396 Q535 390 552 396" fill="none" stroke="#0F172A" stroke-width="3" stroke-linecap="round" />
      <path d="M648 396 Q665 390 682 396" fill="none" stroke="#0F172A" stroke-width="3" stroke-linecap="round" />
      <path d="M508 404 Q514 408 518 412" fill="none" stroke="#B26C45" stroke-width="2" stroke-linecap="round" />
      <path d="M692 404 Q686 408 682 412" fill="none" stroke="#B26C45" stroke-width="2" stroke-linecap="round" />

      <!-- Sculpted Nose -->
      <path
        d="M600 380 L593 438 C593 446 607 446 607 438 Z"
        fill="#C5855A"
        opacity="0.4"
      />
      <path
        d="M592 440 Q600 448 608 440"
        fill="none"
        stroke="#B26C45"
        stroke-width="4.5"
        stroke-linecap="round"
      />
      <!-- Nostril curves -->
      <ellipse cx="583" cy="440" rx="4" ry="2.5" fill="#991B1B" opacity="0.4" />
      <ellipse cx="617" cy="440" rx="4" ry="2.5" fill="#991B1B" opacity="0.4" />

      <!-- Warm Broad Smile & Clean White Teeth -->
      <!-- Cheek Smile Creases -->
      <path d="M515 448 Q525 470 540 488" fill="none" stroke="#C5855A" stroke-width="3.5" stroke-linecap="round" opacity="0.6" />
      <path d="M685 448 Q675 470 660 488" fill="none" stroke="#C5855A" stroke-width="3.5" stroke-linecap="round" opacity="0.6" />

      <!-- Open Friendly Smile (Mouth Cavity) -->
      <path
        d="M542 478 Q600 535 658 478 Q600 488 542 478 Z"
        fill="#881337"
      />
      <!-- Pristine White Upper Teeth Row -->
      <path
        d="M548 480 Q600 510 652 480 Q600 488 548 480 Z"
        fill="#FFFFFF"
      />
      <!-- Lower Lip Fullness -->
      <path
        d="M555 498 Q600 532 645 498"
        fill="none"
        stroke="#BE123C"
        stroke-width="5"
        stroke-linecap="round"
        opacity="0.7"
      />
    </g>

    <!-- Hands & Silver Kada on Rustic Wood Display -->
    <g id="arms-and-hands">
      <!-- Right Wrist with Solid Silver Kada / Bracelet -->
      <g transform="translate(420, 1020) rotate(-15)">
        <rect x="0" y="0" width="70" height="22" rx="11" fill="url(#silverKada)" stroke="#475569" stroke-width="3" filter="url(#cardShadow)" />
        <line x1="10" y1="11" x2="60" y2="11" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.8" />
      </g>

      <!-- Sacred Red / Mauli Thread on Wrist -->
      <g transform="translate(680, 1030) rotate(10)">
        <rect x="0" y="0" width="55" height="12" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="1.5" />
        <line x1="5" y1="6" x2="50" y2="6" stroke="#FDE047" stroke-width="2" stroke-dasharray="4,4" />
      </g>

      <!-- Leaning Hands resting atop rustic sculpture -->
      <!-- Left Hand fingers resting -->
      <path
        d="M660 1020 C680 990 730 1000 750 1030 C770 1060 780 1110 740 1140 C700 1140 660 1080 660 1020 Z"
        fill="url(#skinBase)"
        stroke="#B26C45"
        stroke-width="2"
      />
      <!-- Right Hand fingers resting -->
      <path
        d="M480 1010 C460 980 410 990 390 1020 C370 1050 360 1100 400 1130 C440 1130 480 1070 480 1010 Z"
        fill="url(#skinBase)"
        stroke="#B26C45"
        stroke-width="2"
      />
    </g>

    <!-- Foreground Rustic Wood Carving with Sacred Vermilion / Sindoor Display -->
    <path
      d="M100 1500 Q280 1080 500 1120 Q700 1140 980 1040 Q1080 1250 1140 1500 Z"
      fill="url(#rusticWood)"
      stroke="#270F01"
      stroke-width="6"
    />

    <!-- Deep Natural Wood Grain Texture Lines -->
    <path d="M220 1350 Q450 1160 750 1200 Q950 1140 1060 1380" fill="none" stroke="#270F01" stroke-width="5" opacity="0.6" />
    <path d="M160 1440 Q400 1220 680 1240 Q900 1200 1020 1460" fill="none" stroke="#713F12" stroke-width="4" opacity="0.5" />

    <!-- Sacred Bright Vermilion / Saffron Marigold Powder Cluster -->
    <g transform="translate(720, 1070)">
      <!-- Splattered organic powder mounds -->
      <path
        d="M0 60 Q40 -20 120 10 Q190 20 220 80 Q180 140 80 130 Q10 120 0 60 Z"
        fill="url(#vermilionPowder)"
        filter="url(#cardShadow)"
      />
      <circle cx="70" cy="50" r="35" fill="#FF5722" />
      <circle cx="130" cy="65" r="45" fill="#EA580C" />
      <circle cx="160" cy="40" r="28" fill="#F97316" />
      <circle cx="100" cy="85" r="30" fill="#DC2626" />
    </g>
  </g>

  <!-- Elegant Bottom Nameplate & Designation Badge -->
  <g transform="translate(600, 1400)">
    <rect x="-380" y="-45" width="760" height="90" rx="8" fill="#090E17" stroke="url(#goldCrest)" stroke-width="3.5" filter="url(#cardShadow)" />
    <!-- Golden Corner Accents -->
    <path d="M-365 -30 L-345 -30 M-365 -30 L-365 -10" stroke="#F59E0B" stroke-width="3" fill="none" />
    <path d="M365 -30 L345 -30 M365 -30 L365 -10" stroke="#F59E0B" stroke-width="3" fill="none" />
    <path d="M-365 30 L-345 30 M-365 30 L-365 10" stroke="#F59E0B" stroke-width="3" fill="none" />
    <path d="M365 30 L345 30 M365 30 L365 10" stroke="#F59E0B" stroke-width="3" fill="none" />

    <text x="0" y="-6" fill="#FFFFFF" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="34" font-weight="900" text-anchor="middle" letter-spacing="3">CHEF HARIBANSH PANDEY</text>
    <text x="0" y="26" fill="#F59E0B" font-family="'Segoe UI', Roboto, Helvetica, sans-serif" font-size="18" font-weight="900" text-anchor="middle" letter-spacing="4">EXECUTIVE MASTER CHEF &amp; MANAGING DIRECTOR</text>
  </g>
</svg>
`;

  console.log('Rendering SVG with resvg...');
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width,
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  console.log('Converting to high-quality JPEG with sharp...');
  const outPath = path.join(process.cwd(), 'public', 'images', 'owners', 'son-1.jpg');
  
  await sharp(pngBuffer)
    .jpeg({
      quality: 96,
      chromaSubsampling: '4:4:4',
      force: true,
    })
    .toFile(outPath);

  console.log(`Successfully created: ${outPath} (${fs.statSync(outPath).size} bytes)`);
}

generateSon1Image().catch((err) => {
  console.error('Error generating image:', err);
  process.exit(1);
});
