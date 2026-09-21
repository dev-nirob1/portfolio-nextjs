import React from "react";
import { cn } from "@/app/utils/cn";

const Dot = ({ className }) => {
  return (
    <div
      className={cn(
        "w-2 h-2 rounded-full bg-primary",
        className
      )}
    />
  );
};

export default Dot;