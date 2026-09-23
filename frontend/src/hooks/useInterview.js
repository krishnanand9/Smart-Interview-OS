import { useInterviewContext } from "../context/InterviewContext";

function useInterview() {
  return useInterviewContext();
}

export default useInterview;