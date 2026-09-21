import { cn } from "@/app/utils/cn";

const Badge = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        "font-mono text-[11px] text-primary bg-line/40 px-2 py-1 rounded-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;