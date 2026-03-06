import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    const [text, setText] = useState('');
    const fullText = "INITIALIZING_SYSTEM...";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    // Generate random binary strings for background effect
    const generateBinary = () => {
        let result = '';
        for (let i = 0; i < 50; i++) {
            result += Math.round(Math.random()) ? '1 ' : '0 ';
        }
        return result;
    };

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden font-mono"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Matrix-like falling code background effect (simplified) */}
            <div className="absolute inset-0 opacity-10 flex flex-col justify-around text-green-500 text-xs pointer-events-none select-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: Math.random() * -100 }}
                        animate={{ x: Math.random() * 100 }}
                        transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: 'mirror' }}
                        className="whitespace-nowrap"
                    >
                        {generateBinary()} {generateBinary()} {generateBinary()}
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Futuristic Spinner */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                    <motion.div
                        className="absolute inset-0 rounded-sm border-[1px] border-emerald-500/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-2 border-[2px] border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-6 border-[2px] border-b-emerald-300 border-l-emerald-300 border-t-transparent border-r-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Core chip */}
                    <motion.div
                        className="w-8 h-8 bg-emerald-950 border border-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-2 h-2 bg-emerald-400" />
                    </motion.div>
                </div>

                {/* Typing Text */}
                <div className="h-8 flex items-center justify-center">
                    <span className="text-emerald-400 text-xl md:text-2xl font-bold tracking-widest drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                        {text}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block ml-1 w-3 h-6 bg-emerald-400 align-middle"
                        />
                    </span>
                </div>

                {/* Loading Bar */}
                <div className="w-64 h-1 bg-gray-900 mt-6 relative overflow-hidden ring-1 ring-emerald-900/50">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.8, ease: "easeInOut" }}
                    />
                </div>

                <motion.div
                    className="mt-2 text-emerald-500/50 text-xs tracking-widest uppercase"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Compiling Assets...
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
