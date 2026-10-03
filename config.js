// Configuração de APIs para dados em tempo real
const API_CONFIG = {
  // API de dados esportivos - Brasileirão
  SPORTS_DB: {
    BASE_URL: 'https://www.thesportsdb.com/api/v1/json/1',
    LEAGUE_ID: '4406', // Brasileirão
    SEASON: '2026'
  },
  
  // API alternativa para notícias de esportes
  NEWS_API: {
    BASE_URL: 'https://newsapi.org/v2',
    API_KEY: 'YOUR_NEWSAPI_KEY', // Adicionar chave em https://newsapi.org
    COUNTRY: 'br',
    CATEGORY: 'sports'
  },

  // ESPN API (para dados em tempo real)
  ESPN: {
    BASE_URL: 'https://www.espn.com',
    LEAGUE: 'brasileirao'
  },

  // Intervalo de atualização automática (em minutos)
  UPDATE_INTERVAL: 5, // Atualiza a cada 5 minutos
  
  // Cache de dados (em minutos)
  CACHE_DURATION: 3
};

// Função para buscar dados com cache
async function fetchWithCache(url, cacheKey, cacheDuration = API_CONFIG.CACHE_DURATION) {
  // Verificar se existe no localStorage e se ainda é válido
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    const ageInMinutes = (Date.now() - timestamp) / (1000 * 60);
    
    if (ageInMinutes < cacheDuration) {
      console.log(`✓ Usando cache para: ${cacheKey}`);
      return data;
    }
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) throw new Error(`Erro ${response.status}`);
    
    const data = await response.json();
    
    // Armazenar no cache
    localStorage.setItem(cacheKey, JSON.stringify({
      data,
      timestamp: Date.now()
    }));

    console.log(`✓ Dados atualizados: ${cacheKey}`);
    return data;
  } catch (error) {
    console.warn(`✗ Erro ao buscar ${cacheKey}:`, error.message);
    
    // Retornar cache expirado se não conseguir buscar
    if (cached) {
      const { data } = JSON.parse(cached);
      console.log(`⚠ Usando cache expirado para: ${cacheKey}`);
      return data;
    }
    
    return null;
  }
}

// Função para buscar tabela em tempo real
async function fetchTableData() {
  const url = `${API_CONFIG.SPORTS_DB.BASE_URL}/lookuptable.php?l=${API_CONFIG.SPORTS_DB.LEAGUE_ID}&s=${API_CONFIG.SPORTS_DB.SEASON}`;
  return await fetchWithCache(url, 'brasileirao_table');
}

// Função para buscar próximas partidas
async function fetchNextMatches() {
  const url = `${API_CONFIG.SPORTS_DB.BASE_URL}/eventsnextleague.php?id=${API_CONFIG.SPORTS_DB.LEAGUE_ID}`;
  return await fetchWithCache(url, 'brasileirao_next_matches', 2);
}

// Função para buscar últimas partidas
async function fetchLastMatches() {
  const url = `${API_CONFIG.SPORTS_DB.BASE_URL}/eventslastleague.php?id=${API_CONFIG.SPORTS_DB.LEAGUE_ID}`;
  return await fetchWithCache(url, 'brasileirao_last_matches', 2);
}

// Função para buscar times
async function fetchTeams() {
  const url = `${API_CONFIG.SPORTS_DB.BASE_URL}/lookup_all_teams.php?id=${API_CONFIG.SPORTS_DB.LEAGUE_ID}`;
  return await fetchWithCache(url, 'brasileirao_teams');
}

// Função para buscar artilheiros
async function fetchTopScorers() {
  const url = `${API_CONFIG.SPORTS_DB.BASE_URL}/eventslast.php?id=${API_CONFIG.SPORTS_DB.LEAGUE_ID}`;
  return await fetchWithCache(url, 'brasileirao_scorers', 4);
}

// Função para buscar notícias esportivas brasileiras
async function fetchNewsFromAPI() {
  const url = `${API_CONFIG.NEWS_API.BASE_URL}/everything?q=brasileirão OR campeonato brasileiro&sortBy=publishedAt&language=pt&pageSize=20`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ${response.status}`);
    
    const data = await response.json();
    
    // Armazenar no cache
    localStorage.setItem('brasileirao_news', JSON.stringify({
      data,
      timestamp: Date.now()
    }));

    console.log('✓ Notícias atualizadas');
    return data;
  } catch (error) {
    console.warn('✗ Erro ao buscar notícias:', error.message);
    
    // Retornar do cache se disponível
    const cached = localStorage.getItem('brasileirao_news');
    if (cached) {
      console.log('⚠ Usando notícias em cache');
      return JSON.parse(cached).data;
    }
    
    return null;
  }
}

// Inicializar atualização automática
function initAutoUpdate() {
  console.log(`🔄 Atualizações automáticas ativadas a cada ${API_CONFIG.UPDATE_INTERVAL} minutos`);
  
  setInterval(() => {
    console.log('🔄 Buscando dados atualizados...');
    loadAllLiveData();
  }, API_CONFIG.UPDATE_INTERVAL * 60 * 1000);
}

// Executar atualização inicial
window.addEventListener('DOMContentLoaded', () => {
  loadAllLiveData();
  initAutoUpdate();
});

export {
  fetchTableData,
  fetchNextMatches,
  fetchLastMatches,
  fetchTeams,
  fetchTopScorers,
  fetchNewsFromAPI,
  fetchWithCache,
  API_CONFIG
};
