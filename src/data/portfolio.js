export const portfolioData = {
  personalInfo: {
    name: "Tomas Andres Basto Uribe",
    shortName: "Tomas Basto",
    brandLogo: "<TB />",
    title: "Software Developer | Full Stack & Backend",
    location: "Bucaramanga, Santander, Colombia",
    availability: "Available for remote & on-site opportunities",
    shortPitch:
      "Software Developer with a strong focus on Full Stack web engineering, backend architectures, AI API integrations, and 2D game logic in C# / Unity. Passionate about clean code, scalable systems, and data-driven solutions.",
    socials: {
      github: "https://github.com/AnwiusXP",
      linkedin: "https://www.linkedin.com/in/tomas-andres-basto-uribe-296141219/",
      email: "mailto:tomas.basto10@gmail.com",
    },
    resumes: {
      en: "/Resume_Tomas_Basto_EN.pdf",
      es: "/CV_Tomas_Basto_ES.pdf",
    },
  },

  experience: [
    {
      id: "elan-pure",
      role: "Full Stack Web Developer",
      type: "Commercial Project / Freelance",
      company: "Elan Pure",
      date: "February 2026 – July 2026",
      summary:
        "Led the end-to-end architecture and full stack development of a custom e-commerce web platform for an active business. Built relational schemas to guarantee transactional integrity, developed a centralized admin dashboard for real-time inventory management, and integrated an AI API module for sales forecasting and demand trends. Managed continuous deployment on Render with high availability and optimized API response times.",
      techStack: [
        "React",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "RESTful APIs",
        "AI APIs",
        "Render",
        "Git",
      ],
      image: "/assets/project-ecommerce.png",
    },
  ],

  projects: [
    {
      id: "elan-pure-commerce",
      title: "Elan Pure — E-Commerce & Inventory Platform",
      role: "Full Stack Developer (Commercial Project)",
      date: "Feb 2026 – Jul 2026",
      description:
        "Custom production e-commerce platform and centralized admin dashboard with AI-driven demand forecasting, real-time inventory management, and high-availability deployment on Render.",
      tags: [
        "React",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "AI APIs",
        "Render",
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://elan-commerce-manager-master-1.onrender.com/",
          primary: true,
          isDemo: true,
        },
        {
          label: "GitHub Repository",
          url: "https://github.com/AnwiusXP/elan-commerce-manager-master",
          primary: false,
          isCode: true,
        },
      ],
      image: "/assets/project-ecommerce.png",
      iconType: "ecommerce",
    },
    {
      id: "roguelite-game",
      title: "2D Roguelite & Beat 'em Up Video Game",
      role: "Gameplay & Logic Developer (C# & Unity)",
      date: "May 2026 – Present",
      description:
        "Designed and implemented from scratch the core code architecture and combat mechanics for a 2D top-down game. Built enemy AI systems using Finite State Machines (FSM), entity wave spawning algorithms, collision layers, and memory-efficient game loop architectures.",
      tags: [
        "Unity Engine",
        "C#",
        "OOP",
        "Finite State Machines (FSM)",
        "Git",
      ],
      links: [
        {
          label: "Play WebGL Demo",
          url: "https://github.com/AnwiusXP/defensores-del-reino-verde",
          primary: true,
          isDemo: true,
        },
        {
          label: "View Code",
          url: "https://github.com/AnwiusXP/defensores-del-reino-verde",
          primary: false,
          isCode: true,
        },
      ],
      image: "/assets/project-game.png",
      iconType: "gamepad",
    },
    {
      id: "mobile-middleware",
      title: "Estudia — Mobile App & Cloud Middleware",
      role: "Backend & Mobile Developer (Flutter & Node.js)",
      date: "2025",
      description:
        "Built a mobile client in Flutter integrated with a custom Node.js middleware server deployed on Render. Managed user persistence and auth with Firebase NoSQL, implementing secure intermediate request handling for external API integrations.",
      tags: [
        "Flutter",
        "Node.js",
        "Express",
        "Firebase (NoSQL)",
        "RESTful APIs",
        "Render",
      ],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/AnwiusXP/estudia",
          primary: false,
          isCode: true,
        },
      ],
      image: "/assets/project-mobile.png",
      iconType: "mobile",
    },
  ],

  skills: {
    categories: [
      {
        title: "Languages",
        icon: "Terminal",
        color: "from-emerald-500 to-teal-500",
        items: [
          "C#",
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "C++",
          "SQL",
          "HTML5 / CSS3",
        ],
      },
      {
        title: "Frontend & Backend",
        icon: "Cpu",
        color: "from-cyan-500 to-blue-500",
        items: [
          "React",
          "Node.js",
          "FastAPI",
          "RESTful APIs",
          "AI API Integration",
        ],
      },
      {
        title: "Databases & Cloud",
        icon: "Database",
        color: "from-blue-500 to-indigo-500",
        items: [
          "PostgreSQL",
          "MySQL",
          "Firebase (NoSQL)",
          "Render",
          "AWS Core",
          "Linux",
        ],
      },
      {
        title: "Game Dev & Tools",
        icon: "Gamepad2",
        color: "from-indigo-500 to-purple-500",
        items: [
          "Unity Engine (C# Logic)",
          "Git",
          "GitHub",
          "Object-Oriented Programming (OOP)",
        ],
      },
    ],
    languages: [
      { name: "Spanish", level: "Native", code: "ES" },
      { name: "English", level: "Advanced / B2+ (TOEFL iBT Candidate)", code: "EN" },
      { name: "French", level: "Intermediate / B1", code: "FR" },
    ],
  },

  certifications: [
    {
      id: "aws-cloud",
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services / Credly",
      date: "June 2026",
      url: "https://www.credly.com",
      badgeType: "AWS",
    },
    {
      id: "aws-ml",
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "Amazon Web Services / Credly",
      date: "June 2026",
      url: "https://www.credly.com",
      badgeType: "AWS",
    },
    {
      id: "udemy-web",
      title: "Complete Web Development: HTML, CSS, JavaScript, PHP & MySQL",
      issuer: "Udemy (82.5 hrs)",
      date: "Completed",
      url: "https://www.udemy.com",
      badgeType: "Udemy",
    },
  ],

  education: {
    degree: "Associate Degree in Computer Systems Development (Tecnólogo en Desarrollo de Sistemas Informáticos)",
    institution: "Unidades Tecnológicas de Santander (UTS)",
    location: "Bucaramanga, Colombia",
    date: "Aug 2023 – Jul 2026",
    gpa: "4.0 / 5.0",
    details: "100% academic credits & graduation project approved (Degree in progress).",
  },

  contact: {
    title: "Let's build something together",
    subtitle: "Open for software engineering roles, full-stack projects, and backend development opportunities.",
    email: "tomas.basto10@gmail.com",
    emailUrl: "mailto:tomas.basto10@gmail.com",
    phone: "(+57) 323 627 3155",
    whatsappUrl: "https://wa.me/573236273155",
    phoneUrl: "tel:+573236273155",
    location: "Bucaramanga, Santander, Colombia",
    workPreference: "Available for Remote & Hybrid work",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
}
