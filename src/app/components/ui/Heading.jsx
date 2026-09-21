import React from "react";
import { cn } from "@/app/utils/cn";

const Heading = ({
  children,
  as = "h2",
  className,
  ...props
}) => {
  const Component = as;

  const variants = {
    h1: "font-display text-[2.6rem] leading-[1.08] sm:text-[3.4rem] md:text-[3.8rem] tracking-tight text-ink",

    h2: "font-display text-[2.2rem] md:text-[2.8rem] leading-[1.1] tracking-tight text-ink",

    h3: "font-display text-[1.9rem] md:text-[2.2rem] leading-[1.15] text-ink",

    h4: "font-display text-[1.5rem] md:text-[1.7rem] leading-[1.2] text-ink",

    h5: "font-display text-[1.15rem] leading-[1.3] text-ink",

    h6: "font-display text-base leading-[1.3] text-ink",
  };

  return (
    <Component
      className={cn(variants[as], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;