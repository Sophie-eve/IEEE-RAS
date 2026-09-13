import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Shield, Cpu, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
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

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-slate-500">
          <div className="text-center sm:text-left space-y-0.5">
            <p>© {new Date().getFullYear()} IEEE Robotics and Automation Society (IEEE RAS). All rights reserved.</p>
            <p className="text-[11px] text-slate-600">
              Fostering the development and facilitating the exchange of scientific and technological knowledge in Robotics and Automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3">
            <span className="flex items-center gap-1 text-slate-400 text-[11px]">
              <Shield className="w-3 h-3 text-emerald-400" />
              IEEE Quality Assured
            </span>

            {/* Developer Credit: Visible ONLY at the very end of the Home page in the right corner */}
            {isHomePage && (
              <div className="text-center sm:text-right bg-[#071329] border border-cyan-500/30 rounded-xl px-3 py-1.5 shadow-lg shadow-cyan-950/40 text-xs">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Web Development Project</span>
                <span className="text-white font-bold block text-[11px]">
                  Designed & Developed by <span className="text-cyan-300">Shailja Singh</span>
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Dept. of Mechanical Engineering (E.V.)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
