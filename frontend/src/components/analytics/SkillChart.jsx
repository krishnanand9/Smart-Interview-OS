import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "JavaScript", score: 85 },
  { skill: "React", score: 80 },
  { skill: "Node.js", score: 72 },
  { skill: "MongoDB", score: 76 },
  { skill: "AI/ML", score: 68 },
  { skill: "DSA", score: 64 },
];

function SkillChart() {
  return (
    <div className="h-96 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-3 text-lg font-semibold">Skill Graph</h2>

      <ResponsiveContainer width="100%" height="90%">
        <RadarChart data={data}>
          <PolarGrid stroke="#334155" />

          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />

          <PolarRadiusAxis />

          <Radar
            dataKey="score"
            stroke="#818cf8"
            fill="#6366f1"
            fillOpacity={0.35}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillChart;