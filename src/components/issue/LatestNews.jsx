import React from "react";
import { ExternalLink, Calendar } from "lucide-react";

const ARTICLES = [
  {
    title: "The big idea: do we worry too much about misinformation?",
    source: "The Guardian",
    date: "2025-03-17",
    url: "https://www.theguardian.com/books/2025/mar/17/the-big-idea-do-we-worry-too-much-about-misinformation"
  },
  {
    title: "Study: On Twitter, false news travels faster than true stories",
    source: "MIT News",
    date: "2018-03-08",
    url: "https://news.mit.edu/2018/study-twitter-false-news-travels-faster-true-stories-0308"
  }
];

export default function LatestNews() {
  return (
    <div className="grid gap-4">
      {ARTICLES.map((article, index) => (
        <a
          key={index}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-white font-heading font-semibold text-lg group-hover:text-orange-400 transition-colors mb-3 line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="font-medium text-orange-400">{article.source}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-1" />
          </div>
        </a>
      ))}
    </div>
  );
}