import quandoPostar from "@/assets/dica-quando-postar.png";
import prenderAtencao from "@/assets/dica-prender-atencao.png";
import retencao from "@/assets/dica-retencao.png";
import musicas from "@/assets/dica-musicas.png";
import views from "@/assets/dica-views.png";
import comentarios from "@/assets/dica-comentarios.png";
import fyp from "@/assets/dica-fyp.png";
import hashtags from "@/assets/dica-hashtags.png";
import viciantes from "@/assets/dica-viciantes.png";

import toolChatgpt from "@/assets/tool-chatgpt.png";
import toolGemini from "@/assets/tool-gemini.png";
import toolClaude from "@/assets/tool-claude.png";
import toolCapcut from "@/assets/tool-capcut.png";
import toolCanva from "@/assets/tool-canva.png";
import toolRunway from "@/assets/tool-runway.png";
import toolKling from "@/assets/tool-kling.png";
import toolElevenlabs from "@/assets/tool-elevenlabs.png";

export type Dica = {
  slug: string;
  title: string;
  image: string;
  short: string;
  sections: { heading: string; body: string }[];
};

export const dicas: Dica[] = [
  {
    slug: "quando-postar",
    image: quandoPostar,
    title: "Quando postar",
    short: "Os melhores horários para maximizar alcance no TikTok.",
    sections: [
      { heading: "Horários de ouro", body: "Os melhores horários costumam ser entre 11h-13h e 19h-23h, quando o público brasileiro está mais ativo. Teste por 7 dias e analise quais postagens performaram melhor." },
      { heading: "Consistência > volume", body: "Postar 1 vídeo por dia no mesmo horário ensina o algoritmo quando entregar seu conteúdo. Crie uma rotina." },
      { heading: "Use os Insights", body: "Ative a conta Pro e veja em 'Seguidores' os horários em que sua audiência está online. Poste 30 min antes do pico." },
    ],
  },
  {
    slug: "prender-atencao",
    image: prenderAtencao,
    title: "Como prender atenção",
    short: "Os 3 primeiros segundos decidem se o vídeo viraliza.",
    sections: [
      { heading: "Hook visual", body: "Comece com movimento, corte rápido ou algo inesperado nos primeiros 0.5s. Nada de logo, intro ou 'fala galera'." },
      { heading: "Hook textual", body: "Frase de impacto em destaque: 'Ninguém te conta isso', 'Eu não acreditei até testar', 'Faça isso antes de postar'." },
      { heading: "Padrão quebrado", body: "Mostre um resultado, depois volte ao início. O cérebro precisa entender como você chegou ali — e assiste tudo." },
    ],
  },
  {
    slug: "aumentar-retencao",
    image: retencao,
    title: "Como aumentar retenção",
    short: "Retenção > tudo. Quem segura a audiência, viraliza.",
    sections: [
      { heading: "Loop perfeito", body: "Faça o final conectar com o começo. O usuário assiste 2x sem perceber — o algoritmo entende como engajamento." },
      { heading: "Cortes a cada 1-2s", body: "Use jump cuts agressivos no CapCut. Nada de cena parada por mais de 2 segundos." },
      { heading: "Promessa + entrega", body: "Prometa algo no início ('vou te mostrar 3 erros') e só entregue no fim. Curiosidade segura até o último frame." },
    ],
  },
  {
    slug: "musicas-virais",
    image: musicas,
    title: "Como usar músicas virais",
    short: "Áudios em alta são atalho para o Para Você.",
    sections: [
      { heading: "Descubra o que está bombando", body: "Vá em 'Descobrir' → role o feed e anote os áudios com a seta crescente. Use nas próximas 48h." },
      { heading: "Salve sempre", body: "Salve 10 áudios por dia. Quando precisar gravar, já terá um banco de tendências." },
      { heading: "Use o som original", body: "Não use áudio externo. Selecione direto do TikTok para o algoritmo agrupar você na tendência." },
    ],
  },
  {
    slug: "mais-views",
    image: views,
    title: "Como pegar mais views",
    short: "Estratégias para escalar visualizações organicamente.",
    sections: [
      { heading: "Vídeos curtos viralizam mais", body: "7-15s tem maior taxa de conclusão. Mais conclusão = mais entrega." },
      { heading: "Texto on-screen sempre", body: "70% assiste sem som. Legenda grande, contrastada, e sincronizada com a fala." },
      { heading: "CTAs invisíveis", body: "Pergunte algo polêmico no final em vez de 'curte e segue'. Comentário é o sinal mais forte para o algoritmo." },
    ],
  },
  {
    slug: "comentarios",
    image: comentarios,
    title: "Como conseguir comentários",
    short: "Comentários são o ouro do algoritmo do TikTok.",
    sections: [
      { heading: "Erre de propósito", body: "Coloque uma palavra errada na legenda. As pessoas AMAM corrigir. Funciona sempre." },
      { heading: "Pergunta polarizadora", body: "'Time A ou Time B?' gera dezenas de comentários. Escolha temas com lados claros." },
      { heading: "Responda nos primeiros 30min", body: "Responder em vídeo cria novo conteúdo + sinal de engajamento. Use a função 'Responder com vídeo'." },
    ],
  },
  {
    slug: "para-voce",
    image: fyp,
    title: "Como aparecer no Para Você",
    short: "O algoritmo do FYP decifrado.",
    sections: [
      { heading: "Nicho consistente", body: "Poste sobre 1 tema central por 30 dias. O algoritmo precisa entender quem é seu público." },
      { heading: "Sinais de qualidade", body: "Watch time completo, rewatch, compartilhamento e comentário. Otimize o vídeo para esses 4." },
      { heading: "Não delete vídeos", body: "Deletar reseta sinais e pode penalizar a conta. Deixe o vídeo ruim morrer sozinho." },
    ],
  },
  {
    slug: "hashtags",
    image: hashtags,
    title: "Como usar hashtags",
    short: "A fórmula que ainda funciona em 2026.",
    sections: [
      { heading: "Fórmula 3-2-1", body: "3 hashtags de nicho + 2 médias + 1 grande (#fyp, #viral). Mistura entrega comunidade + descoberta ampla." },
      { heading: "Evite proibidas", body: "Hashtags como #fyp4u ou genéricas demais não ajudam. Foque em palavras que descrevem o conteúdo." },
      { heading: "Hashtag de série", body: "Crie uma hashtag única para sua série. Faz o usuário ver mais vídeos seus = mais watch time." },
    ],
  },
  {
    slug: "videos-viciantes",
    image: viciantes,
    title: "Como criar vídeos viciantes",
    short: "Estrutura comprovada para vídeos que prendem.",
    sections: [
      { heading: "Estrutura HSPL", body: "Hook → Story → Payoff → Loop. Use em todo vídeo. Resultado garantido em retenção." },
      { heading: "Edição sensorial", body: "Som efeito a cada corte (whoosh, ding). O cérebro segue estímulo auditivo + visual." },
      { heading: "Cliffhanger no meio", body: "Antes da resposta, jogue 'mas tem um detalhe...' e mostre o resultado. Ninguém pula." },
    ],
  },
];

export type Ferramenta = { name: string; image: string; desc: string; tag: string };

export const ferramentas: Ferramenta[] = [
  { name: "ChatGPT", image: toolChatgpt, tag: "Texto", desc: "Gere roteiros, hooks e ideias de conteúdo em segundos." },
  { name: "Gemini", image: toolGemini, tag: "Pesquisa", desc: "Análise de tendências e pesquisa profunda em tempo real." },
  { name: "Claude", image: toolClaude, tag: "Roteiro", desc: "Roteiros longos, criativos e com excelente naturalidade." },
  { name: "CapCut", image: toolCapcut, tag: "Edição", desc: "Editor #1 do TikTok. Cortes rápidos, legendas e efeitos virais." },
  { name: "Canva", image: toolCanva, tag: "Design", desc: "Thumbnails, capas e elementos visuais em minutos." },
  { name: "Runway", image: toolRunway, tag: "Vídeo IA", desc: "Crie cenas impossíveis com vídeo gerado por IA." },
  { name: "Kling", image: toolKling, tag: "Vídeo IA", desc: "Geração de vídeo cinematográfico ultra-realista." },
  { name: "ElevenLabs", image: toolElevenlabs, tag: "Voz IA", desc: "Vozes humanas para narração e dublagem dos seus vídeos." },
];

export const depoimentos = [
  { name: "Marina S.", role: "Criadora de lifestyle", quote: "Saí de 300 views para 100 mil em duas semanas seguindo essas dicas.", glow: "pink" as const },
  { name: "Rafael T.", role: "Edits de futebol", quote: "Ganhei 27 mil seguidores em 1 mês. O hook nos primeiros segundos mudou tudo.", glow: "cyan" as const },
  { name: "Júlia M.", role: "Receitas rápidas", quote: "Meu vídeo viralizou: 4.2 milhões de views. Não dá pra acreditar.", glow: "pink" as const },
  { name: "Lucas P.", role: "Humor", quote: "Aprendi a estrutura HSPL e meus vídeos param de morrer aos 200 views.", glow: "cyan" as const },
];
