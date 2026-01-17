import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FaGithub, FaCircle, FaCodeBranch, FaUsers } from "react-icons/fa";

const GithubActivity = () => {
  const username = "Vishal34sd";

  const [total, setTotal] = useState(0);
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    following: 0,
  });

  
  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  
  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();

        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
        });
      } catch (err) {
        console.log("GitHub stats fetch error:", err);
      }
    };

    fetchGithubStats();
  }, [username]);

  
  const selectLastMonthsAndTotal = (contributions) => {
    const lastDate = new Date();
    const firstDate = new Date();
    firstDate.setMonth(lastDate.getMonth() - 10);

    const filtered = contributions.filter(
      (day) => new Date(day.date) >= firstDate
    );

    const sum = filtered.reduce((acc, day) => acc + (day.count || 0), 0);
    setTotal(sum);

    return filtered;
  };

  return (
    <section className="scroll-mt-28 py-16 sm:py-20 bg-dark-100 text-white light:bg-slate-50 light:text-slate-900 transition-colors duration-300" id="github">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold leading-tight">
            GitHub <span className="text-purple">Activity</span>
          </h2>
          <p className="mt-3 text-gray-400 light:text-slate-600 max-w-xl mx-auto transition-colors duration-300">
            Consistency and daily commits — showing my real development journey.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative overflow-hidden rounded-2xl border border-white/5
          bg-dark-300/60 backdrop-blur-xl shadow-xl p-6 md:p-8
          max-w-6xl mx-auto
          light:border-slate-200 light:bg-white/70 transition-colors duration-300"
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-purple/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-purple/10 blur-3xl"></div>
          </div>

          {/* Header - Center aligned */}
          <div className="relative flex flex-col items-center justify-center gap-5 mb-10 text-center">
            {/* Total Contributions */}
            <div className="flex items-center gap-3 justify-center">
              <FaGithub className="text-purple text-2xl drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
              <p className="text-gray-300 light:text-slate-700 font-semibold text-lg transition-colors duration-300">
                Total:{" "}
                <span className="text-white light:text-slate-900 font-bold transition-colors duration-300">
                  {total ? total.toLocaleString() : "Loading..."}
                </span>{" "}
                contributions
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-dark-400/40 light:border-slate-200 light:bg-slate-100/70 transition-colors duration-300">
              <FaCircle className="text-gray-400 text-xs" />
              <span className="text-gray-200 light:text-slate-700 text-sm font-medium transition-colors duration-300">
                Building & Shipping 
              </span>
            </div>

            {/* ✅ Attractive Stats */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {/* Repos */}
              <div className="px-5 py-3 rounded-xl border border-white/10 bg-dark-400/30 flex items-center gap-3 hover:border-purple/40 transition light:border-slate-200 light:bg-slate-100/70">
                <FaCodeBranch className="text-purple text-xl" />
                <div className="text-left">
                  <p className="text-white light:text-slate-900 font-bold text-lg transition-colors duration-300">
                    {stats.repos}
                  </p>
                  <p className="text-gray-400 light:text-slate-600 text-xs transition-colors duration-300">Public Repositories</p>
                </div>
              </div>

              {/* Followers */}
              <div className="px-5 py-3 rounded-xl border border-white/10 bg-dark-400/30 flex items-center gap-3 hover:border-purple/40 transition light:border-slate-200 light:bg-slate-100/70">
                <FaUsers className="text-purple text-xl" />
                <div className="text-left">
                  <p className="text-white light:text-slate-900 font-bold text-lg transition-colors duration-300">
                    {stats.followers}
                  </p>
                  <p className="text-gray-400 light:text-slate-600 text-xs transition-colors duration-300">Followers</p>
                </div>
              </div>

              {/* Following */}
              <div className="px-5 py-3 rounded-xl border border-white/10 bg-dark-400/30 flex items-center gap-3 hover:border-purple/40 transition light:border-slate-200 light:bg-slate-100/70">
                <FaUsers className="text-purple text-xl" />
                <div className="text-left">
                  <p className="text-white light:text-slate-900 font-bold text-lg transition-colors duration-300">
                    {stats.following}
                  </p>
                  <p className="text-gray-400 light:text-slate-600 text-xs transition-colors duration-300">Following</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="relative flex justify-center">
            <div className="w-full overflow-x-auto rounded-xl border border-white/5 bg-black/50 p-5 light:border-slate-200 light:bg-white transition-colors duration-300">
              <div className="flex justify-center min-w-[900px] md:min-w-full">
                <GitHubCalendar
                  username={username}
                  theme={theme}
                  transformData={selectLastMonthsAndTotal}
                  showWeekdayLabels={false}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  fontSize={13}
                  blockSize={14}
                  blockMargin={4}
                />
              </div>
            </div>
          </div>

          {/* Footer center */}
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-gray-400 light:text-slate-600 text-sm transition-colors duration-300">
               I build real-world projects & ship consistently.
            </p>

            <motion.a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-purple/20 border border-purple/30
              hover:bg-purple/30 transition font-semibold"
            >
              Visit My GitHub →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
