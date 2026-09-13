import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Eye, 
  History, 
  Layers, 
  Globe2, 
  Users, 
  Award, 
  Cpu, 
  Building, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const About: React.FC = () => {
  const milestones = [
    {
      year: '1984',
      title: 'Foundation as IEEE Council on Robotics and Automation',
      description: 'Established within the IEEE Technical Activities Board (TAB) to coordinate interdisciplinary robotics efforts spanning control theory, mechanics, and computation.'
    },
    {
      year: '1989',
      title: 'Transition to Full IEEE Society Status',
      description: 'Formally chartered as the IEEE Robotics and Automation Society (IEEE RAS), inaugurating official voting representation on the IEEE Technical Activities Board.'
    },
    {
      year: '1984–Pres.',
      title: 'Inauguration of ICRA Flagship Conference',
      description: 'Launched the annual IEEE International Conference on Robotics and Automation, evolving into the world\'s largest and most prestigious robotics scientific symposium.'
    },
    {
      year: '2004',
      title: 'Launch of IEEE Transactions on Automation Science and Engineering (T-ASE)',
      description: 'Dedicated archival journal founded to advance structured automation, discrete-event optimization, and cyber-physical production systems.'
    },
    {
      year: '2016',
      title: 'Inception of IEEE Robotics and Automation Letters (RA-L)',
      description: 'Pioneered rapid high-impact peer-reviewed publishing paired with simultaneous conference presentation tracks.'
    },
    {
      year: 'Today',
      title: 'Global Scientific Vanguard of Embodied Intelligence',
      description: 'Over 15,000 members, 180+ local chapters across 10 IEEE regions, and 35+ Technical Committees driving international safety standards and foundation models.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Page Banner */}
      <PageHeader
        badge="ORGANIZATIONAL CHARTER & CONSTITUTION"
        title="About IEEE Robotics and Automation Society"
        description="The premier global professional society for scientific, technical, and educational advances in robotics and automation engineering."
        breadcrumb="About"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= WHAT IS IEEE RAS ================= */}
        <section className="tech-card rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                SOCIETY PROFILE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading">
                What is IEEE RAS?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The <strong className="text-white">IEEE Robotics and Automation Society (IEEE RAS)</strong> is a specialized organizational unit of the Institute of Electrical and Electronics Engineers (IEEE), the world's largest technical professional organization for the advancement of technology.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                The Society's field of interest focuses on both applied and theoretical issues in robotics and automation. IEEE RAS bridges academia, government research agencies, industrial robotics manufacturers, and student innovators to disseminate archival knowledge and establish verified benchmarks for autonomous physical systems.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-code">
                <div className="bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">PARENT BODY</span>
                  <span className="text-cyan-300 font-semibold">IEEE (Technical Activities Board)</span>
                </div>
                <div className="bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ORGANIZATIONAL NATURE</span>
                  <span className="text-blue-300 font-semibold">Scientific & Educational Non-Profit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#050813] rounded-2xl border border-slate-800 p-6 space-y-4 font-code text-xs">
              <span className="text-slate-400 uppercase tracking-wider text-[11px] block border-b border-slate-800 pb-2">
                Core Organizational Pillars
              </span>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Conferences:</strong> Organizes ICRA, IROS, CASE, Humanoids, and RoboSoft.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Publications:</strong> Archives research in T-RO, RA-L, T-ASE, and RAM via IEEE Xplore.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Standards:</strong> Develops ontological frameworks and safety guidelines for robots.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Educational Outreach:</strong> Hosts Seasonal Schools, Distinguished Lecturers, and SAC grants.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="tech-card rounded-2xl p-8 border border-slate-800 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">PURPOSE</span>
            <h3 className="text-2xl font-bold text-white font-heading">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              To foster the development and facilitate the exchange of scientific and technological knowledge in Robotics and Automation that benefits members, the profession, and humanity.
            </p>
            <div className="pt-2 text-xs font-code text-slate-400 border-t border-slate-800">
              Upholding IEEE's global motto: Advancing Technology for Humanity.
            </div>
          </div>

          <div className="tech-card rounded-2xl p-8 border border-slate-800 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-code text-blue-400 uppercase tracking-wider block">ASPIRATION</span>
            <h3 className="text-2xl font-bold text-white font-heading">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              To be the premier global recognized society in Robotics and Automation, driving continuous innovation in mechanical intelligence, collaborative machines, and resilient automated operations worldwide.
            </p>
            <div className="pt-2 text-xs font-code text-slate-400 border-t border-slate-800">
              Cultivating an inclusive, ethical, and collaborative global robotics community.
            </div>
          </div>
        </section>

        {/* ================= SCOPE: ROBOTICS VS AUTOMATION ================= */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">EPISTEMOLOGICAL DEFINITION</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Robotics and Automation: Two Unified Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              According to the IEEE RAS Constitution and Scope, our Society is uniquely defined by two symbiotic technical domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#081022] p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-code text-cyan-400 bg-cyan-950/70 border border-cyan-500/40 px-2.5 py-0.5 rounded font-bold">
                  DOMAIN I
                </span>
                <span className="text-xs font-code text-slate-500">Physical Embodiment</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">The Science of Robotics</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Robotics addresses systems operating in <em>unstructured environments</em>. This necessitates real-time active perception (computer vision, LiDAR, tactile skins), continuous uncertainty handling, physical compliance, kinematic trajectory adaptation, and embodied decision-making.
              </p>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs font-code text-slate-400">
                <strong className="text-cyan-300">Examples:</strong> Bipedal humanoids, deep-sea submersibles, search-and-rescue rovers, surgical micromanipulators, planetary exploration drones.
              </div>
            </div>

            <div className="bg-[#081022] p-6 sm:p-8 rounded-2xl border border-blue-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-code text-blue-400 bg-blue-950/70 border border-blue-500/40 px-2.5 py-0.5 rounded font-bold">
                  DOMAIN II
                </span>
                <span className="text-xs font-code text-slate-500">Structured Optimization</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">The Science of Automation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Automation addresses systems operating in <em>structured environments</em>. This emphasizes mathematical discrete-event systems, cyber-physical manufacturing twins, high-throughput scheduling, zero-defect statistical process control, and resilient logistics pipelines.
              </p>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs font-code text-slate-400">
                <strong className="text-blue-300">Examples:</strong> Semiconductor fabrication lines, pharmaceutical robotic workcells, automated container shipping terminals, intelligent electrical microgrids.
              </div>
            </div>
          </div>
        </section>

        {/* ================= CHRONOLOGICAL HISTORY TIMELINE ================= */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider">
              <History className="w-4 h-4" />
              SOCIETY HERITAGE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Four Decades of Scientific Leadership
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#060913] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

                <div className="space-y-1.5">
                  <span className="font-code text-xs text-cyan-400 font-bold tracking-wider">
                    {m.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GOVERNANCE & ETHICS ================= */}
        <section className="tech-card rounded-2xl p-8 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">ETHICAL GOVERNANCE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Governance, Constitution & IEEE Code of Ethics
              </h3>
            </div>
            <a
              href="https://www.ieee.org/about/ethics.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 hover:text-cyan-300"
            >
              Read IEEE Global Code of Ethics
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The IEEE Robotics and Automation Society is governed by an elected Administrative Committee (AdCom), Executive Committee, and appointed Boards overseeing Conferences, Publications, Member Activities, Electronic Media, and Financial Operations. All members strictly adhere to the IEEE Code of Ethics, committing to safe, humane, and sustainable development of autonomous systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition shadow-md shadow-cyan-500/20"
            >
              <span>Join Society Governance & Committees</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
