import http from './http';

const getAllProducts = () => http.get('/products');

export default getAllProducts;
