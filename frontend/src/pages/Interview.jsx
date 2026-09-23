import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import QuestionCard from "../components/interview/QuestionCard";
import AnswerBox from "../components/interview/AnswerBox";
import InterviewTimer from "../components/interview/InterviewTimer";
import InterviewProgress from "../components/interview/InterviewProgress";

const questions = [
  {
    question:
      "Explain the difference between let, const and var in JavaScript.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    question:
      "How would you design a scalable authentication system for a MERN application?",
    category: "System Design",
    difficulty: "Hard",
  },
  {
    question:
      "What is the difference between supervised and unsupervised learning?",
    category: "AI/ML",
    difficulty: "Easy",
  },
];

function Interview() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");

  const question = questions[current];

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setAnswer("");
    } else {
      navigate("/results");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-indigo-400">LIVE AI INTERVIEW</p>
          <h1 className="mt-1 text-2xl font-bold">
            Full Stack + AI Interview
          </h1>
        </div>

        <InterviewTimer />
      </div>

      <InterviewProgress
        current={current + 1}
        total={questions.length}
      />

      <div className="mt-8 space-y-5">
        <QuestionCard
          question={question.question}
          category={question.category}
          difficulty={question.difficulty}
        />

        <AnswerBox value={answer} onChange={setAnswer} />

        <div className="flex justify-end">
          <Button onClick={nextQuestion}>
            {current === questions.length - 1
              ? "Finish Interview"
              : "Submit Answer →"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Interview;