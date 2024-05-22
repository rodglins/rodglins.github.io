document.addEventListener('DOMContentLoaded', () => {
    const topicsList = document.getElementById('topics-list');

    fetch('/api/trending-topics')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            data.data.forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic.text; // Ajuste conforme necessário
                topicsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Erro ao obter os trending topics:', error);
            const errorMessage = document.createElement('li');
            errorMessage.textContent = 'Não foi possível carregar os trending topics.';
            topicsList.appendChild(errorMessage);
        });
});
