import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Newspaper, RefreshCw } from "lucide-react";

const API_KEY = "d9b29fe52658210da1c09d35054e225a";

export default function LatestNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=misinformation+australia&lang=en&max=6&apikey=${API_KEY}`
      );
      const data = await res.json();
      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Newspaper className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-widest">
              Live News Feed
            </span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white">
            Latest Misinformation News
          </h3>
          <p className="text-gray-400 text-sm mt-1">Real-time articles via GNews API</p>
        </div>
        <button
          onClick={fetchNews}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
              <div className="h-3 bg-white/5 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm mb-4">Could not load news articles.</p>
          <button
            onClick={fetchNews}
            className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-all"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article, i) => (
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
                  <p className="text-white text-sm font-medium leading-snug group-hover:text-orange-400 transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-gray-400">{article.source?.name}</span>
                    <span>•</span>
                    <span>{timeAgo(article.publishedAt)}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      )}

      <p className="text-gray-600 text-xs mt-6">
        Powered by GNews.io — updates in real time
      </p>
    </div>
  );
}