export function ProductMockup() {
  return (
    <section className="w-full flex justify-center px-6 pb-16 md:pb-24 -mt-32 md:-mt-44 relative z-10">
      <div className="w-full max-w-[900px]">
        {/* Outer shadow/glow frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border bg-white">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-brand-light border-b border-brand-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-3">
              <div className="mx-auto w-full max-w-[280px] h-5 rounded-full bg-brand-border/60 flex items-center justify-center px-3">
                <span className="text-[10px] text-brand-gray/60 font-mono truncate">
                  app.auvi.cc/dashboard
                </span>
              </div>
            </div>
          </div>

          {/* App screenshot */}
          <img
            src="/Admin-Mockup.png"
            alt="Auvi platform preview"
            className="w-full block"
          />
        </div>
      </div>
    </section>
  )
}
