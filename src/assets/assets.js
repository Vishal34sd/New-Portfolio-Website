import { FaLightbulb, FaBug, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


import SmartExpense from '../assets/Expense.png';
import netflix from '../assets/new_netflix.png';
import portfolio from '../assets/portfolio.png';
import new_food from '../assets/new_food.jpg';










export const skills = [
  {
    title: "Frontend Development",
    iconKey: "react", 
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: [
      { name: "React", iconKey: "react" },
      { name: "JavaScript", iconKey: "js" },
      { name: "TypeScript", iconKey: "ts" },
      { name: "Redux", iconKey: "redux" },
    ],
  },

  {
    title: "Backend Development",
    iconKey: "nodejs",
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: [
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Express", iconKey: "express" },
      { name: "RESTful APIs", iconKey: "postman" }, // closest icon
    ],
  },

  {
    title: "Database Management",
    iconKey: "mongodb",
    description: "Designing and optimizing databases for performance and scalability.",
    tags: [
      { name: "MongoDB", iconKey: "mongodb" },
      { name: "MySQL", iconKey: "mysql" },
      { name: "Firebase", iconKey: "firebase" },
    ],
  },

  {
    title: "Cloud & DevOps",
    iconKey: "aws",
    description: "Deploying and managing applications in cloud environments.",
    tags: [
      { name: "AWS", iconKey: "aws" },
      { name: "Docker", iconKey: "docker" },
      { name: "Kubernetes", iconKey: "kubernetes" },
    ],
  },

  {
    title: "Tools & Technologies",
    iconKey: "git",
    description: "Essential tools and technologies I use in my development workflow.",
    tags: [
      { name: "Git & GitHub", iconKey: "github" },
      { name: "Postman", iconKey: "postman" },
      { name: "VS Code", iconKey: "vscode" },
      { name: "Copilot", iconKey: "github" }, 
    ],
  },
];


export const projects = [
  {
  title: "Orbital CLI",
  description:
    "A powerful Next.js + Node.js CLI toolkit with OAuth authentication, smart tool selection (web search, AI chat, agentic mode), and a clean Tailwind-powered UI for smooth workflows.",
  image: "/orbital.png",
  tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  iconKeys: ["nextjs", "tailwind", "nodejs", "express", "ai"],
  demo: "https://your-demo-link.vercel.app",
  code: "https://github.com/Vishal34sd/your-orbital-cli-repo",
}
,
  {
    title: "SmartExpense",
    description:
      " A smart MERN expense tracker with AI insights (RAG + LangChain + Gemini). Secure authentication, smooth UI, and crystal-clear spending analytics.",
    image: SmartExpense,
    tech: ["React", "Node.js", "MongoDB", "LangChain", "Gemini API"],
    iconKeys: ["react", "nodejs", "mongodb", "ai"],
    demo: "https://expense-tracker-repo-3p8w.vercel.app",
    code: "https://github.com/Vishal34sd/Expense-tracker_repo",
  },

  {
    title: "Portfolio - Website",
    description:
      " My personal portfolio built with React + Tailwind — clean design, smooth animations, responsive layout, and a modern aesthetic.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive"],
    iconKeys: ["react", "tailwind", "js", "html"],
    demo: "https://new-portfolio-website-seven.vercel.app/",
    code: "https://github.com/Vishal34sd/New-Portfolio-Website",
  },

  {
    title: "Netflix",
    description:
      " A Netflix-style streaming UI with React + Redux — fast routing, smooth content flow, and realtime-like browsing experience.",
    image: netflix,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    iconKeys: ["react", "firebase", "tailwind", "redux"],
    code: "https://github.com/Vishal34sd/New-Netflix-GPT",
  },

  {
    title: "Food-Ordering Website",
    description:
      " A responsive food-ordering UI — dynamic menu rendering, clean navigation, and a buttery-smooth ordering flow across devices.",
    image: new_food,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    iconKeys: ["react", "js", "tailwind"],
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
