import axios from 'axios';

export const getJewelery = () => {
    return axios.get(`https://fakestoreapi.com/products/category/jewelery`)
        .then(response => response.data);
};

