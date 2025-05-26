"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from "../../../public/Rony.jpeg";

export default function AboutMe() {
  return (
    <div className="min-h-screen px-4 py-10 lg:py-20 text-white font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-left space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="text-purple-400">Hello, I'm</span>
            <br />
            <span>Md Roknujjaman Rony</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-300">
            I’m a web developer from Bangladesh with a passion for building
            dynamic, responsive, and user-friendly web applications. I work with
            modern technologies like React, Tailwind CSS, Node.js, and MongoDB
            to craft seamless experiences. I’m continuously learning and growing
            in the tech field, always aiming to deliver clean and meaningful
            code. Whether it's a backend API or a beautifully designed UI, I
            enjoy solving problems and bringing ideas to life.
          </p>
        </div>

        {/* Animated Image with Spinning Border */}
        <div className="box">
          <div className="content">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                filter: "brightness(1.2) contrast(1.1)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={bannerImage}
                alt="Rony's Image"
                className="rony-image"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
