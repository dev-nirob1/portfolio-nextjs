"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import WindowPanel from "@/app/components/ui/WindowPanel";
import Label from "@/app/components/ui/Label";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Paragraph from "@/app/components/ui/Paragraph";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
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
      await axios.post("/api/auth/login", formData);
      toast.success('Login Successful')
      router.push("/admin");
    } catch (error) {
      setError(
        error.response?.data?.error || "Login failed"
      );
      toast.error('Login Failed');
      setStatus("idle");
    }
  };

  return (
    <div className="w-full max-w-md">
      <WindowPanel label="login.js">
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
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
            {status === "loading" ? "logging in..." : "$ login"}
          </Button>

          <Paragraph className="font-mono text-[12px] text-slate text-center pt-2">
            no account?{" "}
            <Link
              href="/register"
              className="text-primary hover:underline"
            >
              register
            </Link>
          </Paragraph>
        </form>
      </WindowPanel>
    </div>
  );
};

export default LoginPage;