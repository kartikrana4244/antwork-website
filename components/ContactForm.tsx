'use client';

import { useState } from 'react';

type ContactFormProps = {
  variant?: 'contact' | 'investor';
  theme?: 'light' | 'dark';
};

export default function ContactForm({ variant = 'contact', theme = 'dark' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = theme === 'dark'
    ? 'mt-1 min-h-[44px] w-full rounded-lg border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-1 focus:ring-[#F2C94C]/30'
    : 'mt-1 min-h-[44px] w-full rounded-lg border border-[#e0e0e0] bg-[#FAFAFA] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] transition-colors focus:border-[#F2C94C] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#F2C94C]/30';
  const labelCls = theme === 'dark' ? 'block text-sm font-medium text-white/55' : 'block text-sm font-medium text-[#555]';

  if (variant === 'investor') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label htmlFor="name" className={labelCls}>Name</label><input id="name" name="name" type="text" required className={inputCls} /></div>
        <div><label htmlFor="phone" className={labelCls}>Phone</label><input id="phone" name="phone" type="tel" required className={inputCls} /></div>
        <div><label htmlFor="email" className={labelCls}>Email</label><input id="email" name="email" type="email" required className={inputCls} /></div>
        <div><label htmlFor="budget" className={labelCls}>Investment Budget</label><input id="budget" name="budget" type="text" placeholder="e.g. 10-25 Lakhs" className={inputCls} /></div>
        <div><label htmlFor="location" className={labelCls}>Preferred Location</label><input id="location" name="location" type="text" placeholder="City or region" className={inputCls} /></div>
        <div>
          <label htmlFor="interest" className={labelCls}>Interest Type</label>
          <select id="interest" name="interest" required className={inputCls}>
            <option value="">Select</option>
            <option value="franchise">Franchise</option>
            <option value="business-resale">Business Resale</option>
            <option value="ma">M&amp;A</option>
          </select>
        </div>
        <button type="submit" className="group relative min-h-[48px] w-full overflow-hidden rounded-md bg-[#F2C94C] py-3 text-sm font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(242,201,76,0.12)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(242,201,76,0.4),0_0_0_1px_rgba(242,201,76,0.15)]">
          <span className="relative z-10">{submitted ? 'Thank you! We will be in touch.' : 'Submit'}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div><label htmlFor="name" className={labelCls}>Name</label><input id="name" name="name" type="text" required className={inputCls} /></div>
      <div><label htmlFor="email" className={labelCls}>Email</label><input id="email" name="email" type="email" required className={inputCls} /></div>
      <div><label htmlFor="phone" className={labelCls}>Phone</label><input id="phone" name="phone" type="tel" className={inputCls} /></div>
      <div>
        <label htmlFor="service" className={labelCls}>Service Interested</label>
        <select id="service" name="service" className={inputCls}>
          <option value="">Select a service</option>
          <option value="franchise-consulting">Franchise Consulting</option>
          <option value="franchise-expansion">Franchise Expansion</option>
          <option value="exhibition">Exhibition Management</option>
          <option value="business-resale">Business Resale</option>
          <option value="ma">Mergers &amp; Acquisitions</option>
          <option value="b2b">B2B Strategic Consulting</option>
        </select>
      </div>
      <div><label htmlFor="message" className={labelCls}>Message</label><textarea id="message" name="message" rows={4} required className={`${inputCls} min-h-[88px]`} /></div>
      <button type="submit" className="group relative min-h-[48px] w-full overflow-hidden rounded-md bg-[#F2C94C] py-3 text-sm font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(242,201,76,0.12)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(242,201,76,0.4),0_0_0_1px_rgba(242,201,76,0.15)]">
        <span className="relative z-10">{submitted ? 'Thank you! We will get back soon.' : 'Send Message'}</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </button>
    </form>
  );
}
