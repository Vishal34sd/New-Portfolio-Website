import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

const timelineItems = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Ghaziabad, India",
    href: null,
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "dubeyvishal714@gmail.com",
    href: "mailto:dubeyvishal714@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 9044160248",
    href: "tel:+919044160248",
  },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Vishal34sd", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/vishal-dubey-478541320/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/@VishalDube39123", label: "Twitter" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end bottom"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      id="contact"
      className="scroll-mt-28 py-16 sm:py-24 bg-dark-100 section-bg light:text-navy transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-3"
        >
          Get In <span className="text-purple">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-400 light:text-navy-muted text-center max-w-xl mx-auto mb-14 transition-colors duration-300"
        >
          Have a project in mind or want to collaborate? Let's talk.
        </motion.p>

        {/* Timeline */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-lg mx-auto"
        >
          {/* Vertical line Background */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-purple/25 light:bg-purple/20" />

          {/* Vertical line Animated Foreground (Orange) */}
          <motion.div
            className="absolute left-6 top-0 w-px bg-orange-500 z-0 origin-top shadow-[0_0_10px_rgba(249,115,22,0.8)]"
            style={{ height: lineHeight }}
          />

          {timelineItems.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="relative flex items-start gap-6 pb-10 last:pb-0"
            >
              {/* Icon dot */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-dark-300 light:bg-light-card border-2 border-purple/50 flex items-center justify-center text-purple shadow-[0_0_12px_rgba(139,92,246,0.2)] bg-clip-padding transition-colors duration-300"
              >
                <item.icon className="text-lg" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-1 border-b border-white/5 light:border-light-border">
                <p className="text-xs uppercase tracking-widest text-purple/70 mb-1 font-medium">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-base font-semibold text-white light:text-navy hover:text-purple light:hover:text-purple transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-white light:text-navy">
                    {item.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Socials timeline item */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-start gap-6 pt-10"
          >
            {/* Icon dot */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-dark-300 light:bg-light-card border-2 border-purple/50 flex items-center justify-center text-purple shadow-[0_0_12px_rgba(139,92,246,0.2)]"
            >
              <FaGithub className="text-lg" />
            </motion.div>

            {/* Social links */}
            <div className="flex-1 pt-2">
              <p className="text-xs uppercase tracking-widest text-purple/70 mb-3 font-medium">
                Connect
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 light:bg-light-surface border border-white/10 light:border-light-border text-gray-400 light:text-navy-muted hover:text-purple hover:border-purple/50 transition-all duration-200 text-lg"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
