import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#project" },
        { label: "Hobbies", href: "#hobbies" },
        { label: "Contact", href: "#contact" },
    ];

    const [showMenu , setShowMenu] = useState(false);
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            const light = stored === "light";
            setIsLight(light);
            document.documentElement.classList.toggle("light", light);
        } catch {
            // ignore
        }
    }, []);

    const toggleTheme = () => {
        setIsLight((prev) => {
            const next = !prev;
            try {
                localStorage.setItem("theme", next ? "light" : "dark");
            } catch {
                // ignore
            }
            document.documentElement.classList.toggle("light", next);
            return next;
        });
    };

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 bg-dark-100/60 light:bg-white/70 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 shadow-lg light:shadow-md transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div>
                    <a href="#home" className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900 flex items-center gap-2 transition-colors duration-300">
                        <span>
                          Vishal
                          <span className="text-purple">Dubey</span>
                        </span>
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple rounded-full" />
                    </a>

                </div>
                <div className="hidden md:flex space-x-10">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="relative text-white/80 light:text-slate-700 transition duration-300 hover:text-purple group">
                            <span>{item.label}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full " ></span>
                        </a>
                    ))}
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl
                        border border-white/10 bg-dark-300/50 text-white/90 hover:bg-dark-300/80
                        light:border-slate-200 light:bg-white/70 light:text-slate-800 light:hover:bg-slate-100
                        transition-colors duration-300"
                    >
                        {isLight ? <FiMoon className="text-lg" /> : <FiSun className="text-lg" />}
                    </button>

                    <div className="md:hidden">
                        {showMenu ? (
                            <FaXmark
                                className="text-2xl cursor-pointer text-white light:text-slate-900 transition-colors duration-300"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        ) : (
                            <FaBars
                                className="text-2xl cursor-pointer text-white light:text-slate-900 transition-colors duration-300"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        )}
                    </div>
                </div>
            </div>

            <AnimatePresence>
            {
               showMenu && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className ="md:hidden mt-4 bg-dark-300 light:bg-white rounded-lg p-4 flex flex-col space-y-4 text-center overflow-hidden max-h-[70vh] overflow-y-auto border border-white/5 light:border-slate-200 transition-colors duration-300"
                >
                    {navItems.map((item) => (
                        <a key={item.href} onClick = {()=>setShowMenu(false)} href={item.href} className="relative text-white/80 light:text-slate-700 transition duration-300 hover:text-purple group text-xl">
                            <span>{item.label}</span>
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
