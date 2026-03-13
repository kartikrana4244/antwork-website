'use client';

import { useState } from 'react';

type ContactFormProps = {
  variant?: 'contact' | 'investor';
};

const inputClass =
  'mt-1 min-h-[44px] w-full rounded-lg border border-[rgba(242,201,76,0.2)] bg-[#111111] px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-1 focus:ring-[#F2C94C]/30';
const labelClass = 'block text-sm font-medium text-[#A0A0A0]';

export default function ContactForm({ variant = 'contact' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (variant === 'investor') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>Investment Budget</label>
          <input id="budget" name="budget" type="text" placeholder="e.g. 10-25 Lakhs" className={inputClass} />
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>Preferred Location</label>
          <input id="location" name="location" type="text" placeholder="City or region" className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>Interest Type</label>
          <select id="interest" name="interest" required className={inputClass}>
            <option value="">Select</option>
            <option value="franchise">Franchise</option>
            <option value="business-resale">Business Resale</option>
            <option value="ma">M&A</option>
          </select>
        </div>
        <button
          type="submit"
          className="min-h-[48px] w-full rounded-lg bg-[#F2C94C] py-3 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.01] hover:bg-[#E0B429]"
        >
          {submitted ? 'Thank you! We will be in touch.' : 'Submit'}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="service" className={labelClass}>Service Interested</label>
        <select id="service" name="service" className={inputClass}>
          <option value="">Select a service</option>
          <option value="franchise-consulting">Franchise Consulting</option>
          <option value="franchise-expansion">Franchise Expansion</option>
          <option value="exhibition">Exhibition Management</option>
          <option value="business-resale">Business Resale</option>
          <option value="ma">Mergers &amp; Acquisitions</option>
          <option value="b2b">B2B Strategic Consulting</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" rows={4} required className={`${inputClass} min-h-[88px]`} />
      </div>
      <button
        type="submit"
        className="min-h-[48px] w-full rounded-lg bg-[#F2C94C] py-3 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.01] hover:bg-[#E0B429]"
      >
        {submitted ? 'Thank you! We will get back soon.' : 'Send Message'}
      </button>
    </form>
  );
}
