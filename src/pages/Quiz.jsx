import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import quizQuestions from "@/components/quiz/QuizData";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResults from "@/components/quiz/QuizResults";

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    const isCorrect = answerIndex === quizQuestions[currentQ].correct;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { question_index: currentQ, selected: quizQuestions[currentQ].options[answerIndex], correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(false); setCurrentQ(0); setSelectedAnswer(null);
    setShowResult(false); setScore(0); setAnswers([]); setFinished(false);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 flex items-center min-h-[50vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1800&q=80")` }} />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">Interactive Quiz</p>
            <h1 className="font-heading font-black text-white leading-[1.0]">
              <span className="block text-5xl sm:text-6xl">Can you spot</span>
              <span className="block text-5xl sm:text-6xl text-orange-400 italic">fake news?</span>
            </h1>
            <p className="text-gray-300 text-lg mt-5">10 questions. Real scenarios. How media-literate are you?</p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Area */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white mb-3">Ready to test your knowledge?</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">10 questions about misinformation, fake news, and media literacy.</p>
              <button
                onClick={() => setStarted(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold transition-all shadow-xl shadow-orange-500/25 hover:scale-105"
              >
                Start Quiz <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : finished ? (
            <QuizResults key="results" score={score} total={quizQuestions.length} onRestart={handleRestart} />
          ) : (
            <div key="question">
              <QuizQuestion
                question={quizQuestions[currentQ]}
                questionIndex={currentQ}
                totalQuestions={quizQuestions.length}
                selectedAnswer={selectedAnswer}
                onAnswer={handleAnswer}
                showResult={showResult}
              />
              {showResult && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end mt-4">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-medium transition-all shadow-lg shadow-orange-500/25 hover:scale-105"
                  >
                    {currentQ < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
