import React from "react" 
import {motion} from "framer-motion"
import {aboutInfo} from "../assets/assets.js"

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
                <div className = "flex flex-col md:flex-row items-center gap-12">
                    <div className = "md:w-1/2 rounded-2xl overflow-hidden">
                        <motion.img 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false , amount :0.2 }}
                        className = "w-full h-full object-cover"
                        src = "/bio-pic-2.jpg" alt = "bio"/>
                    </div>

                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: false , amount :0.2 }}
                    className ="md:w-1/2">
                        <div className = "rounded-2xl p-8">
                            <h3 className = "text-2xl font-semibold mb-6">My Journey</h3>
                            <p className = "text-gray-300 mb-6">My MERN journey started with curiosity — I wanted to understand how real websites actually work from end to end. I began by learning JavaScript and React,
                                building small components, and experimenting with UI. Slowly, I moved from basic projects to building full features like authentication, forms, routing, 
                                and state management. This gave me confidence to take on bigger projects and understand how the frontend communicates with the backend.</p>

                            <p className = "text-gray-300 mb-12">As I explored Node.js, Express, and MongoDB, everything started to connect. I built real-world projects like an expense tracker, a community noticeboard, and other
                                backend-driven applications. These projects taught me how to design APIs, handle databases, manage user data, and think like a full-stack developer. Today, I feel 
                                more confident in the MERN stack and excited to keep improving, learning new tools, and taking on challenges that push me further.</p>

                            {/* cards */}
                            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 
                                        hover:-translate-y-2 cursor-pointer">
                                            <div className = "text-purple text-4xl mb-4">
                                                <data.icon/>
                                            </div>
                                            <h3 className = "text-xl font-semibold mb-3">
                                                {data.title}
                                            </h3>
                                            <p className = "text-gray-400">{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>

                    

                </div>
            </div>
            
        </motion.div>
    )
}

export default About ; 