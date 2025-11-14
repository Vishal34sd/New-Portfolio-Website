import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Vishal Dubey</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer 
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            A passionate MERN Stack Developer, Java DSA solver, and Blockchain learner.
            I enjoy building modern, responsive applications and working with tools like Docker
            to create efficient and scalable environments. I'm focused on writing clean code,
            improving problem-solving skills, and exploring new technologies to grow as a developer.
          </p>

        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
