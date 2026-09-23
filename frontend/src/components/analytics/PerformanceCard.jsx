function PerformanceCard({ title, score }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{title}</p>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-3xl font-bold">{score}%</span>
        <span className="mb-1 text-sm text-green-400">Good</span>
      </div>

      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default PerformanceCard;