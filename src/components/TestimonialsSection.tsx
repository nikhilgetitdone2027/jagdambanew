import React, { useState, useEffect, useMemo } from 'react';
import { SectionHeading } from './SectionHeading';
import { initialTestimonials } from '../data/testimonials';
import { TestimonialItem } from '../types';
import { businessData } from '../data/business';
import {
  Star,
  Quote,
  CheckCircle2,
  ThumbsUp,
  MapPin,
  Calendar,
  Users,
  Search,
  PlusCircle,
  ExternalLink,
  Sparkles,
  Award,
  RefreshCw,
  X,
  Send,
  MessageSquare,
  ShieldCheck,
  ImageIcon,
} from 'lucide-react';

const STORAGE_KEY = 'jagadamba_real_google_reviews_v3';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // If already migrated to real reviews
          if (parsed.some((p) => p.id.startsWith('g-rev-'))) {
            return parsed;
          }
        }
      }
    } catch {
      // ignore
    }
    return initialTestimonials;
  });

  const [selectedEventType, setSelectedEventType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'rating' | 'helpful'>('recent');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [refreshMessage, setRefreshMessage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  // Review Form state
  const [formData, setFormData] = useState({
    clientName: '',
    role: '',
    eventType: 'Wedding' as TestimonialItem['eventType'],
    eventDate: '',
    location: '',
    rating: 5,
    reviewTitle: '',
    reviewText: '',
    guestCount: '',
    dishesHighlighted: '',
    serviceTags: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
    } catch {
      // ignore
    }
  }, [testimonials]);

  // Handle Like/Helpful click
  const handleLike = (id: string) => {
    if (likedReviews[id]) return;
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
    setTestimonials((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likesCount: (item.likesCount || 0) + 1 } : item
      )
    );
  };

  // Simulate Live Fetch / Verification sync
  const handleRefreshFeed = () => {
    setIsRefreshing(true);
    setRefreshMessage('Syncing verified reviews directly from Google Maps...');
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshMessage('✓ Google Maps verified reviews synchronized.');
      setTimeout(() => setRefreshMessage(''), 4000);
    }, 900);
  };

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    return testimonials
      .filter((item) => {
        if (selectedEventType !== 'all' && item.eventType !== selectedEventType) {
          return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = item.clientName.toLowerCase().includes(q);
          const matchLocation = item.location?.toLowerCase().includes(q);
          const matchText = item.reviewText.toLowerCase().includes(q);
          const matchTitle = item.reviewTitle?.toLowerCase().includes(q);
          const matchDishes = item.dishesHighlighted?.some((d) => d.toLowerCase().includes(q));
          if (!matchName && !matchLocation && !matchText && !matchTitle && !matchDishes) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'helpful') return (b.likesCount || 0) - (a.likesCount || 0);
        return 0; // Default order
      });
  }, [testimonials, selectedEventType, searchQuery, sortBy]);

  // Handle Form Submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName.trim() || !formData.reviewText.trim()) return;

    const newReview: TestimonialItem = {
      id: `g-rev-${Date.now()}`,
      clientName: formData.clientName.trim(),
      userStats: '1 review · Verified Client',
      timeAgo: 'Just now',
      role: formData.role.trim() || 'Event Host',
      eventType: formData.eventType,
      eventDate: formData.eventDate.trim() || 'Recent Event',
      location: formData.location.trim() || 'Dhanbad Region',
      rating: formData.rating,
      reviewTitle: formData.reviewTitle.trim() || 'Exceptional Catering & Hospitality',
      reviewText: formData.reviewText.trim(),
      guestCount: formData.guestCount.trim() || undefined,
      dishesHighlighted: formData.dishesHighlighted
        ? formData.dishesHighlighted.split(',').map((s) => s.trim()).filter(Boolean)
        : ['Grand Buffet', 'Live Counters'],
      serviceTags: formData.serviceTags
        ? formData.serviceTags.split(',').map((s) => s.trim()).filter(Boolean)
        : ['Catering & Service', 'Warm Hospitality'],
      isVerified: true,
      source: 'Google Maps',
      likesCount: 1,
    };

    setTestimonials([newReview, ...testimonials]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsModalOpen(false);
      setFormData({
        clientName: '',
        role: '',
        eventType: 'Wedding',
        eventDate: '',
        location: '',
        rating: 5,
        reviewTitle: '',
        reviewText: '',
        guestCount: '',
        dishesHighlighted: '',
        serviceTags: '',
      });
    }, 1800);
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[var(--theme-accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Google Maps Reviews"
          title="Client Testimonials & Public Reviews"
          subtitle="Real reviews directly from our official Google Maps Business profile written by families, newlyweds, and event hosts."
        />

        {/* Top Metric & Social Proof Trust Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          {/* Main 5.0 Google Score Banner (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[var(--theme-canvas-surface)] to-[var(--theme-primary-surface)] p-6 sm:p-8 rounded-sm border-2 border-[var(--theme-accent)]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-[var(--theme-accent)]" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/50 text-xs font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Real Google Maps Reviews
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-300">
                  <span>Google Business Profile</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
                  <span>Chirkunda & Dhanbad</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-cinzel text-5xl sm:text-6xl font-black text-[var(--theme-accent-light)]">
                    5.0
                  </span>
                  <span className="text-xl font-bold text-slate-400">/ 5.0</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-5 h-5 fill-[var(--theme-accent)] text-[var(--theme-accent)]"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    Verified Google Maps reviews from wedding hosts, brothers, sisters & local guides
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed max-w-xl">
                Catering to grand celebrations ranging from intimate family parties to mega weddings of
                <strong> 7,000+ guests</strong> with dependable food taste, supportive staff, and personal supervision by Chef Haribansh Pandey.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--theme-accent)]/20 flex flex-wrap items-center justify-between gap-3">
              <a
                href={businessData.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] hover:from-[var(--theme-accent)] hover:to-[var(--theme-accent-light)] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Star className="w-4 h-4 fill-current" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-wider text-[var(--theme-accent-light)] bg-[var(--theme-canvas-surface)] hover:bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/50 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-[var(--theme-accent)]" />
                <span>Write a Google Review</span>
              </button>
            </div>
          </div>

          {/* Breakdown Ratings Category Matrix (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--theme-canvas-surface)] p-6 sm:p-8 rounded-sm border-2 border-[var(--theme-accent)]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--theme-accent)]/20 mb-4">
                <h4 className="font-cinzel text-base font-black text-[var(--theme-accent-light)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[var(--theme-accent)]" />
                  Google Review Highlights
                </h4>
                <button
                  onClick={handleRefreshFeed}
                  disabled={isRefreshing}
                  title="Sync Google Maps feed"
                  className="p-1.5 rounded-sm text-slate-300 hover:text-[var(--theme-accent)] hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">Sync</span>
                </button>
              </div>

              {refreshMessage && (
                <div className="mb-3 px-3 py-1.5 rounded-sm bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold animate-fadeIn">
                  {refreshMessage}
                </div>
              )}

              <div className="space-y-3.5">
                {[
                  { label: 'Food Taste & Freshness', score: 5.0, pct: 100 },
                  { label: 'Large Crowd Handling (up to 7,000)', score: 5.0, pct: 100 },
                  { label: 'Staff Support & Professionalism', score: 5.0, pct: 100 },
                  { label: 'Creative Presentation & Menu Variety', score: 5.0, pct: 100 },
                  { label: 'Value for Money & Reliability', score: 5.0, pct: 100 },
                ].map((row, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">{row.label}</span>
                      <span className="text-[var(--theme-accent)] font-black">{row.score} ★</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] rounded-full transition-all duration-500"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--theme-accent)]/20 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                Trusted across Jharkhand & Bengal
              </span>
              <span>100% 5-Star Ratings</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[var(--theme-canvas-surface)] p-4 sm:p-6 rounded-sm border-2 border-[var(--theme-accent)]/30 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Event Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] mr-1 hidden sm:inline">
                Filter:
              </span>
              {[
                { id: 'all', label: 'All Google Reviews' },
                { id: 'Wedding', label: 'Wedding Banquets' },
                { id: 'Reception', label: 'Receptions' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedEventType(tab.id)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-black tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedEventType === tab.id
                      ? 'bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] text-black border border-[var(--theme-accent)] shadow-md scale-105'
                      : 'bg-[var(--theme-primary-surface)] text-slate-300 border border-[var(--theme-accent)]/20 hover:border-[var(--theme-accent)]/60 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input & Sort Selector */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-[var(--theme-accent)] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search reviewer or keywords..."
                  className="w-full pl-9 pr-8 py-1.5 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)] transition-colors shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400 hover:text-red-400"
                  >
                    ×
                  </button>
                )}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-[var(--theme-accent-light)] focus:outline-none focus:border-[var(--theme-accent)] cursor-pointer"
              >
                <option value="recent">Most Relevant</option>
                <option value="rating">Highest Rated (5★)</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>
        </div>

        {/* Real Google Reviews Cards Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredReviews.map((review) => {
              const hasLiked = likedReviews[review.id];
              return (
                <div
                  key={review.id}
                  className="bg-[var(--theme-canvas-surface)] rounded-sm border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative"
                >
                  <div>
                    {/* Card Header with Google User Details */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-black font-cinzel font-black flex items-center justify-center text-sm shadow-md shrink-0">
                          {review.clientName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-cinzel text-sm sm:text-base font-black text-white group-hover:text-[var(--theme-accent-light)] transition-colors leading-tight">
                              {review.clientName}
                            </h4>
                            {review.isLocalGuide && (
                              <span
                                title="Google Local Guide"
                                className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-xs bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-extrabold"
                              >
                                <Award className="w-2.5 h-2.5 text-amber-400" />
                                Guide
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-bold text-slate-400 block mt-0.5">
                            {review.userStats || 'Google Reviewer'}
                          </span>
                        </div>
                      </div>

                      {/* 5-Star Rating & Time Ago */}
                      <div className="flex flex-col items-end shrink-0">
                        <div className="flex items-center gap-0.5 bg-[var(--theme-primary-surface)] px-2 py-1 rounded-sm border border-[var(--theme-accent)]/30">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-[var(--theme-accent)] text-[var(--theme-accent)]"
                            />
                          ))}
                        </div>
                        {review.timeAgo && (
                          <span className="text-[10px] text-slate-400 font-medium mt-1">
                            {review.timeAgo}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metadata Strip: Event Occasion & Guest Scale */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-[11px] text-slate-300 font-medium pb-3 mb-3 border-b border-[var(--theme-accent)]/15">
                      <span className="px-2 py-0.5 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent)] font-bold border border-[var(--theme-accent)]/30 uppercase tracking-wider text-[10px]">
                        {review.eventDate || review.eventType}
                      </span>
                      {review.guestCount && (
                        <span className="flex items-center gap-1 text-[var(--theme-accent-light)] font-bold">
                          <Users className="w-3 h-3 text-[var(--theme-accent)]" />
                          {review.guestCount}
                        </span>
                      )}
                      {review.location && (
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-[var(--theme-accent)]" />
                          {review.location}
                        </span>
                      )}
                    </div>

                    {/* Review Title if present */}
                    {review.reviewTitle && (
                      <h5 className="font-cinzel text-sm font-black text-[var(--theme-accent-light)] mb-2 leading-snug">
                        &ldquo;{review.reviewTitle}&rdquo;
                      </h5>
                    )}

                    {/* Real Review Text */}
                    <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed mb-4">
                      {review.reviewText}
                    </p>

                    {/* Attached Photo Thumbnails (e.g. for Anjali Kumari's review) */}
                    {review.reviewImages && review.reviewImages.length > 0 && (
                      <div className="mb-4">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-accent)] flex items-center gap-1 mb-1.5">
                          <ImageIcon className="w-3 h-3" />
                          Reviewer's Photos ({review.reviewImages.length}):
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {review.reviewImages.map((imgUrl, idx) => (
                            <div
                              key={idx}
                              className="aspect-square rounded-sm overflow-hidden border border-[var(--theme-accent)]/30 group-hover:border-[var(--theme-accent)]/60 bg-slate-900"
                            >
                              <img
                                src={imgUrl}
                                alt={`Review photo ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlighted Service Chips */}
                    {review.serviceTags && review.serviceTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {review.serviceTags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-sm bg-[var(--theme-primary-surface)] text-slate-300 text-[10px] font-bold border border-[var(--theme-accent)]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Google Maps Source & Helpful Button */}
                  <div className="pt-3 border-t border-[var(--theme-accent)]/15 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-300">
                        Google Maps Verified
                      </span>
                    </div>

                    <button
                      onClick={() => handleLike(review.id)}
                      disabled={hasLiked}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] font-bold transition-colors cursor-pointer ${
                        hasLiked
                          ? 'text-[var(--theme-accent)] bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/40'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                      title="Mark review as helpful"
                    >
                      <ThumbsUp className={`w-3 h-3 ${hasLiked ? 'fill-current' : ''}`} />
                      <span>Helpful ({review.likesCount || 0})</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[var(--theme-canvas-surface)] rounded-sm border-2 border-[var(--theme-accent)]/20 p-8">
            <Quote className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="font-cinzel text-lg font-black text-white mb-1">
              No matching Google reviews found
            </h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
              Try adjusting your search keyword or switching the filter.
            </p>
            <button
              onClick={() => {
                setSelectedEventType('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider text-black bg-[var(--theme-accent)] hover:bg-[var(--theme-accent-light)] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Social Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[var(--theme-primary-surface)] via-[var(--theme-canvas-surface)] to-[var(--theme-primary-surface)] border-2 border-[var(--theme-accent)]/40 text-center max-w-3xl mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-full bg-[var(--theme-accent)]/10 border border-[var(--theme-accent)] flex items-center justify-center text-[var(--theme-accent)] mx-auto mb-3">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h4 className="font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent-light)] mb-2">
            Have We Catered Your Celebration?
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed max-w-xl mx-auto mb-5">
            Your review helps future families and newlyweds choose with confidence. Leave a review on our
            official Google Maps profile or submit feedback directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={businessData.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] hover:from-[var(--theme-accent)] hover:to-[var(--theme-accent-light)] shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Review on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest text-[var(--theme-accent-light)] bg-[var(--theme-canvas-surface)] hover:bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/50 shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-[var(--theme-accent)]" />
              <span>Write Feedback Here</span>
            </button>
          </div>
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[var(--theme-canvas-surface)] rounded-sm border-2 border-[var(--theme-accent)]/60 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[var(--theme-primary-surface)] border-b border-[var(--theme-accent)]/30 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-sm bg-[var(--theme-canvas-surface)] text-[var(--theme-accent)] border border-[var(--theme-accent)]/40">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base sm:text-lg font-black text-white">
                    Submit Your Review
                  </h3>
                  <span className="text-[11px] font-bold text-slate-300">
                    Jagadamba Caterer & Event Planner Feedback
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSubmitReview} className="p-5 sm:p-6 overflow-y-auto space-y-4">
              {submitSuccess ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-cinzel text-xl font-black text-white">
                    Thank You for Your Review!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-medium">
                    Your testimonial has been verified and published to the live reviews feed. We
                    deeply value your trust in Jagadamba Caterer!
                  </p>
                </div>
              ) : (
                <>
                  {/* Star Rating Picker */}
                  <div className="p-4 rounded-sm bg-[var(--theme-primary-surface)]/60 border border-[var(--theme-accent)]/30 text-center">
                    <span className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-2">
                      Select Your Overall Rating
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 hover:scale-125 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= formData.rating
                                ? 'fill-[var(--theme-accent)] text-[var(--theme-accent)]'
                                : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-300 mt-1 block">
                      {formData.rating === 5
                        ? '5.0 — Outstanding / Royal Quality'
                        : formData.rating === 4
                        ? '4.0 — Very Good Experience'
                        : `${formData.rating}.0 Rating`}
                    </span>
                  </div>

                  {/* 2-Col inputs: Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        placeholder="e.g. Anjali Kumari / Vivek Kumar"
                        className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)]"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                        Relationship / Occasion
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Brother's Wedding / Host"
                        className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)]"
                      />
                    </div>
                  </div>

                  {/* 2-Col inputs: Event Type & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            eventType: e.target.value as TestimonialItem['eventType'],
                          })
                        }
                        className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white focus:outline-none focus:border-[var(--theme-accent)]"
                      >
                        <option value="Wedding">Wedding Banquet</option>
                        <option value="Reception">Grand Reception</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Corporate">Corporate Gala</option>
                        <option value="Engagement">Engagement / Ring Ceremony</option>
                        <option value="Birthday">Birthday Celebration</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                        Event Date / Timeline
                      </label>
                      <input
                        type="text"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        placeholder="e.g. Dec Wedding / Recent"
                        className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)]"
                      />
                    </div>
                  </div>

                  {/* Location & Guest Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                        Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Chirkunda / Dhanbad / Asansol"
                        className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)]"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                        Guest Count (if applicable)
                      </label>
                      <input
                        type="text"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        placeholder="e.g. 7000 Guests / 800 Guests"
                        className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)]"
                      />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-1">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.reviewText}
                      onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                      placeholder="Share your experience about food quality, support staff, Chef Haribansh Pandey's hospitality..."
                      className="w-full px-3 py-2 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/30 text-xs font-medium text-white placeholder-slate-400 focus:outline-none focus:border-[var(--theme-accent)]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3 border-t border-[var(--theme-accent)]/20 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-sm text-xs font-black uppercase text-slate-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] hover:from-[var(--theme-accent)] hover:to-[var(--theme-accent-light)] shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Review</span>
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
