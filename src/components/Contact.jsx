import react from "react"
import {motion} from "framer-motion"
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ()=>{
    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false , amount : 0.2 }}
        id = "contact"
        className = "py-20 bg-dark-100 ">
            <div className="container mx-auto px-6">
                <h2 className ="text-3xl font-bold text-center mb-4">
                    Get In
                    <span className ="text-purple">Touch</span>
                </h2>
                <p className ="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Have a project in mind or want to collabrate ? Let's talk 
                </p>

                <div className ="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/*Contact form */}
                    <div>
                        <form className ="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                className ="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" type="text"></input>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input
                                className ="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" type="text"></input>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                <textarea
                                className ="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" type="text"></textarea>
                            </div>
                            <button type ="submit" className ="w-full px-6 py-3
                            bg-purple rounded-lg font-medium hover:bg-purple-700
                            transition duration cursor pointer">Send</button>
                            
                        </form>
                    </div>

                     {/*Contact info */}
                     <div className ="space-y-8">
                        <div className ="flex items-start">
                            <div className ="text-purple text-2xl mr-4">
                                <FaMapMarkerAlt/>
                            </div>
                            <div>
                                <h3 className ="text-lg font-semibold mb-2">Location</h3>
                                <p className="text-gray-400">New Delhi, India</p>
                            </div>
                        </div>

                        <div className ="flex items-start">
                            <div className ="text-purple text-2xl mr-4">
                                <FaEnvelope/>
                            </div>
                            <div>
                                <h3 className ="text-lg font-semibold mb-2">Email</h3>
                                <p className="text-gray-400">vishaldubey@example.com</p>
                            </div>
                        </div>

                        <div className ="flex items-start">
                            <div className ="text-purple text-2xl mr-4">
                                <FaPhone/>
                            </div>
                            <div>
                                <h3 className ="text-lg font-semibold mb-2">Phone</h3>
                                <p className="text-gray-400">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-purple transition duration-300 text-2xl">
                                    <FaGithub />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple transition duration-300 text-2xl">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple transition duration-300 text-2xl">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                     </div>


                </div>

            </div>
        </motion.div>
    )
}

export default Contact ;