import { useNavigate } from "react-router-dom";
import {
  Target,
  Brain,
  Trophy,
  Clock,
  ArrowRight,
} from "lucide-react";

import Button from "../components/common/Button";
import StatsCard from "../components/dashboard/StatsCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import RecentInterviews from "../components/dashboard/RecentInterviews";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="mb-2 text-sm text-indigo-400">WELCOME BACK</p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Your Interview Command Center
          </h1>

          <p className="mt-2 text-slate-400">
            Practice smarter with adaptive AI interviews.
          </p>
        </div>

        <Button onClick={() => navigate("/interview")}>
          Start AI Interview
          <ArrowRight className="ml-2 inline" size={18} />
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Interviews"
          value="12"
          description="+3 this week"
          icon={<Target size={20} />}
        />

        <StatsCard
          title="Average Score"
          value="82%"
          description="+8% improvement"
          icon={<Trophy size={20} />}
        />

        <StatsCard
          title="Skills Improved"
          value="17"
          description="Across 6 categories"
          icon={<Brain size={20} />}
        />

        <StatsCard
          title="Practice Time"
          value="6.4h"
          description="This month"
          icon={<Clock size={20} />}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ProgressChart />
        <RecentInterviews />
      </div>

      <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">
        <p className="text-sm font-medium text-indigo-400">AI RECOMMENDATION</p>

        <h2 className="mt-2 text-xl font-bold">
          Focus on System Design and JavaScript
        </h2>

        <p className="mt-2 max-w-2xl text-slate-400">
          Your recent answers show strong fundamentals, but your system design
          and JavaScript reasoning scores can improve.
        </p>

        <Button
          className="mt-5"
          onClick={() => navigate("/coach")}
        >
          Open AI Coach
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;