import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge"
import { BadgeCheck } from "lucide-react"


const Navbar = () => {

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#project" },
        { label: "Hobbies", href: "#hobbies" },
        { label: "Contact", href: "#contact" },
    ];

    const [showMenu, setShowMenu] = useState(false);
    const [isLight, setIsLight] = useState(false);
    const [themeAnimating, setThemeAnimating] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            const light = stored === "light";
            setIsLight(light);
            document.documentElement.classList.toggle("light", light);
        } catch (error) {
            console.error("Failed to load theme preference:", error);
        }
    }, []);

    const toggleTheme = () => {
        if (themeAnimating) return;

        setThemeAnimating(true);
        setIsLight((prev) => {
            const next = !prev;
            try {
                localStorage.setItem("theme", next ? "light" : "dark");
            } catch (error) {
                console.error("Failed to save theme preference:", error);
            }
            document.documentElement.classList.toggle("light", next);
            return next;
        });

        setTimeout(() => setThemeAnimating(false), 800);
    };

    return (
        <>
            {/* Full Screen Theme Transition Ripple Overlay */}
            <AnimatePresence>
                {themeAnimating && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 150, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className={`fixed top-4 right-8 md:right-16 w-10 h-10 rounded-full z-[99] pointer-events-none 
                        ${isLight ? 'bg-white' : 'bg-dark-100'}
                    `}
                    />
                )}
            </AnimatePresence>

            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed w-full z-50 bg-dark-100/60 light:bg-white/90 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 shadow-lg light:shadow-sm transition-colors duration-300"
            >
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <a
                            href="#home"
                            className="text-2xl sm:text-3xl font-bold text-white light:text-navy flex items-center gap-1 transition-colors duration-300 outline-none focus:outline-none focus:ring-0"
                        >
                            <span>
                                &lt; V
                                <span className="text-purple">D /&gt;</span>
                            </span>
                           
                        </a>

                        <Badge
                            variant="secondary"
                            className="border-0 ring-0 shadow-none focus:outline-none focus:ring-0 text-blue-700 "
                        >
                            <BadgeCheck data-icon="inline-start " />
                            Verified
                        </Badge>
                    </div>


                    <div className="hidden md:flex space-x-10">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="relative text-white/80 light:text-navy-soft transition duration-300 hover:text-purple group">
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
                            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border transition-colors  cursor-pointer duration-300 relative z-[100] ${isLight
                                ? "border-light-border bg-light-surface text-navy hover:bg-light-surface/70"
                                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
                                }`}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isLight ? 180 : 0, scale: themeAnimating ? 1.2 : 1 }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                            >
                                {isLight ? <FiSun className="text-xl text-yellow-500 transform" /> : <FiMoon className="text-lg" />}
                            </motion.div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setShowMenu(!showMenu)}
                            className="md:hidden relative z-[100] p-1"
                            aria-label="Toggle menu"
                        >
                            {showMenu ? (
                                <FaXmark
                                    className="text-2xl cursor-pointer text-white light:text-navy transition-colors duration-300"
                                />
                            ) : (
                                <FaBars
                                    className="text-2xl cursor-pointer text-white light:text-navy transition-colors duration-300"
                                />
                            )}
                        </button>
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
                                className="md:hidden mt-4 bg-dark-300 light:bg-light-card rounded-lg p-4 flex flex-col space-y-4 text-center overflow-hidden max-h-[70vh] overflow-y-auto border border-white/5 light:border-light-border transition-colors duration-300"
                            >
                                {navItems.map((item) => (
                                    <a key={item.href} onClick={() => setShowMenu(false)} href={item.href} className="relative text-white/80 light:text-navy-soft transition duration-300 hover:text-purple group text-xl">
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.nav>
        </>
    )
}

export default Navbar;
