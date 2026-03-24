import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=80")` }}
      />
      <div className="absolute inset-0 bg-[#0F172A]/70" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0F172A] to-transparent" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-400 font-heading font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-6"
          >
            Media Literacy for Every Australian
          </motion.p>

          <h1 className="font-heading font-black text-white leading-[1.0] mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">Don't believe</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-orange-400 italic">everything</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl">you read.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-10 leading-relaxed"
          >
            Fake news spreads <strong className="text-white">6× faster</strong> than real news. Learn to spot misinformation, explore the data, and protect your community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to={createPageUrl("Quiz")}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold text-base transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105"
            >
              Take the Quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("TheIssue")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-base border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Explore the Data
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { stat: "76%", label: "of Australians exposed to fake news" },
            { stat: "6×", label: "faster spread than real news" },
            { stat: "65%", label: "can't spot misinformation" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="font-heading font-black text-orange-400 text-xl">{item.stat}</span>
              <span className="text-gray-300 text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
