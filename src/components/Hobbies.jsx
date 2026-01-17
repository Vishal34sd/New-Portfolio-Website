import React from "react";
import { motion } from "framer-motion";
import { FaHeadphones, FaFilm, FaHeart, FaPlay } from "react-icons/fa";

const seriesList = [
  {
    title: "Stranger Things",
    tag: "Sci-fi • Thriller",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
    accent: "from-purple-500/30 to-cyan-500/10",
   
  },
  {
    title: "Game of Thrones",
    tag: "Fantasy • War",
    img: "https://images.unsplash.com/photo-1606240724602-5b21f896eae8?q=80&w=1200&auto=format&fit=crop",
    accent: "from-emerald-500/20 to-blue-500/10",
   
  },
  {
    title: "Money Heist",
    tag: "Crime • Drama",
    img: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1200&auto=format&fit=crop",
    accent: "from-red-500/20 to-orange-500/10",
    
  },
  {
    title: "Breaking Bad",
    tag: "Crime • Masterpiece",
    img: "https://images.unsplash.com/photo-1520975958225-9f0a8c2d3c4f?q=80&w=1200&auto=format&fit=crop",
    accent: "from-yellow-500/15 to-lime-500/10",
    
  },
];

// Spotify tracks/playlists — you can change these anytime
const spotifyEmbeds = [
  {
    title: "Arijit Singh — Soul Mode",
    subtitle: "Lo-fi + Love + Pain 😭✨",
    embedUrl:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWXtlo6ENS92N?utm_source=generator",
    icon: <FaHeart />,
  },
  {
    title: "Tailwind Vibes ⚡",
    subtitle: "Code + Coffee + Flow 🧠☕",
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
  return (
    <section id="hobbies" className="py-24 bg-dark-200 text-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-48 -right-40 w-[620px] h-[620px] rounded-full bg-cyan-400/10 blur-3xl opacity-40" />
      </div>

      {/* Sparkle dots */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/60"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 2.2 + (i % 5) * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            My <span className="text-purple">Hobbies</span> Universe
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            When I’m not coding — I’m either bingeing legendary series or vibing to Spotify
            like it’s my second OS 🎧
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Web series */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/5 bg-dark-300/60 backdrop-blur-xl shadow-xl p-6 md:p-8 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl border border-white/10 bg-dark-400/40">
                  <FaFilm className="text-purple text-xl" />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Web Series I Love</h3>
                  <p className="text-gray-400 text-sm">Dark vibes. Plot twists. Goosebumps.</p>
                </div>
              </div>

              <span className="text-xs px-3 py-2 rounded-xl bg-purple/15 border border-purple/25 text-purple font-semibold">
                binge-mode ON
              </span>
            </div>

            {/* Series cards */}
            <div className="relative grid sm:grid-cols-2 gap-5">
              {seriesList.map((s, idx) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/40"
                  style={{
                    boxShadow: `0 0 40px ${s.glow}`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-44">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${s.accent}`}
                    />
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
                    <p className="text-gray-400 text-sm mt-1">{s.tag}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                        Rewatch-worthy ✅
                      </span>
                      <span className="text-xs font-semibold text-purple">
                        mood: cinematic ✨
                      </span>
                    </div>
                  </div>

                  
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Spotify */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/5 bg-dark-300/60 backdrop-blur-xl shadow-xl p-6 md:p-8 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-purple/10 blur-3xl" />
            </div>

            <div className="relative flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl border border-white/10 bg-dark-400/40">
                  <FaHeadphones className="text-purple text-xl" />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Spotify Vibes</h3>
                  <p className="text-gray-400 text-sm">
                    I code better when music is loud in my head 🎧
                  </p>
                </div>
              </div>

              <span className="text-xs px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 font-semibold">
                now playing
              </span>
            </div>

            <div className="relative space-y-6">
              {spotifyEmbeds.map((song) => (
                <motion.div
                  key={song.title}
                  variants={item}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 250, damping: 16 }}
                  className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden"
                >
                  {/* header */}
                  <div className="flex items-center gap-3 p-4 border-b border-white/5">
                    <span className="w-10 h-10 rounded-xl bg-purple/15 border border-purple/20 flex items-center justify-center text-purple">
                      {song.icon}
                    </span>

                    <div className="flex-1">
                      <h4 className="font-bold text-base">{song.title}</h4>
                      <p className="text-xs text-gray-400">{song.subtitle}</p>
                    </div>

                    <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-200">
                      loop ♾️
                    </span>
                  </div>

                  {/* spotify iframe */}
                  <div className="p-4">
                    <div className="rounded-xl overflow-hidden border border-white/10">
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

            {/* lil footer tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mt-7 text-center"
            >
              <p className="text-gray-400 text-sm">
                Soundtrack of my life:{" "}
                <span className="text-white font-semibold">Arijit</span> +{" "}
                <span className="text-purple font-semibold">coding</span> +{" "}
                <span className="text-green-300 font-semibold">late nights</span> 🌙
              </p>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Hobbies;
