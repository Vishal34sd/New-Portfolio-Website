import { FaLightbulb, FaBug, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import SmartExpense from '../assets/Expense.png';
import netflix from '../assets/new_netflix.png';
import portfolio from '../assets/portfolio.png';
import new_food from '../assets/new_food.jpg';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaBug,
      title: 'Debugging & Optimization',
      description: 'Skilled in debugging and optimizing code to improve performance, reliability, and overall application efficiency.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



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
    tags: ['Node.js', 'Express' , "Restfull API's"]
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
    description: "Built a secure MERN-based Expense Tracker with AI-powered insights using LangChain, RAG, and Gemini, supported by robust authentication and a responsive UI.",
    image: SmartExpense,
    tech: ["React", "Node.js", "MongoDB", "Langchain.js" , "Gemini-API"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://expense-tracker-repo-3p8w.vercel.app",
    code: "https://github.com/Vishal34sd/Expense-tracker_repo",
  },
 
  {
    title: "Portfolio - Website",
    description: "Built a responsive portfolio website using React and Tailwind CSS, featuring clean UI components, smooth navigation, and optimized performance across many devices.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "JavaScript" , "Mobile-Responsive"],
    icons: [FaReact, FaDatabase],
    demo: "https://new-portfolio-website-seven.vercel.app/",
    code: "https://github.com/Vishal34sd/New-Portfolio-Website",
  },
  
   {
    title: "Netflix",
    description: "Built a responsive Netflix-style platform using React and Redux with optimized search, efficient routing, and smooth real-time content updates for a seamless cross-device streaming experience.",
    image: netflix,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    icons: [FaReact, FaFire, FaCloud , FaDatabase],
    code: "https://github.com/Vishal34sd/New-Netflix-GPT",
  },
  {
    title: "Food-Ordering Website",
    description: "Built a responsive food ordering website using React, Tailwind CSS, and JavaScript, featuring a clean UI, smooth navigation, dynamic menu rendering, and an intuitive ordering experience across devices.",
    image: new_food,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    code: "https://github.com/Vishal34sd/Food-Ordering-Website",
  }
];



