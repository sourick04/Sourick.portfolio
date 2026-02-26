// =============================================
// RESUME DATA - Single source of truth
// Update this file to update the entire portfolio
// =============================================

export const personalInfo = {
  name: "Sourick Banerjee",
  title: "Full Stack MERN Developer",
  titleAlternates: [
    "Full Stack MERN Developer",
    "React.js Engineer",
    "Node.js Backend Dev",
    "Problem Solver",
  ],
  bio: "Building responsive, user-centric web applications with the MERN stack. Passionate about clean architecture, smart APIs, and machine learning.",
  email: "sourickbanerjee@gmail.com",
  phone: "+91-9804343170",
  github: "https://github.com/sourick04",
  linkedin: "https://linkedin.com/in/sourick-banerjee",
  resumeUrl: "#", // Replace with actual resume PDF link
};

export const summary = `Full Stack MERN Developer with a solid foundation in Data Structures, Algorithms, and AI tools. 
Experienced in building responsive, user-centric applications and has a basic understanding of Machine Learning techniques 
including Feature Engineering, Regression, and Classification algorithms. Strong problem-solver with a passion for 
clean code, RESTful API design, and bridging the gap between backend systems and intuitive frontend experiences.`;

export const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Databases: ["MongoDB", "SQL", "PostgreSQL"],
  Languages: ["JavaScript", "Java", "Python"],
  "ML & AI": [
    "Feature Engineering",
    "Regression Algorithms",
    "Classification Algorithms",
    "Optimization Techniques",
    "AI Tools Integration",
  ],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Canva", "Jupyter Notebook"],
};

export const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Adaptability",
  "Attention to Detail",
  "Fast Learner",
];

export const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering (ECE)",
    institution: "Institute of Engineering & Management (IEM)",
    period: "2023 – Present",
    detail: "CGPA: 8.21 (till 2nd year)",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Modern English Academy (CISCE)",
    period: "2022 – 2023",
    detail: "Percentage: 84.8%",
    icon: "📚",
  },
];

export const experience = [
  {
    role: "Lead Backend Developer Intern",
    company: "IEM Consultancy Services",
    duration: "4 months",
    period: "May 2025 – August 2025",
    highlights: [
      "Developed backend architecture for the NAAC DVV web platform using Node.js and Express.js",
      "Designed and implemented secure RESTful APIs for institutional data management",
      "Optimized SQL queries to ensure efficient data retrieval and handling",
    ],
    tech: ["Node.js", "Express.js", "SQL", "REST APIs"],
  },
];

export const projects = [
  {
    title: "NAAC DVV Platform",
    description:
      "A full-stack MERN-based web platform built for institutional accreditation data submission. Handles complex form workflows, secure authentication, and dynamic data visualization for NAAC DVV processes.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL"],
    github: "https://github.com/sourick04",
    live: null,
    featured: true,
  },
  {
    title: "LMS Website",
    description:
      "A MERN-based Learning Management System with AI integration. Features course management, student progress tracking, AI-powered recommendations, and an interactive learning dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "AI Integration"],
    github: "https://github.com/sourick04",
    live: null,
    featured: true,
  },
  {
    title: "Movie Recommendation Model",
    description:
      "A machine learning model that recommends movies to users based on their viewing history and preferences using collaborative filtering and content-based filtering techniques.",
    tech: ["Python", "Machine Learning", "Jupyter Notebook", "Feature Engineering"],
    github: "https://github.com/sourick04",
    live: null,
    featured: false,
  },
];

export const involvement = [
  {
    title: "Member, IEM Google Developer Group (GDG)",
    description:
      "Active member of the IEM GDG chapter. Participated in workshops on Cloud Fundamentals and AI/ML applications, collaborating with fellow developers to explore emerging technologies.",
    icon: "🌐",
  },
];
