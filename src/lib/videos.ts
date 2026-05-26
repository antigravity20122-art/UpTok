export type VideoViral = {
  id: string;
  author: string;
  title: string;
  views: string;
  reason: string;
};

// Vídeos virais reais — embeds oficiais do TikTok via iframe
export const videosVirais: VideoViral[] = [
  {
    id: "6829267836783971589",
    author: "@420doggface208",
    title: "Skatista com suco de cranberry",
    views: "90M+",
    reason:
      "Vibe pura, sem esforço aparente, trilha icônica (Fleetwood Mac). Mostra que autenticidade vence produção. O loop perfeito faz o usuário rever sem perceber.",
  },
  {
    id: "6862153058223197445",
    author: "@bellapoarch",
    title: "M to the B — head bobbing",
    views: "750M+",
    reason:
      "Hook visual nos primeiros 0.2s (rosto + expressão). Vídeo de 9 segundos = retenção quase 100%. Áudio entrou em tendência e foi replicado milhões de vezes.",
  },
  {
    id: "7068017163826449669",
    author: "@khaby.lame",
    title: "Reação silenciosa a 'life hack'",
    views: "300M+",
    reason:
      "Storytelling visual sem palavras = entende em qualquer idioma. Padrão quebrado: você espera explicação, recebe gesto. Compartilhamento dispara.",
  },
  {
    id: "7095568871247465733",
    author: "@charlidamelio",
    title: "Dança com transição",
    views: "50M+",
    reason:
      "Trend dance + transição de roupa = dois ganchos em um vídeo. Comunidade replica a coreografia, gerando milhares de duets que amplificam o original.",
  },
];
