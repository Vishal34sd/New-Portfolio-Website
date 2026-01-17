import React from "react";
import { motion } from "framer-motion";

const socials = [
  { icon: "github", href: "https://github.com/Vishal34sd" },
  { icon: "linkedin", href: "https://www.linkedin.com/in/vishal-dubey-478541320/" },
  { icon: "twitter", href: "https://twitter.com/" },
  { icon: "discord", href: "https://discord.com/" },
  { icon: "gmail", href: "mailto:dubeyvishal714@gmail.com" },
  
];

const ConnectNavbar = () => {
  return (
    <div
      className="inline-block rounded-4xl bg-black/20 border border-white/10
      px-3 mb-10 backdrop-blur-xl shadow-lg shadow-black/30
      light:bg-white/60 light:border-slate-200 light:shadow-slate-200/30 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex flex-wrap items-center gap-2"
      >
        {socials.map((s) => (
          <motion.a
            key={s.icon}
            href={s.href}
            target={s.href.startsWith("mailto") ? "_self" : "_blank"}
            rel={s.href.startsWith("mailto") ? undefined : "noreferrer"}
            whileHover={{ y: -3, scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl p-2
            hover: transition duration-100"
          >
            <img
              src={`https://skillicons.dev/icons?i=${s.icon}`}
              alt={s.icon}
              className="w-8 h-8 rounded-xl"
              loading="lazy"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ConnectNavbar;
