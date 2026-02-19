import { Search, Bell, Menu, Users, BarChart3, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardMock() {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden max-w-4xl mx-auto"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Bar */}
      <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
        <div className="flex items-center gap-4">
          <Menu className="w-5 h-5 text-slate-400" />
          <div className="font-semibold text-slate-700">Converra Sales Suite</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-64 h-8 bg-white border border-slate-200 rounded-md flex items-center px-3 gap-2">
            <Search className="w-4 h-4 text-slate-400" />
            <div className="w-full h-2 bg-slate-100 rounded-full" />
          </div>
          <Bell className="w-5 h-5 text-slate-400" />
          <div className="w-8 h-8 bg-teal-100 rounded-full border border-teal-200" />
        </div>
      </div>

      <div className="flex h-[400px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-slate-100 p-4 space-y-1 bg-slate-50/30 hidden md:block">
          {[
            { icon: BarChart3, label: "Overview", active: true },
            { icon: Users, label: "Leads", active: false },
            { icon: TrendingUp, label: "Pipeline", active: false },
            { icon: DollarSign, label: "Deals", active: false },
            { icon: Calendar, label: "Activities", active: false },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                item.active 
                  ? "bg-teal-50 text-teal-700" 
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <item.icon className={`w-4 h-4 ${item.active ? "text-teal-600" : "text-slate-400"}`} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-slate-50/30">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Q3 Performance</h3>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm text-slate-600">Last 30 Days</div>
              <div className="px-3 py-1 bg-teal-500 text-white rounded-md text-sm font-medium">Export Report</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Total Revenue", value: "$124,500", trend: "+12%" },
              { label: "Active Deals", value: "45", trend: "+5%" },
              { label: "Conversion Rate", value: "24.8%", trend: "+2.4%" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">{stat.trend}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 h-40 flex items-center justify-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-8 h-24">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full mx-1 bg-teal-500/10 hover:bg-teal-500/20 rounded-t-sm transition-all relative group"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-teal-500 h-1 rounded-full group-hover:h-full transition-all duration-500 opacity-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
