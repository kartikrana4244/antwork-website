import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F8F8F8] px-4">
      <div className="text-center">
        <p className="font-heading text-6xl font-bold text-[#F2C94C] sm:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-[#4F4F4F] sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-[#4F4F4F]/80">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
