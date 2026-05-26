import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BackgroundOrbs, Reveal, Marquee, MagneticCard, ParallaxY } from "@/components/visual";
import { Nav, Footer } from "@/components/nav";
import { dicas, ferramentas, depoimentos } from "@/lib/content";
import { videosVirais } from "@/lib/videos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UpTok — Como Viralizar no TikTok em 2026" },
      { name: "description", content: "Aprenda os métodos usados pelos criadores que explodem visualizações no TikTok em 2026. Estratégias, ferramentas de IA e dicas práticas." },
      { property: "og:title", content: "UpTok — Como Viralizar no TikTok em 2026" },
      { property: "og:description", content: "Aprenda os métodos usados para explodir visualizações." },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const word = "Viralizar".split("");

  return (
    <div className="min-h-screen">
      <BackgroundOrbs />
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-44 overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="mx-auto max-w-6xl text-center relative">
          {/* Ambient ring */}
          <div className="pointer-events-none absolute left-1/2 top-40 -translate-x-1/2 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full border border-[oklch(0.72_0.22_340/0.2)] animate-spin-slow" />
          <div className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 h-[380px] w-[380px] md:h-[520px] md:w-[520px] rounded-full border border-[oklch(0.82_0.18_200/0.12)] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8 relative"
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.22_340)] animate-pulse-glow" />
            <span className="animate-gradient-text font-semibold">AO VIVO</span>
            • Atualizado para 2026
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-bold tracking-tight leading-[0.95] relative">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block text-foreground/90"
            >
              Como
            </motion.span>
            <span className="block">
              {word.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block animate-gradient-text"
                  style={{ transformOrigin: "bottom" }}
                >
                  {c}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="block text-foreground/90"
            >
              no TikTok <span className="text-muted-foreground/60">'26</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            O playbook completo dos criadores que explodem views — estratégias reais, ferramentas de IA, zero enrolação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#dicas"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)] text-background font-semibold text-base hover:scale-105 transition-transform animate-glow-ring overflow-hidden"
            >
              <span className="relative z-10">Começar agora</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[oklch(0.82_0.18_200)] to-[oklch(0.72_0.22_340)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#dicas"
              className="px-8 py-4 rounded-full glass text-foreground font-semibold text-base hover:bg-background/60 transition-colors"
            >
              Ver Estratégias →
            </a>
          </motion.div>

          {/* Floating metric cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-24 grid grid-cols-3 max-w-2xl mx-auto gap-4"
          >
            {[
              { k: dicas.length.toString(), v: "estratégias", c: "oklch(0.72 0.22 340)" },
              { k: ferramentas.length.toString(), v: "ferramentas IA", c: "oklch(0.82 0.18 200)" },
              { k: "100%", v: "gratuito", c: "oklch(0.7 0.22 300)" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="glass rounded-2xl py-5 px-2 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 -top-px h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.c}, transparent)` }} />
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["For You Page", "Hook brutal", "Retenção", "Algoritmo", "Viralizar", "Watch Time", "Trending Sounds", "CapCut", "Storytelling"]} />

      {/* DICAS */}
      <section id="dicas" className="px-6 py-32 scroll-mt-20 relative">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-sm text-[oklch(0.82_0.18_200)] uppercase tracking-[0.3em] mb-4">// Estratégias</div>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                As táticas que <br />
                <span className="animate-gradient-text">realmente funcionam.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
                {dicas.length} guias práticos. Clique em qualquer card pra abrir o passo a passo completo.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dicas.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 0.08}>
                <MagneticCard className="h-full">
                  <Link
                    to="/dica/$slug"
                    params={{ slug: d.slug }}
                    className="group relative block h-full glass rounded-3xl p-7 overflow-hidden hover:border-[oklch(0.72_0.22_340/0.5)] transition-all"
                  >
                    <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[oklch(0.72_0.22_340/0.3)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.18_200/0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="mb-5 h-20 w-20 rounded-2xl bg-gradient-to-br from-[oklch(0.72_0.22_340/0.15)] to-[oklch(0.75_0.2_200/0.15)] p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <img src={d.image} alt={d.title} loading="lazy" width={80} height={80} className="h-full w-full object-contain drop-shadow-[0_0_18px_oklch(0.72_0.22_340/0.6)]" />
                      </div>
                      <div className="text-xs font-mono text-muted-foreground mb-2">0{i + 1 < 10 ? i + 1 : i + 1}</div>
                      <h3 className="text-xl font-bold tracking-tight">{d.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.short}</p>
                      <div className="mt-6 inline-flex items-center text-sm text-[oklch(0.82_0.18_200)] font-medium">
                        Ler guia
                        <span className="ml-1.5 transition-transform group-hover:translate-x-2">→</span>
                      </div>
                    </div>
                  </Link>
                </MagneticCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FERRAMENTAS */}
      <section id="ferramentas" className="px-6 py-32 scroll-mt-20 relative">
        <ParallaxY range={60}>
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="text-center mb-20">
                <div className="text-sm text-[oklch(0.72_0.22_340)] uppercase tracking-[0.3em] mb-4">// Arsenal</div>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                  IA & ferramentas <br />
                  <span className="animate-gradient-text">essenciais.</span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
                  O stack moderno usado pelos criadores que escalam rápido.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ferramentas.map((f, i) => (
                <Reveal key={f.name} delay={(i % 4) * 0.06}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group glass rounded-3xl p-6 h-full hover:border-[oklch(0.82_0.18_200/0.5)] transition-colors relative overflow-hidden"
                  >
                    <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[oklch(0.82_0.18_200/0.25)] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.2_200/0.15)] to-[oklch(0.7_0.22_300/0.15)] p-2 flex items-center justify-center">
                          <img src={f.image} alt={f.name} loading="lazy" width={56} height={56} className="h-full w-full object-contain drop-shadow-[0_0_12px_oklch(0.82_0.18_200/0.6)]" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[oklch(1_0_0/0.05)] text-muted-foreground">{f.tag}</span>
                      </div>
                      <h3 className="font-bold text-lg">{f.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </ParallaxY>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="px-6 py-32 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-sm text-[oklch(0.7_0.22_300)] uppercase tracking-[0.3em] mb-4">// Resultados</div>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                Criadores que <br />
                <span className="animate-gradient-text">explodiram.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {depoimentos.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: i % 2 === 0 ? -0.5 : 0.5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
                >
                  <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-50 ${d.glow === "pink" ? "bg-[oklch(0.72_0.22_340)]" : "bg-[oklch(0.75_0.2_200)]"}`} />
                  <div className="absolute -bottom-32 -left-24 h-56 w-56 rounded-full blur-3xl opacity-30 bg-[oklch(0.7_0.22_300)]" />
                  <div className="relative">
                    <div className="text-5xl mb-3 text-gradient leading-none">"</div>
                    <p className="text-xl md:text-2xl font-semibold leading-snug tracking-tight">{d.quote}</p>
                    <div className="mt-8 flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${d.glow === "pink" ? "from-[oklch(0.72_0.22_340)] to-[oklch(0.7_0.22_300)]" : "from-[oklch(0.75_0.2_200)] to-[oklch(0.7_0.22_300)]"} ring-2 ring-background`} />
                      <div>
                        <div className="font-semibold text-sm">{d.name}</div>
                        <div className="text-xs text-muted-foreground">{d.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden animate-tilt">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.72_0.22_340/0.2)] via-transparent to-[oklch(0.75_0.2_200/0.2)]" />
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[oklch(0.72_0.22_340)] via-[oklch(0.82_0.18_200)] to-[oklch(0.7_0.22_300)] opacity-20 blur-2xl" />
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                  Pronto pra <br /><span className="animate-gradient-text">viralizar?</span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
                  Comece pela dica que mais te interessa. Tudo gratuito, sem cadastro, sem pegadinha.
                </p>
                <a
                  href="#dicas"
                  className="mt-10 inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)] text-background font-bold hover:scale-105 transition-transform animate-glow-ring"
                >
                  Explorar {dicas.length} estratégias
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
