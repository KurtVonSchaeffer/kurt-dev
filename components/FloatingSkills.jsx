"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaFigma, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaReact />,       name: "React",       color: "#61DAFB", size: 70 },
  { icon: <SiNextdotjs />,   name: "Next.js",     color: "#ffffff", size: 62 },
  { icon: <FaNodeJs />,      name: "Node.js",     color: "#6DA55F", size: 62 },
  { icon: <SiTailwindcss />, name: "Tailwind",    color: "#06B6D4", size: 56 },
  { icon: <FaJs />,          name: "JavaScript",  color: "#F7DF1E", size: 56 },
  { icon: <FaPython />,      name: "Python",      color: "#60A5FA", size: 56 },
  { icon: <SiMongodb />,     name: "MongoDB",     color: "#4CAF50", size: 50 },
  { icon: <SiMysql />,       name: "MySQL",       color: "#00758F", size: 50 },
  { icon: <FaFigma />,       name: "Figma",       color: "#F24E1E", size: 48 },
  { icon: <FaHtml5 />,       name: "HTML5",       color: "#E34F26", size: 46 },
  { icon: <FaCss3 />,        name: "CSS3",        color: "#1572B6", size: 46 },
];

// Deterministic starting positions (% of container)
const positions = [
  { left: "8%",  top: "8%"  },
  { left: "32%", top: "4%"  },
  { left: "58%", top: "8%"  },
  { left: "78%", top: "4%"  },
  { left: "88%", top: "38%" },
  { left: "72%", top: "65%" },
  { left: "48%", top: "76%" },
  { left: "22%", top: "72%" },
  { left: "4%",  top: "55%" },
  { left: "16%", top: "30%" },
  { left: "42%", top: "38%" },
];

// Unique drift paths per bubble (px)
const drifts = [
  { x: [0, 18, -12, 8,  0], y: [0, -14, 16, -8,  0] },
  { x: [0, -20, 10, -14, 0], y: [0, 18,  -8, 14,  0] },
  { x: [0, 14, -18, 6,  0], y: [0, -10, 20, -12, 0] },
  { x: [0, -16, 12, -8, 0], y: [0, 14,  -16, 8,  0] },
  { x: [0, 10, -14, 18, 0], y: [0, -18, 10,  -6, 0] },
  { x: [0, -12, 20, -10, 0], y: [0, 8,  -14, 16, 0] },
  { x: [0, 16, -8,  14, 0], y: [0, -12, 18, -10, 0] },
  { x: [0, -10, 14, -16, 0], y: [0, 16, -10, 12, 0] },
  { x: [0, 12, -16, 10, 0], y: [0, -16, 8,  -12, 0] },
  { x: [0, -18, 8,  12, 0], y: [0, 10,  -16, 6,  0] },
  { x: [0, 8,  -10, -14, 0], y: [0, -8,  12, -16, 0] },
];

const durations = [9, 11, 8, 12, 10, 13, 9.5, 11.5, 8.5, 10.5, 12.5];
const delays    = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.9, 2.1, 1.5, 0.3, 2.7];

function Bubble({ skill, pos, drift, duration, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{ position: "absolute", left: pos.left, top: pos.top }}
      animate={{ x: drift.x, y: drift.y }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="cursor-pointer"
    >
      <motion.div
        animate={{ scale: hovered ? 1.18 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ width: skill.size, height: skill.size }}
        className="rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative shadow-lg"
      >
        <div style={{ fontSize: skill.size * 0.44, color: skill.color }}>
          {skill.icon}
        </div>

        {/* Glow ring on hover */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: `0 0 18px 4px ${skill.color}44` }}
          />
        )}
      </motion.div>

      {/* Name label */}
      <motion.p
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.15 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-accent whitespace-nowrap pointer-events-none"
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );
}

export default function FloatingSkills() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center xl:text-left">
        <h3 className="text-4xl font-bold">My Skills</h3>
        <p className="max-w-[600px] text-white/60 mt-2 mx-auto xl:mx-0">
          Specialized in building scalable, end-to-end products — from credit engines and AI automation to fintech platforms, using a modern full-stack toolkit.
        </p>
      </div>

      <div className="relative w-full rounded-2xl bg-[#232329] border border-white/5 overflow-hidden"
        style={{ height: "380px" }}
      >
        {skills.map((skill, i) => (
          <Bubble
            key={skill.name}
            skill={skill}
            pos={positions[i]}
            drift={drifts[i]}
            duration={durations[i]}
            delay={delays[i]}
          />
        ))}

        {/* Subtle radial glow in center */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,255,153,0.03) 0%, transparent 70%)" }}
        />
      </div>
    </div>
  );
}
