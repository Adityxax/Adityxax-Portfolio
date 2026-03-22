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
    <section className="min-h-screen text-white px-6 md:px-12 py-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        
        {/* Left Side: Text and Socials */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Let's Connect.</h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-2xl text-gray-300 transition-all duration-300 ${social.color} hover:-translate-y-1 hover:bg-white/10`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="relative">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name 📛"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all font-medium placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email 📧"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all font-medium placeholder-gray-400"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message 💬"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 h-36 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all font-medium placeholder-gray-400 resize-none"
            />

            {statusMsg.text && (
              <div
                className={`p-3 rounded-xl text-center font-medium ${
                  statusMsg.type === "success"
                    ? "bg-green-500/20 text-green-300 border border-green-500/50"
                    : "bg-red-500/20 text-red-300 border border-red-500/50"
                }`}
              >
                {statusMsg.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`transition-all duration-300 p-4 rounded-xl font-bold tracking-wide mt-2 ${
                isSubmitting
                  ? "bg-white/50 text-black/50 cursor-not-allowed"
                  : "bg-white hover:bg-gray-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </motion.div>
    </section>
  );
}
