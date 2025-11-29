import {useState} from "react"
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false);
    return (
        <motion.nav 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 bg-dark-100/60 backdrop-blur-sm py-4 px-8 shadow-lg"
        >
            <div className="mx-auto flex justify-between items-center">
                <div>
                    <a href="#home" className="text-3xl font-bold text-white">
                        Vishal
                        <span className="text-purple">Dubey</span>

                        <div className="w-4 h-4 bg-purple rounded-full"></div>
                    </a>

                </div>
                <div className="hidden md:flex space-x-10">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                        <a key={index} href={`#${item.toLowerCase().replace("projects", "project")}`} className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>{item}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full " ></span>
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    {
                        showMenu ?
                         <FaXmark className ="text-2xl cursor-pointer"
                         onClick = {()=>setShowMenu(!showMenu)}/>:
                         <FaBars className="text-2xl cursor-pointer"
                          onClick = {()=>setShowMenu(!showMenu)}/>
                    }
                    
                </div>
            </div>

            <AnimatePresence>
            {
               showMenu && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "100vh" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className ="md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4 text-center justify-center overflow-hidden"
                >
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                        <a key={index} onClick = {()=>setShowMenu(!showMenu)} href={`#${item.toLowerCase().replace("projects", "project")}`} className="relative text-white/80 transition duration-300 hover:text-purple group text-xl">
                            <span>{item}</span>
                        </a>
                    ))}
                </motion.div>
               ) 
            }
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar;
