import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { videosData } from '../data/videos';
import { VideoItem } from '../types';
import { Play, Maximize2, Film, Sparkles, X, ExternalLink, Tv } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'youtube', label: 'YouTube Showcase' },
    { id: 'wedding', label: 'Wedding Setup' },
    { id: 'catering', label: 'Catering & Counters' },
    { id: 'decoration', label: 'Mandap & Decor' },
    { id: 'lighting', label: 'Lighting & Ambience' },
  ];

  const filteredVideos =
    activeCategory === 'all'
      ? videosData
      : activeCategory === 'youtube'
      ? videosData.filter((v) => Boolean(v.youtubeId))
      : videosData.filter(
          (v) => v.category === activeCategory || (activeCategory === 'wedding' && v.category === 'events')
        );

  return (
    <section id="videos" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--theme-accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Cinematic Event Tours"
          title="EVENT HIGHLIGHTS & LIVE REELS"
          subtitle="Experience the grandeur of our live banquet counters, bespoke mandap decorations, and illuminated celebratory evenings."
        />

        {/* Category Filter Pills & YouTube Channel Banner */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-sans font-black tracking-wider transition-all duration-200 border-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] text-black border-[var(--theme-accent)] shadow-lg scale-105'
                    : 'bg-[var(--theme-canvas-surface)] text-[var(--theme-accent-light)] border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <a
            href="https://www.youtube.com/@jagadambacaterereventplann607"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-red-950/80 hover:bg-red-900 border-2 border-red-500 text-red-200 text-xs font-black tracking-wide transition-all shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Visit Official Channel: @jagadambacaterereventplann607</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => {
            const isPlaying = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className="rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  {isPlaying ? (
                    video.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={video.videoSrc}
                        poster={video.poster}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                        onError={() => {
                          console.log('Video src not found locally:', video.videoSrc);
                        }}
                      >
                        Your browser does not support HTML5 video.
                      </video>
                    )
                  ) : (
                    <div className="relative w-full h-full">
                      {video.poster ? (
                        <img
                          src={video.poster}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                          onError={(e) => {
                            // Fallback poster if remote img fails
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/decoration/outdoor-live-buffet.jpg';
                          }}
                        />
                      ) : (
                        <video
                          src={`${video.videoSrc}#t=0.5`}
                          preload="metadata"
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Play Button Overlay */}
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(video.id)}
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--theme-accent-dark)] to-[var(--theme-accent)] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-amber-200 cursor-pointer"
                        aria-label={`Play ${video.title}`}
                      >
                        <Play className="w-7 h-7 fill-current ml-1 text-black" />
                      </button>

                      {/* YouTube Tag or Duration Badge */}
                      {video.youtubeId ? (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-sm bg-red-600 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Tv className="w-3.5 h-3.5" />
                          YouTube Video
                        </div>
                      ) : (
                        video.duration && (
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-sm bg-black/80 text-white border border-white/30 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                            <Film className="w-3 h-3 text-[var(--theme-accent)]" />
                            {video.duration}
                          </div>
                        )
                      )}

                      {/* Category Tag */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/40 text-[10px] font-black text-[var(--theme-accent-light)] uppercase tracking-wider shadow-xs">
                        {video.categoryLabel}
                      </div>

                      {/* Fullscreen Modal View Trigger */}
                      <button
                        type="button"
                        onClick={() => setModalVideo(video)}
                        className="absolute top-3 right-3 p-2 rounded-sm bg-black/70 border border-white/40 text-white hover:bg-black hover:text-[var(--theme-accent)] transition-colors cursor-pointer"
                        title="Expand Video"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-5 sm:p-6 bg-[var(--theme-canvas-surface)] border-t border-[var(--theme-accent)]/20 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors">
                        {video.title}
                      </h3>
                      {video.youtubeUrl && (
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 p-1 rounded text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                          title="Open in YouTube"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed mb-4">
                      {video.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[var(--theme-accent)]/20 text-xs text-[var(--theme-accent-light)] font-black">
                    <span className="flex items-center gap-1.5">
                      {video.youtubeId ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="text-red-400">Official YouTube Channel</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                          <span>Event Highlight</span>
                        </>
                      )}
                    </span>
                    <div className="flex items-center gap-3">
                      {video.youtubeUrl && (
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-400 hover:text-red-300 font-black uppercase tracking-wider hover:underline"
                        >
                          Watch on YouTube
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          if (isPlaying) {
                            setPlayingVideoId(null);
                          } else {
                            setPlayingVideoId(video.id);
                          }
                        }}
                        className="font-black uppercase tracking-wider text-[var(--theme-accent)] underline hover:text-[var(--theme-accent-light)] transition-colors cursor-pointer"
                      >
                        {isPlaying ? 'Close Player' : 'Play Here'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Modal Video Player */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-[var(--theme-canvas-surface)] rounded-sm border-2 border-[var(--theme-accent)]/60 overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-[var(--theme-primary-surface)] border-b border-[var(--theme-accent)]/30">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[var(--theme-accent)]">
                  {modalVideo.categoryLabel}
                </span>
                <h4 className="font-cinzel text-base sm:text-lg font-black text-white">
                  {modalVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalVideo(null)}
                className="p-2 rounded-sm text-slate-300 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Element */}
            <div className="relative aspect-video bg-black">
              {modalVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0`}
                  title={modalVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={modalVideo.videoSrc}
                  poster={modalVideo.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[var(--theme-canvas-surface)] text-xs text-[var(--theme-text-muted)] font-medium border-t border-[var(--theme-accent)]/20 flex items-center justify-between">
              <span>{modalVideo.description}</span>
              {modalVideo.youtubeUrl && (
                <a
                  href={modalVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-red-600 text-white rounded text-[11px] font-black uppercase tracking-wider shrink-0 ml-4 hover:bg-red-700 transition-colors"
                >
                  Open in YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
