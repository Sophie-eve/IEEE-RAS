export interface TechnicalCommittee {
  id: string;
  name: string;
  cluster: "Autonomous & Field" | "Mechanisms & Manipulation" | "Intelligence & Perception" | "Bio & Medical" | "Automation & Systems";
  scope: string;
  activities: string[];
  flagshipVenues: string[];
}

export const TECHNICAL_COMMITTEES_DATA: TechnicalCommittee[] = [
  {
    id: "tc-robot-learning",
    name: "Robot Learning",
    cluster: "Intelligence & Perception",
    scope: "Fosters research at the intersection of machine learning and physical robotics, emphasizing sample-efficient learning, sim-to-real transfer, and foundation models.",
    activities: [
      "Annual Seasonal Schools on Embodied AI",
      "Benchmark dataset curation for physical manipulation",
      "Special issues in IEEE Transactions on Robotics"
    ],
    flagshipVenues: ["ICRA", "IROS", "CoRL"]
  },
  {
    id: "tc-algorithms-planning",
    name: "Algorithms for Planning & Control",
    cluster: "Autonomous & Field",
    scope: "Develops computational algorithms for motion planning, trajectory optimization, formal verification, and algorithmic control in complex state spaces.",
    activities: [
      "Open-source motion planning benchmarking suites (OMPL integration)",
      "Workshops on provable guarantees for safety-critical systems"
    ],
    flagshipVenues: ["ICRA", "WAFR"]
  },
  {
    id: "tc-aerial-robotics",
    name: "Aerial Robotics and UAVs",
    cluster: "Autonomous & Field",
    scope: "Addresses unmanned aerial systems, micro-air vehicles, aerodynamic interactions, aggressive acrobatic flight, and airborne manipulation.",
    activities: [
      "Autonomous drone racing symposiums",
      "Subterranean and GPS-denied UAV navigation challenges"
    ],
    flagshipVenues: ["ICRA", "IROS"]
  },
  {
    id: "tc-soft-robotics",
    name: "Soft Robotics",
    cluster: "Mechanisms & Manipulation",
    scope: "Investigates deformable structures, flexible metamaterials, fluidic elastomeric actuators, and distributed morphological computation.",
    activities: [
      "Co-organizer of the annual IEEE RoboSoft Conference",
      "Standardization of soft actuator characterization methodologies"
    ],
    flagshipVenues: ["RoboSoft", "ICRA"]
  },
  {
    id: "tc-medical-robotics",
    name: "Surgical Robotics & Computer Assisted Intervention",
    cluster: "Bio & Medical",
    scope: "Focuses on minimally invasive surgical systems, catheter guidance, micro-surgical robotics, and augmented-reality surgical navigation.",
    activities: [
      "Surgical robotics clinical translation tutorials",
      "Workshops on autonomous tissue suturing and dissecting"
    ],
    flagshipVenues: ["BioRob", "ICRA", "Hamlyn"]
  },
  {
    id: "tc-marine-robotics",
    name: "Marine Robotics",
    cluster: "Autonomous & Field",
    scope: "Covers autonomous underwater vehicles (AUVs), unmanned surface vessels (USVs), acoustic telemetry, and subsea manipulation.",
    activities: [
      "Ocean floor mapping field trials",
      "Acoustic SLAM and marine vision benchmarking"
    ],
    flagshipVenues: ["OCEANS", "IROS", "FSR"]
  },
  {
    id: "tc-hri",
    name: "Human-Robot Interaction & Coordination",
    cluster: "Intelligence & Perception",
    scope: "Explores psychological, ergonomic, cognitive, and mechanical interfaces enabling fluid collaboration between people and robots.",
    activities: [
      "Physical human-robot interaction safety guidelines (ISO/TS 15066 support)",
      "Shared autonomy benchmarks"
    ],
    flagshipVenues: ["HRI", "RO-MAN", "ICRA"]
  },
  {
    id: "tc-automation-logistics",
    name: "Automation in Logistics",
    cluster: "Automation & Systems",
    scope: "Promotes research in automated warehouse sortation, multi-agent fleet dispatching, supply chain resilience, and container logistics.",
    activities: [
      "Industrial benchmark challenges for warehouse pick-and-place",
      "CASE Special Sessions on Green Logistics"
    ],
    flagshipVenues: ["CASE", "IROS"]
  },
  {
    id: "tc-micro-nano",
    name: "Micro/Nano Robotics",
    cluster: "Mechanisms & Manipulation",
    scope: "Explores manipulation at cellular and molecular scales using magnetic, optical, acoustic, and bio-hybrid propulsion.",
    activities: [
      "Mobile microrobots challenge at ICRA",
      "Targeted drug delivery micromanipulation workshops"
    ],
    flagshipVenues: ["MARSS", "ICRA"]
  },
  {
    id: "tc-space-robotics",
    name: "Space Robotics",
    cluster: "Autonomous & Field",
    scope: "Covers planetary rovers, orbital servicing manipulators, regolith excavation, and autonomous extraterrestrial habitat assembly.",
    activities: [
      "Planetary analogue field expeditions",
      "Workshops with space agencies (NASA, ESA, JAXA)"
    ],
    flagshipVenues: ["i-SAIRAS", "ICRA", "AIAA"]
  }
];
