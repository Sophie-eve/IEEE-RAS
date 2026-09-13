import React from 'react';
import { EventItem } from '../../data/eventsData';
import { X, Calendar, MapPin, Users, ExternalLink, Tag, Clock, Award, CheckCircle2 } from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#09101f] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] hud-corner"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-slate-800 pb-5 mb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-code text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-600/30 border border-blue-500/40 text-blue-300">
              {event.acronym}
            </span>
            <span className="font-code text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {event.category}
            </span>
            {event.isFlagship && (
              <span className="font-code text-xs px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center gap-1">
                <Award className="w-3 h-3" /> IEEE RAS FLAGSHIP
              </span>
            )}
            <span className={`font-code text-xs px-2.5 py-0.5 rounded border ml-auto ${
              event.status === 'Registration Open'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}>
              {event.status}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
            {event.title}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs font-code text-slate-300 pt-1">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>{event.attendanceEst}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-2">
              Conference & Event Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {event.fullOverview}
            </p>
          </div>

          {/* Key Dates */}
          <div>
            <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Critical Milestones & Dates
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-code">
              {event.keyDates.map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">{item.label}:</span>
                  <span className="text-slate-200 font-semibold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Tracks */}
          <div>
            <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Primary Program Tracks
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.tracks.map((track, idx) => (
                <span
                  key={idx}
                  className="text-xs font-code bg-slate-900 text-slate-300 border border-slate-800 px-3 py-1 rounded-md"
                >
                  {track}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400 font-code">
              Verified through official IEEE RAS conference announcements.
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-xs font-code hover:bg-slate-800 transition"
              >
                Close
              </button>
              <a
                href={event.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/20"
              >
                Official Conference Portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
