import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que é a Auvi?",
    answer:
      "A Auvi é uma plataforma completa para criadores brasileiros gerenciarem e monetizarem sua audiência. Aqui você tem comunidade, área de membros, vendas de cursos e eventos — tudo integrado em um só lugar, sem precisar de 10 ferramentas diferentes.",
  },
  {
    question: "A Auvi substitui minhas ferramentas atuais?",
    answer:
      "Sim. Se hoje você usa uma ferramenta para comunidade, outra para área de membros, outra para vendas e outra para gerenciar contatos — a Auvi centraliza tudo isso. Menos login, menos mensalidade, mais foco no que importa: sua audiência."
  },
  {
    question: "Quando a plataforma vai lançar?",
    answer:
      "Estamos em fase final de desenvolvimento. Quem entrar na lista de espera agora terá acesso antecipado exclusivo antes do lançamento público — e será avisado em primeira mão quando abrirmos as portas.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Simples e brasileiro. Você recebe via PIX, boleto ou cartão parcelado — direto na sua conta, sem burocracia de plataforma internacional. Configuração rápida e você já pode começar a vender.",
  },
  {
    question: "Posso trazer meus alunos/membros de outra plataforma?",
    answer:
      "Sim! A Auvi foi pensada para facilitar a migração. Você pode importar sua base de alunos, membros e leads de outras ferramentas sem perder dados ou histórico. Queremos que a transição seja o mais suave possível.",
  },
  {
    question: "O que vou poder fazer na Auvi?",
    answer:
      "Criar e gerenciar comunidades privadas, vender cursos e mentorias, organizar eventos online, construir sua área de membros, acompanhar seus leads — tudo em português e integrado. É como ter Circle + Hotmart + CRM em uma única plataforma.",
  },
]

export function FAQ() {
  return (
    <section className="w-full flex justify-center px-6 pb-20 md:pb-28">
      <div className="w-full max-w-[720px]">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2
            className="text-brand-dark mb-3"
            style={{
              fontFamily: "Roboto Serif, Georgia, serif",
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: "1.3",
              letterSpacing: "-0.03em",
              fontWeight: 400,
            }}
          >
            Perguntas frequentes
          </h2>
          <p className="text-brand-gray text-base max-w-[400px] mx-auto leading-relaxed">
            Tudo que você precisa saber antes de se cadastrar na lista de espera.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
