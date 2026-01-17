import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets.js";

/* ✅ SkillIcons.dev URL generator */
const iconUrl = (key) => `https://skillicons.dev/icons?i=${key}`;

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
        {/* Heading */}
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

        {/* Cards */}
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
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-16 -left-16 w-52 h-52 bg-purple/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-purple/10 blur-3xl rounded-full" />
              </div>

              <div className="relative">
                {/* Title + Icon */}
                <div className="flex items-center mb-4">
                  
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="mr-5"
                  >
                    <img
                      src={iconUrl(skill.iconKey)}
                      alt={skill.title}
                      className="w-12 h-12 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                      loading="lazy"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-semibold mb-12 mt-10">{skill.title}</h3>
                    
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-gray-300 leading-relaxed">
                  {skill.description ||
                    "I use these skills to design, build, and deliver reliable applications with clean architecture and strong performance."}
                </p>

                
                <div className="flex flex-wrap gap-2">
                  {(skill.tags || []).map((tag) => (
                    <motion.span
                      key={tag.name}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 260 }}
                      className="flex items-center gap-2 px-3 py-1 rounded-full text-sm
                      bg-dark-400/60 border border-white/5 text-gray-200
                      hover:bg-purple/20 hover:border-purple/30 transition duration-300"
                    >
                      <img
                        src={iconUrl(tag.iconKey)}
                        alt={tag.name}
                        className="w-5 h-5"
                        loading="lazy"
                      />
                      {tag.name}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Line */}
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
