import { OwnerProfile } from '../types';

/**
 * =========================================================================
 * JAGADAMBA CATERER - OWNERS / OUR FAMILY DATA
 * =========================================================================
 * You can easily update names, roles, bios, contact details, and photos here.
 * Place photos in:
 *   - /public/images/owners/founder.jpg
 *   - /public/images/owners/son-1.jpg
 *   - /public/images/owners/son-2.jpg
 */
export const ownersData: OwnerProfile[] = [
  {
    id: 'founder',
    name: 'Damodar Pandey',
    role: 'Founder',
    relationship: 'Founder & Culinary Director',
    bio: 'With ~30 years of deep culinary experience in royal banquets, Damodar Pandey oversees every recipe, specialized spice blend, and customized client menu to ensure supreme flavor and tradition.',
    experience: '30+ Years Experience',
    image: '/images/owners/founder.jpg',
    isFounder: true,
    contactNote: '+91 9934567273',
  },
  {
    id: 'son-1',
    name: 'Chef Haribansh Pandey',
    role: 'Managing Director & Master Chef',
    relationship: 'Son & Executive Chef',
    bio: 'Leading master chef and operations head overseeing live banquet counters, authentic flavor execution, ingredient purity, and seamless kitchen logistics across every grand wedding and celebration.',
    experience: 'Master Chef & Operations Head',
    image: '/images/owners/son-1.jpg',
    isFounder: false,
    contactNote: 'Direct Desk: +91 91137 80293',
  },
  {
    id: 'son-2',
    name: 'Subansh Pandey',
    role: 'Event & Decor Director',
    relationship: 'Son & Production Head',
    bio: 'Manages client consultations, bespoke floral themes, atmospheric stage lighting integration, and venue transformation to bring every celebration to life with royal grandeur.',
    experience: 'Decor & Production Head',
    image: '/images/owners/son-2.jpg',
    isFounder: false,
    contactNote: 'Direct Desk: +91 96930 70308',
  },
];
