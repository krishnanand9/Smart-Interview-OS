function AnswerBox({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your answer here..."
      rows={8}
      className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-900 p-5 text-slate-100 outline-none focus:border-indigo-500"
    />
  );
}

export default AnswerBox;