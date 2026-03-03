import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { gitaQuotes } from "../assets/assets";

const getDailyIndex = (length) => {
  const today = new Date();
  const seed = Math.floor(
    (today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()) / 1
  );
  return seed % length;
};

const GitaQuote = () => {
  const todayIndex = useMemo(() => getDailyIndex(gitaQuotes.length), []);
  const quote = useMemo(() => gitaQuotes[todayIndex], [todayIndex]);

  return (
    <section id="gita" className="py-12 bg-dark-100 text-white light:bg-light-bg light:text-navy transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium text-yellow-400 mb-3">
            "{quote.en}"
          </p>
          <p className="text-sm text-yellow-600 light:text-navy-muted">
            — Bhagavad Gita ({quote.verse})
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GitaQuote;

