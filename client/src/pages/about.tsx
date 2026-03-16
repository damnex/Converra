import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Compass,
  Award,
  Lightbulb,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { openBookStrategyCall } from "@/lib/links";

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("footer-contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A2540] text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* Page hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3399FF]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#3399FF] font-medium tracking-wide mb-3">About us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              About Converra Growth Partners
            </h1>
            <p className="text-lg text-slate-300">
              Your revenue-focused growth partner for ambitious businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="relative py-16 md:py-24">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                <Users className="h-7 w-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Are</h2>
            </div>
            <div className="rounded-2xl border border-sky-200/60 bg-gradient-to-br from-sky-50/90 via-white to-blue-50/70 p-8 md:p-10 text-slate-700 space-y-5">
              <p className="text-base md:text-lg leading-relaxed">
                Converra Growth Partners is a revenue-focused growth partner for ambitious businesses. We work alongside founders and leadership teams to strengthen sales execution and unlock new revenue opportunities without increasing operational complexity.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our focus is simple: help companies expand their market reach, generate meaningful conversations with potential clients, and convert opportunities into measurable business outcomes.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Rather than functioning as a traditional sales outsourcing firm, Converra operates as an extended revenue arm that collaborates closely with internal teams to drive consistent pipeline movement and business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="relative py-16 md:py-24 bg-gradient-to-b from-[#0A2540] via-[#0e2f55] to-[#0A2540]">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What We Do</h2>
            </div>
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-slate-200 space-y-4">
                <p className="text-base md:text-lg leading-relaxed">
                  Many companies have strong products, capable teams, and active marketing efforts — yet revenue growth often remains inconsistent or non-scalable for longer periods.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  The reason is simple: revenue execution requires continuous focus, additional revenue flow, structured outreach, and disciplined pipeline ownership.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Converra supports businesses by creating a dedicated revenue lane for their product or service. We allocate a product-focused sales professional or a small team that deeply understands your offering and represents it in the market. This dedicated resource operates as an extension of your business, engaging prospects, initiating conversations, and managing opportunities from outreach to revenue.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-200/60 bg-gradient-to-br from-sky-50/90 via-white to-blue-50/70 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Our role includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Generating and identifying relevant prospects",
                    "Representing your product with deep understanding",
                    "Creating and managing a dedicated sales pipeline",
                    "Driving consistent outreach and follow-ups",
                    "Converting opportunities into measurable revenue",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-700">
                      <CheckCircle className="h-5 w-5 text-[#3399FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 mt-6 leading-relaxed">
                  While your internal team continues to handle core relationships, product development, and strategic sales conversations, Converra ensures that new opportunities are continuously entering and moving through the pipeline. This structured approach allows businesses to expand their revenue capacity without constantly building or managing additional internal sales teams.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="our-approach" className="relative py-16 md:py-24">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                <Compass className="h-7 w-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Approach</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-slate-200 space-y-5">
              <p className="text-base md:text-lg leading-relaxed">
                At Converra, we believe revenue growth should not depend solely on internal bandwidth or continuous hiring cycles.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our approach begins with deeply understanding your product, value proposition, and ideal customer profile. This allows us to represent your offering in the market with clarity and confidence.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Once aligned, Converra assigns a dedicated sales professional or team that focuses specifically on your product. These resources operate as an extension of your business, building product-level expertise and engaging the right prospects through structured outreach.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We then establish a separate and focused pipeline for your offering, where conversations, opportunities, and follow-ups are managed consistently to ensure momentum across the sales process.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                While your internal team continues to manage strategic relationships and core deals, Converra focuses on expanding outreach, generating opportunities, and driving additional revenue conversations in parallel. This approach creates a structured and scalable revenue channel, enabling businesses to grow without constantly expanding their internal sales teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Converra */}
      <section id="why-converra" className="relative py-16 md:py-24 bg-gradient-to-b from-[#0A2540] via-[#0e2f55] to-[#0A2540]">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Converra Growth Partners</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                Businesses partner with Converra when they want to strengthen their revenue execution without constantly expanding their internal sales teams. Our model helps organizations create an additional revenue lane where dedicated sales professionals represent their product, initiate meaningful conversations, and manage opportunities through a structured pipeline.
              </p>
              <div className="rounded-2xl border border-sky-200/60 bg-gradient-to-br from-sky-50/90 via-white to-blue-50/70 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Companies work with Converra when they want to:</h3>
                <ul className="space-y-3">
                  {[
                    "Expand their market outreach and prospect engagement",
                    "Create a dedicated pipeline for new opportunities",
                    "Introduce product-focused sales expertise without additional hiring cycles",
                    "Strengthen consistency in outreach and follow-ups",
                    "Generate additional revenue opportunities alongside their internal teams",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-700">
                      <CheckCircle className="h-5 w-5 text-[#3399FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 mt-6 leading-relaxed">
                  By creating a focused and disciplined revenue channel, Converra enables businesses to scale their growth efforts while maintaining clarity and control over their core operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="our-philosophy" className="relative py-16 md:py-24">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Philosophy</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-slate-200 space-y-5">
              <p className="text-base md:text-lg leading-relaxed">
                At Converra, we believe revenue growth is not simply about increasing activity — it is about creating the right structure for consistent execution.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our philosophy is simple: when meaningful conversations happen consistently, opportunities are nurtured properly, and pipeline movement is structured, revenue growth becomes far more predictable and scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tagline & CTA */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0A2540] via-[#0d2a4a] to-[#0A2540]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3399FF]/10 via-transparent to-[#0A2540]" aria-hidden />
        <div className="container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center rounded-2xl border border-sky-200/60 bg-gradient-to-br from-sky-50/90 via-white to-blue-50/80 p-8 md:p-12"
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3399FF]/20 text-[#3399FF]">
                <MessageCircle className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Tagline
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-4">
              Conversation. Conviction. Conversion.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              At Converra, growth begins with meaningful conversations, builds through conviction, and ultimately delivers measurable conversion.
            </p>
            <Button
              onClick={() => openBookStrategyCall(scrollToContact)}
              className="bg-[#3399FF] hover:bg-[#1f7fe6] text-white font-semibold shadow-lg shadow-[#3399FF]/30"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-[#071c33] border-t border-white/10 py-12 text-slate-400">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="Converra" className="h-8 w-auto rounded-lg" />
              <span className="text-lg font-bold text-white uppercase tracking-tight">Converra</span>
            </div>
            <Link href="/" className="text-slate-400 hover:text-[#3399FF] transition-colors text-sm">
              Back to Home
            </Link>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Converra Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
