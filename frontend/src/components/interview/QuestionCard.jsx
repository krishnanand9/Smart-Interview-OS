function QuestionCard({ question, category, difficulty }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
          {category}
        </span>

        <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
          {difficulty}
        </span>
      </div>

      <h2 className="text-xl font-semibold leading-relaxed">
        {question}
      </h2>
    </div>
  );
}

export default QuestionCard;