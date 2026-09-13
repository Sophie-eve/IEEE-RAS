import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { EVENTS_DATA, EventItem } from '../data/eventsData';
import { EventCard } from '../components/cards/EventCard';
import { EventModal } from '../components/interactive/EventModal';
import { Calendar, Search, Filter, Award, Sparkles, MapPin, ExternalLink } from 'lucide-react';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Conferences', 'Workshops', 'Webinars', 'Competitions'];

  const filteredEvents = EVENTS_DATA.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="OFFICIAL IEEE RAS GATHERINGS & SYMPOSIUMS"
        title="Conferences, Workshops & Competitions"
        description="Connect with the international robotics research community at IEEE RAS fully sponsored and financially co-sponsored flagship conferences, educational schools, and grand challenges."
        breadcrumb="Events"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ================= CONTROLS & FILTER BAR ================= */}
        <div className="tech-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-code text-slate-500 uppercase mr-1 hidden sm:inline flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> FILTER:
              </span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-code font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search conferences, cities, tracks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#050914] border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-code text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-code text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Showing {filteredEvents.length} Verified IEEE RAS Events</span>
            <span className="text-slate-500 hidden sm:inline">
              Includes ICRA, IROS, CASE & Student Grand Challenges
            </span>
          </div>
        </div>

        {/* ================= EVENTS GRID ================= */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={(ev) => setActiveModalEvent(ev)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#070d1a] rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 font-code text-sm">No events found matching "{searchQuery}" in category "{selectedCategory}".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-code text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ================= CALL FOR PAPERS & SPONSORSHIP CALLOUT ================= */}
        <div className="tech-card rounded-2xl p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              CONFERENCE ORGANIZER & PROPOSAL PORTAL
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Interested in Hosting an IEEE RAS Workshop or Symposium?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Technical Committees and university chapters may submit proposals for seasonal schools, workshops, and specialized symposia with IEEE RAS financial co-sponsorship.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              href="https://www.ieee-ras.org/conferences-workshops/organizers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition shadow-md shadow-cyan-500/20"
            >
              <span>Submit Workshop Proposal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.ieee-ras.org/conferences-workshops"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-code text-xs hover:border-slate-500 transition"
            >
              Full Society Conference Archive
            </a>
          </div>
        </div>
      </div>

      {/* Modal View */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </div>
  );
};
