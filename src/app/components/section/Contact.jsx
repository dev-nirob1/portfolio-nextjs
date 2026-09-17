"use client";

import { useState } from "react";

const contactLinks = [
  { label: "Email", value: "hello@nirob.dev", href: "mailto:hello@nirob.dev" },
  { label: "GitHub", value: "github.com/nirob", href: "https://github.com/nirob" },
  { label: "LinkedIn", value: "in/nirob", href: "https://linkedin.com/in/nirob" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: replace with real API route once the backend exists
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 md:px-14 py-20 border-t border-line">
      <p className="font-mono text-[13px] text-slate italic mb-8">// contact</p>

      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-7">
          <p className="font-display text-[2rem] md:text-[2.6rem] leading-tight max-w-lg mb-8 text-ink">
            Looking for a frontend developer? Let&apos;s talk.
          </p>

          <div className="flex flex-col gap-1 max-w-md">
            {contactLinks.map((link) => (
              
               <a key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between py-3 border-b border-line text-[15px] text-ink hover:pl-2 transition-all"
              >
                <span>{link.label}</span>
                <span className="font-mono text-[12px] text-slate">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-mono text-[11px] text-slate block mb-2">
                name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-line py-2 text-[14px] text-ink focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] text-slate block mb-2">
                email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-line py-2 text-[14px] text-ink focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] text-slate block mb-2">
                message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-line py-2 text-[14px] text-ink focus:outline-none focus:border-ink transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 rounded-sm bg-ink text-background text-[14px] font-medium hover:bg-primary transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "sending..." : status === "sent" ? "sent ✓" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;