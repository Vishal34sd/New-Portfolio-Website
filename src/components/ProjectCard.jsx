import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const iconUrl = (key) => `https://skillicons.dev/icons?i=${key}`;

const ProjectCard = ({
    id,
    title,
    description,
    image,
    tech,
    demo,
    code,
    iconKeys,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative group rounded-2xl overflow-hidden cursor-pointer
      border border-white/10 bg-dark-300/60 backdrop-blur-xl shadow-lg
      light:border-light-border light:bg-light-card card-pro
      hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]
      transition-all duration-300"
        >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-16 -left-16 h-52 w-52 rounded-full bg-purple/20 blur-3xl" />
                <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-purple/10 blur-3xl" />
            </div>

            {/* Image */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

                    <span
                        className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-medium
          border border-white/10 bg-dark-400/40 text-gray-200
          light:border-light-border light:bg-light-surface light:text-navy-soft transition-colors duration-300"
                    >
                        Featured
                    </span>
                </div>

                <p className="text-gray-400 light:text-navy-muted mt-2 mb-5 leading-relaxed transition-colors duration-300">{description}</p>


                {iconKeys?.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-6">
                        {iconKeys.map((key, index) => (

                            <img
                                src={iconUrl(key)}
                                alt={key}
                                className="w-7 h-7 "
                                loading="lazy"
                                key={index}
                            />

                        ))}
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        to={`/project/${id}`}
                        className="btn-3d flex-1 text-center px-4 py-2 rounded-lg font-semibold"
                    >
                        View Details
                    </Link>

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-3d-outline flex-1 text-center px-4 py-2 rounded-lg font-semibold"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </motion.div>
    );
};

export default ProjectCard;
