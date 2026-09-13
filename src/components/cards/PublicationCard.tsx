import React from 'react';
import { Publication } from '../../data/publicationsData';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2 } from 'lucide-react';

interface PublicationCardProps {
  pub: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ pub }) => {
  return (
    <div className="tech-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between group relative overflow-hidden">
      {/* Top Banner for Flagship */}
      {pub.isFlagship && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600/30 to-transparent border-l border-b border-blue-500/30 px-3 py-1 rounded-bl-xl text-[10px] font-code font-bold text-blue-300 flex items-center gap-1">
          <Award className="w-3 h-3 text-cyan-400" />
          FLAGSHIP JOURNAL
        </div>
      )}

      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-code text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
            {pub.abbreviation}
          </span>
          <span className="font-code text-xs text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
            {pub.type}
          </span>
          <span className="font-code text-xs text-slate-500">
            {pub.frequency}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
            {pub.title}
          </h3>
          <p className="text-xs font-code text-cyan-400/90 mt-1">
            {pub.scope}
          </p>
        </div>

        {/* Impact Factor & Eigenfactor Grid */}
        <div className="grid grid-cols-2 gap-3 py-2">
          <div className="bg-[#050914] p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] font-code text-slate-500 block uppercase">Clarivate Impact Factor</span>
            <span className="text-2xl font-bold text-cyan-300 font-heading">{pub.impactFactor}</span>
          </div>
          <div className="bg-[#050914] p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] font-code text-slate-500 block uppercase">Eigenfactor Score</span>
            <span className="text-2xl font-bold text-blue-300 font-heading">{pub.eigenfactor}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {pub.description}
        </p>

        {/* Topics covered */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-code text-slate-500 uppercase block">Representative Topics:</span>
          <div className="flex flex-wrap gap-1.5">
            {pub.keyTopics.slice(0, 4).map((topic, idx) => (
              <span
                key={idx}
                className="text-[11px] font-code bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-wrap items-center justify-between gap-3">
        <span className="text-[11px] font-code text-slate-400">
          Peer-reviewed via IEEE ScholarOne
        </span>

        <div className="flex items-center gap-2">
          <a
            href={pub.authorGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-code text-xs transition"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Author Guide</span>
          </a>

          <a
            href={pub.xploreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-code text-xs font-bold transition shadow-md shadow-cyan-500/20"
          >
            <span>IEEE Xplore</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
