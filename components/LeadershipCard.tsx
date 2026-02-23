type Props = {
  name: string;
  role: string;
  bio: string;
  linkedInUrl: string;
};

export default function LeadershipCard({ name, role, bio, linkedInUrl }: Props) {
  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10">
      <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#F2C94C]/30 to-[#4F4F4F]/20 sm:h-24 sm:w-24" aria-hidden="true">
            <div className="flex h-full w-full items-center justify-center text-2xl text-[#4F4F4F]/50">
              {name.split(' ').map((n) => n[0]).join('')}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-xl font-semibold text-[#4F4F4F]">{name}</h3>
            <p className="text-sm font-medium text-[#F2C94C]">{role}</p>
            <p className="mt-3 break-words text-sm leading-relaxed text-[#4F4F4F]/80">{bio}</p>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 text-sm font-medium text-[#4F4F4F] hover:text-[#F2C94C] transition-colors sm:justify-start"
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
    </div>
  );
}
