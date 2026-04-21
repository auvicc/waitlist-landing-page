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
      "A Auvi é uma plataforma de gestão de audiência para criadores brasileiros. Você centraliza todos os seus contatos — leads, membros, compradores e participantes de eventos — em um único perfil. E em cima disso, gerencia comunidades pagas, vende produtos, automatiza seu WhatsApp e acompanha a receita em tempo real. Tudo integrado, sem precisar sair da plataforma.",
  },
  {
    question: "A Auvi substitui minhas ferramentas atuais?",
    answer:
      "Sim. Se hoje você usa Hotmart ou Kiwify para vender, Telegram ou WhatsApp manual para comunidade, RD Station ou Mailchimp para leads e planilhas para controlar tudo — a Auvi substitui esse ecossistema. Uma mensalidade, um login, um lugar para conhecer sua audiência de verdade.",
  },
  {
    question: "Quando a plataforma vai lançar?",
    answer:
      "O lançamento está previsto para o segundo trimestre de 2026 — ou seja, em breve. Quem está na lista de espera agora tem garantia de acesso antecipado, 21 dias grátis e condições exclusivas de lançamento. Você será avisado por e-mail antes de abrirmos para o público geral.",
  },
  {
    question: "Quanto vai custar?",
    answer:
      "Os planos vão de R$250 a R$750 por mês, com uma taxa de 5% sobre as vendas processadas — bem menor do que os 9,9% cobrados pela Hotmart. Sem contrato anual obrigatório: comece com 21 dias grátis e cancele quando quiser. Quem entrar na lista agora terá acesso a condições especiais de lançamento.",
  },
  {
    question: "Posso trazer meus alunos/membros de outra plataforma?",
    answer:
      "Sim. A Auvi aceita importação de contatos via CSV, então você traz sua base de qualquer plataforma sem perder dados. Mais do que migrar listas: cada contato ganha um perfil unificado com histórico de compras, engajamento e estágio no ciclo de vida.",
  },
  {
    question: "A Auvi tem automação de WhatsApp?",
    answer:
      "Sim — e é um dos nossos maiores diferenciais. A Auvi adiciona e remove membros dos seus grupos de WhatsApp automaticamente com base na assinatura: assinou, entrou; cancelou, saiu. Sem trabalho manual, sem erros, sem precisar ficar monitorando.",
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
