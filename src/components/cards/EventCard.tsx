import React from 'react';
import { EventItem } from '../../data/eventsData';
import { Calendar, MapPin, Award, ArrowUpRight, Clock } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  onSelect: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  return (
    <div className="tech-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group relative overflow-hidden">
      {/* Top Banner for Flagship */}
      {event.isFlagship && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500/20 to-transparent border-l border-b border-cyan-500/30 px-3 py-1 rounded-bl-xl text-[10px] font-code font-bold text-cyan-300 flex items-center gap-1">
          <Award className="w-3 h-3 text-cyan-400" />
          FLAGSHIP
        </div>
      )}

      <div>
        {/* Acronym, Category & Status Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-code text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
            {event.acronym}
          </span>
          <span className="font-code text-xs text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
            {event.category}
          </span>
          <span className={`font-code text-[11px] px-2 py-0.5 rounded border ml-auto ${
            event.status === 'Registration Open'
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
          }`}>
            {event.status}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
          {event.title}
        </h3>

        {/* Date and Location */}
        <div className="space-y-1.5 mb-4 text-xs font-code text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {event.description}
        </p>
      </div>

      {/* Footer / CTA Button */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] font-code text-slate-500">
          {event.attendanceEst}
        </span>

        <button
          onClick={() => onSelect(event)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 font-code text-xs font-semibold transition-all group-hover:border-cyan-500/50"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
