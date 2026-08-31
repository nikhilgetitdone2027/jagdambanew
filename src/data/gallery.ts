import { GalleryItem } from '../types';

/**
 * =========================================================================
 * JAGADAMBA CATERER - GALLERY / PREVIOUS WORKS DATA
 * =========================================================================
 * You can easily add, edit, or reorder your photographs here.
 * Place your own images in:
 *   - /public/images/gallery/
 *   - /public/images/catering/
 *   - /public/images/lighting/
 *   - /public/images/decoration/
 *   - /public/images/events/
 *
 * Supported categories:
 *   - 'catering'
 *   - 'lighting'
 *   - 'decoration'
 *   - 'events'
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Grand Royal Wedding Buffet',
    category: 'catering',
    categoryLabel: 'Catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Luxurious multi-course banquet setup with brass chafing dishes, live counter displays, and royal dining presentation.',
    aspect: 'landscape',
  },
  {
    id: 'g2',
    title: 'Illuminated Mandap & Stage Decor',
    category: 'decoration',
    categoryLabel: 'Decoration',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Grand wedding stage crafted with fresh floral garlands, royal royal sapphire blue drapes, and warm amber ambient lighting.',
    aspect: 'portrait',
  },
  {
    id: 'g3',
    title: 'Fairy Light Canopy Tunnel',
    category: 'lighting',
    categoryLabel: 'Lighting',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    caption: 'Breathtaking 100-foot illuminated pathway with golden twinkling fairy lights for a royal guest entrance.',
    aspect: 'landscape',
  },
  {
    id: 'g4',
    title: 'Live Tandoor & Chaat Station',
    category: 'catering',
    categoryLabel: 'Catering',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    caption: 'Interactive live cooking stations serving sizzling paneer tikkas, crispy kebabs, and authentic banarasi chaats.',
    aspect: 'square',
  },
  {
    id: 'g5',
    title: 'Celebration Lawn & Ambient Setup',
    category: 'events',
    categoryLabel: 'Events',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Full-scale lawn banquet planning including VIP round-table arrangements, stage backdrop, and seamless hospitality.',
    aspect: 'landscape',
  },
  {
    id: 'g6',
    title: 'Floral Archway Entrance',
    category: 'decoration',
    categoryLabel: 'Decoration',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    caption: 'Majestic wedding entrance adorned with fresh cascading roses, orchids, and warm traditional brass diyas.',
    aspect: 'portrait',
  },
  {
    id: 'g7',
    title: 'Crystal Chandelier & Architectural Lighting',
    category: 'lighting',
    categoryLabel: 'Lighting',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    caption: 'Overhead crystal chandelier clusters paired with color-synchronized LED stage washes for an enchanting evening.',
    aspect: 'square',
  },
  {
    id: 'g8',
    title: 'Gourmet Indian Sweet Counter',
    category: 'catering',
    categoryLabel: 'Catering',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=80',
    caption: 'Artisanal mithai display with hot Kesariya Jalebi, Angoori Rasmalai, and mawa delicacies prepared in pure desi ghee.',
    aspect: 'landscape',
  },
  {
    id: 'g9',
    title: 'Royal Sangeet & Reception Night',
    category: 'events',
    categoryLabel: 'Events',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    caption: 'Coordinated production for high-energy Sangeet ceremony with dynamic beam lighting and audio-visual stage synchronization.',
    aspect: 'landscape',
  },
];
