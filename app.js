const tabela = [
  { pos: 1, nome: 'Palmeiras', pontos: 58, jogos: 28, vitorias: 17, empates: 7, derrotas: 4, gp: 42, gc: 18, sg: 24, cor: '#0f9d8c' },
  { pos: 2, nome: 'Flamengo', pontos: 55, jogos: 28, vitorias: 16, empates: 7, derrotas: 5, gp: 47, gc: 26, sg: 21, cor: '#d91d1d' },
  { pos: 3, nome: 'Atlético-MG', pontos: 53, jogos: 28, vitorias: 15, empates: 8, derrotas: 5, gp: 41, gc: 20, sg: 21, cor: '#0a5ec9' },
  { pos: 4, nome: 'Fortaleza', pontos: 49, jogos: 28, vitorias: 14, empates: 7, derrotas: 7, gp: 39, gc: 28, sg: 11, cor: '#f4c542' },
  { pos: 5, nome: 'Internacional', pontos: 47, jogos: 28, vitorias: 13, empates: 8, derrotas: 7, gp: 36, gc: 29, sg: 7, cor: '#d52d2d' },
  { pos: 6, nome: 'São Paulo', pontos: 46, jogos: 28, vitorias: 12, empates: 10, derrotas: 6, gp: 35, gc: 26, sg: 9, cor: '#0d6efd' },
  { pos: 7, nome: 'Grêmio', pontos: 43, jogos: 28, vitorias: 11, empates: 10, derrotas: 7, gp: 33, gc: 27, sg: 6, cor: '#1d4f91' },
  { pos: 8, nome: 'Bragantino', pontos: 39, jogos: 28, vitorias: 10, empates: 9, derrotas: 9, gp: 31, gc: 30, sg: 1, cor: '#d8a72d' },
  { pos: 9, nome: 'Bahia', pontos: 37, jogos: 28, vitorias: 9, empates: 10, derrotas: 9, gp: 29, gc: 31, sg: -2, cor: '#0da96a' },
  { pos: 10, nome: 'Vasco', pontos: 36, jogos: 28, vitorias: 9, empates: 9, derrotas: 10, gp: 30, gc: 33, sg: -3, cor: '#f3d409' },
  { pos: 11, nome: 'Corinthians', pontos: 35, jogos: 28, vitorias: 9, empates: 8, derrotas: 11, gp: 31, gc: 34, sg: -3, cor: '#d61f2a' },
  { pos: 12, nome: 'Cruzeiro', pontos: 34, jogos: 28, vitorias: 8, empates: 10, derrotas: 10, gp: 28, gc: 31, sg: -3, cor: '#7a2dff' },
  { pos: 13, nome: 'Botafogo', pontos: 33, jogos: 28, vitorias: 8, empates: 9, derrotas: 11, gp: 24, gc: 29, sg: -5, cor: '#3b82f6' },
  { pos: 14, nome: 'Cuiabá', pontos: 31, jogos: 28, vitorias: 8, empates: 7, derrotas: 13, gp: 25, gc: 34, sg: -9, cor: '#ca8a04' },
  { pos: 15, nome: 'Fluminense', pontos: 30, jogos: 28, vitorias: 7, empates: 9, derrotas: 12, gp: 25, gc: 36, sg: -11, cor: '#5ca6ea' },
  { pos: 16, nome: 'Santos', pontos: 28, jogos: 28, vitorias: 6, empates: 10, derrotas: 12, gp: 24, gc: 35, sg: -11, cor: '#1f9d64' },
  { pos: 17, nome: 'Juventude', pontos: 27, jogos: 28, vitorias: 6, empates: 9, derrotas: 13, gp: 22, gc: 37, sg: -15, cor: '#facc15' },
  { pos: 18, nome: 'Goiás', pontos: 25, jogos: 28, vitorias: 6, empates: 7, derrotas: 15, gp: 23, gc: 39, sg: -16, cor: '#20c997' },
  { pos: 19, nome: 'Coritiba', pontos: 23, jogos: 28, vitorias: 5, empates: 8, derrotas: 15, gp: 20, gc: 42, sg: -22, cor: '#1d4ed8' },
  { pos: 20, nome: 'América-MG', pontos: 20, jogos: 28, vitorias: 5, empates: 5, derrotas: 18, gp: 17, gc: 45, sg: -28, cor: '#8b5cf6' }
];

const artilheiros = [
  { nome: 'Pedro', clube: 'Flamengo', gols: 17, pos: 1 },
  { nome: 'Rafael', clube: 'Palmeiras', gols: 15, pos: 2 },
  { nome: 'Yuri Alberto', clube: 'Corinthians', gols: 14, pos: 3 },
  { nome: 'Tiquinho Soares', clube: 'Botafogo', gols: 13, pos: 4 },
  { nome: 'Hulk', clube: 'Atlético-MG', gols: 12, pos: 5 }
];

const noticias = [
  {
    titulo: 'Palmeiras mantém liderança com vitória importante sobre rival direto',
    categoria: 'Brasil',
    tempo: 'Há 1h',
    resumo: 'Time alviverde ampliou vantagem na parte alta da tabela e segue como principal favorito ao título.'
  },
  {
    titulo: 'Flamengo reage no segundo tempo e vence jogo decisivo no Maracanã',
    categoria: 'Premier',
    tempo: 'Há 3h',
    resumo: 'Equipes fizeram clássico eletrizante com várias chances e grande cobrança de pênalti.'
  },
  {
    titulo: 'Atlético-MG entra na briga pelo G-4 após goleada fora de casa',
    categoria: 'Análise',
    tempo: 'Hoje',
    resumo: 'Ataque mineiro teve brilho coletivo e mostrou consistência defensiva em uma equipe ofensiva.'
  }
];

const jogosRodada = [
  { mandante: 'Palmeiras', visitante: 'Flamengo', placar: '2 - 1', hora: '18:30', corA: '#0f9d8c', corB: '#d91d1d' },
  { mandante: 'Fortaleza', visitante: 'São Paulo', placar: '1 - 0', hora: '20:00', corA: '#f4c542', corB: '#0d6efd' },
  { mandante: 'Grêmio', visitante: 'Internacional', placar: '2 - 2', hora: '21:00', corA: '#1d4f91', corB: '#d52d2d' },
  { mandante: 'Vasco', visitante: 'Atlético-MG', placar: '1 - 3', hora: '19:30', corA: '#f3d409', corB: '#0a5ec9' }
];

const proximasPartidas = [
  { data: '29/10', hora: '18:30', jogo: 'Bahia x Cruzeiro' },
  { data: '29/10', hora: '20:00', jogo: 'Bragantino x Santos' },
  { data: '30/10', hora: '18:30', jogo: 'Botafogo x Coritiba' },
  { data: '30/10', hora: '21:00', jogo: 'Fluminense x Juventude' }
];

const clubes = [
  { nome: 'Palmeiras', sigla: 'PAL', estadio: 'Allianz Parque', titulos: 12, cor: '#0f9d8c' },
  { nome: 'Flamengo', sigla: 'FLA', estadio: 'Maracanã', titulos: 8, cor: '#d91d1d' },
  { nome: 'Atlético-MG', sigla: 'CAM', estadio: 'Arena MRV', titulos: 2, cor: '#0a5ec9' },
  { nome: 'Fortaleza', sigla: 'FOR', estadio: 'Castelão', titulos: 0, cor: '#f4c542' }
];

const metricas = [
  { label: 'Média de gols por jogo', valor: '2,4', detalhe: '+0,3 vs. 2024', icon: '⚽' },
  { label: 'Times com mais vitórias', valor: '7', detalhe: 'Em 28 rodadas', icon: '🏆' },
  { label: 'Média de público', valor: '18.2k', detalhe: 'Por partida', icon: '🏟️' },
  { label: 'Empates na temporada', valor: '69', detalhe: '1 a cada 4 jogos', icon: '🤝' },
  { label: 'Gols fora de casa', valor: '41%', detalhe: 'da produção total', icon: '📈' },
  { label: 'Fases de final', valor: '7', detalhe: 'Classificação no G-4', icon: '🔥' }
];

const enquete = {
  pergunta: 'Quem deve ser campeão do Brasileirão neste ano?',
  opcoes: [
    { nome: 'Palmeiras', percentual: 38 },
    { nome: 'Flamengo', percentual: 27 },
    { nome: 'Atlético-MG', percentual: 21 },
    { nome: 'Fortaleza', percentual: 14 }
  ]
};

const statsByLabel = [
  { label: 'Rendimento em casa', value: 74 },
  { label: 'Rendimento fora', value: 54 },
  { label: 'Finalizações certeiras', value: 62 },
  { label: 'Defesa sem sofrer', value: 48 }
];

function renderTopStats() {
  const container = document.getElementById('top-stats');

  const cards = [
    { label: 'Times no topo', value: '7', info: 'Fora da zona do rebaixamento', icon: '🏆' },
    { label: 'Jogos decididos', value: '64%', info: 'Com vitória em casa ou fora', icon: '⚖️' },
    { label: 'Artilheiro', value: '17', info: 'Gols de Pedro', icon: '🥅' },
    { label: 'Partidas em 7 dias', value: '12', info: 'Confrontos decisivos', icon: '📅' }
  ];

  container.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-panel">
          <div class="stat-icon">${card.icon}</div>
          <div class="stat-info">
            <strong>${card.value}</strong>
            <span>${card.label}</span>
            <small>${card.info}</small>
          </div>
        </article>
      `
    )
    .join('');
}

function renderTable() {
  const body = document.getElementById('table-body');

  body.innerHTML = tabela
    .map(
      (time) => `
        <tr>
          <td>${time.pos}</td>
          <td>
            <div class="team-cell">
              <span class="team-dot" style="background:${time.cor};"></span>
              ${time.nome}
            </div>
          </td>
          <td>${time.pontos}</td>
          <td>${time.jogos}</td>
          <td>${time.vitorias}</td>
          <td>${time.empates}</td>
          <td>${time.derrotas}</td>
          <td>${time.gp}</td>
          <td>${time.gc}</td>
          <td>${time.sg}</td>
        </tr>
      `
    )
    .join('');
}

function renderScorers() {
  const container = document.getElementById('scorers-grid');

  container.innerHTML = artilheiros
    .map(
      (jogador) => `
        <article class="scorer-card">
          <div class="scorer-head">
            <span class="scorer-rank">#${jogador.pos}</span>
            <span class="goals-badge">${jogador.gols} gols</span>
          </div>
          <div class="scorer-info">
            <div class="scorer-avatar">${jogador.nome.slice(0, 2).toUpperCase()}</div>
            <div>
              <div class="scorer-name">${jogador.nome}</div>
              <div class="scorer-team">${jogador.clube}</div>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderNews() {
  const container = document.getElementById('news-grid');

  container.innerHTML = noticias
    .map(
      (item) => `
        <article class="news-card">
          <div class="news-thumb"></div>
          <div class="news-tag">${item.categoria}</div>
          <h4>${item.titulo}</h4>
          <p>${item.resumo}</p>
          <div class="news-meta">
            <span>${item.tempo}</span>
            <span>Leitura 3 min</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderMatches() {
  const container = document.getElementById('matches-grid');

  container.innerHTML = jogosRodada
    .map(
      (partida) => `
        <article class="match-card">
          <div class="match-top">
            <span>Rodada atual</span>
            <span>${partida.hora}</span>
          </div>
          <div class="match-score">
            <div class="team-meta">
              <span class="team-mini" style="background:${partida.corA};">${partida.mandante.slice(0, 3).toUpperCase()}</span>
              <span>${partida.mandante}</span>
            </div>
            <div class="score-result">${partida.placar}</div>
            <div class="team-meta" style="justify-content:flex-end;">
              <span>${partida.visitante}</span>
              <span class="team-mini" style="background:${partida.corB};">${partida.visitante.slice(0, 3).toUpperCase()}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFixtures() {
  const container = document.getElementById('fixtures-list');

  container.innerHTML = proximasPartidas
    .map(
      (item) => `
        <div class="fixture-item">
          <div class="date">${item.data} • ${item.hora}</div>
          <div class="fixture-match">
            <span>${item.jogo}</span>
            <span>↗</span>
          </div>
        </div>
      `
    )
    .join('');
}

function renderClubs() {
  const container = document.getElementById('clubs-grid');

  container.innerHTML = clubes
    .map(
      (clube) => `
        <article class="club-card">
          <div class="club-header">
            <span class="club-badge" style="background:${clube.cor};">${clube.sigla}</span>
            <div>
              <div class="club-name">${clube.nome}</div>
              <small>${clube.estadio}</small>
            </div>
          </div>
          <div class="club-meta">
            <span>Títulos</span>
            <strong>${clube.titulos}</strong>
          </div>
          <div class="club-meta">
            <span>Último título</span>
            <strong>2024</strong>
          </div>
          <div class="club-meta">
            <span>Posição atual</span>
            <strong>${tabela.find((time) => time.nome === clube.nome)?.pos || '-'}º</strong>
          </div>
        </article>
      `
    )
    .join('');
}

function renderStats() {
  const container = document.getElementById('stats-grid');

  container.innerHTML = metricas
    .map(
      (item) => `
        <div class="stat-panel">
          <div class="stat-icon">${item.icon}</div>
          <div class="stat-info">
            <strong>${item.valor}</strong>
            <span>${item.label}</span>
            <small>${item.detalhe}</small>
          </div>
        </div>
      `
    )
    .join('');
}

function renderPoll() {
  const container = document.getElementById('poll-card');

  container.innerHTML = `
    <h4 class="poll-question">${enquete.pergunta}</h4>
    <div class="poll-options">
      ${enquete.opcoes
        .map(
          (option) => `
            <div class="poll-option">
              <strong>${option.nome}</strong>
              <span>${option.percentual}%</span>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

renderTopStats();
renderTable();
renderScorers();
renderNews();
renderMatches();
renderFixtures();
renderClubs();
renderStats();
renderPoll();
