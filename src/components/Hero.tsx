import { useState } from "react"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { DecorativeIllustrations } from "@/components/DecorativeIllustrations"
import { ArrowRight, Check, X } from "lucide-react"

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length === 11
}

export function Hero() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [step, setStep] = useState<"form" | "name" | "done">("form")
  const [error, setError] = useState("")

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValidPhone(phone)) {
      setError("Digite um número de WhatsApp válido com DDD.")
      return
    }
    setError("")
    setStep("name")
  }

  async function handleNameSubmit(e: React.FormEvent) {
    e.preventDefault()
    const finalName = name.trim() || "Anônimo"
    track("signup", { phone, name: finalName })
    setStep("done")
    fetch("https://hook.relay.app/api/v1/playbook/cmo95qy2900fy0qlyavsa8zkw/trigger/Lye0mu6B4I3f39-35eIjkQ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: finalName,
        whatsapp: phone,
        createdAt: new Date().toISOString(),
      }),
    }).catch(() => { })
  }

  return (
    <section className="relative w-full flex justify-center overflow-hidden">
      <DecorativeIllustrations />

      <div className="relative z-10 w-full max-w-[1280px] px-6 pt-14 pb-40 md:pt-20 md:pb-56 flex flex-col items-center text-center">
        {/* Centered Logo */}
        <div className="mb-10 flex flex-col items-center gap-2 animate-fade-in">
          <img src="/Logo-Symbol.svg" alt="Auvi logo" width={140} height={150} />
        </div>

        {/* Headline */}
        <h1
          className="text-hero text-brand-dark max-w-[640px] mb-5 animate-fade-in"
          style={{ animationDelay: "0.08s", opacity: 0 }}
        >
          A plataforma para monetizar a sua audiência
        </h1>

        {/* Subheadline */}
        <p
          className="text-brand-gray text-base md:text-lg max-w-[460px] mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.16s", opacity: 0 }}
        >
          Pare de usar 4 ferramentas diferentes. Gerencie comunidade, conteúdo, eventos e pagamentos em um só lugar.
        </p>

        {/* CTA Form */}
        {step === "form" && (
          <form
            onSubmit={handlePhoneSubmit}
            className="w-full max-w-[440px] flex flex-col gap-2 animate-fade-in"
            style={{ animationDelay: "0.24s", opacity: 0 }}
          >
            <div className="relative flex items-center">
              <img
                src="/whatsapp-logo.svg"
                alt=""
                aria-hidden="true"
                className="absolute left-4 w-5 h-5 shrink-0 pointer-events-none"
              />
              <input
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => {
                  setPhone(maskPhone(e.target.value))
                  setError("")
                }}
                placeholder="(11) 99999-9999"
                className="w-full h-14 pl-11 pr-[160px] rounded-full border border-brand-border bg-white text-brand-dark placeholder:text-brand-gray/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b3a2a]/40 focus:border-[#8b3a2a] transition-all shadow-sm"
                aria-label="WhatsApp number"
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
        )}

        {/* Success state */}
        {step === "done" && (
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-[#8b3a2a]/20 shadow-sm animate-fade-in max-w-[380px] w-full">
            <div className="w-9 h-9 rounded-full bg-[#8b3a2a] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="text-brand-dark font-semibold text-sm">
                {name.trim() ? `Bem-vindo(a), ${name.trim()}!` : "Você está dentro!"}
              </p>
              <p className="text-brand-gray text-xs mt-0.5">
                Você será um dos primeiros a conhecer a Auvi.
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
            {
              [
                "https://media.licdn.com/dms/image/v2/D4D03AQGCpFtuXrVVKQ/profile-displayphoto-shrink_200_200/B4DZbzM31bGkAY-/0/1747836960677?e=2147483647&v=beta&t=NG_dcfuFlbpa7I0xedO09AtfCVnv3tchIb7KZO2T51U",
                "https://i.pravatar.cc/64?img=26",
                "https://i.pravatar.cc/64?img=44",
                "https://media.licdn.com/dms/image/v2/D4D03AQEias_yzIBeZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728572976182?e=1778112000&v=beta&t=xPoHBFLOP7ZPCwv-8lJtSklLvJDsMMq8wSwbfI1iWeQ"]
                .map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-brand-bg object-cover"
                  />
                ))}
          </div>
          <p className="text-brand-gray text-sm">
            <span className="font-semibold text-brand-dark">150+</span> pessoas já se cadastraram
          </p>
        </div>
      </div>

      {/* Name modal */}
      {step === "name" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fade-in"
            style={{ animationDuration: "0.2s" }}
          />

          {/* Modal */}
          <form
            onSubmit={handleNameSubmit}
            className="relative bg-white rounded-3xl shadow-2xl px-8 py-10 w-full max-w-[420px] flex flex-col items-center gap-6 animate-fade-in"
            style={{ animationDuration: "0.25s" }}
          >
            <button
              type="button"
              onClick={() => setStep("form")}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-brand-gray/50 hover:text-brand-gray hover:bg-brand-light transition-all"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#8b3a2a]/10 flex items-center justify-center">
              <span className="text-2xl">👋</span>
            </div>

            <div className="text-center">
              <h2 className="text-brand-dark font-semibold text-xl mb-1">
                Como você gostaria de ser chamado?
              </h2>
              <p className="text-brand-gray text-sm">
                Queremos te receber do jeito certo.
              </p>
            </div>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu primeiro nome"
              autoFocus
              className="w-full h-12 px-5 rounded-full border border-brand-border bg-white text-brand-dark placeholder:text-brand-gray/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b3a2a]/40 focus:border-[#8b3a2a] transition-all shadow-sm"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 rounded-full bg-[#8b3a2a] hover:bg-[#7a3325] text-white font-medium text-sm gap-2 transition-all hover:shadow-md"
            >
              Garantir meu acesso antecipado
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>

            <button
              type="button"
              onClick={handleNameSubmit}
              className="text-xs text-brand-gray/50 hover:text-brand-gray transition-colors"
            >
              Prefiro não informar
            </button>
          </form>
        </div>
      )}
    </section>
  )
}
