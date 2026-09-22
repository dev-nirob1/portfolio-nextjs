"use client";

import Image from "next/image";
import Link from "next/link";
import {FiX,FiHome,FiFolder,FiPlusCircle,FiTag,FiLogOut,} from "react-icons/fi";

import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Span from "../ui/Span";
import Paragraph from "../ui/Paragraph";

const navItems = [
  { label: "Overview", href: "/admin", icon: FiHome },
  { label: "Projects", href: "/admin/projects", icon: FiFolder },
  { label: "Add Project", href: "/admin/projects/new", icon: FiPlusCircle },
  { label: "Categories", href: "/admin/categories", icon: FiTag },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
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
        className={`fixed overflow-y-scroll top-0 left-0 h-full w-64 bg-white border-r border-line z-40 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-line">
          <Link href="/admin">
            <Image
              src="/logo-light.png"
              alt="AHN"
              width={200}
              height={60}
              loading="eager"
              className="w-auto h-auto"
            />
          </Link>

          <button
            onClick={onClose}
            className="md:hidden text-slate cursor-pointer"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
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
                    ? "border border-line text-ink"
                    : "text-slate hover:bg-surface hover:text-ink"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-5 bg-primary rounded-r-sm" />
                )}

                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User + Logout */}
        <div className="p-3 border-t border-line">
          {user && (
            <div className="mb-3 px-2">
              <Paragraph className="text-ink">{user?.name}</Paragraph>
              <Span className="text-slate">
                {user?.email}
              </Span>
            </div>
          )}

          <Button
            type="button"
            variant="danger"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3"
          >
            <FiLogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

