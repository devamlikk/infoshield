import React from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">Watch & Learn</span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mt-3">
            What our society
            <span className="text-orange-400 italic"> says.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Here is a video by The Open University that talks about why people believe misinformation. 
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_7otmig_7Co"
              title="How Fake News Spreads"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
