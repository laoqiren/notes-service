import axios from 'axios';

const env = process.env.NODE_ENV;
const axiosInstance = axios.create({
    withCredentials: true
})

function resolveUrl(url) {
    if (env === 'development') {
        return `http://localhost:7001${url}`;
    } else if (env === 'production') {
        return url;
    }
}

function sendAjax(url, params) {
    return axiosInstance.request(Object.assign({}, {
        url: resolveUrl(url)
    }, params))
    .then(response => {
        if(response.status === 200 || response.status === 201) {
            return response.data;
        }
        return null;
    })
    .catch(err => {
        console.log(err);
    });
}

function postJSON(url, postData) {
    return sendAjax(url, {
        data: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
    });
}

export default {
    sendAjax,
    postJSON,
};