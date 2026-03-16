'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = () => {
    window.open(
      'https://wa.me/919289228898?text=Hello%20I%20visited%20your%20website',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleOpenWeb = () => {
    window.open(
      'https://web.whatsapp.com/send?phone=919289228898',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      {/* Square WhatsApp tooltip popup */}
      <AnimatePresence>
        {showTooltip && !showPopup && (
          <motion.button
            type="button"
            onClick={() => {
              setShowPopup(true);
              setShowTooltip(false);
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="group cursor-pointer"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '4.5rem', // ~12px above 56px icon above 16px bottom
            }}
            aria-label="Open WhatsApp chat popup"
          >
            <div
              className="relative z-10 text-left shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
              style={{
                maxWidth: 220,
                padding: 16,
                boxSizing: 'border-box',
                overflow: 'hidden',
                wordBreak: 'normal',
                overflowWrap: 'break-word',
                whiteSpace: 'normal',
                fontSize: 14,
                lineHeight: 1.5,
                backgroundColor: '#111111',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="mb-[6px] text-[13px] font-semibold text-[#F5C84C]">
                Hi there 👋
              </p>
              <p className="mb-[6px] text-[13px] text-white/80">
                Need help with franchise consulting?
                <br />
                Chat with us on WhatsApp.
              </p>
              <p className="text-[12px] text-white/60">
                We typically reply within minutes.
              </p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute bottom-[4.5rem] right-0 w-[290px] overflow-hidden rounded-2xl border border-white/10 bg-[#050505] text-white shadow-[0_22px_60px_rgba(0,0,0,0.75)] sm:w-[320px]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 bg-[#111111] px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  AntWork Consultants
                </p>
                <p className="mt-0.5 text-[11px] text-white/55">
                  Typically replies within minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close WhatsApp chat"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Message body */}
            <div className="space-y-3 bg-gradient-to-b from-[#050505] via-[#060606] to-[#050505] px-4 py-4">
              <div className="inline-flex max-w-full rounded-2xl bg-[#111111] px-3 py-2.5 text-left text-[11px] text-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                <div className="space-y-1">
                  <p>Hello 👋</p>
                  <p>How can we help you today?</p>
                </div>
              </div>

              <div className="mt-1 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleStartChat}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#25D366] px-3.5 py-2.5 text-xs font-semibold text-[#041007] shadow-[0_12px_28px_rgba(0,0,0,0.65)] transition-transform hover:-translate-y-[1px]"
                >
                  Start WhatsApp Chat
                </button>
                <button
                  type="button"
                  onClick={handleOpenWeb}
                  className="inline-flex w-full items-center justify-center rounded-md border border-white/18 bg-black/60 px-3.5 py-2.5 text-xs font-semibold text-white/80 shadow-[0_8px_22px_rgba(0,0,0,0.65)] transition-transform hover:-translate-y-[1px]"
                >
                  Open WhatsApp Web
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp icon – position, size, and styling unchanged */}
      <button
        type="button"
        onClick={() => {
          setShowPopup(true);
          setShowTooltip(false);
        }}
        className="flex h-14 w-14 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
}
