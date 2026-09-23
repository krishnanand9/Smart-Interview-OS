const jobs = [
  {
    company: "TechNova",
    role: "Full Stack AI Developer",
    match: 94,
    skills: "React • Node.js • AI",
  },
  {
    company: "InnovateLabs",
    role: "MERN Developer",
    match: 89,
    skills: "React • MongoDB • Express",
  },
  {
    company: "AI Systems",
    role: "Junior AI Engineer",
    match: 84,
    skills: "Python • ML • APIs",
  },
];

function Jobs() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <p className="text-sm text-indigo-400">AI JOB MATCHING</p>

        <h1 className="mt-2 text-3xl font-bold">
          Recommended Jobs
        </h1>

        <p className="mt-2 text-slate-400">
          Jobs matched against your current skill graph.
        </p>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500/50"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl font-bold">{job.role}</h2>

                <p className="mt-1 text-indigo-400">
                  {job.company}
                </p>

                <p className="mt-3 text-sm text-slate-400">
                  {job.skills}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-3xl font-bold text-green-400">
                  {job.match}%
                </p>

                <p className="text-sm text-slate-500">
                  AI Match
                </p>

                <button className="mt-3 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500">
                  View Job
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;