import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { openBookStrategyCall } from "@/lib/links";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20 py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo — logo only, larger */}
        <Link href="/" className="flex items-center shrink-0 group cursor-pointer" aria-label="Converra home">
          <img
            src="/logo.jpeg"
            alt="Converra"
            className="h-14 w-auto rounded-xl object-contain md:h-16 lg:h-[4.75rem] transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu - Stripe/Vercel style */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "/#features" },
            { label: "About", href: "/about" },
            { label: "Solution", href: "/#solution" },
            { label: "How It Works", href: "/#process" },
            { label: "Contact", href: "/#footer-contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-slate-600 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => openBookStrategyCall(scrollToContact)}
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300"
          >
            BOOK A STRATEGY CALL
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
                {["Features", "About", "Solution", "How It Works", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={
                      item === "Features"
                        ? "/#features"
                        : item === "About"
                        ? "/about"
                        : item === "Solution"
                        ? "/#solution"
                        : item === "How It Works"
                        ? "/#process"
                        : "/#footer-contact"
                    }
                    className="text-lg font-medium text-slate-900 dark:text-slate-100"
                  >
                    {item}
                  </a>
                ))}
                <Button
                  onClick={() => openBookStrategyCall(scrollToContact)}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold"
                >
                  BOOK A STRATEGY CALL
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
