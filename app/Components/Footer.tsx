import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Fixit<span className="text-blue-400">.</span>
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Hire trusted local professionals for repairs, maintenance, and
              installations — all in one place.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group p-3 bg-slate-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 rounded-xl transition-all duration-300 border border-slate-700 hover:border-transparent"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 bg-slate-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 rounded-xl transition-all duration-300 border border-slate-700 hover:border-transparent"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 bg-slate-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 rounded-xl transition-all duration-300 border border-slate-700 hover:border-transparent"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 bg-slate-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 rounded-xl transition-all duration-300 border border-slate-700 hover:border-transparent"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/#services" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Why Fixit", href: "/#why-fixit" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {[
                { label: "Help Center", href: "/faq" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "FAQs", href: "/faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Have questions? We're here to help.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:support@fixit.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-600/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">support@fixit.com</span>
              </a>
              <a
                href="tel:+923211234567"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-600/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+92 321 1234567</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-2xl border border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-3 text-white">Stay Updated</h4>
            <p className="text-slate-300 text-sm mb-6">
              Subscribe to our newsletter for tips, updates, and exclusive
              offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {currentYear} Fixit. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤️</span>{" "}
              by the{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                Fixit Team
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"></div>
    </footer>
  );
}
