"use client";
import { useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  // { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <FaServer className="text-white" /> },
  // { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  // { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
];
//modified the skills section
const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  // { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-yellow-400" /> },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const tabs = [
    { name: "Frontend", icon: <FaCode /> },
    { name: "Backend", icon: <FaServer /> },
    { name: "Database", icon: <FaDatabase /> },
  ];

  const getSkills = () => {
    switch (activeTab) {
      case "Frontend":
        return frontendSkills;
      case "Backend":
        return backendSkills;
      case "Database":
        return databaseSkills;
      default:
        return [];
    }
  };

  return (
    <div className="text-white overflow-x-hidden space-y-8">
      <h1 className="flex gap-2 text-5xl font-bold justify-center items-center">
        Skills
        <span className="hover:animate-bounce">
          <FaCode />
        </span>
      </h1>

      {/* Tab buttons */}
      <div className="bg-gradient-to-r from-[#0F112D] to-[#101F3C] p-2 rounded-xl flex justify-between max-w-2xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 flex flex-col items-center gap-1 px-6 py-4 rounded-lg transition-all duration-300 ${
              activeTab === tab.name
                ? "bg-gradient-to-br from-[#302C6D] to-[#171B4F] text-white shadow-inner"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-sm font-medium">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Skill cards with scroll animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-4">
        {getSkills().map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 bg-black rounded-xl flex flex-col justify-center items-center gap-2 text-sm group overflow-hidden"
          >
            {/* animated border */}
            <div className="absolute inset-0 z-0 rounded-xl border-2 border-transparent bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 animate-spin-slow group-hover:animate-pulse-spin blur-[2px]"></div>
            <div className="absolute inset-[2px] z-10 bg-black rounded-xl"></div>

            {/* content */}
            <div className="z-20 text-3xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="z-20 text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
