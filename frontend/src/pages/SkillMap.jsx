import SkillChart from "../components/analytics/SkillChart";

const skills = [
  ["JavaScript", 85],
  ["React", 80],
  ["Node.js", 72],
  ["MongoDB", 76],
  ["AI/ML", 68],
  ["DSA", 64],
];

function SkillMap() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <p className="text-sm text-indigo-400">YOUR SKILL GRAPH</p>

        <h1 className="mt-2 text-3xl font-bold">
          Candidate Skill Map
        </h1>

        <p className="mt-2 text-slate-400">
          Your skills automatically improve as you complete interviews.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SkillChart />

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">Skill Levels</h2>

          <div className="mt-6 space-y-5">
            {skills.map(([skill, score]) => (
              <div key={skill}>
                <div className="mb-2 flex justify-between">
                  <span>{skill}</span>
                  <span className="text-slate-400">{score}%</span>
                </div>

                <div className="h-2 rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-indigo-500"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillMap;