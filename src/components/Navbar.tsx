"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Use usePathname() instead of useRouter()
  const basePath = process.env.NODE_ENV === "production" ? "/personal-portfolio" : "";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Fix navigation check for static sites
  const isActive = (path: string) => {
    return pathname === path || pathname === `${basePath}${path}`;
  };

  // Ensure links are properly formatted for Firebase Hosting
  const getHref = (path: string) => {
    return `${basePath}${path}`;
  };

  // Handle navigation manually to force reload if needed
  const handleNavigation = (href: string) => {
    window.location.href = href;
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={basePath || "/"} className="text-2xl font-bold text-gray-800 dark:text-white">
            AF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(getHref(link.href))}
                className={`${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                } transition-colors`}
              >
                {link.label}
              </button>
            ))}
            <button type="button" onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              {isDarkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(getHref(link.href))}
                  className={`block py-2 ${
                    isActive(link.href) ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
