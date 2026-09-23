import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Facebook,
  Github,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData.js';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'Institutional Advisory & Campus Scaling',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const categories = [
    'Institutional Advisory & Campus Scaling',
    'Physics Masterclass & Olympiad Mentorship',
    'Full-Stack EdTech Architecture & LMS',
    'STEM & Hands-on Robotics Curriculum',
    'Academic Audits & Faculty Training',
    'General Professional Inquiry',
  ];

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a descriptive inquiry (minimum 15 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate asynchronous transmission
    setTimeout(() => {
      const generatedId = `MG-ADVISORY-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[${formData.category}] ${formData.subject || 'Advisory Inquiry'}`);
    const body = encodeURIComponent(
      `From: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Advisory & Institutional Engagements
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Direct Contact & Consultation Portal
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Available for executive academic advisory, institutional coaching branch setups, advanced physics faculty training, and full-stack EdTech development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Verified Direct Channels
            </h3>
            
            {/* Contact Points List */}
            <div className="space-y-4">
              {/* Primary Email */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_DETAILS.email}`}
                      className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-amber-600 transition-colors"
                    >
                      {PERSONAL_DETAILS.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('email', PERSONAL_DETAILS.email)}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Primary & Secondary Phone */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                      Telephone & Voice
                    </div>
                    <div className="space-y-0.5 mt-0.5">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${PERSONAL_DETAILS.primaryPhone}`}
                          className="text-sm font-semibold font-mono text-zinc-900 dark:text-zinc-100 hover:text-amber-600 transition-colors"
                        >
                          {PERSONAL_DETAILS.primaryPhone}
                        </a>
                        <span className="text-[10px] text-zinc-400">(Primary)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${PERSONAL_DETAILS.secondaryPhone}`}
                          className="text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-amber-600 transition-colors"
                        >
                          {PERSONAL_DETAILS.secondaryPhone}
                        </a>
                        <span className="text-[10px] text-zinc-400">(Secondary)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('phone', PERSONAL_DETAILS.primaryPhone)}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy Primary Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Fast Trigger */}
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-800 dark:text-emerald-400 font-medium">
                      Instant WhatsApp
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-300">
                      Average response time: &lt; 2 hours
                    </div>
                  </div>
                </div>
                <a
                  href={PERSONAL_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Chat Now</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Physical Institutional Address */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                      Institutional Residence & Base
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium mt-0.5 leading-snug">
                      {PERSONAL_DETAILS.address}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('address', PERSONAL_DETAILS.address)}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy Address"
                >
                  {copiedField === 'address' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social & Profiles Bar */}
            <div className="pt-2 grid grid-cols-3 gap-2">
              <a
                href={PERSONAL_DETAILS.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-zinc-300 transition-colors flex items-center justify-center gap-1"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span className="truncate">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_DETAILS.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#1877F2] dark:hover:text-[#1877F2] hover:border-zinc-300 transition-colors flex items-center justify-center gap-1"
                title="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                <span className="truncate">Facebook</span>
              </a>

              <a
                href={PERSONAL_DETAILS.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 transition-colors flex items-center justify-center gap-1"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
                <span className="truncate">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Advisory Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xs">
              
              {isSubmitted ? (
                /* Submission Confirmation State */
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Inquiry Dispatched Successfully
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-zinc-900 dark:text-white">{formData.fullName}</span>. Your consultation request regarding <span className="font-semibold text-zinc-900 dark:text-white">{formData.category}</span> has been logged.
                  </p>

                  <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Reference ID: {ticketId}</span>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      Open in Email App
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          category: 'Institutional Advisory & Campus Scaling',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form State */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-3">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      Advisory & Partnership Form
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      All inquiries are reviewed personally by Mandeep Garhwal.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 transition-all ${
                          errors.fullName
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@institution.org"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 transition-all ${
                          errors.email
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 transition-all ${
                          errors.phone
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      >
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Setting up JEE Advanced coaching wing in Chandigarh"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 transition-all ${
                        errors.subject
                          ? 'border-rose-500 dark:border-rose-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Inquiry Narrative & Context *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your institutional objectives, cohort size, or technical project scope..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 dark:border-rose-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission & Mailto Fallback Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      Pre-fill in your desktop email client
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-70 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Consultation Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
