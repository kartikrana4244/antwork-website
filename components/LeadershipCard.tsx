type Props = {
  name: string;
  role: string;
  bio: string;
  linkedInUrl: string;
};

export default function LeadershipCard({ name, role, bio, linkedInUrl }: Props) {
  const initials = name.split(' ').map((n) => n[0]).join('');
  return (
    <div className="rounded-2xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.03)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.4)] hover:shadow-[0_0_30px_rgba(242,201,76,0.06)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[rgba(242,201,76,0.3)] bg-[#111111] sm:h-24 sm:w-24" aria-hidden="true">
          <span className="text-2xl font-bold text-[#F2C94C]">{initials}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm font-medium text-[#F2C94C]">{role}</p>
          <p className="mt-3 break-words text-sm leading-relaxed text-[#A0A0A0]">{bio}</p>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center gap-1 text-sm font-medium text-[#A0A0A0] transition-colors hover:text-[#F2C94C] sm:justify-start"
            aria-label={`${name} on LinkedIn`}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
