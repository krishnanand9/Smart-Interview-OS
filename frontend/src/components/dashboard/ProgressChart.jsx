import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", score: 58 },
  { name: "Tue", score: 64 },
  { name: "Wed", score: 61 },
  { name: "Thu", score: 72 },
  { name: "Fri", score: 76 },
  { name: "Sat", score: 81 },
  { name: "Sun", score: 86 },
];

function ProgressChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-5 text-lg font-semibold">Interview Performance</h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="name" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#818cf8"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProgressChart;