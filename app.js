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

const videos = [
  { titulo: 'Melhores momentos: Palmeiras 2x1 Flamengo', tempo: '3:12', categoria: 'Resumo' },
  { titulo: 'Análise da rodada: G-4 e rebaixamento', tempo: '4:48', categoria: 'Debate' },
  { titulo: 'Gol do dia: Hulk marca golaço para o Atlético', tempo: '1:36', categoria: 'Gol' }
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

const state = {
  table: tabela,
  filter: 'Todos',
  matches: jogosRodada,
  teams: clubes,
  latestUpdated: new Date(),
  sortKey: 'pontos',
  sortDirection: 'desc',
  pollChoice: '',
  pollResults: enquete.opcoes.map((option) => ({ ...option }))
};

const teamShortcuts = {
  Palmeiras: 'PAL',
  Flamengo: 'FLA',
  'Atlético-MG': 'CAM',
  Fortaleza: 'FOR',
  Internacional: 'INT',
  'São Paulo': 'SAO',
  Grêmio: 'GRE',
  Bragantino: 'BRA',
  Bahia: 'BAH',
  Vasco: 'VAS',
  Corinthians: 'COR',
  Cruzeiro: 'CRU',
  Botafogo: 'BOT',
  Cuiabá: 'CUI',
  Fluminense: 'FLU',
  Santos: 'SAN',
  Juventude: 'JUV',
  Goiás: 'GOI',
  Coritiba: 'CFC',
  'América-MG': 'AME'
};

function constructShield(name, color) {
  const initials = teamShortcuts[name] || name.slice(0, 3).toUpperCase();
  return `
    <svg class="team-shield" viewBox="0 0 64 76" role="img" aria-label="${name}">
      <path d="M32 2L54 9V33C54 48.4 45.7 59.5 32 68C18.3 59.5 10 48.4 10 33V9L32 2Z" fill="${color}" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
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
  const palette = ['#0f9d8c', '#d91d1d', '#0a5ec9', '#f4c542', '#d52d2d', '#0d6efd', '#1d4f91', '#d8a72d', '#0da96a', '#f3d409', '#7a2dff'];
  const index = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) % palette.length;
  return palette[index];
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
      cor: getColorFromName(team.strTeam || team.name || `time-${index}`)
    }))
    .slice(0, 20);
}

function normalizeTeams(rawTeams) {
  return rawTeams.map((team, index) => ({
    nome: team.strTeam || team.name || `Time ${index + 1}`,
    sigla: (teamShortcuts[team.strTeam || team.name] || (team.strTeamShort || team.strTeam?.slice(0, 3).toUpperCase()) || 'TM').toUpperCase(),
    estadio: team.strStadium || 'Estádio local',
    titulos: 0,
    cor: getColorFromName(team.strTeam || team.name || `time-${index}`)
  }));
}

function normalizeMatches(rawEvents) {
  return rawEvents.slice(0, 4).map((event) => ({
    mandante: event.strHomeTeam || 'Casa',
    visitante: event.strAwayTeam || 'Visitante',
    placar: `${safeNumber(event.intHomeScore)} - ${safeNumber(event.intAwayScore)}`,
    hora: event.strTime || '20:00',
    corA: getColorFromName(event.strHomeTeam || 'Casa'),
    corB: getColorFromName(event.strAwayTeam || 'Visitante')
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
      fetchJson('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4406&s=2024'),
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
    }

    state.latestUpdated = new Date();
    updateTimestamp();
    renderTable(state.filter);
    renderClubFilters();
    renderClubs();
    renderMatches();
  } catch (error) {
    console.warn('Usando dados locais porque a API não respondeu.', error);
    updateTimestamp();
    renderTable(state.filter);
  }
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

function getSortValue(team, key) {
  switch (key) {
    case 'pos':
      return team.pos;
    case 'nome':
      return team.nome;
    case 'pontos':
      return team.pontos;
    case 'jogos':
      return team.jogos;
    case 'vitorias':
      return team.vitorias;
    case 'empates':
      return team.empates;
    case 'derrotas':
      return team.derrotas;
    case 'gp':
      return team.gp;
    case 'gc':
      return team.gc;
    case 'sg':
      return team.sg;
    default:
      return team.pontos;
  }
}

function renderTable(filtro = 'Todos') {
  const body = document.getElementById('table-body');
  if (!body) return;

  const times = (filtro === 'Todos' ? state.table : state.table.filter((time) => time.nome === filtro)).slice();
  const sortedTimes = times.sort((a, b) => {
    const aValue = getSortValue(a, state.sortKey);
    const bValue = getSortValue(b, state.sortKey);
    const direction = state.sortDirection === 'asc' ? 1 : -1;

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue) * direction;
    }

    return (aValue - bValue) * direction;
  });

  document.querySelectorAll('th[data-sort]').forEach((header) => {
    const isActive = header.dataset.sort === state.sortKey;
    header.classList.toggle('sort-active', isActive);
    header.dataset.direction = isActive ? state.sortDirection : 'desc';
    header.dataset.symbol = isActive ? (state.sortDirection === 'asc' ? '↑' : '↓') : '↕';
  });

  body.innerHTML = sortedTimes
    .map(
      (time) => `
        <tr>
          <td>${time.pos}</td>
          <td>
            <div class="team-cell">
              <span class="team-dot">${constructShield(time.nome, time.cor)}</span>
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

function renderTopStats() {
  const container = document.getElementById('top-stats');
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

function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;

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
  if (!container) return;

  container.innerHTML = state.matches
    .map(
      (partida) => `
        <article class="match-card">
          <div class="match-top">
            <span>Rodada atual</span>
            <span>${partida.hora}</span>
          </div>
          <div class="match-score">
            <div class="team-meta">
              <span class="team-mini">${constructShield(partida.mandante, partida.corA)}</span>
              <span>${partida.mandante}</span>
            </div>
            <div class="score-result">${partida.placar}</div>
            <div class="team-meta" style="justify-content:flex-end;">
              <span>${partida.visitante}</span>
              <span class="team-mini">${constructShield(partida.visitante, partida.corB)}</span>
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
            <span class="club-badge">${constructShield(clube.nome, clube.cor)}</span>
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

function renderPoll() {
  const container = document.getElementById('poll-card');
  if (!container) return;

  const optionData = enquete.opcoes.map((option) => {
    const selected = state.pollChoice === option.nome;
    const percent = Math.min(selected ? option.percentual + 8 : option.percentual, 96);
    return { ...option, percent };
  });

  container.innerHTML = `
    <h4 class="poll-question">${enquete.pergunta}</h4>
    <div class="poll-options">
      ${optionData
        .map(
          (option) => `
            <button type="button" class="poll-option ${state.pollChoice === option.nome ? 'selected' : ''}" data-vote="${option.nome}">
              <div class="poll-copy">
                <span>${option.nome}</span>
                <strong>${option.percentual}%</strong>
              </div>
              <div class="poll-meter"><span style="width: ${option.percent}%"></span></div>
            </button>
          `
        )
        .join('')}
    </div>
  `;

  container.querySelectorAll('.poll-option').forEach((button) => {
    button.addEventListener('click', () => {
      state.pollChoice = button.dataset.vote;
      renderPoll();
    });
  });
}

function setupTableSorting() {
  document.querySelectorAll('th[data-sort]').forEach((header) => {
    header.addEventListener('click', () => {
      const nextSort = header.dataset.sort;
      if (state.sortKey === nextSort) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortKey = nextSort;
        state.sortDirection = nextSort === 'pos' ? 'asc' : 'desc';
      }

      renderTable(state.filter);
    });
  });
}

function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('portal-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('portal-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  });
}

function setupScrollSpy() {
  const links = document.querySelectorAll('.main-nav a, .mobile-menu a');
  const sections = [...document.querySelectorAll('main section[id]')];

  const activate = () => {
    const scrollPosition = window.scrollY + 130;
    let current = sections[0]?.id || '';

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active-link', isActive);
    });
  };

  window.addEventListener('scroll', activate);
  activate();
}

function init() {
  renderTopStats();
  renderClubFilters();
  renderTable();
  renderScorers();
  renderNews();
  renderMatches();
  renderFixtures();
  renderVideos();
  renderClubs();
  renderPoll();
  updateTimestamp();
  setupThemeToggle();
  setupMobileMenu();
  setupTableSorting();
  setupScrollSpy();
  setInterval(updateTimestamp, 1000 * 60);
  loadLiveData();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addEventListener('resize', () => {
  const menu = document.getElementById('mobileMenu');
  if (menu && window.innerWidth > 980) {
    menu.style.display = 'none';
  }
});
