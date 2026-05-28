import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-purple-500/20 p-4">
          <Icon className="h-7 w-7 text-purple-400" />
        </div>
      </div>
    </div>
  );
}