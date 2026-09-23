function InterviewTimer({ time = "02:00" }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-indigo-400">
      ⏱ {time}
    </div>
  );
}

export default InterviewTimer;