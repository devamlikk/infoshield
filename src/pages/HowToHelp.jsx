import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Users, MessageCircle, CheckCircle, ExternalLink } from "lucide-react";
import ResourceCard from "@/components/help/ResourceCard";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

const resources = [
  {
    title: "RMIT ABC Fact Check",
    description: "Australia's leading fact-checking service, verifying claims from politicians and viral content.",
    url: "https://www.abc.net.au/news/factcheck",
    icon: Search,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "AAP FactCheck",
    description: "Independent Australian fact-checking by the nation's only not-for-profit newswire.",
    url: "https://www.aap.com.au/factcheck/",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "ACMA — Media Literacy",
    description: "The Australian Communications and Media Authority's resources on navigating online misinformation.",
    url: "https://www.acma.gov.au",
    icon: BookOpen,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Reuters Institute",
    description: "Global research on digital news, misinformation trends, and media trust from Oxford University.",
    url: "https://reutersinstitute.politics.ox.ac.uk",
    icon: ExternalLink,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Snopes",
    description: "One of the world's oldest and most trusted fact-checking websites covering viral misinformation.",
    url: "https://www.snopes.com",
    icon: Search,
    color: "from-teal-500 to-cyan-600"
  },
  {
    title: "First Draft",
    description: "Tools and training for journalists and citizens to verify content and combat misinformation.",
    url: "https://firstdraftnews.org",
    icon: MessageCircle,
    color: "from-pink-500 to-rose-600"
  },
];

const tips = [
  { title: "Check the source", desc: "Look up the website's 'About' page and search for its reputation before trusting content." },
  { title: "Read beyond the headline", desc: "Headlines are often misleading. Read the full article before sharing or forming an opinion." },
  { title: "Check the date", desc: "Old stories resurface constantly. Verify that the story is current and still relevant." },
  { title: "Examine your biases", desc: "We're more likely to believe content that confirms our existing views. Stay critical." },
  { title: "Cross-reference sources", desc: "If a story is true, multiple reputable outlets will be covering it. Check for corroboration." },
  { title: "Reverse image search", desc: "Use Google or TinEye to verify that images haven't been taken out of context." },
];

export default function HowToHelp() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 flex items-center min-h-[55vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80")` }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">Take Action</p>
            <h1 className="font-heading font-black text-white leading-[1.0]">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">How to</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-orange-400 italic">fight back.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Practical tools, trusted resources, and simple habits to protect yourself and your community from fake news.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24">

        {/* Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">6 Steps to Verify</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <span className="text-orange-400 font-bold text-sm">{i + 1}</span>
                </div>
                <h4 className="font-heading font-bold text-white mb-2">{tip.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">Trusted Resources</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((res, i) => (
              <ResourceCard key={i} {...res} index={i} dark />
            ))}
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-8 sm:p-12 text-center"
        >
          <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h3 className="font-heading font-black text-3xl text-white mb-4">Spread the word, not fake news</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Share InfoShield with your network. The more people who develop media literacy skills, the harder it becomes for misinformation to spread.
          </p>
          <div className="flex justify-center">
            <SocialShareButtons title="InfoShield — Learn to spot fake news and protect your community" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
