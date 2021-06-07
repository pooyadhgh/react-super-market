import getProduct from '../services/getProduct';

export const addTocart = (id, amount) => async (dispatch, getState) => {
  try {
    const { data } = await getProduct(id);

    dispatch({
      type: 'CART_ADD_ITEM',
      paylod: {
        id: data._id,
        title: data.title,
        image: data.filename,
        price: data.price,
        amount: +amount,
      },
    });
  } catch (err) {
    console.log(err);
  }

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: 'CART_REMOVE_ITEM',
    paylod: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
