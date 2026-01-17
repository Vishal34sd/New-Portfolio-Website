import react from "react"
import {motion} from "framer-motion"
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ()=>{
    return(
        <div
        id = "contact"
        className = "py-16 sm:py-20 bg-dark-100 ">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className ="text-3xl font-bold text-center mb-4"
                >
                    Get In <span className ="text-purple">Touch</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className ="text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-16"
                >
                    Have a project in mind or want to collabrate ? Let's talk 
                </motion.p>

                <div className ="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/*Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form className ="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                className ="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300" type="text"></input>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input
                                className ="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300" type="text"></input>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                <textarea
                                className ="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300" type="text"></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type ="submit" 
                                className ="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration cursor pointer"
                            >
                                Send
                            </motion.button>
                            
                        </form>
                    </motion.div>

                     {/*Contact info */}
                     <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className ="space-y-8"
                    >
                        <div className ="flex items-start">
                            <div className ="text-purple text-2xl mr-4">
                                <FaMapMarkerAlt/>
                            </div>
                            <div>
                                <h3 className ="text-lg font-semibold mb-2">Location</h3>
                                <p className="text-gray-400">Ghaziabad, India</p>
                            </div>
                        </div>

                        <div className ="flex items-start">
                            <div className ="text-purple text-2xl mr-4">
                                <FaEnvelope/>
                            </div>
                            <div>
                                <h3 className ="text-lg font-semibold mb-2">Email</h3>
                                <p className="text-gray-400">dubeyvishal714@gmail.com</p>
                            </div>
                        </div>

                        <div className ="flex items-start">
                            <div className ="text-purple text-2xl mr-4">
                                <FaPhone/>
                            </div>
                            <div>
                                <h3 className ="text-lg font-semibold mb-2">Phone</h3>
                                <p className="text-gray-400">+91 9044160248</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                            <div className="flex space-x-6">
                                <a href="https://github.com/Vishal34sd" className="text-gray-400 hover:text-purple transition duration-300 text-2xl">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/vishal-dubey-478541320/" className="text-gray-400 hover:text-purple transition duration-300 text-2xl">
                                    <FaLinkedin />
                                </a>
                                <a href="https://x.com/@VishalDube39123" className="text-gray-400 hover:text-purple transition duration-300 text-2xl">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                     </motion.div>


                </div>

            </div>
        </div>
    )
}

export default Contact ;