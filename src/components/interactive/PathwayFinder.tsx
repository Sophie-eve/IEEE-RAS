import React, { useState } from 'react';
import { GET_INVOLVED_PERSONAS, GetInvolvedPersona } from '../../data/communityData';
import { GraduationCap, Microscope, Briefcase, HeartHandshake, CheckCircle2, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Microscope,
  Briefcase,
  HeartHandshake,
};

export const PathwayFinder: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<GetInvolvedPersona>(GET_INVOLVED_PERSONAS[0]);

  return (
    <div className="tech-card rounded-2xl p-6 sm:p-10 border border-slate-800 bg-[#0a1122]/90 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-code text-xs uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Engagement Engine
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
          Find Your Custom Pathway in IEEE RAS
        </h3>
        <p className="text-sm text-slate-300">
          Select your primary identity to discover tailored grants, publishing opportunities, networking committees, and membership options.
        </p>
      </div>

      {/* Role Selection Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {GET_INVOLVED_PERSONAS.map(persona => {
          const IconComp = iconMap[persona.icon] || GraduationCap;
          const isSelected = selectedPersona.id === persona.id;

          return (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona)}
              className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-gradient-to-b from-cyan-950/40 to-blue-950/40 border-cyan-400 text-white shadow-lg shadow-cyan-950/30'
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div className={`p-3 rounded-lg mb-2.5 ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                <IconComp className="w-5 h-5" />
              </div>
              <span className="font-heading font-semibold text-xs sm:text-sm">{persona.role}</span>
            </button>
          );
        })}
      </div>

      {/* Curated Results Matrix */}
      <div className="bg-[#060b17] rounded-xl border border-slate-800/80 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-4">
          <div>
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">RECOMMENDED BENEFITS</span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
              {selectedPersona.tagline}
            </h4>
          </div>

          <div className="space-y-2.5 pt-2">
            {selectedPersona.primaryBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={selectedPersona.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
            >
              {selectedPersona.ctaText}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-code text-xs hover:border-slate-500 transition"
            >
              View IEEE Dues Breakdown
            </a>
          </div>
        </div>

        {/* Step by Step Action Plan */}
        <div className="md:col-span-5 bg-slate-900/80 rounded-xl border border-slate-800 p-5 space-y-4">
          <span className="text-xs font-code text-slate-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
            Recommended Action Checklist
          </span>
          <div className="space-y-3">
            {selectedPersona.actionSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                <span className="font-code font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
