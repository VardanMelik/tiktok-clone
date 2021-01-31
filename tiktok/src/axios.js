const axios = require('axios');

const instance = axios.create({
    
    baseURL: "https://tiktok-mern-clone-nodejs.herokuapp.com/"
    //baseURL: "http://localhost:9000/"
});

export default instance;