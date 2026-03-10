import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function QuizQuestion({ question, questionIndex, totalQuestions, selectedAnswer, onAnswer, showResult }) {
  return (
    <motion.div
      key={questionIndex}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-400">Question {questionIndex + 1} of {totalQuestions}</span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i <= questionIndex ? "bg-orange-500" : "bg-white/20"}`} />
          ))}
        </div>
      </div>

      <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-6 leading-snug">{question.question}</h3>

      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedAnswer === i;
          const isCorrect = i === question.correct;
          let borderClass = "border-white/10 hover:border-orange-400/50 hover:bg-orange-500/5";
          let bgClass = "";
          if (showResult && isSelected && isCorrect) { borderClass = "border-green-400"; bgClass = "bg-green-500/10"; }
          else if (showResult && isSelected && !isCorrect) { borderClass = "border-red-400"; bgClass = "bg-red-500/10"; }
          else if (showResult && isCorrect) { borderClass = "border-green-300"; bgClass = "bg-green-500/5"; }

          return (
            <button
              key={i}
              onClick={() => !showResult && onAnswer(i)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${borderClass} ${bgClass} ${isSelected && !showResult ? "border-orange-500 bg-orange-500/10" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                  isSelected && !showResult ? "bg-orange-500 text-white"
                  : showResult && isCorrect ? "bg-green-500 text-white"
                  : showResult && isSelected ? "bg-red-500 text-white"
                  : "bg-white/10 text-gray-400"
                }`}>
                  {showResult && isCorrect ? <CheckCircle className="w-4 h-4" />
                  : showResult && isSelected ? <XCircle className="w-4 h-4" />
                  : String.fromCharCode(65 + i)}
                </div>
                <span className="text-sm sm:text-base text-gray-200">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20"
        >
          <p className="text-sm text-blue-300 leading-relaxed">
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
