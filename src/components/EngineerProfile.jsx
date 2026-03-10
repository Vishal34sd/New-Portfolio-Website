import { motion } from 'framer-motion';

const EngineerProfile = () => {
    const codeLines = [
    <div className="flex"><span><span className="text-purple light:text-[#d32f2f]">const</span> <span className="text-white light:text-[#1976d2]">engineer</span> <span className="text-[#ff7b72] light:text-[#d32f2f]">=</span> {'{'}</span></div>,

    <div className="flex pl-4"><span><span className="text-[#79c0ff] light:text-[#1976d2]">name</span>: <span className="text-green-500 light:text-[#2e7d32]">"Vishal Dubey"</span>,</span></div>,

    <div className="flex pl-4"><span><span className="text-[#79c0ff] light:text-[#1976d2]">type</span>: <span className="text-green-500 light:text-[#2e7d32]">"Full-Stack Developer"</span>,</span></div>,

    <div className="flex h-6"></div>,

    <div className="flex pl-4"><span><span className="text-[#79c0ff] light:text-[#1976d2]">stack</span>: {'{'}</span></div>,

    <div className="flex pl-8"><span><span className="text-[#79c0ff] light:text-[#1976d2]">frontend</span>: [<span className="text-green-500 light:text-[#2e7d32]">"React"</span>, <span className="text-green-500 light:text-[#2e7d32]">"Next.js"</span>],</span></div>,

    <div className="flex pl-8"><span><span className="text-[#79c0ff] light:text-[#1976d2]">backend</span>: [<span className="text-green-500 light:text-[#2e7d32]">"Node.js"</span>, <span className="text-green-500 light:text-[#2e7d32]">"Express"</span>, <span className="text-green-500 light:text-[#2e7d32]">"AWS"</span>],</span></div>,

    <div className="flex pl-8"><span><span className="text-[#79c0ff] light:text-[#1976d2]">database</span>: [<span className="text-green-500 light:text-[#2e7d32]">"MongoDB"</span>, <span className="text-green-500 light:text-[#2e7d32]">"PostgreSQL"</span>],</span></div>,

    <div className="flex pl-8"><span><span className="text-[#79c0ff] light:text-[#1976d2]">languages</span>: [<span className="text-green-500 light:text-[#2e7d32]">"TypeScript"</span>, <span className="text-green-500 light:text-[#2e7d32]">"JavaScript"</span>, <span className="text-green-500 light:text-[#2e7d32]">"Java"</span>]</span></div>,

    <div className="flex pl-4"><span>{'}'},</span></div>,

    <div className="flex h-6"></div>,

    <div className="flex pl-4"><span><span className="text-[#79c0ff] light:text-[#1976d2]">mission</span>: <span className="text-[#ff7b72] light:text-[#d32f2f]">function</span>() {'{'}</span></div>,

    <div className="flex pl-8"><span><span className="text-[#ff7b72] light:text-[#d32f2f]">return</span> <span className="text-green-500 light:text-[#2e7d32]">"Building scalable solutions"</span>;</span></div>,

    <div className="flex pl-4"><span>{'}'},</span></div>,

    <div className="flex h-6"></div>,

    <div className="flex pl-4"><span><span className="text-[#79c0ff] light:text-[#1976d2]">status</span>: <span className="text-green-500 light:text-[#2e7d32]">"Ready to deploy"</span></span></div>,

    <div className="flex"><span>{'}'};<span className="inline-block w-[8px] bg-[#e6edf3] light:bg-[#000] h-4 ml-1 md:-mb-[1px] -mb-0 animate-pulse align-middle opacity-80"></span></span></div>
];

    return (
        <section className="py-20 relative overflow-hidden bg-dark-100 section-bg transition-colors duration-300">

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white light:text-navy"
                    >
                       <h2 className="text-3xl font-bold">
  <span className="text-white">About </span>
  <span className="text-purple">the </span>
  <span className="text-white">Developer</span>
</h2>
                    </motion.h2>
                </div>

                {/* Code Environment Component */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="rounded-xl overflow-hidden bg-[#0d1117] light:bg-[#f8fafc] border border-white/10 light:border-light-border shadow-2xl light:shadow-xl">
                        {/* Top Bar */}
                        <div className="flex items-center px-4 py-3 bg-[#161b22] light:bg-[#e2e8f0] border-b border-white/10 light:border-light-border">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="mx-auto flex items-center text-xs text-gray-400 light:text-navy-muted font-mono tracking-wider relative -left-4">
                                <span className="mr-2"> &gt;_ </span> engineer.js
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm md:text-base overflow-x-auto text-gray-300 light:text-navy scrollbar-hide flex">
                            {/* Line Numbers Container */}
                            <div className="flex flex-col text-right pr-4 mr-4 text-gray-600 light:text-gray-400 select-none border-r border-[#30363d] light:border-gray-300">
                                {[...Array(16)].map((_, i) => (
                                    <span key={i + 1} className="w-6">{i + 1}</span>
                                ))}
                            </div>

                            {/* Actual Code Lines with Typing Animation */}
                            <div className="flex flex-col whitespace-nowrap">
                                {codeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                                        whileInView={{ clipPath: "inset(0 0 0 0)" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.2 + 0.4, ease: "linear" }}
                                        className="w-full"
                                    >
                                        {line}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Status Bar */}
                        <div className="flex justify-between items-center px-4 py-2 bg-[#161b22] light:bg-[#e2e8f0] border-t border-white/10 light:border-light-border text-xs text-gray-500 light:text-navy-muted font-mono">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1"><span className="text-[#ff7b72] light:text-[#d32f2f] text-base leading-none translate-y-[1px]">⎇</span> main</span>
                                <span className="flex items-center gap-1 opacity-80">🌐 UTF-8</span>
                            </div>
                            <div className="text-[#3fb950] light:text-[#2e7d32] font-semibold flex items-center gap-2">
                                Online
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EngineerProfile;
