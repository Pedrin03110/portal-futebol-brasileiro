# Portal do Futebol Brasileiro

Um site moderno para acompanhar o Brasileirão com:

- Tabela de classificação
- Artilheiros
- Notícias
- Jogos da rodada
- Próximas partidas
- Clubes e estádio
- Estatísticas
- Enquetes entre torcedores
- Vídeos
- Menu responsivo e tema claro/escuro

## Como executar localmente

Abra o arquivo `index.html` no navegador, ou use um servidor local simples:

```bash
python3 -m http.server 8000
```

Acesse:

```text
http://localhost:8000
```

## Dados em tempo real

A página já tem integração pronta com a API pública do TheSportsDB para buscar:

- Tabela do Brasileirão
- Próximos jogos da liga
- Informações dos clubes

Endpoints usados:

```text
https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4406&s=2024
https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4406
https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4406
```

Se a API não responder, o site continua com dados locais de fallback.

## Hospedagem online

Você pode publicar esse projeto facilmente em:

- GitHub Pages
- Vercel
- Netlify

No caso do GitHub Pages, basta subir os arquivos e ativar a opção de Pages no repositório.

## Observação

Para uma versão premium com dados mais completos, você pode futuramente integrar uma API de pagamento ou usar uma chave privada de um provedor mais completo.
