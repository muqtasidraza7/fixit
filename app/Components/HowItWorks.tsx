"use client";
import { motion } from "framer-motion";
import { Search, UserCheck, Wallet } from "lucide-react";

const steps = [
  {
    title: "Choose a Service",
    icon: Search,
    description: "Select what you need — plumber, electrician, mechanic, or more.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    iconBg: "from-blue-100 to-cyan-100",
    number: "01",
  },
  {
    title: "Get Matched Instantly",
    icon: UserCheck,
    description: "We connect you with nearby verified professionals within minutes.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    iconBg: "from-indigo-100 to-purple-100",
    number: "02",
  },
  {
    title: "Pay After the Job",
    icon: Wallet,
    description: "Only pay once the service is completed and you're satisfied.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-100 to-teal-100",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 -right-32 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 mb-6"
          >
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-semibold text-slate-700">Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="text-slate-900">How </span>
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Fixit
            </span>
            <span className="text-slate-900"> Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Getting things fixed has never been easier — just three simple steps.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden h-full">
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.bgColor} flex items-center justify-center`}>
                      <span className={`text-lg font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon Container */}
                    <div className={`relative p-5 bg-gradient-to-br ${step.iconBg} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                      <Icon className={`w-10 h-10 text-slate-700`} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300`}></div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {step.description}
                    </p>

                    {/* Decorative Arrow (appears on hover) */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-100 to-transparent opacity-50 rounded-tr-full"></div>
                </div>

                {/* Arrow Between Steps (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg
                      className="w-6 h-6 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="/book"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <p className="text-sm text-slate-500 mt-4">No credit card required • 100% satisfaction guaranteed</p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}