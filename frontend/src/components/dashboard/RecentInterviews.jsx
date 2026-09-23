const interviews = [
  {
    role: "Full Stack Developer",
    score: 86,
    date: "Today",
  },
  {
    role: "AI/ML Engineer",
    score: 78,
    date: "Yesterday",
  },
  {
    role: "React Developer",
    score: 82,
    date: "2 days ago",
  },
];

function RecentInterviews() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-5 text-lg font-semibold">Recent Interviews</h2>

      <div className="space-y-4">
        {interviews.map((interview) => (
          <div
            key={interview.role}
            className="flex items-center justify-between rounded-xl bg-slate-800/60 p-4"
          >
            <div>
              <p className="font-medium">{interview.role}</p>
              <p className="text-sm text-slate-400">{interview.date}</p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-400">{interview.score}%</p>
              <p className="text-xs text-slate-500">Score</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentInterviews;