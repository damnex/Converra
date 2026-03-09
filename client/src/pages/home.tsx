import { Navbar } from "@/components/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ChartVisual } from "@/components/chart-visual";
import { DashboardMock } from "@/components/dashboard-mock";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  Zap,
  ShieldCheck,
  LayoutGrid,
  MessageSquare,
  Star,
  DollarSign,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { openBookStrategyCall } from "@/lib/links";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* HERO — premium futuristic: deep navy, diagonal gradient wave, radial glows, vertical streaks */}
      <section
        id="hero"
        className="hero-futuristic relative min-h-screen flex items-center overflow-hidden text-white"
      >
        {/* Large radial gradient blurs – soft light beam feel */}
        <div className="absolute inset-0 z-0">
          <div
            className="hero-glow-orb w-[min(100vw,800px)] h-[500px] -top-40 -right-20 opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.35) 0%, transparent 70%)",
            }}
          />
          <div
            className="hero-glow-orb w-[600px] h-[400px] top-1/2 -left-32 -translate-y-1/2 opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="hero-glow-orb w-[500px] h-[500px] bottom-0 right-1/4 opacity-35"
            style={{
              background: "radial-gradient(ellipse at center, rgba(20, 184, 166, 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-padding relative z-10 w-full pt-24 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <p className="text-sm font-medium text-cyan-400/90 tracking-wide mb-4">
                Conversation. Conviction. Conversion.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Accepting New Partners for Q4
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white mb-6 drop-shadow-sm">
                Strategic Revenue Partners for Growth-Focused Companies
              </h1>

              <p className="text-lg md:text-xl text-slate-300/95 leading-relaxed mb-10">
                We help SaaS and technology businesses turn warm leads into predictable revenue through dedicated sales execution aligned with business outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  onClick={() => openBookStrategyCall(() => scrollTo("footer-contact"))}
                  className="h-12 px-8 text-base bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("product-preview")}
                  className="h-12 px-8 text-base border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  View Demo
                </Button>
              </div>

              <p className="text-sm text-slate-400/90">
                Trusted by growing SaaS & tech teams to accelerate revenue without expanding internal sales bandwidth.
              </p>
            </motion.div>

            {/* Floating product preview card – glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-2 shadow-2xl shadow-black/50"
              >
                <ChartVisual />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES — glassmorphism grid */}
      <Section
        id="features"
        className="relative bg-gradient-to-b from-black via-slate-950 to-slate-950 text-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why partner with Converra
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Performance-driven revenue partnership built for scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Strategic alignment",
                desc: "Founders and leadership stay focused on product innovation and strategic growth.",
              },
              {
                icon: Users,
                title: "No bandwidth strain",
                desc: "Internal teams operate without added pressure or capacity constraints.",
              },
              {
                icon: Zap,
                title: "Dedicated sales support",
                desc: "Drive additional revenue streams with a dedicated revenue partner.",
              },
              {
                icon: MessageSquare,
                title: "Pipeline progression",
                desc: "Consistent prospect engagement and steady pipeline movement.",
              },
              {
                icon: BarChart3,
                title: "Measurable outcomes",
                desc: "Performance-aligned execution focused on accountability and results.",
              },
              {
                icon: LayoutGrid,
                title: "Scale without hiring",
                desc: "Scalable growth without the cost and complexity of constant hiring.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/20 hover:shadow-teal-500/10 hover:border-teal-500/20 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* PROBLEM SECTION */}
      <Section
        id="problem"
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revenue Shouldn’t Stall Because Sales Bandwidth Is Limited
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Many high-potential SaaS and tech companies struggle to scale revenue consistently, not because of product limitations, but due to gaps in sales execution.
          </p>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6 md:p-8 shadow-xl shadow-black/40">
            <div className="font-semibold text-white mb-4">Common challenges include:</div>
            <ul className="space-y-3 text-slate-200">
              {[
                "Warm leads not converting consistently",
                "Founder-dependent sales cycles",
                "High customer acquisition costs",
                "Sales teams stretched across too many priorities",
                "Lack of focused follow-ups and pipeline movement",
                "Difficulty expanding into new markets",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-slate-300 mt-8">
            Without structured and dedicated sales execution, growth becomes unpredictable and opportunities slip through the cracks.
          </p>
        </motion.div>
      </Section>

      {/* SOLUTION SECTION — 2-col: headline + 3 feature blocks | 3 metric cards */}
      <Section
        id="solution"
        className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        {/* Soft gradient glow behind cards */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[400px] -translate-y-1/2 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left: headline, short description, 3 feature blocks */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                A Performance-Driven Revenue Partnership Model
              </h2>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                Converra acts as your extended revenue arm. We align with your goals, represent your product, and drive growth through dedicated sales execution — without adding internal complexity.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: TrendingUp,
                    title: "Revenue Expansion",
                    desc: "Dedicated sales support and pipeline progression so you unlock additional revenue streams.",
                  },
                  {
                    icon: Zap,
                    title: "Operational Efficiency",
                    desc: "Internal teams stay focused; no added pressure or bandwidth strain.",
                  },
                  {
                    icon: Target,
                    title: "Predictable Growth",
                    desc: "Performance-aligned execution and measurable outcomes, without constant hiring.",
                  },
                ].map((block, i) => (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                      <block.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{block.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{block.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-400 text-sm pt-2">
                Your team drives core sales. <span className="text-white font-medium">Converra enables the next phase of scale.</span>
              </p>
            </div>

            {/* Right: 3 metric cards — glass, cyan glow, hover, floating */}
            <div className="space-y-4 lg:pt-0">
              {[
                {
                  icon: TrendingUp,
                  value: 142,
                  suffix: "%",
                  label: "Average revenue uplift for partners",
                },
                {
                  icon: BarChart3,
                  value: 3.2,
                  suffix: "x",
                  label: "Pipeline consistency improvement",
                },
                {
                  icon: Users,
                  value: 98,
                  suffix: "%",
                  label: "Client satisfaction rate",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-5 shadow-xl shadow-black/30 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/15 hover:shadow-xl card-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 mb-3">
                      <card.icon className="h-4 w-4" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                      <AnimatedCounter value={card.value} suffix={card.suffix} duration={2} />
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{card.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* PRODUCT PREVIEW — mock UI / dashboard */}
      <Section
        id="product-preview"
        className="relative overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto min-w-0"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See the platform in action
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Real-time revenue and pipeline visibility. No spreadsheets, no guesswork.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DashboardMock />
          </motion.div>
        </motion.div>
      </Section>

      {/* HOW IT WORKS — 4 steps horizontal */}
      <Section
        id="process"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How we drive predictable revenue growth
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Four steps from alignment to scale.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-500/50 via-teal-500 to-teal-500/50 z-0" />

            {[
              {
                step: "01",
                title: "Understand & Align",
                desc: "Deep dive into your product, audience, and revenue objectives so every initiative reflects your brand.",
                icon: Target,
              },
              {
                step: "02",
                title: "Dedicated ownership",
                desc: "A trained sales professional is allocated exclusively to your business for focused execution.",
                icon: Users,
              },
              {
                step: "03",
                title: "Structured execution",
                desc: "End-to-end outreach, nurturing, and pipeline progression through proven sales practices.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Performance-led growth",
                desc: "Outcomes-based engagement with accountability and sustained revenue expansion.",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative z-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center hover:border-teal-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="flex justify-center mb-3">
                  <item.icon className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* RESULTS — headline, large metrics, outcome cards */}
      <Section
        id="results"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden"
      >
        {/* Subtle gradient glow behind metrics */}
        <div className="results-metrics-glow absolute inset-0 pointer-events-none z-0" aria-hidden />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Turning Opportunities Into Measurable Business Outcomes
          </h2>

          {/* Large metric cards — numbers dominant */}
          <div className="grid gap-6 sm:grid-cols-3 mb-20">
            {[
              { icon: TrendingUp, label: "Lead-to-Close Conversion", value: 32, suffix: "%", prefix: "+" },
              { icon: BarChart3, label: "Pipeline Consistency", value: 11, suffix: "x" },
              { icon: Users, label: "Warm Leads Activated", value: 3, suffix: "x" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="results-metric-card flex flex-col items-center justify-center text-center px-6 py-10 md:py-14"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                    duration={2}
                  />
                </div>
                <div className="text-slate-300 font-medium mt-2 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Outcome cards — glass, icon, title, short description */}
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "Revenue Performance",
                description: "Higher conversion of qualified leads into paying customers and additional revenue channels.",
              },
              {
                icon: BarChart3,
                title: "Pipeline Consistency",
                description: "Stronger, well-managed pipelines with consistent opportunity flow and execution discipline.",
              },
              {
                icon: Globe,
                title: "Market Expansion",
                description: "Expanded market reach and access to new customer segments without stretching internal teams.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="results-outcome-card p-6 md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 mb-4">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* 🟫 IDEAL CLIENTS SECTION */}
      <Section
        id="ideal-clients"
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 !pb-8 md:!pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who We Work Best With
          </h2>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6 md:p-8">
            <div className="font-semibold text-white mb-4">Converra partners with:</div>
            <ul className="space-y-3 text-slate-200">
              {[
                "SaaS companies scaling beyond early growth stages",
                "Technology firms expanding into new markets",
                "Startups with strong products but limited sales bandwidth",
                "Businesses seeking performance-driven revenue partnerships",
                "Companies looking to unlock additional revenue channels",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg text-slate-300 mt-8">
            If growth is your priority but internal sales capacity is limited, Converra is built for you.
          </p>
        </motion.div>
      </Section>

      {/* STATS — animated counters */}
      <Section
        id="stats"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 !pt-8 md:!pt-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={12} suffix="+" duration={2} />
              </div>
              <div className="text-slate-400 font-medium">partners and growing</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={142} suffix="%" duration={2} />
              </div>
              <div className="text-slate-400 font-medium">Avg. revenue uplift</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={98} suffix="%" duration={2} />
              </div>
              <div className="text-slate-400 font-medium">Client satisfaction</div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What partners say about us
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Real results from teams who scaled revenue with Converra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Converra completely transformed our outbound motion. We went from booking 5 demos a month to over 40 within 90 days.",
                name: "Sarah Chen",
                role: "CEO, TechFlow",
                stars: 5,
              },
              {
                quote: "Finally, a revenue partner that acts like an extension of our team. Transparent, accountable, and results-driven.",
                name: "Marcus Webb",
                role: "VP Sales, ScaleOps",
                stars: 5,
              },
              {
                quote: "We needed to scale without hiring. Converra gave us dedicated execution and real pipeline visibility. Game changer.",
                name: "Priya Sharma",
                role: "Founder, DataStack",
                stars: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/20 hover:border-teal-500/20 hover:shadow-teal-500/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA SECTION — gradient button with hover glow */}
      <Section
        id="cta"
        className="relative overflow-hidden bg-slate-950 text-white !py-12 md:!py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 via-transparent to-slate-950" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto text-center rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm px-6 py-10 sm:px-10 sm:py-12 shadow-xl shadow-black/30"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Let’s build your next revenue growth phase
          </h2>
          <p className="text-slate-300 mb-6 sm:mb-8 max-w-lg mx-auto">
            If your business is ready to scale revenue through focused sales execution and performance-driven partnerships, we’re ready to work with you.
          </p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => openBookStrategyCall(() => scrollTo("footer-contact"))}
              className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 border-0"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>

          <p className="text-slate-400 text-sm mt-4">
            Discuss your growth goals and explore how Converra can support your revenue expansion.
          </p>
        </motion.div>
      </Section>

      {/* FOOTER — Product, Company, Resources, Legal */}
      <footer id="footer-contact" className="bg-black border-t border-white/10 py-16 text-slate-400">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.jpeg" alt="Converra" className="h-8 w-auto rounded-lg" />
                <span className="text-lg font-bold text-white uppercase tracking-tight">Converra</span>
              </div>
              <p className="text-sm text-slate-400 mb-2 max-w-xs">
                Strategic Revenue Partnerships for Growth-Focused Businesses
              </p>
              <p className="text-teal-400 text-sm font-medium">Conversation. Conviction. Conversion.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#product-preview" className="hover:text-teal-400 transition-colors">Demo</a></li>
                <li><a href="#process" className="hover:text-teal-400 transition-colors">How it works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#solution" className="hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                <li><a href="#footer-contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Testimonials</a></li>
                <li><a href="#results" className="hover:text-teal-400 transition-colors">Results</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Contact form row */}
          <div className="mb-14">
            <h4 className="font-semibold text-white mb-4">Get in touch</h4>
            <ContactForm />
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Converra Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/converra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
