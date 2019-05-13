import api from './core';

export default {
    login(postData) {
        return api.postJSON('/api/login', postData);
    },
    queryLoverInfo() {
        return api.sendAjax('/api/queryLoverInfo', {
            method: 'GET',
        });
    }
}