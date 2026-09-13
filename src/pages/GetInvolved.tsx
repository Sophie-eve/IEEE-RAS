import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { PathwayFinder } from '../components/interactive/PathwayFinder';
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  Calendar, 
  HeartHandshake, 
  CheckCircle2, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Send,
  Mail
} from 'lucide-react';

export const GetInvolved: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const involvementPillars = [
    {
      title: 'JOIN',
      tagline: 'Learn About Membership Tiers',
      description: 'Join IEEE and add the Robotics and Automation Society (RAS) to access IEEE Xplore digital archives, conference registration discounts, and Society governance ballots.',
      actionText: 'Join IEEE & IEEE RAS',
      actionUrl: 'https://www.ieee.org/membership/join/index.html',
      features: [
        'Discounts on ICRA, IROS, CASE & RoboSoft registrations',
        'Direct electronic access to T-RO, RA-L, and T-ASE',
        'Eligibility for IEEE Senior Member and Fellow elevation',
        'Official IEEE @ieee.org email alias'
      ]
    },
    {
      title: 'LEARN',
      tagline: 'Educational & Technical Resources',
      description: 'Sharpen your knowledge with IEEE RAS Seasonal Schools, Distinguished Lectures, tutorial webinars, and curated educational curricula for university coursework.',
      actionText: 'Explore Educational Hub',
      actionUrl: 'https://www.ieee-ras.org/educational-resources-outreach',
      features: [
        'Full access to the IEEE RAS Resource Center archive',
        'Seasonal Schools on Robot Learning and Embodied AI',
        'Distinguished Lecturer visits to local universities',
        'Open-access educational robotics datasets & benchmarks'
      ]
    },
    {
      title: 'CONNECT',
      tagline: 'Meet Researchers & Engineers',
      description: 'Network with over 15,000 colleagues across 180+ local chapters, specialized Technical Committees, and dedicated Women in Engineering (WIE) cohorts.',
      actionText: 'Locate Your Chapter',
      actionUrl: 'https://www.ieee-ras.org/chapters',
      features: [
        'Global network of 180+ active regional chapters',
        'Women in Engineering (WIE) in RAS receptions',
        'Young Professionals early-career transition mentors',
        'Direct collaboration with academic and industry peers'
      ]
    },
    {
      title: 'PARTICIPATE',
      tagline: 'Attend Conferences & Competitions',
      description: 'Experience cutting-edge hardware and algorithms live. Attend ICRA in Vienna, IROS in Fukuoka, or compete in the Student Humanitarian Robotics Challenge.',
      actionText: 'View Events Calendar',
      actionUrl: '/events',
      isInternal: true,
      features: [
        'Present peer-reviewed papers at flagship symposiums',
        'Compete in collegiate autonomous robotics challenges',
        'Participate in hands-on workshops and tutorials',
        'Exhibit commercial robotics technology'
      ]
    },
    {
      title: 'CONTRIBUTE',
      tagline: 'Volunteer, Publish & Lead',
      description: 'Shape the future of the robotics discipline. Review for premier transactions, organize conference tracks, join Technical Committees, or mentor junior roboticists.',
      actionText: 'Volunteer with IEEE RAS',
      actionUrl: 'https://www.ieee-ras.org/about-ras/governance/nominations-appointments',
      features: [
        'Peer review for IEEE Transactions on Robotics (T-RO)',
        'Organize workshops, tutorials, and special sessions',
        'Lead an IEEE RAS Student Branch or Local Chapter',
        'Contribute to IEEE robotics ontology & safety standards'
      ]
    }
  ];

  const membershipTiers = [
    {
      tier: 'Student Member',
      scope: 'Undergraduate & Graduate Students',
      highlight: '75% Discounted Dues',
      benefits: [
        'ICRA & IROS student travel support grants',
        'Access to student paper competitions',
        'Local student branch chapter activities',
        'IEEE Xplore student digital access'
      ]
    },
    {
      tier: 'Higher Grade Member',
      scope: 'Practicing Engineers & Academics',
      highlight: 'Full Professional Standing',
      benefits: [
        'Substantial conference registration discounts',
        'Voting rights in Society annual elections',
        'Leadership roles in Technical Committees',
        'Publishing discounts for Open Access journals'
      ]
    },
    {
      tier: 'Senior Member & Fellow',
      scope: 'Distinguished Leaders & Pioneers',
      highlight: 'Prestigious Honor Grade',
      benefits: [
        'Peer-reviewed honor elevation recognition',
        'Eligible for Society Executive Committee',
        'Distinguished Lecturer Program appointment',
        'Permanent recognition on Society Honor Roll'
      ]
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <PageHeader
        badge="BECOME PART OF THE GLOBAL ROBOTICS MOVEMENT"
        title="Build the Future of Robotics"
        description="Whether you are an aspiring student, university researcher, or industry leader, IEEE RAS provides the community, resources, and credibility to elevate your impact."
        breadcrumb="Get Involved"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= INTERACTIVE ROLE PATHFINDER ================= */}
        <section>
          <PathwayFinder />
        </section>

        {/* ================= THE 5 PATHWAYS TO PARTICIPATION ================= */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">THE FIVE PILLARS OF PARTICIPATION</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ways You Can Participate
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Explore the five distinct ways you can engage with the Society based on your current focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="tech-card rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-code text-xs font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/40 px-2.5 py-0.5 rounded">
                      {pillar.title}
                    </span>
                    <span className="text-[11px] font-code text-slate-500">
                      PARTICIPATION 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {pillar.tagline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/80 mt-5">
                  {pillar.isInternal ? (
                    <a
                      href={pillar.actionUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 font-code text-xs font-semibold hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all w-full justify-center"
                    >
                      <span>{pillar.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={pillar.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 font-code text-xs font-semibold hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all w-full justify-center"
                    >
                      <span>{pillar.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MEMBERSHIP TIERS COMPARISON ================= */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">MEMBERSHIP CLASSIFICATIONS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Society Membership Grades & Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, idx) => (
              <div
                key={idx}
                className="tech-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-xs font-code text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded uppercase">
                    {tier.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">{tier.tier}</h3>
                  <p className="text-xs text-slate-400 font-code">{tier.scope}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {tier.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href="https://www.ieee.org/membership/join/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-code text-xs font-semibold hover:bg-cyan-500 hover:text-slate-950 transition"
                  >
                    <span>Register Membership</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= NEWSLETTER / DISPATCH SIGNUP ================= */}
        <section className="tech-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-[#070e20] text-center max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Stay Informed on Robotics Breakthroughs
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Subscribe to the IEEE RAS electronic newsletter for paper submission deadlines, seasonal school announcements, and ICRA/IROS conference alerts.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl text-xs font-code text-emerald-300 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! You are now subscribed to the IEEE RAS Global Dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your university or work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#050914] border border-slate-700 rounded-xl px-4 py-2.5 text-xs font-code text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-code text-xs font-bold hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] font-code text-slate-500">
            No spam. Unsubscribe anytime. In accordance with IEEE Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};
