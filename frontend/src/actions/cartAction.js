import getProduct from '../services/getProduct';

export const addTocart = id => async dispatch => {
  try {
    const { data } = await getProduct(id);

    dispatch({
      type: 'CART_ADD_ITEM',
      paylod: {
        id: data._id,
        title: data.title,
        image: data.filename,
        price: data.price,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
