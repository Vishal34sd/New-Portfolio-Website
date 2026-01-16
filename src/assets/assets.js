import { FaLightbulb, FaBug, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


import SmartExpense from '../assets/Expense.png';
import netflix from '../assets/new_netflix.png';
import portfolio from '../assets/portfolio.png';
import new_food from '../assets/new_food.jpg';










export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React',"Javascript", 'TypeScript' , "Redux"]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express' , "Restful API's"]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Firebase']
  },
  
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub',  'Postman', 'VS-Code' , "Co-pilot"]
  }
];



export const projects = [
  {
    title: "SmartExpense",
    description:
      "🚀 A smart MERN expense tracker with AI insights (RAG + LangChain + Gemini). Secure authentication, smooth UI, and crystal-clear spending analytics.",
    image: SmartExpense,
    tech: ["React", "Node.js", "MongoDB", "LangChain", "Gemini API"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaRobot],
    demo: "https://expense-tracker-repo-3p8w.vercel.app",
    code: "https://github.com/Vishal34sd/Expense-tracker_repo",
  },

  {
    title: "Portfolio - Website",
    description:
      "✨ My personal portfolio built with React + Tailwind — clean design, smooth animations, responsive layout, and a modern aesthetic.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive"],
    icons: [FaReact, FaTools, FaMobileAlt],
    demo: "https://new-portfolio-website-seven.vercel.app/",
    code: "https://github.com/Vishal34sd/New-Portfolio-Website",
  },

  {
    title: "Netflix",
    description:
      "🎬 A Netflix-style streaming UI with React + Redux — fast routing, smooth content flow, and realtime-like browsing experience.",
    image: netflix,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    icons: [FaReact, FaFire, FaCloud, FaDatabase],
    code: "https://github.com/Vishal34sd/New-Netflix-GPT",
  },

  {
    title: "Food-Ordering Website",
    description:
      "🍔 A responsive food-ordering UI — dynamic menu rendering, clean navigation, and a buttery-smooth ordering flow across devices.",
    image: new_food,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icons: [FaReact, FaCode, FaTools],
    code: "https://github.com/Vishal34sd/Food-Ordering-Website",
  },
];



