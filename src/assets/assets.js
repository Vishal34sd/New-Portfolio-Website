import { FaLightbulb, FaBug, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


import SmartExpense from '../assets/Expense.png';
import netflix from '../assets/new_netflix.png';
import portfolio from '../assets/portfolio.png';
import new_food from '../assets/new_food.jpg';










export const skills = [
  {
    title: "Frontend Development",

    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: [
      { name: "React", iconKey: "react" },
      { name: "JavaScript", iconKey: "js" },
      { name: "TypeScript", iconKey: "ts" },
      { name: "Redux", iconKey: "redux" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
    ],
  },

  {
    title: "Backend Development",

    description: "Creating robust server-side applications and RESTful APIs.",
    tags: [
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Express", iconKey: "express" },
      { name: "MongoDB", iconKey: "mongodb" },
      { name: "PostgreSQL", iconKey: "postgresql" },

    ],
  },


  {
    title: "Tools & Technologies",

    description: "Essential tools and technologies I use in my development workflow.",
    tags: [
      { name: "Git & GitHub", iconKey: "github" },
      { name: "Postman", iconKey: "postman" },
      { name: "VS Code", iconKey: "vscode" },
      { name: "AWS", iconKey: "aws" },

    ],
  },
];


export const projects = [
  {
    id: "orbital-cli",
    title: "Orbital CLI",
    description:
      "A powerful Next.js + Node.js CLI toolkit with OAuth authentication, smart tool selection (web search, AI chat, agentic mode), and a clean Tailwind-powered UI.",
    fullDescription: "Orbital CLI is a cutting-edge command-line toolkit built for modern developers. It seamlessly integrates web search capabilities and AI chat features directly into your terminal environment. Powered by Node.js and Next.js, it offers robust OAuth authentication for secure access and an intuitive, fast agentic mode that assists with complex development tasks locally.",
    image: "/orbital.png",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js"],
    iconKeys: ["nextjs", "tailwind", "nodejs", "express", "ai"],
    features: [
      "Secure OAuth Authentication Flow",
      "Agentic Mode for automated task solving",
      "Built-in AI Chat capabilities via terminal",
      "Real-time Web Search Integration",
      "Clean and responsive Tailwind UI configuration dashboard"
    ],
    demo: "https://smart-cli-based-agent-t7x4.vercel.app/",
    code: "https://github.com/Vishal34sd/Smart-CLI-Based-Agent",
  }
  ,
  {
    id: "smart-expense",
    title: "SmartExpense",
    description:
      " A smart MERN expense tracker with AI insights (RAG + LangChain + Gemini). Secure authentication, smooth UI, and crystal-clear spending analytics.",
    fullDescription: "SmartExpense revolutionizes personal finance by combining a traditional MERN stack tracker with advanced AI insights. Utilizing RAG (Retrieval-Augmented Generation), LangChain, and the Gemini API, the app provides highly personalized, context-aware financial advice based on your spending habits. Featuring secure authentication and rich visual analytics to help you save more.",
    image: SmartExpense,
    tech: ["React", "Node.js", "MongoDB", "LangChain", "Gemini API"],
    iconKeys: ["react", "nodejs", "mongodb", "ai"],
    features: [
      "AI-driven spending insights using Gemini API",
      "Retrieval-Augmented Generation (RAG) for localized context",
      "Full MERN stack implementation for high performance",
      "Secure user authentication and data privacy",
      "Interactive data visualization charts for budget tracking"
    ],
    demo: "https://expense-tracker-repo-3p8w.vercel.app",
    code: "https://github.com/Vishal34sd/Expense-tracker_repo",
  },

  {
    id: "portfolio-website",
    title: "Portfolio - Website",
    description:
      " My personal portfolio built with React + Tailwind — clean design, smooth animations, responsive layout, and a modern aesthetic.",
    fullDescription: "A highly customized, interactive personal portfolio website showcasing my skills, projects, and bio. Developed entirely with React and Tailwind CSS, it features advanced Framer Motion animations, a responsive mobile-first design, interactive components, and a sleek dark theme. This is the very site you are viewing right now!",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive"],
    iconKeys: ["react", "tailwind", "js", "html"],
    features: [
      "Smooth Framer Motion page transitions and scroll animations",
      "Fully responsive design for mobile, tablet, and desktop",
      "Custom components styling with Tailwind CSS",
      "Interactive GitHub contribution graph integration",
      "Optimized asset loading and dynamic routing"
    ],
    demo: "https://new-portfolio-website-seven.vercel.app/",
    code: "https://github.com/Vishal34sd/New-Portfolio-Website",
  },

  {
    id: "netflix-clone",
    title: "Netflix",
    description:
      " A Netflix-style streaming UI with React + Redux — fast routing, smooth content flow, and realtime-like browsing experience.",
    fullDescription: "A full-scale frontend clone of the popular Netflix streaming platform. Built utilizing React and Redux for state management, this project demonstrates complex UI rendering, such as horizontal scrolling movie rows, dynamic banner heroes, and secure Firebase authentication to give users an authentic realtime browsing feel.",
    image: netflix,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    iconKeys: ["react", "firebase", "tailwind", "redux"],
    features: [
      "Firebase Authentication for user login/signup",
      "Dynamic data fetching from TMDB (The Movie Database) API",
      "Redux store for managing active user states and UI toggles",
      "Responsive video trailer modals",
      "Pixel-perfect Netflix UI replication"
    ],
    code: "https://github.com/Vishal34sd/New-Netflix-GPT",
  },

  {
    id: "food-ordering",
    title: "Food-Ordering Website",
    description:
      " A responsive food-ordering UI — dynamic menu rendering, clean navigation, and a buttery-smooth ordering flow across devices.",
    fullDescription: "A beautifully crafted food-ordering platform designed for restaurants and delivery services. The application focuses on a buttery-smooth user experience with dynamic menu rendering, categorized filters, state-managed shopping carts, and a streamlined, responsive checkout flow that looks perfect on any device.",
    image: new_food,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    iconKeys: ["react", "js", "tailwind"],
    features: [
      "Dynamic shopping cart with real-time total calculations",
      "Category-based menu filtering",
      "Smooth transitions and hover effects with tailwind CSS",
      "Fully responsive mobile layout with off-canvas menus",
      "Mock checkout process"
    ],
    code: "https://github.com/Vishal34sd/Food-Ordering-Website",
  },
];

export const gitaQuotes = [
  {
    id: 1,
    verse: "BG 2.47",
    en: "You have the right to perform your duty, but not to the fruits of your actions.",
    hi: "तुम्हारा अधिकार केवल कर्म करने में है, फल में कभी नहीं।",
    vibe: "Karma • Discipline • Focus",
  },
  {
    id: 2,
    verse: "BG 2.14",
    en: "Happiness and distress are temporary. Learn to tolerate them.",
    hi: "सुख और दुःख क्षणिक हैं — उन्हें सहन करना सीखो।",
    vibe: "Balance • Strength • Patience",
  },
  {
    id: 3,
    verse: "BG 6.5",
    en: "Elevate yourself through your own mind, not degrade yourself.",
    hi: "अपने मन द्वारा स्वयं को उठाओ, गिराओ मत।",
    vibe: "Self-growth • Mindset • Control",
  },
  {
    id: 4,
    verse: "BG 4.7",
    en: "Whenever there is decline of dharma, I manifest myself.",
    hi: "जब-जब धर्म की हानि होती है, तब-तब मैं प्रकट होता हूँ।",
    vibe: "Dharma • Hope • Light",
  },
  {
    id: 5,
    verse: "BG 2.20",
    en: "The soul is neither born nor does it die.",
    hi: "आत्मा न जन्म लेती है, न मरती है।",
    vibe: "Soul • Truth • Eternity",
  },
  {
    id: 6,
    verse: "BG 18.66",
    en: "Surrender unto Me, I shall free you from all fears.",
    hi: "मेरी शरण में आओ, मैं तुम्हें भय से मुक्त करूँगा।",
    vibe: "Surrender • Peace • Faith",
  },
];
