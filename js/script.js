document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');

    fetch('/api/top-news')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            data.articles.forEach(article => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = article.url;
                link.textContent = article.title;
                listItem.appendChild(link);
                newsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Erro ao obter as principais notícias:', error);
            const errorMessage = document.createElement('li');
            errorMessage.textContent = 'Não foi possível carregar as notícias.';
            newsList.appendChild(errorMessage);
        });
});

