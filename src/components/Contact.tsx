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
          className="flex flex-col gap-6 bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/10"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name📛"
            required
            className="p-4 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email📧"
            required
            className="p-4 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message💬"
            required
            className="p-4 rounded bg-white/5 border border-white/10 h-40 focus:outline-none focus:border-blue-400"
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
            className={`transition p-4 rounded font-semibold text-white ${
              isSubmitting
                ? "bg-blue-500/50 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
