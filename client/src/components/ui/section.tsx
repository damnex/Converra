import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "navy";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-slate-50",
    navy: "bg-slate-900 text-white",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "section-padding overflow-hidden relative",
        bgClasses[background],
        className
      )}
    >
      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Optional geometric background decoration for visual interest */}
      {background === 'navy' && (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
      )}
    </section>
  );
}
