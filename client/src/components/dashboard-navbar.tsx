"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
          <Search className="h-4 w-4 text-zinc-400" />

          <input
            type="text"
            placeholder="Search AI tools..."
            className="bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
            A
          </div>
        </div>
      </div>
    </header>
  );
}