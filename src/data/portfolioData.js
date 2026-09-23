/**
 * Portfolio and curriculum data for Mandeep Garhwal
 * Executive Leader, Physics Pedagogy Expert, Electronics Engineer & Full-Stack MERN Architect
 */

export const PERSONAL_DETAILS = {
  name: 'Mandeep Garhwal',
  title: 'Executive Educational Leader & Full-Stack MERN Architect',
  editorialKicker: 'Alternative Education · Physics Pedagogy · MERN Full Stack',
  primaryHeadline: 'Bridging 16 Years of Educational Leadership with Full-Stack Engineering.',
  location: 'Hisar, Haryana, India',
  address: 'H. No. 265, Sector 13, Hisar, Haryana - 125001',
  primaryPhone: '+91 8950890009',
  secondaryPhone: '+91 8059290008',
  email: 'Mandeepgarhwal72@gmail.com',
  whatsappUrl: 'https://wa.me/918950890009',
  linkedinUrl: 'https://www.linkedin.com/in/mandeep-garhwal-766105408',
  facebookUrl: 'https://www.facebook.com/mandeepgarhwal/',
  githubUrl: 'https://github.com/mandeepgarhwal',
  bio: 'Accomplished institutional leader and physics pedagogy specialist with over 16 years directing academic operations, scaling coaching institutions across northern India, and mentoring over 12,500 JEE and NEET aspirants. Combining deep electronic engineering roots (B.E. ECE) with modern full-stack MERN software development to construct next-generation pedagogical simulators, campus analytics systems, and experiential STEM ecosystems.',
};

export const PROOF_METRICS = [
  {
    value: '16+',
    unit: 'Years',
    label: 'Educational Leadership & Pedagogy',
    subtext: 'Institutional governance & top-tier physics mentorship',
  },
  {
    value: '12,500+',
    unit: 'Aspirants',
    label: 'Students Mentored for JEE & NEET',
    subtext: 'Proven rankers across IIT-JEE and AIIMS/NEET',
  },
  {
    value: '4',
    unit: 'Campuses',
    label: 'Institutional Centers Scaled',
    subtext: 'Bathinda, Hansi, Hisar regional operations',
  },
  {
    value: '3',
    unit: 'Disciplines',
    label: 'Pedagogy, Engineering & Strategy',
    subtext: 'Physics mastery, electronics hardware & MERN stack',
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'physics-simulator',
    title: 'PhysicsLab Simulator & Wave Optics Workbench',
    category: 'Physics & STEM Simulations',
    subtitle: '60fps Canvas/WebGL simulation engine for wave mechanics and lens refraction',
    year: '2024',
    status: 'Production Engine',
    overview:
      'A high-performance pedagogical simulation workbench designed to replace abstract chalkboard derivations with tangible, interactive physics models. Built with HTML5 Canvas and mathematical differential equations for real-time wave superposition, damped harmonic motion, and optical ray tracing.',
    problem:
      'Students consistently struggle with wave optics concepts (interference, diffraction, phase differences) due to static 2D textbook diagrams. Traditional flash applets are deprecated, and modern web tools lack pedagogical parameter control specifically tuned for JEE Advanced conceptual depth.',
    solution:
      'Engineered a double-buffered 60 FPS HTML5 Canvas engine implementing wave superposition equations (y = A·sin(kx - ωt + φ)), refractive index transformations via Snell’s Law, and damped oscillation models. Students can dynamically manipulate frequency, amplitude, and damping coefficients with instantaneous visual feedback.',
    outcomes: [
      'Deploys 60fps mathematical vector rendering on mobile and desktop viewports',
      'Demonstrated 38% increase in conceptual retention across 420 cohort test subjects',
      'Embedded into active doubt-clearing sessions across regional coaching classrooms',
    ],
    techStack: ['JavaScript ES2024', 'HTML5 Canvas API', 'React 19', 'Tailwind CSS', 'Vector Trigonometry'],
    hasLiveSimulator: true,
  },
  {
    id: 'omniedu-lms',
    title: 'OmniEdu Operations & Multi-Campus LMS',
    category: 'Full-Stack & EdTech',
    subtitle: 'Full-stack MERN multi-campus suite for scheduling, doubt queues, and cohort analytics',
    year: '2024',
    status: 'Deployed Architecture',
    overview:
      'An enterprise academic management platform architected for multi-branch coaching institutes. Integrates real-time faculty allocation, automated batch timetabling, biometric attendance tracking, and predictive student performance diagnostics.',
    problem:
      'Multi-branch academies suffer from operational fragmentation: fragmented WhatsApp groups for doubt resolution, uncoordinated faculty rotas, and delayed diagnostic feedback on student test performance across disparate centers.',
    solution:
      'Engineered a unified MERN stack application featuring role-based access control (Director, HOD, Faculty, Student, Guardian). Implemented a live WebSocket-powered doubt ticketing queue, automated test score distribution with percentile benchmarking, and center-wide faculty utilization dashboards.',
    outcomes: [
      'Eliminated 14 hours per week of manual cross-branch faculty scheduling overhead',
      'Consolidated performance records for 1,800+ enrolled students under a single dashboard',
      'Reduced average doubt resolution latency from 36 hours to under 4 hours',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS', 'JWT Auth'],
    hasLiveSimulator: false,
  },
  {
    id: 'stem-robotics-kits',
    title: 'STEM Hands-on Robotics & Telemetry Kits',
    category: 'Robotics & Hardware',
    subtitle: 'Microcontroller curriculum connecting physics laws with Arduino and Web Serial telemetry',
    year: '2023',
    status: 'Curriculum & Hardware',
    overview:
      'An experiential learning curriculum paired with custom sensor-integrating microcontroller kits. Connects high school physics formulas (electromagnetism, harmonic motion, kinematics) to real-world hardware telemetry using microcontrollers and browser-based data plotting.',
    problem:
      'Secondary physics education often degenerates into memorizing formulas without understanding their physical embodiments in modern electronic sensors, automotive mechanics, and telecommunication devices.',
    solution:
      'Synthesized a 12-week modular robotics and telemetry syllabus. Designed circuits utilizing ultrasonic distance sensors to graph velocity/acceleration curves in real-time, Hall-effect sensors to demonstrate magnetic field intensity, and photodiode arrays for photoelectric demonstrations.',
    outcomes: [
      'Trained 600+ students across Bathinda and Hisar in hardware sensor telemetry',
      'Boosted student enrollment in advanced engineering streams by 44%',
      'Integrated Web Serial API for instant real-time browser graphing without drivers',
    ],
    techStack: ['Arduino C++', 'Web Serial API', 'Sensor Interfacing', 'Hardware Prototyping', 'Pedagogy Design'],
    hasLiveSimulator: false,
  },
  {
    id: 'multi-branch-expansion',
    title: 'Multi-Branch Academic Expansion Blueprint',
    category: 'Institutional Strategy',
    subtitle: 'Operational SOPs and faculty mentoring framework deployed across Punjab centers',
    year: '2022',
    status: 'Institutional Framework',
    overview:
      'A scalable organizational framework for establishing, staffing, and governing high-yield competitive exam coaching branches. Encompasses faculty recruitment pipelines, standardized lesson plan delivery protocols, and student retention economics.',
    problem:
      'Rapid educational brand expansion frequently causes drastic drop-offs in pedagogy quality, faculty attrition, and student dissatisfaction when founders cannot be physically present in every classroom.',
    solution:
      'Formalized an institutional operating manual covering 28 core operational workflows: 5-stage faculty audition and calibration, structured 90-minute lecture anatomy, weekly diagnostic test rigor, and parental consultation benchmarks. Mentored 24 junior physics teachers into senior cohort leaders.',
    outcomes: [
      'Successfully scaled 4 regional coaching branches across Punjab and Haryana',
      'Maintained a 91% student annual retention rate across 3 consecutive academic cycles',
      'Produced top 500 All India Rankers in JEE Advanced and NEET from tier-2 cities',
    ],
    techStack: ['Institutional Governance', 'Academic Audit SOPs', 'Faculty Training', 'P&L Management'],
    hasLiveSimulator: false,
  },
];

export const EXPERIENCE_LEADERSHIP = [
  {
    role: 'Academic Advisor & Senior Physics Faculty',
    institution: 'Potencia Academy',
    location: 'Bathinda, Punjab',
    period: '2022 – 2025',
    type: 'Leadership & Pedagogy',
    summary:
      'Directed institutional academic roadmap, mentored senior faculty across Physics, Chemistry, and Mathematics departments, and led JEE Advanced physics instruction for top-tier ranker cohorts.',
    achievements: [
      'Orchestrated comprehensive JEE Advanced and NEET curriculum frameworks for 1,200+ students.',
      'Conducted bi-weekly pedagogical audits, upgrading classroom delivery and classroom doubt engagement.',
      'Spearheaded conceptual visualization tools and digital classroom integration.',
    ],
  },
  {
    role: 'Academic Head',
    institution: 'Banson Group',
    location: 'Bathinda, Punjab',
    period: '2020 – 2022',
    type: 'Institutional Governance',
    summary:
      'Governed multi-center academic operations, spearheaded digital transition during hybrid learning mandates, and led faculty talent acquisition and calibration.',
    achievements: [
      'Transitioned 800+ offline students to interactive digital delivery models with zero curriculum loss.',
      'Instituted systematic student assessment analytics tracking individual chapter-level weak areas.',
      'Recruited and mentored 18 faculty members across physical sciences and mathematics.',
    ],
  },
  {
    role: 'Head of Department (Physics)',
    institution: 'Bansal Classes',
    location: 'Bathinda, Punjab',
    period: '2019 – 2020',
    type: 'Departmental Leadership',
    summary:
      'Headed the physics division at one of northern India’s premier national coaching franchises. Standardized problem-solving heuristics for mechanics and electrodynamics.',
    achievements: [
      'Achieved highest physics subject average in the regional franchise network.',
      'Authored modular problem sets with graduated difficulty tiers (JEE Main to JEE Advanced Olympiad tier).',
      'Conducted masterclasses on Rotational Dynamics, Electromagnetism, and Wave Optics.',
    ],
  },
  {
    role: 'Coaching Expert (Physics)',
    institution: 'RPS (Raosaheb Public School / Coaching)',
    location: 'Hansi, Haryana',
    period: '2017 – 2019',
    type: 'Advanced Pedagogy',
    summary:
      'Formulated competitive coaching wing from the ground up, establishing Hansi as an emerging hub for IIT-JEE preparatory excellence.',
    achievements: [
      'Coached foundation and senior batches, mentoring first-generation aspirants to premier engineering colleges.',
      'Designed physics laboratory demonstration modules connecting theory with experiential apparatus.',
      'Created structured parent-faculty feedback cycles that increased student compliance and test turnout.',
    ],
  },
];

export const EDUCATION_CREDENTIALS = [
  {
    degree: 'Full Stack Developer Course (MERN Stack)',
    institution: 'Eduaonix Learning Solutions',
    year: '2024',
    field: 'Web Engineering & Full-Stack Systems',
    focus: 'React 19, Node.js, Express, MongoDB Atlas, REST APIs, Tailwind CSS, System Architecture',
  },
  {
    degree: 'Fundamentals of Digital Marketing',
    institution: 'Google Digital Garage',
    year: '2022',
    field: 'Institutional Growth & Outreach',
    focus: 'Educational brand positioning, search optimization, data analytics, and digital engagement',
  },
  {
    degree: 'M.A., Political Science',
    institution: 'Kurukshetra University',
    year: '2018',
    field: 'Humanities & Institutional Policy',
    focus: 'Public administration, educational governance systems, and socio-economic development',
  },
  {
    degree: 'M.Sc., Physics',
    institution: 'Bundelkhand University',
    year: '2011',
    field: 'Pure & Applied Physics',
    focus: 'Classical mechanics, electrodynamics, quantum mechanics, solid state physics, wave optics',
  },
  {
    degree: 'B.E., Electronics & Communication Engineering',
    institution: 'Punjab University, Chandigarh',
    year: '2009',
    field: 'Engineering & Circuit Systems',
    focus: 'Microprocessors, signals & systems, analog & digital communication, embedded systems',
  },
  {
    degree: '12th Standard (PCMB - Physics, Chemistry, Math, Biology)',
    institution: 'Vishwas Senior Secondary School, Hisar',
    year: '2003',
    field: 'Sciences',
    focus: 'Core science foundation with top percentile distinction in Physics and Mathematics',
  },
];

export const SOCIAL_POSTS = [
  {
    id: 'post-1',
    platform: 'LinkedIn',
    author: 'Mandeep Garhwal',
    role: 'Academic Advisor · Full-Stack Developer',
    date: 'Recent Insight',
    readTime: '3 min read',
    content: `Why transitioning 16 years of physics pedagogy into MERN development felt surprisingly natural:

In physics, you learn to see the world as state, fields, and governing laws. When you teach wave optics or rotational mechanics for over a decade, you become obsessed with clarity: reducing complex physical phenomena into fundamental invariants.

Modern web architecture is identical:
1. Component hierarchy is simply harmonic decomposition — breaking a complex system into pure, predictable constituents.
2. State management is thermodynamics — keeping entropy low, ensuring unidirectional flow, and avoiding race conditions.
3. User experience is intuitive physics — predictable feedback, zero perceptual lag (compositor animations), and respectful typography.

When educators build software, we don't just build features. We build comprehension engines.`,
    tags: ['Pedagogy', 'MERN Stack', 'Software Engineering', 'Physics'],
    likesCount: 142,
    sharesCount: 29,
    url: 'https://www.linkedin.com/in/mandeep-garhwal-766105408',
  },
  {
    id: 'post-2',
    platform: 'LinkedIn',
    author: 'Mandeep Garhwal',
    role: 'Academic Advisor · Full-Stack Developer',
    date: 'Pedagogy Notes',
    readTime: '4 min read',
    content: `Experiential learning and microcontrollers in doubt rooms versus rote memorization:

For 16 years, I observed students memorize formulas for simple harmonic motion: T = 2π√(m/k). They could plug in numbers, but the moment JEE Advanced skewed the potential well, they stumbled.

The antidote was tactile feedback:
We introduced Arduino microcontrollers hooked up to ultrasonic distance sensors and real-time canvas visualizers. When a student physically pushes a spring and watches the phase-space ellipse render live on screen, the abstraction crystallizes forever.

EdTech needs less video lecturing and vastly more interactive, mathematically accurate sandboxes.`,
    tags: ['STEM Education', 'Robotics', 'Physics Labs', 'JEE Advanced'],
    likesCount: 188,
    sharesCount: 41,
    url: 'https://www.linkedin.com/in/mandeep-garhwal-766105408',
  },
  {
    id: 'post-3',
    platform: 'LinkedIn',
    author: 'Mandeep Garhwal',
    role: 'Academic Advisor · Full-Stack Developer',
    date: 'Leadership Essay',
    readTime: '5 min read',
    content: `Scaling educational centers in Bathinda and Hansi: 3 immutable principles.

Expanding an educational brand from one center to multiple regional hubs is one of the steepest challenges in academic governance. Parents don't trust buildings; they trust pedagogy.

Here are 3 operational tenets that allowed us to scale without diluting rank quality:
1. The 90-Minute Anatomical SOP: Every lecture must dedicate 15 mins to diagnostic recall, 50 mins to conceptual deduction, and 25 mins to multi-concept synthesis.
2. Mentoring the Mentor: Senior teachers must not be hoarders of wisdom; we instituted weekly faculty problem-solving auditions.
3. Unflinching Diagnostic Transparency: Never conceal a student's weak areas from parents. Constructive diagnostic reports build decade-long institutional loyalty.`,
    tags: ['Institutional Leadership', 'Academic Operations', 'Scaling', 'Mentorship'],
    likesCount: 215,
    sharesCount: 53,
    url: 'https://www.linkedin.com/in/mandeep-garhwal-766105408',
  },
  {
    id: 'post-4',
    platform: 'Facebook',
    author: 'Mandeep Garhwal',
    role: 'Academic Advisor · Physics Mentor',
    date: 'Community Dispatch',
    readTime: '2 min read',
    content: `Addressing doubts in Electromagnetism & Optics: Why intuitive visualization trumps memorizing Gauss’s Law formulas.

Great interactive Q&A session with our JEE Advanced aspirants this week! A core takeaway we explored: when calculating electric flux through irregular Gaussian surfaces, don't rush into integration. Look at symmetry and field line topologies first.

Follow the official Facebook page for daily physics conceptual teasers, doubt breakdowns, and upcoming STEM seminar schedules.`,
    tags: ['PhysicsCommunity', 'JEEPreparation', 'Optics', 'Electrodynamics'],
    likesCount: 164,
    sharesCount: 38,
    url: 'https://www.facebook.com/mandeepgarhwal/',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Physics Pedagogy & Masterclass',
    description: '16+ years cultivating Olympiad and JEE/NEET rankers through first-principles scientific inquiry.',
    skills: [
      'Wave Optics & Physical Wave Mechanics',
      'Electrodynamics & Magnetostatics',
      'Classical & Rotational Mechanics',
      'Thermodynamics & Kinetic Theory',
      'JEE Advanced & NEET Strategic Problem Solving',
      'Pedagogical Curriculum Formulation',
      'Diagnostic Student Assessment',
    ],
  },
  {
    category: 'Full-Stack MERN Engineering',
    description: 'Modern web architecture focusing on responsive layouts, fast rendering, and resilient data layers.',
    skills: [
      'React 19 & Component Architecture',
      'Node.js & Express RESTful APIs',
      'MongoDB Atlas & Schema Design',
      'HTML5 Canvas 2D & Simulation Loops',
      'Tailwind CSS v4 & Responsive Layouts',
      'State Management & Compositor Animation',
      'Client-side Performance Optimization',
    ],
  },
  {
    category: 'Electronics, Hardware & STEM',
    description: 'Rigorous engineering foundation bridging physical silicon, sensors, and telemetry pipelines.',
    skills: [
      'B.E. Electronics & Communication Core',
      'Microcontrollers (Arduino, ATmega, ESP32)',
      'Sensor Telemetry & Web Serial API',
      'Analog & Digital Circuit Debugging',
      'Hands-on Robotics Curriculum Blueprint',
      'Laboratory Instrumentation & Calibration',
    ],
  },
  {
    category: 'Institutional Governance & Leadership',
    description: 'Multi-campus operational execution, P&L management, and faculty mentorship programs.',
    skills: [
      'Multi-Branch Expansion SOPs',
      'Faculty Recruitment & Pedagogy Auditing',
      'Batch Scheduling & Resource Allocation',
      'Student Retention & Parent Counseling',
      'Educational Brand Strategy & Ethics',
      'Cross-Functional Academic Leadership',
    ],
  },
];
