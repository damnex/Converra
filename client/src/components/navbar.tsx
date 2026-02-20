import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className={`text-xl font-bold font-display tracking-wide uppercase ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            CONVERRA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Problem", "Solution", "Process", "Results", "Clients", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Contact" ? "#contact" : `#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            onClick={scrollToContact}
            className="bg-navy-700 hover:bg-navy-600 text-white font-semibold shadow-lg shadow-navy-900/10 hover:shadow-navy-900/20 transition-all"
          >
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-900" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {["Problem", "Solution", "Process", "Results", "Clients", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={item === "Contact" ? "#contact" : `#${item.toLowerCase()}`}
                    className="text-lg font-medium text-slate-900"
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  onClick={scrollToContact}
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
