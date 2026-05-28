"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-black to-black" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl text-center"
      >
        <h1 className="text-6xl font-black leading-tight md:text-8xl">
          The Ultimate
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {" "}
            AI SaaS
          </span>
          Platform
        </h1>

        <p className="mt-8 text-xl text-zinc-400">
          AI chat, analytics, automation, content generation,
          PDF summarization, code review and workflow tools —
          all inside one futuristic platform.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start Free
          </button>

          <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">
            Live Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}