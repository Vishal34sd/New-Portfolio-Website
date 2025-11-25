import React from "react" 
import {motion} from "framer-motion"

const About = ()=>{
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id = "about" 
        className = "py-20 bg-dark-200"
        >
            <div className = "container mx-0 px-6">
                <h2 className = "text-3xl font-bold text-center mb-4"> About 
                    <span className ="text-purple">Me</span>
                     </h2>
                <p className = "text-gray-400 text-center max-w-2xl mx-auto mb-16">Get to know more about my background and passion</p>
                {/* image + journey */}
                <div className = "flex flex-col md: flex-row items-center gap-12">
                    <div className = "md: w-1/2 rounded-2xl overflow">
                        <motion.img 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false , amount :0.2 }}
                        className = "w-full h-full object-cover"
                        src = "/bio-pic-2.jpg" alt = "bio"/>
                    </div>

                    <motion.div className =""></motion.div>

                    

                </div>
            </div>
            
        </motion.div>
    )
}

export default About ; 