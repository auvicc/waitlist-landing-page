import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "When is the product launching?",
    answer:
      "We're working hard to get everything just right. Once you join the waitlist, you'll be among the first to know the exact launch date — and get early access before anyone else.",
  },
  {
    question: "What will I get as an early member?",
    answer:
      "Early members get exclusive access before the public launch, special founding-member pricing, and the ability to help shape the product roadmap. Your feedback will directly influence what we build.",
  },
  {
    question: "Is it free to join the waitlist?",
    answer:
      "Absolutely. Joining the waitlist is completely free and takes less than 30 seconds. No credit card required, no commitments — just your email.",
  },
  {
    question: "How many people are on the waitlist?",
    answer:
      "We currently have over 4,200 people waiting for early access. Spots are limited for the first cohort, so the sooner you join, the higher your position.",
  },
  {
    question: "Will my data be kept private?",
    answer:
      "Your privacy is our priority. We will never sell or share your information with third parties. Your email will only be used to notify you about the product launch and relevant updates.",
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
            Frequently asked questions
          </h2>
          <p className="text-brand-gray text-base max-w-[400px] mx-auto leading-relaxed">
            Everything you need to know before joining the waitlist.
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
