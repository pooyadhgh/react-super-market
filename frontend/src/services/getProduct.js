import http from './http';

const getProduct = id => http.get(`/api/products/${id}`);

export default getProduct;
