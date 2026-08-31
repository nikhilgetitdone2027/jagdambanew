# JAGADAMBA CATERER & EVENT PLANNER

A modern, premium, responsive React.js website for **Jagadamba Caterer & Event Planner**, designed to showcase catering services, lighting, decoration, event planning, previous work, menus and business/owner information.

> **Note:** This is a **frontend-only / static website**. It does not require a backend, database, or external API server for operation.

---

## 1. Project Overview

**Jagadamba Caterer & Event Planner** is a family-run enterprise based in Chirkunda (Dhanbad), Jharkhand, providing wedding banqueting, specialized live counters, stage decoration, architectural lighting, and full event management services.

- **Business Represented:** Jagadamba Caterer & Event Planner
- **Lead / Executive Chef:** Chef Haribansh Pandey (S/O Shri Damodar Pandey)
- **Primary Location:** Sonar Dangal, Opposite of Durga Mandir, Chirkunda, Dhanbad (JH)
- **Main Purpose:** To serve as a high-trust digital portfolio, presentation platform, and direct enquiry channel for clients planning weddings, corporate banquets, receptions, and special functions.
- **Target Audience:** Prospective brides and grooms, families, event hosts, and corporate event planners seeking authoritative catering menus, decor portfolios, and direct communication.
- **Architecture:** Client-side Single Page Application (SPA). There is **no backend or database requirement**. All contact actions are handled through direct client links (`tel:`, `mailto:`, WhatsApp API, and Google Maps).

---

## 2. Features

The website provides a comprehensive, interactive client showcase:

- **Responsive React.js Interface:** Crafted with TypeScript, React 19, and Tailwind CSS for mobile, tablet, laptop, and 4K desktop screens.
- **Premium Wedding & Event Aesthetics:** Royal crimson, warm cream, and gold palette with subtle traditional ornamental accents and typography hierarchy.
- **Sticky Navigation Bar (`Navbar.tsx`):** Fast scroll-to-section navigation with live phone & WhatsApp action triggers and an interactive mobile drawer.
- **Hero Section (`Hero.tsx`):** Visual introduction featuring headline typography, 30+ years culinary trust badge, and instant quotation buttons.
- **About Us Section (`AboutSection.tsx`):** Heritage background, culinary craftsmanship philosophy, hygiene standards, and team expertise.
- **Owners / Our Family Section (`OwnersSection.tsx`):** Profile spotlights for Founder/Executive Chef Haribansh Pandey and managing partner family members.
- **Catering Feasts Section (`CateringSection.tsx`):** Detailed breakdown of North Indian, regional, live counter, and confectionery capabilities.
- **Lighting & Ambience Section (`LightingSection.tsx`):** Architectural illumination, stage trussing, fairy canopy, and mood lighting highlights.
- **Decoration & Mandap Section (`DecorationSection.tsx`):** Floral artistry, royal wedding stage designs, and reception entry gate showcases.
- **Event Planning Section (`EventPlanningSection.tsx`):** End-to-end event execution workflow, timeline coordination, and vendor management.
- **Previous Works / Gallery (`GallerySection.tsx`):** Interactive, category-filtered photo gallery (Catering, Decoration, Lighting, Events).
- **Image Lightbox (`Lightbox.tsx`):** Fullscreen responsive photo viewer with zoom, slide navigation, and keyboard accessibility.
- **Event Highlights / Video Section (`VideoSection.tsx`):** Responsive HTML5 video player with category tabs for viewing event recordings stored locally in MP4 format.
- **Authoritative Veg Menu (`MenuSection.tsx`):** Exact digital representation of the 28-page pure vegetarian menu catalog with category filtering and keyword search.
- **Authoritative Non-Veg Menu (`MenuSection.tsx`):** Exact digital representation of the 12-page non-vegetarian menu catalog with category filtering and keyword search.
- **Full Brochure Viewers & PDF Access (`MenuViewerModal.tsx`):** Modal browser view with instant triggers to download or view the official PDF files located in `/public/menus/`.
- **Direct Phone Calling:** Fast 1-click calls configured with `tel:+919113780293` and `tel:+919693070308`.
- **Direct WhatsApp Messaging:** Pre-formatted instant enquiry chats using WhatsApp Web and mobile links.
- **Direct Email Contact:** `mailto:haribanshpandey2011@gmail.com` direct link.
- **Location & Directions:** Interactive address card with direct Google Maps navigation link.
- **Mobile Sticky Contact Bar (`MobileContactBar.tsx`):** Persistent mobile-friendly bottom bar providing one-tap access to Call, WhatsApp, Menu, and Directions.
- **Smooth Scrolling & Motion Transitions:** Smooth scrolling across all sections and subtle entry transitions powered by `motion/react`.

---

## 3. Tech Stack

The application is built using modern web standards and reliable, production-tested libraries:

| Layer / Tool | Technology | Version / Details |
|---|---|---|
| **Framework** | [React](https://react.dev/) | `^19.0.1` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~5.8.2` |
| **Build Tool & Dev Server** | [Vite](https://vitejs.dev/) | `^6.2.3` |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.1.14` |
| **Tailwind Vite Plugin** | `@tailwindcss/vite` | `^4.1.14` |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.546.0` |
| **Animations** | [Motion](https://motion.dev/) | `^12.23.24` (`motion/react`) |
| **Markup & Typography** | HTML5 Semantic Elements + Google Fonts (Cinzel, Montserrat) | Standard |

---

## 4. Project Structure

The project maintains a modular, decoupled architecture where business data is strictly isolated from presentation components:

```text
├── public/
│   ├── images/
│   │   ├── catering/         # Catering and banqueting photos
│   │   ├── decoration/       # Stage, mandap, floral decor photos
│   │   ├── event-planning/   # Event setup and planning photos
│   │   ├── gallery/          # Categorized gallery showcase images
│   │   ├── hero/             # Hero background banners
│   │   ├── lighting/         # Lighting & ambience photos
│   │   ├── logo/             # Brand logos and iconography
│   │   └── owners/           # Executive Chef and owner portraits
│   ├── menus/
│   │   ├── non-veg-menu.pdf  # Official Non-Vegetarian Menu PDF
│   │   └── veg-menu.pdf      # Official Vegetarian Menu PDF
│   └── videos/               # Event highlight MP4 videos & poster thumbnails
│
├── src/
│   ├── assets/               # Static assets & imports
│   ├── components/           # Extracted UI & section components
│   │   ├── AboutSection.tsx
│   │   ├── CateringSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── DecorationSection.tsx
│   │   ├── EventPlanningSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Hero.tsx
│   │   ├── Lightbox.tsx
│   │   ├── LightingSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── MenuViewerModal.tsx
│   │   ├── MobileContactBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── OwnersSection.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ServicesSection.tsx
│   │   └── VideoSection.tsx
│   │
│   ├── data/                 # Centralized content and menu data structures
│   │   ├── business.ts       # Contact info, address, phone numbers, email
│   │   ├── gallery.ts        # Photo gallery list and metadata
│   │   ├── menu.ts           # Shared menu type exports and helpers
│   │   ├── nonVegMenu.ts     # Complete Non-Veg menu extracted from PDF
│   │   ├── owners.ts         # Founder & management team profile data
│   │   ├── services.ts       # Service descriptions, statistics & highlights
│   │   ├── vegMenu.ts        # Complete Veg menu extracted from PDF
│   │   └── videos.ts         # Video showcase entries and playback metadata
│   │
│   ├── App.tsx               # Root application composition
│   ├── index.css             # Tailwind CSS entry file
│   ├── main.tsx              # React DOM entry point
│   └── types.ts              # TypeScript interfaces and global schemas
│
├── index.html                # HTML entry point with meta tags & Google fonts
├── metadata.json             # Application metadata configuration
├── package.json              # Project dependencies and npm scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite build and plugin configuration
```

---

## 5. Content Management

All website content is managed in clean TypeScript files under `src/data/`. You **never** need to modify JSX or CSS files to update business details or menu items.

| Content to Update | Target File | What You Can Edit |
|---|---|---|
| **Business & Contact Details** | `src/data/business.ts` | Phone numbers, WhatsApp number, email, address, Google Maps link, tagline. |
| **Services & Highlights** | `src/data/services.ts` | Service descriptions, feature lists, experience bullet points. |
| **Owners & Management** | `src/data/owners.ts` | Names, roles, culinary qualifications, bios, phone numbers, and photo paths. |
| **Photo Gallery** | `src/data/gallery.ts` | Gallery image entries, captions, categories (`catering`, `decoration`, `lighting`, `events`). |
| **Event Videos** | `src/data/videos.ts` | Video titles, durations, categories, video file paths (`/videos/...`), and poster thumbnails. |
| **Vegetarian Menu** | `src/data/vegMenu.ts` | Categories, dishes, chef specials, spicy indicators, and official booking terms. |
| **Non-Vegetarian Menu** | `src/data/nonVegMenu.ts` | Categories, non-veg dishes, tandoori starters, curries, biryanis, and terms. |

---

## 6. Adding / Replacing Photos

To replace placeholder images with high-resolution real photographs:

### Step-by-Step Instructions:

1. **Prepare Your Image:** Optimize the image file (recommended format: `.jpg` or `.webp`, under 500 KB).
2. **Place File in Public Directory:** Copy the image into the appropriate subdirectory under `/public/images/`:
   - Hero Banner: `/public/images/hero/hero-bg.jpg`
   - Founder & Owners: `/public/images/owners/chef-haribansh.jpg`, `/public/images/owners/owner-2.jpg`, etc.
   - Catering & Dishes: `/public/images/catering/dish-1.jpg`, etc.
   - Lighting & Ambience: `/public/images/lighting/light-1.jpg`, etc.
   - Stage & Decoration: `/public/images/decoration/stage-1.jpg`, etc.
   - General Gallery: `/public/images/gallery/work-1.jpg`, etc.
3. **Update the Data File Reference:** Open the corresponding data file (`src/data/gallery.ts`, `src/data/owners.ts`, etc.) and set the `imageUrl` field:
   ```typescript
   // Example in src/data/owners.ts
   imageUrl: '/images/owners/chef-haribansh.jpg',
   ```
4. **Verify Locally:** Run `npm run dev` to inspect the updated image in the browser.
5. **Build and Deploy:** Run `npm run build` to package the static assets.

---

## 7. Adding Videos

The website includes a dedicated HTML5 video player component (`VideoSection.tsx`) that streams local `.mp4` video files without external third-party iframe embeds.

### Step-by-Step Instructions:

1. **Prepare the Video File:**
   - Format: **H.264 MP4** for universal browser compatibility.
   - Resolution: 1080p (1920x1080) or 720p (1280x720).
   - Compression: Keep file sizes reasonable (e.g., 5 MB – 25 MB) for smooth web playback.
2. **Save to `/public/videos/`:**
   - Video: `/public/videos/wedding-banquet-highlight.mp4`
   - Poster Thumbnail (recommended): `/public/videos/posters/wedding-banquet-thumb.jpg`
3. **Add Entry in `src/data/videos.ts`:**
   ```typescript
   export const videosData: VideoItem[] = [
     {
       id: 'v-new-1',
       title: 'Grand Royal Wedding Banqueting 2026',
       category: 'catering', // 'catering' | 'decoration' | 'lighting' | 'planning'
       description: 'Live buffet layout, royal setup, and guest banquet service in Dhanbad.',
       videoUrl: '/videos/wedding-banquet-highlight.mp4',
       posterUrl: '/videos/posters/wedding-banquet-thumb.jpg',
       duration: '02:45',
     },
     // ...
   ];
   ```
4. Videos will automatically appear in the filtered grid and play inside the custom video player.

---

## 8. Owner & Family Information

The **Owners / Our Family** section (`src/components/OwnersSection.tsx`) displays the leadership team behind Jagadamba Caterer & Event Planner.

- **Executive Chef Profile:** Chef Haribansh Pandey (S/O Shri Damodar Pandey), Culinary Academy alumni with 30+ years of food business expertise.
- **Managing Partners:** Additional owner and son profiles are structured with editable fields for their specific management divisions (Event Planning, Operations, Logistics).
- **To update details:** Open `src/data/owners.ts` and modify the name, role, bio, and contact numbers.

---

## 9. Menu Management

The menu system is directly based on the authoritative business menu PDFs.

- **`src/data/vegMenu.ts`:** Contains 28 pages worth of authentic pure vegetarian options (Mocktails, Starters, Kebabs, Dals, Curries, Breads & Kulchas, Naans, Raitas, Chaat Bhandar, Salads, Soups, Pulaos, Breakfast items, Desserts, Dry Fruit Sweets, Chhena Sweets, Halwas, Sharbats, and all 27 Live Counter Stations).
- **`src/data/nonVegMenu.ts`:** Contains the complete 12 pages of non-vegetarian catering options (Chicken, Chinese, and Indian Shorbas, Salads, Appetizers, Tandoori Kebabs, Indian Curries, Lamb / Ghost K Tukde, Seafood, Continental mains, Biryanis, and Chinese Noodles).
- **No AI / Dynamic Generation:** The menu is static, verifiable, and strictly sourced from the official caterer PDF documents.
- **Editing Items:** Add, remove, or modify items directly in `src/data/vegMenu.ts` or `src/data/nonVegMenu.ts`. Every item supports optional flags like `isChefSpecial: true` and `isSpicy: true`.

---

## 10. Original Menu PDFs

The official brochure PDFs are stored in `/public/menus/`:

```text
public/
└── menus/
    ├── veg-menu.pdf       # 28-page Vegetarian Menu PDF
    └── non-veg-menu.pdf   # 12-page Non-Vegetarian Menu PDF
```

### To Replace the Menu PDFs:
1. Save your new PDF as `veg-menu.pdf` or `non-veg-menu.pdf`.
2. Overwrite the files in the `public/menus/` directory.
3. The **"View Full Veg Menu"** and **"View Full Non-Veg Menu"** buttons on the website will instantly open the updated PDFs.

---

## 11. Environment Variables

This project **does NOT require any environment variables** for normal operation:

- No AI / GenAI API keys
- No Gemini API key
- No OpenAI API key
- No backend server URL
- No database credentials
- No third-party secret tokens

The project runs completely client-side. A `.env` file is **not needed**.

---

## 12. Installation

Clone the repository and install the dependencies:

```bash
# 1. Clone repository
git clone <repository-url>

# 2. Enter project folder
cd jagadamba-caterer

# 3. Install dependencies
npm install
```

---

## 13. Development

To start the local development server:

```bash
npm run dev
```

The application will start on `http://localhost:3000` (or `0.0.0.0:3000`). Hot reload and fast refresh will be active.

---

## 14. Production Build

To compile the application for production deployment:

```bash
npm run build
```

This triggers the TypeScript compiler (`tsc --noEmit`) and Vite's production bundler, producing optimized static HTML, JavaScript, and CSS bundles inside the `dist/` directory:

```text
dist/
├── assets/          # Bundled JS and CSS chunks
├── images/          # Copied image assets
├── menus/           # Copied PDF menu brochures
├── videos/          # Copied video assets
└── index.html       # Production entry HTML
```

---

## 15. Preview Production Build

To test the generated production build locally before uploading to a host:

```bash
npm run preview
```

This serves the `dist/` directory on a local static server to verify that asset paths, fonts, and links function correctly.

---

## 16. Deployment

Because this is a static Single Page Application (SPA), the contents of `dist/` can be deployed to any modern web hosting service:

### Deployment Pipeline Overview:

```text
React Source Code (TypeScript)
      ↓
npm run build
      ↓
Static Production Bundle (dist/ folder)
      ↓
Static Hosting (Vercel / Netlify / GitHub Pages / Cloudflare Pages / AWS S3)
      ↓
Custom Domain (www.jagadamba.com)
```

### Supported Hosting Platforms:
- **Vercel:** Connect the Git repository; set Build Command to `npm run build` and Output Directory to `dist`.
- **Netlify:** Connect repository; set Build Command to `npm run build` and Publish Directory to `dist`.
- **Cloudflare Pages:** Set framework preset to `Vite`, build command to `npm run build`, and output to `dist`.
- **GitHub Pages:** Deploy the `dist` folder using GitHub Actions or `gh-pages`.

---

## 17. Custom Domain: www.jagadamba.com

To connect your custom domain (e.g. `www.jagadamba.com`):

1. Deploy the project to your chosen static host (e.g., Vercel, Netlify, Cloudflare).
2. In the hosting dashboard's **Domains** section, add `www.jagadamba.com` and `jagadamba.com`.
3. The hosting provider will generate exact DNS records (such as an `A` record for the apex domain and a `CNAME` record pointing to the host's edge server).
4. Log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add the provided DNS records.
5. Allow 5–30 minutes for global DNS propagation.
6. The host will automatically provision a free SSL/TLS certificate (HTTPS) for secure browsing.

---

## 18. No Backend Architecture

To ensure speed, reliability, zero hosting maintenance costs, and maximum security:

- **No Node.js / Express Server:** The website runs purely on the visitor's browser.
- **No Database:** No MongoDB, PostgreSQL, or SQL setup is required.
- **No REST / GraphQL Endpoints:** All interactions are handled directly through standard HTML protocols.
- **No User Logins or Passwords:** The website is a public showcase; visitors do not need accounts.
- **Zero Ongoing Server Maintenance:** Static hosting eliminates database patching, server crashes, and backend security vulnerabilities.

---

## 19. Contact Functionality

All contact and booking actions leverage native device protocols:

- **Phone Calling (`tel:`):**
  - Triggers the native phone dialer on smartphones or calling apps (FaceTime, Skype) on desktop:
  - Primary: `tel:+919113780293`
  - Secondary: `tel:+919693070308`
- **WhatsApp Messaging:**
  - Opens WhatsApp with pre-filled enquiry text requesting wedding catering or decor quotes:
  - URL format: `https://wa.me/919113780293?text=...`
- **Email (`mailto:`):**
  - Opens the user's default email client addressed to `haribanshpandey2011@gmail.com`.
- **Google Maps Navigation:**
  - Directs users to the Chirkunda, Dhanbad location on Google Maps for showroom and kitchen consultations.

---

## 20. Image and Video Performance Recommendations

To ensure rapid load times for guests on mobile connections:

1. **Image Compression:** Compress all JPEG/PNG files using tools like Squoosh or TinyPNG before adding them to `/public/images/`.
2. **Modern Formats:** Prefer `.webp` or optimized `.jpg` files.
3. **Dimensions:** Cap hero banner widths at 1920px. Gallery and card images should be sized around 800px – 1200px width.
4. **Avoid Raw Camera Uploads:** Do not upload uncompressed 20 MB+ camera files directly to `/public/`.
5. **Video Bitrates:** Export MP4 videos using the H.264 codec at 1080p with a target bitrate of 2.5–4 Mbps to keep file sizes under 20 MB.

---

## 21. Responsive Design

The website has been engineered with Tailwind CSS responsive utilities for four distinct viewports:

- **Mobile (< 640px):** Full-width touch-friendly layouts, mobile slide-out navigation menu, and a persistent fixed bottom contact bar (`MobileContactBar.tsx`).
- **Tablet (640px – 1024px):** 2-column service and menu grids, adapted typography, and touch-optimized gallery grids.
- **Desktop (1024px – 1440px):** 3-column feature grids, sticky navbar with direct CTA buttons, side-by-side modal brochure layouts.
- **Ultra-Wide (> 1440px):** Container bounds (`max-w-7xl`) preventing content stretching on large monitors.

---

## 22. Accessibility

The application incorporates key accessibility best practices:

- **Semantic Markup:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags.
- **Descriptive Alt Attributes:** All images in the gallery, menu, and owner profiles contain meaningful `alt` text.
- **Keyboard Navigation:** Modals and lightboxes can be closed using the `Escape` key, and all interactive buttons are focusable.
- **High Contrast:** Text color combinations (deep royal navy `#0C2340`, charcoal `#1F2937`, gold `#D4AF37`, and cream `#F4F7FB`) meet WCAG AA legibility standards.
- **Single-Line Buttons:** All action pills and buttons prevent awkward mid-word line breaks.

---

## 23. Customization Quick Reference

| What I want to change | Where to change it |
|---|---|
| Business Name / Taglines | `src/data/business.ts` |
| Phone Numbers / WhatsApp | `src/data/business.ts` |
| Physical Address / Google Maps URL | `src/data/business.ts` |
| Founder / Executive Chef Bio | `src/data/owners.ts` |
| Owner Photos | `public/images/owners/` and `src/data/owners.ts` |
| Hero Banner Image | `public/images/hero/` and `src/components/Hero.tsx` |
| Services & Experience Highlights | `src/data/services.ts` |
| Gallery Photos & Categories | `public/images/gallery/` and `src/data/gallery.ts` |
| Event Videos & Thumbnails | `public/videos/` and `src/data/videos.ts` |
| Vegetarian Dishes & Categories | `src/data/vegMenu.ts` |
| Non-Vegetarian Dishes & Categories | `src/data/nonVegMenu.ts` |
| Official Menu PDF Files | `public/menus/veg-menu.pdf` & `public/menus/non-veg-menu.pdf` |

---

## 24. Troubleshooting

### 1. `npm install` fails or encounters dependency conflicts:
- Ensure you are using Node.js version 18 or higher (`node -v`).
- Run `npm install --legacy-peer-deps` or delete `node_modules` and `package-lock.json` and retry.

### 2. Development server port already in use:
- By default Vite runs on port 3000 (`--port=3000`). If port 3000 is occupied, stop any running instances or run `npx kill-port 3000`.

### 3. Image or video not appearing on the website:
- Verify that the file exists in the `/public/` directory (e.g. `/public/images/gallery/photo.jpg`).
- Verify that the path in the TypeScript data file starts with a leading slash without the word `public` (e.g., `imageUrl: '/images/gallery/photo.jpg'`).

### 4. PDF download link doesn't open:
- Verify that `veg-menu.pdf` and `non-veg-menu.pdf` exist inside `/public/menus/`.
- Clear your browser cache or test in an incognito window.

### 5. `npm run build` throws TypeScript errors:
- Run `npm run lint` (`tsc --noEmit`) to see the exact file and line number causing the type mismatch.
- Ensure all added items in `src/data/` adhere to the TypeScript interfaces defined in `src/types.ts`.

---

## 25. Project Principles

1. **Separation of Concerns:** Keep all business content in `src/data/` rather than hardcoding text in UI components.
2. **Authentic Data Sourcing:** Never invent fake menu items, prices, or false certifications; keep menu files synced with the official catering PDFs.
3. **No Unnecessary Infrastructure:** Avoid adding backend servers, authentication, or external databases to a client-side presentation website.
4. **Lightweight & Fast:** Maintain fast load times with compressed static assets and minimal bundle size.
5. **Real Photography First:** Replace placeholders with actual event photographs of Jagadamba Caterer's wedding setups and dishes as they become available.

---

## 26. Content Integrity Rule

This project does not use fabricated business claims or fictitious awards. All culinary specializations, founder backgrounds, and menu selections are sourced directly from the official Jagadamba Caterer catering materials and menu catalog.

---

## 27. License & Ownership

This project is a custom business website developed for **Jagadamba Caterer & Event Planner**. All business names, branding, photographs, menus, and marketing materials are proprietary to their respective owners.
