"use client";

import React, { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { MapPin, Phone, Mail, Globe, Clock, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = "Please enter your name.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) err.message = "Please write your inquiry message.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Reach Our Office
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Let&apos;s Start Your Global Journey
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Visit our office at Putilisadak-29 in Kathmandu, call our advisory desk directly, or submit an online inquiry.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Col (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white rounded-card border border-sec-gray-light p-8 sm:p-12 text-center shadow-card space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-sec-dark">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-sec-muted leading-relaxed">
                  Thank you for reaching out to Success Educational Consultancy. Our reception team will review your inquiry and respond within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 bg-sec-navy text-white text-xs font-semibold font-poppins rounded-btn hover:bg-sec-navy-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-card border border-sec-gray-light p-6 sm:p-10 shadow-card space-y-5"
                noValidate
              >
                <h3 className="font-poppins text-xl font-bold text-sec-dark pb-3 border-b border-sec-gray-light">
                  Send an Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Binod Maharjan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-sec-offwhite border rounded-input text-sec-dark transition-colors focus:bg-white ${
                        errors.name ? "border-sec-red" : "border-sec-gray-light"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-sec-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. binod@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-sec-offwhite border rounded-input text-sec-dark transition-colors focus:bg-white ${
                        errors.email ? "border-sec-red" : "border-sec-gray-light"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-sec-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-sec-offwhite border border-sec-gray-light rounded-input text-sec-dark transition-colors focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hungary Visa Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-sec-offwhite border border-sec-gray-light rounded-input text-sec-dark transition-colors focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we assist your international education plans?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-sec-offwhite border rounded-input text-sec-dark transition-colors focus:bg-white ${
                      errors.message ? "border-sec-red" : "border-sec-gray-light"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-sec-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 bg-sec-red hover:bg-sec-red-dark text-white text-sm font-semibold font-poppins rounded-btn shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <span>Send Inquiry Message</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Details & Location Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-card border border-sec-gray-light p-6 sm:p-8 shadow-card space-y-6">
              <div className="flex items-center gap-4 pb-1">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/sec-logo-transparent.png"
                    alt="Success Educational Consultancy Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red block">
                    Official Details
                  </span>
                  <h3 className="font-poppins text-lg font-bold text-sec-dark mt-0.5">
                    {companyInfo.name}
                  </h3>
                  <p className="text-xs text-sec-muted font-inter mt-0.5">
                    {companyInfo.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-inter border-y border-sec-gray-light py-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins text-sm">Kathmandu Office</strong>
                    <span className="text-sec-muted">{companyInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins text-sm">Phone Numbers</strong>
                    <span className="text-sec-muted">{companyInfo.phones.join(" / ")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins text-sm">Email Address</strong>
                    <a href={`mailto:${companyInfo.email}`} className="text-sec-navy hover:underline">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins text-sm">Web Identity</strong>
                    <span className="text-sec-muted">{companyInfo.website}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins text-sm">Opening Hours</strong>
                    <span className="text-sec-muted">{companyInfo.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Support Action */}
              <div className="pt-1">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white text-xs font-semibold font-poppins rounded-btn shadow-sm hover:opacity-95 transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder / Location Notice */}
            <div className="p-5 bg-sec-offwhite rounded-card border border-sec-gray-light text-xs text-sec-muted space-y-1">
              <strong className="text-sec-dark font-poppins block text-xs">
                Directions in Putilisadak:
              </strong>
              <p className="leading-relaxed font-inter">
                Located centrally in Putilisadak-29 opposite major educational hubs and public transport connections in central Kathmandu. Parking and elevator access available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
