import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Brain, ShieldAlert, HeartHandshake, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Understand the Problem",
    desc: "Real data from ACMA and the Reuters Institute showing how misinformation spreads across Australia and the world.",
    page: "TheIssue",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: ShieldAlert,
    title: "Test Your Awareness",
    desc: "Take our interactive quiz to find out how well you can spot fake news and misinformation tactics.",
    page: "Quiz",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: HeartHandshake,
    title: "Take Action",
    desc: "Fact-checking tools, resources, and practical steps to help your community fight back against fake news.",
    page: "HowToHelp",
    color: "from-green-500 to-emerald-600"
  }
];

export default function WhyItMatters() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-widest">Why It Matters</span>
        <h2 className="text-slate-100 mt-3 text-4xl font-black sm:text-5xl">Misinformation affects everyone.</h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          From health scares to election interference, fake news erodes trust and divides communities.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Link
              to={createPageUrl(c.page)}
              className="block group h-full bg-[#0F172A] rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-orange-500/30"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-6 shadow-lg`}>
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{c.desc}</p>
              <div className="inline-flex items-center gap-1 text-orange-400 font-medium text-sm group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
