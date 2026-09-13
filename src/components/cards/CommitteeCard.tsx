import React from 'react';
import { TechnicalCommittee } from '../../data/technicalCommittees';
import { CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';

interface CommitteeCardProps {
  tc: TechnicalCommittee;
}

export const CommitteeCard: React.FC<CommitteeCardProps> = ({ tc }) => {
  return (
    <div className="tech-card rounded-xl p-5 border border-slate-800 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="font-code text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
            {tc.cluster}
          </span>
          <span className="text-[11px] font-code text-slate-500 flex items-center gap-1">
            <Bookmark className="w-3 h-3 text-slate-600" />
            TC ACTIVE
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2">
          {tc.name}
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {tc.scope}
        </p>

        <div className="space-y-1.5 mb-4">
          <span className="text-[10px] font-code text-slate-500 uppercase block">Key Initiatives:</span>
          {tc.activities.map((act, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <span className="text-cyan-400 font-bold">•</span>
              <span className="line-clamp-1">{act}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-code">
        <span className="text-slate-500 text-[11px]">
          Venues: {tc.flagshipVenues.join(', ')}
        </span>
        <a
          href="https://www.ieee-ras.org/technical-committees"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
        >
          <span>TC Portal</span>
          <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
