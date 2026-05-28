"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          NeuroPilot AI
        </Link>

        <div className="flex items-center gap-6">
          <button className="rounded-xl bg-white px-5 py-2 font-medium text-black transition hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}