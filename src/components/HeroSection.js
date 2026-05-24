import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {

  return (

    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">

      {/* GLOW */}

      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* CONTENT */}

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >

          AI Powered
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Digital Solutions
          </span>

        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="text-gray-300 text-xl md:text-2xl mt-10 leading-10 max-w-4xl mx-auto"
        >

          Modern AI platforms, analytics dashboards,
          automation systems, and intelligent digital
          experiences for future-ready businesses.

        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >

          <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-lg hover:scale-105 transition-all">

            Get Started

          </button>

          <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 font-bold text-lg hover:bg-white/10 transition-all">

            Book Demo

          </button>

        </motion.div>

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">

          <StatCard
            number="50+"
            title="Projects"
          />

          <StatCard
            number="20+"
            title="Clients"
          />

          <StatCard
            number="99%"
            title="Success"
          />

          <StatCard
            number="24/7"
            title="Support"
          />

        </div>

      </div>

    </section>

  );

}

function StatCard({
  number,
  title,
}) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

      <h1 className="text-5xl font-black text-cyan-400">
        {number}
      </h1>

      <p className="text-gray-400 mt-3">
        {title}
      </p>

    </div>

  );

}