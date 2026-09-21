import Link from "next/link";
import { cn } from "@/app/utils/cn";

const CustomLink = ({ children, className, ...props }) => {
  return (
    <Link
      className={cn(
        "font-mono text-[12px] text-slate mt-4 inline-block group-hover:text-ink transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;