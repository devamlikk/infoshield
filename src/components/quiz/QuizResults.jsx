import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Trophy, RotateCcw, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import SocialShareButtons from "@/components/shared/SocialShareButtons";
import { supabase } from "@/supabaseClient";

const STORAGE_KEY = "infoshield_quiz_taken";

export default function QuizResults({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const [communityStats, setCommunityStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const alreadyTaken = localStorage.getItem(STORAGE_KEY);

  let message, color, emoji;
  if (percentage >= 80) { message = "Excellent! You're a misinformation detective!"; color = "text-green-400"; emoji = "🎉"; }
  else if (percentage >= 60) { message = "Good effort! You have solid media literacy skills."; color = "text-blue-400"; emoji = "👍"; }
  else if (percentage >= 40) { message = "Not bad, but there's room to improve your fake news awareness."; color = "text-orange-400"; emoji = "🤔"; }
  else { message = "You might be vulnerable to misinformation. Check out our resources!"; color = "text-red-400"; emoji = "⚠️"; }

  useEffect(() => {
    const saveAndFetch = async () => {
      if (!alreadyTaken) {
        await supabase
          .from("quiz_results")
          .insert([{ score, total, percentage }]);
        localStorage.setItem(STORAGE_KEY, "true");
      }
      fetchCommunityStats();
    };
    saveAndFetch();
  }, []);

  const fetchCommunityStats = async () => {
    const { data } = await supabase
      .from("quiz_results")
      .select("percentage");

    if (data && data.length > 0) {
      const buckets = [
        { label: "0-20%", min: 0, max: 20, count: 0 },
        { label: "21-40%", min: 21, max: 40, count: 0 },
        { label: "41-60%", min: 41, max: 60, count: 0 },
        { label: "61-80%", min: 61, max: 80, count: 0 },
        { label: "81-100%", min: 81, max: 100, count: 0 },
      ];

      data.forEach(row => {
        const bucket = buckets.find(b => row.percentage >= b.min && row.percentage <= b.max);
        if (bucket) bucket.count++;
      });

      const total = data.length;
      const avg = Math.round(data.reduce((sum, r) => sum + r.percentage, 0) / total);

      setCommunityStats({ buckets, total, avg });
    }
    setLoadingStats(false);
  };

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

      {alreadyTaken && (
        <p className="text-gray-500 text-xs mb-4">You have already submitted a result from this device</p>
      )}

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

      {/* Community Stats */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">
            How others scored
          </span>
        </div>
        {loadingStats ? (
          <p className="text-gray-400 text-sm">Loading community stats...</p>
        ) : communityStats ? (
          <>
            <p className="text-gray-400 text-sm mb-4">
              Based on <span className="text-white font-semibold">{communityStats.total}</span> responses — community average is <span className="text-orange-400 font-semibold">{communityStats.avg}%</span>
            </p>
            <div className="space-y-3">
              {communityStats.buckets.map((bucket, i) => {
                const pct = communityStats.total > 0
                  ? Math.round((bucket.count / communityStats.total) * 100)
                  : 0;
                const isMyBucket = percentage >= bucket.min && percentage <= bucket.max;
                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className={`${isMyBucket ? "text-orange-400 font-semibold" : "text-gray-300"}`}>
                        {bucket.label} {isMyBucket && "← you"}
                      </span>
                      <span className={`font-semibold ${isMyBucket ? "text-orange-400" : "text-gray-400"}`}>
                        {pct}% ({bucket.count})
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                        className={`h-2.5 rounded-full ${isMyBucket ? "bg-orange-500" : "bg-white/30"}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-sm">No community data yet. Be the first!</p>
        )}
      </div>

      <div className="flex justify-center mb-8">
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