"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iecx7bs",
        "template_gxowv54",
        form.current,
        "_zI2TlKJKHsa2PVyC"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Oops! Something went wrong. Check Console.");
        console.error("EmailJS Error:", error);
      });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 text-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="w-full max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            ref={form}
            className="space-y-6 bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl transition-all hover:scale-[1.02]"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 px-6 rounded shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col justify-center transition-all hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Contact Information
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:roknujjamanrony1234@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  roknujjamanrony1234@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-green-400" />
                <a
                  href="tel:+8801314267382"
                  className="hover:text-green-400 transition"
                >
                  +8801314267382
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/+8801314267382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  WhatsApp: +8801314267382
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
