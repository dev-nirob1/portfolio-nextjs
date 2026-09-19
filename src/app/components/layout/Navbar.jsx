"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../ui/Container";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-6">
        <Link href="#home" className="font-display text-lg tracking-tight text-ink">
          Nirob
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-slate">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-sm bg-ink text-background font-medium hover:bg-primary transition-colors"
          >
            Resume
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-ink text-xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      {isOpen && (
        <nav className="md:hidden flex flex-col border-t border-line px-6 py-4 gap-4 font-mono text-[13px] text-slate bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-sm bg-ink text-background font-medium text-center w-fit"
          >
            Resume
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;