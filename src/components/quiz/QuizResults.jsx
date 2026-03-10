import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Trophy, RotateCcw, ArrowRight, Target, TrendingUp } from "lucide-react";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function QuizResults({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  let message, color, emoji;
  if (percentage >= 80) { message = "Excellent! You're a misinformation detective!"; color = "text-green-400"; emoji = "🎉"; }
  else if (percentage >= 60) { message = "Good effort! You have solid media literacy skills."; color = "text-blue-400"; emoji = "👍"; }
  else if (percentage >= 40) { message = "Not bad, but there's room to improve your fake news awareness."; color = "text-orange-400"; emoji = "🤔"; }
  else { message = "You might be vulnerable to misinformation. Check out our resources!"; color = "text-red-400"; emoji = "⚠️"; }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 rounded-2xl p-8 sm:p-12 border border-white/10 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
        <Trophy className="w-10 h-10 text-orange-500" />
      </div>
      <h2 className="font-heading font-bold text-3xl text-white mb-2">Quiz Complete! {emoji}</h2>
      <p className={`${color} font-semibold text-lg mb-8`}>{message}</p>

      <div className="w-40 h-40 mx-auto mb-8 relative">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="42" fill="none" stroke="#F97316" strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.64} ${264 - percentage * 2.64}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading font-bold text-3xl text-white">{percentage}%</span>
          <span className="text-gray-400 text-xs">{score}/{total} correct</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8 max-w-xs mx-auto">
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <Target className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <p className="font-heading font-bold text-xl text-green-400">{score}</p>
          <p className="text-green-400 text-xs">Correct</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <TrendingUp className="w-5 h-5 text-red-400 mx-auto mb-1" />
          <p className="font-heading font-bold text-xl text-red-400">{total - score}</p>
          <p className="text-red-400 text-xs">Incorrect</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
        <Link
          to={createPageUrl("HowToHelp")}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-medium transition-all shadow-lg shadow-orange-500/25 hover:scale-105"
        >
          Learn How to Help <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <SocialShareButtons title={`I scored ${percentage}% on the InfoShield Fake News Quiz! Can you beat me?`} />
    </motion.div>
  );
}
