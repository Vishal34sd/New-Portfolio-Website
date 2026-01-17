import React from "react"
import {motion} from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";


const Projects = () =>{
    return(
        <div
        id = "project"
        className = "scroll-mt-28 py-16 sm:py-20 bg-dark-200 light:bg-slate-100 transition-colors duration-300"
        >
            <div className = "container mx-auto px-4 sm:px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className = "text-3xl font-bold text-center mb-4"
                >
                    My <span className = "text-purple">Projects</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className ="text-gray-400 light:text-slate-600 text-center max-w-2xl mx-auto mb-10 sm:mb-16 transition-colors duration-300"
                >
                    A selection of my recent projects 
                </motion.p>
                <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/*Project records*/}
                   { projects.map((project , index)=>(
                        <ProjectCard key={index} {...project} index={index}/>
                    ))}

                </div>
                <div className ="text-center mt-12">
                    <motion.a 
                        href="#" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className ="inline-flex items-center px-6 py-3 border 
                    border-purple rounded-lg font-medium hover:bg-purple/20
                    transition duration-300"
                    >
                        <span>View more Projects</span>
                        <FaArrowRight className ="ml-2" />
                    </motion.a>
                </div>
            </div>

        </div>
    )
}


export default Projects ;