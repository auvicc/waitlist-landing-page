import { Analytics } from "@vercel/analytics/react"
import { Hero } from "@/components/Hero"
import { ProductMockup } from "@/components/ProductMockup"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <main className="flex-1 flex flex-col">
        <Hero />
        <ProductMockup />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
