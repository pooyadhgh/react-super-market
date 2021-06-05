import getAllProducts from '../services/getAllProducts';
import getProduct from '../services/getProduct';

export const productListAction = () => async dispach => {
  try {
    const { data } = await getAllProducts();

    dispach({ type: 'PRODUCTS_REQUEST', payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const productPageAction = id => async dispach => {
  try {
    const { data } = await getProduct(id);

    dispach({ type: 'PRODUCT_PAGE_REQUEST', payload: data });
  } catch (err) {
    console.log(err);
  }
};
