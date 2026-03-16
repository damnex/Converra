import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Rocket,
  Layers,
  Sparkles,
  Users,
  Linkedin,
  Twitter,
  Mail,
  Target,
  Globe,
  CheckCircle,
  MessageCircle,
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

      {/* 1. Hero — same blue wave as home */}
      <section className="about-hero-wave relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-[#3399FF]/20 blur-[100px] animate-float" />
        <div className="absolute bottom-32 right-[15%] w-96 h-96 rounded-full bg-[#3399FF]/12 blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3399FF]/10 blur-[150px]" />
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

      {/* 2. Who We Are — full content */}
      <section id="who-we-are" className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Who We Are</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Converra Growth Partners</strong> is a revenue-focused growth partner for ambitious businesses. We work alongside founders and leadership teams to strengthen sales execution and unlock new revenue opportunities without increasing operational complexity.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Our focus is simple: help companies expand their market reach, generate meaningful conversations with potential clients, and convert opportunities into measurable business outcomes.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Rather than functioning as a traditional sales outsourcing firm, Converra operates as an extended revenue arm that collaborates closely with internal teams to drive consistent pipeline movement and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. What We Do — full content + role list */}
      <section id="what-we-do" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A2540] via-[#0f2744] to-[#0A2540]">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What We Do</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Many companies have strong products, capable teams, and active marketing efforts — yet revenue growth often remains inconsistent or non-scalable for longer periods.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              The reason is simple: revenue execution requires continuous focus, additional revenue flow, structured outreach, and disciplined pipeline ownership.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Converra supports businesses by creating a dedicated revenue lane for their product or service. We allocate a product-focused sales professional or a small team that deeply understands your offering and represents it in the market. This dedicated resource operates as an extension of your business, engaging prospects, initiating conversations, and managing opportunities from outreach to revenue.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 mb-8">
              <h3 className="font-semibold text-white mb-4">Our role includes:</h3>
              <ul className="space-y-3">
                {[
                  "Generating and identifying relevant prospects",
                  "Representing your product with deep understanding",
                  "Creating and managing a dedicated sales pipeline",
                  "Driving consistent outreach and follow-ups",
                  "Converting opportunities into measurable revenue",
                ].map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-[#3399FF] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              While your internal team continues to handle core relationships, product development, and strategic sales conversations, Converra ensures that new opportunities are continuously entering and moving through the pipeline. This structured approach allows businesses to expand their revenue capacity without constantly building or managing additional internal sales teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Company Stats — animated counters */}
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

      {/* 5. Timeline / Journey */}
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

      {/* 6. Our Approach */}
      <section id="our-approach" className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Our Approach</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              At Converra, we believe revenue growth should not depend solely on internal bandwidth or continuous hiring cycles.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Our approach begins with deeply understanding your product, value proposition, and ideal customer profile. This allows us to represent your offering in the market with clarity and confidence.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Once aligned, Converra assigns a dedicated sales professional or team that focuses specifically on your product. These resources operate as an extension of your business, building product-level expertise and engaging the right prospects through structured outreach.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We then establish a separate and focused pipeline for your offering, where conversations, opportunities, and follow-ups are managed consistently to ensure momentum across the sales process.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              While your internal team continues to manage strategic relationships and core deals, Converra focuses on expanding outreach, generating opportunities, and driving additional revenue conversations in parallel. This approach creates a structured and scalable revenue channel, enabling businesses to grow without constantly expanding their internal sales teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. How we work — expanded steps */}
      <section id="how-we-work" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A2540] via-[#0f2744] to-[#0A2540]">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            How we work
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Understand & align", desc: "Deep dive into your product, audience, and revenue objectives so every initiative reflects your brand." },
              { icon: Users, title: "Dedicated ownership", desc: "A trained sales professional is allocated exclusively to your business for focused execution." },
              { icon: MessageCircle, title: "Structured execution", desc: "End-to-end outreach, nurturing, and pipeline progression through proven sales practices." },
              { icon: TrendingUp, title: "Performance-led growth", desc: "Outcomes-based engagement with accountability and sustained revenue expansion." },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-[#3399FF]/30 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3399FF]/20 text-[#3399FF] mb-4">
                    <StepIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-3 md:gap-6"
          >
            {[
              { icon: Lightbulb, label: "Idea" },
              { icon: Layers, label: "Design" },
              { icon: Rocket, label: "Development" },
              { icon: Target, label: "Launch" },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-3 md:gap-6">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                    <StepIcon className="h-5 w-5 text-[#3399FF]" />
                    <span className="text-sm font-medium text-slate-300">{step.label}</span>
                  </div>
                  {i < 3 && <ArrowRight className="h-5 w-5 text-[#3399FF]/60 shrink-0" />}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 8. Why Converra Growth Partners */}
      <section id="why-converra" className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Why Converra Growth Partners</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Businesses partner with Converra when they want to strengthen their revenue execution without constantly expanding their internal sales teams. Our model helps organizations create an additional revenue lane where dedicated sales professionals represent their product, initiate meaningful conversations, and manage opportunities through a structured pipeline.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 mb-6">
              <h3 className="font-semibold text-white mb-4">Companies work with Converra when they want to:</h3>
              <ul className="space-y-3">
                {[
                  "Expand their market outreach and prospect engagement",
                  "Create a dedicated pipeline for new opportunities",
                  "Introduce product-focused sales expertise without additional hiring cycles",
                  "Strengthen consistency in outreach and follow-ups",
                  "Generate additional revenue opportunities alongside their internal teams",
                ].map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-[#3399FF] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              By creating a focused and disciplined revenue channel, Converra enables businesses to scale their growth efforts while maintaining clarity and control over their core operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. Our Philosophy */}
      <section id="our-philosophy" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A2540] via-[#0f2744] to-[#0A2540]">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Our Philosophy</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              At Converra, we believe revenue growth is not simply about increasing activity — it is about creating the right structure for consistent execution.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our philosophy is simple: when meaningful conversations happen consistently, opportunities are nurtured properly, and pipeline movement is structured, revenue growth becomes far more predictable and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 10. Our Tagline */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-padding max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#3399FF]/30 bg-[#3399FF]/10 backdrop-blur-xl p-10 md:p-12"
          >
            <div className="flex justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-[#3399FF]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Tagline</h2>
            <p className="text-xl md:text-2xl font-semibold text-[#3399FF] mb-4">Conversation. Conviction. Conversion.</p>
            <p className="text-slate-300 leading-relaxed">
              At Converra, growth begins with meaningful conversations, builds through conviction, and ultimately delivers measurable conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 11. Team — cards with placeholder, name, role, social */}
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3399FF]/40 to-[#0F7F91]/40 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
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

      {/* 12. CTA — blue gradient, primary message, button */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3399FF]/15 via-[#0F7F91]/10 to-[#3399FF]/15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3399FF]/15 rounded-full blur-[120px]" />
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
