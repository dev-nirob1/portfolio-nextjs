"use client";

import Link from "next/link";
import { FiMenu, FiExternalLink, FiLogOut } from "react-icons/fi";

import Button from "../ui/Button";
import { useAuth } from "@/app/context/AuthContext";
import Span from "../ui/Span";

const Topbar = ({ onMenuClick }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-line bg-background">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden text-slate hover:text-ink transition-colors cursor-pointer"
        >
          <FiMenu size={22} />
        </button>

        <Span className="font-medium text-lg text-ink">Admin</Span>
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

        <Button
          type="button"
          variant="danger"
          onClick={handleLogout}
          className="px-3! py-2! flex items-center gap-1.5 font-mono text-[12px]"
        >
          <FiLogOut size={14} />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
