import { FaLightbulb, FaBug, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import SmartExpense from '../assets/SmartExpense.png';
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
    demo: "#",
    code: "#",
  },
  {
    title: "Netflix",
    description: "Built a responsive Netflix-style platform using React and Redux with optimized search, efficient routing, and smooth real-time content updates for a seamless cross-device streaming experience.",
    image: netflix,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    icons: [FaReact, FaFire, FaCloud , FaDatabase],
    code: "#",
  },
  {
    title: "Portfolio - Website",
    description: "Built a responsive portfolio website using React and Tailwind CSS, featuring clean UI components, smooth navigation, and optimized performance across devices.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "JavaScript" , "Mobile-Responsive"],
    icons: [FaReact, FaDatabase],

    code: "#",
  },
  
  
  {
    title: "Food-Ordering Website",
    description: "Built a responsive food ordering website using React, Tailwind CSS, and JavaScript, featuring a clean UI, smooth navigation, dynamic menu rendering, and an intuitive ordering experience across devices.",
    image: new_food,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
