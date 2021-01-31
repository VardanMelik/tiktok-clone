const axios = require('axios');

const instance = axios.create({
    baseURL: "https://tiktok-mern-clone-nodejs.herokuapp.com/"
});

export default instance;