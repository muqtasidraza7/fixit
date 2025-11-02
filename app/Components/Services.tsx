"use client";
import { motion } from "framer-motion";
import { Wrench, Plug, Droplet, Brush, Hammer, Snowflake } from "lucide-react";

const services = [
  {
    name: "Mechanic",
    icon: Wrench,
    description: "Car and bike repairs at your doorstep.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    iconBg: "from-orange-100 to-red-100",
  },
  {
    name: "Electrician",
    icon: Plug,
    description: "Quick fixes for all electrical issues.",
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-50 to-amber-50",
    iconBg: "from-yellow-100 to-amber-100",
  },
  {
    name: "Plumber",
    icon: Droplet,
    description: "From leaky taps to full installations.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "from-blue-100 to-cyan-100",
  },
  {
    name: "Cleaner",
    icon: Brush,
    description: "Home and office cleaning professionals.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "from-purple-100 to-pink-100",
  },
  {
    name: "Carpenter",
    icon: Hammer,
    description: "Furniture repair and custom woodwork.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-100 to-teal-100",
  },
  {
    name: "AC Technician",
    icon: Snowflake,
    description: "AC repair, gas refill, and maintenance.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    iconBg: "from-indigo-100 to-blue-100",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
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
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-700">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="text-slate-900">Popular </span>
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Hire trusted professionals for all your home and auto repair needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div
                    className={`relative p-4 bg-gradient-to-br ${service.iconBg} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}
                  >
                    <Icon
                      className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                      style={{
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span
                      className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      Book Now
                    </span>
                    <svg
                      className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform`}
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
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100 to-transparent opacity-50 rounded-bl-full"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg
              className="w-5 h-5"
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
