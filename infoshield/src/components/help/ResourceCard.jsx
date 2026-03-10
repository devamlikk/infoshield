import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ResourceCard({ title, description, url, icon: Icon, color, index, dark }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group block rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
        dark
          ? "bg-white/5 border-white/10 hover:border-orange-500/30"
          : "bg-white/5 border-white/10 hover:border-orange-500/30"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
      </div>
      <h4 className="font-heading font-bold mb-2 text-white">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </motion.a>
  );
}
