import React from "react";
import { cn } from "@/app/utils/cn";

const Span = ({ children, className }) => {
  return (
    <span
      className={cn("font-mono text-xs", className)}
    >
      {children}
    </span>
  );
};

export default Span;