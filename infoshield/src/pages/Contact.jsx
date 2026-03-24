import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "feedback", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (no backend needed)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 flex items-center min-h-[45vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=80")` }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">Get in Touch</p>
            <h1 className="font-heading font-black text-white leading-[1.0]">
              <span className="block text-5xl sm:text-6xl">Contact</span>
              <span className="block text-5xl sm:text-6xl text-orange-400 italic">InfoShield.</span>
            </h1>
            <p className="text-gray-300 text-lg mt-5">Questions, feedback, or spotted a piece of misinformation?</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-white mb-3">Message received!</h2>
            <p className="text-gray-400 mb-6">Thanks for reaching out. We'll get back to you soon.</p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", type: "feedback", message: "" }); }}
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-medium transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="font-heading font-bold text-xl text-white">Send us a message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1E293B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                >
                  <option value="feedback">Feedback</option>
                  <option value="question">Question</option>
                  <option value="report">Report Misinformation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold transition-all shadow-xl shadow-orange-500/25 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
              </button>
            </form>
          </motion.div>
        )}

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl"
        >
          <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-gray-300 text-sm">
            You can also reach us at <span className="text-orange-400 font-medium">contact@infoshield.au</span>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
