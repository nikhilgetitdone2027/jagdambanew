import { VideoItem } from '../types';

/**
 * =========================================================================
 * JAGADAMBA CATERER - EVENT VIDEOS & HIGHLIGHTS DATA
 * =========================================================================
 * You can easily add your own local MP4 videos here.
 * Place video files in:
 *   - /public/videos/event-highlight.mp4
 *   - /public/videos/catering-showcase.mp4
 *   - /public/videos/venue-decor-highlight.mp4
 *   - /public/videos/lighting-ambience.mp4
 *
 * Supported categories:
 *   - 'events' / 'wedding'
 *   - 'catering'
 *   - 'decoration'
 *   - 'lighting'
 */
export const videosData: VideoItem[] = [
  {
    id: 'yt-1',
    title: 'Grand Wedding Event & Banquet Highlights',
    category: 'wedding',
    categoryLabel: 'YouTube Showcase',
    youtubeId: 'Fcy63uuIth8',
    youtubeUrl: 'https://youtu.be/Fcy63uuIth8?si=Erg13D-49XQB358G',
    poster: 'https://img.youtube.com/vi/Fcy63uuIth8/hqdefault.jpg',
    duration: 'YouTube Video',
    description:
      'Watch the vibrant celebration atmosphere, regal event arrangements, and warm guest hospitality curated by Jagadamba Caterer & Event Planner.',
  },
  {
    id: 'yt-2',
    title: 'Live Banquet Counters, Decor & Catering Tour',
    category: 'catering',
    categoryLabel: 'YouTube Showcase',
    youtubeId: 's_EXeJ0GU6w',
    youtubeUrl: 'https://youtu.be/s_EXeJ0GU6w?si=AItItlKGTAB_TrkW',
    poster: 'https://img.youtube.com/vi/s_EXeJ0GU6w/hqdefault.jpg',
    duration: 'YouTube Video',
    description:
      'Take an exclusive tour of our signature food presentation, live counter stations, royal buffet displays, and illuminated evening decor.',
  },
  {
    id: 'vid-1',
    title: 'Celebration Highlights & Hospitality',
    category: 'wedding',
    categoryLabel: 'Wedding Setup',
    videoSrc: '/videos/event-highlight.mp4',
    poster: '/images/decoration/outdoor-live-buffet.jpg',
    duration: 'Event Highlights',
    description: 'A look at the welcoming atmosphere, coordinated service, and memorable moments that bring a family celebration together.',
  },
  {
    id: 'vid-2',
    title: 'Live Catering Counter Showcase',
    category: 'catering',
    categoryLabel: 'Catering Live Counters',
    videoSrc: '/videos/catering-showcase.mp4',
    poster: '/images/decoration/lantern-lit-buffet.jpg',
    duration: 'Catering Reel',
    description: 'Watch our catering presentation in action, from thoughtfully arranged buffet counters to attentive service for every guest.',
  },
  {
    id: 'vid-3',
    title: 'Venue Décor & Buffet Presentation',
    category: 'decoration',
    categoryLabel: 'Floral Decoration',
    videoSrc: '/videos/venue-decor-highlight.mp4',
    poster: '/images/decoration/royal-buffet-counter.jpg',
    duration: 'Décor Tour',
    description: 'A showcase of festive venue styling, illuminated buffet presentation, and the details that give every event its own character.',
  },
  {
    id: 'vid-4',
    title: 'Grand Wedding Celebration Reel & Festive Moments',
    category: 'wedding',
    categoryLabel: 'Celebration Reel',
    videoSrc: '/videos/celebration-reel.mp4',
    duration: 'Celebration Reel',
    description: 'Experience the splendor, joyful gatherings, dynamic banquet counters, and magnificent festive moments captured live at our grand wedding celebrations.',
  },
];
