import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

const iconUrl = (key) => `https://skillicons.dev/icons?i=${key}`;

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the current project
    const project = projects.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-16 bg-dark-100 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <button onClick={() => navigate('/')} className="text-purple hover:underline flex items-center gap-2">
                    <FaArrowLeft /> Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-dark-100 text-white light:bg-light-bg light:text-navy transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-purple light:text-navy-muted light:hover:text-purple transition mb-8 font-medium"
                >
                    <FaArrowLeft /> Back to Portfolio
                </motion.button>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* LEFT / TOP: Image area */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-7/12 flex flex-col gap-8"
                    >
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl light:border-light-border light:shadow-sm">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Features Below Image */}
                        {project.features && project.features.length > 0 && (
                            <div className="w-full">
                                <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2 light:border-light-border">Key Features</h2>
                                <ul className="space-y-3">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-800 light:text-slate-800">
                                            <FaCheck className="text-purple mt-1 flex-shrink-0" />
                                            <span className="leading-relaxed font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                    {/* RIGHT / BOTTOM: Text area */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-5/12 flex flex-col pt-2"
                    >
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight light:text-slate-900">
                            {project.title}
                        </h1>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.iconKeys?.map((key) => (
                                <img
                                    key={key}
                                    src={iconUrl(key)}
                                    alt={key}
                                    className="w-8 h-8 drop-shadow-sm"
                                    title={key}
                                />
                            ))}
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <h2 className="text-xl font-bold mb-3 border-b border-white/10 pb-2 light:border-light-border light:text-slate-800">Overview</h2>
                            <p className="text-gray-300 light:text-slate-700 leading-relaxed font-medium">
                                {project.fullDescription || project.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-3d flex-1 text-center px-6 py-3 rounded-xl font-bold shadow-lg"
                                >
                                    Live Demo
                                </a>
                            )}
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-3d-outline flex-1 text-center px-6 py-3 rounded-xl font-bold"
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
