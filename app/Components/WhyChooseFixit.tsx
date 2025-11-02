"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star, WalletCards } from "lucide-react";

const features = [
  {
    title: "Verified Professionals",
    icon: ShieldCheck,
    description:
      "Every service provider is background-checked and verified by Fixit.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-100 to-teal-100",
    stat: "100%",
    statLabel: "Verified",
  },
  {
    title: "Fast Response Time",
    icon: Clock,
    description: "Get connected with nearby professionals within minutes.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    iconBg: "from-blue-100 to-cyan-100",
    stat: "<15",
    statLabel: "Minutes",
  },
  {
    title: "Transparent Pricing",
    icon: WalletCards,
    description: "No hidden fees — know the estimated cost before you book.",
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-50 to-purple-50",
    iconBg: "from-violet-100 to-purple-100",
    stat: "0%",
    statLabel: "Hidden Fees",
  },
  {
    title: "Top-Rated Experts",
    icon: Star,
    description:
      "Our professionals maintain a 4.8★ average rating from real customers.",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    iconBg: "from-amber-100 to-orange-100",
    stat: "4.8★",
    statLabel: "Rating",
  },
];

export default function WhyChooseFixit() {
  return (
    <section
      id="why-fixit"
      className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
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
            <span className="text-2xl">🏆</span>
            <span className="text-sm font-semibold text-slate-700">
              Why We're Different
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="text-slate-900">Why Choose </span>
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Fixit?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            We make home and auto repairs simple, safe, and affordable — so you
            can relax while we get things done.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden h-full">
                  {/* Stat Badge */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`px-3 py-1.5 rounded-full bg-gradient-to-br ${feature.bgColor} border border-slate-200`}
                    >
                      <p
                        className={`text-xs font-bold bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}
                      >
                        {feature.stat}
                      </p>
                      <p className="text-[10px] text-slate-600">
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>

                  {/* Hover Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon Container */}
                    <div
                      className={`relative p-5 bg-gradient-to-br ${feature.iconBg} rounded-2xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-md`}
                    >
                      <Icon className="w-8 h-8 text-slate-700" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                      {feature.description}
                    </p>

                    {/* Decorative Checkmark (appears on hover) */}
                    <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-slate-100 to-transparent opacity-50 rounded-tl-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-3xl shadow-lg border border-slate-200 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                5,000+
              </p>
              <p className="text-slate-600 text-sm font-medium">
                Happy Customers
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                500+
              </p>
              <p className="text-slate-600 text-sm font-medium">
                Verified Pros
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                15K+
              </p>
              <p className="text-slate-600 text-sm font-medium">
                Jobs Completed
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                4.9★
              </p>
              <p className="text-slate-600 text-sm font-medium">
                Average Rating
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
