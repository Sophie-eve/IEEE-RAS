import React from 'react';
import { Link } from 'react-router-dom';
import { TECHNOLOGIES_DATA } from '../data/technologiesData';
import { EVENTS_DATA } from '../data/eventsData';
import { TechnologyCard } from '../components/cards/TechnologyCard';
import { EventCard } from '../components/cards/EventCard';
import { RobotArmCanvas } from '../components/interactive/RobotArmCanvas';
import { CommunityNetwork } from '../components/interactive/CommunityNetwork';
import { PathwayFinder } from '../components/interactive/PathwayFinder';
import { 
  ArrowRight, 
  ChevronRight, 
  Cpu, 
  Globe2, 
  Layers, 
  BookOpen, 
  Users2, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

export const Home: React.FC = () => {
  const flagshipEvents = EVENTS_DATA.filter(e => e.isFlagship).slice(0, 3);
  const featuredTechs = TECHNOLOGIES_DATA.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Background Grid and Radial Glows */}
        <div className="absolute inset-0 tech-grid-bg opacity-35 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-700/15 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              {/* Technical Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 font-code text-xs text-slate-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-400 font-semibold tracking-wider uppercase">IEEE ROBOTICS & AUTOMATION SOCIETY</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400">EST. 1984</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.1] text-glow-blue">
                Advancing Robotics and Automation
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
                The global scientific vanguard for embodied physical intelligence. IEEE RAS unites researchers, engineers, educators, and industry leaders to pioneer the theory, algorithmic foundations, and applied systems shaping autonomous machines.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-code text-xs sm:text-sm font-bold hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/20 active:scale-95"
                >
                  <span>Explore IEEE RAS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 font-code text-xs sm:text-sm font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Get Involved</span>
                </Link>
              </div>

              {/* Trust Indicators / Sub-metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-slate-400 font-code text-xs">
                <div>
                  <span className="text-white font-bold text-lg font-heading block">180+</span>
                  <span className="text-[11px] text-slate-500">Global Chapters</span>
                </div>
                <div>
                  <span className="text-white font-bold text-lg font-heading block">35+</span>
                  <span className="text-[11px] text-slate-500">Tech Committees</span>
                </div>
                <div>
                  <span className="text-white font-bold text-lg font-heading block">4 Flagship</span>
                  <span className="text-[11px] text-slate-500">Archival Journals</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Interactive Kinematics Simulator */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Glow surrounding canvas */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/20 rounded-3xl blur-xl opacity-75" />
                <RobotArmCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT TEASER (SPLIT LAYOUT) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="tech-card rounded-3xl p-8 sm:p-12 border border-slate-800/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Text & IEEE RAS Scope */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 font-code text-xs font-semibold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" />
                SOCIETY SCOPE & MISSION
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading tracking-tight">
                Pioneering the Transition from Computation to Physical Autonomy
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The IEEE Robotics and Automation Society (IEEE RAS) addresses both theoretical and applied dimensions of intelligent machines. The Society uniquely differentiates and unifies two complementary paradigms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#070d1a] p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-code text-xs font-bold uppercase">
                    <Zap className="w-4 h-4" />
                    Robotics Focus
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Systems operating in unstructured environments requiring active perception, physical compliance, adaptive reasoning, and real-time state estimation under uncertainty.
                  </p>
                </div>

                <div className="bg-[#070d1a] p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-code text-xs font-bold uppercase">
                    <Activity className="w-4 h-4" />
                    Automation Focus
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Systems operating in structured environments optimizing throughput, discrete-event dynamic scheduling, zero-defect quality control, and cyber-physical reliability.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-code text-cyan-400 hover:text-cyan-300 font-semibold group"
                >
                  <span>Learn more about Society Governance, History & Constitution</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Technical Highlights Card */}
            <div className="lg:col-span-5 bg-[#050813] rounded-2xl border border-slate-800 p-6 space-y-4 font-code text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">ARCHIVAL INTEGRITY</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> IEEE Certified
                </span>
              </div>

              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Sponsors world-leading conferences including ICRA, IROS, and CASE.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Publishes IEEE Transactions on Robotics (T-RO) with top scientific impact.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Supports 35+ specialized Technical Committees steering standards.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Provides direct student travel grants & graduate fellowship stipends.</span>
                </div>
              </div>

              <div className="bg-blue-950/40 rounded-xl p-3 border border-blue-800/40 text-[11px] text-blue-200">
                Member of IEEE Technical Activities Board (TAB) representing over 15,000 roboticists globally.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AREAS OF TECHNOLOGY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              CORE TECHNOLOGICAL DISCIPLINES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading tracking-tight">
              Engineering the Future of Intelligent Machines
            </h2>
          </div>
          <Link
            to="/technologies"
            className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 hover:text-cyan-300 group"
          >
            <span>View All 9 Technology Thrusts</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTechs.map(tech => (
            <TechnologyCard key={tech.id} tech={tech} />
          ))}
        </div>
      </section>

      {/* ================= IMPACT & STATISTICS SECTION ================= */}
      <section className="relative py-16 bg-gradient-to-b from-transparent via-[#081022] to-transparent border-y border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-code text-xs text-cyan-400 uppercase tracking-wider">
              VERIFIED ORGANIZATIONAL FOOTPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              A Global Society Advancing the Frontiers of Technology
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              IEEE RAS coordinates world-class peer-reviewed research, standards, and regional activities across 10 IEEE global regions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="bg-[#050914] p-6 rounded-2xl border border-slate-800/80 space-y-1 hud-corner">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-300 font-heading block">180+</span>
              <span className="text-xs font-code text-slate-400 block font-semibold">Active Chapters</span>
              <span className="text-[11px] text-slate-500 block">Across 6 Continents</span>
            </div>

            <div className="bg-[#050914] p-6 rounded-2xl border border-slate-800/80 space-y-1 hud-corner">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading block">35+</span>
              <span className="text-xs font-code text-slate-400 block font-semibold">Tech Committees</span>
              <span className="text-[11px] text-slate-500 block">Steering Global Standards</span>
            </div>

            <div className="bg-[#050914] p-6 rounded-2xl border border-slate-800/80 space-y-1 hud-corner">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-300 font-heading block">4</span>
              <span className="text-xs font-code text-slate-400 block font-semibold">Premier Journals</span>
              <span className="text-[11px] text-slate-500 block">T-RO, RA-L, T-ASE, RAM</span>
            </div>

            <div className="bg-[#050914] p-6 rounded-2xl border border-slate-800/80 space-y-1 hud-corner">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading block">10</span>
              <span className="text-xs font-code text-slate-400 block font-semibold">IEEE Regions</span>
              <span className="text-[11px] text-slate-500 block">R1–R10 Worldwide</span>
            </div>

            <div className="col-span-2 lg:col-span-1 bg-[#050914] p-6 rounded-2xl border border-slate-800/80 space-y-1 hud-corner">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-300 font-heading block">1984</span>
              <span className="text-xs font-code text-slate-400 block font-semibold">Established</span>
              <span className="text-[11px] text-slate-500 block">40+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLAGSHIP EVENTS TEASER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              GLOBAL SYMPOSIUMS & CONFERENCES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading tracking-tight">
              Premier Forums Convening the World's Best
            </h2>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 hover:text-cyan-300 group"
          >
            <span>Explore Complete Calendar & Filter</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flagshipEvents.map(event => (
            <EventCard key={event.id} event={event} onSelect={() => {}} />
          ))}
        </div>
      </section>

      {/* ================= INTERACTIVE COMMUNITY TOPOLOGY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityNetwork />
      </section>

      {/* ================= INTERACTIVE GET INVOLVED PATHFINDER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PathwayFinder />
      </section>
    </div>
  );
};
