import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4">
      <p className="font-heading text-8xl font-extrabold text-[#1A1A1A] sm:text-[140px]">404</p>
      <div className="mx-auto mt-3 h-[2px] w-16 bg-[#F2C94C]" />
      <h1 className="mt-7 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-center text-[#666]">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="group relative mt-9 inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-md bg-[#1A1A1A] px-9 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]"
      >
        <span className="relative z-10">Back to Home</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </Link>
    </section>
  );
}
