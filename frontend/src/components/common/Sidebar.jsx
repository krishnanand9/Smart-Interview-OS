import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Brain,
  Briefcase,
  LogOut,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Start Interview",
    path: "/interview",
    icon: MessageSquare,
  },
  {
    name: "Results",
    path: "/results",
    icon: BarChart3,
  },
  {
    name: "Skill Map",
    path: "/skill-map",
    icon: Brain,
  },
  {
    name: "AI Coach",
    path: "/coach",
    icon: MessageSquare,
  },
  {
    name: "Job Matches",
    path: "/jobs",
    icon: Briefcase,
  },
];

function Sidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-64 border-r border-slate-800 bg-slate-900 p-4 md:block">
      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              {link.name}
            </NavLink>
          );
        })}

        <button className="mt-8 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400">
          <LogOut size={19} />
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;