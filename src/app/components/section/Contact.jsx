"use client";

import { useState } from "react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Heading from "../ui/Heading";
import Span from "../ui/Span";
import ContactForm from "../Widgets/ContactForm";

const contactLinks = [
  {
    label: "Email",
    value: "me.nirob01@gmail.com",
    href: "mailto:me.nirob01@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/dev-nirob1",
    href: "https://github.com/dev-nirob1",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/al-hasan-nirob10925/",
  },
];

const Contact = () => {

  return (
    <section id="contact" className="py-16 border-t border-line">
      <Container className="max-w-5xl!">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="max-w-md">
            <SectionTitle className="mb-6">Contact</SectionTitle>
            <Heading
              as="h4"
              className="text-[2rem] md:text-[2.6rem] leading-tight mb-8"
            >
              Looking for a frontend developer? Let&apos;s talk.
            </Heading>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-line text-[15px] text-ink hover:pl-2 transition-all"
                >
                  <span>{link.label}</span>

                  <Span className="text-slate">{link.value}</Span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
