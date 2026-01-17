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
      className="min-h-screen flex items-center pt-24 sm:pt-28 pb-14 sm:pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
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
            className="text-base sm:text-lg text-gray-300 mb-10 sm:mb-12 leading-relaxed"
          >
            I’m a{" "}
            <span className="text-white font-semibold">
              Full Stack Developer
            </span>{" "}
            who builds modern, fast and interactive web apps using{" "}
            <span className="inline-flex flex-wrap gap-2 mx-2 align-middle justify-start">
              {techStack.map((tech) => (
                <motion.button
                  key={tech.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 border-2 border-dotted border-white/20 text-white/90 hover:bg-purple/15 hover:border-purple/50 hover:text-purple transition duration-300"
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
            <ConnectNavbar/>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-5"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#project"
              className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium transition duration-300"
            >
              View Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/New_Resume_Vishal.pdf"
              download="Vishal_Dubey_Resume.pdf"
              className="w-full sm:w-auto text-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>

            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              animate={{ y: [0, -20, 0] }}
              className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover z-10"
              src="/bio_pic_2.png"
              alt="image-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
