import React, { useState } from "react";
import { motion } from "framer-motion";

const POSITIONS = [
  {
    label: "Far Left",
    risk: "Higher Risk",
    riskLevel: 4,
    color: "bg-red-500",
    textColor: "text-red-400",
    description: "Strong partisans at the far left are more likely to share misinformation that aligns with their worldview, particularly within echo chambers on social media.",
  },
  {
    label: "Centre Left",
    risk: "Moderate Risk",
    riskLevel: 2,
    color: "bg-yellow-500",
    textColor: "text-yellow-400",
    description: "Centre-left audiences show moderate susceptibility. Exposure to partisan media and selective sharing still occurs, but at lower rates than strong partisans.",
  },
  {
    label: "Centre",
    risk: "Lower Risk",
    riskLevel: 1,
    color: "bg-green-500",
    textColor: "text-green-400",
    description: "Those with moderate political views tend to consume more diverse media sources, reducing exposure to echo chambers and lowering the likelihood of sharing misinformation.",
  },
  {
    label: "Centre Right",
    risk: "Moderate Risk",
    riskLevel: 2,
    color: "bg-yellow-500",
    textColor: "text-yellow-400",
    description: "Centre-right audiences show moderate susceptibility. Partisan media consumption increases misinformation sharing compared to centrists, but remains lower than strong partisans.",
  },
  {
    label: "Far Right",
    risk: "Higher Risk",
    riskLevel: 5,
    color: "bg-red-600",
    textColor: "text-red-400",
    description: "Multiple studies, primarily of US social media, find the strongest concentration of misinformation sharing among far-right partisans, driven by partisan media ecosystems and distrust of mainstream sources.",
  },
];

const RISK_BARS = [4, 2, 1, 2, 5];

export default function PoliticalBiasSlider() {
  const [active, setActive] = useState(2);
  const pos = POSITIONS[active];

  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-8">
      <h3 className="text-white font-heading font-bold text-xl mb-2">
        Political Lean & Misinformation Risk
      </h3>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        Based on studies of US and global social media behaviour. Risk reflects likelihood of sharing misinformation, not intelligence or morality. Strong partisans on <em>both ends</em> are more susceptible than moderates.
      </p>

      {/* Bar chart */}
      <div className="flex items-end justify-between gap-2 mb-6 h-24">
        {POSITIONS.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-1 flex flex-col items-center gap-1 group"
          >
            <motion.div
              className={`w-full rounded-t-md ${i === active ? p.color : "bg-white/10 group-hover:bg-white/20"} transition-colors duration-200`}
              animate={{ height: `${(RISK_BARS[i] / 5) * 80}px` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </button>
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between mb-8">
        {POSITIONS.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 text-center text-xs font-semibold transition-colors duration-200 ${i === active ? pos.textColor : "text-gray-500 hover:text-gray-300"}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={4}
        step={1}
        value={active}
        onChange={e => setActive(Number(e.target.value))}
        className="w-full accent-orange-500 mb-8"
      />

      {/* Info card */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 border border-white/10 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-heading font-bold text-lg">{pos.label}</span>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${pos.color} text-white`}>
            {pos.risk}
          </span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{pos.description}</p>
      </motion.div>

      {/* Disclaimer */}
      <p className="text-gray-600 text-xs mt-4 leading-relaxed">
        * Qualitative risk labels based on multiple peer-reviewed studies of social media behaviour, primarily US samples. These are not exact global percentages. Context, platform, and time period all affect findings.
      </p>
    </div>
  );
}