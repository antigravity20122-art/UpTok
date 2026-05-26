import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BackgroundOrbs } from "@/components/visual";
import { Nav, Footer } from "@/components/nav";
import { dicas } from "@/lib/content";

export const Route = createFileRoute("/dica/$slug")({
  loader: ({ params }) => {
    const dica = dicas.find((d) => d.slug === params.slug);
    if (!dica) throw notFound();
    return { dica };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.dica.title} — Viralizar no TikTok 2026` },
          { name: "description", content: loaderData.dica.short },
          { property: "og:title", content: loaderData.dica.title },
          { property: "og:description", content: loaderData.dica.short },
        ]
      : [],
  }),
  component: DicaPage,
});

function DicaPage() {
  const { dica } = Route.useLoaderData();
  const idx = dicas.findIndex((d) => d.slug === dica.slug);
  const next = dicas[(idx + 1) % dicas.length];

  return (
    <div className="min-h-screen">
      <BackgroundOrbs />
      <Nav />

      <article className="px-6 pt-16 pb-24">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            ← Todas as dicas
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl md:text-7xl mb-6">{dica.emoji}</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {dica.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{dica.short}</p>
          </motion.div>

          <div className="mt-16 space-y-6">
            {dica.sections.map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="glass rounded-3xl p-7 md:p-9 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)]" />
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-mono text-[oklch(0.82_0.18_200)]">0{i + 1}</span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">{s.heading}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed md:text-lg">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 glass rounded-3xl p-8 flex items-center justify-between gap-4"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Próximo</div>
              <div className="mt-1 font-bold text-lg">{next.emoji} {next.title}</div>
            </div>
            <Link
              to="/dica/$slug"
              params={{ slug: next.slug }}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_340)] to-[oklch(0.75_0.2_200)] text-background font-semibold text-sm hover:scale-105 transition-transform whitespace-nowrap"
            >
              Continuar →
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
