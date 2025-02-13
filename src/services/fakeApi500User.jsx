import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const postUser = async (page) => {
    try {
        const response = await axios.post(`/user/${page}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const postProduct = async (page) => {
    try {
        const response = await axios.post(`/product/${page}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
