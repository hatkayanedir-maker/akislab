"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  { label: "Meta Ads", sub: "Google Ads", icon: "📡" },
  { label: "Landing Page", sub: "Form", icon: "📄" },
  { label: "WhatsApp", sub: "İletişim", icon: "💬" },
  { label: "CRM", sub: "Takip", icon: "🗂" },
  { label: "Otomasyon", sub: "Akıllı Takip", icon: "⚙️" },
  { label: "Satış", sub: "Dönüşüm", icon: "✓" },
];

export default function FlowDiagram() {
  const [activeNode, setActiveNode] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div ref={ref} className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Mobile: vertical flow */}
      <div className="flex flex-col items-center gap-0">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center">
            {/* Node */}
            <div
              className={`relative flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-500 w-52 ${
                activeNode === i
                  ? "bg-white border-[#e85d26] shadow-md shadow-[#e85d2615]"
                  : "bg-white/60 border-[#e5e0d8]"
              }`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s, background 0.3s, border-color 0.3s, box-shadow 0.3s`,
              }}
            >
              <span className="text-lg leading-none">{node.icon}</span>
              <div className="min-w-0">
                <div
                  className={`text-sm font-semibold leading-tight ${activeNode === i ? "text-[#1a1a1a]" : "text-[#4a4540]"}`}
                >
                  {node.label}
                </div>
                <div className="text-xs text-[#8a8278] leading-tight mt-0.5">
                  {node.sub}
                </div>
              </div>
              {/* Active indicator */}
              {activeNode === i && (
                <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-[#e85d26] animate-pulse" />
              )}
            </div>

            {/* Arrow connector */}
            {i < nodes.length - 1 && (
              <div className="flex flex-col items-center my-1 h-8">
                <div
                  className={`w-px flex-1 transition-colors duration-500 ${
                    activeNode > i ? "bg-[#e85d26]" : "bg-[#e5e0d8]"
                  }`}
                />
                {/* Moving dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeNode === i
                      ? "bg-[#e85d26] scale-125"
                      : activeNode > i
                        ? "bg-[#e85d26] opacity-50"
                        : "bg-[#e5e0d8]"
                  }`}
                />
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#e5e0d8] mt-0.5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
