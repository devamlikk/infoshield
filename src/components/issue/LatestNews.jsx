import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";

const ARTICLES = [
  {
    title: "Australia's new misinformation laws explained: what will be banned and who decides what's false?",
    source: "The Guardian Australia",
    date: "2024-11-12",
    url: "https://www.theguardian.com/australia-news/2024/nov/12/australia-misinformation-laws-explained"
  },
  {
    title: "ACMA report finds 76% of Australians encountered misinformation online in 2023",
    source: "ACMA",
    date: "2024-06-03",
    url: "https://www.acma.gov.au/publications/2024-06/report/acma-misinformation-report-2024"
  },
  {
    title: "How AI-generated deepfakes are making misinformation harder to detect in Australia",
    source: "ABC News",
    date: "2024-09-21",
    url: "https://www.abc.net.au/news/2024-09-21/deepfakes-ai-misinformation-australia/104378156"
  },
  {
    title: "Social media platforms failing to remove health misinformation, Australian study finds",
    source: "Sydney Morning Herald",
    date: "2024-08-15",
    url: "https://www.smh.com.au/technology/social-media-health-misinformation-australia-20240815"
  },
  {
    title: "Election misinformation surges on TikTok and Facebook ahead of Australian federal vote",
    source: "Reuters",
    date: "2025-01-30",
    url: "https://www.reuters.com/world/asia-pacific/australia-election-misinformation-2025"
  },
  {
    title: "Young Australians most exposed to fake news but also most likely to fact-check, report says",
    source: "Reuters Institute",
    date: "2024-07-10",
    url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024/australia"
  },
];

export default function LatestNews() {
  const [expanded, setExpanded] = useState(null);

  const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
    return `${Math.floor(months / 12)} year${Math.floor(months / 12) > 1 ? "s" : ""} ago`;
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <Newspaper className="w-5 h-5 text-orange-400" />
        <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">
          News & Research
        </span>
      </div>
      <h3 className="font-heading font-bold text-xl text-white mb-1">
        Latest Misinformation Coverage
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Recent reporting and research on misinformation in Australia
      </p>

      <div className="space-y-3">
        {ARTICLES.map((article, i) => (
          <motion.a
            key={i}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="block group p-4 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium leading-snug group-hover:text-orange-400 transition-colors mb-2">
                  {article.title}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium text-gray-400">{article.source}</span>
                  <span>•</span>
                  <span>{timeAgo(article.date)}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-0.5" />
            </div>
          </motion.a>
        ))}
      </div>

      <p className="text-gray-600 text-xs mt-6">
        Sources: The Guardian, ACMA, ABC News, SMH, Reuters, Reuters Institute
      </p>
    </div>
  );
}