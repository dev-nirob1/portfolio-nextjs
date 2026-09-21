import React from "react";
import { cn } from "@/app/utils/cn";

const Label = ({ children, className, ...props }) => {
  return (
    <label
      className={cn(
        "font-mono text-[12px] text-slate italic block mb-2",
        className
      )}
      {...props}
    >
      {"//"} {children}
    </label>
  );
};

export default Label;