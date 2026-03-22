"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
    <section className="min-h-screen text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
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
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 h-40 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all font-medium placeholder-gray-400 resize-none"
          />

          {statusMsg.text && (
            <div
              className={`p-3 rounded text-center font-medium ${
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
      </motion.div>
    </section>
  );
}
