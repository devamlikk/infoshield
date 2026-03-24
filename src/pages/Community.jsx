import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, BarChart2, Brain, MessageSquare } from "lucide-react";
import CommunityPoll from "@/components/shared/CommunityPoll";
import { supabase } from "@/supabaseClient";

export default function Community() {
  const [stats, setStats] = useState({ quiz: 0, poll: 0, contact: 0 });
  const [quizStats, setQuizStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [quiz, poll, contact] = await Promise.all([
        supabase.from("quiz_results").select("percentage"),
        supabase.from("poll_responses").select("id"),
        supabase.from("contact_submissions").select("id"),
      ]);

      const quizData = quiz.data || [];
      const avg = quizData.length > 0
        ? Math.round(quizData.reduce((sum, r) => sum + r.percentage, 0) / quizData.length)
        : 0;

      const buckets = [
        { label: "0-20%", min: 0, max: 20, count: 0 },
        { label: "21-40%", min: 21, max: 40, count: 0 },
        { label: "41-60%", min: 41, max: 60, count: 0 },
        { label: "61-80%", min: 61, max: 80, count: 0 },
        { label: "81-100%", min: 81, max: 100, count: 0 },
      ];

      quizData.forEach(row => {
        const bucket = buckets.find(b => row.percentage >= b.min && row.percentage <= b.max);
        if (bucket) bucket.count++;
      });

      setStats({
        quiz: quizData.length,
        poll: (poll.data || []).length,
        contact: (contact.data || []).length,
      });

      setQuizStats({ buckets, avg, total: quizData.length });
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
    setLoading(false);
  };

  const total = stats.quiz + stats.poll + stats.contact;

  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 flex items-center min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80")` }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">Community Hub</p>
            <h1 className="font-heading font-black text-white leading-[1.0]">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">What the Community</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-orange-400 italic">thinks.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Real responses from real people. See how your community thinks about misinformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24">

        {/* Total responses counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { icon: Brain, label: "Quiz Responses", value: stats.quiz, color: "text-orange-400" },
              { icon: BarChart2, label: "Poll Votes", value: stats.poll, color: "text-blue-400" },
              { icon: MessageSquare, label: "Messages Sent", value: stats.contact, color: "text-green-400" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F172A] hover:bg-white/5 transition-colors p-4 sm:p-8 text-center">
                <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-3`} />
                <p className={`font-heading font-black text-3xl sm:text-4xl ${item.color} mb-2`}>
                  {loading ? "..." : item.value}
                </p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Total community responses: <span className="text-orange-400 font-bold text-lg">{loading ? "..." : total}</span>
            </p>
          </div>
        </motion.div>

        {/* Poll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <BarChart2 className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">
              Community Poll
            </span>
          </div>
          <CommunityPoll />
        </motion.div>

        {/* Quiz stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">
              Quiz Results
            </span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl text-white mb-2">How Australians scored</h3>
            {loading ? (
              <p className="text-gray-400 text-sm">Loading...</p>
            ) : quizStats && quizStats.total > 0 ? (
              <>
                <p className="text-gray-400 text-sm mb-6">
                  Based on <span className="text-white font-semibold">{quizStats.total}</span> responses, the community average is <span className="text-orange-400 font-semibold">{quizStats.avg}%</span>
                </p>
                <div className="space-y-4">
                  {quizStats.buckets.map((bucket, i) => {
                    const pct = quizStats.total > 0
                      ? Math.round((bucket.count / quizStats.total) * 100)
                      : 0;
                    return (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{bucket.label}</span>
                          <span className="text-gray-400 font-semibold">{pct}% ({bucket.count})</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                            className="h-2.5 rounded-full bg-orange-500"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <p className="text-gray-400 text-sm">No quiz data yet. Be the first to take the quiz!</p>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-8 sm:p-12 text-center"
        >
          <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h3 className="font-heading font-black text-3xl text-white mb-4">Haven't contributed yet?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Take the quiz to test your media literacy, vote in the poll, or send us a message. Every response helps build a clearer picture of misinformation in Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Quiz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              <Brain className="w-4 h-4" /> Take the Quiz
            </a>
            <a
              href="/Contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold border border-white/20 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" /> Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}