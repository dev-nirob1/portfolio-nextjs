"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiX, FiFolder, FiPlusCircle, FiLogOut } from "react-icons/fi";

const navItems = [
  { label: "Projects", href: "/dashboard", icon: FiFolder },
  { label: "Add Project", href: "/dashboard/projects/new", icon: FiPlusCircle },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-ink/40 z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-line z-40 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-line">
          <div>
            <span className="font-display text-lg text-ink">AHN</span>
            <p className="font-mono text-[10px] text-slate mt-0.5">
              admin panel
            </p>
          </div>
          <button onClick={onClose} className="md:hidden text-slate">
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors ${
                  isActive
                    ? "bg-surface text-ink"
                    : "text-slate hover:bg-surface hover:text-ink"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-sm" />
                )}
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-line">
          {user && (
            <div className="px-3 py-2 mb-1">
              <p className="text-[13px] text-ink truncate">{user.name}</p>
              <p className="font-mono text-[11px] text-slate truncate">
                {user.email}
              </p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-slate hover:bg-surface hover:text-primary transition-colors cursor-pointer"
          >
            <FiLogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;