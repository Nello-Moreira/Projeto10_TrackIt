import axios from "axios";

const timeoutInSeconds = 5;

const axiosBase = axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit',
    timeout: timeoutInSeconds * 1000
});

export default axiosBase;