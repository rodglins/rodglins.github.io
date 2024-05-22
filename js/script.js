document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');

    const apikey = '1686e64105c7c9f1c1332439cb6cd4af';
    const category = 'general';
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;

            articles.forEach(article => {
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


