import React from "react";
import { cn } from "@/app/utils/cn";

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        "w-full bg-transparent border border-line rounded-sm px-3 py-2 text-[15px] text-ink focus:outline-none focus:border-primary transition-colors duration-300 resize-none",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;