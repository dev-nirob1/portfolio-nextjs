"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import WindowPanel from "@/app/components/ui/WindowPanel";
import Label from "@/app/components/ui/Label";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Paragraph from "@/app/components/ui/Paragraph";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
            <Label htmlFor="name">name</Label>

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
            <Label htmlFor="email">email</Label>

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
            <Label htmlFor="password">password</Label>

            <Input
              id="password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <Paragraph className="font-mono text-[12px] text-primary">
              {error}
            </Paragraph>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-mono text-[13px] disabled:opacity-60"
          >
            {status === "loading" ? "creating account..." : "$ register"}
          </Button>

          <Paragraph className="font-mono text-[12px] text-slate text-center pt-2">
            already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline"
            >
              login
            </Link>
          </Paragraph>
        </form>
      </WindowPanel>
    </div>
  );
};

export default RegisterPage;