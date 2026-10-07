"use client";

import React, { useState } from "react";
import { destinations } from "@/data/destinations";
import { studyLevels, courseFields } from "@/data/courses";
import { companyInfo } from "@/data/company";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDestination: string;
  highestQualification: string;
  interestedCourse: string;
  preferredIntake: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  preferredDestination?: string;
  highestQualification?: string;
  interestedCourse?: string;
}

export const CounsellingBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredDestination: "",
    highestQualification: "",
    interestedCourse: "",
    preferredIntake: "Autumn / September 2025",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!formData.preferredDestination) {
      newErrors.preferredDestination = "Please choose your primary destination.";
    }

    if (!formData.highestQualification) {
      newErrors.highestQualification = "Please select your current qualification.";
    }

    if (!formData.interestedCourse.trim()) {
      newErrors.interestedCourse = "Please select or type your area of study.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API network submission with realistic timing
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      preferredDestination: "",
      highestQualification: "",
      interestedCourse: "",
      preferredIntake: "Autumn / September 2025",
      message: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white border border-black/10 p-8 sm:p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-poppins text-xl font-bold uppercase tracking-wider text-sec-navy">
          Counselling Request Logged
        </h3>
        <p className="text-sm text-sec-muted leading-relaxed font-inter">
          Thank you, <strong className="text-sec-dark font-semibold">{formData.fullName}</strong>. A destination specialist will review your academic background and reach out at <strong className="text-sec-dark font-semibold">{formData.phone}</strong> or <strong className="text-sec-dark font-semibold">{formData.email}</strong> within one working day.
        </p>

        <div className="p-4 bg-sec-offwhite border border-black/5 text-xs text-sec-muted text-left space-y-1 font-inter">
          <div><strong className="text-sec-dark">Destination:</strong> {formData.preferredDestination}</div>
          <div><strong className="text-sec-dark">Discipline:</strong> {formData.interestedCourse}</div>
          <div><strong className="text-sec-dark">Advisory Office:</strong> {companyInfo.address}</div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleReset}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-sec-navy border border-black/20 hover:bg-sec-offwhite transition-colors"
          >
            Submit Another Request
          </button>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Hello+SEC,+I+just+submitted+a+counselling+request+for+${encodeURIComponent(formData.preferredDestination)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-sec-navy hover:bg-sec-dark transition-all flex items-center justify-center gap-2 border border-sec-navy"
          >
            Connect on WhatsApp Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/10 p-6 sm:p-12 shadow-sm space-y-8"
      noValidate
    >
      <div className="border-b border-black/10 pb-5">
        <span className="font-mono text-xs uppercase tracking-widest text-sec-red font-semibold block mb-1">
          Direct Intake Advisory
        </span>
        <h3 className="font-poppins text-2xl font-light text-sec-navy tracking-tight">
          Initiate Academic Assessment
        </h3>
        <p className="text-xs text-sec-muted mt-1 font-inter">
          Provide your academic credentials. Transparent, confidential guidance by certified educational consultants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Full Name <span className="text-sec-red">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Aarav Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-sec-offwhite/50 border text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy ${
              errors.fullName ? "border-sec-red" : "border-black/10"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-sec-red mt-1 flex items-center gap-1 font-inter">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Email Address <span className="text-sec-red">*</span>
          </label>
          <input
            type="email"
            placeholder="e.g. aarav@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-sec-offwhite/50 border text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy ${
              errors.email ? "border-sec-red" : "border-black/10"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-sec-red mt-1 flex items-center gap-1 font-inter">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Phone / WhatsApp Number <span className="text-sec-red">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. 98XXXXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-sec-offwhite/50 border text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy ${
              errors.phone ? "border-sec-red" : "border-black/10"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-sec-red mt-1 flex items-center gap-1 font-inter">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Preferred Destination */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Preferred Destination <span className="text-sec-red">*</span>
          </label>
          <select
            value={formData.preferredDestination}
            onChange={(e) => setFormData({ ...formData, preferredDestination: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-sec-offwhite/50 border text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy font-medium ${
              errors.preferredDestination ? "border-sec-red" : "border-black/10"
            }`}
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.flag} {d.name} {d.slug === "hungary" ? "(Featured / Heart of Europe)" : ""}
              </option>
            ))}
          </select>
          {errors.preferredDestination && (
            <p className="text-xs text-sec-red mt-1 flex items-center gap-1 font-inter">
              <AlertCircle className="w-3 h-3" /> {errors.preferredDestination}
            </p>
          )}
        </div>

        {/* Highest Qualification */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Highest Academic Qualification <span className="text-sec-red">*</span>
          </label>
          <select
            value={formData.highestQualification}
            onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-sec-offwhite/50 border text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy font-medium ${
              errors.highestQualification ? "border-sec-red" : "border-black/10"
            }`}
          >
            <option value="">Select Qualification</option>
            <option value="+2 / Higher Secondary / A-Levels">+2 / Higher Secondary (NEB) / A-Levels</option>
            <option value="Bachelor's Completed">Bachelor's Degree Completed</option>
            <option value="Bachelor's Running">Bachelor's Degree Running (Final Year)</option>
            <option value="Master's Completed">Master's Degree Completed</option>
            <option value="Diploma / CTEVT">Diploma / CTEVT</option>
          </select>
          {errors.highestQualification && (
            <p className="text-xs text-sec-red mt-1 flex items-center gap-1 font-inter">
              <AlertCircle className="w-3 h-3" /> {errors.highestQualification}
            </p>
          )}
        </div>

        {/* Interested Course / Field */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Academic Discipline <span className="text-sec-red">*</span>
          </label>
          <select
            value={formData.interestedCourse}
            onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-sec-offwhite/50 border text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy font-medium ${
              errors.interestedCourse ? "border-sec-red" : "border-black/10"
            }`}
          >
            <option value="">Select Discipline</option>
            {courseFields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          {errors.interestedCourse && (
            <p className="text-xs text-sec-red mt-1 flex items-center gap-1 font-inter">
              <AlertCircle className="w-3 h-3" /> {errors.interestedCourse}
            </p>
          )}
        </div>

        {/* Preferred Intake */}
        <div className="md:col-span-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-2 font-poppins">
            Target Intake Window
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              "Autumn / Sep 2025",
              "Spring / Feb 2026",
              "Summer 2026",
              "Undecided / Exploring"
            ].map((intake) => (
              <button
                key={intake}
                type="button"
                onClick={() => setFormData({ ...formData, preferredIntake: intake })}
                className={`py-3 px-3 text-xs uppercase tracking-wider font-semibold border transition-all text-center ${
                  formData.preferredIntake === intake
                    ? "bg-sec-navy text-white border-sec-navy"
                    : "bg-white text-sec-dark/70 border-black/10 hover:border-black/30"
                }`}
              >
                {intake}
              </button>
            ))}
          </div>
        </div>

        {/* Message / Specific Questions */}
        <div className="md:col-span-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-sec-dark mb-1 font-poppins">
            Academic Background & Scores (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Include current GPA, test scores (IELTS/PTE), budget constraints, or university preferences..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-sec-offwhite/50 border border-black/10 text-sec-dark transition-colors focus:bg-white focus:outline-none focus:border-sec-navy font-inter"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-sec-muted font-inter">
          Direct consultation with certified advisors at Putilisadak-29, Kathmandu.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3.5 bg-sec-red hover:bg-sec-navy text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 border border-sec-red hover:border-sec-navy"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Submit Assessment Request</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
