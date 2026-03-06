import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DecorativeIllustrations } from "@/components/DecorativeIllustrations"
import { ArrowRight, Check } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setSubmitted(true)
  }

  return (
    <section className="relative w-full flex justify-center overflow-hidden">
      <DecorativeIllustrations />

      <div className="relative z-10 w-full max-w-[1280px] px-6 pt-14 pb-40 md:pt-20 md:pb-56 flex flex-col items-center text-center">
        {/* Centered Logo */}
        <div className="mb-10 flex flex-col items-center gap-2 animate-fade-in">
          <img src="/Logo-Symbol.svg" alt="Auvi logo" width={140} height={150} />
          {/* <img src="/Logo-Typo.svg" alt="Auvi logo" width={240} height={150} /> */}

        </div>

        {/* Headline */}
        <h1
          className="text-hero text-brand-dark max-w-[640px] mb-5 animate-fade-in"
          style={{ animationDelay: "0.08s", opacity: 0 }}
        >
          Onde sua comunidade cresce e converte
        </h1>

        {/* Subheadline */}
        <p
          className="text-brand-gray text-base md:text-lg max-w-[460px] mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.16s", opacity: 0 }}
        >
          A <span className="font-semibold">Auvi</span> é a plataforma que você estava esperando: comunidade engajada, alunos organizados e leads convertendo — tudo integrado.
        </p>

        {/* CTA Form — button inside input */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[440px] flex flex-col gap-2 animate-fade-in"
            style={{ animationDelay: "0.24s", opacity: 0 }}
          >
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
                placeholder="Seu melhor e-mail"
                className="w-full h-14 pl-5 pr-[160px] rounded-full border border-brand-border bg-white text-brand-dark placeholder:text-brand-gray/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all shadow-sm"
                aria-label="Email address"
              />
              <Button
                type="submit"
                size="lg"
                className="absolute right-1.5 h-11 px-5 rounded-full bg-brand-dark text-white hover:bg-brand-dark/85 font-medium text-sm gap-1.5 transition-all hover:shadow-md whitespace-nowrap"
              >
                Acesso antecipado
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
            {error && (
              <p className="text-sm text-red-500 text-left pl-4">{error}</p>
            )}
            <p className="text-xs text-brand-gray/60 text-center mt-1">
              Zero spam, prometido. Cancele quando quiser.
            </p>
          </form>
        ) : (
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-brand-green/30 shadow-sm animate-fade-in max-w-[380px] w-full">
            <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="text-brand-dark font-semibold text-sm">
                Você está na lista!
              </p>
              <p className="text-brand-gray text-xs mt-0.5">
                Te notificaremos assim que lançarmos.
              </p>
            </div>
          </div>
        )}

        {/* Social proof */}
        <div
          className="mt-10 flex items-center gap-3 animate-fade-in"
          style={{ animationDelay: "0.36s", opacity: 0 }}
        >
          <div className="flex -space-x-2.5">
            {[
              { bg: "#0ccd4b", initial: "A" },
              { bg: "#1977f2", initial: "B" },
              { bg: "#f59e0b", initial: "C" },
              { bg: "#8b5cf6", initial: "D" },
            ].map(({ bg, initial }) => (
              <div
                key={initial}
                className="w-8 h-8 rounded-full border-2 border-brand-bg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: bg }}
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-brand-gray text-sm">
            <span className="font-semibold text-brand-dark">4,200+</span> people already joined
          </p>
        </div>
      </div>
    </section>
  )
}
