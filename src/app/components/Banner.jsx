"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaReact,
  FaArrowRight,
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const LottieAni = dynamic(() => import("./LottieAni"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[300px] bg-gray-800/20 animate-pulse rounded-lg" />
  ),
});

export default function Banner() {
  return (
    <div className="min-h-screen py-10 px-6 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between">
      {/* Left Text */}
      <div className="max-w-xl space-y-6">
        <h3 className="uppercase tracking-widest flex items-center gap-2 rounded-4xl p-3 text-gray-400">
          <FaReact className="animate-spin [animation-duration:3s]" />
          Software Developer
          <FaReact className="animate-spin [animation-duration:3s]" />
        </h3>

        <h1 className="text-4xl lg:text-6xl font-bold">
          Hello I’m{" "}
          <span className="text-[#00FF9F]">
            {/* Safety check for window object */}
            {typeof window !== "undefined" && (
              <Typewriter
                options={{
                  strings: ["Md Roknujjaman", "Rony"],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </span>
        </h1>

        <p className="text-gray-400">
          I'm a Web developer passionate about building scalable and efficient
          web applications. I focus on creating seamless user experiences with
          optimized performance, clean architecture, and modern technologies.
        </p>

        <div className="px-4 py-6">
          {/* Tech stack list */}
          <div className="pt-2 pb-4">
            <ul className="list-none flex flex-wrap gap-3 justify-center lg:justify-start items-center text-sm font-medium">
              <li className="px-4 py-1.5 text-yellow-400 border border-yellow-400 rounded-full bg-transparent hover:bg-yellow-400/10 transition">
                JavaScript
              </li>
              <li className="px-4 py-1.5 text-blue-400 border border-blue-400 rounded-full bg-transparent hover:bg-blue-400/10 transition">
                React
              </li>
              <li className="px-4 py-1.5 text-gray-400 border border-gray-400 rounded-full bg-transparent hover:bg-gray-400/10 transition">
                Express.js
              </li>
              <li className="px-4 py-1.5 text-green-400 border border-green-400 rounded-full bg-transparent hover:bg-green-400/10 transition">
                MongoDB
              </li>
              <li className="px-4 py-1.5 text-white border border-white rounded-full bg-transparent hover:bg-white/10 transition">
                Next.js
              </li>
            </ul>
          </div>

          {/* Buttons + Social icons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between">
            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent border flex items-center justify-center gap-1 border-[#00FF9F] text-[#00FF9F] px-6 py-2 rounded-full hover:bg-[#00FF9F] hover:text-black transition-all">
                Projects <GoProjectSymlink />
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-1 bg-transparent border border-[#00FF9F] text-[#00FF9F] px-6 py-2 rounded-full hover:bg-[#00FF9F] hover:text-black transition-all"
              >
                Contacts <FaArrowRight />
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl mt-4 sm:mt-0">
              <FaLinkedin className="hover:text-[#00FF9F] cursor-pointer" />
              <FaGithub className="hover:text-[#00FF9F] cursor-pointer" />
              <FaTwitter className="hover:text-[#00FF9F] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center w-[300px] h-[300px] mt-10 lg:mt-0"
      >
        <LottieAni />
      </motion.div>
    </div>
  );
}
