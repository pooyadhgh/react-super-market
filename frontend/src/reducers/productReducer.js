export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCTS_REQUEST':
      return { products: action.payload };

    default:
      return state;
  }
};

export const productPageReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_PAGE_REQUEST':
      return { product: action.payload };

    default:
      return state;
  }
};
