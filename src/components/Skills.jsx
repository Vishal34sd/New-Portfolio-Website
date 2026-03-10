import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets.js";

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
    <section
      id="skills"
      className="scroll-mt-28 py-16 sm:py-20 bg-dark-100 text-white light:bg-light-bg light:text-navy transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold">
            <span className="text-white">My </span>
            <span className="text-purple">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-12 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-200 light:text-navy-soft">
                {skill.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {(skill.tags || []).map((tag) => (
                  <motion.div
                    key={tag.name}
                    whileHover={{ y: -6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <img
                      src={iconUrl(tag.iconKey)}
                      alt={tag.name}
                      className="w-14 h-14 md:w-16 md:h-16 drop-shadow-lg"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-gray-400 light:text-navy-muted">
                      {tag.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;