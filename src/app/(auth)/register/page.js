"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WindowPanel from "@/app/components/ui/WindowPanel";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        setStatus("idle");
        return;
      }

      router.push("/login");
    } catch {
      setError("Something went wrong");
      setStatus("idle");
    }
  };

  return (
    <div className="w-full max-w-md">
      <WindowPanel label="register.js">
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="font-mono text-[12px] text-slate italic block mb-2">
              // name
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
              // email
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
              // password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-transparent border border-line rounded-sm px-3 py-2 text-[15px] text-ink focus:outline-none focus:border-primary transition-colors duration-300"
            />
          </div>

          {error && (
            <p className="font-mono text-[12px] text-primary">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-mono text-[13px] px-6 py-3 rounded-sm bg-ink text-background hover:bg-primary transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "creating account..." : "$ register"}
          </button>

          <p className="font-mono text-[12px] text-slate text-center pt-2">
            already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              login
            </Link>
          </p>
        </form>
      </WindowPanel>
    </div>
  );
};

export default RegisterPage;