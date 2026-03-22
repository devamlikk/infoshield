import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, CheckCircle } from "lucide-react";
import { supabase } from "@/supabaseClient";

const POLL_OPTIONS = [
  "Health misinformation (vaccines, remedies)",
  "Political misinformation (elections, politicians)",
  "Climate change denial",
  "Financial scams and fake investment advice",
  "AI-generated deepfakes and fake images",
];

const STORAGE_KEY = "infoshield_poll_voted";

export default function CommunityPoll() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [votes, setVotes] = useState({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyVoted = localStorage.getItem(STORAGE_KEY);
    if (alreadyVoted) {
      setSelected(alreadyVoted);
      setSubmitted(true);
    }
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    const { data } = await supabase
      .from("poll_responses")
      .select("response_option");

    if (data) {
      const counts = {};
      POLL_OPTIONS.forEach(opt => counts[opt] = 0);
      data.forEach(row => {
        if (counts[row.response_option] !== undefined) {
          counts[row.response_option]++;
        }
      });
      setVotes(counts);
      setTotalVotes(data.length);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    if (!selected) return;

    const { error } = await supabase
      .from("poll_responses")
      .insert([{ response_option: selected }]);

    if (!error) {
      localStorage.setItem(STORAGE_KEY, selected);
      setSubmitted(true);
      fetchVotes();
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-2">
        <BarChart2 className="w-5 h-5 text-orange-400" />
        <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">
          Community Poll
        </span>
      </div>
      <h3 className="font-heading font-bold text-xl text-white mb-2">
        What type of misinformation concerns you most?
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        {totalVotes} Australians have responded
      </p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="voting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            {POLL_OPTIONS.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelected(option)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm ${
                  selected === option
                    ? "border-orange-500 bg-orange-500/10 text-white"
                    : "border-white/10 hover:border-orange-400/50 text-gray-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selected === option ? "border-orange-500 bg-orange-500" : "border-gray-500"
                  }`}>
                    {selected === option && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  {option}
                </div>
              </button>
            ))}
            <button
              onClick={handleSubmit}
              disabled={!selected}
              className="w-full mt-4 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-bold transition-all hover:scale-105"
            >
              Submit Vote
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">
                {localStorage.getItem(STORAGE_KEY) && !loading ? "You already voted on this device" : "Thanks for voting!"}
              </span>
            </div>
            {loading ? (
              <p className="text-gray-400 text-sm">Loading results...</p>
            ) : (
              POLL_OPTIONS.map((option, i) => {
                const count = votes[option] || 0;
                const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
                const isMyVote = selected === option;
                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className={`${isMyVote ? "text-orange-400 font-semibold" : "text-gray-300"}`}>
                        {option} {isMyVote && "✓"}
                      </span>
                      <span className={`font-semibold ${isMyVote ? "text-orange-400" : "text-gray-400"}`}>
                        {pct}% ({count})
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                        className={`h-2.5 rounded-full ${isMyVote ? "bg-orange-500" : "bg-white/30"}`}
                      />
                    </div>
                  </div>
                );
              })
            )}
            <p className="text-gray-500 text-xs mt-4">Total votes: {totalVotes}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}