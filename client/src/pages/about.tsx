import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Lightbulb,
  Cpu,
  TrendingUp,
  Shield,
  ArrowRight,
  Rocket,
  Layers,
  Code2,
  Cloud,
  Brain,
  Server,
  Sparkles,
  Users,
  Linkedin,
  Twitter,
  Mail,
  Target,
  Palette,
  Terminal,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { openBookStrategyCall } from "@/lib/links";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById("footer-contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A2540] text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* 1. Hero — gradient, floating shapes, tagline */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#1e3a5f] via-40% to-[#312e81] to-80%" />
        <div className="about-hero-mesh absolute inset-0 opacity-40" />
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-[#3399FF]/20 blur-[100px] animate-float" />
        <div className="absolute bottom-32 right-[15%] w-96 h-96 rounded-full bg-[#8B5CF6]/15 blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3399FF]/10 blur-[150px]" />
        {/* Floating tech icons in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[Code2, Layers, Cpu, Cloud].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-white/5"
              style={{
                left: `${15 + i * 22}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="h-16 w-16 md:h-24 md:w-24" />
            </motion.div>
          ))}
        </div>
        <div className="container-padding relative z-10 text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#3399FF] font-medium tracking-widest uppercase text-sm mb-4"
          >
            Who we are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            About Converra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Your revenue-focused growth partner. We help ambitious businesses scale through dedicated sales execution and measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision — split layout, glass cards, icons */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mission & Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Converra operates as an extended revenue arm—we align with your goals, represent your product, and drive growth through dedicated sales execution without adding operational complexity.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When meaningful conversations happen consistently and pipeline movement is structured, revenue growth becomes predictable and scalable.
              </p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Lightbulb, label: "Innovation", desc: "New ways to grow revenue" },
                { icon: Cpu, label: "Technology", desc: "Data-driven execution" },
                { icon: TrendingUp, label: "Growth", desc: "Scalable outcomes" },
                { icon: Shield, label: "Security", desc: "Trusted partnership" },
              ].map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={item}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 hover:border-[#3399FF]/30 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3399FF]/20 text-[#3399FF] mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{label}</h3>
                  <p className="text-sm text-slate-400">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Company Stats — animated counters */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A2540] via-[#0f2744] to-[#0A2540]">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Our impact in numbers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Rocket, value: 50, suffix: "+", label: "Projects Completed" },
              { icon: Users, value: 120, suffix: "+", label: "Clients Served" },
              { icon: Layers, value: 15, suffix: "+", label: "Technologies Used" },
              { icon: Target, value: 12, suffix: "", label: "Countries Reached" },
            ].map(({ icon: Icon, value, suffix, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-[#3399FF]/30 hover:shadow-[#3399FF]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={value} suffix={suffix} duration={2} />
                </div>
                <p className="text-slate-400 font-medium mt-2 text-sm">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Timeline / Journey */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-20"
          >
            Our journey
          </motion.h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3399FF]/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8 md:gap-4"
            >
              {[
                { year: "Start", title: "Company founded", icon: Sparkles },
                { year: "Growth", title: "Major milestones", icon: TrendingUp },
                { year: "Product", title: "Product launches", icon: Rocket },
                { year: "Today", title: "Global reach", icon: Globe },
              ].map(({ year, title, icon: Icon }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#3399FF]/40 bg-[#0A2540] text-[#3399FF] mb-4 relative z-10">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="text-[#3399FF] font-semibold text-sm mb-1">{year}</span>
                  <p className="text-white font-medium">{title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Technology Stack — icon grid with hover glow */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A2540] via-[#0f2744] to-[#0A2540]">
        <div className="container-padding max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Technology & tools
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
          >
            {[
              { icon: Layers, label: "React" },
              { icon: Code2, label: "Next.js" },
              { icon: Server, label: "Node.js" },
              { icon: Terminal, label: "Python" },
              { icon: Brain, label: "AI Tools" },
              { icon: Cloud, label: "Cloud" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-[#3399FF]/40 hover:shadow-[0_0_30px_rgba(51,153,255,0.2)] transition-all duration-300"
              >
                <Icon className="h-10 w-10 text-[#3399FF] mb-2" />
                <span className="text-sm font-medium text-slate-300">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Process Infographic — Idea → Design → Development → Launch */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-20"
          >
            How we work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
          >
            {[
              { icon: Lightbulb, label: "Idea" },
              { icon: Palette, label: "Design" },
              { icon: Terminal, label: "Development" },
              { icon: Rocket, label: "Launch" },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
              <div key={step.label} className="flex flex-col md:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 w-full md:w-auto hover:border-[#3399FF]/30 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3399FF]/20 text-[#3399FF] mb-3">
                    <StepIcon className="h-7 w-7" />
                  </div>
                  <span className="font-semibold text-white">{step.label}</span>
                </motion.div>
                {i < 3 && (
                  <div className="hidden md:flex flex-1 items-center justify-center py-4">
                    <ArrowRight className="h-6 w-6 text-[#3399FF]/60" />
                  </div>
                )}
              </div>
            );
            })}
          </motion.div>
        </div>
      </section>

      {/* 7. Team — cards with placeholder, name, role, social */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A2540] via-[#0f2744] to-[#0A2540]">
        <div className="container-padding max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          >
            The team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-center mb-16 max-w-xl mx-auto"
          >
            People behind Converra’s growth partnership model.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Leadership", role: "Strategy & growth" },
              { name: "Revenue team", role: "Sales execution" },
              { name: "Operations", role: "Pipeline & delivery" },
              { name: "Partnerships", role: "Client success" },
            ].map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center hover:border-[#3399FF]/30 hover:shadow-xl hover:shadow-[#3399FF]/10 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3399FF]/30 to-[#8B5CF6]/30 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-slate-400 hover:text-[#3399FF] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-[#3399FF] transition-colors" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-[#3399FF] transition-colors" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA — gradient, primary message, button */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3399FF]/20 via-[#8B5CF6]/20 to-[#3399FF]/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B5CF6]/20 rounded-full blur-[120px]" />
        <div className="container-padding relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Build your next digital experience with Converra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg mb-10"
          >
            Start your project with a revenue partner that scales with you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => openBookStrategyCall(scrollToContact)}
              className="h-14 px-10 text-lg font-semibold bg-[#3399FF] hover:bg-[#1f7fe6] text-white shadow-lg shadow-[#3399FF]/30 hover:shadow-[#3399FF]/50 transition-all duration-300 rounded-xl"
            >
              Start your project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-[#071c33] border-t border-white/10 py-12">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="Converra" className="h-8 w-auto rounded-lg" />
              <span className="text-lg font-bold text-white uppercase tracking-tight">Converra</span>
            </div>
            <Link href="/" className="text-slate-400 hover:text-[#3399FF] transition-colors text-sm">
              Back to home
            </Link>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Converra Growth Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
