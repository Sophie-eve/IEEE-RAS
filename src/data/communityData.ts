export interface IeeeRegion {
  id: string;
  name: string;
  code: string;
  geographicScope: string;
  chaptersCount: string;
  keyHubs: string[];
  summary: string;
}

export const IEEE_REGIONS: IeeeRegion[] = [
  {
    id: "r1-6",
    name: "IEEE Regions 1–6 (United States)",
    code: "R1–R6",
    geographicScope: "United States (Northeastern, Eastern, Southeastern, Central, Southwestern, Western)",
    chaptersCount: "60+ Active Chapters & Joint Sections",
    keyHubs: ["Boston / MIT", "Silicon Valley / Stanford", "Pittsburgh / CMU", "Atlanta / Georgia Tech"],
    summary: "Home to pioneering robotics research labs, foundational IEEE milestones, and extensive university student branches."
  },
  {
    id: "r7",
    name: "IEEE Region 7 (IEEE Canada)",
    code: "R7",
    geographicScope: "All Canadian Provinces & Territories",
    chaptersCount: "14+ Active Chapters",
    keyHubs: ["Toronto / Waterloo", "Montreal (Mila & McGill)", "Vancouver (UBC)"],
    summary: "Leading center for AI-driven robotics, medical intervention research, and field forestry/mining automation."
  },
  {
    id: "r8",
    name: "IEEE Region 8 (Europe, Middle East, Africa)",
    code: "R8",
    geographicScope: "Europe, Middle East, and Africa",
    chaptersCount: "48+ Active Chapters",
    keyHubs: ["Zurich (ETH)", "Munich (TUM / DLR)", "London (Imperial / UCL)", "Lausanne (EPFL)", "Doha / Dubai"],
    summary: "World-renowned for soft robotics, autonomous micro-air vehicles, industrial manipulation, and ethics frameworks."
  },
  {
    id: "r9",
    name: "IEEE Region 9 (Latin America & Caribbean)",
    code: "R9",
    geographicScope: "Central America, South America, and the Caribbean",
    chaptersCount: "22+ Active Chapters",
    keyHubs: ["São Paulo (USP)", "Buenos Aires", "Bogotá", "Mexico City (UNAM)"],
    summary: "Vibrant community pioneering agricultural automation, environmental monitoring in the Amazon, and student competitions."
  },
  {
    id: "r10",
    name: "IEEE Region 10 (Asia & Pacific)",
    code: "R10",
    geographicScope: "Asia, Australia, New Zealand, and Pacific Rim",
    chaptersCount: "55+ Active Chapters",
    keyHubs: ["Tokyo / Kyoto", "Singapore (NUS / NTU)", "Seoul (KAIST / SNU)", "Beijing / Tsinghua", "Bengaluru / IISc", "Sydney"],
    summary: "Fastest-growing robotics research hub with massive advancements in humanoid systems, semiconductor automation, and marine robotics."
  }
];

export interface CommunityInitiative {
  id: string;
  title: string;
  leadGroup: string;
  description: string;
  offerings: string[];
  linkText: string;
  linkUrl: string;
  badge: string;
}

export const COMMUNITY_INITIATIVES: CommunityInitiative[] = [
  {
    id: "sac",
    title: "Student Activities Committee (SAC)",
    leadGroup: "Global Student Council",
    description: "Empowering undergraduate and graduate students globally with travel grants to ICRA and IROS, mentorship pairings with society fellows, and international paper contests.",
    offerings: [
      "ICRA / IROS Student Travel Grants (up to $1,500)",
      "Best Student Paper Awards across all transactions",
      "Collegiate Robotics Hackathons & Grand Challenges",
      "Global Graduate Mentorship Network"
    ],
    linkText: "Explore Student Programs",
    linkUrl: "https://www.ieee-ras.org/students",
    badge: "Student Programs"
  },
  {
    id: "wie",
    title: "Women in Engineering (WIE) in RAS",
    leadGroup: "WIE Committee",
    description: "Dedicated to advancing female robotics scientists, engineers, and educators. Hosts international luncheons, travel awards, and leadership development workshops at flagship conferences.",
    offerings: [
      "WIE Networking Receptions at ICRA, IROS, & CASE",
      "Early-Career Leadership Grants",
      "Keynote Speaker Visibility & Nomination Panels",
      "K-12 STEM Outreach Ambassadors"
    ],
    linkText: "Join WIE in RAS",
    linkUrl: "https://www.ieee-ras.org/women-in-engineering",
    badge: "Diversity & Leadership"
  },
  {
    id: "yp",
    title: "Young Professionals (YP) in Robotics",
    leadGroup: "YP Committee",
    description: "Tailored transition platform for recent graduates and early-career roboticists within 15 years of their first degree, bridging academic research with industrial careers.",
    offerings: [
      "Industry-Academia Transition Seminars",
      "Startup Pitch Competitions & Venture Roundtables",
      "Reviewer Mentorship for T-RO and RA-L",
      "Annual Young Professional Research Spotlight"
    ],
    linkText: "Connect with YP",
    linkUrl: "https://www.ieee-ras.org/young-professionals",
    badge: "Early Career"
  },
  {
    id: "dci",
    title: "Developing Countries Initiative",
    leadGroup: "Outreach & Inclusivity Directorate",
    description: "Promoting robotics education and research infrastructure in economically emerging regions through subsidized memberships, seasonal schools, and donated hardware kits.",
    offerings: [
      "Subsidized IEEE & RAS Membership Dues",
      "Fully Sponsored Regional Summer/Winter Schools",
      "Open-Hardware Robotics Curriculum Grants",
      "Virtual Conference Registration Waivers"
    ],
    linkText: "Learn About Outreach",
    linkUrl: "https://www.ieee-ras.org/membership/developing-countries-program",
    badge: "Global Equity"
  }
];

export interface GetInvolvedPersona {
  id: string;
  role: string;
  tagline: string;
  icon: string;
  primaryBenefits: string[];
  actionSteps: string[];
  ctaText: string;
  ctaUrl: string;
}

export const GET_INVOLVED_PERSONAS: GetInvolvedPersona[] = [
  {
    id: "student",
    role: "Student / Graduate Researcher",
    tagline: "Accelerate your career in robotics and gain access to world-class mentors.",
    icon: "GraduationCap",
    primaryBenefits: [
      "Discounted student membership rates (up to 75% off)",
      "Access to ICRA & IROS travel support grants",
      "Eligibility for prestigious student paper awards",
      "Access to IEEE Xplore digital robotics archive"
    ],
    actionSteps: [
      "Join IEEE and add IEEE Robotics and Automation Society membership",
      "Find or charter an IEEE RAS Student Branch Chapter at your university",
      "Apply for the Student Travel Support Grant for ICRA 2026",
      "Submit an abstract to the Student Humanitarian Robotics Challenge"
    ],
    ctaText: "Join as Student Member",
    ctaUrl: "https://www.ieee.org/membership/join/index.html"
  },
  {
    id: "researcher",
    role: "Academic / Research Scientist",
    tagline: "Publish in premier archival journals and steer the scientific discourse.",
    icon: "Microscope",
    primaryBenefits: [
      "Rapid publishing track via IEEE Robotics and Automation Letters (RA-L)",
      "Leadership opportunities across 35+ Technical Committees",
      "Nominate and be nominated for Society & IEEE Fellow honors",
      "Discounts on conference registration and open access publication fees"
    ],
    actionSteps: [
      "Submit your latest breakthrough manuscript to T-RO or RA-L",
      "Join a Technical Committee aligned with your research domain",
      "Propose a workshop or tutorial at ICRA or IROS",
      "Sign up as a peer reviewer for flagship IEEE RAS journals"
    ],
    ctaText: "Explore Author & Reviewer Portal",
    ctaUrl: "https://www.ieee-ras.org/publications"
  },
  {
    id: "industry",
    role: "Industry Engineer / Technology Leader",
    tagline: "Bridge cutting-edge research with scalable commercial robotics.",
    icon: "Briefcase",
    primaryBenefits: [
      "Access to industrial automation roadmaps via CASE and T-ASE",
      "Recruit top doctoral talent at flagship conference exhibition pavilions",
      "Participate in robotics safety standards (IEEE / ISO committees)",
      "Connect with innovative robotics startups and technology spinouts"
    ],
    actionSteps: [
      "Register for CASE 2026 in Toronto or ICRA 2026 in Vienna",
      "Sponsor or exhibit at upcoming flagship conference career fairs",
      "Join the Automation in Logistics or Intelligent Manufacturing TC",
      "Contribute industrial challenge benchmarks to the community"
    ],
    ctaText: "Join Professional Community",
    ctaUrl: "https://www.ieee.org/membership/join/index.html"
  },
  {
    id: "volunteer",
    role: "Chapter Leader & Volunteer",
    tagline: "Organize regional events and build thriving local robotics ecosystems.",
    icon: "HeartHandshake",
    primaryBenefits: [
      "Direct chapter funding support from IEEE RAS Headquarters",
      "Access to Distinguished Lecturer Program speakers for your events",
      "Annual Chapter of the Year awards and global recognition",
      "Executive leadership training and networking"
    ],
    actionSteps: [
      "Locate your local IEEE Section and establish an RAS Chapter",
      "Invite an IEEE RAS Distinguished Lecturer for a local seminar",
      "Host a regional robotics hackathon or high-school outreach day",
      "Submit annual chapter activity reports for activity grants"
    ],
    ctaText: "Charter or Lead a Chapter",
    ctaUrl: "https://www.ieee-ras.org/chapters"
  }
];
