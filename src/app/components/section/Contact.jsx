"use client";

import { useState } from "react";
import Container from "../ui/Container";

const contactLinks = [
  {
    label: "Email",
    value: "hello@nirob.dev",
    href: "mailto:me.nirob01@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/dev-nirob1",
    href: "https://github.com/dev-nirob1",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/al-hasan-nirob10925",
    href: "https://www.linkedin.com/in/al-hasan-nirob10925/",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-line">
      <Container>
        <p className="font-mono text-[13px] text-slate italic mb-8">
          // contact
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="max-w-md">
            <p className="font-display text-[2rem] md:text-[2.6rem] leading-tight max-w-lg mb-8 text-ink">
              Looking for a frontend developer? Let&apos;s talk.
            </p>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
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

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
              <div>
                <label className="font-mono text-[12px] text-slate italic block mb-2">
                  // your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="your name"
                  className="w-full bg-transparent border border-line rounded-sm px-3 py-2 text-[15px] text-ink focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="font-mono text-[12px] text-slate italic block mb-2">
                  // your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border border-line rounded-sm px-3 py-2 text-[15px] text-ink focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="font-mono text-[12px] text-slate italic block mb-2">
                  // your message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="tell me about the role or project..."
                  className="w-full bg-transparent border border-line rounded-sm px-3 py-2 text-[15px] text-ink focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-pointer font-mono text-[13px] px-6 py-3 rounded-sm bg-ink text-background hover:bg-primary transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
