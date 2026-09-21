import { cn } from "@/app/utils/cn";
import React from "react";

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-ink text-background hover:bg-primary",
    secondary: "border border-line text-ink hover:border-ink",
    danger: "bg-red-50 text-red-600 hover:bg-red-700 hover:text-white",
  };

  return (
    <button
      className={cn(
        "cursor-pointer capitalize px-6 py-3 rounded-sm text-[14px] font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;