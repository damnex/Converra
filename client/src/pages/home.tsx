import { Navbar } from "@/components/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ChartVisual } from "@/components/chart-visual";
import { DashboardMock } from "@/components/dashboard-mock";
import { 
  CheckCircle, ArrowRight, Zap, Target, Users, BarChart, 
  ShieldCheck, Rocket, LayoutGrid, MessageSquare 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Accepting New Partners for Q4
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 font-display">
                Revenue Partners for Tech Companies That Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Scale</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
                Stop struggling with hiring, training, and managing SDRs. We plug into your company as a dedicated revenue engine without the headcount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="h-14 px-8 text-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-lg shadow-teal-500/25"
                >
                  Become a Revenue Partner
                </Button>
                <Button 
                  variant="outline" 
                  onClick={scrollToContact}
                  className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                >
                  Book Strategy Call
                </Button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>Trusted by 50+ SaaS Companies</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ChartVisual />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <Section id="problem" className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Traditional Sales Model Is Broken
          </h2>
          <p className="text-lg text-slate-500">
            Scaling an in-house sales team is expensive, risky, and slow. There's a better way to grow revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Hiring Headaches",
              desc: "Finding, training, and retaining top talent takes months and costs a fortune in recruitment fees."
            },
            {
              icon: Target,
              title: "Missed Quotas",
              desc: "Average ramp time is 3+ months, meaning you burn cash before seeing a single dollar in return."
            },
            {
              icon: Zap,
              title: "Management Drain",
              desc: "Managing a sales team distracts founders and product leaders from building a great product."
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution/Dashboard Section */}
      <Section id="solution" background="light">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            The Converra Advantage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Data-Driven Sales Acceleration
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We combine human expertise with cutting-edge sales technology to fill your pipeline with qualified opportunities.
          </p>
        </div>

        <DashboardMock />
      </Section>

      {/* How It Works */}
      <Section id="process">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Proven Methodology
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                We don't just "make calls". We build a comprehensive go-to-market engine tailored to your ideal customer profile.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Strategy & Audit", desc: "We analyze your TAM, messaging, and current sales stack." },
                  { step: "02", title: "Infrastructure Setup", desc: "We deploy our proprietary tech stack and data enrichment tools." },
                  { step: "03", title: "Campaign Launch", desc: "Multi-channel outreach via email, LinkedIn, and phone." },
                  { step: "04", title: "Scale & Optimize", desc: "Continuous A/B testing and doubling down on what works." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl font-bold text-teal-500/30 font-display">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-indigo-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                        {i === 1 ? "A" : i === 2 ? "B" : "C"}
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-32 bg-slate-100 rounded" />
                      </div>
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                    </div>
                  ))}
                  <div className="mt-8 p-4 bg-navy-900 rounded-lg text-white text-center">
                    <div className="text-3xl font-bold mb-1">14 Days</div>
                    <div className="text-sm text-slate-400">Average Time to First Deal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section id="differentiator" background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why We Are Different
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[700px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-100">
              <div className="font-bold text-slate-500">Feature</div>
              <div className="font-bold text-slate-500">Traditional Agency</div>
              <div className="font-bold text-teal-600 text-lg">Converra</div>
            </div>
            {[
              { feature: "Focus", bad: "Volume-based spam", good: "Targeted, research-backed" },
              { feature: "Tech Stack", bad: "Basic email tools", good: "Enterprise-grade suite" },
              { feature: "Pricing", bad: "Retainer + Commission", good: "Performance-aligned" },
              { feature: "Transparency", bad: "Weekly PDF reports", good: "Live dashboard access" },
              { feature: "Ramp Time", bad: "4-6 weeks", good: "< 7 days" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                <div className="font-medium text-slate-700">{row.feature}</div>
                <div className="text-slate-500">{row.bad}</div>
                <div className="font-semibold text-teal-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {row.good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Beyond Close */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Beyond Just The Close
          </h2>
          <p className="text-lg text-slate-500 mb-12">
            We think about the entire revenue lifecycle, not just the initial meeting.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -z-10 -translate-y-1/2" />
            
            {[
              { icon: Target, label: "Acquire" },
              { icon: MessageSquare, label: "Engage" },
              { icon: Rocket, label: "Close" },
              { icon: ShieldCheck, label: "Retain" },
              { icon: LayoutGrid, label: "Expand" },
            ].map((step, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm w-32 flex flex-col items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-800">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="navy">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Revenue?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Book a free 30-minute strategy call to see if Converra is the right partner for your growth goals. We only work with 5 new partners each quarter to ensure quality.
            </p>
            
            <div className="space-y-6">
              {[
                "Full audit of your current sales process",
                "Custom go-to-market strategy roadmap",
                "Transparent pricing and ROI projection",
                "No pressure, just value"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-white">
                  JD
                </div>
                <div>
                  <p className="text-slate-300 italic mb-4">
                    "Converra completely transformed our outbound motion. We went from booking 5 demos a month to over 40 within 90 days."
                  </p>
                  <div className="font-bold text-white">John Doe</div>
                  <div className="text-sm text-teal-400">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400">
        <div className="container-padding">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white font-display">Converra</span>
              </div>
              <p className="max-w-xs text-sm">
                Helping B2B tech companies scale revenue through data-driven outbound sales partnerships.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>&copy; {new Date().getFullYear()} Converra Inc. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
