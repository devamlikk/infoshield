import React, { useState } from "react";
import { motion } from "framer-motion";

const getMisinfoData = (value) => {
  const abs = Math.abs(value);

  let label, color, percentage, description, examples;

  if (abs <= 10) {
    label = "Centre";
    color = "#8B5CF6";
    percentage = 18;
    description = "Centrist outlets tend to have the lowest misinformation rates, prioritising balance and verification, though they are not immune.";
    examples = ["ABC News", "Reuters", "AP News"];
  } else if (abs <= 30) {
    label = value < 0 ? "Centre-Left" : "Centre-Right";
    color = value < 0 ? "#3B82F6" : "#F97316";
    percentage = value < 0 ? 24 : 27;
    description = `${value < 0 ? "Centre-left" : "Centre-right"} media has moderate misinformation levels. Fact-checkers flag selective framing and misleading statistics more often than outright fabrications.`;
    examples = value < 0
      ? ["The Guardian", "The Age", "SBS News"]
      : ["The Australian", "Sky News", "Daily Telegraph"];
  } else if (abs <= 60) {
    label = value < 0 ? "Left" : "Right";
    color = value < 0 ? "#2563EB" : "#EA580C";
    percentage = value < 0 ? 38 : 42;
    description = `${value < 0 ? "Left-leaning" : "Right-leaning"} partisan sources show significantly higher rates of misinformation, often through context omission, misleading headlines, and unverified claims.`;
    examples = value < 0
      ? ["HuffPost", "Junkee", "New Matilda"]
      : ["The Spectator AU", "Caldron Pool", "Rebel News"];
  } else {
    label = value < 0 ? "Far Left" : "Far Right";
    color = value < 0 ? "#1D4ED8" : "#DC2626";
    percentage = value < 0 ? 58 : 65;
    description = `Far ${value < 0 ? "left" : "right"} sources have the highest rates of misinformation. Content is often designed to provoke outrage rather than inform, with little editorial oversight or fact-checking.`;
    examples = value < 0
      ? ["Socialist Alternative", "Green Left Weekly"]
      : ["Unshackled AU", "True Arrow", "XYZ Mag"];
  }

  return { label, color, percentage, description, examples };
};

export default function PoliticalBiasSlider() {
  const [value, setValue] = useState(0);
  const data = getMisinfoData(value);
  const thumbPosition = ((value + 100) / 200) * 100;

  const trackColor = () => {
    if (value < -60) return "from-blue-700 to-blue-500";
    if (value < -30) return "from-blue-500 to-purple-500";
    if (value < -10) return "from-purple-400 to-purple-500";
    if (value <= 10) return "from-purple-500 to-purple-500";
    if (value <= 30) return "from-orange-400 to-orange-500";
    if (value <= 60) return "from-orange-500 to-red-500";
    return "from-red-500 to-red-700";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 border border-white/10"
    >
      <div className="text-center mb-10">
        <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">Interactive Tool</span>
        <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mt-3 mb-3">
          Does political bias fuel<br />
          <span className="text-orange-400 italic">misinformation?</span>
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Drag the slider to explore how misinformation rates vary across the political spectrum, based on Ad Fontes Media and AllSides research.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-10">
        <div className="flex justify-between mb-3">
          <span className="text-blue-400 font-heading font-bold text-sm">◀ Far Left</span>
          <span className="text-purple-400 font-heading font-bold text-sm">Centre</span>
          <span className="text-red-400 font-heading font-bold text-sm">Far Right ▶</span>
        </div>

        <div className="relative h-3 rounded-full bg-white/10 mb-2">
          <div
            className={`absolute left-0 h-full rounded-full bg-gradient-to-r ${trackColor()} transition-all duration-300`}
            style={{ width: `${thumbPosition}%` }}
          />
          <input
            type="range"
            min={-100}
            max={100}
            step={1}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            style={{ zIndex: 10 }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-4 border-white shadow-xl transition-all duration-100 pointer-events-none"
            style={{ left: `${thumbPosition}%`, backgroundColor: data.color, boxShadow: `0 0 20px ${data.color}60` }}
          />
        </div>
        <div className="relative h-2">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/20 rounded" />
        </div>
      </div>

      <motion.div
        key={data.label}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: `${data.color}15`, borderColor: `${data.color}40` }}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Political Lean</p>
              <p className="font-heading font-black text-2xl text-white">{data.label}</p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-sm font-medium mb-1">Misinformation Rate</p>
              <span className="font-heading font-black text-5xl" style={{ color: data.color }}>{data.percentage}%</span>
            </div>
          </div>

          <div className="h-3 bg-white/10 rounded-full mb-6 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: data.color }}
              initial={{ width: 0 }}
              animate={{ width: `${data.percentage}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">{data.description}</p>

          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Example sources</p>
            <div className="flex flex-wrap gap-2">
              {data.examples.map((ex) => (
                <span
                  key={ex}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{ color: data.color, borderColor: `${data.color}50`, backgroundColor: `${data.color}10` }}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-white/30 text-xs mt-4">
          Data sourced from Ad Fontes Media Bias Chart & AllSides Media Bias Ratings
        </p>
      </motion.div>
    </motion.div>
  );
}
