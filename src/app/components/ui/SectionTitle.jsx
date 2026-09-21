import { cn } from "@/app/utils/cn";

const SectionTitle = ({ children, className, ...props }) => {
  return (
    <p
      className={cn("font-mono text-[13px] text-slate italic mb-8", className)}
      {...props}
    >
      {"//"} {children}
    </p>
  );
};

export default SectionTitle;
