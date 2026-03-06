export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full flex justify-center border-t border-brand-border mt-auto">
      <div className="w-full max-w-[1280px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#262424" />
            <circle cx="10" cy="16" r="4" fill="#0ccd4b" />
            <circle cx="22" cy="16" r="4" fill="#1977f2" opacity="0.8" />
          </svg>
          <span className="text-brand-dark text-sm font-medium">Soonix</span>
        </div>

        {/* Copyright */}
        <p className="text-brand-gray text-xs text-center">
          © {year} Soonix. All rights reserved.
        </p>

        {/* Links */}
        <nav className="flex items-center gap-5" aria-label="Footer navigation">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-brand-gray text-xs hover:text-brand-dark transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
