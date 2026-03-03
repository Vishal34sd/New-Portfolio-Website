import { motion } from "framer-motion";
import ConnectNavbar from "./ConnectNavbar";

const Hero = () => {
  const techStack = [
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Tailwind", icon: "tailwind" },
  ];

  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-24 sm:pt-28 pb-14 sm:pb-16 bg-dark-100 section-bg transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between mt-6 sm:mt-10">
        <div className="w-full md:w-7/12 mb-10 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hi, I'm <span className="text-purple">Vishal Dubey</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 flex justify-center md:justify-start"
          >
            <span className="typewriter-loop"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300 light:text-navy-soft mb-10 sm:mb-12 leading-relaxed transition-colors duration-300"
          >
            I’m a{" "}
            <span className="text-white light:text-navy font-semibold transition-colors duration-300">
              Full Stack Developer
            </span>{" "}
            who builds modern, fast and interactive web apps using{" "}
            <span className="inline-flex flex-wrap gap-2 mx-2 align-middle justify-start">
              {techStack.map((tech) => (
                <motion.button
                  key={tech.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 border-2 border-dotted border-white/20 text-white/90 hover:bg-purple/15 hover:border-purple/50 hover:text-purple transition duration-300
                  light:bg-light-surface light:border-light-border light:text-navy-soft light:hover:bg-purple/10 light:hover:text-purple"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${tech.icon}`}
                    alt={tech.name}
                    loading="lazy"
                    className="w-5 h-5"
                  />
                  {tech.name}
                </motion.button>
              ))}
            </span>
            . I focus on clean UI, scalable backend, APIs, and smooth user
            experience — always building and shipping 🚀
          </motion.p>

          <div className="flex justify-center md:justify-start">
            <ConnectNavbar />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-5"
          >
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#project"
              className="btn-3d w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium"
            >
              View Work
            </motion.a>

            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="btn-3d-outline w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileTap={{ scale: 0.97 }}
              href="/final_resume_vishal.pdf"
              download="Vishal_Dubey_Resume.pdf"
              className="btn-3d-outline w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <div className="w-full md:w-5/12 flex justify-center perspective-1000">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70 pointer-events-none"></div>

            <motion.img
              id="profile-pic"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              drag
              dragSnapToOrigin={true}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover z-50 cursor-grab"
              src="/bio_pic_2.png"
              alt="image-logo"
              title="Drag me around!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
