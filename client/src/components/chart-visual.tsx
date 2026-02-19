import { motion } from "framer-motion";

export function ChartVisual() {
  // SVG path for a smooth upward trending curve
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2.5, 
        ease: "easeInOut",
        delay: 0.5
      } 
    }
  };

  const areaVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        delay: 1.5 
      } 
    }
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl shadow-navy-900/50">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="border-r border-b border-slate-700/30" />
        ))}
      </div>

      {/* Chart Container */}
      <div className="absolute inset-8 flex items-end">
        <svg
          viewBox="0 0 400 200"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1FB6A6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1FB6A6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area under curve */}
          <motion.path
            d="M0,200 C80,200 120,150 200,120 C280,90 320,50 400,20 L400,200 Z"
            fill="url(#gradientArea)"
            initial="hidden"
            animate="visible"
            variants={areaVariants}
          />

          {/* Line Chart */}
          <motion.path
            d="M0,200 C80,200 120,150 200,120 C280,90 320,50 400,20"
            fill="none"
            stroke="#1FB6A6"
            strokeWidth="4"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            variants={pathVariants}
          />
          
          {/* Data Points */}
          {[
            { cx: 0, cy: 200, delay: 0.5 },
            { cx: 200, cy: 120, delay: 1.5 },
            { cx: 400, cy: 20, delay: 2.5 }
          ].map((point, index) => (
            <motion.circle
              key={index}
              cx={point.cx}
              cy={point.cy}
              r="6"
              fill="#1FB6A6"
              stroke="#0E1E2F"
              strokeWidth="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: point.delay, duration: 0.4, type: "spring" }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Badge */}
      <motion.div 
        className="absolute top-8 left-8 bg-slate-700/80 backdrop-blur border border-slate-600 px-4 py-2 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="text-xs text-slate-300 font-medium">Annual Recurring Revenue</div>
        <div className="text-xl text-white font-bold font-mono">+142%</div>
      </motion.div>
      
      {/* Floating Badge 2 */}
      <motion.div 
        className="absolute bottom-12 right-12 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-teal-500/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.8 }}
      >
        <div className="text-sm font-bold flex items-center gap-2">
          <span>Target Reached</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
