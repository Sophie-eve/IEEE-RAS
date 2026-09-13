import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { PUBLICATIONS_DATA } from '../data/publicationsData';
import { PublicationCard } from '../components/cards/PublicationCard';
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Search, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Library, 
  Layers, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <PageHeader
        badge="PEER-REVIEWED ARCHIVAL SCIENCE & LETTERS"
        title="Publications & Scientific Resources"
        description="Access foundational literature, rapid research letters, and tutorial perspectives published by the IEEE Robotics and Automation Society."
        breadcrumb="Publications"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= FLAGSHIP JOURNALS ================= */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">ARCHIVAL JOURNALS & MAGAZINES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Official IEEE RAS Publications
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Rigorous peer-reviewed publications archived permanently in the IEEE Xplore Digital Library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PUBLICATIONS_DATA.map(pub => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </section>

        {/* ================= AUTHOR & REVIEWER WORKFLOW ================= */}
        <section className="tech-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">SUBMISSION EXCELLENCE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Author Guidelines & Manuscript Submission
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Follow established IEEE Author Center standards to prepare manuscripts for rapid peer review and maximum scientific reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#050914] p-6 rounded-xl border border-slate-800/80 space-y-3">
              <span className="font-code text-xs text-cyan-400 font-bold uppercase block">STEP 01</span>
              <h3 className="text-lg font-bold text-white font-heading">LaTeX & Word Templates</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Utilize official IEEE template packages (IEEEtran) or Overleaf cloud templates ensuring accurate mathematical typography and figure layout.
              </p>
              <a
                href="https://template-selector.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-code text-cyan-400 hover:text-cyan-300 pt-2"
              >
                IEEE Template Selector <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#050914] p-6 rounded-xl border border-slate-800/80 space-y-3">
              <span className="font-code text-xs text-cyan-400 font-bold uppercase block">STEP 02</span>
              <h3 className="text-lg font-bold text-white font-heading">ScholarOne Submission</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submit manuscripts and supplemental video demonstrations through the ScholarOne portal. Option for dual-presentation at ICRA or IROS with RA-L.
              </p>
              <a
                href="https://www.ieee-ras.org/publications/ra-l/information-for-authors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-code text-cyan-400 hover:text-cyan-300 pt-2"
              >
                RA-L Conference Dual Option <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#050914] p-6 rounded-xl border border-slate-800/80 space-y-3">
              <span className="font-code text-xs text-cyan-400 font-bold uppercase block">STEP 03</span>
              <h3 className="text-lg font-bold text-white font-heading">Open Access & Archiving</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                IEEE RAS offers traditional and Gold Open Access publishing options complying with Plan S, institutional mandates, and preprint server deposition.
              </p>
              <a
                href="https://open.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-code text-cyan-400 hover:text-cyan-300 pt-2"
              >
                IEEE Open Access Policy <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONFERENCE PROCEEDINGS & RESOURCE CENTER ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="tech-card rounded-2xl p-8 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-cyan-400">
              <Library className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">IEEE Xplore Digital Proceedings</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every peer-reviewed paper presented at ICRA, IROS, CASE, Humanoids, and RoboSoft is published in the IEEE Xplore Digital Library, guaranteeing persistent DOIs, citation indexing, and worldwide availability.
            </p>
            <a
              href="https://ieeexplore.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 font-code text-xs font-semibold hover:border-cyan-400 transition"
            >
              <span>Search IEEE Xplore Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="tech-card rounded-2xl p-8 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">IEEE RAS Resource Center</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore recorded keynotes, conference plenary talks, tutorials, Distinguished Lectures, and educational seasonal school lecture notes curated for graduate students and engineering practitioners.
            </p>
            <a
              href="https://resourcecenter.ras.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 font-code text-xs font-semibold hover:border-cyan-400 transition"
            >
              <span>Access RAS Resource Center</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
