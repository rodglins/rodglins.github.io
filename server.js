const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;

app.use(express.static(path.join(__dirname, 'rodglins.github.io')));

app.get('/api/top-news', async (req, res) => {
    try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
            params: {
                token: GNEWS_API_KEY,
                lang: 'en',
                country: 'US',
                max: 10
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao obter as principais notícias:', error);
        res.status(500).json({ error: 'Erro ao obter as principais notícias' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

