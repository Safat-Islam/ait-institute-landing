import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2,
  ShieldCheck
} from "lucide-react";

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-[#07090E] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Contact AIT Institute
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have questions about course admissions, payment plans, or curriculum details? Our admissions team is ready to assist you.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Instant WhatsApp Consultation</h3>
                  <span className="text-[11px] text-emerald-400">Available 24/7 for Admissions</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Connect directly with our senior course advisor on WhatsApp for instant guidance and batch seat availability.
              </p>
              <a
                href="https://wa.me/8801800000000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-900/30"
              >
                <span>Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Office & Direct Lines */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Campus &amp; Studio</strong>
                  <p className="text-zinc-400">Road 11, Block D, Banani, Dhaka 1213, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-800/80">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Direct Admissions Email</strong>
                  <a href="mailto:support@aitinstitutebd.com" className="text-purple-300 hover:underline">
                    support@aitinstitutebd.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-800/80">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Admissions Hotline</strong>
                  <a href="tel:+8801800000000" className="text-zinc-300">
                    +880 1800-000000 (10 AM - 10 PM)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-800/80">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Office &amp; Support Hours</strong>
                  <p className="text-zinc-400">Saturday to Thursday: 10:00 AM – 10:00 PM BST</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md">
            {!submitted ? (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  Fill out this quick form and our academic counselor will respond via email or WhatsApp within 2 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1700-000000"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">How Can We Help You?</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background or questions regarding the curriculum..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.01]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Inquiry Received!</h4>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our academic team has received your inquiry and will reach out to <strong className="text-purple-300">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={onNavigateHome}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default ContactPage;
