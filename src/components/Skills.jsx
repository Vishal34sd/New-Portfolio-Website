import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets.js";

import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = {
  React: SiReact,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  HTML: SiHtml5,
  CSS: SiCss3,
  Vercel: SiVercel,
  "Tailwind CSS": SiTailwindcss,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-100 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-purple">Skills</span>
          </h2>
          <p className="mt-3 text-gray-400 text-center max-w-2xl mx-auto">
            Technologies I use to build scalable applications, craft smooth user
            experiences, and ship high-quality projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 240 }}
              className="relative overflow-hidden rounded-2xl p-6 cursor-pointer
              bg-dark-300/60 border border-white/5 backdrop-blur-xl shadow-xl group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-16 -left-16 w-52 h-52 bg-purple/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-purple/10 blur-3xl rounded-full" />
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="mr-5"
                  >
                    <skill.icon className="w-12 h-12 text-purple drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-sm text-gray-400">
                      {skill.title === "Frontend"
                        ? "Modern interfaces and polished UX"
                        : skill.title === "Backend"
                        ? "APIs, data modeling, and scalability"
                        : "Tools that improve workflow and delivery"}
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-gray-300 leading-relaxed">
                  {skill.description
                    ? skill.description
                    : "I use these skills to design, build, and deliver reliable applications with clean architecture and strong performance."}
                </p>

                <div className="flex flex-wrap gap-2">
                  {(skill.tags || skill.tech || []).map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-sm
                        bg-dark-400/60 border border-white/5 text-gray-200
                        hover:bg-purple/20 hover:border-purple/30 transition duration-300"
                      >
                        {Icon && <Icon className="text-purple text-base" />}
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>

                <div className="mt-6 h-[2px] w-full overflow-hidden bg-white/5 rounded-full">
                  <div className="h-full w-1/3 bg-purple/60 blur-sm animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
