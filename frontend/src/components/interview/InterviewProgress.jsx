function InterviewProgress({ current = 1, total = 10 }) {
  const percentage = (current / total) * 100;

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-400">Progress</span>
        <span>
          {current}/{total}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default InterviewProgress;