import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-fc74d.firebaseio.com/'
})

export default instance;