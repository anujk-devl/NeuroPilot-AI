"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ClerkLoaded,
  ClerkLoading,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-2xl font-black text-white"
        >
          NeuroPilot AI
        </Link>

        <div className="flex items-center gap-4">
          
          <ClerkLoading>
            <div className="h-10 w-24 animate-pulse rounded-xl bg-white/10" />
          </ClerkLoading>

          <ClerkLoaded>
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="rounded-xl bg-white px-5 py-2 font-medium text-black transition hover:scale-105">
                  Login
                </button>
              </SignInButton>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </ClerkLoaded>

        </div>
      </div>
    </motion.nav>
  );
}