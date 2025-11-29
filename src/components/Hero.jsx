import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT CONTENT */}
        <div className="md:w-7/12 mb-10 md:mb-0">
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-purple">Vishal Dubey</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-6 typewriter"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8"
          >
            A passionate MERN Stack Developer, Java DSA solver, and Blockchain learner.
            I enjoy building modern, responsive applications and working with tools like Docker
            to create efficient and scalable environments. I'm focused on writing clean code,
            improving problem-solving skills, and exploring new technologies to grow as a developer.
          </motion.p>

          {/* BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#project" 
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple/80 transition duration-300"
            >
              View Work
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/New_resume_vishal.pdf" 
              download="Vishal_Dubey_Resume.pdf"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>

        </div>

        {/* END LEFT CONTENT */}
        
      {/*right side image */}
      <div className="md:w-5/12 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              animate = {{y:[0 , -20, 0]}}
              // transition = {{
              //   duration : 4 ,
              //   repeat : Infinity ,
              //   repeatType  : "loop" ,
              //   ease : "easeInOut"
              // }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
              src="/bio-pic-2.jpg"
              alt="image-logo"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
