import { Navbar } from "@/components/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ChartVisual } from "@/components/chart-visual";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { openBookStrategyCall } from "@/lib/links";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 🟦 HERO SECTION */}
      <Section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900 text-white"
      >
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="absolute -bottom-28 -left-28 h-[420px] w-[420px] rounded-full bg-teal-500/15 blur-[110px]" />
        </div>

        <div className="container-padding relative z-10 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <img
                  src="/logo.jpeg"
                  alt="CONVERRA GROWTH PARTNERS logo"
                  className="h-12 w-auto rounded-xl object-contain md:h-14"
                />
              </div>

              <p className="text-sm font-medium text-teal-300 tracking-wide mb-4">
                Conversation. Conviction. Conversion.
              </p>

              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-teal-200 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  🟢 Accepting New Partners for Q4
                </div>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] text-white mb-6">
                Strategic Revenue Partners for Growth-Focused Companies
              </h1>

              <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-8">
                We help SaaS and technology businesses turn warm leads into predictable revenue through dedicated sales execution aligned with business outcomes.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
                <Button
                  onClick={() => openBookStrategyCall(() => scrollTo("footer-contact"))}
                  className="h-12 px-6 text-base bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-lg shadow-teal-500/25"
                >
                  Book Strategy Call
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("problem")}
                  className="h-12 px-6 text-base border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>

              <div className="text-sm text-slate-300">
                Trusted by growing SaaS/Tech teams to accelerate revenue without expanding internal sales bandwidth.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <ChartVisual />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 🟥 PROBLEM SECTION */}
      <Section id="problem" className="bg-red-50/70 dark:bg-red-950/20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
            Revenue Shouldn’t Stall Because Sales Bandwidth Is Limited
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Many high-potential SaaS and tech companies struggle to scale revenue consistently, not because of product limitations, but due to gaps in sales execution.
          </p>

          <div className="rounded-2xl border border-red-200/60 dark:border-red-900/40 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-6 md:p-8">
            <div className="font-semibold text-slate-800 dark:text-slate-100 mb-4">Common challenges include:</div>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
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

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-8">
            Without structured and dedicated sales execution, growth becomes unpredictable and opportunities slip through the cracks.
          </p>
        </motion.div>
      </Section>

      {/* 🟩 SOLUTION SECTION */}
      <Section id="solution" className="bg-emerald-50/70 dark:bg-emerald-950/15">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
            A Performance-Driven Revenue Partnership Model
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Converra acts as an extended revenue arm for your business.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            We collaborate with your team to represent your product, engage qualified prospects, and drive revenue growth through dedicated sales execution — aligned with your business goals and market positioning.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed">
              <p>
                For many growing startups and technology companies, scaling revenue internally becomes a challenge. Founders often find themselves deeply involved in sales operations — hiring teams, managing attrition, monitoring pipelines, and constantly pushing for conversions.
              </p>
              <p>
                While sales is critical, excessive founder involvement in day-to-day revenue operations can divert attention from what truly drives long-term success: building the product, improving customer experience, and strengthening core operations.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">Converra bridges this gap.</p>
              <p>
                Our partnership model is designed to support your existing sales efforts while enabling additional revenue expansion without increasing internal complexity.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-6 md:p-8">
              <div className="font-semibold text-slate-800 dark:text-slate-100 mb-4">Our approach ensures:</div>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                {[
                  "Founders and leadership stay focused on product innovation and strategic growth",
                  "Internal teams operate without added pressure or bandwidth constraints",
                  "Dedicated sales support to drive additional revenue streams",
                  "Consistent prospect engagement and pipeline progression",
                  "Performance-aligned execution focused on measurable outcomes",
                  "Scalable growth without the challenges of constant hiring and sales team management",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 space-y-2 text-slate-700 dark:text-slate-200">
            <p>Your internal team continues to drive core sales.</p>
            <p className="font-semibold text-slate-900 dark:text-white">Converra enables the next phase of revenue scale.</p>
            <p>You focus on building the business.</p>
            <p>We focus on expanding its revenue potential.</p>
          </div>
        </motion.div>
      </Section>

      {/* 🟨 PROCESS SECTION */}
      <Section id="process" className="bg-amber-50/70 dark:bg-amber-950/15">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-10">
            How We Drive Predictable Revenue Growth
          </h2>

          <div className="space-y-6">
            {[
              {
                num: "1️⃣",
                title: "Understand & Align",
                desc: "We begin by developing a deep understanding of your product, target audience, market positioning, and revenue objectives. This alignment ensures every sales initiative reflects your brand value and speaks to the right customers.",
              },
              {
                num: "2️⃣",
                title: "Dedicated Sales Ownership",
                desc: "A trained sales professional is exclusively allocated to your business to represent your offerings in the market. This dedicated ownership ensures focused attention, consistent follow-ups, personalized prospect engagement, and stronger relationship building with potential clients.",
              },
              {
                num: "3️⃣",
                title: "Structured Sales Execution",
                desc: "Our team manages end-to-end outreach — initiating conversations, nurturing prospects, addressing objections, and driving steady pipeline progression through disciplined execution and proven sales practices.",
              },
              {
                num: "4️⃣",
                title: "Revenue-Focused Collaboration",
                desc: "We work closely with founders, leadership teams, and internal sales units to ensure our efforts complement existing strategies while unlocking additional revenue channels without disrupting internal workflows.",
              },
              {
                num: "5️⃣",
                title: "Campaign & Lead Generation Support",
                desc: "When required, Converra also supports targeted marketing initiatives such as webinar campaigns, outreach programs, and multi-channel lead generation activities. This enables businesses to access new prospect pools while ensuring a consistent flow of qualified opportunities into the sales pipeline.",
              },
              {
                num: "6️⃣",
                title: "Performance-Led Growth",
                desc: "Our engagement model is aligned with measurable outcomes — ensuring accountability, sustained momentum, and mutually beneficial revenue expansion.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-amber-200/60 dark:border-amber-900/40 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl md:text-3xl leading-none">{step.num}</div>
                  <div className="min-w-0">
                    <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </div>
                    <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      {step.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* 🟪 RESULTS SECTION */}
      <Section id="results" className="bg-purple-50/70 dark:bg-purple-950/15">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
            Turning Opportunities Into Measurable Business Outcomes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Converra partnerships are built on accountability, execution discipline, and sustained revenue impact. Our focus goes beyond supporting sales activities — we work alongside businesses to create tangible growth outcomes that strengthen their market position.
          </p>

          <div className="rounded-2xl border border-purple-200/60 dark:border-purple-900/40 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-6 md:p-8">
            <div className="font-semibold text-slate-800 dark:text-slate-100 mb-4">
              Organizations partnering with Converra experience:
            </div>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              {[
                "📈 Higher conversion of qualified leads into paying customers",
                "📈 Stronger, well-managed pipelines with consistent opportunity flow",
                "📈 Expanded market reach and access to new customer segments",
                "📈 Reduced pressure on internal teams and leadership bandwidth",
                "📈 Improved sales consistency through dedicated execution",
                "📈 Additional revenue channels that accelerate overall business growth",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-purple-700 dark:text-purple-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-8">
            We don’t operate as an external vendor. We function as a committed revenue partner focused on meaningful business results.
          </p>
        </motion.div>
      </Section>

      {/* 🟫 IDEAL CLIENTS SECTION */}
      <Section id="ideal-clients" className="bg-amber-100/70 dark:bg-[#2a1c0a]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
            Who We Work Best With
          </h2>
          <div className="rounded-2xl border border-amber-300/50 dark:border-amber-900/40 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-6 md:p-8">
            <div className="font-semibold text-slate-800 dark:text-slate-100 mb-4">Converra partners with:</div>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              {[
                "SaaS companies scaling beyond early growth stages",
                "Technology firms expanding into new markets",
                "Startups with strong products but limited sales bandwidth",
                "Businesses seeking performance-driven revenue partnerships",
                "Companies looking to unlock additional revenue channels",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-700 dark:bg-amber-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-200 mt-8">
            If growth is your priority but internal sales capacity is limited, Converra is built for you.
          </p>
        </motion.div>
      </Section>

      {/* ⬛ CTA SECTION */}
      <Section id="cta" className="bg-slate-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Your Next Revenue Growth Phase
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            If your business is ready to scale revenue through focused sales execution and performance-driven partnerships, we’re ready to work with you.
          </p>

          <div className="flex justify-center mb-6">
            <Button
              onClick={() => openBookStrategyCall(() => scrollTo("footer-contact"))}
              className="h-12 px-8 text-base bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-lg shadow-teal-500/25"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-slate-300">
            Discuss your growth goals and explore how Converra can support your revenue expansion.
          </p>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400">
        <div className="container-padding">
          <div className="grid lg:grid-cols-5 gap-10 mb-12 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-white font-display uppercase tracking-wide">
                  Convera Growth Partners
                </span>
              </div>
              <p className="text-sm text-slate-300 mb-2">
                Strategic Revenue Partnerships for Growth-Focused Businesses
              </p>
              <p className="text-teal-400 text-sm font-medium">
                Conversation. Conviction. Conversion.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#problem" className="hover:text-teal-400 transition-colors">Problem</a></li>
                <li><a href="#solution" className="hover:text-teal-400 transition-colors">Solution</a></li>
                <li><a href="#process" className="hover:text-teal-400 transition-colors">Process</a></li>
                <li><a href="#results" className="hover:text-teal-400 transition-colors">Results</a></li>
                <li><a href="#ideal-clients" className="hover:text-teal-400 transition-colors">Ideal Clients</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ContactForm />
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>&copy; {new Date().getFullYear()} Converra Inc. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/converra/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
