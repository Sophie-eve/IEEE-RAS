import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { COMMUNITY_INITIATIVES } from '../data/communityData';
import { CommunityNetwork } from '../components/interactive/CommunityNetwork';
import { Link } from 'react-router-dom';
import { 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Globe2, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <PageHeader
        badge="GLOBAL COLLABORATION ACROSS 10 IEEE REGIONS"
        title="Global Robotics Community"
        description="A worldwide ecosystem connecting students, researchers, industry practitioners, and academic institutions across more than 180+ chapters worldwide."
        breadcrumb="Community"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= INTERACTIVE NETWORK TOPOLOGY & REGIONS ================= */}
        <section>
          <CommunityNetwork />
        </section>

        {/* ================= CORE COMMUNITY INITIATIVES ================= */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">DIVERSITY, EQUITY & STUDENT OPPORTUNITY</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Key Community Committees & Programs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Dedicated organizational bodies supporting every phase of a robotics career, from university freshman to Society Fellow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMUNITY_INITIATIVES.map((item) => (
              <div
                key={item.id}
                className="tech-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-code text-xs font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/40 px-2.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                    <span className="text-xs font-code text-slate-500">
                      {item.leadGroup}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-code text-slate-500 uppercase block">Active Offerings:</span>
                    {item.offerings.map((offer, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{offer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STUDENT CHAPTER FORMATION CALLOUT ================= */}
        <section className="tech-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-gradient-to-r from-[#060e20] to-[#040814] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              UNIVERSITY OUTREACH
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Start an IEEE RAS Student Branch Chapter at Your University
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Collegiate chapters receive seed grants from IEEE RAS, access to the Distinguished Lecturer Program, free tutorial kits, and eligibility for the annual Chapter of the Year awards.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <a
              href="https://www.ieee-ras.org/chapters/start-a-chapter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/20"
            >
              <span>Chapter Charter Guidelines</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-code text-xs hover:border-slate-500 transition"
            >
              <span>View Individual Member Benefits</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
