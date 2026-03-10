import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, TrendingUp, AlertOctagon } from "lucide-react";

const stats = [
  { icon: Users, value: "4.7B", label: "Social media users globally", color: "text-blue-400" },
  { icon: AlertOctagon, value: "86%", label: "Can't reliably spot fake news", color: "text-orange-400" },
  { icon: Globe, value: "70+", label: "Countries hit by disinfo campaigns", color: "text-purple-400" },
  { icon: TrendingUp, value: "300%", label: "Increase in fake news since 2019", color: "text-red-400" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#0F172A] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0F172A] p-8 text-center hover:bg-white/5 transition-colors"
            >
              <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-3`} />
              <p className={`font-heading font-black text-3xl ${s.color}`}>{s.value}</p>
              <p className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
