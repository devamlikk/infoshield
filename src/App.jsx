import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import WhyItMatters from "@/components/home/WhyItMatters";
import VideoSection from "@/components/home/VideoSection";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function Home() {
  return (
    <div className="bg-[#0F172A]">
      <HeroSection />
      <StatsStrip />
      <WhyItMatters />
      <VideoSection />
      <section className="py-28 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">
          Help spread
          <span className="text-orange-400 italic"> the truth.</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Share InfoShield with friends and family. Together, we can build a more informed community.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to={createPageUrl("Quiz")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold transition-all shadow-2xl shadow-orange-500/30 hover:scale-105"
          >
            Take the Quiz <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={createPageUrl("Community")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold border border-white/30 backdrop-blur-sm transition-all hover:scale-105"
          >
            Vote in our Poll
          </Link>
        </div>
        <div className="flex justify-center">
          <SocialShareButtons title="InfoShield — Learn to spot fake news and misinformation" />
        </div>
      </section>
    </div>
  );
}