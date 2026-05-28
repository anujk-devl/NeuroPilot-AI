import StatsCard from "@/components/stats-card";

import {
  Bot,
  CreditCard,
  Sparkles,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          Dashboard
        </h1>

        <p className="mt-3 text-zinc-400">
          Welcome back to NeuroPilot AI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="AI Requests"
          value="12,450"
          icon={Bot}
        />

        <StatsCard
          title="Revenue"
          value="$8,420"
          icon={CreditCard}
        />

        <StatsCard
          title="Active Users"
          value="1,245"
          icon={Users}
        />

        <StatsCard
          title="AI Generated"
          value="98K"
          icon={Sparkles}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold">
            AI Activity
          </h2>

          <div className="mt-6 flex h-[350px] items-center justify-center rounded-2xl border border-dashed border-white/10">
            <p className="text-zinc-500">
              Charts Coming Soon
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <p className="font-medium">
                  AI generated new content
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  2 minutes ago
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}