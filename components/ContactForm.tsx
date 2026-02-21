'use client';

import { useState } from 'react';

type ContactFormProps = {
  variant?: 'contact' | 'investor';
};

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
          <label htmlFor="name" className="block text-sm font-medium text-[#4F4F4F]">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#4F4F4F]">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#4F4F4F]">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[#4F4F4F]">Investment Budget</label>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder="e.g. 10-25 Lakhs"
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-[#4F4F4F]">Preferred Location</label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City or region"
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-[#4F4F4F]">Interest Type</label>
          <select
            id="interest"
            name="interest"
            required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
          >
            <option value="">Select</option>
            <option value="franchise">Franchise</option>
            <option value="business-resale">Business Resale</option>
            <option value="ma">M&A</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn-primary w-full rounded-xl py-4"
        >
          {submitted ? 'Thank you! We will be in touch.' : 'Submit'}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#4F4F4F]">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#4F4F4F]">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#4F4F4F]">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[#4F4F4F]">Service Interested</label>
        <select
          id="service"
          name="service"
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
        >
          <option value="">Select a service</option>
          <option value="franchise-consulting">Franchise Consulting</option>
          <option value="franchise-expansion">Franchise Expansion</option>
          <option value="exhibition">Exhibition & Fest Management</option>
          <option value="business-resale">Business Resale</option>
          <option value="ma">Mergers & Acquisitions</option>
          <option value="b2b">B2B Strategic Consulting</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#4F4F4F]">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#F2C94C] focus:outline-none focus:ring-2 focus:ring-[#F2C94C]/20"
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full rounded-xl py-4"
      >
        {submitted ? 'Thank you! We will get back soon.' : 'Send Message'}
      </button>
    </form>
  );
}
