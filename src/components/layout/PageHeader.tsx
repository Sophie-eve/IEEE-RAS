import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  breadcrumb,
}) => {
  return (
    <section className="relative pt-32 pb-14 bg-gradient-to-b from-[#070e1e] via-[#060913] to-[#060913] border-b border-slate-800/80 overflow-hidden">
      {/* Background blueprint & radial glow */}
      <div className="absolute inset-0 tech-blueprint-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs & Status Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <nav className="flex items-center gap-2 text-xs font-code text-slate-400">
            <Link to="/" className="hover:text-cyan-300 transition">HOME</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 uppercase">{breadcrumb}</span>
          </nav>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 font-code text-[11px] text-slate-300">
            <Terminal className="w-3 h-3 text-cyan-400" />
            <span>SYS STATUS: NOMINAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Title and Badge */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-cyan-300 font-code text-xs font-medium uppercase tracking-wider">
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight text-glow-blue">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
