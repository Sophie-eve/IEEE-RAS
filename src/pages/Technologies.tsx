import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { TECHNOLOGIES_DATA, Technology } from '../data/technologiesData';
import { TechnologyCard } from '../components/cards/TechnologyCard';
import { RobotArmCanvas } from '../components/interactive/RobotArmCanvas';
import { 
  Bot, 
  Compass, 
  Cpu, 
  Eye, 
  Users, 
  Factory, 
  Gauge, 
  Hand, 
  Globe, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Activity, 
  ExternalLink 
} from 'lucide-react';

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

export const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTech, setActiveTech] = useState<Technology>(TECHNOLOGIES_DATA[0]);

  const categories = [
    'All',
    'Core Discipline',
    'Autonomous Systems',
    'Intelligence & Learning',
    'Perception',
    'Interaction & Safety',
    'Industrial Systems',
    'Mathematical Foundations',
    'End-Effector Mechanics',
    'Extreme Environments'
  ];

  const filteredTechs = selectedCategory === 'All'
    ? TECHNOLOGIES_DATA
    : TECHNOLOGIES_DATA.filter(t => t.category === selectedCategory);

  const ActiveIcon = iconMap[activeTech.iconName] || Bot;

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <PageHeader
        badge="ENGINEERING THE FUTURE OF INTELLIGENT MACHINES"
        title="Key Technologies in Robotics & Automation"
        description="Comprehensive architectural overview of the scientific disciplines and physical systems advancing autonomous machines and scalable industrial efficiency."
        breadcrumb="Technologies"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ================= ACTIVE TECHNOLOGY SPOTLIGHT / BENCHMARK ================= */}
        <section className="tech-card rounded-3xl p-8 sm:p-10 border border-slate-800 bg-[#080e1e]/90 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-400">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-code text-cyan-400 uppercase tracking-wider block">
                  SELECTED DISCIPLINE SPOTLIGHT
                </span>
                <h2 className="text-2xl font-bold text-white font-heading">{activeTech.title}</h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 font-code text-xs border border-slate-800">
                {activeTech.category}
              </span>
              <span className="px-3 py-1 rounded bg-blue-950 text-cyan-300 font-code text-xs border border-blue-800">
                {activeTech.technicalMetric.label}: {activeTech.technicalMetric.value}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading">{activeTech.subtitle}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeTech.extendedDescription}
              </p>

              <div className="pt-2 space-y-2">
                <span className="text-xs font-code text-slate-400 uppercase block">Foundational Technical Pillars:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeTech.corePillars.map((pillar, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-code text-slate-200 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-950/30 p-3.5 rounded-xl border border-blue-900/40 text-xs font-code text-slate-300">
                <strong className="text-cyan-300">IEEE RAS Context:</strong> {activeTech.ieeeRasFocus}
              </div>
            </div>

            {/* Applications list */}
            <div className="lg:col-span-5 bg-[#050914] rounded-2xl border border-slate-800 p-6 space-y-3">
              <span className="text-xs font-code text-slate-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Demonstrated Application Frontiers
              </span>
              <div className="space-y-2.5 text-xs text-slate-300">
                {activeTech.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORY FILTER & 9 TECHNOLOGIES GRID ================= */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">THE 9 PILLARS</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Explore All Technological Domains
              </h2>
            </div>

            {/* Category Quick Filter */}
            <div className="flex flex-wrap gap-1.5 max-w-2xl">
              {categories.slice(0, 5).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-code transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechs.map(tech => (
              <div
                key={tech.id}
                onClick={() => {
                  setActiveTech(tech);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                <TechnologyCard tech={tech} />
              </div>
            ))}
          </div>
        </section>

        {/* ================= EMBEDDED REAL-TIME POINT-CLOUD PERCEPTION BENCHMARK ================= */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">INTERACTIVE KINEMATICS & MANIPULATOR DIGITAL TWIN</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Robotic Arm Kinematics & Workcell Simulation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Demonstrating the fundamental principles of forward and inverse kinematics (IK), Denavit-Hartenberg (D-H) modeling, and closed-loop trajectory tracking for high-precision industrial robotics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <RobotArmCanvas />
            </div>

            <div className="lg:col-span-4 space-y-4 text-xs font-code">
              <div className="bg-[#070d1a] p-5 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-cyan-400 font-bold uppercase block text-sm">Inverse Kinematics Formulation</span>
                <p className="text-slate-300 leading-relaxed font-sans text-xs">
                  Target end-effector pose Te = [R | p] is mapped to joint configurations q = [q1 ... q6] via the manipulator Jacobian:
                </p>
                <div className="bg-slate-950 p-2.5 rounded font-code text-cyan-300 text-[11px] border border-slate-800">
                  dx = J(q) · dq/dt<br/>
                  dq = pinv(J) · dx + (I - pinv(J)·J) · grad(H)
                </div>
                <p className="text-slate-400 leading-relaxed font-sans text-xs">
                  Null-space projection (I - pinv(J)·J) resolves kinematic redundancy while optimizing manipulability and avoiding joint velocity limits.
                </p>
              </div>

              <div className="bg-blue-950/30 p-4 rounded-xl border border-blue-900/40 text-slate-300">
                ⚙️ Core focus of the <strong className="text-white">IEEE RAS Robotics & Mechanisms Technical Committee</strong> and published across IEEE Transactions on Robotics (T-RO).
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
