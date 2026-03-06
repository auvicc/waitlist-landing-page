export function Header() {
  return (
    <header className="w-full flex justify-center pt-10 pb-4 px-6">
      <div className="w-full max-w-[1280px] flex items-center justify-center md:justify-start">
        <div className="flex items-center gap-2">
          {/* Logo mark — abstract square with gradient */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#262424" />
            <circle cx="10" cy="16" r="4" fill="#0ccd4b" />
            <circle cx="22" cy="16" r="4" fill="#1977f2" opacity="0.8" />
          </svg>
          <span
            className="text-brand-dark font-semibold text-lg tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Soonix
          </span>
        </div>
      </div>
    </header>
  )
}
