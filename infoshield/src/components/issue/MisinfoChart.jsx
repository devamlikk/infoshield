import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, AreaChart, Area
} from "recharts";
import { motion } from "framer-motion";

const trendData = [
  { year: "2017", misinfoIncidents: 120, factChecked: 45 },
  { year: "2018", misinfoIncidents: 210, factChecked: 78 },
  { year: "2019", misinfoIncidents: 380, factChecked: 142 },
  { year: "2020", misinfoIncidents: 720, factChecked: 310 },
  { year: "2021", misinfoIncidents: 650, factChecked: 420 },
  { year: "2022", misinfoIncidents: 590, factChecked: 480 },
  { year: "2023", misinfoIncidents: 810, factChecked: 520 },
  { year: "2024", misinfoIncidents: 950, factChecked: 560 },
];

const platformData = [
  { platform: "Facebook", percentage: 42 },
  { platform: "Twitter/X", percentage: 28 },
  { platform: "YouTube", percentage: 15 },
  { platform: "TikTok", percentage: 22 },
  { platform: "WhatsApp", percentage: 18 },
  { platform: "Instagram", percentage: 12 },
];

const australianData = [
  { category: "Health", value: 34 },
  { category: "Politics", value: 28 },
  { category: "Climate", value: 18 },
  { category: "Finance", value: 12 },
  { category: "Science", value: 8 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0F172A] text-white px-4 py-3 rounded-xl shadow-xl text-sm border border-white/10">
        <p className="font-heading font-semibold mb-1">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function MisinfoChart() {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
      >
        <h3 className="font-heading font-bold text-xl text-white mb-2">
          Misinformation Incidents vs Fact-Checks Over Time
        </h3>
        <p className="text-gray-400 text-sm mb-6">Source: Reuters Institute Digital News Report & ACMA datasets</p>
        <div className="h-72 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorMisinfo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorFact" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="year" stroke="#64748B" fontSize={12} tick={{ fill: '#94A3B8' }} />
              <YAxis stroke="#64748B" fontSize={12} tick={{ fill: '#94A3B8' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area type="monotone" dataKey="misinfoIncidents" name="Misinfo Incidents" stroke="#F97316" strokeWidth={2.5} fill="url(#colorMisinfo)" />
              <Area type="monotone" dataKey="factChecked" name="Fact-Checked" stroke="#3B82F6" strokeWidth={2.5} fill="url(#colorFact)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
      >
        <h3 className="font-heading font-bold text-xl text-white mb-2">Where Misinformation Spreads Most</h3>
        <p className="text-gray-400 text-sm mb-6">Percentage of users who encountered fake news by platform (2024)</p>
        <div className="h-72 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={platformData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis type="number" stroke="#64748B" fontSize={12} unit="%" tick={{ fill: '#94A3B8' }} />
              <YAxis dataKey="platform" type="category" stroke="#64748B" fontSize={12} width={80} tick={{ fill: '#94A3B8' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="percentage" name="% Encountered" fill="#F97316" radius={[0, 8, 8, 0]} barSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
      >
        <h3 className="font-heading font-bold text-xl text-white mb-2">Australian Misinformation by Topic</h3>
        <p className="text-gray-400 text-sm mb-6">Source: ACMA Misinformation & News Quality Report</p>
        <div className="h-72 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={australianData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="category" stroke="#64748B" fontSize={12} tick={{ fill: '#94A3B8' }} />
              <YAxis stroke="#64748B" fontSize={12} unit="%" tick={{ fill: '#94A3B8' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" name="% of Reports" fill="#F97316" radius={[8, 8, 0, 0]} barSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
