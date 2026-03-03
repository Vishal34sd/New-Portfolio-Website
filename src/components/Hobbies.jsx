import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeadphones, FaFilm, FaHeart, FaPlay, FaChevronDown, FaChevronUp } from "react-icons/fa";

const seriesList = [
    {
        title: "Stranger Things",
        tag: "Sci-fi • Thriller",
        img: `/stranger_things.jpeg`,
        accent: "from-purple-500/30 to-cyan-500/10",
        mood: "mood: neon chaos",
        moodColor: "text-cyan-300",
    },
    {
        title: "Game of Thrones",
        tag: "Fantasy • War",
        img: "/got.jpg",
        accent: "from-emerald-500/20 to-blue-500/10",
        mood: "mood: winter war mode",
        moodColor: "text-blue-300",
    },
    {
        title: "Money Heist",
        tag: "Crime • Drama",
        img: "/money_heist.jpg",
        accent: "from-red-500/20 to-orange-500/10",
        mood: "mood: mastermind energy",
        moodColor: "text-red-300",
    },
    {
        title: "FROM",
        tag: "Mystery • Masterpiece",
        img: "/from.png",
        accent: "from-yellow-500/15 to-lime-500/10",
        mood: "mood: creepy unknown",
        moodColor: "text-yellow-200",
    },
];

// Spotify tracks/playlists
const spotifyEmbeds = [
    {
        title: "Tailwinder Vibes ⚡",
        subtitle: "Code + Coffee + Flow",
        embedUrl:
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXdLEN7aqioXM?utm_source=generator",
        icon: <FaHeadphones />,
    },
];

const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, type: "spring", staggerChildren: 0.12 },
    },
};

const item = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const Hobbies = () => {
    const [showAllSeries, setShowAllSeries] = useState(false);

    // Determine the list to display based on state
    const visibleSeries = showAllSeries ? seriesList : seriesList.slice(0, 2);

    return (
        <section id="hobbies" className="scroll-mt-28 py-16 sm:py-24 bg-dark-100 text-white light:bg-light-bg light:text-navy transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 relative">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl font-bold leading-tight">
                        My <span className="text-purple">Hobbies</span> Universe
                    </h2>
                    <p className="mt-3 text-gray-400 light:text-navy-muted max-w-2xl mx-auto transition-colors duration-300">
                        When I'm not coding — I'm either bingeing legendary series or vibing to Spotify
                        like it's my second OS 🎧
                    </p>
                </motion.div>

                {/* Main stack */}
                <div className="flex flex-col gap-12 lg:gap-16 max-w-4xl mx-auto">

                    {/* TOP: Web series */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-3 rounded-xl bg-dark-400/40 light:bg-light-surface text-purple text-xl shadow-sm">
                                <FaFilm />
                            </span>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold">Web Series I Love</h3>
                                <p className="text-gray-400 light:text-navy-muted text-sm transition-colors duration-300">Dark vibes. Plot twists. Goosebumps.</p>
                            </div>
                        </div>

                        {/* Series List Container */}
                        <div className="relative grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-5 layout-transition">
                            <AnimatePresence>
                                {visibleSeries.map((s) => (
                                    <motion.div
                                        layout
                                        key={s.title}
                                        variants={item}
                                        initial="hidden"
                                        animate="show"
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 16 }}
                                        className="group relative rounded-2xl overflow-hidden border border-white/5 bg-black/40 light:border-light-border light:bg-light-surface shadow-md transition-colors duration-300"
                                    >
                                        {/* Image */}
                                        <div className="relative h-44">
                                            <img
                                                src={s.img}
                                                alt={s.title}
                                                className="w-full h-full object-cover transition"
                                                loading="lazy"
                                            />
                                            {/* Overlay gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-tr ${s.accent}`} />
                                            {/* Floating play */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileHover={{ opacity: 1, scale: 1 }}
                                                className="absolute top-4 right-4"
                                            >
                                                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
                                                    <FaPlay className="text-white text-sm" />
                                                </span>
                                            </motion.div>
                                        </div>

                                        {/* Text */}
                                        <div className="p-4">
                                            <h4 className="font-extrabold text-lg tracking-tight">{s.title}</h4>
                                            <p className="text-gray-400 light:text-navy-muted text-sm mt-1 mb-4 transition-colors duration-300">{s.tag}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Show More/Less Button */}
                        {seriesList.length > 2 && (
                            <motion.button
                                layout
                                onClick={() => setShowAllSeries(!showAllSeries)}
                                className="self-center mt-2 px-6 py-2 rounded-full border border-purple/40 text-purple text-sm font-semibold flex items-center gap-2 hover:bg-purple/10 transition-colors"
                            >
                                {showAllSeries ? (
                                    <>Show Less <FaChevronUp className="text-xs" /></>
                                ) : (
                                    <>Show More <FaChevronDown className="text-xs" /></>
                                )}
                            </motion.button>
                        )}

                    </motion.div>

                    {/* BOTTOM: Spotify */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-3 rounded-xl bg-dark-400/40 light:bg-light-surface text-purple text-xl shadow-sm">
                                <FaHeadphones />
                            </span>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold">Spotify Vibes</h3>
                                <p className="text-gray-400 light:text-navy-muted text-sm transition-colors duration-300">
                                    I code better when music is loud in my head 🎧
                                </p>
                            </div>
                        </div>

                        <div className="relative space-y-6">
                            {spotifyEmbeds.map((song) => (
                                <motion.div
                                    key={song.title}
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 16 }}
                                    className="rounded-2xl border border-white/5 bg-black/40 overflow-hidden light:border-light-border light:bg-light-surface shadow-md transition-colors duration-300"
                                >
                                    {/* header */}
                                    <div className="flex items-center gap-3 p-4 border-b border-white/5 light:border-light-border transition-colors duration-300">
                                        <span className="w-10 h-10 rounded-xl bg-purple/15 border border-purple/20 flex items-center justify-center text-purple">
                                            {song.icon}
                                        </span>

                                        <div className="flex-1">
                                            <h4 className="font-bold text-base">{song.title}</h4>
                                            <p className="text-xs text-gray-400 light:text-navy-muted transition-colors duration-300">{song.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* spotify iframe */}
                                    <div className="p-4">
                                        <div className="rounded-xl overflow-hidden shadow-sm">
                                            <iframe
                                                style={{ borderRadius: 12 }}
                                                src={song.embedUrl}
                                                width="100%"
                                                height="152"
                                                frameBorder="0"
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                loading="lazy"
                                                title={song.title}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
