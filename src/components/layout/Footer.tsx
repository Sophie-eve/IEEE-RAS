import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Shield, Cpu, Sparkles, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#03060f] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background blueprint pattern */}
      <div className="absolute inset-0 tech-blueprint-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Branding & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base tracking-wider text-white">
                  IEEE <span className="text-cyan-400">RAS</span>
                </span>
                <p className="text-[11px] text-slate-400">Robotics and Automation Society</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The IEEE Robotics and Automation Society (IEEE RAS) is dedicated to advancing the theory and practice of robotics and automation engineering for the benefit of humanity.
            </p>

            <div className="pt-2 text-xs font-code text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Affiliation: IEEE Technical Activities Board (TAB)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Scope: Unstructured & Structured Mechanical Intelligence</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-code text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-code">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition">HOME</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition">ABOUT RAS</Link>
              </li>
              <li>
                <Link to="/technologies" className="hover:text-cyan-300 transition">TECHNOLOGIES</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-cyan-300 transition">EVENTS & CONFERENCES</Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-cyan-300 transition">RESEARCH & COMMITTEES</Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-cyan-300 transition">COMMUNITY & CHAPTERS</Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-cyan-300 transition">GET INVOLVED / JOIN</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Flagship Publications & Conferences */}
          <div className="space-y-3">
            <h4 className="font-code text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Flagships
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-code">
              <li>
                <a
                  href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  IEEE Trans. on Robotics (T-RO)
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7083369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  Robotics & Automation Letters (RA-L)
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  ICRA Conference Series
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee-ras.org/conferences-workshops/financially-co-sponsored/iros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  IROS Conference Series
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee-ras.org/conferences-workshops/fully-sponsored/case"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  CASE Automation Series
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: External Official Portals */}
          <div className="space-y-3">
            <h4 className="font-code text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Official IEEE Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-code">
              <li>
                <a
                  href="https://www.ieee-ras.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  Official IEEE RAS Home
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://ieeexplore.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  IEEE Xplore Digital Library
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  IEEE.org Main Portal
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org/about/ethics.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  IEEE Code of Ethics
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= STUDENT ASSIGNMENT SUBMISSION & DEVELOPER CREDITS BANNER ================= */}
        <div className="mt-8 pt-6 pb-2 border-t border-slate-800">
          <div className="tech-card rounded-2xl p-6 border border-cyan-500/30 bg-gradient-to-r from-[#071329] via-[#091834] to-[#071329] shadow-xl shadow-cyan-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px] shadow-lg shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full bg-[#060c1c] rounded-2xl flex items-center justify-center font-heading font-extrabold text-xl text-cyan-300">
                  SS
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-code text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                    Project Submission & Credits
                  </span>
                  <span className="font-code text-[11px] text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Candidate
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  Designed & Developed by Shailja Singh
                </h3>
                <p className="text-xs sm:text-sm text-cyan-200/90 font-medium">
                  Department of Mechanical Engineering (Electric Vehicles / E.V.)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-code text-slate-300">
              <div className="bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-700/80 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Mechanical Engineering (E.V.)</span>
              </div>
              <div className="bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-700/80 flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>IEEE RAS Web Assignment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-slate-500">
          <div className="text-center sm:text-left space-y-0.5">
            <p>© {new Date().getFullYear()} IEEE Robotics and Automation Society (IEEE RAS). All rights reserved.</p>
            <p className="text-[11px] text-slate-600">
              Submitted as a web development project by Shailja Singh, Department of Mechanical Engineering (E.V.).
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3 h-3 text-emerald-400" />
              IEEE Professional Quality Assured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
