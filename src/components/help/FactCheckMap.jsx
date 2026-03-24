import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";

const factCheckOrgs = [
  { name: "RMIT ABC Fact Check", city: "Melbourne, Australia", lat: -37.8136, lng: 144.9631, url: "https://www.abc.net.au/news/factcheck" },
  { name: "AAP FactCheck", city: "Sydney, Australia", lat: -33.8688, lng: 151.2093, url: "https://www.aap.com.au/factcheck/" },
  { name: "Full Fact", city: "London, UK", lat: 51.5074, lng: -0.1278, url: "https://fullfact.org" },
  { name: "Snopes", city: "California, USA", lat: 34.0522, lng: -118.2437, url: "https://www.snopes.com" },
  { name: "PolitiFact", city: "Florida, USA", lat: 27.7676, lng: -82.6403, url: "https://www.politifact.com" },
  { name: "AFP Fact Check", city: "Paris, France", lat: 48.8566, lng: 2.3522, url: "https://factcheck.afp.com" },
  { name: "Alt News", city: "India", lat: 23.0225, lng: 72.5714, url: "https://www.altnews.in" },
  { name: "Africa Check", city: "Johannesburg, South Africa", lat: -26.2041, lng: 28.0473, url: "https://africacheck.org" },
];

export default function FactCheckMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
    >
      <div className="p-6 sm:p-8 border-b border-gray-100">
        <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-2">
          Global Fact-Checking Network
        </h3>
        <p className="text-gray-500 text-sm">
          Explore fact-checking organisations around the world fighting misinformation.
        </p>
      </div>
      <div className="h-[400px] sm:h-[500px]">
        <MapContainer
          center={[-25, 135]}
          zoom={3}
          className="h-full w-full"
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {factCheckOrgs.map((org, i) => (
            <Marker key={i} position={[org.lat, org.lng]}>
              <Popup>
                <div className="text-sm">
                  <strong className="text-[#0F172A]">{org.name}</strong>
                  <br />
                  <span className="text-gray-500">{org.city}</span>
                  <br />
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Visit website →
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </motion.div>
  );
}