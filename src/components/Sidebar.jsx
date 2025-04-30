"use client";

import { useState } from "react";
import { ChartColumn, FileChartLine, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <ChartColumn size={28} />, label: "Dashboard" },
    { href: "/case", icon: <FileChartLine size={28} />, label: "Case" },
  ];
  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-navy text-white p-4 flex justify-between md:hidden">
        <span className="font-bold text-lg">My App</span>
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-24 bg-navy text-white transform transition-transform duration-300
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col`}
      >
        <div className="p-6 font-bold text-xl border-b border-white">Menu</div>
        <nav className="flex flex-col space-y-3 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded transition 
            ${
              pathname === item.href
                ? "bg-white text-navy font-semibold"
                : "hover:bg-white hover:text-navy text-white"
            }`}
            >
              {item.icon}
           
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
