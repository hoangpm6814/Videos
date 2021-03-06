import axious from 'axios';

const KEY = 'AIzaSyCNf5IMsCDjQtIavzPKxneiGpafWbTssXk';

export default axious.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});