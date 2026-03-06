import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setMessage("");
                setIsOpen(false);
            }, 3000);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="pointer-events-auto bg-dark-300/90 light:bg-white/95 backdrop-blur-xl border border-white/10 light:border-light-border w-72 sm:w-80 rounded-2xl shadow-2xl overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple to-pink p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <FaRobot className="text-xl" />
                                <span className="font-bold">Suggestion Bot</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition-colors">
                                <FaTimes />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-dark-200/50 light:bg-light-surface">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center p-6 text-center h-40"
                                >
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                                        <FaRobot className="text-3xl text-green-500" />
                                    </div>
                                    <h3 className="text-white light:text-navy font-bold text-lg mb-1">Got it!</h3>
                                    <p className="text-gray-400 light:text-navy-muted text-sm">Thanks for your suggestion.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col h-40">
                                    <p className="text-gray-300 light:text-slate-700 text-sm mb-3">
                                        Have an idea or spotted a bug? Let me know!
                                    </p>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your suggestion here..."
                                        className="flex-1 w-full bg-dark-400/50 light:bg-white border border-white/5 light:border-gray-200 rounded-lg p-3 text-sm text-white light:text-navy focus:outline-none focus:border-purple/50 resize-none transition-colors"
                                        required
                                    />
                                    <div className="mt-3 flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-purple hover:bg-pink text-white text-sm font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
                                        >
                                            <span>Send</span>
                                            <FaPaperPlane className="text-xs" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Robot Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                animate={{
                    y: [0, -15, 0], 
                    x: [0, -5, 5, 0], // Subtle side-to-side roaming
                    rotate: [0, -10, 10, 0] // Wiggle effect
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
                whileHover={{ scale: 1.1, y: 0, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto bg-gradient-to-r from-purple to-pink w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-lg light:shadow-purple/30 cursor-pointer overflow-hidden group relative border-2 border-white/20"
                aria-label="Open Suggestions"
            >
                {/* Glow behind bot */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <FaRobot className="text-2xl sm:text-3xl relative z-10" />

                {/* Notification Badge indicator so it looks 'alive' */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 p-1.5 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
