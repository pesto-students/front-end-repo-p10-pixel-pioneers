import axios from  "axios";

const instance = axios.create({
    baseURL: 'https://strapi-dqt5.onrender.com/api/',
    timeout:10000,
  });

export default instance;