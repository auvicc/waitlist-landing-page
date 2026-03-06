export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full flex justify-center border-t border-brand-border mt-auto">
      <div className="w-full max-w-[1280px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img src="/Logotipo.svg" alt="Auvi logo" width={100} height={150} />
        </div>

        {/* Copyright */}
        <p className="text-brand-gray text-xs text-center">
          © {year} Auvi. Todos os direitos reservados.
        </p>

        {/* Links */}
        <nav className="flex items-center gap-5" aria-label="Footer navigation">
          {["Privacidade", "Termos", "Contato"].map((link) => (
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
