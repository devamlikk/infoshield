import React from "react";
import { motion } from "framer-motion";
import MisinfoChart from "@/components/issue/MisinfoChart";
import PoliticalBiasSlider from "@/components/issue/PoliticalBiasSlider";
import LatestNews from "@/components/issue/LatestNews";
import SocialShareButtons from "@/components/shared/SocialShareButtons";
import { BookOpen, BarChart3, SlidersHorizontal, Newspaper } from "lucide-react";

export default function TheIssue() {
  return (
    <div className="bg-[#0F172A]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 flex items-center min-h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=1800&q=80")` }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">Understanding the Crisis</p>
            <h1 className="font-heading font-black text-white leading-[1.0]">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">The Misinformation</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-orange-400 italic">Epidemic.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Fake news isn't just annoying — it's a public health, political, and social crisis affecting millions of Australians every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24">

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">Background</span>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { stat: "76%", label: "of Australians were exposed to misinformation online in 2023", source: "ACMA" },
              { stat: "97%", label: "of Australian adults have limited skills to verify information online", source: "RMIT FactLab" },
              { stat: "6×", label: "false news can spread up to six times faster than true stories on social media", source: "MIT Study" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F172A] hover:bg-white/5 transition-colors p-8 text-center">
                <p className="font-heading font-black text-5xl text-orange-400 mb-3">{item.stat}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{item.label}</p>
                <span className="text-xs text-white/30 font-medium uppercase tracking-wider">{item.source}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-8 rounded-2xl border border-white/10 bg-white/5">
            <p className="text-gray-300 leading-relaxed">
              Misinformation has exploded in the digital age. According to ACMA, health, politics, and climate are among the most common targets in Australia. Social media algorithms designed to maximise engagement amplify emotionally charged, sensational content, which is often false. The Reuters Institute Digital News Report shows trust in news is at historic lows globally, leaving people more vulnerable to unverified alternative sources. The COVID-19 pandemic highlighted the real-world consequences of misinformation, with false health claims leading to vaccine hesitancy and dangerous behaviours. As AI-generated content becomes more sophisticated, the challenge of discerning truth from fiction will only grow.
            </p>
          </div>
        </motion.div>

        {/* Charts */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">The Data</span>
          </div>
          <MisinfoChart />
        </motion.div>

        {/* Political Bias Slider */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <SlidersHorizontal className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">Political Bias Explorer</span>
          </div>
          <PoliticalBiasSlider />
        </motion.div>

        {/* Latest News */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">Live News Feed</span>
          </div>
          <LatestNews />
        </motion.div>

        {/* Key Takeaways */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 border border-white/10 rounded-3xl p-8 sm:p-12">
          <h3 className="font-heading font-black text-2xl text-white mb-8">Key Takeaways</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Misinformation incidents have grown nearly 700% since 2017",
              "Facebook remains the number one platform for fake news exposure",
              "Health misinformation is the most common type in Australia",
              "Fact-checking capacity is growing but cannot keep pace",
              "Young people aged 18 to 24 are most exposed but also most aware",
              "AI-generated content is creating new misinformation challenges",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-400 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <SocialShareButtons title="The Misinformation Epidemic: InfoShield Data Analysis" />
        </div>
      </section>
    </div>
  );
}