"use client";

import { useState } from "react";

import Button from "../ui/Button";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      alert("Message sent!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <Label htmlFor="name">your name</Label>

        <Input
          id="name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="your name"
        />
      </div>

      <div>
        <Label htmlFor="email">your email</Label>

        <Input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <Label htmlFor="message">your message</Label>

        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="tell me about the role or project..."
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="font-mono text-[13px] disabled:opacity-60"
      >
        {status === "sending" ? "sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
