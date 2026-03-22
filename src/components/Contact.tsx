"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const socials = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Adityxax", color: "hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adityxax/", color: "hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/adityxax", color: "hover:text-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]" },
  { name: "Mail", icon: <FaEnvelope />, url: "mailto:officialadi2003@gmail.com", color: "hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]" },
  { name: "Outlook", icon: <PiMicrosoftOutlookLogoFill />, url: "mailto:adityxax2003@outlook.com", color: "hover:text-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: "success" | "error" | null }>({
    text: "",
    type: null,
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMsg({ text: "", type: null });

    emailjs
      .sendForm(
        "service_x2003",
        "template_mdhrj1w",
        form.current,
        "WPHX0R6kpz2UvaKIs"
      )
      .then(() => {
        setStatusMsg({ text: "Message sent successfully! 🚀", type: "success" });
        form.current?.reset();
      })
      .catch(() => {
        setStatusMsg({ text: "Failed to send message. Please try again.", type: "error" });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen text-white px-6 md:px-12 py-24 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-14 text-center">Get In Touch</h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 w-full max-w-7xl"
      >
        {/* Left Column: Info & Socials */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent text-center lg:text-left">
              Let's create something <br /> amazing together.
            </h3>
            <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              Have a project in mind? Reach out and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
                className={`w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-3xl transition-all duration-300 ${social.color} shadow-lg backdrop-blur-md`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative bg-black/40 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-6 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all text-white"
                  placeholder="name@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-[0.99]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {statusMsg.text && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-center font-medium ${
                  statusMsg.type === "success" 
                    ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {statusMsg.text}
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
