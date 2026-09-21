import Link from "next/link";
import { FiMenu, FiExternalLink, FiLogOut } from "react-icons/fi";

const Topbar = ({ onMenuClick, onLogout }) => {
  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-line bg-background">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden text-slate">
          <FiMenu size={22} />
        </button>
        <span className="font-medium text-ink">Admin</span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-1.5 text-[13px] text-slate hover:text-ink transition-colors"
        >
          View Site
          <FiExternalLink size={13} />
        </Link>

        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 text-[13px] text-slate hover:text-primary transition-colors cursor-pointer"
        >
          <FiLogOut size={14} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;