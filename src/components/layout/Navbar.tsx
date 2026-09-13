import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Cpu, Compass, BookOpen, Users, Calendar, Info, Sparkles, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/', icon: Cpu },
    { label: 'ABOUT', path: '/about', icon: Info },
    { label: 'TECHNOLOGIES', path: '/technologies', icon: Compass },
    { label: 'EVENTS', path: '/events', icon: Calendar },
    { label: 'RESEARCH', path: '/research', icon: BookOpen },
    { label: 'COMMUNITY', path: '/community', icon: Users },
    { label: 'GET INVOLVED', path: '/get-involved', icon: Sparkles },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060913]/90 backdrop-blur-md border-b border-slate-800/90 py-2.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* IEEE RAS Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* High-tech Emblem */}
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-[1px] border border-cyan-400/40 shadow-md shadow-cyan-500/10 group-hover:border-cyan-300 transition-all">
              <div className="w-full h-full bg-[#070d1d] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-cyan-400">
                  <path
                    d="M16 4L27 10.5V21.5L16 28L5 21.5V10.5L16 4Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    fill="none"
                  />
                  <circle cx="16" cy="16" r="3.5" fill="#00629b" />
                  <circle cx="16" cy="16" r="1.5" fill="#00f0ff" />
                  <path d="M16 12.5V6M20 18L24.5 20.5M12 18L7.5 20.5" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider text-white">
                  IEEE <span className="text-cyan-400">RAS</span>
                </span>
                <span className="text-[10px] font-code bg-blue-900/60 text-blue-300 border border-blue-600/40 px-1.5 py-0.2 rounded font-semibold hidden md:inline">
                  SOCIETY
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-sans tracking-tight line-clamp-1">
                Robotics & Automation Society
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-code tracking-wider transition-all relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-code text-xs font-bold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Join IEEE RAS</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070b16]/98 border-b border-slate-800 backdrop-blur-xl p-5 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-code transition-all ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{link.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-cyan-400" />}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-800 mt-2">
              <Link
                to="/get-involved"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-400 text-slate-950 font-code text-sm font-bold shadow-lg shadow-cyan-500/20"
              >
                <span>Join / Get Involved</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
