export interface EventItem {
  id: string;
  title: string;
  acronym: string;
  category: "Conferences" | "Workshops" | "Webinars" | "Competitions";
  date: string;
  timeframe: string;
  location: string;
  isVirtual: boolean;
  isFlagship: boolean;
  description: string;
  fullOverview: string;
  tracks: string[];
  keyDates: { label: string; date: string }[];
  officialUrl: string;
  status: "Registration Open" | "Call for Papers" | "Upcoming" | "Announced";
  attendanceEst: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "icra-2026",
    title: "IEEE International Conference on Robotics and Automation",
    acronym: "ICRA",
    category: "Conferences",
    date: "May 18–22, 2026",
    timeframe: "May 2026",
    location: "Vienna, Austria",
    isVirtual: false,
    isFlagship: true,
    description: "The flagship and world's largest gathering in robotics research, bringing together thousands of researchers, engineers, and leading industry innovators.",
    fullOverview: "ICRA is the IEEE Robotics and Automation Society's flagship conference and the premier international forum for robotics researchers to present and discuss their work. Featuring keynotes, peer-reviewed technical sessions, workshops, interactive exhibitions, and student competitions.",
    tracks: [
      "Robot Learning & Foundation Models",
      "Field & Extreme Environment Robotics",
      "Medical & Surgical Robotics",
      "Micro-Nano Manipulation",
      "Aerial Vehicles & Swarm Autonomy",
      "Human-Robot Physical Interaction"
    ],
    keyDates: [
      { label: "Paper Submission Deadline", date: "September 15, 2025" },
      { label: "Notification of Acceptance", date: "January 15, 2026" },
      { label: "Early Bird Registration", date: "March 1, 2026" },
      { label: "Conference Opening Session", date: "May 18, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra",
    status: "Registration Open",
    attendanceEst: "4,500+ Researchers & Engineers"
  },
  {
    id: "iros-2026",
    title: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    acronym: "IROS",
    category: "Conferences",
    date: "October 11–15, 2026",
    timeframe: "October 2026",
    location: "Fukuoka, Japan",
    isVirtual: false,
    isFlagship: true,
    description: "A premier international conference co-sponsored by IEEE RAS, RSJ, and SICE focusing on intelligent robotics, mechatronics, and autonomous machines.",
    fullOverview: "IROS is one of the world's largest and most impactful robotics research conferences. It explores intelligent systems operating in real-world scenarios, human-robot symbiosis, artificial intelligence for mechanics, and industrial mechatronics.",
    tracks: [
      "Intelligent Mechatronics",
      "Biomimetic Actuation & Sensor Arrays",
      "Visual SLAM in Dynamic Scenes",
      "Cognitive Decision Making",
      "Autonomous Ground Navigation"
    ],
    keyDates: [
      { label: "Paper Submission Deadline", date: "March 1, 2026" },
      { label: "Review Notification", date: "June 30, 2026" },
      { label: "Final Manuscript Due", date: "July 31, 2026" },
      { label: "Conference Dates", date: "October 11–15, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/conferences-workshops/financially-co-sponsored/iros",
    status: "Call for Papers",
    attendanceEst: "3,800+ Delegates"
  },
  {
    id: "case-2026",
    title: "IEEE International Conference on Automation Science and Engineering",
    acronym: "CASE",
    category: "Conferences",
    date: "August 24–28, 2026",
    timeframe: "August 2026",
    location: "Toronto, Canada",
    isVirtual: false,
    isFlagship: true,
    description: "The primary IEEE conference dedicated to fundamental and applied automation research, cyber-physical manufacturing, and supply chain logistics.",
    fullOverview: "CASE addresses structured environments where automation drives productivity, sustainability, and resilience. Focus areas include semiconductor manufacturing, smart pharmaceutical fabrication, resilient supply chains, and zero-defect quality control.",
    tracks: [
      "Discrete Event Systems & Petri Nets",
      "Cyber-Physical Production Systems",
      "Healthcare & Laboratory Automation",
      "Energy Efficiency in Smart Grids",
      "Supply Chain Operations Research"
    ],
    keyDates: [
      { label: "Special Session Proposals", date: "February 1, 2026" },
      { label: "Paper Submission Deadline", date: "March 15, 2026" },
      { label: "Author Notification", date: "May 15, 2026" },
      { label: "Conference Dates", date: "August 24–28, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/case",
    status: "Call for Papers",
    attendanceEst: "1,200+ Industrial & Academic Leaders"
  },
  {
    id: "humanoids-2026",
    title: "IEEE-RAS International Conference on Humanoid Robots",
    acronym: "Humanoids",
    category: "Conferences",
    date: "December 2–4, 2026",
    timeframe: "December 2026",
    location: "Seoul, South Korea",
    isVirtual: false,
    isFlagship: false,
    description: "The premier international forum for researchers investigating bipedal locomotion, whole-body dynamics, and anthropomorphic robots.",
    fullOverview: "Humanoids brings together pioneers in whole-body control, high-torque density actuators, bipedal dynamic balance, tactile skins, and ethical human-robot coexistence in shared work and domestic spaces.",
    tracks: [
      "Whole-Body Dynamic Balancing",
      "Bipedal Gait Synthesis & Terrain Adaptation",
      "Anthropomorphic Dexterous Hands",
      "Visual-Tactile Physical Reasoning"
    ],
    keyDates: [
      { label: "Full Paper Deadline", date: "July 1, 2026" },
      { label: "Notification", date: "September 15, 2026" },
      { label: "Conference Opening", date: "December 2, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/conferences-workshops",
    status: "Upcoming",
    attendanceEst: "800+ Humanoid Specialists"
  },
  {
    id: "robosoft-2026",
    title: "IEEE-RAS International Conference on Soft Robotics",
    acronym: "RoboSoft",
    category: "Conferences",
    date: "April 13–17, 2026",
    timeframe: "April 2026",
    location: "Singapore",
    isVirtual: false,
    isFlagship: false,
    description: "Leading research conference on compliant mechanisms, bio-inspired elastomeric actuators, fluidic muscles, and soft physical intelligence.",
    fullOverview: "RoboSoft explores systems with continuous compliance and deformable matter that safely interact with living tissue and handle fragile objects with natural biomimetic adaptability.",
    tracks: [
      "Elastomeric Pneumatic Actuators",
      "Electroactive Polymer Sensing",
      "Continuum Kinematics & Mechanics",
      "Soft Grippers for Food & Marine Sampling"
    ],
    keyDates: [
      { label: "Manuscript Due", date: "November 10, 2025" },
      { label: "Acceptance Notice", date: "January 20, 2026" },
      { label: "Conference Opening", date: "April 13, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/robosoft",
    status: "Registration Open",
    attendanceEst: "700+ Soft Robotics Innovators"
  },
  {
    id: "seasonal-school-2026",
    title: "IEEE RAS Seasonal School on Foundation Models & Embodied AI",
    acronym: "RAS-SS",
    category: "Workshops",
    date: "July 6–10, 2026",
    timeframe: "July 2026",
    location: "Munich, Germany / Hybrid",
    isVirtual: true,
    isFlagship: false,
    description: "An intensive 5-day educational workshop organized by the IEEE RAS Technical Committee on Robot Learning for PhD students and junior researchers.",
    fullOverview: "Participants gain hands-on training with state-of-the-art vision-language-action (VLA) architectures, sim-to-real reinforcement learning, policy deployment on physical manipulators, and benchmark datasets.",
    tracks: [
      "Vision-Language-Action (VLA) Architectures",
      "Diffusion Policies for Manipulation",
      "Physics Simulators (MuJoCo, Isaac Gym)",
      "Safety Verification for Learned Policies"
    ],
    keyDates: [
      { label: "Application Deadline", date: "April 15, 2026" },
      { label: "Selection Announcement", date: "May 1, 2026" },
      { label: "School Commences", date: "July 6, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/educational-resources-outreach/seasonal-schools",
    status: "Registration Open",
    attendanceEst: "150 Selected Graduate Fellows"
  },
  {
    id: "webinar-safe-rl",
    title: "Global Webinar: Provable Safety Guarantees for Neural Robot Controllers",
    acronym: "RAS-WEB",
    category: "Webinars",
    date: "June 24, 2026",
    timeframe: "June 2026",
    location: "Global Online Broadcast (IEEE RAS Xplore)",
    isVirtual: true,
    isFlagship: false,
    description: "Distinguished Lecture hosted by the IEEE RAS Control Systems TC exploring Control Barrier Functions (CBFs) paired with neural networks.",
    fullOverview: "A 90-minute technical lecture and live Q&A session discussing how formal mathematical barrier certificates can guarantee collision-free operation of reinforcement learning policies deployed on industrial robot arms.",
    tracks: [
      "Control Barrier Functions (CBFs)",
      "Neural Lyapunov Certificates",
      "High-Rate Embedded Execution",
      "Live Q&A with Distinguished Lecturers"
    ],
    keyDates: [
      { label: "RSVP Deadline", date: "June 23, 2026" },
      { label: "Live Broadcast", date: "June 24, 2026 (14:00 UTC)" }
    ],
    officialUrl: "https://www.ieee-ras.org/educational-resources-outreach/distinguished-lecturers",
    status: "Upcoming",
    attendanceEst: "1,200+ Virtual Participants"
  },
  {
    id: "student-humanitarian-challenge",
    title: "IEEE RAS Student Humanitarian Robotics & Disaster Response Challenge",
    acronym: "SHRC",
    category: "Competitions",
    date: "September 14–17, 2026",
    timeframe: "September 2026",
    location: "Geneva, Switzerland",
    isVirtual: false,
    isFlagship: false,
    description: "International competition challenging collegiate teams to deploy autonomous rovers and UAVs in simulated post-disaster search & rescue zones.",
    fullOverview: "Co-organized by the IEEE RAS Special Interest Group on Humanitarian Technology (SIGHT) and the Student Activities Committee. Teams must navigate rubble, detect heat signatures, map unmapped collapsed structures, and deliver mock emergency supplies.",
    tracks: [
      "Autonomous Rubble Traversal",
      "Thermal Signature Human Finding",
      "Ad-hoc Mesh Networking Relay",
      "Low-Cost Humanitarian Design Award"
    ],
    keyDates: [
      { label: "Team Intent Registration", date: "March 30, 2026" },
      { label: "System Design Paper", date: "May 30, 2026" },
      { label: "Finalists Field Trials", date: "September 14, 2026" }
    ],
    officialUrl: "https://www.ieee-ras.org/students",
    status: "Registration Open",
    attendanceEst: "40 University Finalist Teams"
  }
];
