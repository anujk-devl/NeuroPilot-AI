export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-12 w-64 animate-pulse rounded-xl bg-white/10" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-40 animate-pulse rounded-3xl bg-white/10"
          />
        ))}
      </div>
    </div>
  );
}