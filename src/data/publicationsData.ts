export interface Publication {
  id: string;
  title: string;
  abbreviation: string;
  type: "Transactions" | "Letters" | "Magazine" | "Proceedings";
  impactFactor: string;
  eigenfactor: string;
  frequency: string;
  scope: string;
  description: string;
  keyTopics: string[];
  submissionInfo: string;
  xploreUrl: string;
  authorGuideUrl: string;
  isFlagship: boolean;
}

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "t-ro",
    title: "IEEE Transactions on Robotics",
    abbreviation: "T-RO",
    type: "Transactions",
    impactFactor: "9.4",
    eigenfactor: "0.019",
    frequency: "Bimonthly",
    scope: "Fundamental theoretical and experimental advances in robotics science, kinematics, perception, and embodied control.",
    description: "IEEE Transactions on Robotics publishes archival-quality papers that present fundamental advances in the theory, analysis, simulation, and physical realization of robotics systems operating in unstructured environments.",
    keyTopics: [
      "Rigid & Compliant Multibody Dynamics",
      "Visual-Inertial Odometry & SLAM",
      "Optimal & Stochastic Motion Planning",
      "Dexterous Haptic Manipulation",
      "Safe Human-Robot Collaboration",
      "Micro & Bio-Inspired Robotics"
    ],
    submissionInfo: "Regular papers (up to 12 pages) and Technical Communications (up to 6 pages). Requires rigorous experimental validation or mathematical proofs.",
    xploreUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8860",
    authorGuideUrl: "https://www.ieee-ras.org/publications/t-ro",
    isFlagship: true
  },
  {
    id: "ra-l",
    title: "IEEE Robotics and Automation Letters",
    abbreviation: "RA-L",
    type: "Letters",
    impactFactor: "5.2",
    eigenfactor: "0.038",
    frequency: "Monthly (Continuous Electronic)",
    scope: "Rapid publication of peer-reviewed, concise scientific breakthroughs with seamless joint conference presentation options.",
    description: "RA-L offers rapid dissemination of cutting-edge robotics and automation results. Authors can submit manuscripts directly or opt for simultaneous presentation at flagship conferences like ICRA or IROS.",
    keyTopics: [
      "Rapid Sim-to-Real Policy Transfer",
      "Lightweight Autonomous UAV Navigation",
      "Soft Robotic Grippers & Tactile Sensors",
      "Novel Sensor Calibration Pipelines",
      "Multi-Robot Swarm Coordination"
    ],
    submissionInfo: "Strict 8-page limit (6 pages content + up to 2 pages references). Rapid peer review turnaround (typically under 60 days to first decision).",
    xploreUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7083369",
    authorGuideUrl: "https://www.ieee-ras.org/publications/ra-l",
    isFlagship: true
  },
  {
    id: "t-ase",
    title: "IEEE Transactions on Automation Science and Engineering",
    abbreviation: "T-ASE",
    type: "Transactions",
    impactFactor: "5.6",
    eigenfactor: "0.012",
    frequency: "Quarterly",
    scope: "Foundational science and engineering of automation across manufacturing, healthcare, smart logistics, and cyber-physical systems.",
    description: "T-ASE addresses the science of efficiency and reliability in structured settings. Unlike pure robotics, automation in T-ASE focuses on scalable system-level productivity, discrete-event scheduling, and zero-defect quality control.",
    keyTopics: [
      "Discrete Event Dynamic Systems (DEDS)",
      "Cyber-Physical Production Systems",
      "Semiconductor Wafer Fab Logistics",
      "Healthcare & Clinical Automation",
      "Reliability Engineering & Fault Diagnostics"
    ],
    submissionInfo: "Full archival papers and industrial application case studies. Emphasizes mathematical modeling, optimization, and real-world system trials.",
    xploreUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8856",
    authorGuideUrl: "https://www.ieee-ras.org/publications/t-ase",
    isFlagship: true
  },
  {
    id: "ram",
    title: "IEEE Robotics & Automation Magazine",
    abbreviation: "RAM",
    type: "Magazine",
    impactFactor: "4.8",
    eigenfactor: "0.009",
    frequency: "Quarterly",
    scope: "Broad-interest peer-reviewed tutorial articles, industry spotlights, competitive challenges, and historical retrospectives.",
    description: "RAM provides accessible, visually rich tutorial articles, societal perspectives on robotics ethics and policy, educational curricula, and announcements for the broader global robotics engineering community.",
    keyTopics: [
      "Accessible State-of-the-Art Tutorials",
      "Robotics Ethics, Law & Societal Impacts",
      "Grand Challenges & Competitions (e.g. DARPA, RoboCup)",
      "Standardization & Open-Source Software Tools",
      "Profiles of Society Fellows & Pioneers"
    ],
    submissionInfo: "Articles feature high-quality diagrams, readable exposition for students and practitioners, and extensive multimedia components.",
    xploreUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=100",
    authorGuideUrl: "https://www.ieee-ras.org/publications/ram",
    isFlagship: false
  }
];
