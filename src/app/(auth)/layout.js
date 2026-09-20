import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-6 md:p-10">
        <Link
          href="/"
          className="font-mono text-[13px] text-slate hover:text-ink transition-colors"
        >
          ← back
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;