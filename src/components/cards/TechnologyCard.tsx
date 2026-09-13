import React from 'react';
import { Technology } from '../../data/technologiesData';
import { Bot, Compass, Cpu, Eye, Users, Factory, Gauge, Hand, Globe, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Bot,
  Compass,
  Cpu,
  Eye,
  Users,
  Factory,
  Gauge,
  Hand,
  Globe,
};

interface TechnologyCardProps {
  tech: Technology;
  compact?: boolean;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, compact = false }) => {
  const IconComp = iconMap[tech.iconName] || Bot;

  return (
    <div className="tech-card rounded-2xl p-6 border border-slate-800/90 relative group overflow-hidden flex flex-col justify-between">
      {/* Subtle top indicator bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header with Icon and Category Tag */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="p-3 rounded-xl bg-[#0b162b] border border-blue-900/60 text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 group-hover:scale-105 transition-all">
            <IconComp className="w-6 h-6" />
          </div>
          <span className="font-code text-[11px] font-semibold uppercase px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
            {tech.category}
          </span>
        </div>

        {/* Titles */}
        <div className="space-y-1 mb-3">
          <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
            {tech.title}
          </h3>
          <p className="text-xs font-code text-cyan-400/80">
            {tech.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {tech.description}
        </p>

        {/* Core Pillars / Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.corePillars.slice(0, 3).map((pillar, idx) => (
            <span
              key={idx}
              className="text-[11px] font-code bg-slate-900/80 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
            >
              {pillar}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with Technical Metric */}
      <div className="pt-4 border-t border-slate-800/80 mt-auto flex items-center justify-between text-xs font-code">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[10px] text-slate-500 uppercase">{tech.technicalMetric.label}:</span>
          <span className="text-slate-200 font-medium">{tech.technicalMetric.value}</span>
        </div>

        <Link
          to="/technologies"
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span>Explore</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
