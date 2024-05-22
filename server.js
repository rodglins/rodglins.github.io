const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'rodglins.github.io')));

app.get('/api/trending-topics', async (req, res) => {
    try {
        const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
            headers: {
                'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`
            },
            params: {
                'query': 'trending',
                'tweet.fields': 'context_annotations,created_at',
                'expansions': 'author_id',
                'max_results': 10
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao obter os trending topics:', error);
        res.status(500).json({ error: 'Erro ao obter os trending topics' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
