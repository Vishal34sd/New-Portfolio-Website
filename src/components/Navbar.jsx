import {useState} from "react"
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false);
    return (
        <nav className="fixed w-full z-50 bg-dark-100/60 backdrop-blur-sm py-4 px-8 shadow-lg">
            <div className="mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="text-3xl font-bold text-white">
                        Vishal
                        <span className="text-purple">Dubey</span>

                        <div className="w-4 h-4 bg-purple rounded-full"></div>
                    </a>

                </div>
                <div className="hidden md:flex space-x-10">
                    <a href="home" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Home</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full " ></span>
                    </a>

                    <a href="About" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span>About</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full " ></span>
                    </a>

                    <a href="Skills" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Skills</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full " ></span>
                    </a>

                    <a href="Projects" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Projects</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full " ></span>
                    </a>

                    <a href="Experience" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Experience</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w/full " ></span>
                    </a>

                    <a href="Contact" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span>Contact</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w/full " ></span>
                    </a>
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

            {
               showMenu && (
                <div className ="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
                    <a onClick = {()=>setShowMenu(!showMenu)} href="home" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Home</span>
                    </a>

                    <a onClick = {()=>setShowMenu(!showMenu)} href="About" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span>About</span>
                    </a>

                    <a onClick = {()=>setShowMenu(!showMenu)} href="Skills" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Skills</span>
                    </a>

                    <a onClick = {()=>setShowMenu(!showMenu)} href="Projects" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Projects</span>
                    </a>

                    <a onClick = {()=>setShowMenu(!showMenu)} href="Experience" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span> Experience</span>
                    </a>

                    <a onClick = {()=>setShowMenu(!showMenu)} href="Contact" className="relative text-white/80 transition duration-300 hover:text-purple group">
                        <span>Contact</span>
                    </a>
                </div>
               ) 
            }
        </nav>
    )
}

export default Navbar;
