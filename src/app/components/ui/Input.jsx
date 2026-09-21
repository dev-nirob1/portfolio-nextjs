import React from "react";
import { cn } from "@/app/utils/cn";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full bg-transparent border border-line rounded-sm px-3 py-2 text-[15px] text-ink focus:outline-none focus:border-primary transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
};

export default Input;