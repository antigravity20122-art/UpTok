import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight">
          <span className="text-gradient">Up</span>
          <span className="text-foreground">Tok</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#dicas" className="hover:text-foreground transition-colors">Dicas</a>
          <a href="/#ferramentas" className="hover:text-foreground transition-colors">Ferramentas</a>
          <a href="/#depoimentos" className="hover:text-foreground transition-colors">Resultados</a>
        </nav>
        <a
          href="/#dicas"
          className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)] text-background font-semibold hover:opacity-90 transition-opacity"
        >
          Começar
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-bold text-foreground"><span className="text-gradient">Viraliza</span>.tk</div>
          <p className="mt-2">Conteúdo 100% gratuito. Feito para criadores.</p>
        </div>
        <p>© 2026 — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
