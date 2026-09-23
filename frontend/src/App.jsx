import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Results from "./pages/Results";
import SkillMap from "./pages/SkillMap";
import Coach from "./pages/Coach";
import Jobs from "./pages/Jobs";

import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";

import { AuthProvider } from "./context/AuthContext";
import { InterviewProvider } from "./context/InterviewContext";

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-slate-950 text-white">
                <Navbar />

                <div className="flex">
                  <Sidebar />

                  <main className="min-h-[calc(100vh-64px)] flex-1 p-4 md:p-8">
                    <Routes>
                      <Route
                        path="/"
                        element={<Navigate to="/dashboard" />}
                      />
                      <Route
                        path="/dashboard"
                        element={<Dashboard />}
                      />
                      <Route
                        path="/interview"
                        element={<Interview />}
                      />
                      <Route
                        path="/results"
                        element={<Results />}
                      />
                      <Route
                        path="/skill-map"
                        element={<SkillMap />}
                      />
                      <Route
                        path="/coach"
                        element={<Coach />}
                      />
                      <Route
                        path="/jobs"
                        element={<Jobs />}
                      />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />
        </Routes>
      </InterviewProvider>
    </AuthProvider>
  );
}

export default App;