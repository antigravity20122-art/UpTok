import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BackgroundOrbs, Reveal } from "@/components/visual";
import { Nav, Footer } from "@/components/nav";
import { dicas, ferramentas, depoimentos } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Como Viralizar no TikTok em 2026 — Guia Gratuito" },
      { name: "description", content: "Aprenda os métodos usados pelos criadores que explodem visualizações no TikTok em 2026. Estratégias, ferramentas de IA e dicas práticas." },
      { property: "og:title", content: "Como Viralizar no TikTok em 2026" },
      { property: "og:description", content: "Aprenda os métodos usados para explodir visualizações." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <BackgroundOrbs />
      <Nav />

      {/* HERO */}
      <section className="relative px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.22_340)] animate-pulse-glow" />
            Atualizado para 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            Como Viralizar no <span className="text-gradient">TikTok</span> em 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Aprenda os métodos usados para explodir visualizações. Estratégias reais, ferramentas modernas e zero enrolação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#dicas"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)] text-background font-semibold text-base hover:scale-105 transition-transform glow-pink"
            >
              Começar
            </a>
            <a
              href="#dicas"
              className="px-8 py-4 rounded-full glass text-foreground font-semibold text-base hover:bg-background/60 transition-colors"
            >
              Ver Estratégias
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 max-w-xl mx-auto gap-4 text-center"
          >
            {[
              { k: "+9", v: "estratégias" },
              { k: "8", v: "ferramentas IA" },
              { k: "100%", v: "gratuito" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl py-4 px-2">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DICAS */}
      <section id="dicas" className="px-6 py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-sm text-[oklch(0.82_0.18_200)] uppercase tracking-widest mb-3">Estratégias</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                As táticas que <span className="text-gradient">realmente funcionam</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Clique em qualquer card para ler o guia completo.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dicas.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.05}>
                <Link
                  to="/dica/$slug"
                  params={{ slug: d.slug }}
                  className="group relative block h-full glass rounded-3xl p-7 overflow-hidden hover:border-[oklch(0.72_0.22_340/0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.72_0.22_340/0.4)]"
                >
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[oklch(0.72_0.22_340/0.25)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.72_0.22_340/0.15)] to-[oklch(0.75_0.2_200/0.15)] p-2 flex items-center justify-center">
                      <img src={d.image} alt={d.title} loading="lazy" width={64} height={64} className="h-full w-full object-contain drop-shadow-[0_0_12px_oklch(0.72_0.22_340/0.5)]" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.short}</p>
                    <div className="mt-6 inline-flex items-center text-sm text-[oklch(0.82_0.18_200)] font-medium">
                      Ler guia
                      <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FERRAMENTAS */}
      <section id="ferramentas" className="px-6 py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-sm text-[oklch(0.72_0.22_340)] uppercase tracking-widest mb-3">Arsenal</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                IA & ferramentas <span className="text-gradient">essenciais</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                O stack moderno usado pelos criadores que escalam rápido.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ferramentas.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.04}>
                <div className="group glass rounded-3xl p-6 h-full hover:border-[oklch(0.82_0.18_200/0.5)] transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{f.emoji}</div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[oklch(1_0_0/0.05)] text-muted-foreground">{f.tag}</span>
                  </div>
                  <h3 className="font-bold text-lg">{f.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="px-6 py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-sm text-[oklch(0.7_0.22_300)] uppercase tracking-widest mb-3">Resultados</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Criadores que <span className="text-gradient">explodiram</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {depoimentos.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <div className={`glass rounded-3xl p-8 relative overflow-hidden hover:-translate-y-1 transition-transform`}>
                  <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-40 ${d.glow === "pink" ? "bg-[oklch(0.72_0.22_340)]" : "bg-[oklch(0.75_0.2_200)]"}`} />
                  <div className="relative">
                    <div className="text-3xl mb-3">"</div>
                    <p className="text-lg md:text-xl font-medium leading-snug">{d.quote}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${d.glow === "pink" ? "from-[oklch(0.72_0.22_340)] to-[oklch(0.7_0.22_300)]" : "from-[oklch(0.75_0.2_200)] to-[oklch(0.7_0.22_300)]"}`} />
                      <div>
                        <div className="font-semibold text-sm">{d.name}</div>
                        <div className="text-xs text-muted-foreground">{d.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.72_0.22_340/0.15)] to-[oklch(0.75_0.2_200/0.15)]" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Pronto pra <span className="text-gradient">viralizar?</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Começa pela dica que mais te interessa. Tudo gratuito, sem cadastro.
                </p>
                <a
                  href="#dicas"
                  className="mt-8 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)] text-background font-semibold hover:scale-105 transition-transform glow-pink"
                >
                  Explorar estratégias
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
