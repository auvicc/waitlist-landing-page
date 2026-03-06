/**
 * Product mockup section — displays a stylized UI screenshot below the hero,
 * replicating the layered mockup shown in the Soonix Option B template.
 */
export function ProductMockup() {
  return (
    <section className="w-full flex justify-center px-6 pb-16 md:pb-24 -mt-32 md:-mt-44 relative z-10">
      <div className="w-full max-w-[900px]">
        {/* Outer shadow/glow frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border bg-white">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-brand-light border-b border-brand-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-4">
              <div className="mx-auto w-full max-w-[280px] h-6 rounded-full bg-brand-border/60 flex items-center justify-center px-3">
                <span className="text-[10px] text-brand-gray/60 font-mono truncate">
                  app.soonix.io/dashboard
                </span>
              </div>
            </div>
          </div>

          {/* Mock app UI */}
          <div className="bg-[#f9f9f9] p-5 md:p-8 min-h-[400px] md:min-h-[520px]">
            {/* Sidebar + main content layout */}
            <div className="flex gap-5 h-full">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-3 w-44 shrink-0">
                <div className="h-8 w-24 rounded-lg bg-brand-dark/10" />
                {[80, 65, 90, 55, 70].map((w, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 rounded bg-brand-border" />
                    <div
                      className="h-3 rounded-full bg-brand-border"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
                <div className="mt-4 h-px bg-brand-border" />
                {[60, 75, 50].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-brand-border/60" />
                    <div
                      className="h-3 rounded-full bg-brand-border/60"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Top metrics row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { label: "Subscribers", value: "4,218", color: "#0ccd4b" },
                    { label: "Open rate", value: "68.4%", color: "#1977f2" },
                    { label: "Conversions", value: "12.3%", color: "#8b5cf6" },
                  ].map(({ label, value, color }) => (
                    <div
                      key={label}
                      className="bg-white rounded-xl p-4 border border-brand-border shadow-sm"
                    >
                      <p className="text-[11px] text-brand-gray mb-1">{label}</p>
                      <p
                        className="text-xl font-bold"
                        style={{ color, fontFamily: "Inter, sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-white rounded-xl p-5 border border-brand-border shadow-sm flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-28 rounded-full bg-brand-border" />
                    <div className="h-6 w-20 rounded-full bg-brand-light border border-brand-border" />
                  </div>
                  {/* Fake bar chart */}
                  <div className="flex items-end gap-2 h-28 md:h-40">
                    {[35, 55, 42, 68, 80, 62, 90, 74, 85, 70, 95, 88].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md"
                          style={{
                            height: `${h}%`,
                            background:
                              i === 10
                                ? "#0ccd4b"
                                : i % 3 === 0
                                  ? "#1977f2"
                                  : "#dedfdf",
                            opacity: i === 10 ? 1 : 0.6 + (i % 3) * 0.15,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Table rows */}
                <div className="bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden">
                  {[90, 75, 60].map((w, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-brand-border last:border-0"
                    >
                      <div className="w-6 h-6 rounded-full bg-brand-light border border-brand-border" />
                      <div className="flex-1 h-2.5 rounded-full bg-brand-border" style={{ width: `${w}%` }} />
                      <div className="h-5 w-12 rounded-full bg-brand-green/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
