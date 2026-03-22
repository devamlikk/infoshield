import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TILE_SIZE = 100;
const FADE_SPEED = 0.05;

const HEADLINES = [
  "FAKE NEWS", "MISINFO", "FACT CHECK", "BREAKING", "EXCLUSIVE",
  "SOURCES SAY", "UNVERIFIED", "RUMOUR", "VIRAL", "DISPUTED",
  "SATIRE", "MISLEADING", "PROPAGANDA", "CLICKBAIT", "HOAX", 
];

export default function HeroSection() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const tilesRef = useRef({});
  const animRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.8], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let lastCol = -1;
    let lastRow = -1;
    const onMouseMove = (e) => {
      const col = Math.floor(e.clientX / TILE_SIZE);
      const row = Math.floor(e.clientY / TILE_SIZE);
      if (col === lastCol && row === lastRow) return;
      lastCol = col;
      lastRow = row;
      const key = `${col}_${row}`;
      tilesRef.current[key] = {
        col, row,
        alpha: 1,
        headline: HEADLINES[Math.floor(Math.random() * HEADLINES.length)]
      };
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      Object.keys(tilesRef.current).forEach(key => {
        const tile = tilesRef.current[key];
        const x = tile.col * TILE_SIZE;
        const y = tile.row * TILE_SIZE;

        ctx.fillStyle = `rgba(249, 115, 22, ${tile.alpha * 0.9})`;
        ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);

        ctx.strokeStyle = `rgba(251, 146, 60, ${tile.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);

        ctx.font = "bold 18px monospace";
        ctx.fillStyle = `rgba(255, 255, 255, ${tile.alpha})`;
        ctx.textAlign = "center";
        ctx.fillText(tile.headline, x + TILE_SIZE / 2, y + TILE_SIZE / 2 + 4);
        ctx.textAlign = "left";

        tile.alpha -= FADE_SPEED;
        if (tile.alpha <= 0) delete tilesRef.current[key];
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-[130vh]">
      <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: "1200px" }}>
        <motion.div
          style={{
            rotateX,
            scale,
            transformStyle: "preserve-3d",
            position: "absolute",
            inset: 0,
          }}
        >
          {/* ── FRONT ── */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            {/* Newspaper background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=80")` }}
            />
            <div className="absolute inset-0 bg-[#0F172A]/75" />

            {/* Tile canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 z-10 pointer-events-none"
            />

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0F172A] to-transparent z-10" />

            {/* Hero text */}
            <motion.div
              style={{ opacity }}
              className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-44 pb-32"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-orange-400 font-heading font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-6"
              >
                Staying Sharp Against Fake News
              </motion.p>

              <h1 className="font-heading font-black text-white leading-[1.0] mb-4">
                <span className="block text-5xl sm:text-7xl lg:text-8xl">Don't believe</span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl text-orange-400 italic">everything</span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl">you read.</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-10 leading-relaxed"
              >
                False news on social media can reach people about <strong className="text-white">16× faster</strong> than true stories, so learning how to question posts and headlines really matters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  to={createPageUrl("Quiz")}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold text-base transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105"
                >
                  Take the Quiz
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={createPageUrl("TheIssue")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-base border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Explore the Data
                </Link>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="hidden sm:flex flex-wrap justify-center gap-4 mt-16"
              >
                {[
                  { stat: "76%", label: "of Australians exposed to fake news" },
                  { stat: "6×", label: "faster spread than real news" },
                  { stat: "65%", label: "can't spot misinformation" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                  >
                    <span className="font-heading font-black text-orange-400 text-xl">{item.stat}</span>
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── BACK — plain dark ── */}
          <div
            className="absolute inset-0 bg-[#0F172A]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateX(180deg)"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}