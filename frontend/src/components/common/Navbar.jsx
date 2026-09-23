import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/dashboard" className="text-xl font-bold">
          <span className="text-indigo-400">Smart</span> Interview OS
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium">Krishna</p>
            <p className="text-xs text-slate-400">AI/ML Candidate</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold">
            K
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;