"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  ImageIcon,
  Code2,
  Settings,
  CreditCard,
  BarChart3,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "AI Chat",
    icon: MessageSquare,
    href: "/dashboard/chat",
  },
  {
    label: "PDF Summarizer",
    icon: FileText,
    href: "/dashboard/pdf",
  },
  {
    label: "AI Images",
    icon: ImageIcon,
    href: "/dashboard/images",
  },
  {
    label: "Code Review",
    icon: Code2,
    href: "/dashboard/code",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-[280px] border-r border-white/10 bg-black/40 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-black">
          NeuroPilot AI
        </h1>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <route.icon className="h-5 w-5" />
            <span>{route.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}