"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-purple-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-indigo-100"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-700">
                Available 24/7 • Fast Response
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              <span className="text-slate-900">Get it </span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Fixed
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 blur-lg"></span>
              </span>
              <br />
              <span className="text-slate-900">Anytime, Anywhere</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Connect with verified{" "}
              <span className="font-semibold text-indigo-700">
                mechanics, electricians, plumbers
              </span>{" "}
              and more. Professional service at your fingertips.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <a
                href="/book"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Find a Fixer
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#services"
                className="group relative px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl border-2 border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">View Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Stats/Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 justify-center md:justify-start pt-8 border-t border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white shadow-md"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white shadow-md"></div>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">5,000+</p>
                  <p className="text-xs text-slate-600">Happy Customers</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">4.9</p>
                  <p className="text-xs text-slate-600">Average Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-96 sm:h-[500px]">
              {/* Central Hero Image/Icon - Lower z-index */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl flex items-center justify-center border border-slate-200 overflow-hidden">
                    <div className="text-center space-y-4">
                      <div className="text-8xl">🔧</div>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-slate-900">
                          Professional
                        </p>
                        <p className="text-lg text-slate-600">
                          Service Experts
                        </p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-blue-400/30 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 - Higher z-index */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-48 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-slate-200 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Verified Pro</p>
                    <p className="font-bold text-slate-900">500+ Jobs</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Higher z-index */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 w-48 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-slate-200 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Response Time</p>
                    <p className="font-bold text-slate-900">Under 15 min</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
        .bg-grid-slate-200\/50 {
          background-image: linear-gradient(
              rgba(226, 232, 240, 0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(226, 232, 240, 0.5) 1px,
              transparent 1px
            );
        }
      `}</style>
    </section>
  );
}
