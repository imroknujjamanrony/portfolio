"use client";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      exam: "JSC",
      year: "2016",
      board: "Dinajpur",
      gpa: "5.00",
      institute: "Kaliganj S.P High School",
      background: "General",
    },
    {
      exam: "SSC",
      year: "2019",
      board: "Dinajpur",
      institute: "Kaliganj S.P High School",
      gpa: "4.61",
      background: "Science",
    },
    {
      exam: "HSC",
      year: "2021",
      board: "Dinajpur",
      institute: "Thakurgaon Eco College",
      gpa: "4.83",
      background: "Science",
    },
    {
      exam: "Honors",
      year: "Ongoing",
      board: "",
      institute: "Moqbular Rahman Govt. College, Panchagarh",
      gpa: "N/A",
      background: "Bachelor of Arts - English",
    },
  ];

  return (
    <section id="education" className="py-16 mt-10 px-6 text-white">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Educational Qualification
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-blue-500/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl text-blue-400 group-hover:rotate-12 transition-transform duration-300">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">{edu.exam}</h3>
                <p className="text-gray-300">Year: {edu.year}</p>
                {edu.board && (
                  <p className="text-gray-300">Board: {edu.board}</p>
                )}
                <p className="text-gray-300">Institute: {edu.institute}</p>
                {edu.gpa !== "N/A" && (
                  <p className="text-gray-300">GPA: {edu.gpa}</p>
                )}
                <p className="text-gray-300">{edu.background}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
