const tabela = [
  { pos: 1, nome: 'Flamengo', pontos: 60, jogos: 28, vitorias: 18, empates: 6, derrotas: 4, gp: 52, gc: 24, sg: 28, cor: '#d91d1d' },
  { pos: 2, nome: 'Palmeiras', pontos: 57, jogos: 28, vitorias: 17, empates: 6, derrotas: 5, gp: 48, gc: 22, sg: 26, cor: '#0f9d8c' },
  { pos: 3, nome: 'Athletico Paranaense', pontos: 49, jogos: 28, vitorias: 14, empates: 7, derrotas: 7, gp: 39, gc: 28, sg: 11, cor: '#d41c2d' },
  { pos: 4, nome: 'Fluminense', pontos: 48, jogos: 28, vitorias: 14, empates: 6, derrotas: 8, gp: 42, gc: 31, sg: 11, cor: '#5ca6ea' },
  { pos: 5, nome: 'Bahia', pontos: 46, jogos: 28, vitorias: 13, empates: 7, derrotas: 8, gp: 35, gc: 29, sg: 6, cor: '#0da96a' },
  { pos: 6, nome: 'Cruzeiro', pontos: 45, jogos: 28, vitorias: 12, empates: 9, derrotas: 7, gp: 33, gc: 27, sg: 6, cor: '#7a2dff' },
  { pos: 7, nome: 'Santos', pontos: 41, jogos: 28, vitorias: 11, empates: 8, derrotas: 9, gp: 36, gc: 33, sg: 3, cor: '#1f9d64' },
  { pos: 8, nome: 'Atlético Mineiro', pontos: 40, jogos: 27, vitorias: 12, empates: 4, derrotas: 11, gp: 36, gc: 33, sg: 3, cor: '#0a5ec9' },
  { pos: 9, nome: 'Coritiba', pontos: 38, jogos: 28, vitorias: 9, empates: 11, derrotas: 8, gp: 29, gc: 30, sg: -1, cor: '#1d4ed8' },
  { pos: 10, nome: 'Red Bull Bragantino', pontos: 36, jogos: 27, vitorias: 9, empates: 9, derrotas: 9, gp: 31, gc: 31, sg: 0, cor: '#d8a72d' },
  { pos: 11, nome: 'São Paulo', pontos: 36, jogos: 28, vitorias: 9, empates: 9, derrotas: 10, gp: 30, gc: 32, sg: -2, cor: '#0d6efd' },
  { pos: 12, nome: 'Botafogo', pontos: 35, jogos: 28, vitorias: 9, empates: 8, derrotas: 11, gp: 27, gc: 29, sg: -2, cor: '#3b82f6' },
  { pos: 13, nome: 'Vitória', pontos: 33, jogos: 28, vitorias: 8, empates: 9, derrotas: 11, gp: 28, gc: 32, sg: -4, cor: '#1b7e67' },
  { pos: 14, nome: 'Corinthians', pontos: 32, jogos: 28, vitorias: 8, empates: 8, derrotas: 12, gp: 31, gc: 35, sg: -4, cor: '#d61f2a' },
  { pos: 15, nome: 'Mirassol', pontos: 32, jogos: 28, vitorias: 8, empates: 8, derrotas: 12, gp: 30, gc: 34, sg: -4, cor: '#3f8cff' },
  { pos: 16, nome: 'Vasco da Gama', pontos: 31, jogos: 27, vitorias: 8, empates: 7, derrotas: 12, gp: 29, gc: 36, sg: -7, cor: '#f3d409' },
  { pos: 17, nome: 'Grêmio', pontos: 29, jogos: 28, vitorias: 7, empates: 8, derrotas: 13, gp: 25, gc: 35, sg: -10, cor: '#1d4f91' },
  { pos: 18, nome: 'Internacional', pontos: 28, jogos: 28, vitorias: 7, empates: 7, derrotas: 14, gp: 26, gc: 37, sg: -11, cor: '#d52d2d' },
  { pos: 19, nome: 'Remo', pontos: 23, jogos: 28, vitorias: 5, empates: 8, derrotas: 15, gp: 22, gc: 39, sg: -17, cor: '#f59e0b' },
  { pos: 20, nome: 'Chapecoense', pontos: 18, jogos: 27, vitorias: 4, empates: 6, derrotas: 17, gp: 20, gc: 45, sg: -25, cor: '#0f172a' }
];

const artilheiros = [
  { nome: 'Pedro', clube: 'Flamengo', gols: 17, pos: 1 },
  { nome: 'Rafael', clube: 'Palmeiras', gols: 15, pos: 2 },
  { nome: 'Yuri Alberto', clube: 'Corinthians', gols: 14, pos: 3 },
  { nome: 'Tiquinho Soares', clube: 'Botafogo', gols: 13, pos: 4 },
  { nome: 'Hulk', clube: 'Atlético Mineiro', gols: 12, pos: 5 }
];

const noticias = [
  { titulo: 'Flamengo segue firme na liderança da Série A e amplia vantagem', categoria: 'Brasil', tempo: 'Há 1h', resumo: 'Time rubro-negro mantém boa sequência e controla a ponta com mais confiança na fase final do campeonato.' },
  { titulo: 'Palmeiras reage e se mantém na briga pela liderança', categoria: 'Premier', tempo: 'Há 3h', resumo: 'Equipes da parte alta da tabela seguem alternando a vantagem e aumentando a pressão no G-4.' },
  { titulo: 'Athletico e Fluminense aumentam pressão no G-4', categoria: 'Análise', tempo: 'Hoje', resumo: 'Ataques dos clubes da região de classificação mostram crescimento e volume ofensivo nas últimas partidas.' },
  { titulo: 'Bahia busca recuperação após revés', categoria: 'Rodada', tempo: 'Há 2h', resumo: 'Clube busca voltar às vitórias e consolidar posição na parte superior da tabela.' },
  { titulo: 'Cruzeiro investe em reforços para final de temporada', categoria: 'Mercado', tempo: 'Há 4h', resumo: 'Celeste se move no mercado em busca de peças que possam fazer diferença no restante do campeonato.' },
  { titulo: 'São Paulo trama plano de resgate', categoria: 'Estratégia', tempo: 'Ontem', resumo: 'Tricolor paulista planeja sequência de jogos para recuperar posição e subir na tabela.' }
];

const jogosRodada = [
  { mandante: 'Flamengo', visitante: 'Palmeiras', placar: '2 - 1', hora: '18:30', corA: '#d91d1d', corB: '#0f9d8c', status: 'Finalizado' },
  { mandante: 'Athletico Paranaense', visitante: 'Fluminense', placar: '1 - 0', hora: '20:00', corA: '#d41c2d', corB: '#5ca6ea', status: 'Finalizado' },
  { mandante: 'Cruzeiro', visitante: 'Bahia', placar: '2 - 2', hora: '21:00', corA: '#7a2dff', corB: '#0da96a', status: 'Finalizado' },
  { mandante: 'Vasco da Gama', visitante: 'Atlético Mineiro', placar: '1 - 3', hora: '19:30', corA: '#f3d409', corB: '#0a5ec9', status: 'Finalizado' }
];

const proximasPartidas = [
  { data: '05/11', hora: '18:30', jogo: 'Flamengo x Athletico Paranaense' },
  { data: '05/11', hora: '20:00', jogo: 'Palmeiras x São Paulo' },
  { data: '06/11', hora: '18:30', jogo: 'Bahia x Cruzeiro' },
  { data: '06/11', hora: '21:00', jogo: 'Red Bull Bragantino x Santos' },
  { data: '07/11', hora: '19:30', jogo: 'Botafogo x Coritiba' },
  { data: '07/11', hora: '21:00', jogo: 'Fluminense x Mirassol' }
];

const videos = [
  { titulo: 'Melhores momentos: Flamengo 2x1 Palmeiras', tempo: '3:12', categoria: 'Resumo' },
  { titulo: 'Análise da rodada: G-4 e zona da degola', tempo: '4:48', categoria: 'Debate' },
  { titulo: 'Gol do dia: Pedro marca golaço para o Flamengo', tempo: '1:36', categoria: 'Gol' }
];

const clubes = [
  { nome: 'Flamengo', sigla: 'FLA', estadio: 'Maracanã', titulos: 8, cor: '#d91d1d' },
  { nome: 'Palmeiras', sigla: 'PAL', estadio: 'Allianz Parque', titulos: 12, cor: '#0f9d8c' },
  { nome: 'Athletico Paranaense', sigla: 'ATH', estadio: 'Arena da Baixada', titulos: 1, cor: '#d41c2d' },
  { nome: 'Fluminense', sigla: 'FLU', estadio: 'Maracanã', titulos: 4, cor: '#5ca6ea' }
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
    { nome: 'Flamengo', percentual: 38 },
    { nome: 'Palmeiras', percentual: 27 },
    { nome: 'Athletico Paranaense', percentual: 21 },
    { nome: 'Fluminense', percentual: 14 }
  ]
};

const teamShortcuts = {
  Flamengo: 'FLA',
  Palmeiras: 'PAL',
  'Athletico Paranaense': 'ATH',
  Fluminense: 'FLU',
  Bahia: 'BAH',
  Cruzeiro: 'CRU',
  Santos: 'SAN',
  'Atlético Mineiro': 'CAM',
  Coritiba: 'CFC',
  'Red Bull Bragantino': 'BRA',
  'São Paulo': 'SAO',
  Botafogo: 'BOT',
  Vitória: 'VIT',
  Corinthians: 'COR',
  Mirassol: 'MIR',
  'Vasco da Gama': 'VAS',
  Grêmio: 'GRE',
  Internacional: 'INT',
  Remo: 'REM',
  Chapecoense: 'CHA'
};

const teamShieldColors = {
  Flamengo: '#d91d1d',
  Palmeiras: '#0f9d8c',
  'Athletico Paranaense': '#d41c2d',
  Fluminense: '#5ca6ea',
  Bahia: '#0da96a',
  Cruzeiro: '#7a2dff',
  Santos: '#1f9d64',
  'Atlético Mineiro': '#0a5ec9',
  Coritiba: '#1d4ed8',
  'Red Bull Bragantino': '#d8a72d',
  'São Paulo': '#0d6efd',
  Botafogo: '#3b82f6',
  Vitória: '#1b7e67',
  Corinthians: '#d61f2a',
  Mirassol: '#3f8cff',
  'Vasco da Gama': '#f3d409',
  Grêmio: '#1d4f91',
  Internacional: '#d52d2d',
  Remo: '#f59e0b',
  Chapecoense: '#0f172a'
};

const state = {
  table: tabela,
  filter: 'Todos',
  matches: jogosRodada,
  nextMatches: proximasPartidas,
  teams: clubes,
  latestUpdated: new Date()
};

function getTeamBadgeUrl(name) {
  const badgeMap = {
    Flamengo: 'https://a.espncdn.com/i/teamlogos/soccer/500/879.png',
    Palmeiras: 'https://a.espncdn.com/i/teamlogos/soccer/500/882.png',
    'Athletico Paranaense': 'https://a.espncdn.com/i/teamlogos/soccer/500/875.png',
    Fluminense: 'https://a.espncdn.com/i/teamlogos/soccer/500/876.png',
    Bahia: 'https://a.espncdn.com/i/teamlogos/soccer/500/101.png',
    Cruzeiro: 'https://a.espncdn.com/i/teamlogos/soccer/500/883.png',
    Santos: 'https://a.espncdn.com/i/teamlogos/soccer/500/879.png',
    'Atlético Mineiro': 'https://a.espncdn.com/i/teamlogos/soccer/500/990.png',
    Coritiba: 'https://a.espncdn.com/i/teamlogos/soccer/500/1118.png',
    'Red Bull Bragantino': 'https://a.espncdn.com/i/teamlogos/soccer/500/1004.png',
    'São Paulo': 'https://a.espncdn.com/i/teamlogos/soccer/500/874.png',
    Botafogo: 'https://a.espncdn.com/i/teamlogos/soccer/500/899.png',
    Vitória: 'https://a.espncdn.com/i/teamlogos/soccer/500/1006.png',
    Corinthians: 'https://a.espncdn.com/i/teamlogos/soccer/500/874.png',
    Mirassol: 'https://a.espncdn.com/i/teamlogos/soccer/500/1201.png',
    'Vasco da Gama': 'https://a.espncdn.com/i/teamlogos/soccer/500/784.png',
    Grêmio: 'https://a.espncdn.com/i/teamlogos/soccer/500/877.png',
    Internacional: 'https://a.espncdn.com/i/teamlogos/soccer/500/892.png',
    Remo: 'https://a.espncdn.com/i/teamlogos/soccer/500/1015.png',
    Chapecoense: 'https://a.espncdn.com/i/teamlogos/soccer/500/1104.png'
  };

  return badgeMap[name] || '';
}

function constructShield(name, color = '#0d6efd', badgeUrl = '') {
  const resolvedBadge = badgeUrl || getTeamBadgeUrl(name);
  if (resolvedBadge) {
    return `
      <span class="shield-with-badge" aria-label="${name}">
        <img src="${resolvedBadge}" alt="${name}" class="original-club-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" />
        <span class="fallback-shield" aria-hidden="true" style="display:none">${(teamShortcuts[name] || name.slice(0, 3).toUpperCase()).slice(0, 3)}</span>
      </span>
    `;
  }

  const initials = teamShortcuts[name] || name.slice(0, 3).toUpperCase();
  const fill = color || teamShieldColors[name] || '#3aa0ff';

  return `
    <svg class="team-shield" viewBox="0 0 64 76" role="img" aria-label="${name}">
      <path d="M32 2L54 9V33C54 48.4 45.7 59.5 32 68C18.3 59.5 10 48.4 10 33V9L32 2Z" fill="${fill}" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
      <path d="M32 10L46 15V30C46 39.8 40.2 47.7 32 53.2C23.8 47.7 18 39.8 18 30V15L32 10Z" fill="rgba(255,255,255,0.16)"/>
      <text x="32" y="39" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff" font-family="Inter, Arial, sans-serif">${initials}</text>
    </svg>
  `;
}

function safeNumber(value, fallback = 0) {
  const n = Number(value ?? fallback);
  return Number.isFinite(n) ? n : fallback;
}

function formatTime() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function updateTimestamp() {
  const node = document.getElementById('update-time');
  if (node) {
    node.textContent = `Atualizado às ${formatTime()}`;
  }
}

function getColorFromName(name) {
  return teamShieldColors[name] || '#3aa0ff';
}

function normalizeTable(rawTable) {
  return rawTable
    .map((team, index) => ({
      pos: index + 1,
      nome: team.strTeam || team.name || team.teamName || `Time ${index + 1}`,
      pontos: safeNumber(team.points ?? team.totalPoints ?? team.Pts),
      jogos: safeNumber(team.played ?? team.playedGames ?? team.gamesPlayed),
      vitorias: safeNumber(team.win ?? team.wins),
      empates: safeNumber(team.draw ?? team.draws),
      derrotas: safeNumber(team.loss ?? team.losses),
      gp: safeNumber(team.goalsfor ?? team.goalsFor ?? team.gf),
      gc: safeNumber(team.goalsagainst ?? team.goalsAgainst ?? team.ga),
      sg: safeNumber(team.goalsdifference ?? team.gd),
      cor: getColorFromName(team.strTeam || team.name || `time-${index}`),
      badge: team.strTeamBadge || team.strTeamLogo || team.strBadge || getTeamBadgeUrl(team.strTeam || team.name || `Time ${index + 1}`)
    }))
    .slice(0, 20);
}

function normalizeTeams(rawTeams) {
  return rawTeams.map((team, index) => ({
    nome: team.strTeam || team.name || `Time ${index + 1}`,
    sigla: (teamShortcuts[team.strTeam || team.name] || (team.strTeamShort || team.strTeam?.slice(0, 3).toUpperCase()) || 'TM').toUpperCase(),
    estadio: team.strStadium || 'Estádio local',
    titulos: 0,
    cor: getColorFromName(team.strTeam || team.name || `time-${index}`),
    badge: team.strTeamBadge || team.strTeamLogo || team.strBadge || getTeamBadgeUrl(team.strTeam || team.name || `Time ${index + 1}`)
  }));
}

function normalizeMatches(rawEvents) {
  return rawEvents.slice(0, 4).map((event) => ({
    mandante: event.strHomeTeam || 'Casa',
    visitante: event.strAwayTeam || 'Visitante',
    placar: `${safeNumber(event.intHomeScore)} - ${safeNumber(event.intAwayScore)}`,
    hora: event.strTime || '20:00',
    corA: getColorFromName(event.strHomeTeam || 'Casa'),
    corB: getColorFromName(event.strAwayTeam || 'Visitante'),
    status: 'Finalizado',
    badgeA: event.strHomeTeamBadge || getTeamBadgeUrl(event.strHomeTeam || 'Casa'),
    badgeB: event.strAwayTeamBadge || getTeamBadgeUrl(event.strAwayTeam || 'Visitante')
  }));
}

function normalizeNextMatches(rawEvents) {
  return rawEvents.slice(0, 6).map((event) => ({
    data: event.date || event.strDate || 'Próxima',
    hora: event.strTime || '20:00',
    jogo: `${event.strHomeTeam || 'Casa'} x ${event.strAwayTeam || 'Visitante'}`,
    badgeA: event.strHomeTeamBadge || getTeamBadgeUrl(event.strHomeTeam || 'Casa'),
    badgeB: event.strAwayTeamBadge || getTeamBadgeUrl(event.strAwayTeam || 'Visitante')
  }));
}

async function fetchJson(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Erro ao carregar dados: ${response.status}`);
  }
  return response.json();
}

async function loadLiveData() {
  try {
    const [tableRes, teamsRes, matchesRes] = await Promise.allSettled([
      fetchJson('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4406&s=2026'),
      fetchJson('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4406'),
      fetchJson('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4406')
    ]);

    if (tableRes.status === 'fulfilled' && tableRes.value?.table) {
      state.table = normalizeTable(tableRes.value.table);
    }

    if (teamsRes.status === 'fulfilled' && teamsRes.value?.teams) {
      state.teams = normalizeTeams(teamsRes.value.teams);
    }

    if (matchesRes.status === 'fulfilled' && matchesRes.value?.events) {
      state.matches = normalizeMatches(matchesRes.value.events);
      state.nextMatches = normalizeNextMatches(matchesRes.value.events);
    }

    state.latestUpdated = new Date();
    renderTopStats();
    updateTimestamp();
    renderTable(state.filter);
    renderClubFilters();
    renderClubs();
    renderMatches();
    renderLiveMatches();
    renderFixtures();
  } catch (error) {
    console.warn('Usando dados locais porque a API não respondeu.', error);
    renderTopStats();
    updateTimestamp();
    renderTable(state.filter);
    renderFixtures();
  }
}

function renderTopStats() {
  const statsContainer = document.getElementById('top-stats');
  if (!statsContainer) return;

  const lider = state.table[0] || tabela[0];
  const mediaGols = ((tabela.reduce((sum, time) => sum + time.gp, 0) / (tabela.length * 28 || 1))).toFixed(1);

  const stats = [
    { value: lider.pontos, label: 'Pontos do líder' },
    { value: mediaGols, label: 'Média de gols' },
    { value: '28', label: 'Rodada atual' }
  ];

  statsContainer.innerHTML = stats
    .map(
      (item) => `
        <div class="hero-stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join('');
}

function renderClubFilters() {
  const container = document.getElementById('clubFilter');
  if (!container) return;

  const clubsList = ['Todos', ...new Set(state.table.map((time) => time.nome))];

  container.innerHTML = clubsList
    .map(
      (clube, index) => `
        <button class="filter-pill ${index === 0 || state.filter === clube ? 'active' : ''}" data-clube="${clube}">
          ${clube}
        </button>
      `
    )
    .join('');

  container.querySelectorAll('.filter-pill').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.clube;
      state.filter = selected;
      renderTable(selected);
      container.querySelectorAll('.filter-pill').forEach((pill) => pill.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

function renderTable(filtro = 'Todos') {
  const body = document.getElementById('table-body');
  if (!body) return;

  const times = filtro === 'Todos' ? state.table : state.table.filter((time) => time.nome === filtro);

  body.innerHTML = times
    .map(
      (time) => `
        <tr>
          <td>${time.pos}</td>
          <td>
            <div class="team-cell">
              <span class="team-dot">${constructShield(time.nome, time.cor, time.badge)}</span>
              ${time.nome}
            </div>
          </td>
          <td><strong>${time.pontos}</strong></td>
          <td>${time.jogos}</td>
          <td>${time.vitorias}</td>
          <td>${time.empates}</td>
          <td>${time.derrotas}</td>
          <td>${time.gp}</td>
          <td>${time.gc}</td>
          <td>${time.sg}</td>
          <td>${((time.pontos / (time.jogos * 3)) * 100).toFixed(1)}%</td>
        </tr>
      `
    )
    .join('');
}

function renderLiveMatches() {
  const container = document.getElementById('live-matches-container');
  if (!container) return;

  container.innerHTML = state.matches
    .slice(0, 3)
    .map(
      (partida) => `
        <div class="live-match-card">
          <div class="match-status">${partida.status}</div>
          <div class="match-teams">
            <div class="team-info">
              ${constructShield(partida.mandante, partida.corA, partida.badgeA)}
              <span>${partida.mandante}</span>
            </div>
            <div class="match-score-big">${partida.placar}</div>
            <div class="team-info team-right">
              <span>${partida.visitante}</span>
              ${constructShield(partida.visitante, partida.corB, partida.badgeB)}
            </div>
          </div>
          <div class="match-time">${partida.hora}</div>
        </div>
      `
    )
    .join('');
}

function renderScorers() {
  const container = document.getElementById('scorers-grid');
  if (!container) return;

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

function renderNewsHero() {
  const container = document.getElementById('news-hero');
  if (!container || noticias.length === 0) return;

  const noticia = noticias[0];
  container.innerHTML = `
    <div class="news-thumb-large"></div>
    <div class="news-hero-content">
      <div class="news-tag">${noticia.categoria}</div>
      <h3>${noticia.titulo}</h3>
      <p>${noticia.resumo}</p>
      <div class="news-meta">
        <span>${noticia.tempo}</span>
        <span>Leitura 5 min</span>
      </div>
    </div>
  `;
}

function renderNewsSecondary() {
  const container = document.getElementById('news-secondary');
  if (!container || noticias.length < 2) return;

  container.innerHTML = noticias
    .slice(1, 3)
    .map(
      (item) => `
        <article class="news-secondary-card">
          <div class="news-thumb-small"></div>
          <div>
            <div class="news-tag">${item.categoria}</div>
            <h5>${item.titulo}</h5>
            <span class="news-meta-small">${item.tempo}</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;

  container.innerHTML = noticias
    .slice(3)
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
  if (!container) return;

  container.innerHTML = state.matches
    .map(
      (partida) => `
        <article class="match-card">
          <div class="match-top">
            <span>Rodada 28</span>
            <span>${partida.hora}</span>
          </div>
          <div class="match-score">
            <div class="team-meta">
              <span class="team-mini">${constructShield(partida.mandante, partida.corA, partida.badgeA)}</span>
              <span>${partida.mandante}</span>
            </div>
            <div class="score-result">${partida.placar}</div>
            <div class="team-meta team-meta-right">
              <span>${partida.visitante}</span>
              <span class="team-mini">${constructShield(partida.visitante, partida.corB, partida.badgeB)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFixtures() {
  const container = document.getElementById('fixtures-list');
  if (!container) return;

  const fixtures = state.nextMatches.length ? state.nextMatches : proximasPartidas;

  container.innerHTML = fixtures
    .slice(0, 6)
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

function renderVideos() {
  const container = document.getElementById('videos-grid');
  if (!container) return;

  container.innerHTML = videos
    .map(
      (video) => `
        <article class="video-card">
          <div class="video-thumb"></div>
          <h4>${video.titulo}</h4>
          <div class="video-meta">${video.categoria} • ${video.tempo}</div>
        </article>
      `
    )
    .join('');
}

function renderClubs() {
  const container = document.getElementById('clubs-grid');
  if (!container) return;

  const clubsToRender = state.teams.length ? state.teams : clubes;

  container.innerHTML = clubsToRender.slice(0, 4)
    .map(
      (clube) => `
        <article class="club-card">
          <div class="club-header">
            <span class="club-badge">${constructShield(clube.nome, clube.cor, clube.badge)}</span>
            <div>
              <div class="club-name">${clube.nome}</div>
              <small>${clube.estadio}</small>
            </div>
          </div>
          <div class="club-meta">
            <span>Títulos</span>
            <strong>${clube.titulos || 0}</strong>
          </div>
          <div class="club-meta">
            <span>Último título</span>
            <strong>2024</strong>
          </div>
          <div class="club-meta">
            <span>Posição atual</span>
            <strong>${state.table.find((time) => time.nome === clube.nome)?.pos || '-'}º</strong>
          </div>
        </article>
      `
    )
    .join('');
}

function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

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
  if (!container) return;

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

function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (prefersLight) {
    document.body.classList.add('light');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}

function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
}

function setupTableSearch() {
  const input = document.getElementById('tableSearch');
  if (!input) return;

  input.addEventListener('input', (event) => {
    const value = event.target.value.trim().toLowerCase();
    const filtered = value ? state.table.filter((time) => time.nome.toLowerCase().includes(value)) : state.table;

    const body = document.getElementById('table-body');
    if (!body) return;

    body.innerHTML = filtered
      .map(
        (time) => `
          <tr>
            <td>${time.pos}</td>
            <td>
              <div class="team-cell">
                <span class="team-dot">${constructShield(time.nome, time.cor, time.badge)}</span>
                ${time.nome}
              </div>
            </td>
            <td><strong>${time.pontos}</strong></td>
            <td>${time.jogos}</td>
            <td>${time.vitorias}</td>
            <td>${time.empates}</td>
            <td>${time.derrotas}</td>
            <td>${time.gp}</td>
            <td>${time.gc}</td>
            <td>${time.sg}</td>
            <td>${((time.pontos / (time.jogos * 3)) * 100).toFixed(1)}%</td>
          </tr>
        `
      )
      .join('');
  });
}

renderTopStats();
renderLiveMatches();
renderClubFilters();
renderTable();
renderScorers();
renderNewsHero();
renderNewsSecondary();
renderNews();
renderMatches();
renderFixtures();
renderVideos();
renderClubs();
renderStats();
renderPoll();
updateTimestamp();
setupThemeToggle();
setupMobileMenu();
setupTableSearch();
loadLiveData();
