import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { openBookStrategyCall } from "@/lib/links";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const initial: "light" | "dark" =
      saved === "dark" || saved === "light" ? (saved as any) : prefersDark ? "dark" : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const scrollToContact = () => {
    const element = document.getElementById("footer-contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/70 backdrop-blur-md shadow-sm py-4 border-b border-gray-100 dark:border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span
            className={`text-xl font-bold font-display tracking-wide uppercase ${
              isScrolled ? "text-slate-900 dark:text-white" : "text-white"
            }`}
          >
            CONVERRA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Problem", "Solution", "Process", "Results", "Ideal Clients"].map((item) => (
            <a
              key={item}
              href={item === "Ideal Clients" ? "#ideal-clients" : `#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-slate-600 dark:text-slate-200 hover:text-teal-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={isScrolled ? "text-slate-700 dark:text-slate-200" : "text-white"}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            onClick={() => openBookStrategyCall(scrollToContact)}
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all"
          >
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={`h-6 w-6 ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-3 text-left text-lg font-medium text-slate-900"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  Toggle theme
                </button>

                {["Problem", "Solution", "Process", "Results", "Ideal Clients"].map((item) => (
                  <a
                    key={item}
                    href={item === "Ideal Clients" ? "#ideal-clients" : `#${item.toLowerCase()}`}
                    className="text-lg font-medium text-slate-900"
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  onClick={() => openBookStrategyCall(scrollToContact)}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Book Strategy Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
