import http from './http';

const getAllProducts = () => http.get('/api/products');

export default getAllProducts;
