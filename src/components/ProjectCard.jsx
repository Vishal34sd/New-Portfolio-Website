import React from "react";
import { motion } from "framer-motion";


const iconUrl = (key) => `https://skillicons.dev/icons?i=${key}`;

const ProjectCard = ({
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
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

          <span
            className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-medium
          border border-white/10 bg-dark-400/40 text-gray-200"
          >
            Featured
          </span>
        </div>

        <p className="text-gray-400 mt-2 mb-5 leading-relaxed">{description}</p>

        
        {iconKeys?.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {iconKeys.map((key, index) => (
              
                <img
                  src={iconUrl(key)}
                  alt={key}
                  className="w-7 h-7 "
                  loading="lazy"
                />
              
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 rounded-lg font-semibold
              bg-purple/90 hover:bg-purple transition duration-300
              shadow-[0_10px_30px_-12px_rgba(168,85,247,0.6)]"
            >
              Live Demo
            </a>
          )}

          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={`text-center px-4 py-2 rounded-lg font-semibold border border-purple/60
            hover:bg-purple/10 hover:border-purple transition duration-300
            ${demo ? "flex-1" : "w-full"}`}
          >
            Source Code
          </a>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
