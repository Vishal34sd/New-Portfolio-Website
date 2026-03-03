import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../assets/assets";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const defaultProjectCount = isMobile ? 2 : 3;
    const visibleProjects = showAllProjects ? projects : projects.slice(0, defaultProjectCount);

    return (
        <div
            id="project"
            className="scroll-mt-28 py-16 sm:py-20 bg-dark-100 section-bg-alt transition-colors duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-4"
                >
                    My <span className="text-purple">Projects</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 light:text-navy-muted text-center max-w-2xl mx-auto mb-10 sm:mb-16 transition-colors duration-300"
                >
                    A selection of my recent projects
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto layout-transition">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard {...project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {projects.length > 2 && (
                    <div className="text-center mt-12 flex justify-center">
                        <motion.button
                            layout
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 border 
                            border-purple rounded-full font-medium hover:bg-purple/20 text-purple
                            transition duration-300 gap-2"
                        >
                            <span>{showAllProjects ? "Show Less" : "Show More Projects"}</span>
                            {showAllProjects ? <FaChevronUp /> : <FaChevronDown />}
                        </motion.button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects;