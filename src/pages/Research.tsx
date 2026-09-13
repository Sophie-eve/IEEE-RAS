import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { TECHNICAL_COMMITTEES_DATA, TechnicalCommittee } from '../data/technicalCommittees';
import { CommitteeCard } from '../components/cards/CommitteeCard';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Cpu, 
  Compass, 
  Eye, 
  GitFork, 
  Users, 
  Gauge, 
  Hand, 
  Share2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ResearchArea {
  num: string;
  title: string;
  icon: React.ElementType;
  summary: string;
  breakthrough: string;
  relatedTC: string;
}

const RESEARCH_AREAS: ResearchArea[] = [
  {
    num: '01',
    title: 'Autonomous Robotics',
    icon: Compass,
    summary: 'Developing self-governing physical systems capable of long-duration operation, SLAM, and goal-directed mission execution in unmapped terrains.',
    breakthrough: 'Decentralized multi-agent SLAM in GPS-denied subterranean tunnels.',
    relatedTC: 'Autonomous Ground Vehicles'
  },
  {
    num: '02',
    title: 'Robot Learning',
    icon: Cpu,
    summary: 'Bridging foundation models, diffusion policies, and sim-to-real reinforcement learning with physical actuator stability constraints.',
    breakthrough: 'Zero-shot cross-embodiment policy transfer using Vision-Language-Action (VLA) models.',
    relatedTC: 'Robot Learning'
  },
  {
    num: '03',
    title: 'Computer Vision',
    icon: Eye,
    summary: 'Neuromorphic event sensors, 3D Gaussian splatting, and real-time volumetric scene representation optimized for agile robotic motion.',
    breakthrough: 'Megapixel event-based visual odometry at >1,000 Hz optical sampling.',
    relatedTC: 'Computer & Robot Vision'
  },
  {
    num: '04',
    title: 'Motion Planning',
    icon: GitFork,
    summary: 'Asymptotically optimal sampling algorithms, kinodynamic trajectory optimization, and provable collision avoidance in high-dimensional state spaces.',
    breakthrough: 'Real-time trajectory synthesis with Control Barrier Functions (CBFs) in dynamic crowds.',
    relatedTC: 'Algorithms for Planning & Control'
  },
  {
    num: '05',
    title: 'Human-Robot Interaction',
    icon: Users,
    summary: 'Mutual intent inference, variable impedance physical collaboration, tactile compliance, and ergonomics in shared human-robot workspaces.',
    breakthrough: 'Direct neuromuscular intent prediction for upper-limb collaborative exoskeletons.',
    relatedTC: 'Human-Robot Interaction & Coordination'
  },
  {
    num: '06',
    title: 'Intelligent Control',
    icon: Gauge,
    summary: 'Lyapunov-certified non-linear control, model predictive control (MPC), and robust adaptive strategies that ensure stability despite hardware degradation.',
    breakthrough: 'Whole-body high-rate MPC stabilizing humanoid bipedal running over unstructured debris.',
    relatedTC: 'Control Systems'
  },
  {
    num: '07',
    title: 'Manipulation & Dexterity',
    icon: Hand,
    summary: 'Multi-fingered robotic hands, frictional contact mechanics, tactile skin feedback arrays, and non-prehensile in-hand reorientation.',
    breakthrough: 'Sub-millimeter tactile sensor matrix detecting slip and shear force at 500 Hz.',
    relatedTC: 'Mechanisms and Design'
  },
  {
    num: '08',
    title: 'Multi-Robot Systems',
    icon: Share2,
    summary: 'Decentralized swarm algorithms, consensus theory, distributed task allocation, and aerial-terrestrial collaborative scouting networks.',
    breakthrough: 'Swarm containment and collective payload transport without central command.',
    relatedTC: 'Multi-Robot Systems'
  }
];

export const Research: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<string>('All');
  const [tcSearch, setTcSearch] = useState<string>('');
  const [activeArea, setActiveArea] = useState<ResearchArea>(RESEARCH_AREAS[0]);

  const clusters = [
    'All',
    'Autonomous & Field',
    'Mechanisms & Manipulation',
    'Intelligence & Perception',
    'Bio & Medical',
    'Automation & Systems'
  ];

  const filteredTCs = TECHNICAL_COMMITTEES_DATA.filter(tc => {
    const matchesCluster = selectedCluster === 'All' || tc.cluster === selectedCluster;
    const matchesSearch = tc.name.toLowerCase().includes(tcSearch.toLowerCase()) ||
                          tc.scope.toLowerCase().includes(tcSearch.toLowerCase());
    return matchesCluster && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-20">
      <PageHeader
        badge="DISCOVERY, STANDARDS & ARCHIVAL SCHOLARSHIP"
        title="Research Driving Intelligent Automation"
        description="Exploring the core scientific thrusts and technical committees advancing mathematical control, embodied machine learning, and physical robot architectures."
        breadcrumb="Research"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= 8 VISUAL RESEARCH AREAS ================= */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">SCIENTIFIC PILLARS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              08 Foundational Research Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any research area below to inspect representative breakthroughs and technical committees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESEARCH_AREAS.map((area) => {
              const IconComp = area.icon;
              const isSelected = activeArea.num === area.num;

              return (
                <div
                  key={area.num}
                  onClick={() => setActiveArea(area)}
                  className={`tech-card rounded-2xl p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-lg shadow-cyan-950/40'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-code text-xs font-bold text-cyan-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                        AREA {area.num}
                      </span>
                      <IconComp className={`w-5 h-5 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                    </div>

                    <h3 className="text-base font-bold text-white font-heading mb-2">
                      {area.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3">
                      {area.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] font-code text-slate-400">
                    TC: <span className="text-cyan-400">{area.relatedTC}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Research Area Interactive Detail Callout */}
          <div className="tech-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-[#080f22] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-code text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 rounded">
                  AREA {activeArea.num} DEEP DIVE
                </span>
                <span className="text-xs font-code text-slate-400">{activeArea.relatedTC} Track</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {activeArea.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeArea.summary}
              </p>
              <div className="pt-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs font-code text-slate-200">
                <strong className="text-cyan-400">Archival Benchmark:</strong> {activeArea.breakthrough}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                to="/publications"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition"
              >
                <span>Browse Papers in T-RO & RA-L</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://www.ieee-ras.org/technical-committees"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-code text-xs hover:border-slate-500 transition"
              >
                <span>Join Official TC Working Group</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= TECHNICAL COMMITTEES DIRECTORY ================= */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">SPECIALIZED EXPERT BODIES</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                IEEE RAS Technical Committees (TCs)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                More than 35 international Technical Committees drive roadmaps, workshop proposals, special journal issues, and IEEE standards.
              </p>
            </div>

            {/* TC Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search technical committees..."
                value={tcSearch}
                onChange={(e) => setTcSearch(e.target.value)}
                className="w-full bg-[#050914] border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-code text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

          {/* Cluster Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {clusters.map(cluster => (
              <button
                key={cluster}
                onClick={() => setSelectedCluster(cluster)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-code transition-all ${
                  selectedCluster === cluster
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cluster}
              </button>
            ))}
          </div>

          {/* Committee Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTCs.map(tc => (
              <CommitteeCard key={tc.id} tc={tc} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
