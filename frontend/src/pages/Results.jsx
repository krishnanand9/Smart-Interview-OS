import PerformanceCard from "../components/analytics/PerformanceCard";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <p className="text-sm text-indigo-400">INTERVIEW COMPLETE</p>

        <h1 className="mt-2 text-3xl font-bold">
          Your Interview Results
        </h1>

        <p className="mt-2 text-slate-400">
          Here's how the AI evaluator scored your performance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <PerformanceCard title="Technical Skills" score={86} />
        <PerformanceCard title="Communication" score={79} />
        <PerformanceCard title="Problem Solving" score={82} />
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">AI Feedback</h2>

        <div className="mt-5 space-y-4">
          <div>
            <p className="font-medium text-green-400">
              ✓ Strength
            </p>

            <p className="mt-1 text-slate-400">
              Your technical explanations were clear and structured.
            </p>
          </div>

          <div>
            <p className="font-medium text-yellow-400">
              ⚠ Improve
            </p>

            <p className="mt-1 text-slate-400">
              Work on explaining your reasoning before jumping to the
              solution.
            </p>
          </div>

          <div>
            <p className="font-medium text-indigo-400">
              AI Recommendation
            </p>

            <p className="mt-1 text-slate-400">
              Practice system design and DSA interviews next.
            </p>
          </div>
        </div>

        <Button
          className="mt-6"
          onClick={() => navigate("/coach")}
        >
          Get Detailed Coaching
        </Button>
      </div>
    </div>
  );
}

export default Results;