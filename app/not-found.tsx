import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-4">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(242,201,76,0.06)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative text-center">
        <p className="font-heading text-6xl font-bold text-[#F2C94C] sm:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-[#A0A0A0]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#F2C94C] px-8 py-3 font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
