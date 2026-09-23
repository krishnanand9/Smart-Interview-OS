import { createContext, useContext, useState } from "react";

const InterviewContext = createContext();

export function InterviewProvider({ children }) {
  const [interview, setInterview] = useState(null);

  return (
    <InterviewContext.Provider
      value={{
        interview,
        setInterview,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterviewContext() {
  return useContext(InterviewContext);
}