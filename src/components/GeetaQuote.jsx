import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaOm, FaRegCalendarAlt, FaQuoteLeft, FaLanguage } from "react-icons/fa";

// ✅ Add more quotes later easily
const gitaQuotes = [
  {
    id: 1,
    verse: "BG 2.47",
    en: "You have the right to perform your duty, but not to the fruits of your actions.",
    hi: "तुम्हारा अधिकार केवल कर्म करने में है, फल में कभी नहीं।",
    vibe: "Karma • Discipline • Focus",
  },
  {
    id: 2,
    verse: "BG 2.14",
    en: "Happiness and distress are temporary. Learn to tolerate them.",
    hi: "सुख और दुःख क्षणिक हैं — उन्हें सहन करना सीखो।",
    vibe: "Balance • Strength • Patience",
  },
  {
    id: 3,
    verse: "BG 6.5",
    en: "Elevate yourself through your own mind, not degrade yourself.",
    hi: "अपने मन द्वारा स्वयं को उठाओ, गिराओ मत।",
    vibe: "Self-growth • Mindset • Control",
  },
  {
    id: 4,
    verse: "BG 4.7",
    en: "Whenever there is decline of dharma, I manifest myself.",
    hi: "जब-जब धर्म की हानि होती है, तब-तब मैं प्रकट होता हूँ।",
    vibe: "Dharma • Hope • Light",
  },
  {
    id: 5,
    verse: "BG 2.20",
    en: "The soul is neither born nor does it die.",
    hi: "आत्मा न जन्म लेती है, न मरती है।",
    vibe: "Soul • Truth • Eternity",
  },
  {
    id: 6,
    verse: "BG 18.66",
    en: "Surrender unto Me, I shall free you from all fears.",
    hi: "मेरी शरण में आओ, मैं तुम्हें भय से मुक्त करूँगा।",
    vibe: "Surrender • Peace • Faith",
  },
];

const getDailyIndex = (length) => {
  
  const today = new Date();
  const seed = Math.floor(
    (today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()) / 1
  );
  return seed % length;
};

const GitaQuote = () => {
  const [lang, setLang] = useState("en"); // "en" or "hi"
  const [manualOffset, setManualOffset] = useState(0);

  const todayIndex = useMemo(() => getDailyIndex(gitaQuotes.length), []);

  const quote = useMemo(() => {
    const index = (todayIndex + manualOffset) % gitaQuotes.length;
    return gitaQuotes[index];
  }, [todayIndex, manualOffset]);

  const todayString = useMemo(() => {
    const d = new Date();
    return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }, []);

  const copyQuote = async () => {
    const text =
      lang === "en"
        ? `"${quote.en}" — Bhagavad Gita (${quote.verse})`
        : `"${quote.hi}" — श्रीमद्भगवद्गीता (${quote.verse})`;

    try {
      await navigator.clipboard.writeText(text);
      alert("Quote copied ");
    } catch {
      alert("Copy failed ");
    }
  };

  return (
    <section
      id="gita"
      className="relative py-24 bg-dark-200 text-white overflow-hidden "
    >
      {/* Background Spiritual Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full  blur-3xl opacity-40" />
        <div className="absolute -bottom-48 -right-40 w-[620px] h-[620px] rounded-full  blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            A <span className="text-purple">Gita Quote</span> for Your Day
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Ending with peace ✨ A daily reminder from the Bhagavad Gita.
          </p>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, type: "spring" }}
          className="relative max-w-4xl mx-auto rounded-2xl border border-yellow-500
          bg-dark-300/60 backdrop-blur-xl shadow-xl p-6 md:p-10 overflow-hidden"
        >
          {/* Card glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full  blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl" />
          </div>

          {/* Top row */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-xl border border-white/10 bg-dark-400/40">
                <FaOm className="text-purple text-2xl" />
              </span>
              <div>
                <p className="text-white font-bold text-lg">Today’s Wisdom</p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <FaRegCalendarAlt className="text-xs" />
                  {todayString}
                </p>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-4xl p-1">
              <span className="px-3 text-gray-300 text-sm flex items-center gap-2">
                <FaLanguage /> Language
              </span>

              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-4xl text-sm font-semibold transition ${
                  lang === "en"
                    ? "bg-purple/25 border border-purple/30 text-white"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1 rounded-4xl text-sm font-semibold transition ${
                  lang === "hi"
                    ? "bg-purple/25 border border-purple/30 text-white"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            key={`${quote.id}-${lang}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <FaQuoteLeft className="text-purple/60 text-2xl mb-1" />

            <p className="text-xl md:text-2xl leading-relaxed font-semibold text-yellow-500">
              {lang === "en" ? quote.en : quote.hi}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-gray-400">
                — Bhagavad Gita <span className="text-white/80 font-semibold">({quote.verse})</span>
              </span>

              <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-gray-500 text-white">
                {quote.vibe}
              </span>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setManualOffset((p) => p + 1)}
              className="px-6 py-2 rounded-xl font-semibold text-white
             bg-gradient-to-r from-purple-500 to-pink-500
              shadow-lg shadow-purple/25 hover:opacity-95 transition"
            >
              New Quote
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={copyQuote}
              className="px-6 py-2 rounded-xl font-semibold text-white/90
              bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              Copy Quote 
            </motion.button>
          </div>

          {/* Footer spiritual line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 text-center text-gray-400 text-sm"
          >
            May your mind be calm, your actions be fearless, and your journey be divine 
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GitaQuote;
