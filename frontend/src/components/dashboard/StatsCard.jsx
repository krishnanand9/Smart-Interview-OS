function StatsCard({ title, value, description, icon }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>

        <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
          {icon}
        </div>
      </div>

      <h3 className="text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default StatsCard;