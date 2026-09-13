export interface Technology {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  extendedDescription: string;
  corePillars: string[];
  applications: string[];
  ieeeRasFocus: string;
  technicalMetric: { label: string; value: string };
  iconName: string;
}

export const TECHNOLOGIES_DATA: Technology[] = [
  {
    id: "robotics",
    title: "Robotics",
    subtitle: "Embodied Physical Intelligence",
    category: "Core Discipline",
    description: "The science and engineering of mechanical systems capable of performing physical tasks autonomously or under remote command in unstructured environments.",
    extendedDescription: "Robotics encompasses mechanical kinematics, actuation dynamics, sensor integration, and real-time state estimation. Within IEEE RAS, robotics focuses on systems operating under uncertainty across terrestrial, extraterrestrial, aquatic, and bio-inspired realms.",
    corePillars: ["Kinematics & Dynamics", "Sensorimotor Control", "Actuator Architectures", "State Estimation"],
    applications: ["Planetary Exploration", "Industrial Teleoperation", "Disaster Response Units", "Exoskeletons"],
    ieeeRasFocus: "Covered extensively in IEEE Transactions on Robotics (T-RO) and ICRA flagship research tracks.",
    technicalMetric: { label: "Standard Precision", value: "< 0.05 mm repeatability" },
    iconName: "Bot"
  },
  {
    id: "autonomous-systems",
    title: "Autonomous Systems",
    subtitle: "Self-Governing Agent Architectures",
    category: "Autonomous Systems",
    description: "Systems designed to perceive surroundings, synthesize world models, plan optimal behaviors, and execute missions without ongoing human intervention.",
    extendedDescription: "Autonomy synthesizes simultaneous localization and mapping (SLAM), robust trajectory generation, decision-making under uncertainty, and fault-tolerant fail-safes for critical environments.",
    corePillars: ["Visual-Inertial SLAM", "Probabilistic Planning", "Real-Time Path Optimization", "Fail-Safe Safety Envelopes"],
    applications: ["Autonomous Vehicles (AVs)", "Subsea Survey AUVs", "Deep-Space Probes", "Autonomous Mining Fleets"],
    ieeeRasFocus: "Focus of the Autonomous Ground Vehicles Technical Committee and IEEE IROS conferences.",
    technicalMetric: { label: "Decision Latency", value: "< 12 ms loop closure" },
    iconName: "Compass"
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    subtitle: "Foundational Machine Learning for Robots",
    category: "Intelligence & Learning",
    description: "Integrating deep learning, foundation models, reinforcement learning, and symbolic reasoning to enable adaptive behavior in dynamic environments.",
    extendedDescription: "Unlike purely digital AI, embodied AI faces physics, sensor noise, latency, and sample-efficiency bottlenecks. IEEE RAS champions sample-efficient learning, sim-to-real transfer, and provably stable neuro-symbolic policies.",
    corePillars: ["Sim-to-Real Transfer", "Model-Based RL", "Robot Foundation Models", "Zero-Shot Generalization"],
    applications: ["Adaptive Locomotion", "Autonomous Visual Inspection", "Self-Tuning Controllers", "Semantic Scene Reasoning"],
    ieeeRasFocus: "Prominently featured in IEEE Robotics and Automation Letters (RA-L) and Robot Learning sessions.",
    technicalMetric: { label: "Sim-to-Real Fidelity", value: "98.4% Transfer Rate" },
    iconName: "Cpu"
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    subtitle: "Spatial Perception & Scene Semantics",
    category: "Perception",
    description: "Algorithmic transformation of visual sensor telemetry into 3D geometric maps, volumetric representations, and actionable semantic understandings.",
    extendedDescription: "Robot vision spans RGB-D sensors, LiDAR point-cloud processing, event cameras, 3D Gaussian splatting, and neural radiance fields (NeRFs) designed specifically for high-speed robotic flight and manipulation.",
    corePillars: ["3D Gaussian Scene Splatting", "Event-Camera Neuromorphic Vision", "Real-Time Volumetric Mapping", "Semantic Segmentation"],
    applications: ["UAV Obstacle Evasion", "Surgical Navigation Systems", "Agricultural Crop Profiling", "Augmented Reality Guidance"],
    ieeeRasFocus: "Coordinated with IEEE Computer Society and featured across CASE and ICRA vision symposiums.",
    technicalMetric: { label: "Optical Ingest", value: "60+ FPS at 4K resolution" },
    iconName: "Eye"
  },
  {
    id: "human-robot-interaction",
    title: "Human-Robot Interaction",
    subtitle: "Safe, Intuitive, and Empathetic Collaboration",
    category: "Interaction & Safety",
    description: "The interdisciplinary study of communication, shared physical collaboration, mutual intent recognition, and cognitive safety between humans and robots.",
    extendedDescription: "HRI investigates force-limiting impedance control for physical cobots, multimodal verbal and gestural interfaces, psychophysiological stress tracking, and ethical considerations in humanoid deployment.",
    corePillars: ["Physical Human-Robot Interaction (pHRI)", "Intention Estimation", "Shared Control Theory", "Ergonomic Telepresence"],
    applications: ["Cobot Factory Assembly Lines", "Assistive Geriatric Care", "Rehabilitation Robotics", "Collaborative Surgery"],
    ieeeRasFocus: "Supported by the Human-Robot Interaction & Coordination Technical Committee and IEEE RO-MAN.",
    technicalMetric: { label: "Reaction Compliance", value: "ISO/TS 15066 safety verified" },
    iconName: "Users"
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Structured Systems & Scalable Efficiency",
    category: "Industrial Systems",
    description: "The scientific methodology for synthesizing predictable, resilient, and continuous process workflows in structured industrial and scientific facilities.",
    extendedDescription: "IEEE RAS defines automation as the science of engineered efficiency in structured contexts, distinguishing it from robotics which handles unstructured variability. Encompasses discrete-event systems and IoT pipelines.",
    corePillars: ["Discrete Event Dynamic Systems", "Supply Chain Cyber-Physical Twin", "SCADA / Industrial IoT", "Stochastic Modeling"],
    applications: ["Semiconductor Lithography Fabs", "Pharmaceutical Bioreactor Control", "Automated Distribution Centers", "Smart Electrical Grids"],
    ieeeRasFocus: "Flagship topic of the IEEE International Conference on Automation Science and Engineering (CASE).",
    technicalMetric: { label: "Process Throughput", value: "99.999% Reliability" },
    iconName: "Factory"
  },
  {
    id: "control-systems",
    title: "Control Systems",
    subtitle: "Mathematical Rigor & Stability Guarantees",
    category: "Mathematical Foundations",
    description: "Mathematical formulation of feedback laws, state observers, model predictive control, and nonlinear Lyapunov techniques ensuring guaranteed stability.",
    extendedDescription: "Control theory provides the bedrock mathematical guarantees enabling high-performance robotic hardware to execute agile maneuvers without destabilizing or violating strict actuator constraints.",
    corePillars: ["Model Predictive Control (MPC)", "Lyapunov Non-linear Stability", "H-Infinity Robust Control", "Adaptive Sliding Mode"],
    applications: ["Quadruped Dynamic Balancing", "Hypersonic Rocket Attitude Control", "Nano-Positioning Piezo Stages", "Power Grid Synchronization"],
    ieeeRasFocus: "Core pillar featured in IEEE Transactions on Control Systems Technology and T-RO.",
    technicalMetric: { label: "Feedback Loop Rate", value: "Up to 10 kHz cycle frequency" },
    iconName: "Gauge"
  },
  {
    id: "manipulation",
    title: "Manipulation",
    subtitle: "Dexterity, Contact Mechanics & Grasping",
    category: "End-Effector Mechanics",
    description: "Theory and engineering of robotic end-effectors, multi-fingered hands, tactile skin arrays, and friction contact dynamics for object grasping.",
    extendedDescription: "Robotic manipulation transitions from rigid parallel grippers to anthropomorphic 24-DOF hands equipped with optical tactile matrices capable of sensing shear stress and slip in real time.",
    corePillars: ["Frictional Contact Dynamics", "Tactile Sensor Array Skin", "In-Hand Reorientation", "Deformable Object Handling"],
    applications: ["Delicate Agricultural Harvesting", "Micro-Electronic Circuit Assembly", "Bimanual Culinary Automation", "Hazardous Waste Handling"],
    ieeeRasFocus: "Active focus of the IEEE RAS Technical Committee on Mechanisms and Design and RoboSoft.",
    technicalMetric: { label: "Tactile Sensitivity", value: "0.01 N force resolution" },
    iconName: "Hand"
  },
  {
    id: "field-robotics",
    title: "Field Robotics",
    subtitle: "Operations in Harsh, Extreme Frontiers",
    category: "Extreme Environments",
    description: "Deploying intelligent robotic systems into uncontrolled, extreme, and hostile environments including deep sea, subterranean caves, radiation zones, and orbit.",
    extendedDescription: "Field robots survive physical wear, extreme pressure differentials, thermal extremes, radiation, and GPS-deprived environments through resilient mechanical hardening and decentralized edge computing.",
    corePillars: ["Subterranean Navigation", "Radiation-Tolerant Electronics", "Deep-Sea Hydrostatic Sealing", "Autonomous Field Surveying"],
    applications: ["Nuclear Decommissioning", "Arctic Ice-Core Drilling", "Extraterrestrial Rovers", "Wildfire Suppression Scouting"],
    ieeeRasFocus: "Flagship domain of the IEEE Field and Service Robotics (FSR) and Marine Robotics TC.",
    technicalMetric: { label: "Operational Envelope", value: "-40°C to +85°C & 600 bar" },
    iconName: "Globe"
  }
];
