document.addEventListener('DOMContentLoaded', () => {
    const topicsList = document.getElementById('topics-list');

    fetch('/api/trending-topics') // Supondo que você tenha um endpoint configurado para fornecer os trending topics
        .then(response => response.json())
        .then(data => {
            data.forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic.name;
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
