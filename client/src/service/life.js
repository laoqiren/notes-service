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
    },
    updateArticle(data) {
        return api.postJSON('/api/updateArticle', data);
    },
    deleteArticle(_id) {
        return api.postJSON('/api/deleteLifeArticle', {
            _id,
        });
    }
}