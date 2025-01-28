import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Assignments", path: "/assignments" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center h-full py-2">
                <Link to="/" className="h-full">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-full object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link ${
                      isActive(item.path) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
                <ThemeToggle />
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white/10"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg ${
                    isActive(item.path)
                      ? "bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
