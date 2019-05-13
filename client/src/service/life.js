import api from './core';

export default {
    queryByCategory(category) {
        return api.sendAjax('/api/life', {
            method: 'GET',
            params: {
                category,
            }
        });
    },
    addArticle(article) {
        return api.postJSON('/api/life', article);
    }
}